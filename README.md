# Resistor Color Code Calculator ⚡️

A fast, modular, and interactive web-based calculator for determining the resistance values of 4-band and 5-band through-hole resistors. 

This project was built with a focus on clean architecture, separating the core mathematical logic from the user interface to ensure the code is highly maintainable and easily extensible.

## ✨ Features
* **Interactive UI:** Dropdowns automatically update their background colors to match the selected resistor band.
* **Engineering Notation:** Automatically formats large values into readable outputs (e.g., outputs `1.2 MΩ` instead of `1200000 Ω`).
* **Modular Architecture:** Built using Vanilla JavaScript and ES6 Modules, keeping data, business logic, and UI controllers completely separate.
* **No Dependencies:** Zero external libraries or frameworks required for the core logic.

## 🏗 Project Structure

The software is structured using the Separation of Concerns (SoC) principle:

```text
resistor-calculator/
├── index.html           # The presentation layer (UI)
├── css/
│   └── style.css        # Layout, typography, and dynamic color classes
├── js/
│   ├── constants.js     # Data Dictionary: Single source of truth for color values/multipliers
│   ├── calculator.js    # Business Logic: Pure functions for math and formatting
│   └── app.js           # Controller: Event listeners and DOM manipulation
└── README.md
```

🚀 How to Run Locally
Because this project uses ES6 Modules (import / export), it must be run via a local web server to bypass strict browser CORS policies.

Navigate to the project directory:

Bash
cd resistor-calculator
Start a local server:
You can use Node.js (npx) to serve the folder instantly:

Bash
npx serve
(Alternatively, if using Python, you can run python3 -m http.server 8000)

Open your browser:
Navigate to the local address provided by your terminal (usually http://localhost:3000).

🛠 Future Improvements
Add support for 6-band resistors (incorporating the Temperature Coefficient in PPM).

Add a reverse-calculator (input a numerical value to output the corresponding colors).

Build out a test suite for calculator.js to ensure mathematical accuracy as new features are added.

Built with HTML, CSS, and Vanilla JavaScript.
