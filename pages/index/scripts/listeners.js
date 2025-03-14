function initListeners() {
    document.querySelectorAll(".menu-text__text").forEach(element => {
        function handleMenuTextHover() {
            element.classList.remove("menu-text__text--blur");
            element.removeEventListener("mouseenter", handleMenuTextHover);
        }

        element.addEventListener("mouseenter", handleMenuTextHover);
    });

    function switchButtonShow() {
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
}