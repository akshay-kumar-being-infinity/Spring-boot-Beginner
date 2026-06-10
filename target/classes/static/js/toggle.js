const users = [
    { name: "Alex", gender: "Male", image: "../assets/male.png" },
    { name: "Sam", gender: "Female", image: "../assets/female.png" }
];

let currentIndex = 0;

function toggleUser() {
    currentIndex = (currentIndex + 1) % users.length;
    
    document.getElementById("userName").textContent = users[currentIndex].name;
    document.getElementById("userGender").textContent = users[currentIndex].gender;
    document.getElementById("userImg").src = users[currentIndex].image;
}