# What's this?

A work-in-progress of content development around the topic of how students deploy their homework projects and portfolio projects.

### Envisaged deliverables:

1. Short (20 min) workshops to drop into relevant modules
2. Supporting reference material for students (e.g. cheatsheet) and teachers (lesson plan)
3. (optional) extra tooling (student project gallery / HW lookup)

# TODO:

- [ ] Write a workshop for netlify deploy via github (requiring no knowledge of command-line or npm)
- [ ] Write supporting reference material for students to access in future, including the student's HW submission duties regarding deployments (as stand-alone page so that teachers can simply and reliably link to it when assigning HW)
- [ ] Test all instructions with fresh accounts
- [ ] Test the workshop plan against another human
- [ ] Write separate instructions for Create Netlify Account (+ github) so that we can...
- [ ] Assign the Create Netlify Account (+ github) as HW now (time-saver)
- [ ] Discuss practice projects with Lucy and Sophie
- [ ] Generate three little test projects the students can fork and deploy (and perhaps modify) (landing page, CV & portfolio)
- [ ] Add mentor notes for "why not GH pages" - a link to wiki discussion page is fine?
- [ ] Write a trivial initial gallery tool (serves as test suite) during practice

- [ ] Deliver workshop over two weeks (20mins, 20 mins):
  - [ ] Week 1: the survival course
  - [ ] Week 2: refinements (e.g. temp vs final builds, DNS, branches)
  - [ ] Coord with React & JS3 module teachers so they know the approach taken so far
- [ ] Extra: Try to get budget (a sponsor) to have us buy a domain for each student for 1 or 2 years (caution: what happens when they can't afford it - all their links break. there's also the ownership hand-over, if CYF buy them initially)

# Workshop goals:

- After this first 20minute workshop, students should be able to...
- configure automated deploy of any STATIC, non-generated site they create on github in future (including all significant HW projects)
- recover from common mistakes

# Non-goals:

- After the first workshop, the students DON'T need to be able to explain HOW it is working (only what the trigger(s) and results are).

# Workshop pre-reqs:

You have made some very simple sites (even a single index.html)
You have some of those sites as repos on github

You don't need to know anything about command line or npm

# Topics:

- What we'll learn
- Learning more ("we'll revisit later in the course")
- Advantages (two sentences no more) (no codepen banner, few restrictions, free, professional, possibility of using your own domain name)
- Use a standard format for site names for HW projects, and be consistent with your name (or your anonymous handle) in all your CYF projects
  - cyf-[your name]-[exact project name as supplied by teacher]
  - neill-cakes-cyf.netlify.com
  - lucy-cakes-cyf.netlify.com
  - ali-cakes-cyf.netlify.com
  - jon-cakes-cyf.netlify.com
- Putting your full url into your github repo website field and in your homework submission
- Let's practice - 3 sites + 1 to delete! (cakes, landing page from application, a fun p5.js template for their previous khan academy work)
  your cv & portfolio template (week 2))
  - test it on your phone, and bookmark it
  - test someone else's!
- Deleting your hosted site (you decide you don't want it public) - practice deleting a site
- Trouble-shooting - when things go wrong
  - (delete & recreate site is possible (e.g. if you use the wrong github account or repo), renaming site is possible)
  - when repos don't show up in the menu
  - site is not deploying on push to master (logs, branch awareness, propagation delay)
- recap: What we learned
- Reference material: if you forget these steps
- Yes, alternatives exist, but you'll do it this way for CYF projects, because. (You are free to deploy elsewhere, too!)
- The CYF Netlify auto-deploy CheatSheet (for when you forget all this stuff)

# More docs

- This video tutorial (2 minutes) is old and has some inaccuracies - you can watch it but for detail, use OUR instructions https://docs.netlify.com/site-deploys/overview/#deploy-summary
- These written instructions are also not perfect (you should not fill in "dir" and "build command" (until the React module) https://www.netlify.com/blog/2016/09/29/a-step-by-step-guide-deploying-on-netlify/

# Meta

## Guidelines for workshop content:

- Give them a recipe for what to do and have them practice it
- K.I.S.S.
- LATER weeks can see discussion of finer points (advantages, etc)
- If we have a gallery in place, the students will detect when they have named incorrectly

## Simple all-student Gallery

- (list of students, list of projects, generates expected links to each project)
- Allows students to quickly test if their site naming is correct (and demonstrates to them WHY it matters with 40 students)
- get grads involved
