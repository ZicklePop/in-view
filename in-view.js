// @ts-self-types="./in-view.d.ts"
class InView extends HTMLElement {
	static tagName = "in-view";
	observer;

	static register(
		tagName = InView.tagName,
		registry = globalThis.customElements,
	) {
		registry?.define(tagName, InView);
	}

	get options() {
		return {
			rootMargin: this.getAttribute("data-rootMargin") || "0px",
			threshold: Number.parseFloat(this.getAttribute("data-threshold") || "1"),
		};
	}

	get templateEl() {
		return this.querySelector("template");
	}

	connectedCallback() {
		this.observer = new IntersectionObserver(
			this.callback.bind(this),
			this.options,
		);
		this.observer.observe(this);
	}

	disconnectedCallback() {
		this.observer?.unobserve(this);
	}

	callback(entries, observer) {
		for (const entry of entries) {
			if (entry.isIntersecting) {
				if (this.templateEl) {
					this.appendChild(this.templateEl.content?.cloneNode(true));
				}
				observer.unobserve(this);
			}
		}
	}
}
InView.register();

export { InView };
