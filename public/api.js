const BASE_URL = "/api";

const getDemons = async () => {
  const result = await fetch(`${BASE_URL}/demons`);
  const json = await result.json();
  console.log(json);

  return json;
};

const displayDemons = async () => {
  const demonList = document.querySelector("#demonList");
  const demons = await getDemons();
  let filteredDemons = demons;

  const form = document.querySelector(".form");
  const button = document.querySelector("#search");
  const searchInput = document.querySelector("#searchInput");

  form.addEventListener("submit", async (e) => {
    e.preventDefault();
    const searchTerm = searchInput.value.toLowerCase();
    filteredDemons = demons.filter((demon) =>
      demon.name.toLowerCase().includes(searchTerm)
    );
    displayFilteredDemons();
  });

  button.addEventListener("click", async () => {
    const searchTerm = searchInput.value.toLowerCase();
    filteredDemons = demons.filter((demon) =>
      demon.name.toLowerCase().includes(searchTerm)
    );
    displayFilteredDemons();
  });

  // searchInput.addEventListener("input", () => {
  //   const searchTerm = searchInput.value.toLowerCase();
  //   filteredDemons = demons.filter((demon) =>
  //     demon.name.toLowerCase().includes(searchTerm)
  //   );
  //   displayFilteredDemons();
  // });

  const displayFilteredDemons = async () => {
    demonList.innerHTML = "";
    if (filteredDemons.length > 0) {
      filteredDemons.for;
      const demon = filteredDemons[0];
      const li = document.createElement("li");
      const name = document.createElement("h3");
      const level = document.createElement("p");
      const race = document.createElement("p");

      name.textContent = demon.name;
      level.textContent = `Level: ${demon.lvl}`;
      race.textContent = `Race: ${demon.race}`;

      li.append(name, level, race);
      demonList.append(li);
    } else {
      demonList.textContent = "No demons found";
    }
  };
};

displayDemons();
