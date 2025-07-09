import { allGameData, level1AlphabetData, level3GameData } from './data.js';
import { shuffleArray, playWordAudio } from './utils.js';

// DOM elements (declared globally but assigned inside DOMContentLoaded/renderLevel)
let lettersSection; // Used by Level 2
let picturesSection; // Used by Level 2
let feedbackMessage; // Used by Level 2
let resetBtn; // Used by Level 2
let svgElement; // Used by Level 2
let activeLines = []; // Used by Level 2
let levelContentDiv; // Main content area for levels
let levelSelectDropdown; // New: Reference to the dropdown

// --- Level 2 State Variables (Re-initialized on Level 2 load) ---
let selectedLetterElement = null;
let selectedPictureElement = null;
let matchedPairsCount = 0;
let currentGameData = [];

// --- Level 1 State Variables ---
let currentAlphabetRowIndex = 0;
let selectedLetterData = null; // Stores the data object of the currently selected letter in Level 1

// --- Level 3 State Variables ---
let currentLevel3ChallengeIndex = 0; // Will be used as an index into shuffledLevel3GameData
let shuffledLevel3GameData = []; // New: To hold shuffled challenges
let currentLevel3Challenge = null;
let level3FeedbackMessageElement = null;
let level3NextButton = null;
let level3OptionsContainer = null;
let level3PictureDisplay = null;


/**
 * Selects 5 unique random items from allGameData for Level 2.
 * Ensures unique letters are selected. If a letter has multiple entries,
 * one will be chosen randomly.
 */
function selectRandomGameData() {
    const uniqueLetters = new Set();
    const selectedPairs = [];
    const shuffledAllData = shuffleArray([...allGameData]); // Shuffle a copy of all data

    for (const item of shuffledAllData) {
        if (!uniqueLetters.has(item.letter)) {
            uniqueLetters.add(item.letter);
            selectedPairs.push(item);
            if (selectedPairs.length === 5) {
                break; // Stop once 5 unique letter pairs are found
            }
        }
    }
    currentGameData = selectedPairs;
}

/**
 * Clears any currently selected elements (Level 2 specific).
 */
function clearSelections() {
    if (selectedLetterElement) {
        selectedLetterElement.classList.remove('selected', 'incorrect');
        selectedLetterElement = null;
    }
    if (selectedPictureElement) {
        selectedPictureElement.classList.remove('selected', 'incorrect');
        // Hide English word for the cleared picture
        const englishWordSpan = selectedPictureElement.querySelector('.english-word');
        if (englishWordSpan) {
            englishWordSpan.style.display = 'none';
        }
        selectedPictureElement = null;
    }
    if (feedbackMessage) { // Check if feedbackMessage exists (only in Level 2)
        feedbackMessage.textContent = ''; // Clear feedback when selections are cleared
    }
}


// --- Level 2 Specific Functions ---
/**
 * Handles the click event on a letter box (Level 2).
 * @param {Event} e The click event.
 */
function handleLetterClick(e) {
    const clickedLetter = e.currentTarget;

    // If this letter is already matched, do nothing
    if (clickedLetter.classList.contains('matched')) {
        return;
    }

    // If a picture is already selected, attempt a match with this letter
    if (selectedPictureElement) {
        selectedLetterElement = clickedLetter; // Temporarily select the letter for matching
        selectedLetterElement.classList.add('selected'); // Highlight it
        attemptMatch();
    } else {
        // If no picture is selected, prompt to select a picture first
        feedbackMessage.textContent = 'प्रथम चित्र निवडा. (Select a picture first.)';
    }
}

/**
 * Handles the click event on a picture item (Level 2).
 * @param {Event} e The click event.
 */
function handlePictureClick(e) {
    const clickedPicture = e.currentTarget;

    // If this picture is already matched, do nothing
    if (clickedPicture.classList.contains('matched')) {
        return;
    }

    // Play audio for the clicked picture
    // Find the audioText from currentGameData based on the picture's dataset.letter
    const pictureData = currentGameData.find(data => `picture-${data.letter}` === clickedPicture.id);
    if (pictureData) {
        playWordAudio(pictureData.audioText);

        // Show the English word
        const englishWordSpan = clickedPicture.querySelector('.english-word');
        if (englishWordSpan) {
            englishWordSpan.textContent = pictureData.englishWord; // Set text
            englishWordSpan.style.display = 'block'; // Show it
        }
    }

    // Clear any previous picture selection highlight
    if (selectedPictureElement && selectedPictureElement !== clickedPicture) {
        selectedPictureElement.classList.remove('selected', 'incorrect');
        // Hide English word for previously selected picture
        const prevEnglishWordSpan = selectedPictureElement.querySelector('.english-word');
        if (prevEnglishWordSpan) {
            prevEnglishWordSpan.style.display = 'none';
        }
    }

    // Select the new picture
    selectedPictureElement = clickedPicture;
    selectedPictureElement.classList.add('selected');
    feedbackMessage.textContent = 'आता अक्षर निवडा. (Now select a letter.)';

    // If a letter was already selected, attempt a match (shouldn't happen in this flow unless user clicks picture then letter then another picture)
    if (selectedLetterElement) {
        attemptMatch();
    }
}

/**
 * Attempts to match the currently selected picture and letter (Level 2).
 */
function attemptMatch() {
    if (!selectedPictureElement || !selectedLetterElement) {
        return; // Need both a picture and a letter selected
    }

    const pictureLetter = selectedPictureElement.dataset.letter; // The letter this picture corresponds to
    const letter = selectedLetterElement.textContent;

    if (letter === pictureLetter) {
        // Correct match
        selectedLetterElement.classList.add('correct-match', 'matched');
        selectedPictureElement.classList.add('correct-match', 'matched');
        matchedPairsCount++;
        feedbackMessage.textContent = 'बरोबर! (Correct!)';

        // Draw the line
        drawLine(selectedPictureElement, selectedLetterElement);


        // Disable further interaction for matched elements
        selectedLetterElement.removeEventListener('click', handleLetterClick);
        selectedPictureElement.removeEventListener('click', handlePictureClick);

        // Check if all pairs are matched
        if (matchedPairsCount === currentGameData.length) {
            feedbackMessage.textContent = 'उत्कृष्ट! सर्व जोड्या जुळल्या! (Excellent! All pairs matched!)';
        }

    } else {
        // Incorrect match
        selectedLetterElement.classList.add('incorrect');
        selectedPictureElement.classList.add('incorrect');
        feedbackMessage.textContent = 'चुकीचे! पुन्हा प्रयत्न करा. (Incorrect! Try again.)';

        // Briefly show incorrect state, then reset
        setTimeout(() => {
            selectedLetterElement.classList.remove('incorrect', 'selected'); // Remove selected from letter
            selectedLetterElement = null; // Clear letter selection
            selectedPictureElement.classList.remove('incorrect'); // Remove incorrect from picture, but keep selected
            // Hide English word for incorrect match after timeout
            const incorrectEnglishWordSpan = selectedPictureElement.querySelector('.english-word');
            if (incorrectEnglishWordSpan) {
                incorrectEnglishWordSpan.style.display = 'none';
            }
            feedbackMessage.textContent = '';
        }, 800); // Show red for 0.8 seconds
    }
    // Clear selected picture only if it was a correct match, otherwise it stays selected
    if (letter === pictureLetter) {
        clearSelections();
    }
}

/**
 * Draws an SVG line between two DOM elements (Level 2).
 * @param {HTMLElement} element1 The first element (e.g., picture item).
 * @param {HTMLElement} element2 The second element (e.g., letter box).
 */
function drawLine(element1, element2) {
    const svgRect = svgElement.getBoundingClientRect(); // Get SVG's own position

    const rect1 = element1.getBoundingClientRect();
    const rect2 = element2.getBoundingClientRect();

    // Calculate the points for the line to start from the edge, not center
    const x1_viewport = rect1.right; // Right edge of element1
    const y1_viewport = rect1.top + rect1.height / 2; // Vertical center of element1
    const x2_viewport = rect2.left; // Left edge of element2
    const y2_viewport = rect2.top + rect2.height / 2; // Vertical center of element2

    // Convert viewport coordinates to SVG coordinates
    const svgX1 = x1_viewport - svgRect.left;
    const svgY1 = y1_viewport - svgRect.top;
    const svgX2 = x2_viewport - svgRect.left;
    const svgY2 = y2_viewport - svgRect.top;

    console.log(`Drawing line from (${svgX1}, ${svgY1}) to (${svgX2}, ${svgY2})`);

    const line = document.createElementNS("http://www.w3.org/2000/svg", "line");
    line.setAttribute("x1", svgX1);
    line.setAttribute("y1", svgY1);
    line.setAttribute("x2", svgX2);
    line.setAttribute("y2", svgY2);
    svgElement.appendChild(line);
    activeLines.push(line);
}

/**
 * Initializes the game for Level 2.
 */
function initGame() {
    selectRandomGameData(); // Select a new set of data for the current game

    // Clear existing content
    lettersSection.innerHTML = '';
    picturesSection.innerHTML = '';
    feedbackMessage.textContent = '';
    matchedPairsCount = 0;
    clearSelections(); // Ensure no lingering selections
    activeLines.forEach(line => line.remove()); // Remove all previous lines
    activeLines = [];

    // Create letter boxes based on currentGameData
    currentGameData.forEach(data => {
        const letterBox = document.createElement('div');
        letterBox.id = `letter-${data.letter}`;
        letterBox.classList.add('letter-box');
        letterBox.textContent = data.letter;
        letterBox.dataset.correctPictureId = `picture-${data.letter}`;
        letterBox.addEventListener('click', handleLetterClick); // Add click listener
        lettersSection.appendChild(letterBox);
    });

    // Create and shuffle picture items based on currentGameData
    const shuffledPictures = shuffleArray([...currentGameData]);
    shuffledPictures.forEach(data => {
        const pictureItem = document.createElement('div');
        pictureItem.id = `picture-${data.letter}`;
        pictureItem.classList.add('picture-item');
        pictureItem.dataset.letter = data.letter;

        const emojiSpan = document.createElement('span');
        emojiSpan.classList.add('emoji');
        emojiSpan.textContent = data.emoji;
        pictureItem.appendChild(emojiSpan);

        // Add a span for the English word, initially hidden
        const englishWordSpan = document.createElement('span');
        englishWordSpan.classList.add('english-word');
        englishWordSpan.textContent = data.englishWord; // Use the new property
        pictureItem.appendChild(englishWordSpan);

        pictureItem.addEventListener('click', handlePictureClick); // Add click listener
        picturesSection.appendChild(pictureItem);
    });

    // Add event listener for reset button (ensure it's only added once)
    if (!resetBtn.dataset.listenerAttached) {
        resetBtn.addEventListener('click', resetGame);
        resetBtn.dataset.listenerAttached = 'true';
    }
}

/**
 * Resets the game to its initial state (Level 2).
 */
function resetGame() {
    matchedPairsCount = 0; // Reset matched pairs count
    initGame(); // Re-initialize to select new letters and reset everything
}

// --- Level 1 Specific Functions ---

/**
 * Plays the audio for a single Marathi letter.
 * @param {string} letterText The Marathi letter to speak.
 */
function playLetterAudio(letterText) {
    playWordAudio(letterText); // Re-use existing audio function
}

/**
 * Renders the current row of Marathi letters for Level 1.
 */
function renderAlphabetRow() {
    const letterRowDisplay = document.getElementById('letter-row-display');
    letterRowDisplay.innerHTML = ''; // Clear previous letters

    const currentRow = level1AlphabetData[currentAlphabetRowIndex];

    // Ensure selectedLetterData points to the correct object for the current row
    // This handles initial load and navigation
    if (!selectedLetterData || !currentRow.some(item => item.letter === selectedLetterData.letter)) {
        selectedLetterData = currentRow[0]; // Default to the first letter of the current row
    }

    currentRow.forEach((letterData, index) => {
        const letterBox = document.createElement('div');
        letterBox.classList.add('level1-letter-box');
        letterBox.textContent = letterData.letter;
        letterBox.dataset.letterIndex = index; // Store index for selection

        // Mark as selected if it matches the current selectedLetterData
        if (selectedLetterData && letterData.letter === selectedLetterData.letter) {
            letterBox.classList.add('selected');
        }

        letterBox.addEventListener('click', () => {
            // Remove 'selected' from previously selected letter
            const currentlySelected = letterRowDisplay.querySelector('.level1-letter-box.selected');
            if (currentlySelected) {
                currentlySelected.classList.remove('selected');
            }

            // Add 'selected' to the clicked letter
            letterBox.classList.add('selected');
            selectedLetterData = letterData; // Update global selected letter data
            playLetterAudio(letterData.soundText); // Play letter sound
            renderPicturesForLetter(letterData); // Render pictures for this letter
        });
        letterRowDisplay.appendChild(letterBox);
    });

    // ALWAYS render pictures for the currently selected letter after the row is built
    if (selectedLetterData) {
        renderPicturesForLetter(selectedLetterData);
    }

    // Update navigation button states
    document.getElementById('prev-row-btn').disabled = currentAlphabetRowIndex === 0;
    document.getElementById('next-row-btn').disabled = currentAlphabetRowIndex === level1AlphabetData.length - 1;
}

/**
 * Renders pictures for the given letter data in Level 1.
 * @param {Object} letterData The data object for the selected letter.
 */
function renderPicturesForLetter(letterData) {
    const pictureDisplay = document.getElementById('picture-display');
    pictureDisplay.innerHTML = ''; // Clear previous pictures

    // Do NOT shuffle the words for the current letter to maintain fixed order
    const orderedWords = [...letterData.words]; // Use a copy to ensure original data is not modified

    // Only display 3 to 5 pictures (or fewer if not enough words)
    const numPicturesToShow = Math.min(orderedWords.length, Math.floor(Math.random() * 3) + 3); // Randomly 3, 4, or 5

    for (let i = 0; i < numPicturesToShow; i++) {
        const wordData = orderedWords[i]; // Use orderedWords instead of shuffledWords
        const pictureItem = document.createElement('div');
        pictureItem.classList.add('level1-picture-item');

        const emojiSpan = document.createElement('span');
        emojiSpan.classList.add('emoji');
        emojiSpan.textContent = wordData.emoji;
        pictureItem.appendChild(emojiSpan);

        const englishWordSpan = document.createElement('span');
        englishWordSpan.classList.add('english-word');
        englishWordSpan.textContent = wordData.englishWord; // This property already holds the transliterated Marathi word
        pictureItem.appendChild(englishWordSpan);

        pictureItem.addEventListener('click', () => {
            playWordAudio(wordData.audioText); // Play word sound
        });
        pictureDisplay.appendChild(pictureItem);
    }
}

/**
 * Handles navigation between alphabet rows in Level 1.
 * @param {number} direction -1 for previous, 1 for next.
 */
function navigateAlphabetRows(direction) {
    currentAlphabetRowIndex += direction;
    if (currentAlphabetRowIndex < 0) {
        currentAlphabetRowIndex = 0;
    } else if (currentAlphabetRowIndex >= level1AlphabetData.length) {
        currentAlphabetRowIndex = level1AlphabetData.length - 1;
    }
    // After changing row, reset selected letter to the first one in the new row
    selectedLetterData = level1AlphabetData[currentAlphabetRowIndex][0]; // This line ensures the first letter of the new row is selected
    renderAlphabetRow(); // Re-render the row and pictures
}

// --- Level 3 Specific Functions ---

/**
 * Loads and displays the current challenge for Level 3.
 */
function loadNextLevel3Challenge() {
    // Reset feedback and next button
    level3FeedbackMessageElement.textContent = '';
    level3NextButton.style.display = 'none';
    level3OptionsContainer.innerHTML = ''; // Clear previous options

    // If all challenges in the shuffled list have been presented, reshuffle
    if (currentLevel3ChallengeIndex >= shuffledLevel3GameData.length) {
        shuffledLevel3GameData = shuffleArray([...level3GameData]); // Reshuffle
        currentLevel3ChallengeIndex = 0; // Reset index
        console.log('All Level 3 challenges completed. Reshuffling for new round.');
    }

    currentLevel3Challenge = shuffledLevel3GameData[currentLevel3ChallengeIndex];

    // Update picture display - now showing English transliteration
    level3PictureDisplay.innerHTML = `
        <span class="emoji">${currentLevel3Challenge.emoji}</span>
        <span class="marathi-word">${currentLevel3Challenge.englishWord}</span> <!-- Changed to englishWord -->
    `;
    // Re-attach click listener for the picture display
    level3PictureDisplay.onclick = () => playWordAudio(currentLevel3Challenge.audioText);

    // Create options
    const shuffledOptions = shuffleArray([...currentLevel3Challenge.options]);
    shuffledOptions.forEach(option => {
        const optionBox = document.createElement('div');
        optionBox.classList.add('level3-option-box');
        optionBox.textContent = option;
        optionBox.dataset.value = option; // Store the option value
        optionBox.addEventListener('click', handleLevel3OptionClick);
        level3OptionsContainer.appendChild(optionBox);
    });
}

/**
 * Handles click on a Level 3 option box.
 * @param {Event} e The click event.
 */
function handleLevel3OptionClick(e) {
    const clickedOption = e.currentTarget;
    const selectedValue = clickedOption.dataset.value;

    // Remove previous feedback classes from all options
    Array.from(level3OptionsContainer.children).forEach(option => {
        option.classList.remove('selected', 'correct', 'incorrect');
    });

    clickedOption.classList.add('selected'); // Highlight selected option

    if (selectedValue === currentLevel3Challenge.correctLetter) {
        clickedOption.classList.add('correct');
        level3FeedbackMessageElement.textContent = 'बरोबर! (Correct!)';
        level3NextButton.style.display = 'block'; // Show next button
        // Disable all options after correct answer
        Array.from(level3OptionsContainer.children).forEach(option => {
            option.removeEventListener('click', handleLevel3OptionClick);
        });
    } else {
        clickedOption.classList.add('incorrect');
        level3FeedbackMessageElement.textContent = 'चुकीचे! पुन्हा प्रयत्न करा. (Incorrect! Try again.)';
        playWordAudio(selectedValue); // Play the sound of the incorrect option tapped
        // Allow user to re-select
        setTimeout(() => {
            clickedOption.classList.remove('selected', 'incorrect');
            level3FeedbackMessageElement.textContent = '';
        }, 800);
    }
}

/**
 * Advances to the next challenge in Level 3.
 */
function nextLevel3Challenge() {
    currentLevel3ChallengeIndex++;
    loadNextLevel3Challenge();
}

// --- Level Management Logic (Main App) ---
const level1HTML = `
    <div class="level1-container">
        <div id="letter-row-display" class="letter-row-display"></div>
        <div class="navigation-buttons">
            <button id="prev-row-btn" class="nav-button">←</button>
            <button id="next-row-btn" class="nav-button">→</button>
        </div>
        <div id="picture-display" class="picture-display"></div>
    </div>
`;

// The HTML structure for Level 2 (the current game)
const level2GameHTML = `
    <div class="game-container">
        <div class="columns-wrapper">
            <div id="pictures-section" class="pictures-section"></div>
            <div id="letters-section" class="letters-section"></div>
        </div>
        <svg id="match-lines-svg" class="match-lines-svg"></svg>
        <div class="w-full flex flex-col items-center">
            <div class="buttons-container">
                <button id="reset-btn" class="game-button">पुन्हा खेळा (Play Again)</button>
            </div>
            <div id="feedback-message" class="feedback-message"></div>
        </div>
    </div>
`;

const level3HTML = `
    <div class="level3-container">
        <div class="level3-challenge-area">
            <div id="level3-picture-display" class="level3-picture-display">
                <!-- Picture and Marathi word will be loaded here -->
            </div>
            <div id="level3-options-container" class="level3-options-container">
                <!-- Options will be loaded here -->
            </div>
            <button id="level3-next-button" class="level3-next-button" style="display:none;">पुढील (Next)</button>
            <div id="level3-feedback-message" class="level3-feedback-message"></div>
        </div>
    </div>
`;

const placeholderHTML = `
    <div class="placeholder-level">
        <p>Coming Soon!</p>
        <p>नवीन स्तर लवकरच येत आहेत!</p>
    </div>
`;

function renderLevel(level) {
    // Set the dropdown value to the current level
    if (levelSelectDropdown) {
        levelSelectDropdown.value = level;
    }

    // Clear previous content
    levelContentDiv.innerHTML = '';
    // Reset global DOM element references specific to levels
    // Level 2 elements
    lettersSection = null;
    picturesSection = null;
    feedbackMessage = null;
    resetBtn = null;
    svgElement = null;
    activeLines = [];
    // Level 1 elements (no need to reset these as they are dynamically created within renderLevel1)
    currentAlphabetRowIndex = 0; // Reset Level 1 row index
    selectedLetterData = null; // Reset Level 1 selected letter
    // Level 3 elements
    currentLevel3ChallengeIndex = 0;
    shuffledLevel3GameData = []; // Clear and re-shuffle for Level 3
    currentLevel3Challenge = null;
    level3FeedbackMessageElement = null;
    level3NextButton = null;
    level3OptionsContainer = null;
    level3PictureDisplay = null;


    if (level === 1) {
        levelContentDiv.innerHTML = level1HTML;
        // Attach Level 1 specific event listeners after rendering HTML
        document.getElementById('prev-row-btn').addEventListener('click', () => navigateAlphabetRows(-1));
        document.getElementById('next-row-btn').addEventListener('click', () => navigateAlphabetRows(1));
        renderAlphabetRow(); // Initial render for Level 1
    } else if (level === 2) {
        levelContentDiv.innerHTML = level2GameHTML;
        // Re-assign DOM elements for Level 2 after it's rendered
        lettersSection = document.getElementById('letters-section');
        picturesSection = document.getElementById('pictures-section');
        feedbackMessage = document.getElementById('feedback-message');
        resetBtn = document.getElementById('reset-btn');
        svgElement = document.getElementById('match-lines-svg');
        initGame(); // Initialize the game for Level 2
    } else if (level === 3) {
        levelContentDiv.innerHTML = level3HTML;
        // Assign Level 3 DOM elements
        level3PictureDisplay = document.getElementById('level3-picture-display');
        level3OptionsContainer = document.getElementById('level3-options-container');
        level3FeedbackMessageElement = document.getElementById('level3-feedback-message');
        level3NextButton = document.getElementById('level3-next-button');

        // Shuffle Level 3 data once when the level is loaded
        shuffledLevel3GameData = shuffleArray([...level3GameData]);
        currentLevel3ChallengeIndex = 0; // Start from the beginning of the shuffled list

        level3NextButton.addEventListener('click', nextLevel3Challenge);
        loadNextLevel3Challenge(); // Start the first challenge for Level 3
    } else if (level === 4 || level === 5) {
        levelContentDiv.innerHTML = placeholderHTML;
    }
}

// Initialize the app when the DOM is fully loaded
document.addEventListener('DOMContentLoaded', (event) => {
    levelContentDiv = document.getElementById('level-content');
    levelSelectDropdown = document.getElementById('level-select-dropdown');

    // Attach event listener to the dropdown
    levelSelectDropdown.addEventListener('change', (e) => {
        renderLevel(parseInt(e.target.value));
    });

    // Render Level 1 initially (as it is now the default)
    renderLevel(1);
});
