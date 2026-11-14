
import { Classifier } from "./isic/classifier";

export { App };


function App() {

	let m_body_el: HTMLElement;
	let m_classifier: ReturnType<typeof Classifier>;

	return {
		Init,
		Run
	};


	function Init(): void {
		m_body_el = document.body || <div />;

		// Интерактивный классификатор ISIC Rev.5 выводится прямо в <body>
		m_classifier = Classifier(m_body_el);
		m_classifier.Init();
	}

	async function Run(): Promise<void> {
		console.log("App:Run(): start");

		await m_classifier.Run();
	}
}
