window.onload = function () {
    configureElementListeners();

    document.querySelectorAll('.menu-text__text').forEach(element => {
        function handleHover() {
            if (!JAME_STUFF_CLICKED) {
                return;
            }
            element.classList.remove('menu-text__text--blur');
            element.removeEventListener('mouseover', handleHover);
        }

        element.addEventListener('mouseover', handleHover);
    });

    const background = document.getElementById("background");
    const backgrounds = [
        "images/backgrounds/space/space.gif",
        "images/backgrounds/space/space2.gif",
        "images/backgrounds/space/space3.gif",
        "images/backgrounds/space/space4.gif",
        "images/backgrounds/space/space5.gif"
    ];
    background.src = backgrounds[getRandomInt(0, backgrounds.length)];

    const jameTexts = document.querySelectorAll(".jame-text__text");
    jameTexts.forEach(element => {
        element.classList.add("jame-text__text--transition");
    });

    spawnCats(1);

    setInterval(() => {
        tick();

        for (let i = 0; i < CATS.length; i++) {
            CATS[i].update();
        }
    }, 1);


    console.log("Hardware Acceleration Enabed:", hardwareAccelerationEnabled());
};