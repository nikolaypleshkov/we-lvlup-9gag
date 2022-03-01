class Navbar extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = /*html*/ `
            <style> 
                .__navbar-wrapper{
                    min-width: 100%;
                    z-index: 69;
                    position: fixed;
                    border-bottom: 1px solid rgba(0, 0, 0, .1);
                    background: #fff;
                }
                .__navbar-container{
                    height: 58px;
                }
                .__navbar-menu{
                    display: flex;
                    align-items: center;
                    height: 100%;
                }
                .bi-list{
                    font-size: 25px;
                    margin-left: 20px;
                    border-radius: 50%;
                }
                .navbar-nav{
                    flex-direction: row !important;
                }
                a{
                    color: #000 !important;
                    text-decoration: none !important;
                    font-size: 14px;
                    cursor: pointer;
                }
                .navbar-nav > li {
                    margin-left: 1rem;
                }
                .__btn-primary{
                    background-color: #07f;
                    color: #fff;
                    font-weight: 700;
                    border-radius: 30px;
                }
                .__btn-primary:hover{
                    color: #fff;
                    background-color: #016eeb;
                }
                .__btn-secondary{
                    color: #999;
                    font-weight: 700;
                }
                .bi-chat-right-fill, .bi-search{
                    color: #999;
                    cursor: pointer;
                }
                .bi{
                    border-radius: 50%;
                    padding: 10px;
                    cursor: pointer;
                }
                .bi:hover{
                    background-color: #99999929;
                }
                .__right-menu{
                    position: absolute;
                    right: 10px;
                }
                .__navbar-menu-right{
                    display: flex;
                    align-items: center;
                    height: 100%;
                }
                .dropdown-menu{
                    top: 12px !important;
                    border-radius: 10px !important;
                    min-width: 18rem !important;
                }
                .__navbar-menu-right > li { 
                    margin-left: 1rem;
                }
                .search-dropdown{
                    padding: 10px;
                }
            </style>
            <header class="__navbar-wrapper"> 
                <div class="__navbar-container"> 
                    <nav class="__navbar-menu"> 
                        <a class="burger"> 
                            <i class="bi bi-list"></i>
                        </a>
                        <ul class="navbar-nav">
                            <li class="nav-item"> 
                                <a class="logo">9GAG</a> 
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
                                        <button class="btn __btn-secondary wave">Login</button> 
                                    </li>
                                    <li class="nav-item">
                                        <button class="btn __btn-primary">Sing up</button>
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

customElements.define("app-navbar-component", Navbar);
