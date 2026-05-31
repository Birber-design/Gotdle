import { initializeApp } from "https://www.gstatic.com/firebasejs/12.0.0/firebase-app.js";
import { getFirestore, collection, addDoc, getDocs, serverTimestamp } from "https://www.gstatic.com/firebasejs/12.0.0/firebase-firestore.js";

console.log("JS IS RUNNING");
/* ==========================================
   GOTDLE CLIMBING QUIZ - JAVASCRIPT
   ========================================== */

const climberImages = {
  adam: 'https://img.olympics.com/images/image/private/t_1-1_300/f_auto/v1707489700/primary/ryohdpaupufrjqfdbzri',
  mejdi: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTlvGqSQooH2iXwVl6e9LVLuZGhv894qRvUmA&s',
  alex: 'https://media.gq.com/photos/5a09ff16b145834e27c427e0/4:3/w_3347,h_2510,c_limit/Alex%20Honnold-1217-GQ-MORG01-01.jpg',
  janja: 'https://i0.wp.com/thehill.com/wp-content/uploads/sites/2/2024/08/66b75d8c823191.22814523.jpeg?w=2000&ssl=1',
  magnus: 'https://altitudeclimbing.com/wp-content/uploads/2025/06/retreat-kalymnos-april-2026-3-Magnus-Midtbo@2x.jpg'
};

const climbers = {
  adam: {
    name: 'Adam Ondra',
    info: 'Adam Ondra is one of the greatest climbers in the world. He is from the Czech Republic and is known for being extremely strong in both sport climbing and bouldering. Many people consider him one of the best all-around climbers in history because he has pushed the limits of what is possible in climbing. He became famous for climbing some of the hardest routes ever done in the world. Adam is also known for his intense focus and powerful style. When he climbs, he often looks very serious because he is thinking carefully about every move. He has completed climbs that almost nobody else has been able to finish, including some of the most difficult rock routes ever created. Adam also competed in the Olympics, representing climbing on a global stage. Even though he is already at the top level, he continues to train hard and try new challenges. Many young climbers look up to him because of his dedication, strength, and love for the sport.'
  },
  mejdi: {
    name: 'Mejdi Schalck',
    info: 'Mejdi Schalck is a talented climber from France who is known for his speed, power, and exciting climbing style. He became famous in competition bouldering because of how quickly he can solve difficult climbing problems. Mejdi is one of the strongest young climbers in the world and has competed against many top athletes in international climbing competitions. People enjoy watching Mejdi climb because he moves very fast and takes big risks on difficult routes. He is especially good at dynamic moves, where climbers jump or move quickly between holds. His energy and confidence make him exciting to watch during competitions. Mejdi trains very hard and continues improving every year, becoming one of the rising stars in modern climbing and bouldering.'
  },
  alex: {
    name: 'Alex Honnold',
    info: 'Alex Honnold is one of the most famous climbers in the world. He is known for free solo climbing, which means climbing without ropes or safety equipment. One of his biggest achievements was climbing the giant cliff El Capitan in Yosemite National Park completely alone without any protection. This climb was shown in the famous movie Free Solo. The movie became very popular because people were shocked by how dangerous the climb was Alex is known for staying very calm and focused even in scary situations high above the ground. Many people say he has almost no fear. He also climbed famous buildings and walls around the world, including Taipei 101 in Taiwan during a live event. Climbers admire him because of his strength, balance, smart climbing skills, and bravery. Besides climbing, he also helps charities and raises awareness about environmental issues.'
  },
  janja: {
    name: 'Janja Garnbret',
    info: 'Janja Garnbret is one of the best female climbers in the world. She is from Slovenia and became famous because of her amazing strength, balance, and climbing skills. Janja is especially known for competition climbing and bouldering, where she has won many world championships and international competitions. She also won a gold medal in the Olympics, making her one of the biggest stars in climbing history. Many people admire Janja because she climbs very smoothly and makes difficult routes look easy. She is known for her strong mindset, confidence, and hard work during training. Even when climbs are extremely difficult, she stays calm and focused. Janja has inspired many young climbers around the world, especially girls who want to start climbing. Besides competitions, she also enjoys outdoor climbing and continues to push the limits of the sport.'
  },
  magnus: {
    name: 'Magnus Midtbø',
    info: 'Magnus Midtbø is a famous climber from Norway. He is known for his incredible strength, powerful climbing style, and fun personality. Magnus started climbing when he was young and later became one of the best competitive climbers in Europe. He won many climbing competitions and became respected for his strong grip and athletic skills. Today, Magnus is also very popular on YouTube, where he makes videos about climbing, training, challenges, and adventures with other athletes and famous climbers. Many people enjoy watching his videos because they are exciting, funny, and show how difficult climbing can be. Magnus is known for trying crazy climbing challenges and testing his strength in different sports. He has inspired many people to start climbing and stay active. Even after leaving professional competitions, he continues to be one of the most famous climbers on the internet.'
  }
};

const quizzes = {
  adam: [
    { type: 'text', question: 'Where is Adam Ondra from?', answers: ['Czech Republic', 'Poland', 'Slovakia', 'Hungary', 'Germany'], correct: 0 },
    { type: 'text', question: 'What types of climbing is Adam Ondra known for?', answers: ['Sport climbing and bouldering', 'Free solo climbing', 'Ice climbing', 'Mountaineering', 'Indoor climbing only'], correct: 0 },
    { type: 'text', question: 'What is Adam known for in his climbing style?', answers: ['Intense focus and powerful style', 'Taking unnecessary risks', 'Rushing through climbs', 'Being distracted', 'Climbing alone without safety'], correct: 0 },
    { type: 'text', question: 'Did Adam Ondra compete in the Olympics?', answers: ['Yes', 'No', 'Maybe', 'Only in youth competitions', 'He refused to compete'], correct: 0 },
    { type: 'text', question: 'What is Adam considered by many people?', answers: ['One of the best all-around climbers in history', 'Just a beginner', 'Only good at one type of climbing', 'Not very dedicated', 'Only famous for competitions'], correct: 0 },
    { type: 'text', question: 'What has Adam pushed in climbing?', answers: ['The limits of what is possible in climbing', 'Only easy routes', 'Safety regulations', 'Competition rules', 'Climbing equipment'], correct: 0 },
    { type: 'text', question: 'How does Adam look when he climbs?', answers: ['Very serious, thinking carefully about every move', 'Distracted and unfocused', 'Rushing and careless', 'Smiling and joking', 'Bored and uninterested'], correct: 0 },
    { type: 'text', question: 'What has Adam completed that almost nobody else has?', answers: ['Some of the most difficult rock routes ever created', 'Only easy beginner routes', 'No notable climbs', 'Only indoor climbs', 'Only competitions'], correct: 0 },
    { type: 'text', question: 'What does Adam continue to do despite being at the top level?', answers: ['Train hard and try new challenges', 'Retire from climbing', 'Only compete occasionally', 'Stop training', 'Focus only on easy climbs'], correct: 0 },
    { type: 'text', question: 'Why do many young climbers look up to Adam?', answers: ['Because of his dedication, strength, and love for the sport', 'Because he takes it easy', 'Because he avoids challenges', 'Because he doesn\'t train hard', 'Because he only cares about fame'], correct: 0 },
    { type: 'picture', question: 'Which climber is Adam Ondra?', imagePositions: ['adam', 'mejdi', 'alex', 'janja', 'magnus'], correct: 0 }
  ],
  mejdi: [
    { type: 'text', question: 'Which country is Mejdi Schalck from?', answers: ['France', 'Germany', 'Italy', 'Spain', 'Belgium'], correct: 0 },
    { type: 'text', question: 'What is Mejdi Schalck known for?', answers: ['Speed and power in bouldering', 'Free solo climbing', 'Mountain climbing', 'Ice climbing', 'Rock formations study'], correct: 0 },
    { type: 'text', question: 'What special climbing move is Mejdi especially good at?', answers: ['Dynamic moves with jumping', 'Slow climbing', 'Resting between holds', 'Climbing downward', 'Balance techniques'], correct: 0 },
    { type: 'text', question: 'What makes Mejdi exciting to watch during competitions?', answers: ['He moves very fast and takes big risks', 'He climbs slowly and carefully', 'He refuses to compete', 'He helps other climbers', 'He uses equipment help'], correct: 0 },
    { type: 'text', question: 'What type of climbing did Mejdi become famous in?', answers: ['Competition bouldering', 'Free solo climbing', 'Ice climbing', 'Mountain climbing', 'Indoor climbing'], correct: 0 },
    { type: 'text', question: 'How does Mejdi solve difficult climbing problems?', answers: ['Quickly', 'Slowly over time', 'With help from others', 'By avoiding them', 'Only with equipment'], correct: 0 },
    { type: 'text', question: 'What is Mejdi considered?', answers: ['One of the strongest young climbers in the world', 'A beginner climber', 'Only good at easy routes', 'Not competitive', 'Only famous for videos'], correct: 0 },
    { type: 'text', question: 'What has Mejdi competed against?', answers: ['Many top athletes in international climbing competitions', 'Only local climbers', 'No competitions', 'Only youth competitions', 'Only himself'], correct: 0 },
    { type: 'text', question: 'What makes Mejdi exciting to watch besides his speed?', answers: ['His energy and confidence', 'His slow pace', 'His lack of confidence', 'His avoidance of risks', 'His use of safety equipment'], correct: 0 },
    { type: 'text', question: 'What is Mejdi becoming in modern climbing?', answers: ['One of the rising stars in modern climbing and bouldering', 'A retired climber', 'Only a coach', 'Not well known', 'Only good at one style'], correct: 0 },
    { type: 'picture', question: 'Which climber is Mejdi Schalck?', imagePositions: ['adam', 'mejdi', 'alex', 'janja', 'magnus'], correct: 1 }
  ],
  alex: [
    { type: 'text', question: 'What type of climbing is Alex Honnold most famous for?', answers: ['Free solo climbing', 'Bouldering', 'Indoor climbing', 'Mountain climbing', 'Competition climbing'], correct: 0 },
    { type: 'text', question: 'Which cliff did Alex Honnold climb without ropes?', answers: ['El Capitan in Yosemite', 'Half Dome', 'K2', 'Everest', 'Mont Blanc'], correct: 0 },
    { type: 'text', question: 'What movie documented Alex\'s El Capitan climb?', answers: ['Free Solo', 'Climbing High', 'The Wall', 'Vertical Limit', 'Peak Performance'], correct: 0 },
    { type: 'text', question: 'Which building did Alex Honnold climb?', answers: ['Taipei 101 in Taiwan', 'Burj Khalifa', 'Tokyo Tower', 'CN Tower', 'Empire State Building'], correct: 0 },
    { type: 'text', question: 'What does free solo climbing mean?', answers: ['Climbing without ropes or safety equipment', 'Climbing with a partner', 'Climbing indoors', 'Climbing mountains', 'Climbing competitions'], correct: 0 },
    { type: 'text', question: 'What was shown in the movie Free Solo?', answers: ['Alex\'s El Capitan climb', 'A different climber\'s story', 'Mountain climbing', 'Indoor bouldering', 'Competition highlights'], correct: 0 },
    { type: 'text', question: 'Why did the movie Free Solo become popular?', answers: ['People were shocked by how dangerous the climb was', 'It was about easy climbing', 'It showed safe techniques', 'It was a comedy', 'It focused on equipment'], correct: 0 },
    { type: 'text', question: 'How is Alex known for staying during climbs?', answers: ['Very calm and focused even in scary situations', 'Panicked and unfocused', 'Distracted by surroundings', 'Rushing through moves', 'Avoiding high places'], correct: 0 },
    { type: 'text', question: 'What do many people say Alex has?', answers: ['Almost no fear', 'Too much fear', 'Average fear levels', 'Fear of heights', 'Fear of climbing'], correct: 0 },
    { type: 'text', question: 'What does Alex do besides climbing?', answers: ['Helps charities and raises awareness about environmental issues', 'Only climbs', 'Only competes', 'Only trains', 'Only watches movies'], correct: 0 },
    { type: 'text', question: 'Why do climbers admire Alex?', answers: ['Because of his strength, balance, smart climbing skills, and bravery', 'Because he avoids risks', 'Because he uses lots of safety gear', 'Because he climbs slowly', 'Because he doesn\'t train hard'], correct: 0 },
    { type: 'picture', question: 'Which climber is Alex Honnold?', imagePositions: ['adam', 'mejdi', 'alex', 'janja', 'magnus'], correct: 2 }
  ],
  janja: [
    { type: 'text', question: 'Which country is Janja Garnbret from?', answers: ['Slovenia', 'Croatia', 'Bosnia', 'Serbia', 'Macedonia'], correct: 0 },
    { type: 'text', question: 'What Olympic achievement did Janja Garnbret accomplish?', answers: ['Won a gold medal', 'Won a silver medal', 'Won a bronze medal', 'Competed but didn\'t medal', 'Didn\'t compete'], correct: 0 },
    { type: 'text', question: 'What is Janja known for in her climbing?', answers: ['Climbing smoothly and making routes look easy', 'Climbing very slowly', 'Making mistakes often', 'Refusing to compete', 'Using safety ropes always'], correct: 0 },
    { type: 'text', question: 'What has Janja won many of?', answers: ['World championships and international competitions', 'Olympic medals only', 'YouTube subscribers', 'Magazine covers', 'Social media likes'], correct: 0 },
    { type: 'text', question: 'What is Janja considered?', answers: ['One of the best female climbers in the world', 'A beginner climber', 'Only good at one style', 'Not competitive', 'Only famous for looks'], correct: 0 },
    { type: 'text', question: 'What is Janja especially known for?', answers: ['Competition climbing and bouldering', 'Free solo climbing', 'Mountain climbing', 'Ice climbing', 'Indoor climbing only'], correct: 0 },
    { type: 'text', question: 'What makes Janja one of the biggest stars in climbing history?', answers: ['Won a gold medal in the Olympics', 'Won many YouTube awards', 'Became famous for videos', 'Only competed locally', 'Avoided major competitions'], correct: 0 },
    { type: 'text', question: 'What is Janja known for besides her climbing skills?', answers: ['Strong mindset, confidence, and hard work during training', 'Avoiding training', 'Taking it easy', 'Not being dedicated', 'Only focusing on competitions'], correct: 0 },
    { type: 'text', question: 'How does Janja stay during extremely difficult climbs?', answers: ['Calm and focused', 'Panicked and unfocused', 'Distracted', 'Rushing', 'Giving up easily'], correct: 0 },
    { type: 'text', question: 'Who has Janja inspired?', answers: ['Many young climbers around the world, especially girls', 'Only professional climbers', 'No one', 'Only boys', 'Only adults'], correct: 0 },
    { type: 'text', question: 'What does Janja enjoy besides competitions?', answers: ['Outdoor climbing', 'Only indoor climbing', 'Only watching others', 'Only training', 'Only resting'], correct: 0 },
    { type: 'picture', question: 'Which climber is Janja Garnbret?', imagePositions: ['adam', 'mejdi', 'alex', 'janja', 'magnus'], correct: 3 }
  ],
  magnus: [
    { type: 'text', question: 'Which country is Magnus Midtbø from?', answers: ['Norway', 'Sweden', 'Denmark', 'Finland', 'Iceland'], correct: 0 },
    { type: 'text', question: 'What sport other than climbing is Magnus known for testing?', answers: ['Various sports and athletic challenges', 'Only climbing', 'Only weightlifting', 'Only gymnastics', 'Only running'], correct: 0 },
    { type: 'text', question: 'Where is Magnus very popular today?', answers: ['On YouTube', 'In Olympics only', 'In local gyms', 'In magazines only', 'In documentaries only'], correct: 0 },
    { type: 'text', question: 'What are Magnus\' YouTube videos about?', answers: ['Climbing, training, challenges, and adventures', 'Only instructional climbing', 'Only extreme sports', 'Only competition results', 'Only equipment reviews'], correct: 0 },
    { type: 'text', question: 'What is Magnus known for besides climbing?', answers: ['Incredible strength, powerful climbing style, and fun personality', 'Weak strength', 'Slow style', 'Serious personality', 'Avoiding challenges'], correct: 0 },
    { type: 'text', question: 'When did Magnus start climbing?', answers: ['When he was young', 'As an adult', 'Recently', 'Never started', 'Only in competitions'], correct: 0 },
    { type: 'text', question: 'What became Magnus later in his career?', answers: ['One of the best competitive climbers in Europe', 'A beginner', 'Only good locally', 'Not competitive', 'Retired early'], correct: 0 },
    { type: 'text', question: 'What is Magnus respected for?', answers: ['His strong grip and athletic skills', 'His slow pace', 'His lack of strength', 'His avoidance of training', 'His focus on videos only'], correct: 0 },
    { type: 'text', question: 'Why do people enjoy watching Magnus\' videos?', answers: ['They are exciting, funny, and show how difficult climbing can be', 'They are boring', 'They are too serious', 'They avoid showing difficulty', 'They are only about equipment'], correct: 0 },
    { type: 'text', question: 'What is Magnus known for trying?', answers: ['Crazy climbing challenges', 'Only easy challenges', 'No challenges', 'Only safe activities', 'Only competitions'], correct: 0 },
    { type: 'text', question: 'What has Magnus inspired people to do?', answers: ['Start climbing and stay active', 'Stop climbing', 'Avoid activity', 'Only watch videos', 'Only compete'], correct: 0 },
    { type: 'picture', question: 'Which climber is Magnus Midtbø?', imagePositions: ['adam', 'mejdi', 'alex', 'janja', 'magnus'], correct: 4 }
  ]
};

/* ==========================================
   STATE VARIABLES/* ==========================================
   STATE VARIABLES
   ========================================== */

let currentClimber = null;
let currentPlayerName = 'Guest';
let quizWinCounts = {};
let currentQuestion = 0;
let shuffledQuestions = [];
let userAnswers = [];
let questionData = [];

/* ==========================================
   DOM ELEMENTS
   ========================================== */

const popup = document.getElementById('popup');
const quizContainer = document.getElementById('quiz-container');
const resultsContainer = document.getElementById('results-container');
const questionNumber = document.getElementById('question-number');
const questionContainer = document.getElementById('question-container');
const answersContainer = document.getElementById('answers-container');
const quizTitle = document.getElementById('quiz-title');
const scoreDisplay = document.getElementById('score-display');
const reviewContainer = document.getElementById('review-container');

/* ==========================================
   UTILITY FUNCTIONS
   ========================================== */

/**
 * Shuffles an array using Fisher-Yates algorithm
 * @param {Array} array - Array to shuffle
 * @returns {Array} - New shuffled array
 */
function shuffleArray(array) {
  const shuffled = [...array];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
}

async function saveQuizWin(playerName, quizName, playerScore) {
  try {
    await addDoc(collection(db, 'quiz_wins'), {
      playerName,
      quizName,
      playerScore,
      createdAt: serverTimestamp()
    });
    console.log('Quiz win saved:', playerName, quizName, playerScore);
    await fetchQuizWinCounts();
  } catch (error) {
    console.error('Error saving quiz win:', error);
  }
}

function setGreeting() {
  const greeting = document.getElementById('greeting');
  greeting.innerText = currentPlayerName ? `Welcome, ${currentPlayerName}!` : 'Welcome, Guest!';
}

function openLoginModal() {
  const modal = document.getElementById('login-modal');
  modal.style.display = 'flex';
}

function closeLoginModal() {
  const modal = document.getElementById('login-modal');
  modal.style.display = 'none';
}

function savePlayerName() {
  const input = document.getElementById('player-name-input');
  const name = input.value.trim() || 'Guest';
  currentPlayerName = name;
  localStorage.setItem('quizPlayerName', name);
  setGreeting();
  closeLoginModal();
}

async function fetchQuizWinCounts() {
  try {
    const snapshot = await getDocs(collection(db, 'quiz_wins'));
    const counts = {
      adam: 0,
      mejdi: 0,
      alex: 0,
      janja: 0,
      magnus: 0
    };
    snapshot.forEach(doc => {
      const data = doc.data();
      const found = Object.entries(climbers).find(([, info]) => info.name === data.quizName);
      if (found) {
        counts[found[0]] = (counts[found[0]] || 0) + 1;
      }
    });
    quizWinCounts = counts;
    updateWinBadges();
  } catch (error) {
    console.error('Error loading win counts:', error);
  }
}

function updateWinBadges() {
  Object.entries(quizWinCounts).forEach(([climber, count]) => {
    const badge = document.getElementById(`wins-${climber}`);
    if (badge) {
      badge.innerText = count;
    }
  });
}

function renderWinBadges() {
  document.querySelectorAll('.card[data-climber]').forEach(card => {
    const climber = card.dataset.climber;
    if (card.querySelector('.card-badge')) return;
    card.insertAdjacentHTML('beforeend', `
      <button class="card-badge" onclick="showWins('${climber}'); event.stopPropagation();" aria-label="Show wins for ${climbers[climber].name}">
        <span class="trophy">🏆</span>
        <span id="wins-${climber}">0</span>
      </button>
    `);
  });
}

function showWins(climber) {
  const count = quizWinCounts[climber] || 0;
  const modal = document.getElementById('wins-modal');
  document.getElementById('wins-modal-text').innerText = `Number of wins in this quiz: ${count}`;
  modal.style.display = 'flex';
}

function closeWinsModal() {
  const modal = document.getElementById('wins-modal');
  modal.style.display = 'none';
}

/* ==========================================
   POPUP FUNCTIONS
   ========================================== */

/**
 * Shows climber information in a popup
 * @param {string} climber - Climber ID
 */
function showInfo(climber) {
  currentClimber = climber;
  document.getElementById('popup-title').innerText = climbers[climber].name;
  
  const img = document.getElementById('popup-image');
  img.src = climberImages[climber];
  img.alt = climbers[climber].name;
  
  document.getElementById('popup-text').innerText = climbers[climber].info;
  popup.style.display = 'flex';
}

/**
 * Closes the popup
 */
function closePopup() {
  popup.style.display = 'none';
}

/* ==========================================
   QUIZ FUNCTIONS
   ========================================== */

/**
 * Initializes and starts the quiz
 */
function startQuiz() {
  if (!currentClimber) return;
  
  // Shuffle questions and limit to 5
  shuffledQuestions = shuffleArray(quizzes[currentClimber]).slice(0, 5);
  userAnswers = new Array(shuffledQuestions.length).fill(null);
  currentQuestion = 0;
  questionData = [];
  
  // Process each question to shuffle answers/positions
  shuffledQuestions.forEach(q => {
    if (q.type === 'picture') {
      const shuffled = shuffleArray(q.imagePositions);
      questionData.push({
        shuffledPositions: shuffled,
        correctIndex: shuffled.indexOf(q.imagePositions[q.correct])
      });
    } else {
      const correct = q.answers[q.correct];
      const shuffled = shuffleArray(q.answers);
      questionData.push({
        shuffledAnswers: shuffled,
        correctIndex: shuffled.indexOf(correct)
      });
    }
  });
  
  popup.style.display = 'none';
  quizContainer.style.display = 'flex';
  displayQuestion();
}

/**
 * Displays the current question
 */
function displayQuestion() {
  const q = shuffledQuestions[currentQuestion];
  quizTitle.innerText = climbers[currentClimber].name + ' Quiz';
  questionNumber.innerText = 'Question ' + (currentQuestion + 1) + ' of ' + shuffledQuestions.length;
  
  if (q.type === 'picture') {
    displayPictureQuestion(q);
  } else {
    displayTextQuestion(q);
  }
}

/**
 * Displays a text-based question
 * @param {Object} q - Question object
 */
function displayTextQuestion(q) {
  questionContainer.innerHTML = '<h3>' + q.question + '</h3>';
  answersContainer.style.display = 'flex';
  answersContainer.style.flexDirection = 'column';
  answersContainer.innerHTML = '';
  
  const data = questionData[currentQuestion];
  data.shuffledAnswers.forEach((answer, index) => {
    const button = document.createElement('button');
    button.className = 'answer-option';
    if (userAnswers[currentQuestion] === index) {
      button.classList.add('selected');
    }
    button.innerText = answer;
    button.onclick = () => selectAnswer(index);
    answersContainer.appendChild(button);
  });
}

/**
 * Displays a picture-based question
 * @param {Object} q - Question object
 */
function displayPictureQuestion(q) {
  questionContainer.innerHTML = '<h3>' + q.question + '</h3>';
  answersContainer.style.display = 'grid';
  answersContainer.style.gridTemplateColumns = 'repeat(auto-fit, minmax(120px, 1fr))';
  answersContainer.innerHTML = '';
  
  const data = questionData[currentQuestion];
  data.shuffledPositions.forEach((key, index) => {
    const div = document.createElement('div');
    div.className = 'picture-option';
    if (userAnswers[currentQuestion] === index) {
      div.classList.add('selected');
    }
    div.innerHTML = "<img src='" + climberImages[key] + "' alt='" + climbers[key].name + "'>";
    div.onclick = () => selectAnswer(index);
    answersContainer.appendChild(div);
  });
}

/**
 * Records the selected answer
 * @param {number} index - Index of selected answer
 */
function selectAnswer(index) {
  userAnswers[currentQuestion] = index;
  displayQuestion();
}

/**
 * Moves to the next question
 */
function nextQuestion() {
  if (currentQuestion < shuffledQuestions.length - 1) {
    currentQuestion++;
    displayQuestion();
  }
}

/**
 * Moves to the previous question
 */
function previousQuestion() {
  if (currentQuestion > 0) {
    currentQuestion--;
    displayQuestion();
  }
}

/**
 * Calculates score and displays results
 */
function finishQuiz() {
  let score = 0;
  for (let i = 0; i < shuffledQuestions.length; i++) {
    if (userAnswers[i] === questionData[i].correctIndex) {
      score++;
    }
  }
  
  quizContainer.style.display = 'none';
  resultsContainer.style.display = 'flex';
  scoreDisplay.innerText = 'You scored ' + score + ' out of ' + shuffledQuestions.length + '!';
  const quizName = climbers[currentClimber].name;
  if (score === shuffledQuestions.length) {
    saveQuizWin(currentPlayerName, quizName, score);
  }
  
  // Display detailed review
  reviewContainer.innerHTML = '';
  for (let i = 0; i < shuffledQuestions.length; i++) {
    const q = shuffledQuestions[i];
    const data = questionData[i];
    const isCorrect = userAnswers[i] === data.correctIndex;
    
    const item = document.createElement('div');
    item.className = 'review-item ' + (isCorrect ? 'correct' : 'incorrect');
    
    let answerText = '';
    if (q.type === 'picture') {
      const selected = data.shuffledPositions[userAnswers[i]] || 'unknown';
      const correct = data.shuffledPositions[data.correctIndex];
      answerText = 'You selected: <strong>' + climbers[selected].name + '</strong><br>Correct answer: <strong>' + climbers[correct].name + '</strong>';
    } else {
      answerText = 'You selected: <strong>' + (data.shuffledAnswers[userAnswers[i]] || 'No answer') + '</strong><br>Correct answer: <strong>' + data.shuffledAnswers[data.correctIndex] + '</strong>';
    }
    
    item.innerHTML = '<strong>' + (i + 1) + '. ' + q.question + '</strong> - ' + (isCorrect ? '✓ Correct' : '✗ Incorrect') + '<br>' + answerText;
    reviewContainer.appendChild(item);
  }
}

/**
 * Quits the quiz and returns to home
 */
function quitQuiz() {
  quizContainer.style.display = 'none';
  currentQuestion = 0;
  shuffledQuestions = [];
  userAnswers = [];
  questionData = [];
  quizTitle.innerText = 'Quiz';
  popup.style.display = 'none';
}

/**
 * Closes results and returns to climber popup
 */
function closeResults() {
  resultsContainer.style.display = 'none';
  popup.style.display = 'flex';
  currentQuestion = 0;
  shuffledQuestions = [];
  userAnswers = [];
  questionData = [];
}

window.showInfo = showInfo;
window.closePopup = closePopup;
window.startQuiz = startQuiz;
window.previousQuestion = previousQuestion;
window.nextQuestion = nextQuestion;
window.finishQuiz = finishQuiz;
window.quitQuiz = quitQuiz;
window.closeResults = closeResults;
window.showWins = showWins;
window.closeWinsModal = closeWinsModal;
window.savePlayerName = savePlayerName;

/* ==========================================

   EVENT LISTENERS
   ========================================== */

// Initialize app UI
window.addEventListener('load', async () => {
  renderWinBadges();

  const savedName = localStorage.getItem('quizPlayerName');
  if (savedName) {
    currentPlayerName = savedName;
    setGreeting();
  } else {
    openLoginModal();
  }

  await fetchQuizWinCounts();
});

// Close popup when clicking outside of it
window.onclick = (e) => {
  if (e.target === popup) {
    popup.style.display = 'none';
  }
  if (e.target === document.getElementById('login-modal')) {
    closeLoginModal();
  }
  if (e.target === document.getElementById('wins-modal')) {
    closeWinsModal();
  }
  
};


const firebaseConfig = {
  apiKey: "AIzaSyAZ_b7BxE_SlJ6tKIe2W0ZJN2cDoxJTCCI",
  authDomain: "climbersquiz.firebaseapp.com",
  projectId: "climbersquiz",
  storageBucket: "climbersquiz.firebasestorage.app",
  messagingSenderId: "981254510760",
  appId: "1:981254510760:web:4ecab5f09e9e7ef96a0a9d"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

console.log("🔥 Firebase connected");