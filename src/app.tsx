
import { Classifier } from "./isic/classifier";
import type { IClassifier } from "./isic/classifier";

export { App };


function App() {

	let m_body_el: HTMLElement;
	let m_classifier: IClassifier;

	return {
		Init,
		Run
	};


	function Init(): void {
		m_body_el = document.body || <div />;

		// The ISIC Rev.5 classifier is rendered right into <body>
		m_classifier = Classifier(m_body_el);
		m_classifier.Init();
	}

	async function Run(): Promise<void> {
		console.log("App:Run(): start");

		await m_classifier.Run();
	}
}
