class Navbar {
	private component: HTMLElement;
	private readonly transPosition: number = 200;

	constructor() {
		this.component = document.querySelector("nav")! as HTMLElement;
		this.setTransparency();
	}

	setTransparency() {
		window.addEventListener("scroll", (_e: Event) => {
			if (window.scrollY > this.transPosition) {
				this.component.classList.add("blur");
			} else {
				this.component.classList.contains("blur") &&
					this.component.classList.remove("blur");
			}
		});
	}
}

const navbar = new Navbar();
