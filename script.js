document.getElementById('calculator-form').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const comensales = parseInt(document.getElementById('comensales').value, 10);

    if (isNaN(comensales) || comensales <= 0) {
        alert('Por favor, ingresa un número válido de comensales.');
        return;
    }

    const receta = {
        "Porotos negros crudos": 60,
        "Aceite": 100,
        "Agua": 150,
        "Huevo": 1,
        "Vainilla": 12,
        "Avena": 70,
        "Azúcar": 100,
        "Almidón de maíz": 80,
        "Polvo de hornear": 7,
        "Cacao": 150,
        "Sal": 1
    };

    let resultado = '<h2>Ingredientes para ' + comensales + ' comensales:</h2><ul>';

    for (const [ingrediente, cantidad] of Object.entries(receta)) {
        const cantidadTotal = cantidad * comensales;
        resultado += `<li>${ingrediente}: ${cantidadTotal} ${getUnidad(ingrediente)}</li>`;
    }

    resultado += '</ul>';
    document.getElementById('result').innerHTML = resultado;
});

function getUnidad(ingrediente) {
    const unidades = {
        "Huevo": "unidad",
        "Vainilla": "cc",
        "Aceite": "cc",
        "Agua": "cc",
        "Porotos negros crudos": "g",
        "Avena": "g",
        "Azúcar": "g",
        "Almidón de maíz": "g",
        "Polvo de hornear": "g",
        "Cacao": "g",
        "Sal": "g"
    };
    return unidades[ingrediente] || 'g';
}
