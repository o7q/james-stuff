let AUDIO_SPEAK_SLY = [];
let AUDIO_SPEAK_HAPPY = [];
let AUDIO_SPEAK_SURPRISED = [];
let AUDIO_SPEAK_THINKING = [];
let AUDIO_SPEAK_EMBARRASSED = [];
let AUDIO_SPEAK_SAD = [];
let AUDIO_SPEAK_UPSET = [];
let AUDIO_SPEAK_UPSET2 = [];
let AUDIO_SPEAK_SCARY = [];

function loadAudio() {
    for (let i = 0; i < 10; i++) {
        AUDIO_SPEAK_SLY.push(new Audio(`assets/audio/speak/sly/${i + 1}.mp3`));
        AUDIO_SPEAK_SLY[i].volume = 0.2;

        AUDIO_SPEAK_HAPPY.push(new Audio(`assets/audio/speak/happy/${i + 1}.mp3`));
        AUDIO_SPEAK_HAPPY[i].volume = 0.2;

        AUDIO_SPEAK_SURPRISED.push(new Audio(`assets/audio/speak/surprised/${i + 1}.mp3`));
        AUDIO_SPEAK_SURPRISED[i].volume = 0.2;

        AUDIO_SPEAK_EMBARRASSED.push(new Audio(`assets/audio/speak/embarrassed/${i + 1}.mp3`));
        AUDIO_SPEAK_EMBARRASSED[i].volume = 0.5;

        AUDIO_SPEAK_THINKING.push(new Audio(`assets/audio/speak/thinking/${i + 1}.mp3`));
        AUDIO_SPEAK_THINKING[i].volume = 0.2;

        AUDIO_SPEAK_SAD.push(new Audio(`assets/audio/speak/sad/${i + 1}.mp3`));
        AUDIO_SPEAK_SAD[i].volume = 0.2;

        AUDIO_SPEAK_UPSET.push(new Audio(`assets/audio/speak/upset/${i + 1}.mp3`));
        AUDIO_SPEAK_UPSET[i].volume = 0.2;

        AUDIO_SPEAK_UPSET2.push(new Audio(`assets/audio/speak/upset2/${i + 1}.mp3`));
        AUDIO_SPEAK_UPSET2[i].volume = 0.2;

        AUDIO_SPEAK_SCARY.push(new Audio(`assets/audio/speak/scary/${i + 1}.mp3`));
        AUDIO_SPEAK_SCARY[i].volume = 0.5;
    }
}

function playRandomSpeakAudio(speakAudio) {
    const randomIndex = getRandomInt(0, 10);
    switch (speakAudio) {
        case "speak/audio_speak_sly":
            AUDIO_SPEAK_SLY[randomIndex].play();
            break;
        case "speak/audio_speak_happy":
            AUDIO_SPEAK_HAPPY[randomIndex].play();
            break;
        case "speak/audio_speak_surprised":
            AUDIO_SPEAK_SURPRISED[randomIndex].play();
            break;
        case "speak/audio_speak_thinking":
            AUDIO_SPEAK_THINKING[randomIndex].play();
            break;
        case "speak/audio_speak_embarrassed":
            AUDIO_SPEAK_EMBARRASSED[randomIndex].play();
            break;
        case "speak/audio_speak_sad":
            AUDIO_SPEAK_SAD[randomIndex].play();
            break;
        case "speak/audio_speak_upset":
            AUDIO_SPEAK_UPSET[randomIndex].play();
            break;
        case "speak/audio_speak_upset2":
            AUDIO_SPEAK_UPSET2[randomIndex].play();
            break;
        case "speak/audio_speak_scary":
            AUDIO_SPEAK_SCARY[randomIndex].play();
            break;
    }
}