document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('investmentForm');
    const montoInput = document.getElementById('montoInvertir');

    // Formato de moneda para el campo de monto
    montoInput.addEventListener('input', function(e) {
        let value = e.target.value.replace(/\D/g, '');
        if (value.length > 0) {
            value = Number(value).toLocaleString('es-CO');
            e.target.value = value;
        }
    });

    // Manejo del envío del formulario
    form.addEventListener('submit', function(e) {
        e.preventDefault();

        // Recolectar datos del formulario
        const formData = {
            tipoInversion: document.getElementById('tipoInversion').value,
            nombreInversion: document.getElementById('nombreInversion').value,
            montoInvertir: document.getElementById('montoInvertir').value,
            tipoBanco: document.getElementById('tipoBanco').value,
            tasaInteres: document.getElementById('tasaInteres').value,
            fechaRetorno: document.getElementById('fechaRetorno').value,
            descripcionInversion: document.getElementById('descripcionInversion').value,
            anexarPortafolio: document.getElementById('anexarPortafolio').value
        };

        // Aquí puedes agregar la lógica para enviar los datos al servidor
        console.log('Datos del formulario:', formData);
        
        // Ejemplo de mensaje de éxito
        alert('¡Inversión creada con éxito!');
        form.reset();
    });
});