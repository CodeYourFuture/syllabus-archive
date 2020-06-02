# Final Projects

## Learning Goals

During the Project you will work on your technical and communication skills. At the end of this module you'll learn the following:

Technical skills:

- How to `build a complete full-stack application`
- Understanding `how each part of an application relates` to each other
- What it means to work on a `feature`
- How to work with `GIT in a team setting`
- How to write `readable code`

Communication skills:

- How to `communicate effectively` with team members
- `Keeping track` of your project's progress
- Knowing if you `understand what's asked` of you
- How to `communicate with non-developers` about what you're doing
- Learning how to be `solutions-oriented`
- How to work in a `Agile setting`

## Objectives

The final projects form the final module of the full-stack web development course, comprising four weeks following the completion of the last teaching-based module (currently the database module). The objectives of this module are to:

- Bring together everything the students have learned so far (most projects involve a Node/Express backend with a database and a React frontend);
- Give an opportunity to demonstrate teamwork and a mix of interpersonal and technical skills that the students can talk about when applying for jobs; and Deliver something valuable for CYF or a partner organisation.
- Also: nice portfolio piece; practice agile stuff; practical experience of junior dev role.

# Project team

Ideally, the project team would consist of the following:

- Four CYF students;
- Three volunteer mentors, forming a [balanced team](https://www.youtube.com/watch?v=Z_Q4Q8rCVpU); and
- A product owner.

The mentor group would include an engineer (responsible for unblocking technical/architectural issues, _not_ an extra developer), designer (responsible for user research and UI/UX) and product manager (responsible for prioritisation and alignment with the product owner’s goals). This gives an opportunity to bring in volunteers from the broader tech community, and exposes the students to the roles they could be collaborating with in employment.

The product owner would either be a representative from the partner organisation or someone at CYF, depending on the project. It’s important that they are able to engage at least twice a week with the team, and have the authority to make decisions that let the team keep moving.

## Weekly plan

We’re going to run the final projects in weekly “sprints”, planning out what we’re going to do as teams and as individuals. Each week will therefore look something like:

- **Daily standup**: post a daily message in the team Slack channel to let the rest of the team know what you’re working on, what progress you’ve made (even, and perhaps _especially_, if it’s none so far) and share anything that’s blocking you[^1]. Set a time for this and stick to it. Afterwards, post a team summary in the main class channel.

- **Mid-week check-in**: you should have at least one Slack call with the whole team and a mentor during the week to sync on progress, escalate any blockers and make sure that you’re still heading in the right direction.
- **Sunday classes**: we’ll continue to meet on Sundays, spending the time on:
  - **Demo**: integrate all of your work together and share your progress so far with the mentors.
  - **Retrospective**: what’s gone well this week? What’s gone badly? What are you going to do differently next week to make things better?
  - **User research**: show what you’ve built and what you’re planning to build next to potential users (other students, mentors, etc.) and use any feedback they have to improve your plans.
  - **Sprint planning**: decide what you’re each going to be doing during the following week and where you want to be by the next class.
  - **Technical support**: mentors will be on hand to help you get unstuck from any blocking technical issues.

The first and final weeks’ Sunday classes will be slightly different, so they’re detailed below.

### First week

Once you have your team and your assignment, start by sorting out the basic administrative requirements:

- Team name! This will be your identity, use it in all communications/presentations
- Public Slack channel (name should start with #ldn5-)
- GitHub repository (pick one member to own the repo, everyone else is a [collaborator](https://help.github.com/en/articles/inviting-collaborators-to-a-personal-repository))
  - You can fork [this starter kit](https://github.com/textbook/starter-kit-cyf) for a basic React/Express/MongoDB app
  - Create a [project board](https://help.github.com/en/articles/about-project-boards) in the repo (or e.g. Trello board) for your tasks and stories

Then we can do some high-level design, think about:

- What’s the minimal viable product (MVP), i.e. the simplest possible thing we could build that lets us make some progress towards the business goals?
- What tasks will users be carrying out? What information will they need to have and/or provide to do that? This will allow you to figure what pages you could have and which endpoints they’ll need to use.
- What entities/resources are we going to have in the system? What information do we need to store to achieve the goals? This will allow you to figure out what collections you’ll likely have in the database.
- What are we going to need to expose to the React app? Where is that the same as the above (i.e. you’re just going to have an endpoint for a resource) and where might it be different (i.e. there will be some kind of calculation or aggregation between the database and the frontend)? This will allow you to figure out what the REST API is going to look like.
- What might these pages look like (sketch them out with a marker pen - we **don’t** want to spend too much time doing very detailed layout)? How could we decompose them into separate [components](https://codeyourfuture.github.io/syllabus-master/react/week-19/lesson.html#what-is-a-component) to work on?

This will give you an idea of what work needs to get done during the week, which you can then assign to members of your team. Make sure you identify the “seams” between different tasks (e.g. you have to agree on an API so that the backend and frontend match up, or on the props passed between a parent component and a child component) so that you know who has to collaborate with whom to make sure it all fits together, and will be able to identify the impacts of one part getting blocked.

### Final week

It’s time to start preparing for graduation! Part of the graduation event will be a demo and presentation from each time to show what they’ve achieved so far, so you need to prepare for that. As well as the actual outputs of your project you should be thinking about:

- What have you learned, personally and as a team? This can be related to technology, product, process, ...
- Which parts did you find most enjoyable and/or interesting? Has that impacted what you’re thinking about in terms of careers or next steps? How?
- How did you find collaborating as a team? What was made easier or harder by working with others, compared to working largely on your own?
- How happy are you with where you got to? What did the users think? What part of the product would you build next, if you had more time?

Try to show the _journey_, not just the destination - if you have pictures of early sketches or screenshots from previous builds of app, for example, you can use those to tell a story about how you approached the project and the progress you’ve made behind the scenes. This isn’t always obvious to less technical members of the audience, so it’s important to be able to illustrate the work you’ve put in.

We’ll do a run through of your presentation at the end of this session in front of the rest of the class, to give you a chance to practice it, instead of the regular demo.

Also identify any final work that’s needed to wrap up what you’ve built. Try to make this as small as possible, e.g. just bug fixes and visual improvements; you need to be very confident that you can get it all implemented and integrated before the graduation and demo event.

## Project briefings

- [Glossary](https://docs.google.com/document/d/1MxlmMCq2ddsLjghlNumG-kMKruglYomirifBfuU_XHU/edit?usp=sharing)
- [Attendance register](https://docs.google.com/document/d/1JWjDJ8c5v06rFFwXBYHT5QoNg8T6gQpyI3mxOgb3JJ0/edit?usp=sharing)
- [Feedback tracker](https://docs.google.com/document/d/1WLsBsTW4MSrsyip1dTUAJHuURuAwer_FXuU7S_vUGlo/edit?usp=sharing)
- [Quiz app](https://docs.google.com/document/d/1jSJLlNmECTCq_wVcDHNxKINOdrLjm7W3S1lU2bYFVr4/edit?usp=sharing)
- [Slack dashboard](https://docs.google.com/document/d/1yy6t-Ri-Ze--ycM1_F7HXQnChXmGc1njezBqYoWbiJ4/edit?usp=sharing)
