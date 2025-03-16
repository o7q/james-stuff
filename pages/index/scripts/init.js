document.addEventListener("DOMContentLoaded", (e) => {
    initListeners();

    const background = document.getElementById("background");
    const backgrounds = [
        "common/assets/images/backgrounds/space/space.gif",
        "common/assets/images/backgrounds/space/space2.gif",
        "common/assets/images/backgrounds/space/space3.gif",
        "common/assets/images/backgrounds/space/space4.gif"
    ];
    if (background) {
        background.src = backgrounds[getRandomInt(0, backgrounds.length)];
    }

    document.querySelectorAll("*").forEach(element => {
        element.draggable = false;
    });

    spawnCat(1);

    function handleUpdate() {
        tick();

        for (let i = 0; i < CATS.length; i++) {
            CATS[i].update();
        }

        requestAnimationFrame(handleUpdate);
    }

    handleUpdate();
});