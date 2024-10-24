document.addEventListener('DOMContentLoaded', () => {
    const form = document.querySelector('.formulario_contacto');

    form.addEventListener('submit', (event) => {
        event.preventDefault();

        // Recolectar datos del formulario
        const name = form.name.value;
        const email = form.email.value;
        const subject = form.subject.value;
        const message = form.message.value;

        // Crear un objeto para almacenar los datos
        const formData = {
            name,
            email,
            subject,
            message,
        };

        // Guardar en localStorage
        localStorage.setItem('formData', JSON.stringify(formData));

        // Mensaje de éxito
        alert('Datos guardados exitosamente!');
        form.reset();
    });
});

