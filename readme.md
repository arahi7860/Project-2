## Project 2: Persona Compendium API

- **App Title**: Demon Collection.
- **App Description**: Goes through the data of my favorite game on Steam which is Persona 4 Golden. I created an API that goes through every demon from the game that includes their name, level, skills, stats, and race. I was inspired by the Pokemon API and I realized I can do one on Persona instead.
- **API**: The information I used came from a JSON file from the github user https://github.com/aqiu384. I used his demon-data.json file from his Project the Megaten-Fusion-Tool.
- **API Snippet**:

{
"\_id": "63f9974314b57cc85fbe618f",
"name": "Abaddon",
"inherits": "ailment",
"lvl": 55,
"race": "Tower",
"resists": [
"-ns--wr"
],
"skills": [
{
"Agidyne": 56,
"Arrow Rain": 0,
"Endure Light": 57,
"Mudoon": 0,
"Null Physical": 62,
"Old One": 0,
"Tetra Break": 60
}
],
"stats": [
43,
27,
50,
23,
29
],
"\_\_v": 0
},

- **MVP**: Just implement the CRUD onto my Project 2. I want to make sure it's being deployed correctly, and all the data sets appear on Vercel as well as have my database appear on MONGODB Atlas.
- **Post-MVP**: I would like to add images onto each demon, in order to see what each demon looks like in the game. I would also like to implement a team builder which can allow you to decide what demons you want for your party. Afterwards, I hope to implement a fusion tool for the demons
- **Goals**: Implement all the necessary routers, controllers, models as well as the index.js file and seed file.
- **Data Model**: e.g.
  ![data-model]()

## Submission

**_DO NOT FORK THIS REPOSITORY!_** Create a **new** repository. Then, submit
your project as an issue to this repo.

With your submission please include any questions you'd like answered or
specific things on which you'd like us to focus when giving feedback.

Your submission must include **all** of the following:

### Necessary Deliverables

Your project is due on the the date is in your
course calendar.

- A link to your GitHub repository (Do not fork this repo)
- A link to your project deployed on Vercel

Your repository should contain:

- A working application (built by you) that meets the technical requirements above.
- Frequent commits dating back to the very beginning of the project.
- A `readme.md` file in the root of your repo that follows
  [good standards of documentation](https://git.generalassemb.ly/ga-wdi-lessons/documentation-markdown)
  (i.e. explanations of the technologies used, the approach taken, features,
  installation instructions, unsolved problems, etc.)
- A link to your hosted, working application in the URL section of your Github
  repo:

> ![The URL section of your GitHub repo](https://i.imgur.com/QQ7RsfR.gif)

## Planning

1. [Watch this video on the Minimum Viable Product](https://www.youtube.com/watch?v=1FoCbbbcYT8)
2. Begin with the end in mind. Spend a dedicated block of time planning your
   project on the first day.
3. Write pseudocode before you write actual code. Thinking through the logic of
   something helps streamline your process.

### Building Out from your Plan

After planning your app:

1. Start with building your models and linking them to the database. Create a
   couple pieces of seed data so that you can see data retrieved from your
   database (by a mongoose model) show up on the page later.
1. Retrieve your data from the API.
1. Seed the database using your models and newly retrieved data.
1. Build your routes.

## Getting Unstuck

- Don't hesitate to write messy code to solve short-term problems - **_Refactor
  later_**
- Read the docs for whatever technologies you use. The docs often include a
  tutorial that can help you get started, and learning to read documentation is
  crucial to your success as a developer.

## Potential APIs to use

- https://api.nasa.gov/
- https://developer.nytimes.com/
- https://www.api-football.com/
- https://developer.musixmatch.com/
- https://restcountries.eu/
- http://urbanscraper.herokuapp.com/
- https://www.wordsapi.com/
- https://www.themoviedb.org/documentation/api
- https://www.nutritionix.com/business/api
- [A collective list of free APIs for use in software and web development.](https://github.com/public-apis/public-apis)

You could also use one of the
[Data is Plural](https://docs.google.com/spreadsheets/d/1wZhPLMCHKJvwOkP4juclhjFgqIY8fQFMemwKL2c64vk/edit#gid=0) or [Kaggle](https://www.kaggle.com/datasets)
data sets. Data is Plural is a weekly email newsletter of interesting and unique
datasets and APIs. Their archive contains every dataset or API they've featured.

## Tips

Here are some tips and best practices to follow while you build out your
project:

- **One or two easy features, One really hard feature**. Don't try to build out
  a ton of features, instead focus on building a few features well. Of those
  features, some should be straightforward while one pushes you outside your
  comfort zone.
- **Commit early, commit often.** If you're committing often, you don't need to
  be afraid of breaking something because you can always go back in time to a
  previous version.
- **Plan.** Think through each feature, wireframe it and write user stories.
- **Prototype.** Don't just start adding packages or features to your project on
  the master branch! Create another branch to prototype it. If it works, great!
  Merge it in with master. If not, great! Delete the branch.
- **Work on one thing at a time.** This goes in to committing early and often.
  Don't bounce from one feature to the next. At the end of the day, you'll have
  3 half implemented features when you could have 1 well implemented feature.

## Resources

- [A collective list of free APIs for use in software and web development.](https://github.com/public-apis/public-apis)
- [Lucidchart - great for making ERDs](https://www.lucidchart.com/pages/home)
- [Writing Good User Stories](http://www.mariaemerson.com/user-stories/)
- [Presenting Information Architecture](http://webstyleguide.com/wsg3/3-information-architecture/4-presenting-information.html)
- [Seed Data Generator](https://www.mockaroo.com/)

## Pre-employment checklist

Make sure your project looks professional and presentable when you go to apply
for jobs by completing some (or all) of the following:

- [ ] Add the deployed URL to repo settings
- [ ] Add a readme with:
  - [ ] An embedded screenshot of the app
  - [ ] Explanations of the **technologies** used
  - [ ] **Installation instructions** for any dependencies
  - [ ] Descriptions of any **unsolved problems** or **major hurdles** you had
        to overcome
- [ ] Add your project to your portfolio site
  - [ ] Include an image, title, and brief description
  - [ ] Link to both the deployed project and the repository on GitHub
- [ ] Write and share a post linking to your project on LinkedIn. Be sure to
      include:
  - An image/screenshot of your project
  - A link to the deployed version of your project
  - A brief description of the project, mentioning that you are a new developer
  - Appropriate tags for your post: `#webdevelopment`, `#developers`,
    `#softwaredevelopment`, `#softwareengineers`
- [ ] Write and share a post linking to your project on Twitter. Be sure to
      include:
  - An image/screenshot of your project
  - A link to the deployed version of your project
- [ ] Write and publish a brief blog post about your project to Medium or
      Dev.to:
  - Include what you decided to build, how you approached building, the "phases"
    you went through, one particularly challenging technical hurdle and how you
    overcame it, and a conclusion
  - Include lots of images, code snippets, and screenshots
  - Include a link to your repo and deployed project

## Plagiarism

Take a moment to re-familiarize yourself with the
[plagiarism policy](https://git.generalassemb.ly/DC-WDI/Administrative/blob/master/plagiarism.md),
specifically on using work you find online and on work you do with other
students.

We give assignments like this to give you the opportunity to review the material
in class in a practical manner. By building something using what you've learned
in class, you'll be reviewing the material and gaining a deeper understanding of
it.

These assignments are similar to those you can expect when applying for a job,
either in the form of a take-home coding challenge or an in-person technical
interview. So it's important that you put in your best effort now and challenge
yourself to do this assignment on your own.

If you are struggling with the material, that's alright! That's why you're here.
First, try reviewing the previous lessons and exercises. Go easy on yourself,
you're still learning! If you're still struggling after that, come to office
hours and ask an instructor for help. They're here to help you!

Don't copy and paste from another source or another student or the solution
branch. That's just going to put you at a disadvantage when you're interviewing
for a job.
