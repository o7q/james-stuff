const TEXT_VARIANT_COUNT = 3;
const ANIMATED_TEXT_LENGTHS = [0, 10000, 10000];

let TEXT_CAN_ANIMATE = true;
let TEXT_INDEX = 0;

let TEXT_TIMEOUT_ID;

function getTextVariant(index) {
    return {
        static: `pages/index/assets/images/text/${index}.png`,
        animated: `pages/index/assets/images/text/${index}_animated.gif`
    };
}

async function switchTextVariant(direction) {
    TEXT_CAN_ANIMATE = true;
    clearTimeout(TEXT_TIMEOUT_ID);

    const textElement = document.getElementById("james-text");

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
    if (!TEXT_CAN_ANIMATE || TEXT_INDEX == 0 || DRAGGING) {
        return;
    }

    const textElement = document.getElementById("james-text");
    textElement.src = `pages/index/assets/images/text/${TEXT_INDEX}_animated.gif`;

    TEXT_CAN_ANIMATE = false;

    TEXT_TIMEOUT_ID = setTimeout(() => {
        TEXT_CAN_ANIMATE = true;
    }, ANIMATED_TEXT_LENGTHS[TEXT_INDEX]);
}

let DRAGGING = false;
let STOP_TRANSLATION = false;

function dragStart() {
    const textElement = document.getElementById("james-text");

    const initial_left = parseInt(window.getComputedStyle(textElement).left, 10);
    const initial_top = parseInt(window.getComputedStyle(textElement).top, 10);

    let x = initial_left, y = initial_top;
    let rotation = 0;
    let speed = 0.03;

    function animate() {
        if (MOUSE_SPEED >= 10 && MOUSE_DOWN) {
            DRAGGING = true;
            STOP_TRANSLATION = false;
        }

        if (MOUSE_SPEED <= 10 && !MOUSE_DOWN) {
            DRAGGING = false;
        }

        let mouse_x = initial_left;
        let mouse_y = initial_top;
        let mouse_vel_x = 0;

        if (DRAGGING && MOUSE_DOWN) {
            mouse_x = MOUSE_POS.x;
            mouse_y = MOUSE_POS.y;
            mouse_vel_x = MOUSE_VELOCITY.x;
        }

        x += (mouse_x - x) * speed;
        y += (mouse_y - y) * speed;
        rotation += (mouse_vel_x * 2 - rotation) * speed;

        const dist = Math.sqrt(Math.pow(x - initial_left, 2) + Math.pow(y - initial_top, 2));

        if (dist > 10) {
            STOP_TRANSLATION = true;
        }

        if (dist <= 1 && STOP_TRANSLATION) {
            STOP_TRANSLATION = false;
            textElement.style.left = "50%";
            textElement.style.top = "45%";
            return;
        }

        textElement.style.left = x + "px";
        textElement.style.top = y + "px";
        textElement.style.transform = `translate(-50%, -50%) rotate(${rotation}deg)`;

        requestAnimationFrame(animate);
    }

    animate();
}