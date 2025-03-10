function rageEvent() {
    CAN_RANDOM_IDLE = false;

    let rageResponse = getRageResponse(RAGE_DIALOGUE_INDEX);

    let response_text = rageResponse.text;
    let response_speak_anim = rageResponse.speakAnim;
    let response_speak_audio = rageResponse.speakAudio;
    let response_idle_anim = rageResponse.idleAnim;
    let response_speed = rageResponse.speed;
    let shouldAbort = false;

    if (RAGE_DIALOGUE_INDEX >= rageResponse.length / 5) {
        document.body.innerHTML = "";
        let the_void = document.createElement("img");
        the_void.className = "layer";
        the_void.draggable = false;
        the_void.src = "assets/images/backgrounds/events/background_the_void/480x270_16.gif";
        document.body.append(the_void);
        changeTitle("the void");
        changeFavicon("assets/images/favicon/event/the_void.png");
        const audio = new Audio("assets/audio/events/audio_the_void/the_void.mp3");
        audio.loop = true;
        audio.play();

        shouldAbort = true;
    }

    RAGE_DIALOGUE_INDEX++;

    return {
        text: response_text,
        speakAnim: response_speak_anim,
        speakAudio: response_speak_audio,
        idleAnim: response_idle_anim,
        speed: response_speed,
        abort: shouldAbort
    };
}