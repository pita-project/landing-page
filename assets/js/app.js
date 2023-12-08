const errorClass = ["text-red-500", "border-red-500"];
// const lastname = document.getElementById("lastname");
// const firstname = document.getElementById("firstname");
// const email = document.getElementById("email");
// const content = document.getElementById("content");
const newsletter = document.getElementById("newsletter");
const checkbox = document.getElementById("checkbox");
const accept = document.getElementById("accept");

// lastname.addEventListener("input", () => {
//     lastname.classList.remove(...errorClass);
// });
//
// firstname.addEventListener("input", () => {
//     firstname.classList.remove(...errorClass);
// });
//
// email.addEventListener("input", () => {
//     email.classList.remove(...errorClass);
// });
//
// content.addEventListener("input", () => {
//     content.classList.remove(...errorClass);
// });

newsletter.addEventListener("input", () => {
    newsletter.classList.remove(...errorClass);
});

checkbox.addEventListener("change", () => {
    accept.classList.remove(...errorClass);
});

// document.getElementById("contact-form").addEventListener("submit", (e) => {
//     e.preventDefault();
//     let hasError = false;
//
//     if (lastname.value === "") {
//         lastname.classList.add(...errorClass);
//         hasError = true;
//     }
//
//     if (firstname.value === "") {
//         firstname.classList.add(...errorClass);
//         hasError = true;
//     }
//
//     if (email.value === "") {
//         email.classList.add(...errorClass);
//         hasError = true;
//     }
//
//     if (content.value === "") {
//         content.classList.add(...errorClass);
//         hasError = true;
//     }
//
//     if (hasError) return;
//
//     const body = {
//         lastname: lastname.value,
//         firstname: firstname.value,
//         email: email.value,
//         content: content.value,
//     };
//
//     sendContact(body);
//
//     lastname.value = "";
//     firstname.value = "";
//     email.value = "";
//     content.value = "";
// });

document.getElementById("newsletter-form").addEventListener("submit", (e) => {
    e.preventDefault();
    let hasError = false;

    if (newsletter.value === "") {
        newsletter.classList.add(...errorClass);
        hasError = true;
    }

    if (checkbox.checked === false) {
        accept.classList.add(...errorClass);
        hasError = true;
    }

    if (hasError) return;

    const body = { email: newsletter.value };
    sendNewsletter(body);
    newsletter.value = "";
    checkbox.checked = false;
});

// async function sendContact(body) {
//     await fetch("http://195.35.28.188:3000/contact/new", {
//         method: "POST",
//         headers: {
//             "Content-Type": "application/json",
//         },
//         body: JSON.stringify(body),
//     });
// }

async function sendNewsletter(body) {
    await fetch("https://pita-mds.fr/newsletter/new", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(body),
    });
}
