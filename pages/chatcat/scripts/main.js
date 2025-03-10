document.addEventListener("DOMContentLoaded", () => {
    loadAudio();
    animate(getRandomBaseIdleAnimation());

    // speak(
    //     "Hey! I'm Sly!",
    //     "speak/anim_speak_happy",
    //     "speak/audio_speak_happy",
    //     "idle/anim_idle_happy",
    //     20
    // );

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
});