// Definición de recetas
const recetas = {
    brownie: {
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
    },
    budin: {
        "Huevos": 1,
        "Harina": 140,
        "Banana": 125,
        "Azúcar": 90,
        "Aceite": 70,
        "Polvo de hornear": 10,
        "Vainilla": 7.5
    },
    faina: {
        "Huevos": 2,
        "Harina": 160,
        "Polvo de hornear": 10,
        "Leche": 120,
        "Agua": 50,
        "Aceite": 60,
        "Zanahoria": 125,
        "Queso rallado": 50,
        "Sal": 3
    },
    pastaFrola: {
        "Huevos": 1.5,
        "Harina": 200,
        "Azúcar": 65,
        "Aceite": 55,
        "Polvo de hornear": 7.5,
        "Ralladura de limón o naranja": "c/n",
        "Dulce de membrillo": 200
    },
    tortaBasica: {
        "Huevo": 2,
        "Azúcar": 125,
        "Aceite": 60,
        "Harina": 220,
        "Polvo de hornear": 5,
        "Leche": 160,
        "Vainilla": 3,
        "Variantes": {
            "Manzana, pera, durazno, ciruela": 300,
            "Zanahoria": 150,
            "Ralladura de limón": 1,
            "Coco": 50,
            "Cacao": 25
        }
    },
    tortaCalabaza: {
        "Huevos": 1,
        "Aceite": 100,
        "Azúcar": 110,
        "Calabaza": 200,
        "Harina": 180,
        "Polvo de hornear": 10,
        "Canela": 5
    },
    tortaNaranja: {
        "Naranja con cáscara": 150,
        "Harina": 160,
        "Polvo de hornear": 10,
        "Huevo": 3,
        "Aceite": 110,
        "Azúcar": 125
    },
    panCasero: {
        "Harina": 300,
        "Levadura seca": 5,
        "Azúcar": 5,
        "Aceite": 10,
        "Agua tibia": 200,
        "Sal": 2.5,
        "Variantes": {
            "Queso": 50,
            "Hierbas aromáticas": 5,
            "Remolacha": 1,
            "Espinaca": 22,
            "Morrón": 45,
            "Salvado de trigo": 100
        }
    },
    panCalabaza: {
        "Harina": 300,
        "Leche": 150,
        "Calabaza": 80,
        "Aceite": 50,
        "Huevo": 1,
        "Polvo de hornear": 25,
        "Sal": 2.5
    },
    sconesQueso: {
        "Harina": 360,
        "Aceite": 60,
        "Leche": 175,
        "Polvo de hornear": 15,
        "Sal": 3.5,
        "Queso rallado": 40,
        "Variantes": {
            "Espinaca fresca": 150,
            "Espinaca congelada": 75,
            "Hierbas aromáticas secas": 2.5,
            "Hierbas aromáticas frescas": 10
        }
    },
    sconesDulces: {
        "Harina": 225,
        "Azúcar": 75,
        "Aceite": 50,
        "Polvo de hornear": 10,
        "Sal": 1.25,
        "Leche": 110,
        "Vainilla": 10
    },
    hummus: {
        "Garbanzos": 140,
        "Jugo de limón": 2.5,
        "Aceite": 50,
        "Sal": 1,
        "Agua de cocción": "c/n"
    },
    untableRicota: {
        "Ricota": 170,
        "Aceite": 30,
        "Sal": 1
    },
    untableZanahoria: {
        "Zanahoria": 150,
        "Jugo de limón": 2.5,
        "Aceite": 50,
        "Sal": 1,
        "Jengibre fresco": 1
    },
    galletasAvenaPasas: {
        "Huevos": 2,
        "Harina": 160,
        "Avena": 100,
        "Azúcar": 100,
        "Pasas de uva": 50,
        "Aceite": 60,
        "Polvo de hornear": 5,
        "Vainilla": 3,
        "Ralladura de limón": "c/n"
    },
    galletasAvenaQueso: {
        "Queso fresco rallado": 45,
        "Avena": 240,
        "Aceite": 60,
        "Agua": 180,
        "Leche en polvo": 60,
        "Semillas lino": 25,
        "Semillas sésamo": 25,
        "Sal": 1.5
    },
    galletitasCitricas: {
        "Huevos": 1,
        "Harina": 240,
        "Azúcar": 100,
        "Aceite": 50,
        "Polvo de hornear": 10,
        "Jugo de naranja": 0.5,
        "Jugo de limón": 0.5,
        "Ralladura de naranja": 0.5,
        "Ralladura de limón": 0.5,
        "Variantes": {
            "Leche": 35,
            "Vainilla": 5
        }
    },
    ojitosCaseros: {
        "Huevos": 1,
        "Azúcar": 60,
        "Aceite": 40,
        "Almidón de maíz": 45,
        "Harina": 120,
        "Polvo de hornear": 3.5,
        "Vainilla": 2,
        "Dulce de membrillo": 100
    },
    alfajoresMaicena: {
        "Huevos": 1,
        "Azúcar": 60,
        "Aceite": 40,
        "Almidón de maíz": 110,
        "Harina": 90,
        "Polvo de hornear": 3.5,
        "Vainilla": 2,
        "Ralladura de limón": 2,
        "Dulce de leche": 150,
        "Coco rallado": 20
    },
    frutosSecos: {
        "Azúcar": 65,
        "Huevo": 2,
        "Avena": 80,
        "Harina": 40,
        "Polvo de hornear": 7,
        "Pasas de uva": 75,
        "Semillas de lino": 50,
        "Semillas de girasol": 50,
        "Maní sin sal": 50,
        "Manzana rallada": 150,
        "Ralladura de limón": 2
    },
    mixFrutosSecos: {
        "Frutos secos deshidratados": 150,
        "Frutas deshidratadas": 150
    },
    cremaVainilla: {
        "Leche": 1500,
        "Almidón de maíz": 90,
        "Azúcar": 150,
        "Vainilla": 5,
        "Cocoa": 50,
        "Coco": 120
    },
    licuadoLecheFruta: {
        "Leche": 1500,
        "Fruta": 300,
        "Azúcar": 80
    },
    ojitosMijo: {
        "Harina de mijo": 300,
        "Huevo": 1,
        "Azúcar": 100,
        "Dulce de leche": 100,
        "Aceite": 140,
        "Vainilla": 1
    }
};

// Función para calcular ingredientes
function calcularIngredientes() {
    const recetaSeleccionada = document.getElementById('recetas').value;
    const cantidadComensales = parseInt(document.getElementById('comensales').value);
    
    if (!recetas[recetaSeleccionada] || isNaN(cantidadComensales) || cantidadComensales < 1) {
        document.getElementById('resultados').innerHTML = '<p>Por favor, selecciona una receta y una cantidad de comensales válidos.</p>';
        return;
    }

    const ingredientes = recetas[recetaSeleccionada];
    let resultadosHTML = '<ul>';

    for (let ingrediente in ingredientes) {
        if (typeof ingredientes[ingrediente] === 'object') {
            resultadosHTML += `<li>${ingrediente}: </li><ul>`;
            for (let variante in ingredientes[ingrediente]) {
                let cantidad = ingredientes[ingrediente][variante] * cantidadComensales;
                resultadosHTML += `<li>${variante}: ${cantidad} ${variante.includes('cc') ? 'cc' : variante.includes('g') ? 'g' : 'unidad'}</li>`;
            }
            resultadosHTML += '</ul>';
        } else {
            let cantidad = ingredientes[ingrediente] * cantidadComensales;
            resultadosHTML += `<li>${ingrediente}: ${cantidad} ${ingrediente.includes('cc') ? 'cc' : ingrediente.includes('g') ? 'g' : 'unidad'}</li>`;
        }
    }

    resultadosHTML += '</ul>';
    document.getElementById('resultados').innerHTML = resultadosHTML;
}

// Añadir evento al botón de calcular
document.getElementById('calcular').addEventListener('click', calcularIngredientes);
