// script.js

document.getElementById('printButton').addEventListener('click', function() {
    window.print();
});

function captureFormData() {
    const formData = {
        cliente: document.getElementById('cliente').value,
        fecha: document.getElementById('fecha').value,
        negocio: document.getElementById('negocio').value,
        rubro: document.getElementById('rubro').value,
        objetivo: Array.from(document.querySelectorAll('input[name="objetivo"]:checked')).map(el => el.nextSibling.textContent.trim()),
        edad: document.getElementById('edad').value,
        ubicacion: document.getElementById('ubicacion').value,
        caracteristicas: document.getElementById('caracteristicas').value,
        contenidoDeseado: Array.from(document.querySelectorAll('input[name="contenido"]:checked')).map(el => el.nextSibling.textContent.trim()),
        funcionalidades: Array.from(document.querySelectorAll('input[name="funcionalidades"]:checked')).map(el => el.nextSibling.textContent.trim()),
        materialDisponible: Array.from(document.querySelectorAll('input[name="material"]:checked')).map(el => el.nextSibling.textContent.trim()),
        dominio: document.querySelector('input[name="dominio"]:checked').value,
        hosting: document.querySelector('input[name="hosting"]:checked').value,
        asesoramiento: document.querySelector('input[name="asesoramiento"]:checked').value,
        fechaEntrega: document.getElementById('fechaEntrega').value,
        presupuesto: document.getElementById('presupuesto').value,
        referencias: document.getElementById('referencias').value
    };
    console.log(formData);
}

document.getElementById('submitButton').addEventListener('click', captureFormData);

function printForm() {
    window.print();
}