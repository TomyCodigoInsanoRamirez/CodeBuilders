document.addEventListener('DOMContentLoaded', (event) => {
    const form = document.querySelector('form');

    form.addEventListener('submit', (event) => {
        event.preventDefault(); // Prevent the default form submission

        // Create a query string from the form data
        const formData = new FormData(form);
        const params = new URLSearchParams();

        for (const pair of formData.entries()) {
            params.append(pair[0], pair[1]);
        }

        // Redirect to mostrar.html with query parameters
        window.location.href = `mostrar.html?${params.toString()}`;
    });
});
