class Navs extends HTMLElement{
    connectedCallback(){
        this.innerHTML = /*html*/`
            <nav class="fixed-top">
                <ul class="navmenu"> 
                    <li class="nav-btn">Hot</li>
                    <li class="nav-btn">Trending</li>
                    <li class="nav-btn">Fresh</li>
                    <li class="nav-btn">Top</li>
                </ul> 
            </nav>
        `;
    }
}

customElements.define("app-navs", Navs);