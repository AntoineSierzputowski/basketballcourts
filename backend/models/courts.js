const basketball_courts = [
  {
    _id: "107fb5b75607497b96722bda5b504926",
    name: "Rucker Park",
    level: 9,
    imageUrl:
      "https://i.shgcdn.com/8eef745a-73cb-4c3b-bc01-e9b563a117e1/-/format/auto/-/preview/3000x3000/-/quality/lighter/",
    adress: "280 W 155th St, New York, NY 10039, États-Unis",
    location: "40.82911785256341, -73.93580473673944", // latitude & longitude
  },
  {
    _id: "ert07fb5b75bjkbkjv96722bda5b5049f6",
    name: "Dyckman Basketball Park",
    level: 10,
    imageUrl:
      "http://cdn.viewing.nyc/assets/media/359e155e6796d884c757b9c1f506942b/elements/8ecc15f70b06bdd891641faa06e5609e/364913d7-b013-4d68-9b23-89616bf2ab04.jpg",
    adress: "4768 Nagle Ave, New York, NY 10034, États-Unis",
    location: "40.86275801732742, -73.9206495809181", // latitude & longitude
  },
  {
    _id: "ebng56fb5b7jkbkjv96722bda5b5049f6",
    name: "Brooklyn Bridge Park",
    level: 4,
    imageUrl:
      "https://lh5.googleusercontent.com/p/AF1QipNy3fbd4BhUrgXR--W8drlczAzRR1WsKFz7H532=w408-h272-k-no",
    adress: "150 Furman St, Brooklyn, NY 11201, États-Unis",
    location: "40.69954455289566, -73.9984053790706", // latitude & longitude
  },
  {
    _id: "a5507fb5b75bjkbkjv96722bda5b5049f6",
    name: "Marcy Playground",
    level: 6,
    imageUrl:
      "https://media.gettyimages.com/photos/a-view-of-marcy-playground-at-the-tbs-the-last-og-basketball-court-picture-id947878066?s=2048x2048",
    adress: "753 Myrtle Ave, Brooklyn, NY 11205, États-Unis",
    location: "40.695667366591806, -73.95080005816543", // latitude & longitude
  },
];
exports.array_courts = () => {
  return basketball_courts;
};
exports.basketballCourts = () => {
  return new Promise((res, reject) => {
    // promise pour pouvr traiter la rep avec un then
    res(basketball_courts);
  });
};

exports.findCourtById = (id) => {
  return new Promise((resolve, reject) => {
    const foundCourt = basketball_courts.find((court) => court._id === id);

    if (foundCourt) {
      resolve(foundCourt);
    } else {
      reject(new Error(`Aucun terrain de basketball trouvé avec l'ID: ${id}`));
    }
  });
};
