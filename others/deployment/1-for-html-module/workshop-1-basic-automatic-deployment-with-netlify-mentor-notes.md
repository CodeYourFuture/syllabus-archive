# Mentor notes for Workshop 1: Basic Automatic Project Deployment using Netlify

# What's this?

Mentor notes outlining an in-class workshop in which students will learn the basics of automatic deployment of their (simple) html/css projects using Netlify and GitHub.

[The student notes are here](./workshop-1-basic-automatic-deployment-with-netlify.md)

# Who's it for?

It's for students in the HTML/CSS module.

It's intended students attend the actual workshop session, which this document supports but does not replace.

Later in the course, a more advanced workshop may be given.

# Workshop goals:

- After this first 20-minute workshop, students should be able to:

  - Configure the automated deploy of any STATIC (non-generated) site they create on github in future (including all significant CYF homework projects).
  - Recover from common mistakes they make during deployment configuration.

## NON-goals:

- After this _first_ workshop, the students DON'T need to be able to explain HOW it is working (only what the trigger(s) and results are). We'll have time in later sessions.

# Workshop pre-requisites:

Students should have:

- made some very simple sites (even a single index.html)
- the source of at least some of those sites as repos on github.
- know their github login
- [created netlify account for homework](https://classroom.google.com/u/1/c/Mzk3NDA1NjA4MTVa/a/NjA0NjEwMzM1MzRa/submissions/by-status/and-sort-first-name/not-done)

Students **don't** need to know anything about the command line or npm.

## Overview:

- demo
- demo
- practice deploy
- site naming conventions
- practice deploy
- practice deploy

## Demonstration #1. A 60-second demonstration

Demonstrate VERY quickly, to build curiosity. We'll break it down later.

Live coding:

- Show teacher's copy of cake repo on github [nbogie/responsive-cake-webpage](https://github.com/nbogie/responsive-cake-webpage)
- Modify the content to prove we are live (students can suggest some silly (text) content.
- State: I wish to publish at https://cyf-nbogie-cakes.netlify.com/
- [Post to slack](https://app.slack.com/client/T2H71EFLK/CSE061L6L/thread/CSE061L6L-1581174531.227000)
- Have a student check there's nothing there yet
- Add the site to Netlify
- Observe deployed site (random name)
- Change site name
- Observe at new location
- Commit and push
- [Observe deployed site](https://cyf-nbogie-cakes.netlify.com/) (maybe wait 60 seconds)
- Have students observe at new location

## Demonstration #2. (Another 60-second demonstration.)

- If you haven't already, fork the project from https://github.com/CodeYourFuture/p5js-minimal
- [Show the project source](https://github.com/nbogie/p5js-minimal)
- Deploy it
- Change the site title
- [Observe site](https://cyf-nbogie-p5js.netlify.com/)
- Commit & Push a change
- [Observe site](https://cyf-nbogie-p5js.netlify.com/)

## Follow student workshop notes from here

## Trouble-shooting - when things go wrong

Mentor notes - points to cover:

- Simplest approach is often to delete & recreate site. (e.g. if you use the wrong github account or repo).
- Renaming site is possible
- When repos don't show up in the menu
- If site is not deploying on push to master (logs, branch awareness, propagation delay)

## Note: Alternatives exist, but we'll use Netlify

Many alternatives for hosting exist (heroku, github pages) but we'll do it this way for CYF projects, to make it easier for volunteers. (You are free to deploy elsewhere in ADDITION to netlify!)

## Exercise:

In your table, define what these things mean to you:

- `deployment`
- `automatic deployment`

## recap: What we learned
