let format = 'photos';
let query = 'dog';
let testURL = 'https://www.loc.gov/photos/?q=dog&fo=json';
let requestURL = `https://www.loc.gov/${format}/?q=${query}&fo=json`;
let data = getJSON(requestURL);
let resultsContainer = document.querySelector('#results-container');

function getJSON(url) {
  return fetch(url)
    .then(function(response) {
      if (!response.ok) {
        throw Error(response.statusText);
      } else {
        return response.json();
      }
    })
    .catch(function(error) {
      console.log(error);
    });
}

function createItem(item) {
    console.log(item.title);
    //create item container
    let itemContainer = document.createElement('div');
    itemContainer.classList.add('item-container');
    resultsContainer.appendChild(itemContainer);

    //add the title to the item container
    let itemTitle = document.createElement('h2');
    itemTitle.classList.add('item-title');
    itemTitle.innerHTML = item.title;
    itemContainer.appendChild(itemTitle);

    //add the summary to the item container
    let itemSummary = document.createElement('p');
    itemSummary.classList.add('item-summary');
    itemSummary.innerHTML = item.summary;
    itemContainer.appendChild(itemSummary);

    //add the link to the item container
    let itemLink = document.createElement('a');
    itemLink.classList.add('item-link');
    itemLink.href = item.link;
    itemLink.innerHTML = item.link;
    itemContainer.appendChild(itemLink);

    console.log(item.summary);
    console.log(item.link);
}

data.then(function(result) {
    for (let i = 0; i < result.results.length; i++) {
      let item = result.results[i].item;
      createItem(item);
    }
});