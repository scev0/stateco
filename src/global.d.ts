
//
// Intrinsic elements list for JSX compilation
//
declare namespace JSX {
	interface IntrinsicElements {
		a: Attrs;
		area: Attrs;
		b: Attrs;
		body: Attrs;
		br: Attrs;
		button: Attrs;
		caption: Attrs;
		data: Attrs;
		details: Attrs;
		div: Attrs;
		form: Attrs;
		header: Attrs;
		hr: Attrs;
		html: Attrs;
		iframe: Attrs;
		img: Attrs;
		input: Attrs;
		fieldset: Attrs;
		label: Attrs;
		legend: Attrs;
		link: Attrs;
		menu: Attrs;
		menuitem: Attrs;
		ol: Attrs;
		optgroup: Attrs;
		option: Attrs;
		pivture: Attrs;
		pre: Attrs;
		section: Attrs;
		select: Attrs;
		small: Attrs;
		span: Attrs;
		strong: Attrs;
		style: Attrs;
		summary: Attrs;
		table: Attrs;
		thead: Attrs;
		tbody: Attrs;
		td: Attrs;
		textarea: Attrs;
		tr: Attrs;
		u: Attrs;
		ul: Attrs;
		li: Attrs;
	}

	interface Attrs {
		[name: string]: AttrValue;
	}
	
	type AttrValue = string
					 | number
					 | boolean
					 | MapStringToString
					 | NonAwaitableEventHandler
					 | NonAwaitableHandler
					 | undefined;

	interface NonAwaitableEventHandler {
	 	(event: KeyboardEvent & MouseEvent & DragEvent): { then?: void } | void;
	}
	interface NonAwaitableHandler {
	 	(): { then?: void } | void;
	}
}

// This declaration tells TypeScript that any import ending with .png
// should be treated as a module that exports a string value
// (which will be the URL or path to the image as processed by Webpack)
declare module "*.png" {
	const value: string;
	export default value;
}
declare module "*.ico" {
	const value: string;
	export default value;
}

type MapStringToString = { [key: string]: string };
