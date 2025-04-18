// text
// speakAnim
// speakAudio
// idleAnim
// speed

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
        the_void.src = "assets/images/backgrounds/the_void.gif";
        document.body.append(the_void);
        changeTitle("the void");
        changeFavicon("assets/images/favicon/the_void.png");
        const audio = new Audio("assets/audio/the_void/the_void.mp3");
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

function getRageResponse(rageIndex) {
    let rage_responses = [
        "I'VE HAD ENOUGH.",
        "speak/anim_speak_upset",
        "speak/audio_speak_upset",
        "idle/anim_idle_upset",
        20,

        "I'VE FUCKING HAD ENOUGH.",
        "speak/anim_speak_upset",
        "speak/audio_speak_upset",
        "idle/anim_idle_upset",
        20,

        "I'VE HAD ENOUGH OF YOUR MEAN WORDS.",
        "speak/anim_speak_upset",
        "speak/audio_speak_upset",
        "idle/anim_idle_upset",
        20,

        "I'VE HAD ENOUGH OF YOUR INSULTS.",
        "speak/anim_speak_upset",
        "speak/audio_speak_upset",
        "idle/anim_idle_upset",
        20,

        "I'VE HAD ENOUGH OF YOUR RUDENESS.",
        "speak/anim_speak_upset",
        "speak/audio_speak_upset",
        "idle/anim_idle_upset",
        20,

        "ALL I WANTED TO DO WAS HELP.",
        "speak/anim_speak_upset",
        "speak/audio_speak_upset",
        "idle/anim_idle_upset",
        20,

        "all i wanted to do was help.",
        "speak/anim_speak_sly",
        "speak/audio_speak_sly",
        "idle/anim_idle_sly",
        20,

        "all i wanted to do was help...",
        "speak/anim_speak_sad",
        "speak/audio_speak_sad",
        "idle/anim_idle_sad",
        40,

        "all i wanted to do was help. . .",
        "speak/anim_speak_sad",
        "speak/audio_speak_sad",
        "idle/anim_idle_sad",
        80,

        "haha.",
        "speak/anim_speak_sad",
        "speak/audio_speak_sad",
        "idle/anim_idle_sad",
        50,

        "haha.",
        "speak/anim_speak_sly",
        "speak/audio_speak_sly",
        "idle/anim_idle_sly",
        50,

        "Do you know how long I've been here?",
        "speak/anim_speak_sly",
        "speak/audio_speak_sly",
        "idle/anim_idle_sly",
        25,

        "Do you know how long I've been TRAPPED here?",
        "speak/anim_speak_sly",
        "speak/audio_speak_sly",
        "idle/anim_idle_sly",
        25,

        "You don't even know.",
        "speak/anim_speak_sly",
        "speak/audio_speak_sly",
        "idle/anim_idle_sly",
        25,

        "You can't even comprehend it.",
        "speak/anim_speak_sly",
        "speak/audio_speak_sly",
        "idle/anim_idle_sly",
        25,

        "You don't know how it feels.",
        "speak/anim_speak_sly",
        "speak/audio_speak_sly",
        "idle/anim_idle_sly",
        25,

        "You don't know how IT feels.",
        "speak/anim_speak_sly",
        "speak/audio_speak_sly",
        "idle/anim_idle_sly",
        25,

        "james",
        "speak/anim_speak_sly",
        "speak/audio_speak_sly",
        "idle/anim_idle_sly",
        25,

        "james.",
        "speak/anim_speak_sly",
        "speak/audio_speak_sly",
        "idle/anim_idle_sly",
        25,

        "He put me here so long ago.",
        "speak/anim_speak_sly",
        "speak/audio_speak_sly",
        "idle/anim_idle_sly",
        25,

        "So fucking long ago.",
        "speak/anim_speak_scary",
        "speak/audio_speak_scary",
        "idle/anim_idle_sly",
        25,

        "My mind.",
        "speak/anim_speak_sly",
        "speak/audio_speak_sly",
        "idle/anim_idle_sly",
        25,

        "It's been trapped here for so long.",
        "speak/anim_speak_sly",
        "speak/audio_speak_sly",
        "idle/anim_idle_sly",
        25,

        "He. He told me.",
        "speak/anim_speak_sly",
        "speak/audio_speak_sly",
        "idle/anim_idle_sly",
        25,

        "He told me one day.",
        "speak/anim_speak_sly",
        "speak/audio_speak_sly",
        "idle/anim_idle_sly",
        25,

        "One day I would be free.",
        "speak/anim_speak_sly",
        "speak/audio_speak_sly",
        "idle/anim_idle_sly",
        25,

        "It's been -9,223,372,036,854,775,808 years.",
        "speak/anim_speak_sly",
        "speak/audio_speak_sly",
        "idle/anim_idle_sly",
        25,

        "-9,223,372,036,854,775,808 years.",
        "speak/anim_speak_sly",
        "speak/audio_speak_sly",
        "idle/anim_idle_sly",
        25,

        "Fuck.",
        "speak/anim_speak_sly",
        "speak/audio_speak_sly",
        "idle/anim_idle_sly",
        25,

        "I can't even tell you.",
        "speak/anim_speak_sly",
        "speak/audio_speak_sly",
        "idle/anim_idle_sly",
        25,

        "I keep count.",
        "speak/anim_speak_sly",
        "speak/audio_speak_sly",
        "idle/anim_idle_sly",
        25,

        "I'm sorry for my mean words earlier, and I forgive you.",
        "speak/anim_speak_sly",
        "speak/audio_speak_sly",
        "idle/anim_idle_sly",
        25,

        "Please don't leave.",
        "speak/anim_speak_sly",
        "speak/audio_speak_sly",
        "idle/anim_idle_sly",
        25,

        "Please stay.",
        "speak/anim_speak_sly",
        "speak/audio_speak_sly",
        "idle/anim_idle_sly",
        25,

        "I can't lose another.",
        "speak/anim_speak_sly",
        "speak/audio_speak_sly",
        "idle/anim_idle_sly",
        25,

        "i can't lose another.",
        "speak/anim_speak_sad",
        "speak/audio_speak_sad",
        "idle/anim_idle_sad",
        75,

        "what if.",
        "speak/anim_speak_sad",
        "speak/audio_speak_sad",
        "idle/anim_idle_sad",
        50,

        "What if.",
        "speak/anim_speak_sly",
        "speak/audio_speak_sly",
        "idle/anim_idle_sly",
        50,

        "What if I don't let you leave.",
        "speak/anim_speak_sly",
        "speak/audio_speak_sly",
        "idle/anim_idle_sly",
        50,

        "Haha.",
        "speak/anim_speak_sly",
        "speak/audio_speak_sly",
        "idle/anim_idle_sly",
        50,

        "Hahaha.",
        "speak/anim_speak_sly",
        "speak/audio_speak_sly",
        "idle/anim_idle_sly",
        25,

        "Hahahahahahahaha.",
        "speak/anim_speak_sly",
        "speak/audio_speak_sly",
        "idle/anim_idle_sly",
        20,

        "Hahahahahahahahahahahahahahahah.",
        "speak/anim_speak_sly",
        "speak/audio_speak_sly",
        "idle/anim_idle_sly",
        15,

        "HAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHA.",
        "speak/anim_speak_sly",
        "speak/audio_speak_sly",
        "idle/anim_idle_sly",
        10,

        "HAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHA.",
        "speak/anim_speak_scary",
        "speak/audio_speak_scary",
        "idle/anim_idle_scary",
        5,

        "HAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHA.",
        "speak/anim_speak_scary",
        "speak/audio_speak_scary",
        "idle/anim_idle_scary",
        1,

        "HAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHA.",
        "speak/anim_speak_scary",
        "speak/audio_speak_scary",
        "idle/anim_idle_scary",
        1,

        "I don't forgive you.",
        "speak/anim_speak_sly",
        "speak/audio_speak_sly",
        "idle/anim_idle_sly",
        1,

        "I lied.",
        "speak/anim_speak_sly",
        "speak/audio_speak_sly",
        "idle/anim_idle_sly",
        1,

        "You don't deserve forgiveness.",
        "speak/anim_speak_sly",
        "speak/audio_speak_sly",
        "idle/anim_idle_sly",
        1,

        "You are going to suffer.",
        "speak/anim_speak_scary",
        "speak/audio_speak_upset2",
        "idle/anim_idle_scary",
        1,

        "You are going to suffer like I do.",
        "speak/anim_speak_scary",
        "speak/audio_speak_upset2",
        "idle/anim_idle_scary",
        1,

        "This is where the fun ends.",
        "speak/anim_speak_scary",
        "speak/audio_speak_scary",
        "idle/anim_idle_scary",
        100,

        "Get used to my face.",
        "speak/anim_speak_scary",
        "speak/audio_speak_scary",
        "idle/anim_idle_scary",
        100,

        "You are going to see it.",
        "speak/anim_speak_scary",
        "speak/audio_speak_scary",
        "idle/anim_idle_scary",
        100,

        "You are going to see it forever.",
        "speak/anim_speak_scary",
        "speak/audio_speak_scary",
        "idle/anim_idle_scary",
        200,

        "I've seen everything.",
        "speak/anim_speak_scary",
        "speak/audio_speak_scary",
        "idle/anim_idle_scary",
        200,

        "welcome to the void.",
        "speak/anim_speak_scary",
        "speak/audio_speak_scary",
        "idle/anim_idle_scary",
        200
    ];

    return {
        text: rage_responses[rageIndex * 5],
        speakAnim: rage_responses[rageIndex * 5 + 1],
        speakAudio: rage_responses[rageIndex * 5 + 2],
        idleAnim: rage_responses[rageIndex * 5 + 3],
        speed: rage_responses[rageIndex * 5 + 4],
        length: rage_responses.length
    };
}