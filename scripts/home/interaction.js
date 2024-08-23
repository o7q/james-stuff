let JAME_STUFF_CLICKED = false;

function jamestuffClick() {
    const jameTexts = document.querySelectorAll(".jame-text__text");
    jameTexts.forEach(element => {
        element.classList.remove("jame-text__text--first");
        element.classList.remove("jame-text__text--second");
        element.classList.remove("jame-text__text--transition");
        element.classList.add("jame-text__text--move");
        element.classList.add("jame-text__text--transition--clicked");
    });

    const jameText1 = document.getElementById("jame-text__text--first");
    const jameText2 = document.getElementById("jame-text__text--second");

    jameText1.classList.add("jame-text__text--first--clicked");
    jameText2.classList.add("jame-text__text--second--clicked");

    const menuText = document.getElementById("menu-text");
    menuText.style.opacity = 1;
    menuText.style.pointerEvents = 'auto';

    JAME_STUFF_CLICKED = true;
}