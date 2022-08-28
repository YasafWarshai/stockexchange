let urlParams = new URLSearchParams(window.location.search);
let values = urlParams.values();
for (value of values) {
}
 
let displayInfo = new Object();
let displayName = document.getElementById("name");
let title = document.getElementById("title");
let symbol = document.getElementById("symbol");
let bodyInfo = document.getElementById("bodyInfo");
let image = document.createElement("div");
let link = document.getElementById("website");
let price = document.getElementById("price");
let description = document.getElementById("description");
let change = document.getElementById("change");

async function getInfo() {
  const response = await fetch(
    `https://stock-exchange-dot-full-stack-course-services.ew.r.appspot.com/api/v3/company/profile/${value}`
  );
  const information = await response.json();
  return information;
}

async function getChart() {
  const response = await fetch(
    `https://stock-exchange-dot-full-stack-course-services.ew.r.appspot.com/api/v3/historical-price-full/${value}?serietype=line`
  );
  const chart = await response.json();
  return chart;
}

getChart().then((chart) => {
  let close = chart.historical.map(function (elem) {
    return elem.close;
  });
  let years = chart.historical.map(function (elem) {
    return elem.date;
  });
  const ctx = document.getElementById("canvas").getContext("2d");
  const myChart = new Chart(ctx, {
    type: "line",
    data: {
      labels: years,
      datasets: [
        {
          label: `History`,
          data: close,
          backgroundColor: "transparent",
          borderColor: "purple",
          borderWidth: 1,
        },
      ],
    },
    options: {
      elements: {
        line: {
          tension: 0,
        },
      },
      scales: {
        y: {
          beginAtZero: true,
        },
      },
    },
  });
});

getInfo().then((information) => {
  displayName.innerText = information.profile.companyName;
  symbol.innerText = `(${information.symbol})`;
  image.innerHTML = `<img onerror="this.src='/images/default-image.png'" src="${information.profile.image}">`;
  title.appendChild(image);
  link.innerText = information.profile.website;
  price.innerText = `$${Math.round(information.profile.price * 100) / 100}`;
  description.innerText = information.profile.description;
  change.innerText = `${
    Math.round(information.profile.changesPercentage * 100) / 100
  }%`;

  if (information.profile.changesPercentage > 0) {
    change.style.color = "#09ff00";
  } else {
    change.style.color = "red";
  }
});
