class Navbar extends HTMLElement{
    constructor(){
        super();
    }

    connectedCallback(){
        this.innerHTML =/*html*/ `
            <header> 
                <nav> 
                    <li>Shuffle</li>
                    <li>Get App</li>
                    <li>Donate</li>
                    <li>Crypto</li>
                    <li>Leg Selfie</li>
                    <li>Chat</li>
                    <li>My Workplace</li>
                </nav>
            </header>
        `;
    }
}

customElements.define("navbar-component", Navbar);