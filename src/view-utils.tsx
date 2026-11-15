
export { Progressbar, Resizer, InputWithTitle };
export type { IProgressbar, IResizer, IInputWithTitle };
export { ShowHTMLElement, HideHTMLElement };


interface IProgressbar extends HTMLElement {
	Show: () => void;
	Hide: () => void;
	SetProgress: (progress: number, text: string) => void;
}

function Progressbar(): IProgressbar {
	let m_text_el: HTMLElement;
	let m_slider_el: HTMLElement;
	const m_elem =
	<div className="progressbar hidden">
		{ m_text_el = <div className="progressbar-text" /> }
		{ m_slider_el = <div className="progressbar-slider" /> }
	</div>;

	m_elem.Show = Show;
	m_elem.Hide = Hide;
	m_elem.SetProgress = SetProgress;

	return m_elem;


	function Show(): void {
		ShowHTMLElement(m_elem);
	}

	function Hide(): void {
		HideHTMLElement(m_elem);
	}

	function SetProgress(progress: number, text: string): void {
		progress = Math.round(Math.min(100, Math.max(0, progress)));
		m_slider_el.style.width = progress.toString() + "%";
		m_text_el.textContent = text;
	}
}


interface IResizer extends HTMLElement {
	SetLayoutAndLeftPanelElems: (layout_el: HTMLElement, left_panel_el: HTMLElement) => void;
}

function Resizer(props: {
					min_left_width: number, // minimum width of the left column, px
					min_right_width: number, // minimum width of the right column, px
				}): IResizer
{

	const m_elem =
		<div className="resizer" aria-orientation="vertical"
			title="Потяните, чтобы изменить ширину колонки"
		/>;
	m_elem.setAttribute("role", "separator");

	let m_start_x = 0;       // cursor position at the start of dragging
	let m_start_width = 0;   // width of the left column at the start of dragging

	let m_layout_el: HTMLElement | null = null;
	let m_left_panel_el: HTMLElement | null = null;

	m_elem.addEventListener("pointerdown", _OnPointerDown);
	m_elem.addEventListener("pointermove", _OnPointerMove);
	m_elem.addEventListener("pointerup", _StopResize);
	m_elem.addEventListener("pointercancel", _StopResize);

	m_elem.SetLayoutAndLeftPanelElems = SetLayoutAndLeftPanelElems;

	return m_elem;


	function SetLayoutAndLeftPanelElems(layout_el: HTMLElement, left_panel_el: HTMLElement): void {
		m_layout_el = layout_el;
		m_left_panel_el = left_panel_el;
	}

	function _OnPointerDown(event: PointerEvent): void {
		if(m_left_panel_el === null) {
			return;
		}

		m_start_x = event.clientX;
		m_start_width = m_left_panel_el.getBoundingClientRect().width;

		// Pointer events keep going to the splitter even when the cursor leaves it
		m_elem.setPointerCapture(event.pointerId);
		m_elem.classList.add("dragging");
		document.body.classList.add("resizing");
		event.preventDefault();
	}

	function _OnPointerMove(event: PointerEvent): void {
		if(m_layout_el === null) {
			return;
		}
		if(!m_elem.hasPointerCapture(event.pointerId)) {
			return;
		}

		// Upper limit: the right column must not become narrower than its minimum
		const max_width = Math.max(
			props.min_left_width,
			m_layout_el.clientWidth - m_elem.offsetWidth - props.min_right_width
		);
		const width = m_start_width + (event.clientX - m_start_x);
		const clamped = Math.min(Math.max(width, props.min_left_width), max_width);

		m_layout_el.style.setProperty("--left-col", `${clamped}px`);
	}

	// End of dragging
	function _StopResize(): void {
		m_elem.classList.remove("dragging");
		document.body.classList.remove("resizing");
	}

}


interface IInputWithTitle extends HTMLInputElement {
	GetValue: () => string;
}

function InputWithTitle(props: {
							className?: string;
							value: string,
							title: string,
							is_currency_input?: boolean,
							onchange?: () => void
						}): IInputWithTitle
{
	let m_value = props.value;
	let m_input_el: HTMLInputElement;
	let m_title_el: HTMLElement;
	const m_elem =
	<div className={ "input-with-title" + (props.className ? " " + props.className : "") }>
		{ m_title_el = <div className="title">{ props.title }</div> }
		{ m_input_el =
		<input type="text" className="input" value={ m_value }
			onchange={ _OnInputChange }
			onfocus={ _OnInputFocus }
			onblur={ _OnInputBlur }
		/> }
	</div>;

	if(props.is_currency_input) {
		_SetCurrencyValue();
	}

	m_elem.GetValue = GetValue;

	return m_elem;


	function GetValue(): string {
		return m_value;
	}

	function _OnInputChange(): void {
		m_value = m_input_el.value;
		props.onchange && props.onchange();
	}

	function _OnInputFocus(): void {
		if(props.is_currency_input) {
			m_input_el.value = m_value;
		}
	}

	function _OnInputBlur(): void {
		if(props.is_currency_input) {
			_SetCurrencyValue();
		}
	}

	function _SetCurrencyValue(): void {
		const float_value = parseFloat(m_value);
		if(!isNaN(float_value)) {
			const currency_formatter = new Intl.NumberFormat("en-US");
			m_input_el.value = currency_formatter.format(float_value);
		}
	}
}


function ShowHTMLElement(elem: HTMLElement): void {
	elem.classList.remove("hidden");
}

function HideHTMLElement(elem: HTMLElement): void {
	elem.classList.add("hidden");
}
