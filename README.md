# IT Track Institute - Pro Typing Master ⌨️

An Apple-inspired touch typing and speed mastery web application designed specifically for students at **IT Track Institute**.

Featuring human interface design principles from Apple, smooth frosted glassmorphism, responsive tactile biometric feedback, interactive keyboard visualizer with finger guides, structured academy lessons, and printable graduation certificates.

---

## ✨ Key Features & Apple Aesthetics

1. **Apple Human Interface Design (HIG):**
   - **Translucent Frosted Glass**: Dynamic navigation bar and cards using `backdrop-filter: blur(20px) saturate(180%)`.
   - **Dual Theme Support**: Signature Apple Dark Mode (Space Black / Midnight Graphite) and Apple Light Mode (Ceramic White & Aluminum Gray).
   - **Typography**: Clean hierarchy with SF-inspired Plus Jakarta Sans and JetBrains Mono for keystrokes.
   - **Subtle Ambient Lighting**: Dynamic soft radial orbs inspired by Apple keynote presentations.

2. **Apple Magic Keyboard Visualizer:**
   - On-screen replica of the Apple Magic Keyboard with authentic keycaps and home-row tactile bumps on **F** and **J**.
   - **Finger Color Guides**: Color-coded guides for Left/Right Pinky, Ring, Middle, Index, and Thumb fingers.
   - **Real-Time Key Depress Animation**: Keys visually depress as you type on your physical keyboard.
   - **Target Key Highlighting**: Shows which key you should press next in real time to train muscle memory without looking down.

3. **Interactive Typing Arena:**
   - Smooth animated caret/cursor tracking each character with precision.
   - Per-letter validation: Green for correct, Red for mistakes, plus overflow/extra letter handling.
   - Multiple modes:
     - **Time Mode**: 15s, 30s, 60s, 120s
     - **Word Target Mode**: 10, 25, 50, 100 words
     - **Tech Quotes Mode**: Inspirational quotes from Steve Jobs, Alan Turing, Linus Torvalds, and more.
     - **Code Snippets Mode**: JavaScript, Python, CSS, and HTML programming syntax for IT students.

4. **IT Track Academy Curriculum:**
   - **Lesson 1**: Home Row Foundation (`ASDF JKL;`)
   - **Lesson 2**: Top Row Reach (`QWERTY UIOP`)
   - **Lesson 3**: Bottom Row Shift (`ZXCVBNM`)
   - **Lesson 4**: Numbers & Symbols (`1234567890 !@#$%`)
   - **Lesson 5**: Programming Syntax Mastery (`const`, `let`, `{}`, `()`, `=>`)
   - **Lesson 6**: Speed Booster Paragraphs (Comprehensive paragraphs)

5. **Acoustic Audio Engine (Web Audio API):**
   - Zero external audio files or downloads required.
   - Synthesizes crisp tactile Apple scissor/mechanical switch clicks on keydown, soft error buzzes, and celebratory completion chimes.
   - Includes sound on/off switch in the top bar.

6. **Student Records & Official Certificate:**
   - Celebratory confetti burst when tests are completed.
   - **Personal Best Tracking**: Peak WPM, Average Accuracy, and Student Rank stored automatically in `localStorage`.
   - **Official Printable IT Track Certificate**: Generates a high-resolution certificate with student name, date, speed, accuracy, and official seal. Print directly or save as PDF.

---

## 🚀 How to Run

### Option 1: Direct in Browser (No Server Needed)
Simply double-click [`index.html`](file:///c:/Users/OM%20C/Desktop/ittrack44/index.html) to open the website directly in Chrome, Edge, Safari, or Firefox.

### Option 2: Using Node.js Local Server
Run in PowerShell / Terminal:
```bash
node server.js
```
Then visit: `http://localhost:3000`

---

## ⌨️ Helpful Keyboard Shortcuts
- **Tab**: Instant restart session
- **Space**: Advance to next word
- **Backspace**: Delete last character or go back to previous word
