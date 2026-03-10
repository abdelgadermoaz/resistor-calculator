
export const COLOR_DICT = {
    black:  { value: 0, multiplier: 1 },
    brown:  { value: 1, multiplier: 10, tolerance: 1, ppm: 100 },
    red:    { value: 2, multiplier: 100, tolerance: 2, ppm: 50 },
    orange: { value: 3, multiplier: 1000, ppm: 15 },
    yellow: { value: 4, multiplier: 10000, ppm: 25 },
    green:  { value: 5, multiplier: 100000, tolerance: 0.5 },
    blue:   { value: 6, multiplier: 1000000, tolerance: 0.25 },
    violet: { value: 7, multiplier: 10000000, tolerance: 0.1 },
    gray:   { value: 8, multiplier: 100000000, tolerance: 0.05 },
    white:  { value: 9, multiplier: 1000000000 },
    gold:   { multiplier: 0.1, tolerance: 5 },
    silver: { multiplier: 0.01, tolerance: 10 }
};