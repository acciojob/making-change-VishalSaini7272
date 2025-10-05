# Making Change

## Instructions

Create a function `makeChange` that takes an amount of monetary change (e.g. 47 cents) and breaks down the most efficient way that change can be made using USD `quarters`, `dimes`, `nickels`, and `pennies`. Your function should return an object with the following properties:

`q`: the number of quarters needed
`d`: the number of dimes needed
`n`: the number of nickels needed
`p`: the number of pennies needed

The values for each coin are as follows:

- Penny: `0.01`
- Nickel: `0.05`
- Dime: `0.10`
- Quarter: `0.25`

Note that the amount given will always be less than 100 and more than 0.

## Examples

```
makeChange(47) // returns { "q": 1, "d": 2, "n": 0, "p": 2 }
makeChange(24) // returns { "q": 0, "d": 2, "n": 0, "p": 4 }
makeChange(92) // returns { "q": 3, "d": 1, "n": 1, "p": 2 }
```

## Constraints

The input amount will always be a positive integer less than 100 and greater than 0.

## Acceptance Criteria

- The function should return an object with the properties 'q', 'd', 'n', and 'p'.
- The object should represent the most efficient way to make change using USD quarters, dimes, nickels, and pennies.
- The function should return the expected output for the provided examples.
