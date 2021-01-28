class Navbar {
	private component: HTMLElement;
	private readonly transPosition: number = 300;

	constructor() {
		this.component = document.querySelector("nav")! as HTMLElement;
		this.setTransparency();
	}

	private setTransparency() {
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

class Banner {
	private readonly element: HTMLElement;
	private descriptionContainer: HTMLDivElement;
	public description: string;

	constructor(desc: string) {
		this.element = document.getElementById("banner")! as HTMLElement;
		this.descriptionContainer = this.element.querySelector(
			"#description"
		) as HTMLDivElement;

		this.description = desc;
		this.renderDescription();
	}

	private renderDescription() {
		const paragraph = this.descriptionContainer.querySelector(
			"p"
		)! as HTMLParagraphElement;
		paragraph.innerText = this.description;
	}
}

const navbar = new Navbar();

const msg =
	"Ofrecemos la más alta calidad en prótesis fijas y removibles, implantes dentales, endodoncias, coronas libres de metal. Nos preocupamos por la función y estética bucal.";

const header = new Banner(msg);
