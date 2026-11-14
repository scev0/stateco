
export { JSXCreateElement };


/**
 * JSX render function
 * 
 * @param tag         HTMLElement tag name or callback
 * @param attributes  HTMLElement attributes as a {name: value} map
 * @param children    Child HTMLElement-s
 */
function JSXCreateElement(tag: string | ((attributes: MapStringToString) => any),
                          attributes: MapStringToString,
                          ...children: any[]): any
{
    if(typeof(tag)==="function") {
        // |tag| is a callback function, call it with |attributes|
        return tag(attributes);

    } else if(typeof(tag)==="string") {
        // |tag| is a tag name string
        const element = document.createElement(tag);

        for(const name in attributes) {
            if(!Object.prototype.hasOwnProperty.call(attributes, name)) {
                continue;
            }
            const value: string = attributes[name];
            if(name.startsWith("aria-") || name.startsWith("data-")) {
                element.setAttribute(name, value);

            } else if(name === "style") {
                Object.assign(element.style, value);

            } else {
                (element as any)[name] = value;
            }
        }

        if(children) {
            children.forEach((child: any) => {
                if(child instanceof Array) {
                    // Array of HTML elements passed as  element.
                    // Example:
                    // <div>
                    //      {element}
                    // </div>
                    if(child.length!==0) {
                        child.forEach((el: any) => {
                            element.appendChild(el);
                        });
                    }

                } else if (typeof(HTMLElement)!=="undefined" && (child instanceof HTMLElement)) {
                    element.appendChild(child);

                } else if (typeof(Element)!=="undefined" && (child instanceof Element)) {
                    element.appendChild(child);

                } else if(typeof(child)==="string") {
                    const text_node = document.createTextNode(child);
                    element.appendChild(text_node);

                } else if(typeof child==="boolean") {
                    // noop

                } else if(child===null) {
                    // null

                } else {
                    console.log("!!! JSX: unknown type", typeof(child), child);
                }
            });
        }

        return element;

    } else {
        console.log("!!! JSX: wrong tag type", typeof(tag), tag);
    }
}
