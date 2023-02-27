const BASE_URL = "/api";

const getDemons = async () => {
  const result = await fetch(`${BASE_URL}/demons`);
  const json = await result.json();
  console.log(json);

  return json[0];
};

const displayDemons = async () => {
  const demonList = document.querySelector("#demonList");
  const demons = await getDemons();
  let filteredDemons = demons;

  const searchInput = document.querySelector("#searchInput");
  searchInput.addEventListener("input", () => {
    const searchTerm = searchInput.value.toLowerCase();
    filteredDemons = demons.filter((demon) =>
      demon.name.toLowerCase().includes(searchTerm)
    );
    displayFilteredDemons();
  });

  const displayFilteredDemons = async () => {
    demonList.innerHTML = "";
    filteredDemons.forEach((demon) => {
      const li = document.createElement("li");
      li.textContent = demon.name;
      demonList.append(li);
    });
  };

  displayFilteredDemons();
};

displayDemons();
