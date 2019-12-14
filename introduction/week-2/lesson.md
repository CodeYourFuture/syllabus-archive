# Week 0.2

## Code.org review

How was the homework? Any questions?

We will review some exercises from [Code.org](https://code.org/).

## Programming concepts

In the Code.org exercises, you were introduced to various programming concepts.
Some of them were:

- Sequence
- Variables
- Branching
- Loops
- Functions

These concepts are the foundations of programming, and it is important that you understand them well!
We will cover them briefly now so that you become familiar with them, then we will talk about them in depth in the JavaScript modules. 

Pseudocode exercise?

## Pair programming

Pair programming is something we sometimes do in the industry.
It is when two programmers work together on one computer.
A benefit of pair programming is knowledge sharing, particularly in a scenario where a student is pairing with a mentor.

We will now do some pair programming.

## Sorting algorithm game

This is a team exercise.  It works well for any number of teams of 3-5 students.

There is a longer planning phase which all teams do at once in their teams and then a short ‘attempt’ phase where each team in sequence can attempt to run their prepared plan on a set of volunteers.
The challenge for students
Your team’s goal is to organise a row of ‘people’ as quickly as possible while following all the rules given.

Your group (ideally 3-5 students) will first work together to define the strategy and create a set of instructions needed to complete the task.

When it is time to test your planned instructions, your group will split into planners and one executor:
- The ‘planners’ communicate one instruction at a time to the executor, and receive responses from them
- The ‘executor’ will execute the instructions and carry out the operation, according to strict rules, but will not take part in decision-making during the test.

The group of ‘people’ to be ordered will be assigned one value each at random, written on paper, visible to your team’s executor, but hidden to your team’s planners.

The group of people will be placed one each on numbered slots, so that your planners can refer to them by position.

There will be one extra empty slot called ‘waiting-room’ (‘WR’ in the diagram).

Your team can decide whether you will order the people in ascending or descending order.

### The Executor’s role

- One of your team will take the role of executor during the test of your instructions
- The executor will receive a command and the input needed to carry out the command (e.g. “COMPARE: is value in slot 3 is larger than value in slot 7?”)
- The executor can only execute the instructions they receive and can only give the allowed responses.
- The executor cannot interpret the instructions they receive
- The executor cannot move position or signal to the planners.
- The executor can ask for the planners to repeat when they have not heard well.

### The instructions

Each instruction can only consist of the commands: MOVE or COMPARE. These commands can be grouped as a function (hint: see the function option).

The MOVE command

- With this command, the executor moves ONE person from one named slot to another.  A slot is either a numbered slot or the ‘waiting room’ slot.
- The only response the executor should give after the move command is ‘Done’.
- You cannot move a person to a slot with another person in it, only to an empty slot.
- Examples:  
  - “MOVE person from slot 3 to slot 7”
  - “MOVE person from waiting room to slot 6”

The COMPARE command

- With this command, the executor compares the values held by the people in two named slots  (e.g. 0 and 1) using a given operator (‘greater than’, ‘less than’, ‘greater or equal’, ‘less or equal than’). 

The executor announces a result: ‘Yes’, ‘No’ or ‘undefined’.

- One of the slots for the COMPARE instruction can be the waiting room.
- Example:
  - “COMPARE: is value in slot 3 is larger than value in slot 7?”
  - “Yes”

### Time limit and game end

The ‘planners’ have a maximum of 5 mins to carry out their instructions.  When the time is reached the attempt will stop.

At the end of the time limit or if the planners announce they have finished early, the current values can be revealed to the planners to let them see if they were successful in ordering.

### Clarifications

Only one ‘person’ is allowed in one slot at the time.

Optional (Function)

- Planners can create a predefined series of commands and call them functions
- Functions need to be given a clear name and need to be written in a flipchart

Beginning of the game

- The Planners announce in what order they will sort the people
- If there are any Functions they will present them in a flipchart to the Executor 
- You will have 5 minutes to complete sorting the people

Instructions for Mentors for Setup

- For slot labels, the class needs to prepare one set of A4 paper sheets with digits 1..7 written large on them, and another one that says ‘waiting room’
- For values, the class needs to prepare one set of A4 paper sheets with the numbers 10, 20, 30, 40, 50, 60, 70, 80, 90 written large on them.
- The class needs to space the slot papers in a line on the floor, spaced so that there can be one person at every slot, comfortably.
- Put the waiting room slot on the floor, slightly apart.
- Ask for volunteers from spectators to stand on each of the numbered slots, one person per slot, no one in the waiting room, initially.
- The group needs to choose their executor
- This executor should stand facing the line of people
- Have the planners of the group take their places behind the row of people
- Being careful not to show the values to the planners, shuffle and hand out one value sheet to each person on a slot.
- The people on the slots should be facing AWAY from the planners, but toward the executor.  They should hold their value cards so that the executor can see them.
- A mentor or two needs to be assigned as compiler (see below)
- Someone not in the group should be assigned time-keeper (5 minute timer).
- The planners need to announce their intention to sort either Ascending or Descending before they start.

The Compiler role

- One or two mentors should act as compilers.
- The compiler’s job is to spot instruction errors and announce them quickly and clearly:
- Illegal instructions that are not MOVE or COMPARE
- Critical human mistakes made by the executor under pressure that are not the fault of the planners and which would mislead them (most commonly, if they misreport the result of a comparison).

Post-exercise Discussion

- What is needed for the success of the game?
- What did you learn by playing this?
- Discussion on functions. Why they could be useful?

## Git

TBD

### Theory/Concepts

TBD

### Basic commands

TBD

## Homework

2. Terminal and Git exercise (TBD repo link to fork)
3. Video algorithm recipes (optional)
