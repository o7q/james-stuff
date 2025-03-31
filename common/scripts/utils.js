function delay(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

function changeFavicon(favicon) {
    // from https://stackoverflow.com/a/260876
    var link = document.querySelector("link[rel~='icon']");
    if (!link) {
        link = document.createElement("link");
        link.rel = "icon";
        document.head.appendChild(link);
    }
    link.href = favicon;
}

function changeTitle(text) {
    document.title = text;
}

function openPage(url, mode) {
    switch (mode) {
        case "new":
            window.open(url);
            break;
        case "replace":
            window.location.assign(url);
            break;
    }
}

function pageTransition(url, mode) {
    document.body.classList.add("bodyFadeOut");

    setTimeout(() => {
        document.body.classList.remove("bodyFadeOut");
        openPage(url, mode);
    }, 500);
}

function getElementPosition(element) {
    const rect = element.getBoundingClientRect();
    return {
        x: rect.left + window.scrollX,
        y: rect.top + window.scrollY
    };
}

// hardware acceleration detector forked from:
// https://stackoverflow.com/a/77170999
function isHardwareAccelerationEnabled() {
    const hasHWA = (() => {
        // create a test function for both "default" drawing and forced software
        const test = (force = false) => {
            // Firefox (at lest on macOS) doesn't accelerate OffscreenCanvas
            const canvas = document.createElement("canvas");
            // willReadFrequently will force software rendering
            const ctx = canvas.getContext("2d", { willReadFrequently: force });
            ctx.moveTo(0, 0);
            ctx.lineTo(120, 121); // HWA is bad at obliques
            ctx.stroke();
            return ctx.getImageData(0, 0, 200, 200).data.join();
        };
        // check that both return different results
        return test(true) !== test(false);
    })();

    return hasHWA;
}
//

function isMobileBrowser() {
    // from https://developer.mozilla.org/en-US/docs/Web/API/Screen/orientation
    const isMobile = screen.orientation.type !== "landscape-primary";
    return isMobile;
}