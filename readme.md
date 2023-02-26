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
- **Goals**: Implement all the necessary routers, controllers, models as well as the index.js file and seed file. I needed to also do npm i dotenv. Add the import "dotenv/config" in my seed.js file.
- **Data Model**: e.g.
  ![data-model]()
- **Screenshot**: Here is a screenshot of the API database that is shown on Vercel.

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
