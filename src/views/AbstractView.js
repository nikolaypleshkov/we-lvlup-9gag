export default class {
    constructor(){

    }

    setTitle(title){
        document.title = title;
    }

    async getHtml(){
        return /*html*/`
            
        `;
    }
    getColor(data) {
        const userId = localStorage.getItem("token");
        const isLiked = data.includes(userId);
        if(isLiked) return "red";
        return "#999";
     }
}