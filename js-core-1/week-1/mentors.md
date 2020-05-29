# Mentor's Notes

## Presentations

- [Week 1 - JS Core 1 [Google Slides] - 01/05/2020](https://drive.google.com/open?id=1NFMenLrQ5B5UhU7HJAf9_xQxXHs2Md0pN3ENynuhjJ0)
  - Created by Manchester and Anthony Tran
- [Week 1 Midweek Catch-up - JS Core 1 [Google Slides] - 01/05/2020](https://docs.google.com/presentation/d/1oscN2HfvQMKFkkQ1UBfGhP274S6fPT9f02Ibys1OW1E/edit#slide=id.p)
  - Created by Scotland and Richard Darby

## Videos

- [Functions, Variables and Bees - An Introduction to JS1-1 Concepts](https://youtu.be/58zaP4gumpA)
  - Created by Scotland and Rares Matei

## What worked well

- Having all the exercises for the module in the js-exercises repo works well.

### Things to improve

- Array methods in syllabus seem outdated / not the most useful.

  - e.g. setting a new array value using the [x] notation should be replaced with .push()
  - Also suggest adding filter() to array methods section.

- Can we introduce arrow functions here? It is likely students will encounter this notation during their research, so it would be useful to cover this.

### Other thoughts

- Students confuse returns and console.logs
- It's difficult for students to differentiate between variables the coder has created, and reserved words that are built into javascript. e.g. multiply() vs push()
- The Predicates section was spent mostly trying to grasp typeof. Not sure if this is just a good opportunity to teach typeof, or if it distracts from the point of the lesson i.e. predicates?
- Students make some confusions between the function definition and the function call during the tdd exercises. They try to reuse the values or the variables passed as parameters when calling the function inside the function itself. For Example, given the definition: function addOne(numbers) and the call: addOne(myArray), students try to use the name myArray inside the function or they think that the parameter in the function definition should be called myArray...
