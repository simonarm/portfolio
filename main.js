fetch("https://quotes15.p.rapidapi.com/quotes/random/", {
  method: "GET",
  headers: {
    "x-rapidapi-host": "quotes15.p.rapidapi.com",
    "x-rapidapi-key": "33f241f2bemsha3c4d820d0910bdp1afd9cjsn4e7b7ec432fa",
  },
})
  .then((response) => response.json())
  .then((response) => {
    console.log(response);

    document.getElementById("quote").innerHTML = response.content;
    document.getElementById("author").innerHTML =
      "- " + response.originator.name + " -";
  })
  .catch((err) => {
    console.log(err);
  });
