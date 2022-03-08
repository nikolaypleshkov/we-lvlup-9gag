// eslint-disable-next-line no-unused-vars
class Navbar extends HTMLElement {
    connectedCallback() {
        // eslint-disable-next-line spaced-comment
        this.innerHTML = /*html*/ `
            <header class="__navbar-wrapper">
                <div class="__navbar-container">
                    <nav class="__navbar-menu">
                        <div class="btn burger">
                            <i class="bi bi-list"></i>
                        </div>
                        <ul class="navbar-nav">
                            <li class="nav-item">
                                <a class="logo">7GAG</a>
                            </li>
                            <li>
                                 <a class="#">🔀  Shuffle</a>
                            </li>
                            <li>
                                <a class="#">📱 Get App</a>
                            </li>
                            <li>
                                <a class="#">🔞</a>
                            </li>
                            <li>
                                <a class="#">Donate</a>
                            </li>
                            <li>
                                <a class="#">🇺🇦</a>
                            </li>
                            <li>
                                <a class="#">Crypto</a>
                            </li>
                            <li>
                                <a class="#">ಠ_ಠ</a>
                            </li>
                        </ul>
                        <div class="d-flex __right-menu">
                            <div class="__btn-group">
                                <ul class="__navbar-menu-right">
                                    <li class="nav-item dropdown">
                                        <a class="nav-link" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                             <i class="bi bi-search"></i>
                                        </a>
                                        <ul class="dropdown-menu search-dropdown" aria-labelledby="navbarDropdown">
                                            <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search">
                                        </ul>
                                    </li>
                                    <li class="nav-item">
                                        <i class="bi bi-chat-right-fill"></i>
                                    </li>
                                     <li class="nav-item">
                                        <button class="btn __btn-secondary" id="signIn">Login</button>
                                    </li>
                                    <li class="nav-item">
                                        <button class="btn __btn-primary" id="signUp">Sign up</button>
                                    </li>
                                    <li class="nav-item dropdown">
                                        <a class="nav-link" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                             <i class="bi bi-chevron-down"></i>
                                        </a>
                                        <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                                            <li><a class="dropdown-item" href="#">Sign up or Login</a></li>
                                             <li><a class="dropdown-item" href="#">Manage consent</a></li>
                                            <li><a class="dropdown-item" href="#">Dark Mode</a></li>
                                            <li><a class="dropdown-item" href="#">Download 9GAG app</a></li>
                                            <li><a class="dropdown-item" href="#">Help center</a></li>
                                            <li><a class="dropdown-item" href="#">Report problems</a></li>
                                        </ul>
        
                                    </li>
                                </ul>
                             </div>
                        </div>
                    </nav>
                </div>
            </header>
        `;
    }
}

customElements.define("app-navbar", Navbar);
