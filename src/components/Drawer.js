// eslint-disable-next-line no-unused-vars
class Navbar extends HTMLElement {
  connectedCallback() {
    // eslint-disable-next-line spaced-comment
    this.innerHTML = /*html*/ `
        <div class="drawer-wrapper">
        <ul class="navbar-drawer mt-2">
            <li>
                <a class="burger">
                    <i class="bi bi-list"></i>
                </a> 
            </li>
            <li>
                <a class="logo">7GAG</a>
            </li>
        </ul>
        <div class="drawer-content">
            <div class="mini-card"> 
                <div class="card-content"> 
                    <h2>New to 7GAG?</h2>
                    <span class="info-text">Sign up now to see more content!</span>
                    <br />
                    <button class="btn __btn-primary" id="signUpDrawer">Sign up</button>
                </div>
            </div>
            <div class="trending-container"> 
                <ul class="trending-menu"> 
                    <li> 
                        <h6>&nbsp;&nbsp;&nbsp;7GAG</h6>
                    </li>
                    <li class="nav-item nav-sidebar">
                        <div> 
                            <i class="bi bi-house-fill"></i>
                            <a href="#">Hot</a>
                        </div>   
                        <a class="nav-link" href="#" id="navbarDropdown" data-bs-toggle="dropdown" aria-expanded="false">       
                            <i class="bi bi-three-dots"></i>
                        </a>
                        <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                            <li class="h-none"><a class="dropdown-item h-none" href="#">Top Posts</a></li>
                            <li><a class="dropdown-item h-none" href="#">Most Recent</a></li>
                        </ul>
                    </li>
                    <li class="nav-item"> 
                        <i class="bi bi-graph-up-arrow"></i>
                        <a href="/#trending" data-link>Trending</a>
                    </li>
                    <li class="nav-item"> 
                        <i class="bi bi-clock"></i>
                        <a href="/#fresh" data-link>Fresh</a>
                    </li>
                    <li class="nav-item"> 
                        <i class="bi bi-bar-chart-line-fill"></i>
                        <a href="#">Top</a>
                    </li>
                    <li class="nav-item nav-sidebar"> 
                        <div> 
                            <i class="bi bi-geo-alt-fill"></i>
                            <a href="#">Bulgaria 🇧🇬</a>
                        </div>
                        <a class="nav-link" href="#" id="navbarDropdown" data-bs-toggle="dropdown" aria-expanded="false">             
                            <i class="bi bi-three-dots"></i>
                        </a>
                        <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                            <li><a class="dropdown-item" href="#">Sign up or Login</a></li>
                        </ul>
                    </li>
                </ul>
            </div>
        </div>
    </div>
        `;
  }
}

customElements.define("app-drawer", Navbar);
