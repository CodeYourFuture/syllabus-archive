# Workshop 1: Basic Automatic Project Deployment using Netlify

# What's this?

todo

# Who's it for?

It's for students in the HTML/CSS module.

It's intended students attend the workshop session and follow along with this document.

However, you will probably manage to follow this document without a teacher.

# Workshop goals:

- After this first 20minute workshop, students should be able to...
  - configure automated deploy of any STATIC, non-generated site they create on github in future (including all significant HW projects)
  - recover from common mistakes

# Non-goals:

- After this _first_ workshop, the students DON'T need to be able to explain HOW it is working (only what the trigger(s) and results are). We'll have time in later sessions.

# Workshop pre-reqs:

You have made some very simple sites (even a single index.html)
You have some of those sites as repos on github

You don't need to know anything about command line or npm

# The workshop!

## Let's go! A 60 second demonstration

Don't worry, I'm going to demonstrate something VERY quickly, then break it down step by step more slowly afterwards.

(
mentor notes:

live coding:

- make a new repo with an index.html file
- students suggest some silly content (just text for now)
- make a wish: I wish to publish at https://dragonsvssharks.netlify.com/
- have a student check there's nothing there yet
- add the site to netlify
- commit and push
- observe deployed site (after 60 seconds)
  )

## Let's go, v2 another 60 second demonstration

## what just happened?

## What we'll learn

## Advantages

(two sentences no more) (no codepen banner, few restrictions, free, professional, possibility of using your own domain name)

## Creating a netlify account

You should already have done this for homework. If not...

- Log in to github with the account you use for CYF homework
- visit https://www.netlify.com/
- click "get started for free"
- Choose `github` under "Sign up with one of the following"
- read the permissions you are granting and click "authorize netlify"

## Deploy a site

- Either click on "new site from git" or visit https://app.netlify.com/start
- choose "github"
- read the permissions and click "Authorize Netlify by Netlify"
- If prompted "where do you want to install netlify", choose your github username.
- Choose "all repositories", for simplicity, but read the permissions you are allowing.
  - if you want to choose "only select repositories", that is ok (but more work)
- click ok
- Under "Continuous Deployment: GitHub App", select which repo you want to set up
  - if the repo is not there, it may be because you haven't granted netlify to look at all of your repos. you'll have to grant permissions for the repo you want.
- Under "branch to deploy" choose the branch of your repo to which you will most often be committing when working on the site. That way, your deployed site will be updated with every change you make. (Later in the course you'll change this way of working.)
- Leave empty "build command" and "publish directory"
- click "Deploy site"
- Wait til it finishes
- click on the presented (random) link
- check your site is really there, and working
- check on your phone, too, if you have one!
- check your neighbour's site (send the link via slack)
- click site settings, and scroll to site details,site information
- click "change site name".
- enter a new site name and press save
- scroll to the top and click the new link (something.netlify.com)
- check your site is accessible via that new url

### push some code changes,

- make some quick visual changes to your site in vscode (change an `<h1>` or a background colour)
- commit and _push_ the change to github (to the same branch you chose at setup)
- check your site url again - is it updated? (it might take 60 seconds)
- celebrate

## Deploy ANOTHER site!

todo

## CYF site naming conventions

Use the standard format for site names for all CYF homework projects - see [site naming conventions](../cyf-site-naming-conventions.md)

- cyf-[your github username]-[exact project name as supplied by teacher]

Example:

- cyf-lucymac-cakes.netlify.com

## Let's practice

We'll deploy 3 or 4 sites, now, for practice.

Don't worry that these projects aren't "finished" yet - you can continue to make improvements over the next couple of weeks and your changes will automatically be deployed.

What is important in this workshop is repeated, intentional practice.

- [karma clone](https://github.com/CodeYourFuture/karma-clone)
- [responsive cake webpage](https://github.com/CodeYourFuture/responsive-cake-webpage)
- [p5js minimal example](https://github.com/codeyourfuture/p5js-minimal) - you might not have seen this project before, so you'll have to make your own fork of it now.
- (TODO: possible) a cv & portfolio template (week 2))

For each project:

- set up netlify to automatically deploy it
- set up the site title correctly
- test the deployed site to check it seems ok
- make (and push) some changes to check the site is redeployed automatically
- test the site on your phone, and bookmark it
- test the site of the person sitting next to you!

## linking from github repo

Putting your full url into your github repo website field and in your homework submission

## Deleting your hosted site

(you decide you don't want it public) - practice deleting a site

## Trouble-shooting - when things go wrong

- (delete & recreate site is possible (e.g. if you use the wrong github account or repo), renaming site is possible)
- when repos don't show up in the menu
- site is not deploying on push to master (logs, branch awareness, propagation delay)

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
