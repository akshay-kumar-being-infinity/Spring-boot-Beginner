function fetchNewUser() {
    fetch('https://randomuser.me/api/')
        .then(response => response.json())
        .then(data => {
            const user = data.results[0];
            
            const fullName = user.name.first + " " + user.name.last;
            
            document.getElementById("apiUserName").textContent = fullName;
            document.getElementById("apiUserGender").textContent = user.gender;
            document.getElementById("apiUserImg").src = user.picture.large;
        })
        .catch(error => {
            console.error("Error fetching user:", error);
            document.getElementById("apiUserName").textContent = "Error loading user";
        });
}

fetchNewUser();