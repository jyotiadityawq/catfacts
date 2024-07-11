document.addEventListener('DOMContentLoaded', () => {
    const factText = document.getElementById('fact-text');
    const newFactBtn = document.getElementById('new-fact-btn');


    const fetchCatFact = () => {
        factText.textContent = 'Loading...';
        fetch('https://catfact.ninja/fact')
            .then(response => response.json())
            .then(data => {
                factText.textContent = data.fact;
            })
            .catch(error => {
                console.error('Error fetching cat fact:', error);
                factText.textContent = 'Failed to fetch cat fact. Please try again later.';
            });
    };


    newFactBtn.addEventListener('click', fetchCatFact);


    fetchCatFact();
});
