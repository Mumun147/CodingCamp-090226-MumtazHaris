const userName = prompt("Siapa nama Anda?", "Guest");
document.getElementById("user-greeting").innerText = "Hi " + userName + ", Welcome";

const form = document.getElementById("msgForm");
form.addEventListener("submit", function(e) {
    e.preventDefault();
    
    const name = document.getElementById("sender-name").value;
    const dob = document.getElementById("sender-dob").value;
    const msg = document.getElementById("sender-msg").value;
    const time = new Date();

    document.getElementById("output").innerHTML = `
        <p><b>Waktu:</b> ${time}</p>
        <p><b>Nama:</b> ${name}</p>
        <p><b>Lahir:</b> ${dob}</p>
        <p><b>Pesan:</b> ${msg}</p>
    `;
});