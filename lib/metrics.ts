import { RunEntry } from "./types";

export function calculateOverallMetrics(data: RunEntry[]) {
  const miles = data.map((d) => d.miles);

  const total = miles.reduce((sum, m) => sum + m, 0);
  const avg = miles.length ? total / miles.length : 0;
  const min = Math.min(...miles);
  const max = Math.max(...miles);

  return {
    average: avg,
    min,
    max,
  };
}

export function calculatePerPersonMetrics(data: RunEntry[]) {
  const result: Record<
    string,
    { average: number; min: number; max: number }
  > = {};

  const grouped: Record<string, number[]> = {};

  for (const entry of data) {
    if (!grouped[entry.person]) {
      grouped[entry.person] = [];
    }
    grouped[entry.person].push(entry.miles);
  }

  for (const person in grouped) {
    const miles = grouped[person];
    const total = miles.reduce((s, m) => s + m, 0);

    result[person] = {
      average: total / miles.length,
      min: Math.min(...miles),
      max: Math.max(...miles),
    };
  }

  return result;
}
