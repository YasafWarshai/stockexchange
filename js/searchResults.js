let userInput = document.getElementById("userInput");
let resultsContainer = document.getElementsByClassName("resultsContainer");
let results = document.getElementById("resultsContainer");

class searchResults {
  constructor(resultsContainer) {
    this.resultsContainer = resultsContainer;
  }

  createResultsList() {
    results.innerHTML = ``;
  }

  async renderResults(companies) {
    this.createResultsList();
    let listings = await companies;
    for (let i = 0; i < listings.length; i++) {
      const response = await fetch(
        `https://stock-exchange-dot-full-stack-course-services.ew.r.appspot.com/api/v3/company/profile/${listings[i]}`
      );
      const data = await response.json();
      let listItem = document.createElement("p");
      if (data.profile.changesPercentage > 0) {
        listItem.innerHTML = `<img onerror="this.src='/images/default-image.png'" class="resultLogo" src="${
          data.profile.image
        }"><span style="color:#09ff00;"id="percent">(${
          Math.round(data.profile.changesPercentage * 100) / 100
        }%)</span><a href="./company.html?symbol=${
          data.symbol
        }" target=_blank>${data.profile.companyName} (${data.symbol})</a>`;
      } else {
        listItem.innerHTML = `<img onerror="this.onerror=null" class="resultLogo" src="${
          data.profile.image
        }"><span style="color:red;"id="percent">(${
          Math.round(data.profile.changesPercentage * 100) / 100
        }%)</span><a href="./company.html?symbol=${
          data.symbol
        }" target=_blank>${data.profile.companyName} (${data.symbol})</a>`;
      }

      results.appendChild(listItem);
    }
  }
}
