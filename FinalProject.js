const body = document.querySelector('body'),
sidebar = body.querySelector('nav'),
toggle = body.querySelector(".toggle"),
searchBtn = body.querySelector(".search-box"),
modeSwitch = body.querySelector(".toggle-switch"),
modeText = body.querySelector(".mode-text");

toggle.addEventListener("click" , () =>{
  sidebar.classList.toggle("close");
})

searchBtn.addEventListener("click" , () =>{
  sidebar.classList.remove("close");
})

modeSwitch.addEventListener("click" , () =>{
body.classList.toggle("dark");

if(body.classList.contains("dark")){
    modeText.innerText = "Light mode";
}else{
    modeText.innerText = "Dark mode";
  
}
});


const foodNames = ['Egg', 'Chicken', 'Meat', 'Potato', 'Apple', 'Shrimp', 'Onion', 'Noodle', 'Garlic', 'Chili', 'Ketchup', 'Tomato', 'Egg', 'Chicken', 'Meat', 'Potato', 'Apple', 'Shrimp', 'Onion'];

const sidebarMenu = document.getElementById('foodButtons');

foodNames.forEach(foodName => {
  const foodButton = document.createElement('button');
  foodButton.textContent = foodName;
  foodButton.classList.add('nav-link'); // Tambahkan kelas nav-link untuk styling

  foodButton.addEventListener('click', function() {
    const searchInput = document.getElementById('search-input');
    const currentSearch = searchInput.value.trim();
    const newSearch = currentSearch ? `${currentSearch}, ${foodName}` : foodName;
    searchInput.value = newSearch;
    searchRecipes(); // Memicu pencarian resep
  });

  sidebarMenu.appendChild(foodButton); // Tambahkan button ke dalam sidebar
});





