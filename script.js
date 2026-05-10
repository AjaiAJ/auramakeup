// script.js
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});
// PAGE VISIT API CALL

fetch('https://omagencyioc.com/aura/leads.php')
    .then(response => response.text())
    .then(data => {
        console.log('Visit Logged');
    })
    .catch(error => {
        console.log(error);
    });


// FORM SUBMIT

const form = document.getElementById('leadForm');

form.addEventListener('submit', async function (e) {

    e.preventDefault();

    const formData = new FormData(form);
    // DEBUG FORM VALUES
    for (let pair of formData.entries()) {
        console.log(pair[0] + ': ' + pair[1]);
    }

    try {

        const response = await fetch(
            'https://omagencyioc.com/aura/add_leads.php',
            {
                method: 'POST',
                body: formData
            }
        );

        const result = await response.text();

        console.log(result);

        document.getElementById('formMessage').innerHTML =
            'Thank you! We will contact you soon.';

        form.reset();

    } catch (error) {

        console.log(error);

        document.getElementById('formMessage').innerHTML =
            'Something went wrong.';

    }

});