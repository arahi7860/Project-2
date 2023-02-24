import Demons from "./demon-model.js";
// Defining a route to get all the demons
export const demonIndex = async (request, response) => {
  try {
    const index = await Demons.find({});
    response.json(index);
  } catch (error) {
    console.error(error);
    response.status(500).send("Server error");
  }
};
// export const demonList = async (request, response) => {
//   const list = await Demons.find({ name: request.params.name });
//   response.json(list);
// };

// Define a route to create a new demon
export const createDemon = async (request, response) => {
  try {
    const character = await Demons.create(request.body);
    return response.status(201).json(character);
  } catch (error) {
    console.error(error);
    response.status(500).send("Server error");
  }
};

// Define a route to show a single demon
export const showDemon = async (request, response) => {
  try {
    const show = await Demons.find({ name: request.params.name });
    response.json(show);
  } catch (error) {
    console.error(error);
    response.status(500).send("Server error");
  }
};

// Define a route to update a demon
export const updateDemon = async (request, response) => {
  try {
    const update = await Demons.findOneAndUpdate(
      { name: request.params.name },
      request.body,
      { new: true }
    );
    response.json(update);
  } catch (error) {
    response.status(500).send("Server error");
  }
};

// Define a route to delete a demon
export const deleteDemon = async (request, response) => {
  try {
    const deleted = await Demons.findOneAndDelete({
      name: request.params.name,
    });
    response.json(deleted);
  } catch {
    console.error(error);
    response.status(500).send("Server error");
  }
};

// // Define a route to create a list of demons based on choice
// export const listDemons = async (request, response) => {
//   try {
//     const choice = request.query.choice;
//     const find = await Demons.find({ type: choice });
//     const demonNames = find.map((find) => find.name);
//     response.json(demonNames);
//   } catch (error) {
//     console.error(error);
//     response.status(500).send("Server error");
//   }
// };

// // POST a list of demons based on choice
// export const postListDemons = async (request, response) => {
//   try {
//     const post = await Demons.find({ alignment: request.body.aligment });
//     const demonNames = post.map((demon) => demon.name);
//     response.json({ demons: demonNames });
//   } catch {
//     response.status(500).send("Server error");
//   }
// };

// // Show a list of demons based on choice
// export const showListDemons = async (request, response) => {
//   try {
//     const show = await Demons.find({});
//   } catch {}
// };

// // UPDATE a list of demons based on choice
// export const updateListDemons = async (request, response) => {
//   try {
//     const post = await Demons.findOneAndUpdate(
//       { name: request.params.name },
//       request.body,
//       { new: true }
//     );
//     response.json(post);
//   } catch {
//     response.status(500).send("Server error");
//   }
// };

// // Delete a list of demons based on choice
// export const deleteListDemons = async (request, response) => {
//   try {
//     const amount = await Demons.deleteMany({ name: request.params.name });
//     response.json(amount);
//   } catch {
//     response.status(500).send("Server error");
//   }
// };
