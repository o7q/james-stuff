document.addEventListener("DOMContentLoaded", (e) => {
    const background = document.getElementById("background");
    const backgrounds = [
        "../../common/assets/images/backgrounds/space/space.gif",
        "../../common/assets/images/backgrounds/space/space2.gif",
        "../../common/assets/images/backgrounds/space/space3.gif",
        "../../common/assets/images/backgrounds/space/space4.gif"
    ];
    if (background) {
        background.src = backgrounds[getRandomInt(0, backgrounds.length)];
    }
});