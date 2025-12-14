class Menu extends HTMLElement {
    constructor() {
	super();
	this.attachShadow({ mode: "open" });
    }

    async connectedCallback() {
	const response = await fetch("./menu.tpl.html");
	const html = await response.text();
	this.shadowRoot.innerHTML = html;
    }
}
customElements.define("app-menu", Menu);
