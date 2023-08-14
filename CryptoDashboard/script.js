// Import utility functions from 'utils.js'
import { fetchApiData, filterData } from './utils.js';

// Wait for the DOM to be fully loaded
document.addEventListener("DOMContentLoaded", async function() {
    // Select DOM elements
    const text = document.querySelector(".search"); // Search input
    const cards = document.querySelector(".container__card"); // Card container
    const total = document.querySelector(".total"); // Total coin count

    // Declare variables
    let betterFunction; // Debounced function
    let results; // Data from the API

    // Initialize the app
    async function initializeApp() {
        try {
            // Fetch data from the API
            results = await fetchApiData();
            // Render the initial data
            renderDom(results);
        } catch (error) {
            console.error("Error fetching API data:", error);
        }
    }

    // Render the data on the DOM
    function renderDom(data) {
        cards.innerHTML = ""; // Clear previous cards
        total.innerHTML = `Total Coin : ${data.length}`; // Update total coin count

        // Create and append card elements
        data.forEach(res => {
            const card = document.createElement("div");
            card.classList.add("card");
            card.innerHTML = `
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
            `;
            cards.append(card);
        });
    }

    // Debounce a function
    function debounce(fn, d) {
        let timer;
        return function (...args) {
            clearTimeout(timer);
            timer = setTimeout(() => {
                fn.apply(this, args);
            }, d);
        }
    }

    // Filter and render data based on user input
    async function getData() {
        let searchText = text.value.toLowerCase();
        const filteredData = filterData(results, searchText);
        renderDom(filteredData);
    }

    // Initialize the app when DOM is loaded
    initializeApp();

    // Set up debounced function for input
    betterFunction = debounce(getData, 300);
    text.addEventListener("keyup", betterFunction);
});
