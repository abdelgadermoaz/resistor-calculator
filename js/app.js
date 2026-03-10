import { calculateResistance, formatEngineeringNotation } from './calculator.js';

function updateCalculator(type) {
    // 1. Find all select elements for the specific calculator (calc4 or calc5)
    const selects = document.querySelectorAll(`#${type}-container select`);
    const bandColors = [];

    // 2. Extract the color string (the option value) and update UI colors
    selects.forEach(select => {
        const selectedColor = select.value;
        bandColors.push(selectedColor);
        
        // Dynamically update the background color of the dropdown
        select.className = `c-${selectedColor}`;
    });

    // 3. Pass the array of colors to our pure math function
    const result = calculateResistance(bandColors);

    // 4. Format and display the result
    const formattedOhms = formatEngineeringNotation(result.ohms);
    document.getElementById(`res-${type}`).innerText = `Resistance: ${formattedOhms} ±${result.tolerance}%`;
}

// Attach event listeners when the DOM is fully loaded
document.addEventListener('DOMContentLoaded', () => {
    // Listen for changes in the 4-band container
    document.getElementById('calc4-container').addEventListener('change', () => updateCalculator('calc4'));
    
    // Listen for changes in the 5-band container
    document.getElementById('calc5-container').addEventListener('change', () => updateCalculator('calc5'));

    // Run once on load to populate the default states
    updateCalculator('calc4');
    updateCalculator('calc5');
});