import AbstractView from "./AbstractView";

export default class extends AbstractView{
    constructor(){
        super();
        this.setTitle("7GAG - Fresh Posts");
    }

    async getHtml(){
        return /*html*/`
            <h1>Fresh View</h1>
        `;
    }
}