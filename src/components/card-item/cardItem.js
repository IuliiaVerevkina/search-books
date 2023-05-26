import './cardItem.css';
import { DivComponent } from "../../common/div-component";

export class CardItem extends DivComponent {
	constructor(appState, cardState) {
		super();
		this.appState = appState;
		this.cardState = cardState;
	}

	#addFromFavorites() {
		this.appState.favorites = [...this.appState.favorites, this.cardState];
	}

	#deleteFromFavorites() {
		this.appState.favorites = this.appState.favorites.filter(item => {
			return item.key !== this.cardState.key;
		});
	}

	render() {
		this.el.classList.add("card");
		const existInFavorites = this.appState.favorites.find(b => {
			return b.key === this.cardState.key;
		});
		let imgBook = `https://covers.openlibrary.org/b/olid/${this.cardState.cover_edition_key}-M.jpg`;
		if (imgBook === "https://covers.openlibrary.org/b/olid/undefined-M.jpg") {
			imgBook =  "./static/undefined.png"
		}
		this.el.innerHTML = `
		<div class="card-img">
			<img src="${imgBook}" alt = "${this.cardState.title}" />
		</div>
		<div class="card-info">
			<div class="card-tag">${this.cardState.subject ? this.cardState.subject[0] : ""}</div>
			<div class="card-name">${this.cardState.title.slice(0, 45) }</div>
			<div class="card-author">${this.cardState.author_name }</div>
			<div class="card-footer">
				<button class="card-btn ${existInFavorites ? 'btn-active' : ' '}">
					${existInFavorites
						? '<img src="./static/favorites.svg" alt="favorite" />'
						: '<img src="./static/favorite-white.svg" alt="favorite" />'
					}
				</button>
			</div>
		</div>
		`;
		console.log(this.cardState.title)
		if(existInFavorites) {
			this.el.querySelector("button").addEventListener("click", this.#deleteFromFavorites.bind(this));
		} else {
			this.el.querySelector("button").addEventListener("click", this.#addFromFavorites.bind(this));
		}
		return this.el;
	}
}