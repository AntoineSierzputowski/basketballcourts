// -------------- GET ALL COURTS --------------
const apiUrl = "http://localhost:3000/all_courts";
const getCourts = async () => {
  var courts = await fetch(apiUrl);
  return courts.json();
};
getCourts();

const createCardHtml = async () => {
  await getCourts().then((court) => {
    for (let i = 0; i < court.length; i++) {
      // créer <a> + insérer à l'enfant de section
      const elemCard = `<a href="./court.html?id=${court[i]._id}">
    <section>
      <img src="${court[i].imageUrl}">
      <h3 class="productName">${court[i].name}</h3>
      <p>${court[i].level}</p>
    </section>
    </a>`;
      const elem = document.querySelector(".accueil");
      elem.insertAdjacentHTML("beforeend", elemCard);
    }
  });
};
createCardHtml();
// END

// -------------- POST LOCATION USER --------------
const submitFunction = () => {
  console.log("Submit");
  const location_input = document.getElementById("location_input").value;
  const sendFormData = {
    location_input,
  };

  const options = {
    method: "POST",
    body: JSON.stringify(sendFormData),
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
  };

  fetch("http://localhost:3000/userlocation", options)
    .then((response) => response.json())
    .then((response) => console.log(response));
};

const button_submit = document.querySelector("#button_submit");
button_submit.addEventListener("click", () => {
  submitFunction();
});
// ------ AUTOCOMPLETE --------
