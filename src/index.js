import {Router,Routes} from './libs/router.js'
import Navbar from './components/Navbar/Navbar'

(()=>{
    const routeConfig = [
        new Routes({
        path:'detail',
        url: './views/src/views/detail.html'
    }),
    new Routes({
        path:'landing',
        url: './views/src/views/landing.html'
    },true)]
    
    new Router(routeConfig,'app');
})()