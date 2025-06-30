const apiUrl = 'https://dan-collins-dev.github.io/dummy-data-fetching-repo/data/users.json';
const cardContainer = document.getElementById('cardContainer');
const fetchAllBtn = document.getElementById('fetchAll');
const fetchFilteredBtn = document.getElementById('fetchFiltered');
const clearCardsBtn = document.getElementById('clearCards');

function createCard(user) {
  const card = document.createElement('div');
  card.className = 'card';

  card.innerHTML = `
    <h2>${user.name}</h2>
    <p><strong>Email:</strong> ${user.email}</p>
    <p><strong>Phone:</strong> ${user.phone}</p>
    <p><strong>Company:</strong> ${user.company}</p>
    <p><strong>Years Employed:</strong> ${user.years_employed}</p>
  `;

  cardContainer.appendChild(card);
}

function clearCards() {
  cardContainer.innerHTML = '';
}

function showAllUsers() {
  fetch(apiUrl)
    .then(response => response.json())
    .then(users => {
      clearCards();
      users.forEach(user => createCard(user));
    })
    .catch(error => console.log('Error fetching users:', error));
}

function showFilteredUsers() {
  fetch(apiUrl)
    .then(response => response.json())
    .then(users => {
      const filtered = users.filter(user => user.yearsEmployed < 10);
      clearCards();
      filtered.forEach(user => createCard(user));
    })
    .catch(error => console.log('Error fetching filtered users:', error));
}

fetchAllBtn.addEventListener('click', showAllUsers);
fetchFilteredBtn.addEventListener('click', showFilteredUsers);
clearCardsBtn.addEventListener('click', clearCards);
