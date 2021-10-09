const section = document.querySelector('section');

const API_URL = 'https://randomuser.me/api/?results=6';

function generateCard(picture, first, last) {
    const card = document.createElement('div');
    card.classList.add('card');

    const cardTitle = document.createElement('div');
    cardTitle.classList.add('card-title');

    const avatar = document.createElement('img');
    avatar.classList.add('avatar');
    avatar.src = picture;
    avatar.alt = `${first} ${last} Avatar`;

    const firstName = document.createElement('span');
    firstName.classList.add('f-name');
    firstName.textContent = first;

    const lastName = document.createElement('span');
    lastName.classList.add('l-name');
    lastName.textContent = last;

    cardTitle.append(avatar, firstName, lastName);

    const cardInfo = document.createElement('div');
    cardInfo.classList.add('card-info');

    const lorem = document.createElement('p');
    lorem.innerHTML = 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fugiat neque est quidem. Vitae, aliquid nemo.';

    cardInfo.appendChild(lorem);

    card.append(cardTitle, cardInfo);

    section.appendChild(card);
}

async function fetchUsers() {
    try {
        const res = await fetch(API_URL);
        const users = await res.json();

        users.results.forEach(user => {
            generateCard(user.picture.medium, user.name.first, user.name.last);
        })
    } catch(error) {
        console.log(error);
    }
}

fetchUsers();