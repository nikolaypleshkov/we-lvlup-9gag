import AbstractView from "./AbstractView";

export default class extends AbstractView{
    constructor(){
        super();
        this.setTitle("7GAG - Home");
    }

    async getHtml(){
        return /*html*/`
            <div id="memeContainer"> 
            </div>
        `;
    }
}