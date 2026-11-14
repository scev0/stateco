
export { Resizer };


const MIN_LEFT_WIDTH = 280;    // минимальная ширина левой колонки, px
const MIN_RIGHT_WIDTH = 290;   // минимальная ширина правой колонки, px (как в CSS)


/**
 * Изменение ширины левой колонки: тянем разделитель мышью (или пальцем) с зажатой кнопкой.
 * Ширина записывается в CSS-переменную --left-col элемента |layout_el|.
 *
 * @param layout_el      контейнер с тремя колонками (сетка)
 * @param resizer_el     разделитель между колонками
 * @param left_panel_el  левая колонка (дерево классификатора)
 */
function Resizer(layout_el: HTMLElement, resizer_el: HTMLElement, left_panel_el: HTMLElement) {

	let m_start_x = 0;       // положение курсора в начале перетаскивания
	let m_start_width = 0;   // ширина левой колонки в начале перетаскивания

	return {
		Init
	};


	function Init(): void {
		resizer_el.addEventListener("pointerdown", OnPointerDown);
		resizer_el.addEventListener("pointermove", OnPointerMove);
		resizer_el.addEventListener("pointerup", StopResize);
		resizer_el.addEventListener("pointercancel", StopResize);
	}

	function OnPointerDown(event: PointerEvent): void {
		m_start_x = event.clientX;
		m_start_width = left_panel_el.getBoundingClientRect().width;

		// События мыши идут на разделитель, даже если курсор ушёл в сторону
		resizer_el.setPointerCapture(event.pointerId);
		resizer_el.classList.add("dragging");
		document.body.classList.add("resizing");
		event.preventDefault();
	}

	function OnPointerMove(event: PointerEvent): void {
		if(!resizer_el.hasPointerCapture(event.pointerId)) {
			return;
		}

		// Верхняя граница: правая колонка не должна стать уже минимальной
		const max_width = Math.max(
			MIN_LEFT_WIDTH,
			layout_el.clientWidth - resizer_el.offsetWidth - MIN_RIGHT_WIDTH
		);
		const width = m_start_width + (event.clientX - m_start_x);
		const clamped = Math.min(Math.max(width, MIN_LEFT_WIDTH), max_width);

		layout_el.style.setProperty("--left-col", `${clamped}px`);
	}

	// Завершение перетаскивания
	function StopResize(): void {
		resizer_el.classList.remove("dragging");
		document.body.classList.remove("resizing");
	}
}
