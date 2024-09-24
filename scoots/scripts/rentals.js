
document.addEventListener('DOMContentLoaded', function() {
    
    fetch('data/rentals.json')  
        .then(response => response.json())
        .then(data => {
            const rentalPricingTable = document.querySelector('.rental-pricing');

            // Iterate over each rental object in the JSON data
            data.rentals.forEach(rental => {
                
                const row = document.createElement('tr');

                // rental type
                let cell = document.createElement('td');
                cell.textContent = rental.type;
                row.appendChild(cell);

                //  max persons
                cell = document.createElement('td');
                cell.textContent = rental.persons;
                row.appendChild(cell);

                //  reservation prices
                cell = document.createElement('td');
                cell.textContent = rental.reserveHalf;
                row.appendChild(cell);

                cell = document.createElement('td');
                cell.textContent = rental.reserveFull;
                row.appendChild(cell);

                //  walk-in prices
                cell = document.createElement('td');
                cell.textContent = rental.walkHalf;
                row.appendChild(cell);

                cell = document.createElement('td');
                cell.textContent = rental.walkFull;
                row.appendChild(cell);

                // Append the row to the table body
                rentalPricingTable.appendChild(row);
            });
        })
        .catch(error => {
            console.error('Error fetching or parsing JSON data:', error);
        });
})