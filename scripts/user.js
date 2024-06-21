console.log(window.location.search);

   

function loadUserDetails() {
    const urlParams = new URLSearchParams(window.location.search);
    const userId = parseInt(urlParams.get('id'));
  
    const users = JSON.parse(localStorage.getItem('users')) || [];
    const user = users.find(u => u.id === userId);
  
    if (user) {
        displayUserDetails(user);
        addButtonsWithStyles();
    } else {
        const userDetailsDiv = document.getElementById('user-details');
        userDetailsDiv.innerHTML = '<h2>User not found</h2>';
    }
}
  

function displayUserDetails(user) {
    const userDetailsDiv = document.getElementById('user-details');
    userDetailsDiv.innerHTML = `
        <h2 class= "name">${user.name}</h2>
        <p class= "infos"><strong>Username:</strong> ${user.username}</p>
        <p class= "info"><strong>Email:</strong> ${user.email}</p>
        <p class= "info"><strong>Phone:</strong> ${user.phone}</p>
        <p class= "info"><strong>Website:</strong> <a href="https://www.instagram.com/diyor4ik_2808?igsh=MWViaWE5bDZqc2Rwdw==${user.website}" target="_blank">${user.website}</a></p>
        <p class= "info"><strong>Company:</strong> ${user.company.name}</p>
        <p class= "info"><strong>Address:</strong> ${user.address.street}, ${user.address.suite}, ${user.address.city}, ${user.address.zipcode}</p>
    `;
}
  

function addButtonsWithStyles() {
    const userDetailsDiv = document.getElementById('user-details');
        
    const aboutButton = document.createElement('button');
    aboutButton.className = 'custom-button';
    aboutButton.textContent = 'О нас';
    aboutButton.onclick = function() {
        alert('Добро пожаловать в мир нашей фронтенд-команды WePro! Мы — творческая группа специалистов, увлечённых созданием удивительных пользовательских интерфейсов и визуальных эффектов. Наша миссия — делать веб-технологии доступными, красивыми и функциональными для наших пользователей.');
    };
    
    userDetailsDiv.appendChild(aboutButton);
  
    const homeButton = document.createElement('button');
    homeButton.className = 'custom-buttons';
    homeButton.textContent = 'На главную';
    homeButton.onclick = function() {
          
        window.location.href = 'index.html';
    };
    userDetailsDiv.appendChild(homeButton);
}
  

document.addEventListener('DOMContentLoaded', loadUserDetails);
  
