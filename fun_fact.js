// Get references to the HTML elements we’ll use
const factDiv = document.getElementById('fact');
const newFactBtn = document.getElementById('newFactBtn');

// Function that fetches a random fact from the API
async function getFact() {
    // Show temporary message while the data loads
    factDiv.innerText = "Loading...";

    try {
        // Send a request to the random fact API
        const res = await fetch('https://uselessfacts.jsph.pl/api/v2/facts/random?language=en');

        // Convert the response into JSON format
        const data = await res.json();

        // Update the text on the page with the new fact
        factDiv.innerText = data.text;
    } catch (error) {
        // Handle errors (e.g., no internet or API down)
        factDiv.innerText = "Oops! Couldn't load a fact. Try again.";
        console.error('Error fetching fact:', error);
    }
}

// When the button is clicked, run the getFact() function
newFactBtn.addEventListener('click', getFact);
