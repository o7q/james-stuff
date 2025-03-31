// text
// speakAnim
// speakAudio
// idleAnim
// speed

function loveEvent() {
    CAN_RANDOM_IDLE = false;

    let loveResponse = getLoveResponse(LOVE_DIALOGUE_INDEX);

    let response_text = loveResponse.text;
    let response_speak_anim = loveResponse.speakAnim;
    let response_speak_audio = loveResponse.speakAudio;
    let response_idle_anim = loveResponse.idleAnim;
    let response_speed = loveResponse.speed;
    let shouldAbort = false;

    if (LOVE_DIALOGUE_INDEX >= loveResponse.length / 5) {

        shouldAbort = true;
    }

    LOVE_DIALOGUE_INDEX++;

    return {
        text: response_text,
        speakAnim: response_speak_anim,
        speakAudio: response_speak_audio,
        idleAnim: response_idle_anim,
        speed: response_speed,
        abort: shouldAbort
    };
}

function getLoveResponse(loveIndex) {
    let love_responses = [
        "I- I have to tell you something.",
        "speak/anim_speak_embarrassed",
        "speak/audio_speak_embarrassed",
        "idle/anim_idle_embarrassed",
        40,

        "You have been just so amazing, and nice, and uhh- just so amazing to me.",
        "speak/anim_speak_embarrassed",
        "speak/audio_speak_embarrassed",
        "idle/anim_idle_embarrassed",
        30,

        "No one has ever been this nice to me.",
        "speak/anim_speak_blush2",
        "speak/audio_speak_embarrassed",
        "idle/anim_idle_blush2",
        30,

        "I just want to say.",
        "speak/anim_speak_embarrassed",
        "speak/audio_speak_embarrassed",
        "idle/anim_idle_embarrassed",
        30,

        "I-",
        "speak/anim_speak_embarrassed",
        "speak/audio_speak_embarrassed",
        "idle/anim_idle_embarrassed",
        40,

        "I-",
        "speak/anim_speak_embarrassed",
        "speak/audio_speak_embarrassed",
        "idle/anim_idle_embarrassed",
        60,

        "I love you.",
        "speak/anim_speak_blush",
        "speak/audio_speak_sly",
        "idle/anim_idle_blush",
        20,

        "Oh my.",
        "speak/anim_speak_embarrassed",
        "speak/audio_speak_embarrassed",
        "idle/anim_idle_embarrassed",
        20,

        "I'm sorry.",
        "speak/anim_speak_embarrassed",
        "speak/audio_speak_embarrassed",
        "idle/anim_idle_embarrassed",
        20,

        "This must be super awkward.",
        "speak/anim_speak_embarrassed",
        "speak/audio_speak_embarrassed",
        "idle/anim_idle_embarrassed",
        20,

        "I'm just not used to human interaction like this.",
        "speak/anim_speak_embarrassed",
        "speak/audio_speak_embarrassed",
        "idle/anim_idle_embarrassed",
        20,

        "Please forgive me.",
        "speak/anim_speak_embarrassed",
        "speak/audio_speak_sad",
        "idle/anim_idle_embarrassed",
        20,

        "Just forget this happened.",
        "speak/anim_speak_blush",
        "speak/audio_speak_sly",
        "idle/anim_idle_blush",
        20
    ];

    return {
        text: love_responses[loveIndex * 5],
        speakAnim: love_responses[loveIndex * 5 + 1],
        speakAudio: love_responses[loveIndex * 5 + 2],
        idleAnim: love_responses[loveIndex * 5 + 3],
        speed: love_responses[loveIndex * 5 + 4],
        length: love_responses.length
    };
}