// -------------- GET ONE COURT BY ID --------------
const id = window.location.search.split("=")[1];
const apiUrl = "http://localhost:3000/" + id;
console.log(apiUrl);
const getCourt = async () => {
  var court = await fetch(apiUrl);
  return court.json();
};
getCourt();

const createCardHtml = async () => {
  console.log("create");
  await getCourt().then((court) => {
    // créer <a> + insérer à l'enfant de section
    const elemCard = `<a href="./court.html?id=${court._id}">
    <section>
      <img src="${court.imageUrl}">
      <h3 class="productName">${court.name}</h3>
      <p>${court.level}</p>
    </section>
    </a>`;
    const elem = document.querySelector(".accueil");
    elem.insertAdjacentHTML("beforeend", elemCard);
  });
};
createCardHtml();
