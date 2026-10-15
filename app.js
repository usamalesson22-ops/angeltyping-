/**
 * IT TRACK INSTITUTE - PRO TYPING MASTER
 * Apple-Inspired Human Interface Design & Interactive Engine
 * ==========================================================
 */

// --- SOUND SYNTHESIZER (Web Audio API - Zero External Dependencies) ---
class SoundEffects {
  constructor() {
    this.enabled = true;
    this.ctx = null;
  }

  init() {
    if (!this.ctx) {
      const AudioContext = window.AudioContext || window.webkitAudioContext;
      this.ctx = new AudioContext();
    }
    if (this.ctx.state === 'suspended') {
      this.ctx.resume();
    }
  }

  playKeyClick() {
    if (!this.enabled) return;
    this.init();
    try {
      const now = this.ctx.currentTime;
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();

      // Subtle Apple chiclet / tactile mechanical switch click
      osc.type = 'triangle';
      osc.frequency.setValueAtTime(650, now);
      osc.frequency.exponentialRampToValueAtTime(140, now + 0.04);

      gain.gain.setValueAtTime(0.08, now);
      gain.gain.exponentialRampToValueAtTime(0.001, now + 0.04);

      osc.connect(gain);
      gain.connect(this.ctx.destination);

      osc.start(now);
      osc.stop(now + 0.04);
    } catch (e) {
      // Audio context safeguard
    }
  }

  playError() {
    if (!this.enabled) return;
    this.init();
    try {
      const now = this.ctx.currentTime;
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();

      osc.type = 'sawtooth';
      osc.frequency.setValueAtTime(180, now);
      osc.frequency.linearRampToValueAtTime(110, now + 0.08);

      gain.gain.setValueAtTime(0.09, now);
      gain.gain.exponentialRampToValueAtTime(0.001, now + 0.08);

      osc.connect(gain);
      gain.connect(this.ctx.destination);

      osc.start(now);
      osc.stop(now + 0.08);
    } catch (e) {}
  }

  playFinish() {
    if (!this.enabled) return;
    this.init();
    try {
      const now = this.ctx.currentTime;
      const chord = [523.25, 659.25, 783.99, 1046.50]; // C Major arpeggio
      chord.forEach((freq, idx) => {
        const osc = this.ctx.createOscillator();
        const gain = this.ctx.createGain();
        osc.type = 'sine';
        osc.frequency.setValueAtTime(freq, now + idx * 0.08);
        gain.gain.setValueAtTime(0.08, now + idx * 0.08);
        gain.gain.exponentialRampToValueAtTime(0.001, now + idx * 0.08 + 0.35);
        osc.connect(gain);
        gain.connect(this.ctx.destination);
        osc.start(now + idx * 0.08);
        osc.stop(now + idx * 0.08 + 0.35);
      });
    } catch (e) {}
  }
}

// --- DATASETS & LESSONS ---
const WORD_BANKS = {
  common: [
    "algorithm", "interface", "keyboard", "software", "network", "system", "database",
    "developer", "variable", "function", "computer", "institute", "practice", "accuracy",
    "performance", "keyboard", "hardware", "digital", "technology", "python", "javascript",
    "display", "internet", "browser", "solution", "server", "coding", "structure",
    "design", "learning", "mastery", "student", "challenge", "future", "processor",
    "memory", "compile", "execute", "storage", "cloud", "security", "terminal", "packet",
    "object", "class", "syntax", "element", "module", "component", "framework", "style",
    "logic", "command", "canvas", "apple", "silicon", "quantum", "modern", "speed"
  ],
  quotes: [
    "The only way to do great work is to love what you do. Stay hungry, stay foolish.",
    "Simplicity is the ultimate sophistication. Design is not just what it looks like and feels like.",
    "Talk is cheap. Show me the code. Clean code always looks like it was written by someone who cares.",
    "First, solve the problem. Then, write the code with precision and clarity.",
    "Technology is best when it brings people together and unlocks human potential.",
    "Any fool can write code that a computer can understand. Good programmers write code that humans can understand."
  ],
  code: [
    "const speed = calculateWPM(totalKeys, timeSpent);",
    "function trackMaster(student) { return student.reachGoal(100); }",
    "let elements = document.querySelectorAll('.active-key');",
    "if (accuracy >= 98) { institute.awardBadge('Grandmaster'); }",
    "const result = await fetch('/api/it-track/leaderboard');",
    "const doubleNumbers = array.map(num => num * 2);",
    "for (let i = 0; i < maxIterations; i++) { processInput(i); }"
  ]
};

const ACADEMY_LESSONS = [
  {
    id: 1,
    title: "Home Row Foundation",
    difficulty: "Beginner",
    desc: "Master the resting anchor keys ASDF and JKL; using proper finger indexing and muscle memory.",
    keys: ["A", "S", "D", "F", "J", "K", "L", ";"],
    text: "asdf jkl; asdf jkl; aadd ssff jjkk ll;; fall ask lad salad flash flask glad half fads dads flak alas all fall"
  },
  {
    id: 2,
    title: "Top Row Reach",
    difficulty: "Elementary",
    desc: "Reach upward smoothly to master QWERTY and UIOP without moving your wrists from home row.",
    keys: ["Q", "W", "E", "R", "T", "Y", "U", "I", "O", "P"],
    text: "were type port wire tree tour quiet power water quote write require report twitter priority queue output input"
  },
  {
    id: 3,
    title: "Bottom Row Shift",
    difficulty: "Intermediate",
    desc: "Coordinate pinky and ring fingers to strike ZXCVB and NM,./ with rhythmic fluidity.",
    keys: ["Z", "X", "C", "V", "B", "N", "M", ",", "."],
    text: "zone calm zinc voice move back next maximum convex zero view object carbon matrix canvas basic number member"
  },
  {
    id: 4,
    title: "Numbers & Symbols",
    difficulty: "Advanced",
    desc: "Crucial for programmers and IT students: master the upper numeric tier and code punctuation.",
    keys: ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0", "@", "#", "$", "%", "&", "*"],
    text: "item#12 cost $45.00 discount 20% order#892 port:8080 calc(100% - 24px) id=9021 ratio=4:3 status=200 total=100%"
  },
  {
    id: 5,
    title: "Programming Syntax",
    difficulty: "Pro",
    desc: "High-density coding practice with brackets, camelCase identifiers, loops, and variables.",
    keys: ["{", "}", "(", ")", ";", "=", "=>", "const", "let"],
    text: "const data = []; for (let i = 0; i < 10; i++) { if (items[i] !== null) { data.push(items[i]); } } return data;"
  },
  {
    id: 6,
    title: "Speed Booster Paragraph",
    difficulty: "Master",
    desc: "Full comprehensive paragraphs designed to test pacing, punctuation, capital letters, and raw velocity.",
    keys: ["Full Keyboard", "Caps", "Quotes"],
    text: "Information Technology at IT Track Institute empowers students to engineer high performance systems. Precision touch typing is an indispensable cognitive multiplier for every modern software engineer, network architect, and digital creator."
  }
];

// --- CONFETTI PARTICLE SYSTEM ---
class ConfettiEngine {
  constructor(canvas) {
    this.canvas = canvas;
    this.ctx = canvas.getContext('2d');
    this.particles = [];
    this.animating = false;
    this.colors = ['#0071e3', '#2997ff', '#30d158', '#ffd60a', '#ff375f', '#bf5af2'];
    this.resize();
    window.addEventListener('resize', () => this.resize());
  }

  resize() {
    this.canvas.width = window.innerWidth;
    this.canvas.height = window.innerHeight;
  }

  burst(count = 80) {
    this.resize();
    for (let i = 0; i < count; i++) {
      this.particles.push({
        x: this.canvas.width / 2 + (Math.random() - 0.5) * 200,
        y: this.canvas.height / 2 + (Math.random() - 0.5) * 100,
        vx: (Math.random() - 0.5) * 16,
        vy: (Math.random() - 1.2) * 14,
        size: Math.random() * 8 + 4,
        color: this.colors[Math.floor(Math.random() * this.colors.length)],
        rotation: Math.random() * 360,
        rSpeed: (Math.random() - 0.5) * 10,
        alpha: 1,
        decay: Math.random() * 0.015 + 0.008
      });
    }
    if (!this.animating) {
      this.animating = true;
      this.render();
    }
  }

  render() {
    if (!this.animating) return;
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);

    for (let i = this.particles.length - 1; i >= 0; i--) {
      const p = this.particles[i];
      p.x += p.vx;
      p.y += p.vy;
      p.vy += 0.35; // gravity
      p.rotation += p.rSpeed;
      p.alpha -= p.decay;

      if (p.alpha <= 0) {
        this.particles.splice(i, 1);
        continue;
      }

      this.ctx.save();
      this.ctx.translate(p.x, p.y);
      this.ctx.rotate((p.rotation * Math.PI) / 180);
      this.ctx.fillStyle = p.color;
      this.ctx.globalAlpha = p.alpha;
      this.ctx.fillRect(-p.size / 2, -p.size / 2, p.size, p.size * 0.6);
      this.ctx.restore();
    }

    if (this.particles.length > 0) {
      requestAnimationFrame(() => this.render());
    } else {
      this.animating = false;
      this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
    }
  }
}

// --- MAIN TYPING APPLICATION ---
class ITTrackTypingMaster {
  constructor() {
    this.sound = new SoundEffects();
    this.confetti = new ConfettiEngine(document.getElementById('confettiCanvas'));

    // Config & State
    this.mode = 'time'; // 'time', 'words', 'quote', 'code'
    this.duration = 30; // seconds or words count
    this.currentText = "";
    this.words = [];
    this.wordIndex = 0;
    this.letterIndex = 0;
    this.startTime = null;
    this.timer = null;
    this.timeLeft = 30;
    this.isRunning = false;
    this.isFinished = false;

    // Biometrics & Keystrokes
    this.totalKeystrokes = 0;
    this.correctKeystrokes = 0;
    this.wrongKeystrokes = 0;
    this.errorCount = 0;

    // Student Information
    this.studentName = localStorage.getItem('it_track_student_name') || 'Student';
    this.records = JSON.parse(localStorage.getItem('it_track_records') || '[]');

    this.initElements();
    this.initEventListeners();
    this.initStudentBadge();
    this.renderLessons();
    this.renderRecords();
    this.setMode('time', 30);
  }

  initElements() {
    // Navigation
    this.themeToggle = document.getElementById('themeToggle');
    this.sunIcon = document.getElementById('sunIcon');
    this.moonIcon = document.getElementById('moonIcon');
    this.soundToggle = document.getElementById('soundToggle');
    this.soundOnIcon = document.getElementById('soundOnIcon');
    this.soundOffIcon = document.getElementById('soundOffIcon');
    this.studentBadge = document.getElementById('studentBadge');
    this.studentDisplay = document.getElementById('currentStudentDisplay');

    // Controls
    this.modeSelector = document.getElementById('modeSelector');
    this.durationSelector = document.getElementById('durationSelector');
    this.subOptionsGroup = document.getElementById('subOptionsGroup');
    this.subOptionLabel = document.getElementById('subOptionLabel');
    this.toggleKeyboardBtn = document.getElementById('toggleKeyboardBtn');
    this.keyboardWrapper = document.getElementById('keyboardWrapper');

    // Stage & Metrics
    this.typingStage = document.getElementById('typingStage');
    this.typingInput = document.getElementById('typingInput');
    this.stageOverlay = document.getElementById('stageOverlay');
    this.wordsContainer = document.getElementById('wordsContainer');
    this.restartBtn = document.getElementById('restartBtn');

    this.liveWpm = document.getElementById('liveWpm');
    this.liveAccuracy = document.getElementById('liveAccuracy');
    this.liveTimer = document.getElementById('liveTimer');
    this.liveErrors = document.getElementById('liveErrors');
    this.wpmFill = document.getElementById('wpmFill');
    this.accFill = document.getElementById('accFill');
    this.timerFill = document.getElementById('timerFill');
    this.errorFill = document.getElementById('errorFill');
    this.timerLabel = document.getElementById('timerLabel');

    // Result Modal
    this.resultsModal = document.getElementById('resultsModal');
    this.closeModalBtn = document.getElementById('closeModalBtn');
    this.resultWpm = document.getElementById('resultWpm');
    this.resultRankPill = document.getElementById('resultRankPill');
    this.resultAccuracy = document.getElementById('resultAccuracy');
    this.resultRawWpm = document.getElementById('resultRawWpm');
    this.resultKeystrokes = document.getElementById('resultKeystrokes');
    this.resultConsistency = document.getElementById('resultConsistency');
    this.studentNameInput = document.getElementById('studentNameInput');
    this.getCertificateBtn = document.getElementById('getCertificateBtn');
    this.modalRestartBtn = document.getElementById('modalRestartBtn');

    // Certificate
    this.certificateModal = document.getElementById('certificateModal');
    this.closeCertBtn = document.getElementById('closeCertBtn');
    this.printCertBtn = document.getElementById('printCertBtn');
    this.certStudentName = document.getElementById('certStudentName');
    this.certWpm = document.getElementById('certWpm');
    this.certAccuracy = document.getElementById('certAccuracy');
    this.certGrade = document.getElementById('certGrade');
    this.certDateDisplay = document.getElementById('certDateDisplay');

    // Records Section
    this.personalBestWpm = document.getElementById('personalBestWpm');
    this.avgAccuracy = document.getElementById('avgAccuracy');
    this.testsCompleted = document.getElementById('testsCompleted');
    this.studentRank = document.getElementById('studentRank');
    this.recordsTbody = document.getElementById('recordsTbody');
    this.clearRecordsBtn = document.getElementById('clearRecordsBtn');

    // Virtual Keyboard
    this.keyboard = document.getElementById('magicKeyboard');
  }

  initEventListeners() {
    // Stage Focus Management
    this.typingStage.addEventListener('click', () => this.focusStage());
    this.stageOverlay.addEventListener('click', () => this.focusStage());

    // Main Typing Input Listener
    this.typingInput.addEventListener('keydown', (e) => this.handleKeyDown(e));

    // Window-level keypress highlight on virtual keyboard
    window.addEventListener('keydown', (e) => {
      this.animateVirtualKey(e.key, true);
      // Keyboard shortcut: Tab + Enter or just Tab to restart quickly
      if (e.key === 'Tab') {
        e.preventDefault();
        this.resetSession();
      }
    });

    window.addEventListener('keyup', (e) => {
      this.animateVirtualKey(e.key, false);
    });

    // Restart button
    this.restartBtn.addEventListener('click', () => this.resetSession());

    // Navigation Tabs
    document.querySelectorAll('.nav-pill').forEach(btn => {
      btn.addEventListener('click', () => {
        document.querySelectorAll('.nav-pill').forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        const tab = btn.dataset.tab;
        this.switchTab(tab);
      });
    });

    // Theme Switcher
    this.themeToggle.addEventListener('click', () => this.toggleTheme());

    // Sound Switcher
    this.soundToggle.addEventListener('click', () => this.toggleSound());

    // Student Badge Click (Rename)
    this.studentBadge.addEventListener('click', () => this.promptStudentName());

    // Mode Selector
    this.modeSelector.addEventListener('click', (e) => {
      if (e.target.classList.contains('seg-btn')) {
        this.modeSelector.querySelectorAll('.seg-btn').forEach(b => b.classList.remove('active'));
        e.target.classList.add('active');
        const mode = e.target.dataset.mode;
        this.setMode(mode);
      }
    });

    // Duration Selector
    this.durationSelector.addEventListener('click', (e) => {
      if (e.target.classList.contains('seg-btn')) {
        this.durationSelector.querySelectorAll('.seg-btn').forEach(b => b.classList.remove('active'));
        e.target.classList.add('active');
        const val = parseInt(e.target.dataset.val);
        this.duration = val;
        this.resetSession();
      }
    });

    // Toggle Virtual Keyboard
    this.toggleKeyboardBtn.addEventListener('click', () => {
      this.toggleKeyboardBtn.classList.toggle('active');
      this.keyboardWrapper.classList.toggle('collapsed');
    });

    // Modal Events
    this.closeModalBtn.addEventListener('click', () => this.closeModal());
    this.modalRestartBtn.addEventListener('click', () => {
      this.closeModal();
      this.resetSession();
    });

    this.getCertificateBtn.addEventListener('click', () => this.openCertificate());
    this.closeCertBtn.addEventListener('click', () => this.certificateModal.classList.remove('active'));
    this.printCertBtn.addEventListener('click', () => window.print());

    // Clear Records
    this.clearRecordsBtn.addEventListener('click', () => {
      if (confirm("Are you sure you want to clear your test history?")) {
        this.records = [];
        localStorage.removeItem('it_track_records');
        this.renderRecords();
      }
    });

    // Click outside modal to close
    window.addEventListener('click', (e) => {
      if (e.target === this.resultsModal) this.closeModal();
      if (e.target === this.certificateModal) this.certificateModal.classList.remove('active');
    });
  }

  initStudentBadge() {
    this.studentDisplay.textContent = this.studentName;
    this.studentNameInput.value = this.studentName;
  }

  promptStudentName() {
    const newName = prompt("Enter Student Full Name for IT Track Records & Certificates:", this.studentName);
    if (newName && newName.trim()) {
      this.studentName = newName.trim();
      localStorage.setItem('it_track_student_name', this.studentName);
      this.initStudentBadge();
    }
  }

  switchTab(tabName) {
    document.querySelectorAll('.content-section').forEach(sec => sec.classList.remove('active'));
    const target = document.getElementById(`${tabName}Section`) || document.getElementById('arenaSection');
    if (target) {
      target.classList.add('active');
    }
    if (tabName === 'test') {
      setTimeout(() => this.focusStage(), 100);
    }
  }

  toggleTheme() {
    const html = document.documentElement;
    const isDark = html.getAttribute('data-theme') === 'dark';
    if (isDark) {
      html.setAttribute('data-theme', 'light');
      this.sunIcon.classList.remove('hidden');
      this.moonIcon.classList.add('hidden');
    } else {
      html.setAttribute('data-theme', 'dark');
      this.sunIcon.classList.add('hidden');
      this.moonIcon.classList.remove('hidden');
    }
  }

  toggleSound() {
    this.sound.enabled = !this.sound.enabled;
    if (this.sound.enabled) {
      this.soundOnIcon.classList.remove('hidden');
      this.soundOffIcon.classList.add('hidden');
    } else {
      this.soundOnIcon.classList.add('hidden');
      this.soundOffIcon.classList.remove('hidden');
    }
  }

  setMode(mode, forcedDuration = null) {
    this.mode = mode;
    if (mode === 'time') {
      this.subOptionsGroup.classList.remove('hidden');
      this.subOptionLabel.textContent = "Duration";
      this.durationSelector.innerHTML = `
        <button class="seg-btn" data-val="15">15s</button>
        <button class="seg-btn active" data-val="30">30s</button>
        <button class="seg-btn" data-val="60">60s</button>
        <button class="seg-btn" data-val="120">120s</button>
      `;
      this.duration = forcedDuration || 30;
      this.timerLabel.textContent = "TIME LEFT";
    } else if (mode === 'words') {
      this.subOptionsGroup.classList.remove('hidden');
      this.subOptionLabel.textContent = "Word Target";
      this.durationSelector.innerHTML = `
        <button class="seg-btn" data-val="10">10</button>
        <button class="seg-btn active" data-val="25">25</button>
        <button class="seg-btn" data-val="50">50</button>
        <button class="seg-btn" data-val="100">100</button>
      `;
      this.duration = forcedDuration || 25;
      this.timerLabel.textContent = "WORDS LEFT";
    } else {
      // Quotes or Code snippets
      this.subOptionsGroup.classList.add('hidden');
      this.timerLabel.textContent = "TIME ELAPSED";
    }
    this.resetSession();
  }

  startLesson(lessonId) {
    const lesson = ACADEMY_LESSONS.find(l => l.id === lessonId);
    if (!lesson) return;
    this.switchTab('test');
    this.mode = 'lesson';
    this.subOptionsGroup.classList.add('hidden');
    this.currentText = lesson.text;
    this.timerLabel.textContent = "TIME ELAPSED";
    this.buildWordsFromText(this.currentText);
    this.resetStats();
    setTimeout(() => this.focusStage(), 150);
  }

  generateText() {
    if (this.mode === 'time') {
      // Generate ample words
      let count = Math.max(60, Math.floor(this.duration * 3.5));
      let generated = [];
      for (let i = 0; i < count; i++) {
        const rand = WORD_BANKS.common[Math.floor(Math.random() * WORD_BANKS.common.length)];
        generated.push(rand);
      }
      return generated.join(" ");
    } else if (this.mode === 'words') {
      let generated = [];
      for (let i = 0; i < this.duration; i++) {
        const rand = WORD_BANKS.common[Math.floor(Math.random() * WORD_BANKS.common.length)];
        generated.push(rand);
      }
      return generated.join(" ");
    } else if (this.mode === 'quote') {
      return WORD_BANKS.quotes[Math.floor(Math.random() * WORD_BANKS.quotes.length)];
    } else if (this.mode === 'code') {
      return WORD_BANKS.code[Math.floor(Math.random() * WORD_BANKS.code.length)];
    }
    return WORD_BANKS.common.slice(0, 30).join(" ");
  }

  buildWordsFromText(text) {
    this.wordsContainer.innerHTML = '';
    const rawWords = text.trim().split(/\s+/);
    this.words = rawWords;

    rawWords.forEach((wordStr, wIndex) => {
      const wordSpan = document.createElement('span');
      wordSpan.className = `word ${wIndex === 0 ? 'active' : ''}`;
      wordSpan.dataset.windex = wIndex;

      for (let l = 0; l < wordStr.length; l++) {
        const letterSpan = document.createElement('span');
        letterSpan.className = 'letter';
        letterSpan.textContent = wordStr[l];
        letterSpan.dataset.lindex = l;
        wordSpan.appendChild(letterSpan);
      }

      this.wordsContainer.appendChild(wordSpan);
    });

    // Create the smooth Apple Caret
    this.caret = document.createElement('div');
    this.caret.className = 'caret';
    this.wordsContainer.appendChild(this.caret);

    this.positionCaret();
    this.highlightTargetKey();
  }

  resetSession() {
    clearInterval(this.timer);
    this.timer = null;
    this.isRunning = false;
    this.isFinished = false;
    this.wordIndex = 0;
    this.letterIndex = 0;
    this.startTime = null;

    if (this.mode !== 'lesson') {
      this.currentText = this.generateText();
      this.buildWordsFromText(this.currentText);
    } else {
      this.buildWordsFromText(this.currentText);
    }

    this.resetStats();
    this.focusStage();
  }

  resetStats() {
    this.totalKeystrokes = 0;
    this.correctKeystrokes = 0;
    this.wrongKeystrokes = 0;
    this.errorCount = 0;

    this.liveWpm.textContent = '0';
    this.liveAccuracy.textContent = '100%';
    this.liveErrors.textContent = '0';
    this.wpmFill.style.width = '0%';
    this.accFill.style.width = '100%';
    this.errorFill.style.width = '0%';

    if (this.mode === 'time') {
      this.timeLeft = this.duration;
      this.liveTimer.textContent = `${this.timeLeft}s`;
      this.timerFill.style.width = '100%';
    } else if (this.mode === 'words') {
      this.liveTimer.textContent = `${this.duration}`;
      this.timerFill.style.width = '100%';
    } else {
      this.timeLeft = 0;
      this.liveTimer.textContent = `0s`;
      this.timerFill.style.width = '0%';
    }
  }

  focusStage() {
    this.typingStage.classList.add('focused');
    this.typingInput.focus();
  }

  blurStage() {
    this.typingStage.classList.remove('focused');
  }

  handleKeyDown(e) {
    if (this.isFinished) return;

    // Ignore Meta, Alt, Control, Function keys
    if (['Alt', 'Control', 'Meta', 'CapsLock', 'Tab', 'Escape'].includes(e.key)) {
      return;
    }

    // Start timer on first genuine keystroke
    if (!this.isRunning) {
      this.startEngine();
    }

    const currentWordEl = this.wordsContainer.querySelector(`.word[data-windex="${this.wordIndex}"]`);
    if (!currentWordEl) return;

    const letterEls = currentWordEl.querySelectorAll('.letter:not(.extra)');
    const expectedLetter = letterEls[this.letterIndex] ? letterEls[this.letterIndex].textContent : null;

    if (e.key === 'Backspace') {
      e.preventDefault();
      this.sound.playKeyClick();

      if (this.letterIndex > 0) {
        this.letterIndex--;
        const extraLetters = currentWordEl.querySelectorAll('.letter.extra');
        if (extraLetters.length > 0) {
          extraLetters[extraLetters.length - 1].remove();
        } else {
          const l = letterEls[this.letterIndex];
          if (l) {
            l.classList.remove('correct', 'incorrect');
          }
        }
      } else if (this.wordIndex > 0) {
        // Move back to previous word if backspacing
        currentWordEl.classList.remove('active');
        this.wordIndex--;
        const prevWordEl = this.wordsContainer.querySelector(`.word[data-windex="${this.wordIndex}"]`);
        prevWordEl.classList.add('active');
        this.letterIndex = prevWordEl.querySelectorAll('.letter').length;
      }
      this.positionCaret();
      this.highlightTargetKey();
      this.updateLiveMetrics();
      return;
    }

    if (e.key === ' ') {
      e.preventDefault();
      // Moving to next word
      if (this.letterIndex === 0) return; // Don't skip empty words

      this.sound.playKeyClick();
      this.totalKeystrokes++;

      // Check if current word was completed correctly
      let allCorrect = true;
      letterEls.forEach(l => {
        if (!l.classList.contains('correct')) allCorrect = false;
      });

      if (allCorrect && this.letterIndex === letterEls.length) {
        this.correctKeystrokes++; // bonus for space
      } else {
        this.wrongKeystrokes++;
        this.errorCount++;
      }

      currentWordEl.classList.remove('active');
      this.wordIndex++;

      // Check if session finished
      if (this.wordIndex >= this.words.length) {
        this.finishSession();
        return;
      }

      const nextWordEl = this.wordsContainer.querySelector(`.word[data-windex="${this.wordIndex}"]`);
      if (nextWordEl) {
        nextWordEl.classList.add('active');
      }
      this.letterIndex = 0;

      // Check if in Words mode
      if (this.mode === 'words') {
        const remaining = Math.max(0, this.duration - this.wordIndex);
        this.liveTimer.textContent = `${remaining}`;
        const pct = (remaining / this.duration) * 100;
        this.timerFill.style.width = `${pct}%`;
        if (this.wordIndex >= this.duration) {
          this.finishSession();
          return;
        }
      }

      this.scrollWordsContainer(nextWordEl);
      this.positionCaret();
      this.highlightTargetKey();
      this.updateLiveMetrics();
      return;
    }

    // Standard Character Key Press
    if (e.key.length === 1) {
      e.preventDefault();
      this.totalKeystrokes++;

      if (expectedLetter && this.letterIndex < letterEls.length) {
        const letterEl = letterEls[this.letterIndex];
        if (e.key === expectedLetter) {
          letterEl.classList.add('correct');
          this.correctKeystrokes++;
          this.sound.playKeyClick();
        } else {
          letterEl.classList.add('incorrect');
          this.wrongKeystrokes++;
          this.errorCount++;
          this.sound.playError();
        }
        this.letterIndex++;
      } else {
        // Extra letter typed
        const extraSpan = document.createElement('span');
        extraSpan.className = 'letter extra incorrect';
        extraSpan.textContent = e.key;
        currentWordEl.appendChild(extraSpan);
        this.wrongKeystrokes++;
        this.errorCount++;
        this.sound.playError();
        this.letterIndex++;
      }

      // Check if single-paragraph (quotes/code/lesson) finished
      if (this.mode !== 'time' && this.mode !== 'words') {
        if (this.wordIndex === this.words.length - 1 && this.letterIndex >= letterEls.length) {
          this.finishSession();
          return;
        }
      }

      this.positionCaret();
      this.highlightTargetKey();
      this.updateLiveMetrics();
    }
  }

  startEngine() {
    this.isRunning = true;
    this.startTime = Date.now();

    this.timer = setInterval(() => {
      const elapsed = Math.floor((Date.now() - this.startTime) / 1000);

      if (this.mode === 'time') {
        this.timeLeft = Math.max(0, this.duration - elapsed);
        this.liveTimer.textContent = `${this.timeLeft}s`;
        const pct = (this.timeLeft / this.duration) * 100;
        this.timerFill.style.width = `${pct}%`;

        if (this.timeLeft <= 0) {
          this.finishSession();
        }
      } else {
        // Stop-watch mode for Quotes, Code, and Lessons
        this.liveTimer.textContent = `${elapsed}s`;
      }

      this.updateLiveMetrics();
    }, 1000);
  }

  updateLiveMetrics() {
    if (!this.startTime) return;
    const elapsedMinutes = (Date.now() - this.startTime) / 60000;

    // Standard WPM formula: (correct keystrokes / 5) / time in minutes
    let wpm = 0;
    if (elapsedMinutes > 0) {
      wpm = Math.round((this.correctKeystrokes / 5) / elapsedMinutes);
    }
    wpm = Math.max(0, wpm);
    this.liveWpm.textContent = `${wpm}`;
    this.wpmFill.style.width = `${Math.min(100, (wpm / 120) * 100)}%`;

    // Accuracy
    let accuracy = 100;
    if (this.totalKeystrokes > 0) {
      accuracy = Math.round((this.correctKeystrokes / this.totalKeystrokes) * 100);
    }
    this.liveAccuracy.textContent = `${accuracy}%`;
    this.accFill.style.width = `${accuracy}%`;

    // Errors
    this.liveErrors.textContent = `${this.errorCount}`;
    this.errorFill.style.width = `${Math.min(100, this.errorCount * 5)}%`;
  }

  finishSession() {
    clearInterval(this.timer);
    this.isRunning = false;
    this.isFinished = true;
    this.sound.playFinish();

    const elapsedSeconds = Math.max(1, Math.floor((Date.now() - this.startTime) / 1000));
    const elapsedMinutes = elapsedSeconds / 60;

    const wpm = Math.max(0, Math.round((this.correctKeystrokes / 5) / elapsedMinutes));
    const rawWpm = Math.max(0, Math.round((this.totalKeystrokes / 5) / elapsedMinutes));
    const accuracy = this.totalKeystrokes > 0 ? Math.round((this.correctKeystrokes / this.totalKeystrokes) * 100) : 100;

    // Consistency estimation (high accuracy = high consistency)
    const consistency = Math.max(70, Math.min(100, Math.round(accuracy * 0.98)));

    // Rank & Grade calculation
    let rank = "Beginner";
    let grade = "C";
    if (wpm >= 90) { rank = "Grandmaster Typist"; grade = "A+ (Elite)"; }
    else if (wpm >= 70) { rank = "Master Typist"; grade = "A (Advanced)"; }
    else if (wpm >= 50) { rank = "Pro Typist"; grade = "B+ (Proficient)"; }
    else if (wpm >= 35) { rank = "Skilled Typist"; grade = "B (Intermediate)"; }
    else if (wpm >= 20) { rank = "Apprentice"; grade = "C+ (Developing)"; }

    // Save Record
    const record = {
      date: new Date().toLocaleString([], { month: 'short', day: 'numeric', hour: '2-digit', minute: '2-digit' }),
      student: this.studentName,
      mode: this.mode.toUpperCase(),
      wpm: wpm,
      accuracy: accuracy,
      grade: grade
    };
    this.records.unshift(record);
    if (this.records.length > 25) this.records.pop();
    localStorage.setItem('it_track_records', JSON.stringify(this.records));

    // Show Results in Apple Modal
    this.resultWpm.textContent = `${wpm}`;
    this.resultRankPill.textContent = rank;
    this.resultAccuracy.textContent = `${accuracy}%`;
    this.resultRawWpm.textContent = `${rawWpm} WPM`;
    this.resultKeystrokes.textContent = `${this.correctKeystrokes} / ${this.wrongKeystrokes}`;
    this.resultConsistency.textContent = `${consistency}%`;

    // Show Confetti for celebratory score
    if (wpm >= 30) {
      this.confetti.burst(90);
    }

    this.resultsModal.classList.add('active');
    this.renderRecords();
  }

  closeModal() {
    this.resultsModal.classList.remove('active');
  }

  openCertificate() {
    const inputName = this.studentNameInput.value.trim() || this.studentName;
    this.studentName = inputName;
    localStorage.setItem('it_track_student_name', this.studentName);
    this.initStudentBadge();

    const wpm = this.resultWpm.textContent;
    const acc = this.resultAccuracy.textContent;
    const wpmNum = parseInt(wpm) || 0;

    let certGradeText = "A+ MASTER";
    if (wpmNum < 30) certGradeText = "C APPRENTICE";
    else if (wpmNum < 50) certGradeText = "B PROFICIENT";
    else if (wpmNum < 75) certGradeText = "A ADVANCED";

    this.certStudentName.textContent = this.studentName;
    this.certWpm.textContent = wpm;
    this.certAccuracy.textContent = acc;
    this.certGrade.textContent = certGradeText;

    const today = new Date();
    this.certDateDisplay.textContent = today.toLocaleDateString('en-US', { month: 'short', year: 'numeric' }).toUpperCase();

    this.closeModal();
    this.certificateModal.classList.add('active');
  }

  positionCaret() {
    if (!this.caret) return;
    const currentWordEl = this.wordsContainer.querySelector(`.word[data-windex="${this.wordIndex}"]`);
    if (!currentWordEl) return;

    const letters = currentWordEl.querySelectorAll('.letter');
    if (this.letterIndex < letters.length) {
      const activeLetter = letters[this.letterIndex];
      this.caret.style.left = `${activeLetter.offsetLeft}px`;
      this.caret.style.top = `${activeLetter.offsetTop}px`;
    } else if (letters.length > 0) {
      const lastLetter = letters[letters.length - 1];
      this.caret.style.left = `${lastLetter.offsetLeft + lastLetter.offsetWidth}px`;
      this.caret.style.top = `${lastLetter.offsetTop}px`;
    }
  }

  scrollWordsContainer(activeWordEl) {
    if (!activeWordEl) return;
    const containerTop = this.wordsContainer.offsetTop;
    const wordTop = activeWordEl.offsetTop;
    const relativeTop = wordTop - containerTop;

    if (relativeTop > 60) {
      this.wordsContainer.scrollTop = wordTop - 30;
    }
  }

  highlightTargetKey() {
    // Clear existing target keys
    document.querySelectorAll('.key.target-key').forEach(k => k.classList.remove('target-key'));

    const currentWordEl = this.wordsContainer.querySelector(`.word[data-windex="${this.wordIndex}"]`);
    if (!currentWordEl) return;

    const letters = currentWordEl.querySelectorAll('.letter:not(.extra)');
    let targetChar = null;

    if (this.letterIndex < letters.length) {
      targetChar = letters[this.letterIndex].textContent.toLowerCase();
    } else {
      targetChar = ' '; // Space for word completion
    }

    if (targetChar) {
      let targetKeyEl = null;
      if (targetChar === ' ') {
        targetKeyEl = document.querySelector('.key-space');
      } else {
        targetKeyEl = document.querySelector(`.key[data-key="${targetChar}"]`);
      }

      if (targetKeyEl) {
        targetKeyEl.classList.add('target-key');
      }
    }
  }

  animateVirtualKey(key, isPressed) {
    let keyLower = key.toLowerCase();
    let targetEl = null;

    if (key === ' ') {
      targetEl = document.querySelector('.key-space');
    } else if (key === 'Backspace') {
      targetEl = document.querySelector('.key-delete');
    } else if (key === 'Enter') {
      targetEl = document.querySelector('.key-return');
    } else if (key === 'Shift') {
      targetEl = document.querySelector('.key-shift-l');
    } else if (key === 'Tab') {
      targetEl = document.querySelector('.key-tab');
    } else if (key === 'CapsLock') {
      targetEl = document.querySelector('.key-caps');
    } else {
      targetEl = document.querySelector(`.key[data-key="${keyLower}"]`);
    }

    if (targetEl) {
      if (isPressed) {
        targetEl.classList.add('pressed');
      } else {
        targetEl.classList.remove('pressed');
      }
    }
  }

  renderLessons() {
    const grid = document.getElementById('lessonsGrid');
    if (!grid) return;
    grid.innerHTML = '';

    ACADEMY_LESSONS.forEach(lesson => {
      const card = document.createElement('div');
      card.className = 'lesson-card';

      const keysHTML = lesson.keys.map(k => `<span class="l-key-tag">${k}</span>`).join('');

      card.innerHTML = `
        <div>
          <div class="lesson-top">
            <span class="lesson-number">LESSON ${lesson.id}</span>
            <span class="lesson-difficulty">${lesson.difficulty}</span>
          </div>
          <h3 class="lesson-title">${lesson.title}</h3>
          <p class="lesson-desc">${lesson.desc}</p>
          <div class="lesson-keys-preview">${keysHTML}</div>
        </div>
        <button class="lesson-btn">
          <span>Start Academy Lesson</span>
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2">
            <polyline points="9 18 15 12 9 6"></polyline>
          </svg>
        </button>
      `;

      card.addEventListener('click', () => this.startLesson(lesson.id));
      grid.appendChild(card);
    });
  }

  renderRecords() {
    // Render Hall of fame stats
    if (this.records.length === 0) {
      this.personalBestWpm.textContent = '0';
      this.avgAccuracy.textContent = '0%';
      this.testsCompleted.textContent = '0';
      this.studentRank.textContent = 'Novice';
      this.recordsTbody.innerHTML = `<tr><td colspan="6" class="empty-state">No tests recorded yet. Complete a test to see your history!</td></tr>`;
      return;
    }

    const peakWpm = Math.max(...this.records.map(r => r.wpm));
    const avgAcc = Math.round(this.records.reduce((acc, r) => acc + r.accuracy, 0) / this.records.length);

    this.personalBestWpm.textContent = `${peakWpm}`;
    this.avgAccuracy.textContent = `${avgAcc}%`;
    this.testsCompleted.textContent = `${this.records.length}`;

    let overallRank = "Beginner";
    if (peakWpm >= 85) overallRank = "Grandmaster";
    else if (peakWpm >= 65) overallRank = "Master";
    else if (peakWpm >= 45) overallRank = "Pro";
    else if (peakWpm >= 30) overallRank = "Intermediate";
    this.studentRank.textContent = overallRank;

    // Render Table rows
    this.recordsTbody.innerHTML = '';
    this.records.slice(0, 10).forEach(rec => {
      const row = document.createElement('tr');
      row.innerHTML = `
        <td>${rec.date}</td>
        <td><strong>${rec.student}</strong></td>
        <td>${rec.mode}</td>
        <td><strong style="color: var(--apple-cyan);">${rec.wpm} WPM</strong></td>
        <td><span style="color: var(--apple-green); font-weight: 700;">${rec.accuracy}%</span></td>
        <td><span class="badge-status badge-passed">${rec.grade}</span></td>
      `;
      this.recordsTbody.appendChild(row);
    });
  }
}

// Instantiate on DOM Loaded
document.addEventListener('DOMContentLoaded', () => {
  window.app = new ITTrackTypingMaster();
});
