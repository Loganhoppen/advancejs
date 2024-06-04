export function createConverter(fromUnit: string, toUnit: string) {
    const conversions: { [key: string]: (val: number) => number } = {
      "lb-kg": (val) => val * 0.453592,
      "kg-lb": (val) => val * 2.20462,
      "miles-km": (val) => val * 1.60934,
      "km-miles": (val) => val * 0.621371,
      "c-f": (val) => (val * 9/5) + 32,
      "f-c": (val) => (val - 32) * 5/9
    };
  
    const key = `${fromUnit}-${toUnit}`;
    return conversions[key] || ((val) => val); 
  }
  