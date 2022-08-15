
# Time Conversion Helpers

A small library of helpers that convert one unit of time to another (roughly). For instance...
```ts
    import { seconds } from '@wilkins-software/time-conversion-helpers';
    
    const numberOfSeconds = minutes(2).toSeconds(); // 120
```


## Badges

[![npm version](https://badge.fury.io/js/@wilkins-software%2Ftime-conversion-helpers.svg)](https://badge.fury.io/js/@wilkins-software%2Ftime-conversion-helpers)

[![CI](https://github.com/Wilkins-Software/time-conversion-helpers/actions/workflows/main.yml/badge.svg)](https://github.com/Wilkins-Software/time-conversion-helpers/actions/workflows/main.yml)

[![size](https://github.com/Wilkins-Software/time-conversion-helpers/actions/workflows/size.yml/badge.svg)](https://github.com/Wilkins-Software/time-conversion-helpers/actions/workflows/size.yml)

![issues](https://img.shields.io/github/issues/Wilkins-Software/time-conversion-helpers)

![size](https://img.shields.io/github/forks/Wilkins-Software/time-conversion-helpers)

![size](https://img.shields.io/github/stars/Wilkins-Software/time-conversion-helpers)

![size](https://img.shields.io/github/license/Wilkins-Software/time-conversion-helpers)




## API Reference

#### Exported Functions

```
  functions: Accepted time units
```

| function  | argument          | Returns                |
| :-------- | :-------          | :----------------------|
| `seconds` | `numberOfSeconds` | ConverterObject        |
| `minutes` | `numberOfMinutes` | ConverterObject        |
| `hours`   | `numberOfHours`   | ConverterObject        |
| `days`    | `numberOfDays`    | ConverterObject        |
| `weeks`   | `numberOfWeeks`   | ConverterObject        |
| `months`  | `numberOfMonths`  | ConverterObject        |
| `years`   | `numberOfYears`   | ConverterObject        |

#### ConverterObject

The object returned by all time converters. It contains methods to convert to any other time unit:

| Method             | Returns    
| :--------          | :------- | 
| `toMilliseconds()` | `number` | 
| `toSeconds()`      | `number` | 
| `toMinutes()`      | `number` |
| `toHours()`        | `number` | 
| `toDays()`         | `number` | 
| `toWeeks()`        | `number` | 
| `toMonths()`       | `number` | 
| `toYears()`        | `number` | 



## Authors

- [@mark-wilkins](https://github.com/mwilkins91)


## Usage/Examples

### Convert seconds to miliseconds for setTimeout()

```typescript
import { seconds } from '@wilkins-software/time-conversion-helpers'

setTimeout(() => {
    console.log('this will fire after 4 seconds');
}, seconds(4).toMilliseconds())

```

### Convert days to seconds for a cache control header

```typescript
import { days } from '@wilkins-software/time-conversion-helpers'

const headers = {
    'Cache-Control': `max-age=${days(30).toSeconds()}`
}

```