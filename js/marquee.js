let url = `https://stock-exchange-dot-full-stack-course-services.ew.r.appspot.com/api/v3/quote/AAPL,FB,GOOG,MSFT,AMZN,TSLA,UNH,JNJ,META,V,TSM,NVDA,XOM,PG,WMT,JPM,BABA,MA,AAPL,FB,GOOG,MSFT,AMZN,TSLA,UNH,JNJ,META,V,TSM,NVDA,XOM,PG,WMT,JPM,BABA,MA`;

class Marquee {
  constructor(url) {
    this.url = url;
  }

  async getMarqueeData() {
    let response = await fetch(url);
    const data = await response.json();
    return data;
  }

  createMarqueeElement(data) {
    for (let i = 0; i < data.length; i++) {
      if (data[i].changesPercentage > 0) {
        marquee.innerHTML +=
          `<span style="color:#09ff00;" id="marqueeItem" class="marqueeItem">${data[i].symbol}` +
          ` ` +
          `${Math.round(data[i].changesPercentage * 100) / 100}%</span>`;
      } else {
        marquee.innerHTML +=
          `<span style="color:red;" id="marqueeItem" class="marqueeItem">${data[i].symbol}` +
          ` ` +
          `${Math.round(data[i].changesPercentage * 100) / 100}%</span>`;
      }
    }
  }

  load() {
    this.getMarqueeData().then((data) => {
      this.createMarqueeElement(data);
    });
  }
}
