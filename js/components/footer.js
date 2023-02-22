class Footer extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        this.innerHTML = `
            <footer>
                <h3>Created and Maintained by Queen HoneyBee</h3>
                <a href="https://github.com/melissa-24/IBeelieveAndTimer">Source Code</a>
                <a href="https://melissa-longenberger.com">Portfolio</a>
                <a href="https://blog.melissa-longenberger.com">Blog</a>
            </footer>
        `;
    }
}

customElements.define('footer-component', Footer);