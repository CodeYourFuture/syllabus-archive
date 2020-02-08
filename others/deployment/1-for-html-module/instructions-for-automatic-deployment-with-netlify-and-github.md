## Creating a netlify account

(You should already have done this for homework.)

- Log in to github with the account you use for CYF homework
- visit https://www.netlify.com/
- click "get started for free"
- Choose `github` under "Sign up with one of the following"
- read the permissions you are granting and click "authorize netlify"

## Deploy a site

- Visit https://www.netlify.com/
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
