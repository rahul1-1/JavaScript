(async function(){
    const res = await fetch('https://api.coingecko.com/api/v3/coins/markets?vs_currency=inr&order=market_cap_desc&per_page=100&page=1&sparkline=false')
    const results = await res.json();

    let cards = document.querySelector(".container__card")
    results.forEach(res => {
        const card = document.createElement("div");
        card.classList.add("card");
        card.innerHTML=`
        <div class="image"> <img class="img" src=${res.image} /> </div>
        <div class="card__details">
          <div class="card__details--row">
            <span class="name">${res.name} </span>
            <span class="price"> ${res.current_price} </span>
          </div>
          <div class="card__details--row">
            <span class="symbol">${res.symbol}</span><span class="percent ${res.market_cap_change_percentage_24h>0?"percent--green":"percent--red"}">${res.market_cap_change_percentage_24h}%</span>
          </div>
        </div>
        `
        cards.append(card)
    });
 
})()