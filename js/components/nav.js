class Nav extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        this.innerHTML = `
                <nav>
                    <a href="./index.html">Home</a>
                    <a href="./ibeelieve.html">I Bee-lieve Buttons</a>
                    <a href="./timer.html">20 Timer</a>
                </nav>
        `;
    }
}

customElements.define('nav-component', Nav);