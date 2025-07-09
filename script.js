// Expanded data for the game: Marathi letters, their corresponding words, and emojis
const allGameData = [
    // Primary list (used by Level 2)
    { letter: 'क', wordMarathi: 'कप', englishWord: 'cup', emoji: '☕', audioText: 'कप' },
    { letter: 'म', wordMarathi: 'मासा', englishWord: 'masa', emoji: '🐠', audioText: 'मासा' },
    { letter: 'प', wordMarathi: 'पतंग', englishWord: 'patang', emoji: '🪁', audioText: 'पतंग' },
    { letter: 'ब', wordMarathi: 'बदक', englishWord: 'badak', emoji: '🦆', audioText: 'बदक' },
    { letter: 'ल', wordMarathi: 'लसूण', englishWord: 'lasoon', emoji: '🧄', audioText: 'लसूण' },
    { letter: 'च', wordMarathi: 'चमचा', englishWord: 'chamcha', emoji: '🥄', audioText: 'चमचा' },
    { letter: 'ट', wordMarathi: 'टोपी', englishWord: 'topi', emoji: '🧢', audioText: 'टोपी' },
    { letter: 'ड', wordMarathi: 'डोंगर', englishWord: 'dongar', emoji: '⛰️', audioText: 'डोंगर' },
    { letter: 'त', wordMarathi: 'तलवार', englishWord: 'talwar', emoji: '⚔️', audioText: 'तलwar' },
    { letter: 'न', wordMarathi: 'नळ', englishWord: 'nal', emoji: '🚰', audioText: 'नळ' },
    { letter: 'फ', wordMarathi: 'फुल', englishWord: 'phool', emoji: '🌸', audioText: 'फुल' },
    { letter: 'ग', wordMarathi: 'गाजर', englishWord: 'gajar', emoji: '🥕', audioText: 'गाजर' },
    { letter: 'घ', wordMarathi: 'घर', englishWord: 'ghar', emoji: '🏠', audioText: 'घर' },
    { letter: 'झ', wordMarathi: 'झेंडा', englishWord: 'jhenda', emoji: '🚩', audioText: 'झेंडा' },
    { letter: 'ढ', wordMarathi: 'ढग', englishWord: 'dhag', emoji: '☁️', audioText: 'ढग' },
    { letter: 'थ', wordMarathi: 'थर्मोमीटर', englishWord: 'thermometer', emoji: '🌡️', audioText: 'थर्मोमीटर' },
    { letter: 'ध', wordMarathi: 'धनुष्य', englishWord: 'dhanushya', emoji: '🏹', audioText: 'धनुष्य' },
    { letter: 'व', wordMarathi: 'वाघ', englishWord: 'wagh', emoji: '🐅', audioText: 'वाघ' },
    { letter: 'श', wordMarathi: 'शंख', englishWord: 'shankh', emoji: '🐚', audioText: 'शंख' },
    { letter: 'स', wordMarathi: 'ससा', englishWord: 'sasa', emoji: '🐇', audioText: 'ससा' },
    { letter: 'ह', wordMarathi: 'हात', englishWord: 'haat', emoji: '✋', audioText: 'हात' },

    // New/Updated entries in primary list
    { letter: 'ख', wordMarathi: 'खडू', englishWord: 'khadu', emoji: '🖍️', audioText: 'खडू' },
    { letter: 'छ', wordMarathi: 'छत्री', englishWord: 'chhatri', emoji: '☂️', audioText: 'छत्री' },
    { letter: 'ठ', wordMarathi: 'ठोकळा', englishWord: 'thokla', emoji: '🧱', audioText: 'ठोकळा' },
    { letter: 'य', wordMarathi: 'यंत्र', englishWord: 'yantra', emoji: '⚙️', audioText: 'यंत्र' },

    // Secondary list (added for randomization)
    { letter: 'क', wordMarathi: 'कमळ', englishWord: 'kamal', emoji: '🪷', audioText: 'कमळ' },
    { letter: 'म', wordMarathi: 'मगर', englishWord: 'magar', emoji: '🐊', audioText: 'मगर' },
    { letter: 'प', wordMarathi: 'पेरू', englishWord: 'peru', emoji: '🍐', audioText: 'पेरू' },
    { letter: 'ब', wordMarathi: 'बस', englishWord: 'bus', emoji: '🚌', audioText: 'बस' },
    { letter: 'ल', wordMarathi: 'लाल', englishWord: 'lal', emoji: '🔴', audioText: 'लाल' },
    { letter: 'च', wordMarathi: 'चिमणी', englishWord: 'chimni', emoji: '🐦', audioText: 'चिमणी' },
    { letter: 'ट', wordMarathi: 'टोमॅटो', englishWord: 'tomato', emoji: '🍅', audioText: 'टोमॅटो' },
    { letter: 'ड', wordMarathi: 'डबा', englishWord: 'daba', emoji: '📦', audioText: 'डबा' },
    { letter: 'त', wordMarathi: 'तराजू', englishWord: 'taraju', emoji: '⚖️', audioText: 'तराजू' },
    { letter: 'न', wordMarathi: 'नारळ', englishWord: 'naral', emoji: '🥥', audioText: 'नारळ' },
    { letter: 'फ', wordMarathi: 'फळा', englishWord: 'phala', emoji: '📝', audioText: 'फळा' },
    { letter: 'ग', wordMarathi: 'गाजर', englishWord: 'gajar', emoji: '🥕', audioText: 'गाजर' },
    { letter: 'घ', wordMarathi: 'घड्याळ', englishWord: 'ghadyal', emoji: '⏰', audioText: 'घड्याळ' },
    { letter: 'झ', wordMarathi: 'झाड', englishWord: 'zhad', emoji: '🌳', audioText: 'झाड' },
    { letter: 'ढ', wordMarathi: 'ढोल', englishWord: 'dhol', emoji: '🪘', audioText: 'ढोल' },
    { letter: 'थ', wordMarathi: 'थाळी', englishWord: 'thali', emoji: '🍽️', audioText: 'थाळी' },
    { letter: 'ध', wordMarathi: 'धान्य', englishWord: 'dhanya', emoji: '🌾', audioText: 'धान्य' },
    { letter: 'व', wordMarathi: 'वाघ', englishWord: 'wagh', emoji: '🐅', audioText: 'वाघ' },
    { letter: 'श', wordMarathi: 'शंख', englishWord: 'shankh', emoji: '🐚', audioText: 'शंख' },
    { letter: 'स', wordMarathi: 'ससा', englishWord: 'sasa', emoji: '🐇', audioText: 'ससा' },
    { letter: 'ह', wordMarathi: 'हत्ती', englishWord: 'hatti', emoji: '🐘', audioText: 'हत्ती' },
    // New secondary entries
    { letter: 'ख', wordMarathi: 'खरेदी', englishWord: 'kharedi', emoji: '🛍️', audioText: 'खरेदी' },
    { letter: 'छ', wordMarathi: 'छडी', englishWord: 'chhadi', emoji: '🦯', audioText: 'छडी' },
    { letter: 'ठ', wordMarathi: 'ठेच', englishWord: 'thech', emoji: '🩹', audioText: 'ठेच' },
    { letter: 'य', wordMarathi: 'यादी', englishWord: 'yadi', emoji: '📋', audioText: 'यादी' }
];

// --- Level 1 Specific Data ---
const level1AlphabetData = [
    // Row 1: Ka Varg
    [
        { letter: 'क', soundText: 'क', words: [
            { wordMarathi: 'कप', englishWord: 'cup', emoji: '☕', audioText: 'कप' },
            { wordMarathi: 'कमळ', englishWord: 'kamal', emoji: '🪷', audioText: 'कमळ' },
            { wordMarathi: 'कणीस', englishWord: 'kanis', emoji: '🌽', audioText: 'कणीस' }
        ]},
        { letter: 'ख', soundText: 'ख', words: [
            { wordMarathi: 'खडू', englishWord: 'khadu', emoji: '🖍️', audioText: 'खडू' },
            { wordMarathi: 'खरेदी', englishWord: 'kharedi', emoji: '🛍️', audioText: 'खरेदी' },
            { wordMarathi: 'खिडकी', englishWord: 'khidki', emoji: '🪟', audioText: 'khidki' }
        ]},
        { letter: 'ग', soundText: 'ग', words: [
            { wordMarathi: 'गाजर', englishWord: 'gajar', emoji: '🥕', audioText: 'गाजर' },
            { wordMarathi: 'गवत', englishWord: 'gavat', emoji: '🌱', audioText: 'गवत' },
            { wordMarathi: 'गाढव', englishWord: 'gadhav', emoji: '🫏', audioText: 'गाढव' }
        ]},
        { letter: 'घ', soundText: 'घ', words: [
            { wordMarathi: 'घर', englishWord: 'ghar', emoji: '🏠', audioText: 'घर' },
            { wordMarathi: 'घड्याळ', englishWord: 'ghadyal', emoji: '⏰', audioText: 'घड्याळ' },
            { wordMarathi: 'घोडा', englishWord: 'ghoda', emoji: '🐎', audioText: 'घोडा' }
        ]}
    ],
    // Row 2: Cha Varg
    [
        { letter: 'च', soundText: 'च', words: [
            { wordMarathi: 'चमचा', englishWord: 'chamcha', emoji: '🥄', audioText: 'चमचा' },
            { wordMarathi: 'चिमणी', englishWord: 'chimni', emoji: '🐦', audioText: 'चिमणी' },
            { wordMarathi: 'चक्र', englishWord: 'chakra', emoji: '☸️', audioText: 'चक्र' }
        ]},
        { letter: 'छ', soundText: 'छ', words: [
            { wordMarathi: 'छत्री', englishWord: 'chhatri', emoji: '☂️', audioText: 'छत्री' },
            { wordMarathi: 'छडी', englishWord: 'chhadi', emoji: '🦯', audioText: 'छडी' },
            { wordMarathi: 'छान', englishWord: 'chhan', emoji: '👍', audioText: 'छान' }
        ]},
        { letter: 'ज', soundText: 'ज', words: [
            { wordMarathi: 'जहाज', englishWord: 'jahaj', emoji: '🚢', audioText: 'जहाज' },
            { wordMarathi: 'जांभूळ', englishWord: 'jambhul', emoji: '🍇', audioText: 'जांभूळ' },
            { wordMarathi: 'जंगल', englishWord: 'jangal', emoji: '🏞️', audioText: 'जंगल' }
        ]},
        { letter: 'झ', soundText: 'झ', words: [
            { wordMarathi: 'झेंडा', englishWord: 'jhenda', emoji: '🚩', audioText: 'झेंडा' },
            { wordMarathi: 'झाड', englishWord: 'zhad', emoji: '🌲', audioText: 'झाड' },
            { wordMarathi: 'झेब्रा', englishWord: 'zebra', emoji: '🦓', audioText: 'झेब्रा' }
        ]}
    ],
    // Row 3: Ta Varg
    [
        { letter: 'ट', soundText: 'ट', words: [
            { wordMarathi: 'टोपी', englishWord: 'topi', emoji: '🧢', audioText: 'टोपी' },
            { wordMarathi: 'टोमॅटो', englishWord: 'tomato', emoji: '🍅', audioText: 'टोमॅटो' },
            { wordMarathi: 'टपाल', englishWord: 'tapal', emoji: '✉️', audioText: 'टपाल' }
        ]},
        { letter: 'ठ', soundText: 'ठ', words: [
            { wordMarathi: 'ठोकळा', englishWord: 'thokla', emoji: '🧱', audioText: 'ठोकळा' },
            { wordMarathi: 'ठेच', englishWord: 'thech', emoji: '🩹', audioText: 'ठेच' },
            { wordMarathi: 'ठिपका', englishWord: 'thipka', emoji: '⚫', audioText: 'ठिपका' }
        ]},
        { letter: 'ड', soundText: 'ड', words: [
            { wordMarathi: 'डोंगर', englishWord: 'dongar', emoji: '⛰️', audioText: 'डोंगर' },
            { wordMarathi: 'डबा', englishWord: 'daba', emoji: '📦', audioText: 'डबा' },
            { wordMarathi: 'डमरू', englishWord: 'damaru', emoji: '🥁', audioText: 'डमरू' }
        ]},
        { letter: 'ढ', soundText: 'ढ', words: [
            { wordMarathi: 'ढग', englishWord: 'dhag', emoji: '☁️', audioText: 'ढग' },
            { wordMarathi: 'ढोल', englishWord: 'dhol', emoji: '🪘', audioText: 'ढोल' },
            { wordMarathi: 'ढकलणे', englishWord: 'dhakalne', emoji: '➡️', audioText: 'ढकलणे' }
        ]}
    ],
    // Row 4: Ta Varg
    [
        { letter: 'त', soundText: 'त', words: [
            { wordMarathi: 'तलवार', englishWord: 'talwar', emoji: '⚔️', audioText: 'तलवार' },
            { wordMarathi: 'तराजू', englishWord: 'taraju', emoji: '⚖️', audioText: 'तराजू' },
            { wordMarathi: 'तारा', englishWord: 'tara', emoji: '⭐', audioText: 'तारा' }
        ]},
        { letter: 'थ', soundText: 'थ', words: [
            { wordMarathi: 'थर्मोमीटर', englishWord: 'thermometer', emoji: '🌡️', audioText: 'थर्मोमीटर' },
            { wordMarathi: 'थाळी', englishWord: 'thali', emoji: '🍽️', audioText: 'थाळी' },
            { wordMarathi: 'थंडी', englishWord: 'thandi', emoji: '🥶', audioText: 'थंडी' }
        ]},
        { letter: 'द', soundText: 'द', words: [
            { wordMarathi: 'दगड', englishWord: 'dagad', emoji: '🪨', audioText: 'दगड' },
            { wordMarathi: 'दवाखाना', englishWord: 'davakhana', emoji: '🏥', audioText: 'दवाखाना' },
            { wordMarathi: 'दहा', englishWord: 'daha', emoji: '🔟', audioText: 'दहा' }
        ]},
        { letter: 'ध', soundText: 'ध', words: [
            { wordMarathi: 'धनुष्य', englishWord: 'dhanushya', emoji: '🏹', audioText: 'धनुष्य' },
            { wordMarathi: 'धान्य', englishWord: 'dhanya', emoji: '🌾', audioText: 'धान्य' },
            { wordMarathi: 'धरण', englishWord: 'dharan', emoji: '🌊', audioText: 'धरण' }
        ]},
        { letter: 'न', soundText: 'न', words: [
            { wordMarathi: 'नळ', englishWord: 'nal', emoji: '🚰', audioText: 'नळ' },
            { wordMarathi: 'नारळ', englishWord: 'naral', emoji: '🥥', audioText: 'नारळ' },
            { wordMarathi: 'नदी', englishWord: 'nadi', emoji: '🏞️', audioText: 'नदी' }
        ]}
    ],
    // Row 5: Pa Varg
    [
        { letter: 'प', soundText: 'प', words: [
            { wordMarathi: 'पतंग', englishWord: 'patang', emoji: '🪁', audioText: 'पतंग' },
            { wordMarathi: 'पेरू', englishWord: 'peru', emoji: '🍐', audioText: 'पेरू' },
            { wordMarathi: 'पाऊस', englishWord: 'paus', emoji: '🌧️', audioText: 'पाऊस' }
        ]},
        { letter: 'फ', soundText: 'फ', words: [
            { wordMarathi: 'फुल', englishWord: 'phool', emoji: '🌸', audioText: 'फुल' },
            { wordMarathi: 'फळा', englishWord: 'phala', emoji: '📝', audioText: 'फळा' },
            { wordMarathi: 'फणस', englishWord: 'phanas', emoji: '🍈', audioText: 'फणस' }
        ]},
        { letter: 'ब', soundText: 'ब', words: [
            { wordMarathi: 'बदक', englishWord: 'badak', emoji: '🦆', audioText: 'बदक' },
            { wordMarathi: 'बस', englishWord: 'bus', emoji: '🚌', audioText: 'बस' },
            { wordMarathi: 'बूट', englishWord: 'boot', emoji: '👞', audioText: 'बूट' }
        ]},
        { letter: 'भ', soundText: 'भ', words: [
            { wordMarathi: 'भाजी', englishWord: 'bhaji', emoji: '🥦', audioText: 'भाजी' },
            { wordMarathi: 'भोक', englishWord: 'bhok', emoji: '🕳️', audioText: 'भोक' },
            { wordMarathi: 'भरणी', englishWord: 'bharani', emoji: '🧺', audioText: 'भरणी' }
        ]},
        { letter: 'म', soundText: 'म', words: [
            { wordMarathi: 'मासा', englishWord: 'masa', emoji: '🐠', audioText: 'मासा' },
            { wordMarathi: 'मगर', englishWord: 'magar', emoji: '🐊', audioText: 'मगर' },
            { wordMarathi: 'मणी', englishWord: 'mani', emoji: '📿', audioText: 'मणी' }
        ]}
    ],
    // Row 6: Avargiya Vyanjane (selected few)
    [
        { letter: 'य', soundText: 'य', words: [
            { wordMarathi: 'यंत्र', englishWord: 'yantra', emoji: '⚙️', audioText: 'यंत्र' },
            { wordMarathi: 'यादी', englishWord: 'yadi', emoji: '📋', audioText: 'यादी' },
            { wordMarathi: 'यश', englishWord: 'yash', emoji: '✅', audioText: 'यश' }
        ]},
        { letter: 'र', soundText: 'र', words: [
            { wordMarathi: 'रात्र', englishWord: 'ratra', emoji: '🌙', audioText: 'रात्र' },
            { wordMarathi: 'रस्ता', englishWord: 'rasta', emoji: '🛣️', audioText: 'रस्ता' },
            { wordMarathi: 'रंग', englishWord: 'rang', emoji: '🌈', audioText: 'रंग' }
        ]},
        { letter: 'ल', soundText: 'ल', words: [
            { wordMarathi: 'लसूण', englishWord: 'lasoon', emoji: '🧄', audioText: 'लसूण' },
            { wordMarathi: 'लाल', englishWord: 'lal', emoji: '🔴', audioText: 'लाल' },
            { wordMarathi: 'लाडू', englishWord: 'ladu', emoji: '🍡', audioText: 'लाडू' }
        ]},
        { letter: 'व', soundText: 'व', words: [
            { wordMarathi: 'वाघ', englishWord: 'wagh', emoji: '🐅', audioText: 'वाघ' },
            { wordMarathi: 'वर', englishWord: 'var', emoji: '⬆️', audioText: 'वर' },
            { wordMarathi: 'वजन', englishWord: 'vajan', emoji: '⚖️', audioText: 'वजन' }
        ]},
        { letter: 'श', soundText: 'श', words: [
            { wordMarathi: 'शंख', englishWord: 'shankh', emoji: '🐚', audioText: 'शंख' },
            { wordMarathi: 'शर्ट', englishWord: 'shirt', emoji: '👚', audioText: 'शर्ट' },
            { wordMarathi: 'शहर', englishWord: 'shahar', emoji: '🏙️', audioText: 'shahar' }
        ]},
        { letter: 'स', soundText: 'स', words: [
            { wordMarathi: 'ससा', englishWord: 'sasa', emoji: '🐇', audioText: 'ससा' },
            { wordMarathi: 'सफरचंद', englishWord: 'safarchand', emoji: '🍎', audioText: 'सफरचंद' },
            { wordMarathi: 'सूर्य', englishWord: 'surya', emoji: '☀️', audioText: 'सूर्य' }
        ]},
        { letter: 'ह', soundText: 'ह', words: [
            { wordMarathi: 'हात', englishWord: 'haat', emoji: '✋', audioText: 'हात' },
            { wordMarathi: 'हत्ती', englishWord: 'hatti', emoji: '🐘', audioText: 'हत्ती' },
            { wordMarathi: 'हसू', englishWord: 'hasu', emoji: '😄', audioText: 'हसू' }
        ]}
    ]
];

// --- Level 3 Specific Data ---
// Expanded and corrected data for Level 3
const level3GameData = [
    {
        correctLetter: 'का',
        wordMarathi: 'कान',
        englishWord: 'kan', // Transliteration
        emoji: '👂',
        audioText: 'कान',
        options: ['का', 'कि', 'कु']
    },
    {
        correctLetter: 'मी',
        wordMarathi: 'मीठ',
        englishWord: 'mith', // Transliteration
        emoji: '🧂',
        audioText: 'मीठ',
        options: ['मा', 'मी', 'मू']
    },
    {
        correctLetter: 'पू',
        wordMarathi: 'पूल',
        englishWord: 'pul', // Transliteration
        emoji: '🌉',
        audioText: 'पूल',
        options: ['पा', 'पी', 'पू']
    },
    {
        correctLetter: 'झे',
        wordMarathi: 'झेब्रा',
        englishWord: 'zebra', // Transliteration
        emoji: '🦓',
        audioText: 'झेब्रा',
        options: ['झा', 'झो', 'झे']
    },
    {
        correctLetter: 'घो',
        wordMarathi: 'घोडा',
        englishWord: 'ghoda', // Transliteration
        emoji: '🐎',
        audioText: 'घोडा',
        options: ['घा', 'घी', 'घो']
    },
    {
        correctLetter: 'चू',
        wordMarathi: 'चूळ',
        englishWord: 'chul', // Transliteration
        emoji: '💧',
        audioText: 'चूळ',
        options: ['चा', 'ची', 'चू']
    },
    {
        correctLetter: 'टे',
        wordMarathi: 'टेबल',
        englishWord: 'table', // Transliteration
        emoji: '🪑', // Changed to actual table/chair emoji
        audioText: 'टेबल',
        options: ['टा', 'टी', 'टे']
    },
    {
        correctLetter: 'डो',
        wordMarathi: 'डोळा',
        englishWord: 'dola', // Transliteration
        emoji: '👁️',
        audioText: 'डोळा',
        options: ['डा', 'डी', 'डो']
    },
    {
        correctLetter: 'ना',
        wordMarathi: 'नारळ',
        englishWord: 'naral', // Transliteration
        emoji: '🥥',
        audioText: 'नारळ',
        options: ['ना', 'नि', 'नु']
    },
    {
        correctLetter: 'फू',
        wordMarathi: 'फूल',
        englishWord: 'phul', // Transliteration
        emoji: '🌺',
        audioText: 'फूल',
        options: ['फा', 'फि', 'फू']
    },
    {
        correctLetter: 'बा',
        wordMarathi: 'बाळ',
        englishWord: 'bal', // Transliteration
        emoji: '👶',
        audioText: 'बाळ',
        options: ['बा', 'बि', 'बु']
    },
    {
        correctLetter: 'भू',
        wordMarathi: 'भूगोल',
        englishWord: 'bhugol', // Transliteration
        emoji: '🌍',
        audioText: 'भूगोल',
        options: ['भा', 'भि', 'भू']
    },
    {
        correctLetter: 'ये',
        wordMarathi: 'येणे',
        englishWord: 'yene', // Transliteration
        emoji: '🚶‍♀️',
        audioText: 'येणे',
        options: ['या', 'यी', 'ये']
    },
    {
        correctLetter: 'रो',
        wordMarathi: 'रोटी',
        englishWord: 'roti', // Transliteration
        emoji: '🍞',
        audioText: 'roti',
        options: ['रा', 'री', 'रो']
    },
    {
        correctLetter: 'ला',
        wordMarathi: 'लाडू',
        englishWord: 'ladu', // Transliteration
        emoji: '🍡',
        audioText: 'लाडू',
        options: ['ला', 'लि', 'लू']
    },
    {
        correctLetter: 'वा',
        wordMarathi: 'वाघ',
        englishWord: 'wagh', // Transliteration
        emoji: '🐅',
        audioText: 'वाघ',
        options: ['वा', 'वि', 'वू']
    },
    {
        correctLetter: 'शी',
        wordMarathi: 'शिट्टी',
        englishWord: 'shitti', // Transliteration
        emoji: '🎶',
        audioText: 'शिट्टी',
        options: ['शा', 'शि', 'शी']
    },
    {
        correctLetter: 'सु',
        wordMarathi: 'सुई',
        englishWord: 'sui', // Transliteration
        emoji: '🪡',
        audioText: 'सुई',
        options: ['सा', 'सि', 'सु']
    },
    {
        correctLetter: 'हा',
        wordMarathi: 'हात',
        englishWord: 'haat', // Transliteration
        emoji: '✋',
        audioText: 'हात',
        options: ['हा', 'हि', 'हु']
    },
    // Additional examples for various modifiers
    {
        correctLetter: 'कि',
        wordMarathi: 'किल्ला',
        englishWord: 'killa', // Transliteration
        emoji: '🏰',
        audioText: 'किल्ला',
        options: ['का', 'कि', 'कु']
    },
    {
        correctLetter: 'लि',
        wordMarathi: 'लिंबू',
        englishWord: 'limbu', // Transliteration
        emoji: '🍋',
        audioText: 'लिंबू',
        options: ['ला', 'लि', 'लू']
    },
    {
        correctLetter: 'गे',
        wordMarathi: 'गेला',
        englishWord: 'gela', // Transliteration
        emoji: '🚶‍♂️',
        audioText: 'गेला',
        options: ['गा', 'गी', 'गे']
    },
    {
        correctLetter: 'मै',
        wordMarathi: 'मैदान',
        englishWord: 'maidan', // Transliteration
        emoji: '🏟️',
        audioText: 'मैदान',
        options: ['मा', 'मी', 'मै']
    },
    {
        correctLetter: 'को',
        wordMarathi: 'कोल्हा',
        englishWord: 'kolha', // Transliteration
        emoji: '🦊',
        audioText: 'कोल्हा',
        options: ['का', 'कि', 'को']
    },
    {
        correctLetter: 'शौ',
        wordMarathi: 'शौचालय',
        englishWord: 'shauchalay', // Transliteration
        emoji: '🚽',
        audioText: 'शौचालय',
        options: ['शा', 'शि', 'शou']
    },
    {
        correctLetter: 'पं',
        wordMarathi: 'पंख',
        englishWord: 'pankh', // Transliteration
        emoji: '🪶',
        audioText: 'पंख',
        options: ['पा', 'पी', 'पं']
    },
    {
        correctLetter: 'अं',
        wordMarathi: 'अंगूर',
        englishWord: 'angur', // Transliteration
        emoji: '🍇',
        audioText: 'अंगूर',
        options: ['अ', 'आ', 'अं']
    },
    {
        correctLetter: 'इ',
        wordMarathi: 'इमारत',
        englishWord: 'imarat', // Transliteration
        emoji: '🏢',
        audioText: 'इमारत',
        options: ['अ', 'आ', 'इ']
    },
    {
        correctLetter: 'ऊ',
        wordMarathi: 'ऊस',
        englishWord: 'us', // Transliteration
        emoji: '🌱',
        audioText: 'ऊस',
        options: ['अ', 'आ', 'ऊ']
    },
    {
        correctLetter: 'ऐ',
        wordMarathi: 'ऐरण',
        englishWord: 'airan', // Transliteration
        emoji: '🔨',
        audioText: 'ऐरण',
        options: ['ए', 'ओ', 'ऐ']
    },
    {
        correctLetter: 'औ',
        wordMarathi: 'औषध',
        englishWord: 'aushadh', // Transliteration
        emoji: '💊',
        audioText: 'औषध',
        options: ['ओ', 'अं', 'औ']
    },
    // New additions based on the plan:
    {
        correctLetter: 'कि',
        wordMarathi: 'किडा',
        englishWord: 'kida',
        emoji: '🐛',
        audioText: 'किडा',
        options: ['का', 'कि', 'कू']
    },
    {
        correctLetter: 'शि',
        wordMarathi: 'शिर',
        englishWord: 'shir',
        emoji: '🧠',
        audioText: 'शिर',
        options: ['शा', 'शि', 'शु']
    },
    {
        correctLetter: 'ती',
        wordMarathi: 'तीर',
        englishWord: 'teer',
        emoji: '🏹',
        audioText: 'तीर',
        options: ['ता', 'ती', 'तू']
    },
    {
        correctLetter: 'पी',
        wordMarathi: 'पीळ',
        englishWord: 'peel',
        emoji: '🥨',
        audioText: 'पीळ',
        options: ['पा', 'पी', 'पू']
    },
    {
        correctLetter: 'खु',
        wordMarathi: 'खुर्ची',
        englishWord: 'khurchi',
        emoji: '🪑',
        audioText: 'खुर्ची',
        options: ['खा', 'खि', 'खु']
    },
    {
        correctLetter: 'पु',
        wordMarathi: 'पुस्तकालय',
        englishWord: 'pustakalay',
        emoji: '📚',
        audioText: 'पुस्तकालय',
        options: ['पा', 'पि', 'पु']
    },
    {
        correctLetter: 'झु',
        wordMarathi: 'झुला',
        englishWord: 'jhula',
        emoji: '🎡',
        audioText: 'झुला',
        options: ['झा', 'झि', 'झु']
    },
    {
        correctLetter: 'धू',
        wordMarathi: 'धूप',
        englishWord: 'dhoop',
        emoji: '☀️',
        audioText: 'धूप',
        options: ['धा', 'धि', 'धू']
    },
    {
        correctLetter: 'पे',
        wordMarathi: 'पेन',
        englishWord: 'pen',
        emoji: '🖊️',
        audioText: 'पेन',
        options: ['पा', 'पी', 'पे']
    },
    {
        correctLetter: 'के',
        wordMarathi: 'केळी',
        englishWord: 'keli',
        emoji: '🍌',
        audioText: 'केळी',
        options: ['का', 'कि', 'के']
    },
    {
        correctLetter: 'पै',
        wordMarathi: 'पैसे',
        englishWord: 'paise',
        emoji: '💰',
        audioText: 'पैसे',
        options: ['पा', 'पी', 'पै']
    },
    {
        correctLetter: 'वै',
        wordMarathi: 'वैलण',
        englishWord: 'vailan',
        emoji: '👩‍🌾',
        audioText: 'वैलण',
        options: ['वा', 'वि', 'वै']
    },
    {
        correctLetter: 'पो',
        wordMarathi: 'पोपट',
        englishWord: 'popat',
        emoji: '🦜',
        audioText: 'पोपट',
        options: ['पा', 'पी', 'पो']
    },
    {
        correctLetter: 'मो',
        wordMarathi: 'मोती',
        englishWord: 'moti',
        emoji: '⚪',
        audioText: 'मोती',
        options: ['मा', 'मी', 'मो']
    },
    {
        correctLetter: 'कौ',
        wordMarathi: 'कौळा',
        englishWord: 'kaula',
        emoji: '🧱',
        audioText: 'कौळा',
        options: ['का', 'कि', 'कौ']
    },
    {
        correctLetter: 'दौ',
        wordMarathi: 'दौत',
        englishWord: 'daut',
        emoji: '🖋️',
        audioText: 'दौत',
        options: ['दा', 'दि', 'दौ']
    },
    {
        correctLetter: 'कं',
        wordMarathi: 'कंगवा',
        englishWord: 'kangava',
        emoji: '🧴',
        audioText: 'कंगवा',
        options: ['का', 'कि', 'कं']
    },
    {
        correctLetter: 'मं',
        wordMarathi: 'मंदिरा',
        englishWord: 'mandira',
        emoji: '🛕',
        audioText: 'मंदिरा',
        options: ['मा', 'मी', 'मं']
    },
    {
        correctLetter: 'पुनः', // This is a rare case where the full word is the "modifier"
        wordMarathi: 'पुनः',
        englishWord: 'punaha',
        emoji: '🔄',
        audioText: 'पुनः',
        options: ['पु', 'पुन', 'पुनः'] // Options reflect the full word
    }
];

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
 * Shuffles an array randomly.
 * @param {Array} array The array to shuffle.
 * @returns {Array} The shuffled array.
 */
function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]]; // Swap elements
    }
    return array;
}

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

/**
 * Plays the audio for a given Marathi word using SpeechSynthesisUtterance.
 * Includes checks for browser support and voice availability.
 * @param {string} wordText The Marathi word to speak.
 */
function playWordAudio(wordText) {
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
