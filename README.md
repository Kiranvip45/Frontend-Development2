# Frontend-Development2

# 🔢 Calculator (HTML • CSS • JavaScript)

A responsive, keyboard-friendly calculator built with vanilla HTML/CSS/JS.  
Supports real-time expression preview and all basic operations: +  −  ×  ÷ (with * and /), decimals, clear, and backspace.

---

## ✨ Features
- *Basic ops:* + - * / with decimal support
- *Realtime result:* shows =value while typing
- *Keyboard input:* digits, operators, Enter (=), Backspace (delete), Esc (clear)
- *Clean UI:* responsive layout, accessible focus & roles
- *Safe eval:* sanitizes input before evaluating (client-side only)

---

## 🛠 Tech Stack
- *HTML5* for structure
- *CSS3* for styling (no frameworks)
- *JavaScript (ES6+)* for logic

---

## 🚀 Getting Started (Run Locally)

### Option A — VS Code + Live Server (recommended)
1. Open this folder in *VS Code*.
2. Install the *Live Server* extension (by Ritwick Dey).
3. Open index.html → Right-click → *Open with Live Server*.
4. Your browser opens at http://127.0.0.1:5500 (port may vary).


---

## 📁 Project Structure

calculator/
├─ index.html       # markup + containers
├─ styles.css       # responsive styles
└─ script.js        # calculator logic & keyboard support


---

## 🧠 How It Works (Brief)

Maintains an expression string (e.g., 12+7/3).

On each input it:

1. Sanitizes characters to 0-9.+-*/().


2. Shows realtime preview if the expression is valid.


3. On = / Enter, evaluates and replaces the expression with the result.




> ⚠ The evaluation uses a sanitized Function(...) call. It’s okay for this client-only demo; don’t use this approach on untrusted server inputs without stronger parsing.




---

## ⌨ Keyboard Shortcuts

Numbers: 0–9

Decimal: .

Operators: +  -  *  /  (  )

Enter / = → Evaluate

Backspace → Delete last char

Esc → Clear all



---

## 🔧 Customization

Change theme colors in styles.css (:root variables).

Tweak grid layout (button sizes) inside .keys.

Add advanced functions (%, ±, memory) by extending script.js.



---

## ✅ Accessibility

Buttons are focusable and operable by keyboard.

Display is read-only text input for screen readers.

Light color contrast and large touch targets.



---

## 🧩 Possible Enhancements

Operator precedence indicators / parentheses helper

Error states (division by zero, unmatched parentheses)

History panel & recent calculations

Unit tests for expression handling



---

## 🐞 Troubleshooting

Nothing happens when clicking buttons: Check the console (F12) for JS errors.

Keyboard not working: Ensure the browser tab is focused; no other inputs are focused.

Styles not applied: Confirm <link rel="stylesheet" href="styles.css"> path.
