let container = document.getElementById("container");

class searchForm {
  constructor(container) {
    this.container = container;
    this.createContainer();
  }

  async getStocks() {
    let companies = [];
    const response = await fetch(
      `https://stock-exchange-dot-full-stack-course-services.ew.r.appspot.com/api/v3/search?query=${this.userInput.value}&limit=10&exchange=NASDAQ`
    );
    const data = await response.json();
    data.forEach((element) => companies.push(element.symbol));
    return companies;
  }

  async onSearch(callback) {
    this.searchButton.addEventListener("click", () => {
      callback(this.getStocks());
    });
  }

  createContainer() {
    this.container.innerHTML = `<img class="maintitle" src="/images/logo.png">
 `;
    this.userInput = document.createElement("input");
    this.userInput.id = "userInput";
    this.userInput.class = "search";
    this.userInput.type = "text";
    this.searchButton = document.createElement("button");
    this.searchButton.id = "searchButton";
    this.searchButton.innerText = "search";
    this.container.appendChild(this.userInput);
    this.container.appendChild(this.searchButton);
  }
}
