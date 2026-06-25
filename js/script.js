console.log("TechNova Learning Hub Loaded");

document.addEventListener("DOMContentLoaded", function () {

    const form = document.getElementById("contactForm");

    if (form) {

        form.addEventListener("submit", function (event) {

            event.preventDefault();

            const name = document.getElementById("name").value.trim();
            const email = document.getElementById("email").value.trim();
            const subject = document.getElementById("subject").value.trim();
            const message = document.getElementById("message").value.trim();

            const formMessage = document.getElementById("formMessage");

            if (
                name === "" ||
                email === "" ||
                subject === "" ||
                message === ""
            ) {

                formMessage.innerHTML =
                    "<div class='alert alert-danger'>Please fill in all fields.</div>";

                return;
            }

            formMessage.innerHTML =
                "<div class='alert alert-success'>Message sent successfully!</div>";

            form.reset();

        });

    }

});