# WiCSM Site

WiCSM site based on the popular [Gatsby Serif Template](https://github.com/JugglerX/gatsby-serif-theme)

## Deployment
1. Install [Node.js](https://nodejs.org/en/) (LTS recommended) OR use [NVM](https://github.com/nvm-sh/nvm)
2. Clone the repository and install the dependencies 
    ```
    $ npm install
    ```
3. Run the site locally
    ```
    $ npm run develop
    ```

## Operations
### Adding new blog posts
1. Create a fork of the project then add the new blog post markdown file to the [data/stories](./src/data/stories) folder.
   See existing blog post to understand the format and naming scheme as well as the order in which you want to make the blog posts appear.
   
2. Run the project following the instructions above to verify the blog post looks ok.
3. [Create a pull request onto the master branch](https://docs.github.com/en/free-pro-team@latest/github/collaborating-with-issues-and-pull-requests/creating-a-pull-request).
This will kick off the CI build and publish it to a NON-PRODUCTION TEST URL, that you can use to verify.
   
4. Once the pull request is merged the changes will be reflected on the PRODUCTION site

### Adding new team members
1. Create a fork of the project then add the new team member markdown file to the [data/stories](./src/data/team) folder.
   See existing team markdown file to understand the format and naming scheme as well as the order in which you want to make the team members appear.
2. Add the team member's image to the [static/team](./static/team) folder and reference the image name in the team member markdown file in step 1.
3. Run the project following the instructions above to verify the team member page looks ok.
4. [Create a pull request onto the master branch](https://docs.github.com/en/free-pro-team@latest/github/collaborating-with-issues-and-pull-requests/creating-a-pull-request).
   This will kick off the CI build and publish it to a NON-PRODUCTION TEST URL, that you can use to verify.

5. Once the pull request is merged the changes will be reflected on the PRODUCTION site
