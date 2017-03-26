![](https://img.shields.io/badge/status-draft-darkred.svg)
# Lesson 0
** What we will learn today?**
- Git
- IDEs
- Terminal
- CodeYourFuture
---

## Git
We will use Git as our Version Control System (also known as Source Control)

> **What is "version control"?** Version control is a system that records changes to a file or set of files over time so that you can recall specific versions later.

> It allows you to revert files back to a previous state, revert the entire project back to a previous state, compare changes over time, see who last modified something that might be causing a problem, who introduced an issue and when, and more. Using a VCS also generally means that if you screw things up or lose files, you can easily recover. In addition, you get all this for very little overhead.

> Extract from [Git Pro book ](https://git-scm.com/book/en/v2/Getting-Started-About-Version-Control)

This [answer](http://stackoverflow.com/a/1408464) on StackOverflow by [si618](http://stackoverflow.com/users/44540/si618) explains very well why we use Version Control.

So what is **Git**? Git is one of many Version Control Systems available to use, and by far [the most popular](http://stackoverflow.com/insights/survey/2015#tech-sourcecontrol).

What is **Github**? Github is a very popular sites where you can publish and share your Git repositories, share and collaborate with other people.

### Get Started
Follow this tutorial from Github to setup Git https://help.github.com/articles/set-up-git/


### A typical workflow
- If you're basing your work from another project, the first step is typically to **fork** their repo. Read this guide for instructions (https://help.github.com/articles/fork-a-repo/)

- If you're starting a new project then you should follow these steps https://help.github.com/articles/adding-an-existing-project-to-github-using-the-command-line/

### Typical Git commands
  - `git init` ***if it is a new project***, i.e. a project not **cloned** from a repo (or a fork of a repo)
  - `git add .` to to add local files to the **index**
  - `git commit -m "Good explanation of your file changes"` to commit files to the local repo
  - `git remote add origin GitRepoRemoteUrl` ***if it is a new project*** (to setup the remote url)
  - `git remote -v` to verify that the remote url is set correctly
  - `git push -u origin master` to push your commits to the remote url (Github in our case)

You will also typically need to set up your email and name once when you install Git `git config --global user.name <name>` and `git config --global user.email <email>`.

You should also learn how to create and work with [Pull Requests](https://help.github.com/articles/about-pull-requests/).

### More Resources
- Follow this tutorial to learn the basic Git commands https://www.codeschool.com/courses/try-git
- Another good resource: Git - the simple guide
http://rogerdudler.github.io/git-guide/
- A more detailed tutorial that goes into advanced topics of Git - https://www.atlassian.com/git/tutorials/what-is-version-control
- You can also check this visual explanation of different commands and what they do: http://ndpsoftware.com/git-cheatsheet.html#loc=workspace
- There are GUI software - Gitkraken is one of them https://www.gitkraken.com/
- This Glossary has definitions of the terms normally used with Git: https://help.github.com/articles/github-glossary/


## IDE
- VSCode?
- Atom?
- Sublime?

## Terminal basics
- Follow this tutorial https://www.codecademy.com/learn/learn-the-command-line

ToDo: More Resources? iTerm, Windows


## CodeYourFuture
- What we learn?
- How we work?
- How we treat each other?
- Read this Technology Survey from [StackOverflow](http://stackoverflow.com/insights/survey/2016). Pay particular attention to the technologies we'll be teaching you (JavaScript, React, NodeJS)
