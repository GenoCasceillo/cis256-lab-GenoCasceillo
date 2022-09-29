// fetch data from a public API
fetch("https://www.thecocktaildb.com/api/json/v1/1/search.php?s=margarita")
  .then(response => response.json())
  .then(data => processData(data));
  # your fetch code here

}


// callback function to be used when data is fetched from API
// parameter data will be a JavaScript object
function processData(data) {
 var api = document.getElementById("api");
  # Get the div or other DOM element needed for the data


    var cat = data.value;

  # Access the necessary fields of the data


  # Update the DOM to display the data in some way

      var text = document.createTextNode(cat);
      var p = document.createElement("p");
      p.appendChild(text);
      api.appendChild(p);
}
