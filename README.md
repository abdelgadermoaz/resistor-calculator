# Resistor Color Code Calculator ⚡️

![HTML5](https://img.shields.io/badge/html5-%23E34F26.svg?style=flat&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/css3-%231572B6.svg?style=flat&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/javascript-%23323330.svg?style=flat&logo=javascript&logoColor=%23F7DF1E)

A fast, modular, and interactive web-based calculator for determining the resistance values of 4-band and 5-band through-hole resistors. 

This project was built with a strict focus on clean architecture, separating the core mathematical logic from the user interface. This ensures the codebase remains highly maintainable, testable, and easily extensible for future hardware components.
<img width="865" height="543" alt="Screenshot 2026-03-11 at 00 45 52" src="https://github.com/user-attachments/assets/7021a0fa-0c0c-4e48-9f84-6a4131b5bce8" />



---

## ✨ Features

* **Real-time Interactive UI:** Dropdown menus automatically update their background and text colors to match the selected physical resistor band, providing instant visual feedback.
* **Smart Engineering Notation:** Automatically formats large and small values into readable, industry-standard outputs (e.g., outputs `1.22 MΩ` instead of `1220000 Ω`, or `4.7 kΩ` instead of `4700 Ω`).
* **Modular Architecture:** Built using Vanilla JavaScript and ES6 Modules, keeping data dictionaries, business logic, and UI controllers completely isolated from one another.
* **Zero Dependencies:** Completely lightweight. No external libraries, frameworks, or heavy build tools are required for the core logic.

---

## 🏗 Project Structure (Separation of Concerns)

The software is structured using the **Separation of Concerns (SoC)** principle. This mirrors backend API design by separating the "database" (constants), the "services" (calculator logic), and the "controllers" (DOM manipulation).

```text
resistor-calculator/
├── index.html           # The presentation layer (HTML skeleton)
├── css/
│   └── style.css        # Layout, typography, and dynamic color state classes
├── js/
│   ├── constants.js     # Data Dictionary: Single source of truth for color values/multipliers
│   ├── calculator.js    # Business Logic: Pure mathematical functions and formatting
│   └── app.js           # Controller: Event listeners, DOM manipulation, and data passing
└── README.md
```

## How to Run Locally

You need either Node.js or Python installed on your machine .

Steps

1- Clone or navigate to the project directory:

```text
cd resistor-calculator
```
2- Start a local development server:

Option A: Using Node.js (npx)

```text 
npx serve
```
Option B: Using Python 3

```text
python3 -m http.server 8000
```
3- Open your browser:
Navigate to the local address provided by your terminal.

- For npx serve, this is usually http://localhost:3000

- For Python, this is http://localhost:8000

---
## How to Use the Calculator

1- Select your resistor type (4-band or 5-band) from the respective sections on the page.

2- Click the dropdowns corresponding to the colored bands on your physical resistor, reading from left to right.

- Band 1, 2 (and 3 for 5-band): Represent the significant digits.

- Multiplier Band: Represents the weight/power of 10 applied to the digits.

- Tolerance Band: Represents the margin of error (e.g., Gold = ±5%).

3- The total resistance value will instantly calculate and display at the bottom of the section in standard Ohms (Ω), Kilo-ohms (kΩ), Mega-ohms (MΩ), or Giga-ohms (GΩ).

---

## Future Roadmap
- 6-Band Support: Implement logic to calculate and append the Temperature Coefficient (PPM) for high-precision 6-band resistors.

- Reverse Calculator: Build an input field where users can type a numerical value (e.g., "10k") and the UI will output the corresponding color bands.

- SMD Code Calculator: Expand the tool to calculate Surface Mount Device (SMD) 3-digit and 4-digit resistor codes.

- Unit Testing: Implement a testing framework like Jest to automatically verify the math in calculator.js against known edge cases.
---

 Contributing
Contributions, issues, and feature requests are welcome! Feel free to check the issues page if you want to contribute.

---
License
This project is open-source and available under the MIT License.

---

Built with HTML, CSS, and Vanilla JavaScript.

