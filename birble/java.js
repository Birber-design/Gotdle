// Wordle Game JavaScript

const WORD_LIST = [
'above', 'about', 'again', 'alarm', 'apple', 'actor', 'adult', 'after', 'angel', 'angry', 'answer', 'apply', 'agree', 'ahead', 'allow',
 'alone', 'along', 'aloud', 'amaze', 'among', 'angle', 'arena', 'argue', 'arise', 'aside', 'asset', 'avoid', 'awake', 'award', 'aware',
 'awful', 'ahead', 'alarm', 'album', 'alike', 'alive', 'allow', 'alter', 'adapt',
 'adopt', 'admit', 'agent', 'agree', 'apple', 'arrow', 'aside', 'awake', 'about', 'above',
 'basic', 'beach', 'beard', 'beast', 'begin', 'being', 'below', 'bench', 'berry', 'birth', 'black', 'blame', 'blank', 'blast', 
 'blend', 'bless', 'blind', 'blink', 'block', 'blood', 'bloom', 'blown', 'board', 'boast', 'bonus', 'boost', 'bored', 'bound', 
 'brain', 'brake', 'brand', 'brass', 'bread', 'break', 'brick', 'bride',
  'brief', 'bring', 'broad', 'brown', 'build', 'built', 'buyer', 'bunch', 'burst', 'bacon', 'baker', 'books', 'boats', 'belly',
  'cabin', 'cable', 'candy', 'carry', 'catch', 'cause', 'chain', 'chair', 'chalk', 'charm', 'cheap', 'check', 'chest', 'child',
'chill', 'china', 'choir', 'choke', 'chose', 'claim', 'class', 'clean', 'clear', 'clerk', 'click', 'climb', 'clock', 'close',
'cloth', 'cloud', 'coach', 'coast', 'color', 'count', 'court', 'cover', 'craft', 'crash', 'cream', 'creek', 'crime', 'crisp',
'cross', 'crowd', 'crown', 'crush', 'cubic', 'cured', 'curve', 'cycle', 'carry', 'catch',
'daily', 'dance', 'dairy', 'damage', 'danger', 'daring', 'dark', 'data', 'date', 'dawn', 'dead', 'deal', 'dear', 'death', 
'decent', 'decide', 'deep', 'delay',  'demand', 'dense', 'desire', 'detail', 'device', 'devil', 'dialog', 'diamond', 
'dinner', 'direct', 'dirt', 'dirty', 'disco', 'discuss', 'disease', 'dish', 'dismay', 'dollar', 'domain', 'donor', 'double',
'doubt', 'draft', 'drama', 'dream', 'dress', 'drink', 'drive', 'drill', 'drama', 'dried',
'eagle', 'early', 'earth', 'easy', 'eager', 'email', 'empty', 'enemy', 'enter', 'equal', 'error', 'event', 'every', 'exact',
'exist', 'extra', 'edge', 'elder', 'elite', 'elbow', 'elect', 'endow', 'enjoy', 'enter', 'entry', 'equal', 'erase', 'error',
'essay', 'event', 'every', 'exact', 'exist', 'extra', 'eager', 'early', 'earth', 'empty', 'enemy', 'enjoy', 'enter', 'equal',
'event', 'error', 'every', 'exact', 'elite', 'elbow', 'email', 'empty',
'faith', 'false', 'fancy', 'farms', 'fatal', 'fault', 'favor', 'feast', 'fever', 'field', 'fight', 'final', 'first', 'flash', 'fleet',
'flame', 'flask', 'floor', 'flour', 'focus', 'force', 'forum', 'found', 'frame', 'fresh', 'front', 'fruit', 'funny', 'fully', 'future',
'fifty', 'forty', 'frost', 'fever', 'fiber', 'field', 'final', 'first', 'flash', 'floor', 'focus', 'force', 'fresh', 'front', 'fruit',
'funny', 'favor', 'faith',
'gains', 'game', 'garden', 'gather', 'gauge', 'general', 'gentle', 'giant', 'gift', 'given', 'glass', 'globe', 'glory', 'glove', 'going',
'gold', 'grace', 'grade', 'grand', 'grant', 'grape', 'grass', 'grave', 'great', 'green', 'grief', 'grind', 'group', 'grow', 'guard',
'guest', 'guide', 'guilt', 'guitar', 'given', 'going', 'gold', 'great', 'green', 'group', 'grow', 'guide', 'giant', 'gift', 'glass',
'grace', 'grade', 'grass', 'grape', 'grand', 'gamer'
'habit', 'hairy', 'hands', 'handy', 'happy', 'hardy', 'haste', 'hatch', 'haven', 'hazel', 'heart', 'heavy',
'hello', 'hills', 'hinge', 'hobby', 'hoist', 'honey', 'honor', 'horse', 'hotel', 'house', 'human', 'humor',
 'hurry', 'hover', 'holds', 'hoops', 'homes', 'hoped', 'hoped', 'happy', 'heavy', 'hello', 'heart', 'house', 
'human', 'horse', 'hotel', 'honey', 'honor', 'hands', 'handy', 'hills', 'hobby',
'hoist', 'hurry', 'hover', 'hatch', 'haven',
'ideal', 'ideas', 'image', 'imply', 'index', 'inner', 'input', 'issue', 'inbox', 'incur', 'inlet', 'irate', 'irony', 'islet', 'icing', 'igloo',
 'image', 'input', 'inner', 'index', 'issue', 'irony', 'ideal', 'ideas', 'image', 'imply', 'index', 'inner', 'input', 'issue', 'inbox', 'inlet',
  'irate', 'icing', 'idiom', 'igloo', 'incur', 'islet', 'idled', 'idler', 'irony', 'image', 'input', 'inner',
  'jacket', 'jaggy', 'jaunt', 'jelly', 'jerky', 'jetty', 'jewel', 'jiffy', 'jived', 'jives', 'joint', 'joist',
   'joker', 'jolly', 'jolts', 'joule', 'joust', 'joyed', 'judge', 'juice', 'juicy', 'jumbo', 'jumps', 'jumpy',
    'junta', 'juror', 'justs', 'jests', 'jails', 'jaded', 'jacks', 'jeans', 'jeers', 'jello', 'jests', 'jibes', 'jived', 'jiver', 'joins', 'joked', 'jokes',\
   'jokey', 'jolts', 'junky', 'junks', 'jural', 'jural', 'jests', 'jumpy'






];

let targetWord = '';
let currentRow = 0;
let currentCol = 0;
let gameOver = false;
let grid = [];
let keyboardState = {};

const gridElement = document.getElementById('grid');
const keyboardElement = document.getElementById('keyboard');
const messageElement = document.getElementById('message');
const resetBtn = document.getElementById('reset-btn');

// Initialize the game
function initGame() {
    targetWord = WORD_LIST[Math.floor(Math.random() * WORD_LIST.length)];
    currentRow = 0;
    currentCol = 0;
    gameOver = false;
    keyboardState = {};
    
    // Create grid
    gridElement.innerHTML = '';
    grid = [];
    for (let i = 0; i < 6; i++) {
        const row = [];
        const rowElement = document.createElement('div');
        rowElement.className = 'row';
        for (let j = 0; j < 5; j++) {
            const tile = document.createElement('div');
            tile.className = 'tile';
            rowElement.appendChild(tile);
            row.push(tile);
        }
        gridElement.appendChild(rowElement);
        grid.push(row);
    }
    
    // Create keyboard
    createKeyboard();
    
    messageElement.textContent = '';
    console.log('Target word:', targetWord); // For debugging
}

// Create virtual keyboard
function createKeyboard() {
    keyboardElement.innerHTML = '';
    const keyboardLayout = [
        ['Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P'],
        ['A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L'],
        ['ENTER', 'Z', 'X', 'C', 'V', 'B', 'N', 'M', 'BACKSPACE']
    ];
    
    keyboardLayout.forEach(row => {
        const rowElement = document.createElement('div');
        rowElement.className = 'keyboard-row';
        
        row.forEach(key => {
            const keyElement = document.createElement('button');
            keyElement.className = 'key';
            keyElement.textContent = key;
            if (key === 'ENTER' || key === 'BACKSPACE') {
                keyElement.classList.add('wide');
            }
            keyElement.addEventListener('click', () => handleKeyPress(key));
            rowElement.appendChild(keyElement);
        });
        
        keyboardElement.appendChild(rowElement);
    });
}

// Handle key press
function handleKeyPress(key) {
    if (gameOver) return;
    
    if (key === 'ENTER') {
        submitGuess();
    } else if (key === 'BACKSPACE') {
        deleteLetter();
    } else if (key.length === 1 && key.match(/[A-Z]/)) {
        addLetter(key);
    }
}

// Add letter to current position
function addLetter(letter) {
    if (currentCol < 5) {
        grid[currentRow][currentCol].textContent = letter;
        grid[currentRow][currentCol].classList.add('filled');
        currentCol++;
    }
}

// Delete letter from current position
function deleteLetter() {
    if (currentCol > 0) {
        currentCol--;
        grid[currentRow][currentCol].textContent = '';
        grid[currentRow][currentCol].classList.remove('filled');
    }
}

// Submit current guess
function submitGuess() {
    if (currentCol !== 5) {
        showMessage('Not enough letters');
        return;
    }
    
    const guess = grid[currentRow].map(tile => tile.textContent).join('');
    
    if (!WORD_LIST.includes(guess)) {
        showMessage('Not in word list');
        return;
    }
    
    // Check the guess
    const result = checkGuess(guess);
    
    // Update tile colors
    for (let i = 0; i < 5; i++) {
        const tile = grid[currentRow][i];
        tile.classList.add(result[i]);
        
        // Update keyboard state
        const letter = guess[i];
        if (!keyboardState[letter] || result[i] === 'correct') {
            keyboardState[letter] = result[i];
        } else if (keyboardState[letter] === 'absent' && result[i] === 'present') {
            keyboardState[letter] = 'present';
        }
    }
    
    updateKeyboard();
    
    // Check win/lose
    if (result.every(status => status === 'correct')) {
        gameOver = true;
        showMessage('Congratulations! You won!');
    } else if (currentRow === 5) {
        gameOver = true;
        showMessage(`Game over! The word was ${targetWord}`);
    } else {
        currentRow++;
        currentCol = 0;
    }
}

// Check guess against target word
function checkGuess(guess) {
    const result = Array(5).fill('absent');
    const targetLetters = targetWord.split('');
    const guessLetters = guess.split('');
    
    // First pass: mark correct positions
    for (let i = 0; i < 5; i++) {
        if (guessLetters[i] === targetLetters[i]) {
            result[i] = 'correct';
            targetLetters[i] = null;
            guessLetters[i] = null;
        }
    }
    
    // Second pass: mark present letters
    for (let i = 0; i < 5; i++) {
        if (guessLetters[i] && targetLetters.includes(guessLetters[i])) {
            result[i] = 'present';
            targetLetters[targetLetters.indexOf(guessLetters[i])] = null;
        }
    }
    
    return result;
}

// Update keyboard colors
function updateKeyboard() {
    const keys = document.querySelectorAll('.key');
    keys.forEach(key => {
        const letter = key.textContent;
        if (keyboardState[letter]) {
            key.className = 'key ' + keyboardState[letter];
        }
    });
}

// Show message
function showMessage(text) {
    messageElement.textContent = text;
    setTimeout(() => {
        messageElement.textContent = '';
    }, 2000);
}

// Event listeners
document.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') {
        handleKeyPress('ENTER');
    } else if (e.key === 'Backspace') {
        handleKeyPress('BACKSPACE');
    } else if (e.key.match(/^[a-zA-Z]$/)) {
        handleKeyPress(e.key.toUpperCase());
    }
});

resetBtn.addEventListener('click', initGame);

// Start the game
initGame();