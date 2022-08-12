import {
  seconds,
  minutes,
  hours,
  days,
  weeks,
  months,
  years,
} from '../src/index';

describe('seconds()', () => {
  it('converts seconds to miliseconds correctly', () => {
    expect(seconds(1).toMilliseconds()).toBe(1000);
  });

  it('converts seconds to seconds correctly', () => {
    expect(seconds(1).toSeconds()).toBe(1);
  });

  it('converts seconds to minutes correctly', () => {
    expect(seconds(60).toMinutes()).toBe(1);
  });

  it('converts seconds to hours correctly', () => {
    expect(seconds(60 * 60).toHours()).toBe(1);
  });

  it('converts seconds to days correctly', () => {
    expect(seconds(60 * 60 * 24).toDays()).toBe(1);
  });

  it('converts seconds to weeks correctly', () => {
    expect(seconds(60 * 60 * 24 * 7).toWeeks()).toBe(1);
  });

  it('converts seconds to months correctly', () => {
    expect(seconds(60 * 60 * 24 * 30).toMonths()).toBe(1);
  });

  it('converts seconds to years correctly', () => {
    expect(seconds(60 * 60 * 24 * 365).toYears()).toBe(1);
  });
});

describe('minutes()', () => {
  it('converts minutes to miliseconds correctly', () => {
    expect(minutes(1).toMilliseconds()).toBe(60 * 1000);
  });
  it('converts minutes to seconds correctly', () => {
    expect(minutes(1).toSeconds()).toBe(60);
  });
  it('converts minutes to minutes correctly', () => {
    expect(minutes(1).toMinutes()).toBe(1);
  });
  it('converts minutes to hours correctly', () => {
    expect(minutes(60).toHours()).toBe(1);
  });
  it('converts minutes to days correctly', () => {
    expect(minutes(60 * 24).toDays()).toBe(1);
  });
  it('converts minutes to weeks correctly', () => {
    expect(minutes(60 * 24 * 7).toWeeks()).toBe(1);
  });
  it('converts minutes to months correctly', () => {
    expect(minutes(60 * 24 * 30).toMonths()).toBe(1);
  });
  it('converts minutes to years correctly', () => {
    expect(minutes(60 * 24 * 365).toYears()).toBe(1);
  });
});
describe('hours()', () => {
  it('converts hours to miliseconds correctly', () => {
    expect(hours(1).toMilliseconds()).toBe(60 * 60 * 1000);
  });
  it('converts hours to seconds correctly', () => {
    expect(hours(1).toSeconds()).toBe(60 * 60);
  });
  it('converts hours to minutes correctly', () => {
    expect(hours(1).toMinutes()).toBe(60);
  });
  it('converts hours to hours correctly', () => {
    expect(hours(1).toHours()).toBe(1);
  });
  it('converts hours to days correctly', () => {
    expect(hours(24).toDays()).toBe(1);
  });
  it('converts hours to weeks correctly', () => {
    expect(hours(24 * 7).toWeeks()).toBe(1);
  });
  it('converts hours to months correctly', () => {
    expect(hours(24 * 30).toMonths()).toBe(1);
  });
  it('converts hours to years correctly', () => {
    expect(hours(24 * 365).toYears()).toBe(1);
  });
});

describe('days()', () => {
  it('converts days to miliseconds correctly', () => {
    expect(days(1).toMilliseconds()).toBe(60 * 60 * 24 * 1000);
  });
  it('converts days to seconds correctly', () => {
    expect(days(1).toSeconds()).toBe(60 * 60 * 24);
  });
  it('converts days to minutes correctly', () => {
    expect(days(1).toMinutes()).toBe(60 * 60 * 24);
  });
  it('converts days to hours correctly', () => {
    expect(days(1).toHours()).toBe(60 * 60 * 24);
  });
  it('converts days to days correctly', () => {
    expect(days(1).toDays()).toBe(1);
  });
  it('converts days to weeks correctly', () => {
    expect(days(7).toWeeks()).toBe(1);
  });
  it('converts days to months correctly', () => {
    expect(days(30).toMonths()).toBe(1);
  });
  it('converts days to years correctly', () => {
    expect(days(365).toYears()).toBe(1);
  });
});

describe('weeks()', () => {
  it('converts weeks to miliseconds correctly', () => {
    expect(weeks(1).toMilliseconds()).toBe(60 * 60 * 24 * 7 * 1000);
  });
  it('converts weeks to seconds correctly', () => {
    expect(weeks(1).toSeconds()).toBe(60 * 60 * 24 * 7);
  });
  it('converts weeks to minutes correctly', () => {
    expect(weeks(1).toMinutes()).toBe(60 * 60 * 24 * 7);
  });
  it('converts weeks to hours correctly', () => {
    expect(weeks(1).toHours()).toBe(60 * 60 * 24 * 7);
  });
  it('converts weeks to days correctly', () => {
    expect(weeks(1).toDays()).toBe(7);
  });
  it('converts weeks to weeks correctly', () => {
    expect(weeks(1).toWeeks()).toBe(1);
  });
  it('converts weeks to months correctly', () => {
    expect(weeks(4).toMonths()).toBe(1);
  });
  it('converts weeks to years correctly', () => {
    expect(weeks(52).toYears()).toBe(1);
  });
});

describe('months()', () => {
  it('converts months to miliseconds correctly', () => {
    expect(months(1).toMilliseconds()).toBe(60 * 60 * 24 * 30 * 1000);
  });
  it('converts months to seconds correctly', () => {
    expect(months(1).toSeconds()).toBe(60 * 60 * 24 * 30);
  });
  it('converts months to minutes correctly', () => {
    expect(months(1).toMinutes()).toBe(60 * 60 * 24 * 30);
  });
  it('converts months to hours correctly', () => {
    expect(months(1).toHours()).toBe(60 * 60 * 24 * 30);
  });
  it('converts months to days correctly', () => {
    expect(months(1).toDays()).toBe(30);
  });
  it('converts months to weeks correctly', () => {
    expect(months(1).toWeeks()).toBe(4);
  });
  it('converts months to months correctly', () => {
    expect(months(1).toMonths()).toBe(1);
  });
  it('converts months to years correctly', () => {
    expect(months(12).toYears()).toBe(1);
  });
});

describe('years()', () => {
  it('converts years to miliseconds correctly', () => {
    expect(years(1).toMilliseconds()).toBe(60 * 60 * 24 * 365 * 1000);
  });
  it('converts years to seconds correctly', () => {
    expect(years(1).toSeconds()).toBe(60 * 60 * 24 * 365);
  });
  it('converts years to minutes correctly', () => {
    expect(years(1).toMinutes()).toBe(60 * 60 * 24 * 365);
  });
  it('converts years to hours correctly', () => {
    expect(years(1).toHours()).toBe(60 * 60 * 24 * 365);
  });
  it('converts years to days correctly', () => {
    expect(years(1).toDays()).toBe(365);
  });
  it('converts years to weeks correctly', () => {
    expect(years(1).toWeeks()).toBe(52);
  });
  it('converts years to months correctly', () => {
    expect(years(1).toMonths()).toBe(12);
  });
  it('converts years to years correctly', () => {
    expect(years(1).toYears()).toBe(1);
  });
});
