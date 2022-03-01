class Drawer extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = /*html*/ `
            <style> 
                .drawer-wrapper{
                    position: absolute;
                    height: 100vh;
                    width: 290px;
                    overflow-y: scroll;
                    scrollbar-width: none;
                }
                .drawer-wrapper::-webkit-scrollbar {
                    display: none;
                }
                .drawer-content{
                    margin-top: 25%;
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
                .mini-card{
                    border: 1px solid #999;
                    border-radius: 10px;
                    margin: 20px;
                }
                .card-content{
                    display: flex;
                    flex-direction: column;
                    padding: 10px;
                }
                .card-content h2{
                    font-size: 20px;
                }
                .card-content h2, span{
                    width: 100%;
                    text-align: center;
                }
                .trending-menu h6{
                    color: #999;
                }
                .nav-sidebar{
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                }
                .trending-menu li:hover{
                    background-color: rgba(0,0,0,.06);
                }
                .trending-menu li{
                    padding: 5px;
                    cursor: pointer;
                }
            </style>
            <div class="drawer-wrapper"> 
                <div class="drawer-content">
                    <div class="mini-card"> 
                        <div class="card-content"> 
                            <h2>New to 9GAG?</h2>
                            <span class="info-text">Sign up now to see more content!</span>
                            <br />
                            <button class="btn __btn-primary">Sing up</button>
                        </div>
                    </div>
                    <div class="trending-container"> 
                        <ul class="trending-menu"> 
                            <li class="nav-item"> 
                                <h6>&nbsp;&nbsp;&nbsp;9GAG</h6>
                            </li>
                            <li class="nav-item nav-sidebar">
                                <div> 
                                    <i class="bi bi-house-fill"></i>
                                    <a href="#">Hot</a>
                                </div>   
                                <a class="nav-link" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">       
                                    <i class="bi bi-three-dots"></i>
                                </a>
                                <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                                    <li><a class="dropdown-item" href="#">Top Posts</a></li>
                                    <li><a class="dropdown-item" href="#">Most Recent</a></li>
                                </ul>
                            </li>
                            <li class="nav-item"> 
                                <i class="bi bi-graph-up-arrow"></i>
                                <a href="#">Trending</a>
                            </li>
                            <li class="nav-item"> 
                                <i class="bi bi-clock"></i>
                                <a href="#">Fresh</a>
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
                                <a class="nav-link" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">             
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

customElements.define("app-drawer-component", Drawer);
