const submitButton = document.querySelector("#submit");
const info = document.querySelector("#country_input");
const form = document.querySelector("form");


// Function with fetch() request to API, returns response in JSON
const fetchCountries = async () =>{
        const countriesResponse = await fetch("https://restcountries.com/v3.1/all");
        const countriesDataJson = await countriesResponse.json();
        return countriesDataJson;
    }

//         if (!Countriesresponse.ok) {
//             throw new Error("Network not ok");
//         }
//         const data = await Countriesresponse.json();
//         return data;
//     } catch (error) {
//         console.error("Error when fetching countries:", error);
//         throw error;
//     }
// }

// create a function that uses the global variable to create a series of new HTML elements
// populating each with information about each country 
// adding them to the <ul> in HTM
// create a li element 
// <p> element is removed ahead of populating your list
// append it to the ul
let countriesData = [];

const populateCountryList = () => {
        const countryList = document.querySelector("ul");
        countryList.innerHTML = '';

        countries.forEach(country => {           
            const li = document.createElement("li");
            const name = document.createElement("h2");
            const population = document.createElement("p");
            name.textContent = country.name.common;
            population.textContent = "Populatopn: " + country.population ;
            li.appendChild(name);
            li.appendChild(population);
            countryList.appendChild(li);
    });     
    }

// Filter countries based on search input
// Prevent the default submit from occuring
    function filterCountries(event) {
        event.preventDefault();
        const filterByInput = document.getElementById("input");
        const searchQuery = filterByInput.value.toLowerCase();
    
        const filterCountriesData = countriesData.filter(country => {
            const countryName = country.name.common.toLowerCase();
            return countryName.includes(searchQuery);
        });
        submitButton.addEventListener("click", event => {
            countryList.innerHTML = " ";
            filterByInput();
    });
    }

    // try(error){
    //     const errorMessage = document.createElement("h3");
    //     errorMessage.innerHTML = "Error ";
    //     document.querySelector("body").appendChild(errorMessage);
    // }
   

// Call the function following first function within the SetUp() 
// Delay search on loaded page

    async function setUp() {
        try {
          const dataReponse = await fetchData();
          countriesData = dataReponse;
          const mode = document.getElementById("mode");
          mode.textContent = "Fetching countries...";
          setTimeout(() => {
            mode.style.display = "null";
          }, 2000);
          populateCountryList(countriesData);
      
          const filterForm = document.getElementById('filterform');
          filterForm.addEventListener('submit', filterCountries);

        } catch (error) {
          const mode = document.getElementById("mode");
          mode.textContent = " Error: Failed to access countries data";
        }
      }
      
// Call setup function  when the page loads

    window.addEventListener("load", setUp);

