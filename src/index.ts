export const seconds = (numberOfSeconds: number) => {
  return {
    toMilliseconds: () => Math.round(numberOfSeconds * 1000),
    toSeconds: () => Math.round(numberOfSeconds),
    toMinutes: () => Math.round(numberOfSeconds / 60),
    toHours: () => Math.round(numberOfSeconds / (60 * 60)),
    toDays: () => Math.round(numberOfSeconds / (60 * 60 * 24)),
    toWeeks: () => Math.round(numberOfSeconds / (60 * 60 * 24 * 7)),
    toMonths: () => Math.round(numberOfSeconds / (60 * 60 * 24 * 30)),
    toYears: () => Math.round(numberOfSeconds / (60 * 60 * 24 * 365)),
  };
};

export const minutes = (numberOfMinutes: number) => {
  return {
    toMilliseconds: () => Math.round(numberOfMinutes * 60 * 1000),
    toSeconds: () => Math.round(numberOfMinutes * 60),
    toMinutes: () => Math.round(numberOfMinutes),
    toHours: () => Math.round(numberOfMinutes / 60),
    toDays: () => Math.round(numberOfMinutes / (60 * 24)),
    toWeeks: () => Math.round(numberOfMinutes / (60 * 24 * 7)),
    toMonths: () => Math.round(numberOfMinutes / (60 * 24 * 30)),
    toYears: () => Math.round(numberOfMinutes / (60 * 24 * 365)),
  };
};

export const hours = (numberOfHours: number) => {
  return {
    toMilliseconds: () => Math.round(numberOfHours * 60 * 60 * 1000),
    toSeconds: () => Math.round(numberOfHours * 60 * 60),
    toMinutes: () => Math.round(numberOfHours * 60),
    toHours: () => Math.round(numberOfHours),
    toDays: () => Math.round(numberOfHours / 24),
    toWeeks: () => Math.round(numberOfHours / (24 * 7)),
    toMonths: () => Math.round(numberOfHours / (24 * 30)),
    toYears: () => Math.round(numberOfHours / (24 * 365)),
  };
};

export const days = (numberOfDays: number) => {
  return {
    toMilliseconds: () => Math.round(numberOfDays * 24 * 60 * 60 * 1000),
    toSeconds: () => Math.round(numberOfDays * 24 * 60 * 60),
    toMinutes: () => Math.round(numberOfDays * 24 * 60),
    toHours: () => Math.round(numberOfDays * 24),
    toDays: () => Math.round(numberOfDays),
    toWeeks: () => Math.round(numberOfDays / 7),
    toMonths: () => Math.round(numberOfDays / 30),
    toYears: () => Math.round(numberOfDays / 365),
  };
};

export const weeks = (numberOfWeeks: number) => {
  return {
    toMilliseconds: () => Math.round(numberOfWeeks * 7 * 24 * 60 * 60 * 1000),
    toSeconds: () => Math.round(numberOfWeeks * 7 * 24 * 60 * 60),
    toMinutes: () => Math.round(numberOfWeeks * 7 * 24 * 60),
    toHours: () => Math.round(numberOfWeeks * 7 * 24),
    toDays: () => Math.round(numberOfWeeks * 7),
    toWeeks: () => Math.round(numberOfWeeks),
    toMonths: () => Math.round(numberOfWeeks / 4.34524),
    toYears: () => Math.round(numberOfWeeks / 52.1429),
  };
};

export const months = (numberOfMonths: number) => {
  return {
    toMilliseconds: () => Math.round(numberOfMonths * 30 * 24 * 60 * 60 * 1000),
    toSeconds: () => Math.round(numberOfMonths * 30 * 24 * 60 * 60),
    toMinutes: () => Math.round(numberOfMonths * 30 * 24 * 60),
    toHours: () => Math.round(numberOfMonths * 30 * 24),
    toDays: () => Math.round(numberOfMonths * 30),
    toWeeks: () => Math.round((numberOfMonths * 30) / 7),
    toMonths: () => Math.round(numberOfMonths),
    toYears: () => Math.round(numberOfMonths / 12),
  };
};

export const years = (numberOfYears: number) => {
  return {
    toMilliseconds: () => Math.round(numberOfYears * 365 * 24 * 60 * 60 * 1000),
    toSeconds: () => Math.round(numberOfYears * 365 * 24 * 60 * 60),
    toMinutes: () => Math.round(numberOfYears * 365 * 24 * 60),
    toHours: () => Math.round(numberOfYears * 365 * 24),
    toDays: () => Math.round(numberOfYears * 365),
    toWeeks: () => Math.round((numberOfYears * 365) / 7),
    toMonths: () => Math.round((numberOfYears * 365) / 30),
    toYears: () => Math.round(numberOfYears),
  };
};
