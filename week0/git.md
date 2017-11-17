## Git

We will use Git as our Version Control System (also known as Source Control). It's
like Dropbox for developers. But much better!

> **What is "version control"?** Version control is a system that records changes to a file or set of files over time so that you can recall specific versions later.

> It allows you to revert files back to a previous state, revert the entire project back to a previous state, compare changes over time, see who last modified something that might be causing a problem, who introduced an issue and when, and more. Using a VCS also generally means that if you screw things up or lose files, you can easily recover. In addition, you get all this for very little overhead.

> Extract from [Git Pro book](https://git-scm.com/book/en/v2/Getting-Started-About-Version-Control)

This [answer](http://stackoverflow.com/a/1408464) on StackOverflow by [si618](http://stackoverflow.com/users/44540/si618) explains very well why we use Version Control.

So what is **Git**? Git is one of many Version Control Systems available to use, and by far [the most popular](http://stackoverflow.com/insights/survey/2015#tech-sourcecontrol).

What is **Github**? Github is a very popular site where you can publish and share your Git repositories, share and collaborate with other people.

### Get Started
Follow this tutorial from Github to setup Git https://help.github.com/articles/set-up-git/

Then [learn how to use git from the Terminal >](https://www.codecademy.com/learn/learn-git)

Try completing [this tutorial >](https://try.github.io/) as well to learn more intermediate features, like branching.

### A typical workflow

- If you're basing your work from another project, the first step is typically to **fork** their repo. Read this guide for instructions (https://help.github.com/articles/fork-a-repo/)

- If you're starting a new project then you should follow these steps https://help.github.com/articles/adding-an-existing-project-to-github-using-the-command-line/

### Using Git through the Terminal
  - `git init` ***if it is a new project***, i.e. a project not **cloned** from a repo (or a fork of a repo)
  - `git add .` to add local files to the **index**
  - `git commit -m "Good explanation of your file changes"` to commit files to the local repo
  - `git remote add origin GitRepoRemoteUrl` ***if it is a new project*** (to setup the remote url)
  - `git remote -v` to verify that the remote url is set correctly
  - `git push -u origin master` to push your commits to the remote url (Github in our case)

You will also typically need to set up your email and name once when you install Git `git config --global user.name <name>` and `git config --global user.email <email>`.

### Using Git through a graphical interface

If you don't feel comfortable with the terminal just yet, download the
[Github client](https://desktop.github.com/). If possible, however, **we recommend becoming
comfortable with the Terminal commands and understanding the steps for the different
workflows before moving on to visual Git clients.**

[Github client guides >](https://help.github.com/desktop/guides/contributing/)

### Pull Requests

You should also learn how to create and work with [Pull Requests](https://help.github.com/articles/about-pull-requests/).

### Github

During our course, we will be using [Github](https://github.com) to store our code.
Github is the most popular Git service around, and is used by many large companies,
like Facebook, Airbnb and The Guardian.

[CodeYourFuture's Github page >](https://github.com/Code-Your-Future)


### More Resources
- Follow this tutorial to learn the basic Git commands https://www.codeschool.com/courses/try-git
- Another good resource: Git - the simple guide
http://rogerdudler.github.io/git-guide/
- A more detailed tutorial that goes into advanced topics of Git - https://www.atlassian.com/git/tutorials/what-is-version-control
- You can also check this visual explanation of different commands and what they do: http://ndpsoftware.com/git-cheatsheet.html#loc=workspace
- There are GUI software - Gitkraken is one of them https://www.gitkraken.com/
- This Glossary has definitions of the terms normally used with Git: https://help.github.com/articles/github-glossary/
