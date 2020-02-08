# Workshop 1: Basic Automatic Project Deployment using Netlify

Student notes
[Teachers see these notes](./workshop-1-basic-automatic-deployment-with-netlify-mentor-notes.md)

## What just happened in the demos?

- I configured a free service called Netlify to automatically deploy one of my github repos as a website, whenever there was a change on the master branch.
- It made the website available at a random site name under netlify.com
- I configured my choice of site name.
- I tested it was working by pushing new changes to that branch.

This is what you'll learn to do in this workshop.

## Creating a netlify account - ONE TIME ONLY

(If you have not already done this for homework...)

- Log in to github with the account you use for CYF homework
- visit https://www.netlify.com/
- click "get started for free"
- Choose `github` under "Sign up with one of the following"
- read the permissions you are granting and click "authorize netlify"

## Exercise 1: create account and deploy a site

- Deploy your "responsive cakes" homework using the instructions below
- Name the site cyf-GITHUB-USERNAME-cakes

Instructions: [the instructions here](./instructions-for-automatic-deployment-with-netlify-and-github.md)

## Exercise 1b - push some code changes

- Make some quick visual changes to your site in vscode (change an `<h1>` or a background colour)
- Commit and _push_ the change to github (to the same branch you chose at setup)
- Check your site url again - is it updated? (it might take 60 seconds)
- Check on your phone, too (if you have one).
- Check your neighbour's site (send the link via slack)
- (Celebrate!)

## Note: CYF site naming conventions

Use the standard format for site names for all CYF homework projects - see [site naming conventions](../cyf-site-naming-conventions.md)

- cyf-[your github username]-[exact project name as supplied by teacher]

Example:

- cyf-lucymac-cakes.netlify.com

## Note: don't worry about "unfinished" sites

**Don't worry** that you are deploying "unfinished" projects - you can continue to make improvements over the next couple of weeks and your changes will automatically be deployed.

We just need to repeatedly practice the process so that you can do it on your own in future.

## Demo Linking to your site from your github repo

- Put your full URL into your github repo website field
- Also, include it in your homework submissions.

## Exercise 2 - karma clone

- [karma clone](https://github.com/CodeYourFuture/karma-clone)

* Set up netlify to automatically deploy it
* Set up the site title correctly
* Test the deployed site to check it seems ok
* Make (and push) some changes to check the site is redeployed automatically
* Test the site on your phone, and bookmark it
* Test the site of the person sitting next to you!

## Exercise 3 - a drawing/animation template

- Fork this repo: [p5js minimal example](https://github.com/codeyourfuture/p5js-minimal)
- deploy it as cyf-username-p5js

- Set up netlify to automatically deploy it
- Set up the site title correctly (CYF naming conventions!)
- Test the deployed site to check it seems ok
- Make (and push) some changes to check the site is redeployed automatically
- Test the site on your phone, and bookmark it
- Test the site of the person sitting next to you!

## Deleting your hosted site

If you decide you don't want a site public, you can delete it.

Practice deleting a site.

[Instructions here](./cheatsheet-1.md)

## Reference material (for when you forget)

- [cheatsheet-1.md](The CYF Netlify auto-deploy CheatSheet) (for when you forget all this stuff)

## How to learn more

- We'll revisit Netlify deployment later in the course.
- [This video tutorial](https://www.youtube.com/watch?v=mN9oI98As_4) (2 minutes) is old and has some inaccuracies.
  - you can watch it, but for detail, use OUR instructions
- These written instructions are also not perfect (you should not fill in "dir" and "build command" (until the React module) https://www.netlify.com/blog/2016/09/29/a-step-by-step-guide-deploying-on-netlify/
- The [official Netlify docs](https://docs.netlify.com/) may be initially overwhelming - you won't need to use many of their features.
