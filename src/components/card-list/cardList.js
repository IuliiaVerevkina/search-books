import './cardList.css';
import { DivComponent } from "../../common/div-component";
import { CardItem } from '../card-item/cardItem';

export class CardList extends DivComponent {
	constructor(appState, parentState) {
		super();
		this.appState = appState;
		this.parentState = parentState;
	}

	render() {
		if (this.parentState.loading) {
			this.el.classList.add("card-loader");
			this.el.innerHTML = `
				<div class="loader">
  					<div class="loader-inner">
    						<label></label>
    						<label></label>
    						<label></label>
    						<label></label>
    						<label></label>
   						<label></label>
  					</div>
				</div>`;
			return this.el;
		}
		const cardGrid = document.createElement("div");
		cardGrid.classList.add("card-grid");
		this.el.append(cardGrid);
		this.parentState.list.map(card => {
			cardGrid.append(new CardItem(this.appState, card).render());
		})
		return this.el;
	}
}