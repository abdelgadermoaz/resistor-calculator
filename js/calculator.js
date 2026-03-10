import { COLOR_DICT } from './constants.js';

export function calculateResistance(bandColors) {
    // bandColors is an array of color strings: ['brown', 'black', 'red', 'gold']
    
    let digits, multiplierColor, toleranceColor;

    if (bandColors.length === 4) {
        // 4-Band: Digit, Digit, Multiplier, Tolerance
        digits = (COLOR_DICT[bandColors[0]].value * 10) + 
                  COLOR_DICT[bandColors[1]].value;
        multiplierColor = bandColors[2];
        toleranceColor = bandColors[3];
    } else if (bandColors.length >= 5) {
        // 5-Band: Digit, Digit, Digit, Multiplier, Tolerance
        digits = (COLOR_DICT[bandColors[0]].value * 100) + 
                 (COLOR_DICT[bandColors[1]].value * 10) + 
                  COLOR_DICT[bandColors[2]].value;
        multiplierColor = bandColors[3];
        toleranceColor = bandColors[4];
    }

    const multiplier = COLOR_DICT[multiplierColor].multiplier;
    const tolerance = COLOR_DICT[toleranceColor].tolerance;
    const resistanceValue = digits * multiplier;

    return {
        ohms: resistanceValue,
        tolerance: tolerance
    };
}

export function formatEngineeringNotation(value) {
    if (value >= 1e9) return (value / 1e9).toPrecision(3).replace(/\.0+$/, '') + ' GΩ';
    if (value >= 1e6) return (value / 1e6).toPrecision(3).replace(/\.0+$/, '') + ' MΩ';
    if (value >= 1e3) return (value / 1e3).toPrecision(3).replace(/\.0+$/, '') + ' kΩ';
    if (value < 1 && value > 0) return value.toFixed(2) + ' Ω';
    return value + ' Ω';
}