let HOVERING = false;
let DRAGGING = false;

function dragStart() {
    const textElement = document.getElementById("james-text");

    const initial_left = parseInt(window.getComputedStyle(textElement).left, 10);
    const initial_top = parseInt(window.getComputedStyle(textElement).top, 10);

    let x = initial_left, y = initial_top;
    let rotation = 0;
    let speed = 0.03;

    let counter = 0;

    textElement.style.transition = "";

    function smoothDrag() {
        let mouse_x = initial_left;
        let mouse_y = initial_top;
        let mouse_vel_x = 0;

        if (MOUSE_SPEED >= 5 && MOUSE_DOWN && HOVERING) {
            DRAGGING = true;
        }

        if (!MOUSE_DOWN && DRAGGING) {
            DRAGGING = false;
        }

        if (DRAGGING) {
            mouse_x = MOUSE_POS.x;
            mouse_y = MOUSE_POS.y;
            mouse_vel_x = MOUSE_VELOCITY.x;
            document.body.style.cursor = "url(\"common/assets/images/cursors/grab.png\"), default";
        }

        x += (mouse_x - x) * speed;
        y += (mouse_y - y) * speed;
        rotation += (mouse_vel_x * 2 - rotation) * speed;

        const dist = Math.sqrt(Math.pow(x - initial_left, 2) + Math.pow(y - initial_top, 2));

        if (dist <= 1 && counter > 10) {
            counter = 0;
            textElement.style.transition = "left 1s ease-out, top 1s ease-out";
            textElement.style.left = "";
            textElement.style.top = "";
            textElement.style.transform = "";
            return;
        }

        textElement.style.left = x + "px";
        textElement.style.top = y + "px";
        textElement.style.transform = `translate(-50%, -50%) rotate(${rotation}deg)`;

        requestAnimationFrame(smoothDrag);

        ++counter;
    }

    smoothDrag();
}

function mouseOver() {
    HOVERING = true;
    cursorHandleHover("common/assets/images/cursors");
}

function mouseLeave() {
    HOVERING = false;
    cursorHandleUnhover();
}