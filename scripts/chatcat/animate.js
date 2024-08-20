let CAN_RANDOM_IDLE = true;

function animate(animation) {
    const cat = document.getElementById("catBackground");

    if (cat) {
        cat.src = `../images/animations/cat/chat/${animation}/12.gif`;
    }
}

function getRandomBaseIdleAnimation() {
    const BASE_IDLE_ANIMATIONS = [
        "idle/anim_idle_sly",
        "idle/anim_idle_sly2",
        "idle/anim_idle_sly3",
        "idle/anim_idle_sly4",
        "idle/anim_idle_sly5",
        "idle/anim_idle_sly6",
        "idle/anim_idle_sly7",
        "idle/anim_idle_sly8"
    ];
    return BASE_IDLE_ANIMATIONS[getRandomInt(0, BASE_IDLE_ANIMATIONS.length)];
}