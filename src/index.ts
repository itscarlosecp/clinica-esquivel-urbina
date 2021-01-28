class Navbar {
	private component: HTMLElement;
	private readonly transPosition: number = 300;

	constructor() {
		this.component = document.querySelector("nav")! as HTMLElement;
		this.setTransparency();
	}

	setTransparency() {
		window.addEventListener("scroll", (_e: Event) => {
			if (window.scrollY > this.transPosition) {
				this.component.classList.remove("bg-white");
				this.component.classList.add("bg-transparent");
			} else if (this.component.classList.contains("bg-transparent")) {
				this.component.classList.remove("bg-transparent");
				this.component.classList.add("bg-white");
			}
		});
	}
}

const navbar = new Navbar();
