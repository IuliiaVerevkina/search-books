import { DivComponent } from "../../common/div-component";
import "./header.css"

export class Header extends DivComponent {
	constructor(appState) {
		super();
		this.appState = appState;
	}

	render() {
		this.el.classList.add("header");
		this.el.innerHTML = `
		<div class="header-logo">
			<a href="#">
				<img src="./static/logo.svg" alt="logo">
			</a>
		</div>
		<nav class="header-nav">
			<ul>
				<li><a href="#" class="active"><img src="./static/search.svg" alt="search book"> Book Search</a></li>
				<li>
					<a href="#favorites"><img src="./static/favorites.svg" alt="favorites book">Favorites
						<div class="caunter">${this.appState.favorites.length}</div>
					</a>
				</li>
			</ul>
		</nav>
		`;
		return this.el;
	}
}