## Project 2: Persona 4 Compendium API

- **App Title**: Demon Collection.
- **App Description**: Goes through the data of my favorite game on Steam which is Persona 4 Golden. I created an API that goes through every demon from the game that includes their name, level, skills, stats, and race. I was inspired by the Pokemon API and I realized I can do one on Persona instead.
- **API**: The information I used came from a JSON file from the github user https://github.com/aqiu384. I used his demon-data.json file from his Project the Megaten-Fusion-Tool to get my game.
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

- **CRUD**: 

| Route  |  HTTP Method | DB Action  | Description  |
|---|---|---|---|
| /api/demons  | GET  | INDEX  | Indexes all the demons |
| /api/demons  | POST | CREATE  | Create a list of demons |
| /api/demons/:name  | GET  | SHOW  | Show a single demon |
| /api/demons/:name | PUT  | UPDATE  | Update a demon from your list  |
| /api/demons/:name  | DELETE  | DELETE  | Delete a demon off your list |


- **MVP**: Just implement the CRUD onto my Project 2. I want to make sure it's being deployed correctly, and all the data sets appear on Vercel as well as have my database appear on MONGODB Atlas.
- **Post-MVP**: I would like to add images onto each demon, in order to see what each demon looks like in the game. I would also like to implement a team builder which can allow you to decide what demons you want for your party. Afterwards, I hope to implement a fusion tool for the demons
- **Goals**: Implement all the necessary routers, controllers, models as well as the index.js file and seed file. I needed to also do npm i dotenv. Add the import "dotenv/config" in my seed.js file. Add a vercel.json to your file that routes to your api destination.
- **Major Hurdles**: Being able to see the database on MONGODB Compass. I had to destructure my json to make each information available when I ran my seed file, so it can be shown on my databases. The routers were giving me trouble when trying to post new data onto my database on REST Client, so I switched to Postman and I had a smoother experience using it to check all my routers. Vercel was difficult to learn and I had trouble deploying my project onto Vercel without adding certain adjustments to my file such as having mongoose being imported on certain files. It took some time to understand what was needed to be imported and what needed to be added onto my Project.
- **Data Model**: e.g. Get this from Excalidraw

![model](https://user-images.githubusercontent.com/54910341/221757530-e9152ee4-74f4-4fca-9b06-331bf1f64825.png)

- **Screenshot**: Here is a screenshot of the API database that is shown on Vercel.

<img width="1728" alt="Screen Shot 2023-02-26 at 12 00 54 AM" src="https://user-images.githubusercontent.com/54910341/221757578-d879650b-b2ae-436b-b081-af3c41c66a93.png">
