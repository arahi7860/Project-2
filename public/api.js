const URL = "https://project-2-nfb3vpy9l-arahi7860.vercel.app/api/demons";

const getDemons = async () => {
  const result = await fetch(URL);
  const json = await result.json();

  return json[0];
};

getDemons();
