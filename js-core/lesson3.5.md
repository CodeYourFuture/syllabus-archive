![](https://img.shields.io/badge/status-draft-darkred.svg) 


# Pair Programming Day
** What we will learn today?**
- We will practice pair programming with a mentor
---

## How to work today?
Today, we want to focus on our problem solving skills, how we think and tackle problems before even code, then crafting a **beautiful** solution using techniques like **TDD**
- Think about the solution before writing any code (maybe even write pseudocode, or pencil a solution)
- Break bigger tasks into smaller pieces, and solve them one step at a time.
- Think about your function signature
- Write Test -> Write Code Implementation -> Refactor (repeat)
- Use the debugger
- Good functions
    - have good names and clear parameter names
    - have single responsibility
    - be defensive: your function might be called with a number when you expect a string, or your parameters might just be undefined. Don't trust your input!
- Good tests
    - have good test description
    - test for edge cases and unexpected behavior

> Students should drive this exercise - make use of having a mentor with you, take a step back and let them explain anything you don't understand

## The exercise
The class will be based on Find Alive people exercise on [JS-TDD-Exercises](https://github.com/CodeYourFuture/js-tdd-exercises) repo

- Implement the basic example if you haven't (find alive people)
if you did, let the mentor review it

- Write a function findByAge that finds people over a certain age (age is a parameter)
    - signature: findByAge(writers, age) - writers is an array age is a number
    - example: findByAge(writers, 60) returns every person over 60
- **Refactor** findByAge to take a third parameter (boolean) that makes look for people below a certain age (rather than above)
    - signature: findByAge(writers, age, isBelow) - writers is an array, age is number, isBelow is Boolean
    - example: findByAge(writers, 60, true) returns every person under 60
    - findByAge(writers, 60, false) returns every person over 60
> This should be the same previous function - and the previous tests should not break

- write a functon to find people by firstName or lastName
    - signature: findByName(writers, name) - writers is an array, name is a string
    - example: findByName(writers, "Smith") returns every person who has their first name or last name as "smith"

- Improve the last function to to match the start of the word not the whole word (add a test first)
    - same signature as previous step
    - findByName(writers, "sm") returns every person whose firstName or lastName starts with "sm"

- Write a function that performs a more generic version of this search
it should take an object that has two keys
    - signature: findWriter(writers, searchCriteria) - writers is an array, searchCriteria is an object (property, value pairs)
```javascript
// passing this searchCriteria should return every person who is over 60 and alive
findWriter(writers, { 
    age: 60,
    alive: true
});
```
- Write a function called getStatistics that takes an array of writers and returns an object containing stats about the numbers of the writers alive
        - getStatistics(writers);
```javascript
// response should be an object representing the statistics about how many are alive and how many are dead - sample response:
{
    alive: 2,
    dead: 3
}
```
### More potential exercises

- Write a function that accepts an array of words and finds the longest word
    - Example: ['Code', 'Your', 'Future']
    - Returns: 'Future'
> Think about your solution in plain English and write pseudocode
>
> Add more test cases to verify your solution

- Write a function that accepts a phrase (string) and finds the longest word
    - Example string : 'Code Your Future'
    - Expected Output : 'Future'
- Can your new function reuse the previous function?
- Write a JavaScript function that accepts a string as a parameter and counts the number of vowels within the string.
    - Note : As the letter 'y' can be regarded as both a vowel and a consonant, we do not count 'y' as vowel here. So the vowels are a, e, i, o, u
    - Example string : 'Code Your Future'
    - Expected Output : 6
- Write a JavaScript function that accepts a string as a parameter and returns an object containing how many times each vowel was repeated
``` javascript
// Example string : 'Code Your Future'
// Expected Output :
{
	o: 2,
	e: 2,
	u: 3
}
```
- Write a function that removes vowels from a phrase.
    - removeVowels("goodbye") // --> "gdby"
    - removeVowels("nodegirls") // --> "nd grls"
    - removeVowels('how are you today?') // --> "hw r y tdy?"
- Update the function to have a second argument (a Boolean) - if it passed false, then it removes vowels - if passed true, then it removes consonants
    - removeVowels("goodbye", false) // --> "gdby"
    - removeVowels("goodbye", true) // --> "ooe"
    - Your updates on this step should not break the functionality in step 1

# Homework

1. [JS-TDD-Exercises](https://github.com/CodeYourFuture/js-tdd-exercises) - pull the new exercises, and update your solutions based on the PRs

# Prepare for the next class
1. Look over these examples for interacting with the DOM using JavaScript. We'll discuss these in more detail next week, but try to make an idea of the different API methods and what they do. [DOM Examples](https://developer.mozilla.org/en-US/docs/Web/API/Document_Object_Model/Examples)
