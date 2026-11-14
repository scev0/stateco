
export { App };


function App() {

	let m_body_el: HTMLElement;

	return {
		Init,
		Run
	};


	function Init(): void {
		m_body_el = document.body || <div />;
	}

	async function Run(): Promise<void> {
		console.log("App:Run(): start");
	}
}
