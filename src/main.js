import Typed from "typed.js";

const myTyped = new Typed("#greeting", {
    strings: ["Front-End Dev.", "Back-End Dev.", "Fullstack Dev."],
    loop: true,
    typeSpeed: 70
});
const form = document.getElementById('myForm');

form.addEventListener('submit', async function (e) {
    e.preventDefault();

    const formData = new FormData(form);

    const response = await fetch(form.action, {
        method: form.method,
        body: formData,
        headers: {
            'Accept': 'application/json'
        }
    });

    if (response.ok) {
        Swal.fire({
            icon: 'success',
            title: 'Pesan Terkirim!',
            text: 'Terimakasih.',
            showConfirmButton: false,
            timer: 2000
        });
        form.reset();
    } else {
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Gagal mengirim pesan. Silakan coba lagi.'
        });
    }
});
