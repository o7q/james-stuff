document.addEventListener("DOMContentLoaded", () => {
    loadAudio();
    animate(getRandomBaseIdleAnimation());

    const backdrop = document.getElementById("backdrop");
    const backdrops = [
        "assets/images/backgrounds/space/space.gif",
        "assets/images/backgrounds/space/space2.gif",
        "assets/images/backgrounds/space/space3.gif",
        "assets/images/backgrounds/space/space4.gif",
        "assets/images/backgrounds/space/space5.gif"
    ];
    backdrop.src = backdrops[getRandomInt(0, backdrops.length)];

    document.querySelectorAll("*").forEach(element => {
        element.draggable = false;
    });

    setInterval(() => {
        tick();

        let randomAnimation = getRandomInt(0, 50000);

        if (randomAnimation < 8 && CAN_RANDOM_IDLE) {
            animate(getRandomBaseIdleAnimation());
        }
    }, 1);

    cursorInitListeners("../../common/assets/images/cursors");
});