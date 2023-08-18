// Fetch data from the API
export async function fetchApiData() {
    const response = await fetch('https://api.coincap.io/v2/assets');
    if (!response.ok) {
        throw new Error(`API request failed with status: ${response.status}`);
    }
    return response.json();
}

// Filter data based on search text
export function filterData(data, searchText) {
    return data.data.filter(result =>
        result.name.toLowerCase().includes(searchText) ||
        result.symbol.toLowerCase().includes(searchText)
    );
}