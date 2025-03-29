class Cartridge {
    constructor(cartridgeImg, projectImg, bubble) {
        this.cartridgeImg = cartridgeImg;
        this.projectImg = projectImg;
        this.bubble = bubble;
        this.hoverTimeoutID = null;
        this.unhoverTimeoutID = null;

        this.cartridgeImg.addEventListener('mouseover', this.handleMouseOver.bind(this));
        this.cartridgeImg.addEventListener('mouseout', this.handleMouseOut.bind(this));
    }

    async handleMouseOver() {
        this.mouseHovering = true;

        clearTimeout(this.hoverTimeoutID);
        clearTimeout(this.unhoverTimeoutID);

        this.projectImg.classList.add("project-image--skew");
        this.cartridgeImg.src = "assets/images/scene/cd/hover_animation.gif";
        this.animationFinished = true;

        if (this.bubble) {
            this.bubble.style.opacity = '1';
        }

        this.hoverTimeoutID = setTimeout(() => {
            this.cartridgeImg.src = "assets/images/scene/cd/hovered.png";
            this.canUnhover = true;
        }, 150);
    }

    async handleMouseOut() {
        this.mouseHovering = false;

        clearTimeout(this.hoverTimeoutID);
        clearTimeout(this.unhoverTimeoutID);

        this.projectImg.classList.remove("project-image--skew");
        this.cartridgeImg.src = "assets/images/scene/cd/unhover_animation.gif";

        if (this.bubble) {
            this.bubble.style.opacity = '0';
        }

        if (!this.animationFinished)
        {
            this.cartridgeImg.src = "assets/images/scene/cd/unhovered.png";
            this.animationFinished = true;
        }

        this.unhoverTimeoutID = setTimeout(() => {
            this.cartridgeImg.src = "assets/images/scene/cd/unhovered.png";
            this.animationFinished = true;
        }, 150);
    }

    delay(ms) {
        return new Promise(resolve => setTimeout(resolve, ms));
    }
}