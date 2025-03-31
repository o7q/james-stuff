let CURSOR_ROOT = "";

function cursorInitListeners(root) {
    // wiggly finger cursor
    let cursorChangeTimeout;
    document.addEventListener("mousedown", (e) => {
        document.body.style.cursor = `url(\"${root}/pointer_click.png\"), default`;
        clearTimeout(cursorChangeTimeout);
    });

    document.addEventListener("mouseup", (e) => {
        document.body.style.cursor = `url(\"${root}/pointer.png\"), default`;

        cursorChangeTimeout = setTimeout(() => {
            document.body.style.cursor = `url(\"${root}/default.png\"), default`;
        }, 2000);
    });

    CURSOR_ROOT = root;
}

function cursorHandleHover() {
    if (CURSOR_ROOT != "") {
        document.body.style.cursor = `url(\"${CURSOR_ROOT}/pointer.png\"), default`;
    }
}

function cursorHandleUnhover() {
    document.body.style.cursor = "";
}