const distributors = [
  { id: 1, name: 'Distributor A', lastShip: '100', foreShip: '578', avgShip: '147' },
  { id: 2, name: 'Distributor B', lastShip: '89', foreShip: '3448', avgShip: '2900' },
  { id: 3, name: 'Distributor C', lastShip: '1', foreShip: '4', avgShip: '3' }
];

const unit = { unit: 'Parcels'};

function displayDistributors() {
  const listElement = document.getElementById('distributors-list');
  listElement.innerHTML = '';

  distributors.forEach(distributor => {
    const div = document.createElement('div');
    div.className = 'distributor';
    div.innerHTML = `
            <h2>${distributor.name}</h2>
            <p><strong>Last month's shipment:</strong> ${distributor.lastShip} ${unit.unit}</p>
            <p><strong>Forecasted shipment:</strong> ${distributor.foreShip} ${unit.unit}</p>
            <p><strong>Year-to-date average shipment:</strong> ${distributor.avgShip} ${unit.unit}</p>
        `;
    listElement.appendChild(div);
  });
}

// Initialize the app
document.addEventListener('DOMContentLoaded', () => {
  displayDistributors();
});
