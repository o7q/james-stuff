const TEXT_VARIANT_COUNT = 3;
const ANIMATED_TEXT_LENGTHS = [150, 10000, 10000];

let TEXT_CAN_ANIMATE = true;
let TEXT_INDEX = 0;

let TEXT_TIMEOUT_ID;


function playAnimatedText() {
    if (!TEXT_CAN_ANIMATE) {
        return;
    }

    const textElement = document.getElementById("james-text");
    textElement.src = `assets/images/james_stuff_text/${TEXT_INDEX}_animated.gif`;

    TEXT_CAN_ANIMATE = false;

    TEXT_TIMEOUT_ID = setTimeout(() => {
        TEXT_CAN_ANIMATE = true;
    }, ANIMATED_TEXT_LENGTHS[TEXT_INDEX]);
}