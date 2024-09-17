# This is the deployment repository for the website. 
## Rules
- Do not break this. If the site breaks, grab the original website from the officers.
- For this to be hosted on GitHub pages this needs to be a static website.
- There needs to be one project leader to organize and review any changes to the site. 
- Officers get the final say in all decisions of any major changes.  
- Make sure everyone has a GitHub account and have them set up with VSCode
## Branches
- Name the branches based on type and specific change "type/specific_change"
    - feature - something new to add
    - changes - broad changes
    - styling - styling changes
    - fixes - bug fixes
    - package - implementing a new package
    - readme - readme added, updated, or changed (the leader is the only one that is allowed to change this)
- Before merging into the main branch do a pull request and assign a reviewer (the leader is the only one who should review)
- Don't forget to delete branches after merging, try to keep things nice
- Make sure you test it on your environment before merging (git build and npm run preview command)
## Programming
- This site uses a couple of packages, the most important are
    - Sveltekit
    - Tailwindcss
    - Basic knowledge of Javascript, HTML, and CSS help
- {base} needs to be in front of every navigation that routes to these pages.
- Keep to the color scheme
## Terminal Commands
- npm run dev - runs a local website of the software to preview
- npm run preview - previews the build environment
- npm run build - creates a build environment (this is necessary for the live website to have your changes)
- npm i - installs all of the packages in the package.json files, this will automatically update them as well
- git pull - pull in the latest changes of the branch (recommend doing this to the main branch frequently)
- git merge <branch name> - merges the branch into whatever current branch you are on (don't do this in main, do this in other branches to get main)
    - Example: if I'm in branch feature/new_page and I want the latest from main I do a git pull first in main, then I do a git merge main in feature/new_page
