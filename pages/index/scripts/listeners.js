function initListeners() {
    // remove menu text blur upon hover
    document.querySelectorAll(".menu-text__text").forEach(element => {
        function handleMenuTextHover() {
            element.classList.remove("menu-text__text--blur");
            element.removeEventListener("mouseenter", handleMenuTextHover);
        }

        element.addEventListener("mouseenter", handleMenuTextHover);
    });

    // show the switch buttons on hover
    function switchButtonShow() {
        if (DRAGGING) {
            return;
        }

        document.querySelectorAll(".james-text-switch-button").forEach(element => {
            element.classList.add("james-text-switch-button--show");
        });
    }
    function switchButtonHide() {
        document.querySelectorAll(".james-text-switch-button").forEach(element => {
            element.classList.remove("james-text-switch-button--show");
        });
    }
    document.querySelectorAll(".james-text-switch-button-reveal-area").forEach(element => {
        element.addEventListener("mouseenter", switchButtonShow);
        element.addEventListener("mouseleave", switchButtonHide);
    });

    // wiggly finger cursor
    let cursorChangeTimeout;
    document.addEventListener("mousedown", (e) => {
        document.body.style.cursor = "url(\"common/assets/images/cursors/pointer_click.png\"), default";
        clearTimeout(cursorChangeTimeout);
    });

    document.addEventListener("mouseup", (e) => {
        document.body.style.cursor = "url(\"common/assets/images/cursors/pointer.png\"), default";

        cursorChangeTimeout = setTimeout(() => {
            document.body.style.cursor = "url(\"common/assets/images/cursors/default.png\"), default";
        }, 2000);
    });
}