interface SlideshowControlsElement extends HTMLElement {
    setActiveSlide: (slideIndex: number) => void;
}

interface SlideshowPipsElement extends HTMLElement {
    setActiveSlide: (slideIndex: number) => void;
}

interface SlideshowCaptionsElement extends HTMLElement {
    setActiveSlide: (slideIndex: number) => void;
}

interface HTMLElementEventMap {
    'pip-press': CustomEvent<{ pipIndex: number }>;
}