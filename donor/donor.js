
// LIFEDROP DONOR REGISTRATION

const donorForm = document.querySelector("#donorForm");

donorForm.addEventListener("submit", function (event) {

    event.preventDefault();

    // Get form data
    const donor = {
        name: document.querySelector("#fullName").value,
        age: Number(document.querySelector("#age").value),
        bloodGroup: document.querySelector("#bloodGroup").value,
        phone: document.querySelector("#phone").value,
        email: document.querySelector("#email").value,
        city: document.querySelector("#city").value,
        address: document.querySelector("#address").value
    };

    // Age validation
    if (donor.age < 18 || donor.age > 65) {
        alert("Please enter valid age between 18 and 65.");
        return;
    }

    // Get existing donors
    let donors = JSON.parse(localStorage.getItem("donors")) || [];

    // Save new donor
    donors.push(donor);

    localStorage.setItem("donors", JSON.stringify(donors));

    alert("Donor Registration Successful!");

    // Clear form
    donorForm.reset();

});
