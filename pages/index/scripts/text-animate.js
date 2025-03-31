const TEXT_VARIANT_COUNT = 3;
const ANIMATED_TEXT_LENGTHS = [150, 10000, 10000];

let TEXT_CAN_ANIMATE = true;
let TEXT_INDEX = 0;

let TEXT_TIMEOUT_ID;

function getTextVariant(index) {
    return {
        static: `pages/index/assets/images/james_stuff_text/${index}.png`,
        animated: `pages/index/assets/images/james_stuff_text/${index}_animated.gif`
    };
}

async function switchTextVariant(direction) {
    TEXT_CAN_ANIMATE = true;
    clearTimeout(TEXT_TIMEOUT_ID);
    
    const textElement = document.getElementById("james-text");
    textElement.style.transition = "";

    // fade out the text
    textElement.classList.add("james-text--fadeOut");
    textElement.classList.remove("james-text--moveCenter");
    textElement.classList.add("james-text--enableMoveTransition");

    // move the text
    if (direction > 0) {
        textElement.classList.add("james-text--moveLeft");
    }
    else {
        textElement.classList.add("james-text--moveRight");
    }

    // wait to let some animation play
    await delay(100);

    textElement.classList.remove("james-text--moveLeft");
    textElement.classList.remove("james-text--moveRight");

    // move the text to the new animation position
    if (direction > 0) {
        textElement.classList.add("james-text--moveRight");
    }
    else {
        textElement.classList.add("james-text--moveLeft");
    }

    // make it move instantly
    textElement.classList.remove("james-text--enableMoveTransition");

    // weird delay trick to make it move properly
    await delay(10);

    // animate the move back to the center and fade in
    textElement.classList.add("james-text--enableMoveTransition");
    textElement.classList.remove("james-text--moveLeft");
    textElement.classList.remove("james-text--moveRight");
    textElement.classList.add("james-text--moveCenter");

    textElement.classList.remove("james-text--fadeOut");

    TEXT_INDEX += direction;
    if (TEXT_INDEX < 0) {
        TEXT_INDEX = TEXT_VARIANT_COUNT - 1;
    }

    if (TEXT_INDEX >= TEXT_VARIANT_COUNT) {
        TEXT_INDEX = 0;
    }

    textElement.src = getTextVariant(TEXT_INDEX).static;
}

function playAnimatedText() {
    if (!TEXT_CAN_ANIMATE || DRAGGING) {
        return;
    }

    const textElement = document.getElementById("james-text");
    textElement.src = `pages/index/assets/images/james_stuff_text/${TEXT_INDEX}_animated.gif`;

    TEXT_CAN_ANIMATE = false;

    TEXT_TIMEOUT_ID = setTimeout(() => {
        TEXT_CAN_ANIMATE = true;
    }, ANIMATED_TEXT_LENGTHS[TEXT_INDEX]);
}