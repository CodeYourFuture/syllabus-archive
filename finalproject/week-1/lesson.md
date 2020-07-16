# Final Project - First Week

## Learning Objectives

## Overview

- Getting Setup
- Agile Development
- Project Roles
- Minimum Viable Product

## Welcome

## Getting Setup (15 minutes)

Once you have your team and your assignment, start by sorting out the basic administrative requirements:

1. Give your team a name!
   - This will be your identity, use it in all communications/presentations.
2. Create a public Slack channel
   - The name should start with your class name (e.g. #ldn6, #nw3, #wm1...)
3. Create a GitHub repository
   - Pick one member to own the repo, everyone else is a [collaborator](https://help.github.com/en/articles/inviting-collaborators-to-a-personal-repository))
   - You can fork [this starter kit](https://github.com/CodeYourFuture/cyf-final-project-starter-kit) for a basic React/Express/MongoDB app
   - Create a [project board](https://help.github.com/en/articles/about-project-boards) in the repo (or e.g. Trello board) for your tasks and stories

## Agile Development

### Daily Stand-ups

Post a daily message in the team Slack channel to let the rest of the team know what you’re working on, what progress you’ve made (even, and perhaps _especially_, if it’s none so far) and share anything that’s blocking you.

Set a time for this and stick to it.

Afterwards, post a team summary in the main class channel.

### Sprints

### Mid-week Check-ins

You should have at least one Slack call with the whole team and a mentor during the week to sync on progress, escalate any blockers and make sure that you’re still heading in the right direction.

## Project Roles

Now that we understand Agile Development we should assign ourselves roles in the

## Minimum Viable Product

Then we can do some high-level design, think about:

- What’s the minimal viable product (MVP)
  - i.e. the simplest possible thing we could build that lets us make some progress towards the business goals?
- What tasks will users be carrying out? What information will they need to have and/or provide to do that? This will allow you to figure what pages you could have and which endpoints they’ll need to use.
- What entities/resources are we going to have in the system? What information do we need to store to achieve the goals? This will allow you to figure out what collections you’ll likely have in the database.
- What are we going to need to expose to the React app? Where is that the same as the above (i.e. you’re just going to have an endpoint for a resource) and where might it be different (i.e. there will be some kind of calculation or aggregation between the database and the frontend)? This will allow you to figure out what the REST API is going to look like.
- What might these pages look like (sketch them out with a marker pen - we **don’t** want to spend too much time doing very detailed layout)? How could we decompose them into separate [components](https://codeyourfuture.github.io/syllabus-master/react/week-19/lesson.html#what-is-a-component) to work on?

This will give you an idea of what work needs to get done during the week, which you can then assign to members of your team. Make sure you identify the “seams” between different tasks (e.g. you have to agree on an API so that the backend and frontend match up, or on the props passed between a parent component and a child component) so that you know who has to collaborate with whom to make sure it all fits together, and will be able to identify the impacts of one part getting blocked.