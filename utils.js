/**
 * Shuffles an array randomly.
 * @param {Array} array The array to shuffle.
 * @returns {Array} The shuffled array.
 */
export function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]]; // Swap elements
    }
    return array;
}

/**
 * Plays the audio for a given Marathi word using SpeechSynthesisUtterance.
 * Includes checks for browser support and voice availability.
 * @param {string} wordText The Marathi word to speak.
 */
export function playWordAudio(wordText) {
    console.log('Attempting to play audio for:', wordText);

    if (!('speechSynthesis' in window)) {
        console.error('Speech synthesis not supported in this browser.');
        return;
    }

    const utterance = new SpeechSynthesisUtterance(wordText);
    utterance.rate = 0.8;
    utterance.pitch = 1;
    utterance.volume = 1;

    const setVoiceAndSpeak = () => {
        const voices = speechSynthesis.getVoices();
        console.log('Available voices:', voices.map(v => `${v.name} (${v.lang})`));

        if (voices.length === 0) {
            console.error('No text-to-speech voices available on your system.');
            return; // Stop here if no voices are available
        }

        // Try to find a Marathi voice first
        let chosenVoice = voices.find(voice => voice.lang === 'mr-IN');

        // If no Marathi voice, try to find a Hindi voice
        if (!chosenVoice) {
            chosenVoice = voices.find(voice => voice.lang === 'hi-IN');
            if (chosenVoice) {
                console.warn('Marathi voice (mr-IN) not found. Using Hindi voice (hi-IN) as fallback.');
            } else {
                console.warn('Neither Marathi (mr-IN) nor Hindi (hi-IN) voice found. Attempting to speak with default voice.');
            }
        } else {
            console.log('Marathi voice found and set.');
        }

        if (chosenVoice) {
            utterance.voice = chosenVoice;
            // Set language to the chosen voice's language for better pronunciation if a specific voice is found
            utterance.lang = chosenVoice.lang;
        } else {
            // If no specific voice found, explicitly set lang to Marathi for potential default voice to try
            utterance.lang = 'mr-IN';
        }

        try {
            if (speechSynthesis.speaking) {
                speechSynthesis.cancel();
            }
            speechSynthesis.speak(utterance);
        } catch (error) {
            console.error('Error during speechSynthesis.speak():', error);
        }
    };

    if (speechSynthesis.getVoices().length > 0) {
        setVoiceAndSpeak();
    } else {
        speechSynthesis.onvoiceschanged = () => {
            setVoiceAndSpeak();
            speechSynthesis.onvoiceschanged = null;
        };
    }

    utterance.onerror = (event) => {
        console.error('Speech synthesis error:', event.error);
    };
}
