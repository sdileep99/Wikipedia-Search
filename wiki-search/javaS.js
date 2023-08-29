let searchInputEl = document.getElementById("searchInput");
let searchResults = document.getElementById("searchResults");
let spinner = document.getElementById("spinner");

function createAppdensearchresult(result){
   let { link, title, description } = result;

  let resultItemEl = document.createElement("div");
  resultItemEl.classList.add("result-item");

  let titleEl = document.createElement("a");
  titleEl.href = link;
  titleEl.target = "_blank";
  titleEl.textContent = title;
  titleEl.classList.add("result-title");
  resultItemEl.appendChild(titleEl);

  let titleBreakEl = document.createElement("br");
  resultItemEl.appendChild(titleBreakEl);

  let urlEl = document.createElement("a");
  urlEl.classList.add("result-url");
  urlEl.href = link;
  urlEl.target = "_blank";
  urlEl.textContent = link;
  resultItemEl.appendChild(urlEl);

  let linkBreakEl = document.createElement("br");
  resultItemEl.appendChild(linkBreakEl);

  let descriptionEl = document.createElement("p");
  descriptionEl.classList.add("link-description");
  descriptionEl.textContent = description;
  resultItemEl.appendChild(descriptionEl);

  searchResults.appendChild(resultItemEl);
    
     
}

function displayResult(searchResults){
    spinner.classList.toggle("d-none");
    for (let result of searchResults ){
        createAppdensearchresult(result);
    }
}

function searchwik(event){
    if (event.key === "Enter"){
        let searchInput = searchInputEl.value;
        searchResults.textContent = " ";
        spinner.classList.toggle("d-none");
        let url = "https://apis.ccbp.in/wiki-search?search=" + searchInput;
        let option = {
            method:"GET"
        };
        fetch(url,option)
        .then(function(response){
            return response.json();
        })
        .then(function(jsondata){
            let {search_results} = jsondata;
            displayResult(search_results);
        });
    }
}

searchInputEl.addEventListener("keydown",searchwik);



 