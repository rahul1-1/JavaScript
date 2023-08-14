// Fetch data from the API
export async function fetchApiData() {
    const response = await fetch('https://api.coingecko.com/api/v3/coins/markets?vs_currency=inr&order=market_cap_desc&per_page=100&page=1&sparkline=false');
    if (!response.ok) {
        throw new Error(`API request failed with status: ${response.status}`);
    }
    return response.json();
}

// Filter data based on search text
export function filterData(data, searchText) {
    return data.filter(result =>
        result.name.toLowerCase().includes(searchText) ||
        result.symbol.toLowerCase().includes(searchText)
    );
}