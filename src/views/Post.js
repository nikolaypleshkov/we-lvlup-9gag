import AbstractView from "./AbstractView";

export default class extends AbstractView{
    constructor(){
        super();
        this.setTitle("7GAG - Post Meme");
    }

    async getHtml(){
        return /*html*/`
            <h1>Post View</h1>
        `;
    }
}