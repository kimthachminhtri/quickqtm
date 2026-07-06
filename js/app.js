// ===== Global Variables =====
let currentQuestions = [];
let currentQuestionIndex = 0;
let userAnswers = [];
let quizMode = 'practice'; // 'practice' or 'exam'
let examTimer = null;
let examTimeRemaining = 0;

// ===== Global Error Handler =====
window.addEventListener('error', function(e) {
    console.error('=== GLOBAL ERROR ===');
    console.error('Message:', e.message);
    console.error('File:', e.filename);
    console.error('Line:', e.lineno, 'Column:', e.colno);
    console.error('Error object:', e.error);
});

// ===== Helper Functions =====
function getElement(id) {
    const element = document.getElementById(id);
    if (!element) {
        console.error(`Element with id "${id}" not found`);
    }
    return element;
}

function getElements(ids) {
    const elements = {};
    let allFound = true;
    ids.forEach(id => {
        elements[id] = document.getElementById(id);
        if (!elements[id]) {
            console.error(`Element with id "${id}" not found`);
            allFound = false;
        }
    });
    return allFound ? elements : null;
}

// ===== Page Navigation =====
document.addEventListener('DOMContentLoaded', function() {
    console.log('=== DOM Loaded ===');
    
    // Check if questions.js is loaded
    if (typeof questionBank === 'undefined') {
        console.error('ERROR: questionBank not found! questions.js may not be loaded.');
        alert('Lỗi: Không tải được ngân hàng câu hỏi. Vui lòng kiểm tra file questions.js');
        return;
    }
    
    if (typeof getQuestionsByTopic === 'undefined') {
        console.error('ERROR: getQuestionsByTopic function not found!');
        alert('Lỗi: Không tìm thấy hàm getQuestionsByTopic');
        return;
    }
    
    console.log('✓ questions.js loaded successfully');
    console.log('✓ Available topics:', Object.keys(questionBank));
    
    // Navigation
    const navLinks = document.querySelectorAll('.nav-link');
    console.log('✓ Found', navLinks.length, 'navigation links');
    
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const page = this.dataset.page;
            console.log('Navigation clicked:', page);
            showPage(page);
            
            // Update active nav
            navLinks.forEach(l => l.classList.remove('active'));
            this.classList.add('active');
        });
    });
    
    // Add event listener for submit button (backup)
    const submitBtn = document.getElementById('submit-btn');
    if (submitBtn) {
        submitBtn.addEventListener('click', function(e) {
            e.preventDefault();
            e.stopPropagation();
            console.log('Submit button clicked via event listener');
            submitQuiz();
        });
        console.log('✓ Submit button event listener added');
    } else {
        console.warn('⚠ Submit button not found in DOM');
    }
    
    // Load statistics
    loadStatistics();
    console.log('=== Initialization Complete ===');
});

function showPage(pageName) {
    const pages = document.querySelectorAll('.page');
    pages.forEach(page => page.classList.remove('active'));
    
    const targetPage = document.getElementById(pageName + '-page');
    if (targetPage) {
        targetPage.classList.add('active');
    }
}

// ===== Practice Mode =====
function startPractice(topic) {
    console.log('Starting practice for topic:', topic); // Debug
    
    quizMode = 'practice';
    currentQuestions = getQuestionsByTopic(topic, 10);
    
    if (!currentQuestions || currentQuestions.length === 0) {
        console.error('No questions found for topic:', topic);
        alert('Không tìm thấy câu hỏi cho chủ đề này!');
        return;
    }
    
    currentQuestionIndex = 0;
    userAnswers = new Array(currentQuestions.length).fill(null);
    window.reviewMode = false;
    
    // Navigate to practice page
    showPage('practice');
    
    // Update navigation
    const practiceLink = document.querySelector('[data-page="practice"]');
    const homeLink = document.querySelector('[data-page="home"]');
    if (practiceLink) practiceLink.classList.add('active');
    if (homeLink) homeLink.classList.remove('active');
    
    displayQuestion();
}

function displayQuestion() {
    if (!currentQuestions || currentQuestions.length === 0) {
        console.error('No questions available');
        return;
    }
    
    const question = currentQuestions[currentQuestionIndex];
    if (!question) {
        console.error('Current question not found');
        return;
    }
    
    const questionTextEl = document.getElementById('question-text');
    const currentQuestionEl = document.getElementById('current-question');
    const totalQuestionsEl = document.getElementById('total-questions');
    const answersContainer = document.getElementById('answers');
    
    if (!questionTextEl || !currentQuestionEl || !totalQuestionsEl || !answersContainer) {
        console.error('Question display elements not found');
        return;
    }
    
    questionTextEl.textContent = question.question;
    currentQuestionEl.textContent = currentQuestionIndex + 1;
    totalQuestionsEl.textContent = currentQuestions.length;
    
    // Display answers
    answersContainer.innerHTML = '';
    
    question.answers.forEach((answer, index) => {
        const answerDiv = document.createElement('div');
        answerDiv.className = 'answer-option';
        if (userAnswers[currentQuestionIndex] === index) {
            answerDiv.classList.add('selected');
        }
        
        answerDiv.innerHTML = `
            <input type="radio" name="answer" id="answer${index}" value="${index}"
                ${userAnswers[currentQuestionIndex] === index ? 'checked' : ''}>
            <label for="answer${index}" class="answer-label">${answer}</label>
        `;
        
        answerDiv.onclick = () => selectAnswer(index);
        answersContainer.appendChild(answerDiv);
    });
    
    // Update buttons visibility
    const prevBtn = document.getElementById('prev-btn');
    const nextBtn = document.getElementById('next-btn');
    const submitBtn = document.getElementById('submit-btn');
    
    if (prevBtn) {
        prevBtn.style.display = currentQuestionIndex > 0 ? 'inline-block' : 'none';
    }
    
    if (nextBtn) {
        nextBtn.style.display = currentQuestionIndex < currentQuestions.length - 1 ? 'inline-block' : 'none';
    }
    
    if (submitBtn) {
        submitBtn.style.display = currentQuestionIndex === currentQuestions.length - 1 ? 'inline-block' : 'none';
        // Ensure the button is clickable
        submitBtn.disabled = false;
        submitBtn.style.pointerEvents = 'auto';
        submitBtn.style.opacity = '1';
    }
}

function selectAnswer(answerIndex) {
    userAnswers[currentQuestionIndex] = answerIndex;
    
    // Update UI
    const answerOptions = document.querySelectorAll('.answer-option');
    answerOptions.forEach((option, index) => {
        if (option) {
            option.classList.remove('selected');
            if (index === answerIndex) {
                option.classList.add('selected');
                const input = option.querySelector('input');
                if (input) {
                    input.checked = true;
                }
            }
        }
    });
}

function previousQuestion() {
    if (currentQuestionIndex > 0) {
        currentQuestionIndex--;
        if (window.reviewMode) {
            displayQuestionWithAnswers();
        } else {
            displayQuestion();
        }
    }
}

function nextQuestion() {
    if (currentQuestionIndex < currentQuestions.length - 1) {
        currentQuestionIndex++;
        if (window.reviewMode) {
            displayQuestionWithAnswers();
        } else {
            displayQuestion();
        }
    }
}

function submitQuiz() {
    console.log('submitQuiz called'); // Debug log
    
    // Calculate score
    let correctCount = 0;
    currentQuestions.forEach((question, index) => {
        if (userAnswers[index] === question.correct) {
            correctCount++;
        }
    });
    
    const score = Math.round((correctCount / currentQuestions.length) * 100);
    
    console.log(`Score: ${score}%, Correct: ${correctCount}/${currentQuestions.length}`); // Debug log
    
    // Save to history
    saveToHistory({
        date: new Date().toISOString(),
        topic: 'Luyện tập',
        totalQuestions: currentQuestions.length,
        correctAnswers: correctCount,
        score: score,
        mode: 'practice'
    });
    
    // Show practice result
    showPracticeResult(correctCount, currentQuestions.length, score);
}

function showPracticeResult(correct, total, score) {
    const scorePercentageEl = document.getElementById('practice-score-percentage');
    const correctCountEl = document.getElementById('practice-correct-count');
    const wrongCountEl = document.getElementById('practice-wrong-count');
    const totalCountEl = document.getElementById('practice-total-count');
    const modal = document.getElementById('practice-result-modal');
    
    if (!scorePercentageEl || !correctCountEl || !wrongCountEl || !totalCountEl || !modal) {
        console.error('Practice result modal elements not found');
        alert(`Kết quả luyện tập: ${score}%\nĐúng: ${correct}/${total}`);
        return;
    }
    
    scorePercentageEl.textContent = score;
    correctCountEl.textContent = correct;
    wrongCountEl.textContent = total - correct;
    totalCountEl.textContent = total;
    
    modal.classList.add('active');
}

function closePracticeResult() {
    const resultModal = document.getElementById('practice-result-modal');
    if (resultModal) {
        resultModal.classList.remove('active');
    }
    
    window.reviewMode = false;
    showPage('home');
    
    const homeLink = document.querySelector('[data-page="home"]');
    const practiceLink = document.querySelector('[data-page="practice"]');
    
    if (homeLink) homeLink.classList.add('active');
    if (practiceLink) practiceLink.classList.remove('active');
}

function reviewPracticeAnswers() {
    const resultModal = document.getElementById('practice-result-modal');
    if (resultModal) {
        resultModal.classList.remove('active');
    }
    
    // Enable review mode
    window.reviewMode = true;
    currentQuestionIndex = 0;
    displayQuestionWithAnswers();
    
    // Update navigation buttons
    const prevBtn = document.getElementById('prev-btn');
    const nextBtn = document.getElementById('next-btn');
    const submitBtn = document.getElementById('submit-btn');
    
    if (prevBtn) prevBtn.style.display = 'inline-block';
    if (nextBtn) nextBtn.style.display = 'inline-block';
    if (submitBtn) submitBtn.style.display = 'none';
}

function displayQuestionWithAnswers() {
    if (!currentQuestions || currentQuestions.length === 0) {
        console.error('No questions available for review');
        return;
    }
    
    const question = currentQuestions[currentQuestionIndex];
    if (!question) {
        console.error('Current question not found for review');
        return;
    }
    
    const questionTextEl = document.getElementById('question-text');
    const currentQuestionEl = document.getElementById('current-question');
    const totalQuestionsEl = document.getElementById('total-questions');
    const answersContainer = document.getElementById('answers');
    
    if (!questionTextEl || !currentQuestionEl || !totalQuestionsEl || !answersContainer) {
        console.error('Review display elements not found');
        return;
    }
    
    questionTextEl.textContent = question.question;
    currentQuestionEl.textContent = currentQuestionIndex + 1;
    totalQuestionsEl.textContent = currentQuestions.length;
    
    // Display answers with correct/wrong indicators
    answersContainer.innerHTML = '';
    
    question.answers.forEach((answer, index) => {
        const answerDiv = document.createElement('div');
        answerDiv.className = 'answer-option';
        
        // Mark correct answer
        if (index === question.correct) {
            answerDiv.classList.add('correct');
            answerDiv.style.backgroundColor = '#d4edda';
            answerDiv.style.borderColor = '#28a745';
        }
        
        // Mark user's wrong answer
        if (index === userAnswers[currentQuestionIndex] && index !== question.correct) {
            answerDiv.classList.add('wrong');
            answerDiv.style.backgroundColor = '#f8d7da';
            answerDiv.style.borderColor = '#dc3545';
        }
        
        // Mark user's selected answer
        if (index === userAnswers[currentQuestionIndex]) {
            answerDiv.classList.add('selected');
        }
        
        answerDiv.innerHTML = `
            <input type="radio" name="answer" value="${index}" 
                ${index === userAnswers[currentQuestionIndex] ? 'checked' : ''} disabled>
            <label class="answer-label">${answer}</label>
            ${index === question.correct ? '<i class="fas fa-check-circle" style="color: #28a745; margin-left: 10px;"></i>' : ''}
            ${index === userAnswers[currentQuestionIndex] && index !== question.correct ? 
                '<i class="fas fa-times-circle" style="color: #dc3545; margin-left: 10px;"></i>' : ''}
        `;
        
        answersContainer.appendChild(answerDiv);
    });
    
    // Show explanation
    if (question.explanation) {
        const explanationDiv = document.createElement('div');
        explanationDiv.className = 'explanation';
        explanationDiv.style.cssText = `
            margin-top: 20px;
            padding: 15px;
            background: #e3f2fd;
            border-left: 4px solid #2196f3;
            border-radius: 4px;
        `;
        explanationDiv.innerHTML = `
            <strong><i class="fas fa-lightbulb"></i> Giải thích:</strong><br>
            ${question.explanation}
        `;
        answersContainer.appendChild(explanationDiv);
    }
}

function restartPractice() {
    const resultModal = document.getElementById('practice-result-modal');
    if (resultModal) {
        resultModal.classList.remove('active');
    }
    
    window.reviewMode = false;
    currentQuestionIndex = 0;
    userAnswers = new Array(currentQuestions.length).fill(null);
    displayQuestion();
}

// ===== Exam Mode =====
function startExam() {
    const topicSelect = document.getElementById('exam-topic');
    const questionInput = document.getElementById('exam-questions');
    const timeInput = document.getElementById('exam-time');
    
    if (!topicSelect || !questionInput || !timeInput) {
        console.error('Exam setup elements not found');
        alert('Lỗi: Không tìm thấy form cài đặt thi. Vui lòng reload trang.');
        return;
    }
    
    const topic = topicSelect.value;
    const questionCount = parseInt(questionInput.value);
    const timeMinutes = parseInt(timeInput.value);
    
    quizMode = 'exam';
    currentQuestions = getQuestionsByTopic(topic, questionCount);
    currentQuestionIndex = 0;
    userAnswers = new Array(currentQuestions.length).fill(null);
    examTimeRemaining = timeMinutes * 60; // Convert to seconds
    
    const setupDiv = document.getElementById('exam-setup');
    const containerDiv = document.getElementById('exam-container');
    
    if (!setupDiv || !containerDiv) {
        console.error('Exam containers not found');
        return;
    }
    
    setupDiv.style.display = 'none';
    containerDiv.style.display = 'block';
    
    displayExamQuestion();
    startExamTimer();
    createQuestionGrid();
}

function startExamTimer() {
    updateTimerDisplay();
    examTimer = setInterval(() => {
        examTimeRemaining--;
        updateTimerDisplay();
        
        if (examTimeRemaining <= 0) {
            clearInterval(examTimer);
            alert('Hết giờ làm bài!');
            endExam();
        }
    }, 1000);
}

function updateTimerDisplay() {
    const timerElement = document.getElementById('time-remaining');
    if (!timerElement) {
        console.error('time-remaining element not found');
        return;
    }
    
    const minutes = Math.floor(examTimeRemaining / 60);
    const seconds = examTimeRemaining % 60;
    timerElement.textContent = 
        `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
}

function createQuestionGrid() {
    const grid = document.getElementById('question-grid');
    if (!grid) {
        console.error('question-grid not found');
        return;
    }
    
    grid.innerHTML = '<h3 class="question-grid-title">Danh sách câu hỏi</h3><div class="question-numbers"></div>';
    
    const numbersContainer = grid.querySelector('.question-numbers');
    if (!numbersContainer) return;
    
    currentQuestions.forEach((_, index) => {
        const numberDiv = document.createElement('div');
        numberDiv.className = 'question-number';
        numberDiv.textContent = index + 1;
        numberDiv.onclick = () => jumpToQuestion(index);
        
        if (index === currentQuestionIndex) {
            numberDiv.classList.add('current');
        }
        if (userAnswers[index] !== null) {
            numberDiv.classList.add('answered');
        }
        
        numbersContainer.appendChild(numberDiv);
    });
}

function jumpToQuestion(index) {
    currentQuestionIndex = index;
    displayExamQuestion();
    createQuestionGrid();
}

function displayExamQuestion() {
    const question = currentQuestions[currentQuestionIndex];
    const container = document.getElementById('exam-question');
    
    if (!container) {
        console.error('exam-question container not found');
        return;
    }
    
    container.innerHTML = `
        <div class="quiz-container">
            <div class="quiz-header">
                <h3>Câu ${currentQuestionIndex + 1}/${currentQuestions.length}</h3>
            </div>
            <div class="quiz-body">
                <div class="question-text">${question.question}</div>
                <div class="answers" id="exam-answers"></div>
            </div>
            <div class="quiz-footer">
                <button class="btn btn-secondary" onclick="examPreviousQuestion()" 
                    ${currentQuestionIndex === 0 ? 'disabled' : ''}>
                    <i class="fas fa-arrow-left"></i> Câu trước
                </button>
                <button class="btn btn-primary" onclick="examNextQuestion()"
                    ${currentQuestionIndex === currentQuestions.length - 1 ? 'disabled' : ''}>
                    Câu sau <i class="fas fa-arrow-right"></i>
                </button>
            </div>
        </div>
    `;
    
    // Display answers
    const answersContainer = document.getElementById('exam-answers');
    if (!answersContainer) {
        console.error('exam-answers container not found');
        return;
    }
    
    question.answers.forEach((answer, index) => {
        const answerDiv = document.createElement('div');
        answerDiv.className = 'answer-option';
        if (userAnswers[currentQuestionIndex] === index) {
            answerDiv.classList.add('selected');
        }
        
        answerDiv.innerHTML = `
            <input type="radio" name="exam-answer" id="exam-answer${index}" value="${index}"
                ${userAnswers[currentQuestionIndex] === index ? 'checked' : ''}>
            <label for="exam-answer${index}" class="answer-label">${answer}</label>
        `;
        
        answerDiv.onclick = () => {
            selectAnswer(index);
            createQuestionGrid();
        };
        answersContainer.appendChild(answerDiv);
    });
}

// Separate functions for exam navigation to avoid conflicts
function examPreviousQuestion() {
    if (currentQuestionIndex > 0) {
        currentQuestionIndex--;
        displayExamQuestion();
        createQuestionGrid();
    }
}

function examNextQuestion() {
    if (currentQuestionIndex < currentQuestions.length - 1) {
        currentQuestionIndex++;
        displayExamQuestion();
        createQuestionGrid();
    }
}

function endExam() {
    console.log('endExam called'); // Debug log
    
    if (examTimer) {
        clearInterval(examTimer);
    }
    
    // Calculate time taken
    const timeInput = document.getElementById('exam-time');
    const totalTime = timeInput ? parseInt(timeInput.value) * 60 : 0;
    const timeTaken = totalTime - examTimeRemaining;
    const minutesTaken = Math.floor(timeTaken / 60);
    const secondsTaken = timeTaken % 60;
    const timeString = `${minutesTaken.toString().padStart(2, '0')}:${secondsTaken.toString().padStart(2, '0')}`;
    
    // Calculate score
    let correctCount = 0;
    currentQuestions.forEach((question, index) => {
        if (userAnswers[index] === question.correct) {
            correctCount++;
        }
    });
    
    const score = Math.round((correctCount / currentQuestions.length) * 100);
    
    console.log(`Exam Score: ${score}%, Correct: ${correctCount}/${currentQuestions.length}, Time: ${timeString}`); // Debug log
    
    // Save to history
    const topicSelect = document.getElementById('exam-topic');
    const topicText = topicSelect ? topicSelect.options[topicSelect.selectedIndex].text : 'Thi thử';
    
    saveToHistory({
        date: new Date().toISOString(),
        topic: topicText,
        totalQuestions: currentQuestions.length,
        correctAnswers: correctCount,
        score: score,
        timeTaken: timeString,
        mode: 'exam'
    });
    
    // Reset exam UI
    const setupDiv = document.getElementById('exam-setup');
    const containerDiv = document.getElementById('exam-container');
    
    if (setupDiv) setupDiv.style.display = 'block';
    if (containerDiv) containerDiv.style.display = 'none';
    
    // Show exam result
    showExamResult(correctCount, currentQuestions.length, score, timeString);
}

function showExamResult(correct, total, score, timeTaken) {
    const scorePercentageEl = document.getElementById('exam-score-percentage');
    const correctCountEl = document.getElementById('exam-correct-count');
    const wrongCountEl = document.getElementById('exam-wrong-count');
    const totalCountEl = document.getElementById('exam-total-count');
    const timeTakenEl = document.getElementById('exam-time-taken');
    const modal = document.getElementById('exam-result-modal');
    
    if (!scorePercentageEl || !correctCountEl || !wrongCountEl || !totalCountEl || !timeTakenEl || !modal) {
        console.error('Exam result modal elements not found');
        alert(`Kết quả thi thử: ${score}%\nĐúng: ${correct}/${total}\nThời gian: ${timeTaken}`);
        return;
    }
    
    scorePercentageEl.textContent = score;
    correctCountEl.textContent = correct;
    wrongCountEl.textContent = total - correct;
    totalCountEl.textContent = total;
    timeTakenEl.textContent = timeTaken;
    
    modal.classList.add('active');
}

function closeExamResult() {
    const resultModal = document.getElementById('exam-result-modal');
    if (resultModal) {
        resultModal.classList.remove('active');
    }
    
    window.reviewMode = false;
    showPage('home');
    
    const homeLink = document.querySelector('[data-page="home"]');
    const examLink = document.querySelector('[data-page="exam"]');
    
    if (homeLink) homeLink.classList.add('active');
    if (examLink) examLink.classList.remove('active');
}

function reviewExamAnswers() {
    const resultModal = document.getElementById('exam-result-modal');
    if (resultModal) {
        resultModal.classList.remove('active');
    }
    
    // Switch to exam page for review
    showPage('exam');
    
    const examLink = document.querySelector('[data-page="exam"]');
    if (examLink) examLink.classList.add('active');
    
    // Hide setup, show container
    const setupDiv = document.getElementById('exam-setup');
    const containerDiv = document.getElementById('exam-container');
    if (setupDiv) setupDiv.style.display = 'none';
    if (containerDiv) containerDiv.style.display = 'block';
    
    // Enable review mode
    window.reviewMode = true;
    currentQuestionIndex = 0;
    
    // Display first question with answers in exam container
    displayExamQuestionWithAnswers();
}

function displayExamQuestionWithAnswers() {
    const question = currentQuestions[currentQuestionIndex];
    const container = document.getElementById('exam-question');
    
    if (!container) {
        console.error('exam-question container not found');
        return;
    }
    
    container.innerHTML = `
        <div class="quiz-container">
            <div class="quiz-header">
                <h3>Câu ${currentQuestionIndex + 1}/${currentQuestions.length} - Xem lại đáp án</h3>
            </div>
            <div class="quiz-body">
                <div class="question-text">${question.question}</div>
                <div class="answers" id="exam-review-answers"></div>
            </div>
            <div class="quiz-footer">
                <button class="btn btn-secondary" onclick="examPreviousQuestionReview()" 
                    ${currentQuestionIndex === 0 ? 'disabled' : ''}>
                    <i class="fas fa-arrow-left"></i> Câu trước
                </button>
                <button class="btn btn-primary" onclick="examNextQuestionReview()"
                    ${currentQuestionIndex === currentQuestions.length - 1 ? 'disabled' : ''}>
                    Câu sau <i class="fas fa-arrow-right"></i>
                </button>
                <button class="btn btn-secondary" onclick="closeExamReview()">
                    <i class="fas fa-home"></i> Trang chủ
                </button>
            </div>
        </div>
    `;
    
    // Display answers with correct/wrong indicators
    const answersContainer = document.getElementById('exam-review-answers');
    if (!answersContainer) return;
    
    question.answers.forEach((answer, index) => {
        const answerDiv = document.createElement('div');
        answerDiv.className = 'answer-option';
        
        // Mark correct answer
        if (index === question.correct) {
            answerDiv.classList.add('correct');
            answerDiv.style.backgroundColor = '#d4edda';
            answerDiv.style.borderColor = '#28a745';
        }
        
        // Mark user's wrong answer
        if (index === userAnswers[currentQuestionIndex] && index !== question.correct) {
            answerDiv.classList.add('wrong');
            answerDiv.style.backgroundColor = '#f8d7da';
            answerDiv.style.borderColor = '#dc3545';
        }
        
        // Mark user's selected answer
        if (index === userAnswers[currentQuestionIndex]) {
            answerDiv.classList.add('selected');
        }
        
        answerDiv.innerHTML = `
            <input type="radio" name="exam-review-answer" value="${index}" 
                ${index === userAnswers[currentQuestionIndex] ? 'checked' : ''} disabled>
            <label class="answer-label">${answer}</label>
            ${index === question.correct ? '<i class="fas fa-check-circle" style="color: #28a745; margin-left: 10px;"></i>' : ''}
            ${index === userAnswers[currentQuestionIndex] && index !== question.correct ? 
                '<i class="fas fa-times-circle" style="color: #dc3545; margin-left: 10px;"></i>' : ''}
        `;
        
        answersContainer.appendChild(answerDiv);
    });
    
    // Show explanation
    if (question.explanation) {
        const explanationDiv = document.createElement('div');
        explanationDiv.className = 'explanation';
        explanationDiv.style.cssText = `
            margin-top: 20px;
            padding: 15px;
            background: #e3f2fd;
            border-left: 4px solid #2196f3;
            border-radius: 4px;
        `;
        explanationDiv.innerHTML = `
            <strong><i class="fas fa-lightbulb"></i> Giải thích:</strong><br>
            ${question.explanation}
        `;
        answersContainer.appendChild(explanationDiv);
    }
    
    // Update question grid
    createQuestionGrid();
}

function examPreviousQuestionReview() {
    if (currentQuestionIndex > 0) {
        currentQuestionIndex--;
        displayExamQuestionWithAnswers();
    }
}

function examNextQuestionReview() {
    if (currentQuestionIndex < currentQuestions.length - 1) {
        currentQuestionIndex++;
        displayExamQuestionWithAnswers();
    }
}

function closeExamReview() {
    window.reviewMode = false;
    
    // Reset exam UI
    const setupDiv = document.getElementById('exam-setup');
    const containerDiv = document.getElementById('exam-container');
    if (setupDiv) setupDiv.style.display = 'block';
    if (containerDiv) containerDiv.style.display = 'none';
    
    // Go home
    showPage('home');
    const homeLink = document.querySelector('[data-page="home"]');
    const examLink = document.querySelector('[data-page="exam"]');
    if (homeLink) homeLink.classList.add('active');
    if (examLink) examLink.classList.remove('active');
}

function restartExam() {
    const resultModal = document.getElementById('exam-result-modal');
    if (resultModal) {
        resultModal.classList.remove('active');
    }
    
    // Reset to exam setup
    const setupDiv = document.getElementById('exam-setup');
    const containerDiv = document.getElementById('exam-container');
    if (setupDiv) setupDiv.style.display = 'block';
    if (containerDiv) containerDiv.style.display = 'none';
    
    // Stay on exam page
    showPage('exam');
    const examLink = document.querySelector('[data-page="exam"]');
    if (examLink) examLink.classList.add('active');
}

// ===== Statistics & History =====
function saveToHistory(result) {
    let history = JSON.parse(localStorage.getItem('quizHistory') || '[]');
    history.unshift(result);
    
    // Keep only last 50 results
    if (history.length > 50) {
        history = history.slice(0, 50);
    }
    
    localStorage.setItem('quizHistory', JSON.stringify(history));
    loadStatistics();
}

function loadStatistics() {
    const history = JSON.parse(localStorage.getItem('quizHistory') || '[]');
    
    const totalAttemptsEl = document.getElementById('total-attempts');
    const averageScoreEl = document.getElementById('average-score');
    const bestScoreEl = document.getElementById('best-score');
    const totalTimeEl = document.getElementById('total-time');
    const tbody = document.getElementById('history-tbody');
    
    if (!totalAttemptsEl || !averageScoreEl || !bestScoreEl || !totalTimeEl || !tbody) {
        console.error('Statistics elements not found');
        return;
    }
    
    if (history.length === 0) {
        totalAttemptsEl.textContent = '0';
        averageScoreEl.textContent = '0%';
        bestScoreEl.textContent = '0%';
        totalTimeEl.textContent = '0%';
        
        // Show empty state
        tbody.innerHTML = `
            <tr>
                <td colspan="5" style="text-align: center; padding: 40px; color: #666;">
                    <i class="fas fa-inbox" style="font-size: 48px; color: #ccc; margin-bottom: 10px;"></i>
                    <p>Chưa có lịch sử làm bài</p>
                    <p style="font-size: 14px;">Hãy bắt đầu luyện tập để xem thống kê!</p>
                </td>
            </tr>
        `;
        return;
    }
    
    // Calculate statistics
    const totalAttempts = history.length;
    const avgScore = Math.round(history.reduce((sum, r) => sum + r.score, 0) / totalAttempts);
    const bestScore = Math.max(...history.map(r => r.score));
    const passCount = history.filter(r => r.score >= 80).length;
    const passRate = Math.round((passCount / totalAttempts) * 100);
    
    totalAttemptsEl.textContent = totalAttempts;
    averageScoreEl.textContent = avgScore + '%';
    bestScoreEl.textContent = bestScore + '%';
    totalTimeEl.textContent = passRate + '%';
    
    // Update stat card label for pass rate
    const timeCard = totalTimeEl.parentElement;
    if (timeCard) {
        const labelEl = timeCard.querySelector('p');
        const iconEl = timeCard.querySelector('.stat-icon i');
        if (labelEl) labelEl.textContent = 'Tỷ lệ đạt';
        if (iconEl) iconEl.className = 'fas fa-percentage';
    }
    
    // Display history table
    tbody.innerHTML = history.slice(0, 20).map((r, idx) => {
        const date = new Date(r.date);
        const badge = r.score >= 80 ? 'badge-success' : r.score >= 50 ? 'badge-warning' : 'badge-danger';
        const result = r.score >= 80 ? 'Đạt' : 'Chưa đạt';
        const icon = r.score >= 80 ? 'fa-check-circle' : 'fa-times-circle';
        
        return `
            <tr style="animation: fadeIn 0.3s ease ${idx * 0.05}s both;">
                <td>${date.toLocaleDateString('vi-VN')} ${date.toLocaleTimeString('vi-VN', {hour: '2-digit', minute: '2-digit'})}</td>
                <td><strong>${r.topic}</strong></td>
                <td>${r.totalQuestions} câu</td>
                <td>
                    <div style="display: flex; align-items: center; gap: 10px;">
                        <div style="flex: 1;">
                            <strong style="font-size: 16px;">${r.score}%</strong>
                            <div style="background: #e0e0e0; height: 6px; border-radius: 3px; margin-top: 5px; overflow: hidden;">
                                <div style="background: ${r.score >= 80 ? '#28a745' : r.score >= 50 ? '#ffc107' : '#dc3545'}; 
                                     height: 100%; width: ${r.score}%; transition: width 0.3s ease;"></div>
                            </div>
                        </div>
                        <small style="color: #666;">${r.correctAnswers}/${r.totalQuestions}</small>
                    </div>
                </td>
                <td>
                    <span class="badge ${badge}" style="display: inline-flex; align-items: center; gap: 5px;">
                        <i class="fas ${icon}"></i> ${result}
                    </span>
                </td>
            </tr>
        `;
    }).join('');
    
    // Add CSS for fadeIn animation if not exists
    if (!document.getElementById('stats-animation-style')) {
        const style = document.createElement('style');
        style.id = 'stats-animation-style';
        style.textContent = `
            @keyframes fadeIn {
                from { opacity: 0; transform: translateY(10px); }
                to { opacity: 1; transform: translateY(0); }
            }
        `;
        document.head.appendChild(style);
    }
}

function clearHistory() {
    if (confirm('Bạn có chắc muốn xóa toàn bộ lịch sử?')) {
        localStorage.removeItem('quizHistory');
        loadStatistics();
        alert('Đã xóa lịch sử thành công!');
    }
}
