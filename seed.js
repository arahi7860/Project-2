import "dotenv/config";
import Demons from "./models/demon-model.js";
import mongoose from "./db/connection.js";
import demonData from "./demon-data.json" assert { type: "json" };
// import compData from './comp-config.json' assert { type: "json" }

// Creating an array to destructure the object from my demonData.json
// Destructuring the name of the demon into its own data
const demons = [];
for (const name in demonData) {
  const data = demonData[name];
  // console.log(data);
  demons.push({ ...data, name });
}

const insertData = async () => {
  await Demons.deleteMany({});
  await Demons.insertMany(demons);
  // let test = await Demons.find({});
  // console.log(test);
};

await insertData();

await mongoose.disconnect();
