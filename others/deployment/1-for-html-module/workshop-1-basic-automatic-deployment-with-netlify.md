# Workshop 1: Basic Automatic Project Deployment using Netlify

# What's this?

Some notes to accompany an in-class workshop in which you'll learn the basics of deploying your html/css projects using Netlify.

# Who's it for?

It's for students in the HTML/CSS module.

It's intended students attend the actual workshop session, which this document supports but does not replace.

# Workshop goals:

- After this first 20-minute workshop, students should be able to:

  - configure the automated deploy of any STATIC (non-generated) site they create on github in future (including all significant CYF homework projects).
  - recover from common mistakes they make during deployment configuration.

# Non-goals:

- After this _first_ workshop, the students DON'T need to be able to explain HOW it is working (only what the trigger(s) and results are). We'll have time in later sessions.

# Workshop pre-reqs:

Students should have:

- made some very simple sites (even a single index.html)
- some of those sites as repos on github.
- [created netlify account for homework](https://classroom.google.com/u/1/c/Mzk3NDA1NjA4MTVa/a/NjA0NjEwMzM1MzRa/submissions/by-status/and-sort-first-name/not-done)

Students **don't** need to know anything about the command line or npm.

# The workshop!

Overview:

- demo,
- demo,
- practice,
- site naming conventions
- practice,

## Demonstration #1. A 60-second demonstration

Mentor notes: Demonstrate VERY quickly, to build curiosity. We'll break it down later.

Live coding:

- Show teacher's copy of cake repo on github.
- Modify the content to prove we are live (students can suggest some silly (text) content.
- State: I wish to publish at https://cyf-nbogie-cakes.netlify.com/
- Post to slack
- Have a student check there's nothing there yet
- Add the site to Netlify
- Observe deployed site (random name)
- Change site name
- Observe at new location
- Commit and push
- [Observe deployed site](https://cyf-nbogie-cakes.netlify.com/) (maybe wait 60 seconds)
- Have students observe at new location

## Demonstration #2. Another 60-second demonstration.

- Fork the project https://github.com/CodeYourFuture/p5js-minimal
- Deploy it

## What just happened?

- I configured a free service called Netlify to automatically deploy one of my github repos as a website, whenever there was a change on the master branch.
- It made the website available at a random site name under netlify.com
- I configured a different site name of my choosing.
- I tested it was working by pushing new changes to that branch.

## What we'll learn

## Advantages

(two sentences no more) (no codepen banner, few restrictions, free, professional, possibility of using your own domain name)

## Your turn - create account and deploy a site

Follow [the instructions here](./instructions-for-automatic-deployment-netlify-and-github.md).

## push some code changes,

- make some quick visual changes to your site in vscode (change an `<h1>` or a background colour)
- commit and _push_ the change to github (to the same branch you chose at setup)
- check your site url again - is it updated? (it might take 60 seconds)
- celebrate

## CYF site naming conventions

Use the standard format for site names for all CYF homework projects - see [site naming conventions](../cyf-site-naming-conventions.md)

- cyf-[your github username]-[exact project name as supplied by teacher]

Example:

- cyf-lucymac-cakes.netlify.com

## Let's practice

We'll practice by deploying 3 site.

**Don't worry** that these projects aren't "finished" yet - you can continue to make improvements over the next couple of weeks and your changes will automatically be deployed.

We just want to repeatedly practice the process so that you can do it on your own in future.

- [karma clone](https://github.com/CodeYourFuture/karma-clone)
- [responsive cake webpage](https://github.com/CodeYourFuture/responsive-cake-webpage)
- [p5js minimal example](https://github.com/codeyourfuture/p5js-minimal) - you might not have seen this project before, so you'll have to make your own fork of it now.

For each project:

- set up netlify to automatically deploy it
- set up the site title correctly
- test the deployed site to check it seems ok
- make (and push) some changes to check the site is redeployed automatically
- test the site on your phone, and bookmark it
- test the site of the person sitting next to you!

## Linking from github repo

Putting your full url into your github repo website field and in your homework submission

## Deleting your hosted site

(you decide you don't want it public) - practice deleting a site

## Trouble-shooting - when things go wrong

- (Delete & recreate site is possible (e.g. if you use the wrong github account or repo), renaming site is possible)
- When repos don't show up in the menu
- If site is not deploying on push to master (logs, branch awareness, propagation delay)

## Yes, alternatives exist, but

but you'll do it this way for CYF projects - make easier for volunteers. (You are free to deploy elsewhere, too!)

## recap: What we learned

## Reference material for when you forget:

- The CYF Netlify auto-deploy CheatSheet (for when you forget all this stuff)
- official docs

## How to learn more

- we'll revisit netlify deployment later in the course
- This video tutorial (2 minutes) is old and has some inaccuracies - you can watch it but for detail, use OUR instructions https://docs.netlify.com/site-deploys/overview/#deploy-summary
- These written instructions are also not perfect (you should not fill in "dir" and "build command" (until the React module) https://www.netlify.com/blog/2016/09/29/a-step-by-step-guide-deploying-on-netlify/
