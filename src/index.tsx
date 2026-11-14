
import "./index.html";
import "./index.css";
import "./favicon.ico";
import "./robots.txt";

import { App } from "./app";


document.addEventListener("DOMContentLoaded", () => {

	const app = App();
	app.Init();
	app.Run();

});
