import { InView } from "./in-view.js";

type JSXBase = JSX.IntrinsicElements extends {
	span: unknown;
}
	? JSX.IntrinsicElements
	: Record<string, Record<string, unknown>>;

interface Window {
	InView: typeof InView;
}
interface HTMLElementTagNameMap {
	"in-view": InView;
}
namespace JSX {
	interface IntrinsicElements {
		"in-view": JSXBase["span"] & Partial<Omit<InView, keyof HTMLElement>>;
	}
}

export default InView;
export * from "./in-view.js";
