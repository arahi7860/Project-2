## Project 2: Persona Compendium API

- **App Title**: Demon Collection.
- **App Description**: Goes through the data of my favorite game on Steam which is Persona 4 Golden. I created an API that goes through every demon from the game that includes their name, level, skills, stats, and race. I was inspired by the Pokemon API and I realized I can do one on Persona instead.
- **API**: The information I used came from a JSON file from the github user https://github.com/aqiu384. I used his demon-data.json file from his Project the Megaten-Fusion-Tool.
- **API Snippet**:

```
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
```

- **MVP**: Just implement the CRUD onto my Project 2. I want to make sure it's being deployed correctly, and all the data sets appear on Vercel as well as have my database appear on MONGODB Atlas.
- **Post-MVP**: I would like to add images onto each demon, in order to see what each demon looks like in the game. I would also like to implement a team builder which can allow you to decide what demons you want for your party. Afterwards, I hope to implement a fusion tool for the demons
- **Goals**: Implement all the necessary routers, controllers, models as well as the index.js file and seed file. I needed to also do npm i dotenv. Add the import "dotenv/config" in my seed.js file. Add a vercel.json to your file that routes to your api destination.
- **Major Hurdles**: Being able to see the database on MONGODB Compass. I had to destructure my json to make each information available when I ran my seed file, so it can be shown on my databases. Vercel was difficult to learn and I had trouble deploying my project onto Vercel without adding certain adjustments to my file such as having mongoose being imported on certain files.
- **Data Model**: e.g. Get this from Excalidraw
  ![data-model]()
- **Screenshot**: Here is a screenshot of the API database that is shown on Vercel.
