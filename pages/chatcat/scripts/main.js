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

    setInterval(() => {
        tick();

        let randomAnimation = getRandomInt(0, 50000);

        if (randomAnimation < 8 && CAN_RANDOM_IDLE) {
            animate(getRandomBaseIdleAnimation());
        }

    }, 1);

    // wiggly finger cursor
    let cursorChangeTimeout;
    document.addEventListener("mousedown", (e) => {
        document.body.style.cursor = "url(\"../../common/assets/images/cursors/pointer_click.png\"), default";
        clearTimeout(cursorChangeTimeout);
    });

    document.addEventListener("mouseup", (e) => {
        document.body.style.cursor = "url(\"../../common/assets/images/cursors/pointer.png\"), default";

        cursorChangeTimeout = setTimeout(() => {
            document.body.style.cursor = "url(\"../../common/assets/images/cursors/default.png\"), default";
        }, 2000);
    });
});