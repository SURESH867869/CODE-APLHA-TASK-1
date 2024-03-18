document.getElementById("generateBtn").addEventListener("click", function() {
    var birthdate = document.getElementById("birthdate").value;
    var age = calculateAge(birthdate);
    document.getElementById("result").innerText = "Your age is " + age;
});

function calculateAge(birthdate) {
    var today = new Date();
    var birthDate = new Date(birthdate);
    var age = today.getFullYear() - birthDate.getFullYear();
    var monthDiff = today.getMonth() - birthDate.getMonth();
    if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birthDate.getDate())) {
        age--;
    }
    return age;
}
