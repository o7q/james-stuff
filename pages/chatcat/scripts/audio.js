let AUDIO_BANKS = [];
const AUDIO_EMOTIONS = ["sly", "happy", "surprised", "embarrassed", "thinking", "sad", "upset", "upset2", "scary"];
const AUDIO_VOLUMES = [0.2, 0.2, 0.2, 0.5, 0.2, 0.2, 0.2, 0.2, 0.5];
const SAMPLES_COUNT = 10;

function loadAudio() {
    for (let i = 0; i < AUDIO_EMOTIONS.length; ++i) {
        for (let j = 0; j < SAMPLES_COUNT; ++j) {
            const audioSample = new Audio(`assets/audio/speak/${AUDIO_EMOTIONS[i]}/${j + 1}.mp3`);
            audioSample.volume = AUDIO_VOLUMES[i];
            AUDIO_BANKS.push(audioSample);
        }
    }
}

function playRandomSpeakAudio(speakAudio) {
    const randomIndex = getRandomInt(0, 10);
    switch (speakAudio) {
        case "speak/audio_speak_sly":
            AUDIO_BANKS[SAMPLES_COUNT * 0 + randomIndex].play();
            break;
        case "speak/audio_speak_happy":
            AUDIO_BANKS[SAMPLES_COUNT * 1 + randomIndex].play();
            break;
        case "speak/audio_speak_surprised":
            AUDIO_BANKS[SAMPLES_COUNT * 2 + randomIndex].play();
            break;
        case "speak/audio_speak_thinking":
            AUDIO_BANKS[SAMPLES_COUNT * 3 + randomIndex].play();
            break;
        case "speak/audio_speak_embarrassed":
            AUDIO_BANKS[SAMPLES_COUNT * 4 + randomIndex].play();
            break;
        case "speak/audio_speak_sad":
            AUDIO_BANKS[SAMPLES_COUNT * 5 + randomIndex].play();
            break;
        case "speak/audio_speak_upset":
            AUDIO_BANKS[SAMPLES_COUNT * 6 + randomIndex].play();
            break;
        case "speak/audio_speak_upset2":
            AUDIO_BANKS[SAMPLES_COUNT * 7 + randomIndex].play();
            break;
        case "speak/audio_speak_scary":
            AUDIO_BANKS[SAMPLES_COUNT * 8 + randomIndex].play();
            break;
    }
}