interface VideoControlsElement extends HTMLElement {
    hide: () => void;
    show: (includeOverlay?: boolean) => void;
    setVideoPlaying: (isPlaying: boolean) => void;
    setMuted: (isMuted: boolean) => void;
    setFullScreenActive: (isActive: boolean) => void;
    setHasStarted: (hasStarted: boolean) => void;
    setLoading: (isLoading: boolean) => void;
    setHasError: () => void;
    updateProgress: (
        currentTime: number,
        duration: number,
        bufferedEnd?: number
    ) => void;
    hideOverlay: () => void;
    showOverlay: () => void;
}

interface HTMLElementEventMap {
    'progress-change': CustomEvent<{ percentage: number }>;
}

type VideoControlsType = 'none' | 'simple' | 'full';

interface VideoPlayerProps {
    src: string;
    type?: ImageType;
    caption?: string;
    isMuted?: boolean;
    isLooping?: boolean;
    isAutoPlaying?: boolean;
    controlsType?: VideoControlsType;
    poster?: ImageMetadata;
    shouldPreload?: boolean;
    width?: number;
    height?: number;
}

interface HTMLVideoElement {
    webkitEnterFullScreen?: () => void;
    webkitExitFullScreen?: () => void;
}
