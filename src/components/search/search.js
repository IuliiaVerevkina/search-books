import './search.css';
import { DivComponent } from "../../common/div-component";

export class Search extends DivComponent {
	constructor(state) {
		super();
		this.state = state;
	}
	
	search() {
		const value = this.el.querySelector(".search-input").value;
		this.state.searchQuery = value;
	}

	render() {
		this.el.classList.add("search");
		this.el.innerHTML = `
		<div class="search-wrapper">
			<input type="text" placeholder="Find a book or author...." class="search-input" value="${this.state.searchQuery}">
			<img src="./static/search.svg" alt="search icon">
		</div>
		<button class="button"><img src="./static/search-button.svg" alt="button search"></button>
		`;
		this.el.querySelector(".button").addEventListener("click", this.search.bind(this));
		this.el.querySelector(".search-input").addEventListener("keydown", (e) => {
			if(e.key === "Enter") {
				this.search();
			}
		})
		return this.el;
	}
}