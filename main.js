//CREAMOS UNA CLASE PARA CREAR OBJETOS
class Articulo {
    constructor(nombre, modelo, precio) {
        this.nombre = nombre;
        this.modelo = modelo;
        this.precio = precio;
    }
}

//CREAMOS LOS DISTINTOS OBJETOS QUE VAN A FORMAR PARTE DE ESA CLASE

const camisetaSeleccionTitular = new Articulo("Camiseta Selección", "Titular", 24999);
const camisetaSeleccionSuplente = new Articulo("Camiseta Selección", "Suplente", 21999);
const camisetaRiverTitular = new Articulo("Camiseta River", "Titular", 21999);
const camisetaRiverSuplente = new Articulo("Camiseta River", "Suplente", 20999);
const camisetaBocaTitular = new Articulo("Camiseta Boca", "Titular", 21999);
const camisetaBocaSuplente = new Articulo("Camiseta Boca", "Suplente", 20999);
const shortAfaTitular = new Articulo("Short Selección", "Titular", 11999);
const shortAfaSuplente = new Articulo("Short Selección", "Suplente", 11999);
const shortRiverTitular = new Articulo("Short River", "Titular", 12999);
const shortRiverSuplente = new Articulo("Short River", "Suplente", 11999);
const shortBocaTitular = new Articulo("Short Boca", "Titular", 12999);
const shortBocaSuplente = new Articulo("Short Boca", "Suplente", 11999);
const botinesPredator = new Articulo("Botin", "Predator 19.3", 25989);
const botinesSpeedPortal = new Articulo("Botin", "Speed Portal", 34999);

//ARRAY
const arrayArticulos = [camisetaSeleccionTitular, camisetaSeleccionSuplente, camisetaRiverTitular, camisetaRiverSuplente, camisetaBocaTitular, camisetaBocaSuplente, shortAfaTitular, shortAfaSuplente, shortRiverTitular, shortRiverSuplente, shortBocaTitular, shortBocaSuplente, botinesPredator, botinesSpeedPortal];

//CREAMOS EL ARRAY CARRITO DONDE IRAN ALMACENADAS LAS COMPRAS
let carrito = [];

//USO EL METODO FOR EACH PARA RECORRER EL ARRAY
function mostrarListaProductos() {
    let productos = "";
    arrayArticulos.forEach((articulo, index) => {
        productos += `${index + 1}. ${articulo.nombre} ${articulo.modelo}: $${articulo.precio}\n`;
    });
    alert(productos);
}


function mostrarAlertas() {
    alert(`¡Bienvenido a la tienda Online de Futbol Adidas!`);
    alert(`Aquí vas a encontrar ese producto que estás necesitando para que te sientas como un profesional en cada partido.`);
    alert(`Dependiendo de la cantidad de artículos que compres, podes obtener descuentos de 15 o 20%.`);
    alert(`Si compras 2 articulos obtenes un 15% de descuento, y comprando mas de 2 obtenes un 25% de descuento`)
    alert(`Estos son los productos que actualmente tenemos en stock:`);

    let productos = "";
    arrayArticulos.forEach((articulo) => {
        productos += `${articulo.nombre} ${articulo.modelo}: $${articulo.precio}\n`;
    });
    alert(productos);

    // Array para guardar los productos seleccionados
    let carrito = [];

    // Variable para guardar el precio total
    let precioTotal = 0; 

    // Se preguntaal qué producto desea comprar
    do {
        const seleccion = prompt(`Ingrese el número del producto que desea comprar:
1. Camiseta Selección Titular
2. Camiseta Selección Suplente
3. Camiseta River Titular
4. Camiseta River Suplente
5. Camiseta Boca Titular
6. Camiseta Boca Suplente
7. Short Selección Titular
8. Short Selección Suplente
9. Short River Titular
10. Short River Suplente
11. Short Boca Titular
12. Short Boca Suplente
13. Botines Predator
14. Botines Speed Portal`);

        // Verificamos que el usuario haya ingresado una opción válida
        if (seleccion >= 1 && seleccion <= arrayArticulos.length) {
            const productoSeleccionado = arrayArticulos[seleccion - 1];
            alert(`Ha seleccionado ${productoSeleccionado.nombre} ${productoSeleccionado.modelo} por $${productoSeleccionado.precio}`);

            // Se agrega el producto al carrito
            carrito.push(productoSeleccionado); 

            // Se suma el precio al precio total
            precioTotal += productoSeleccionado.precio; 

            // Se le pregunta al cliente si desea comprar otro producto
            const comprarMas = confirm("¿Desea comprar algo más?");
            if (comprarMas) {
                mostrarListaProductos();
            } else {
                // Se aplica el descuento correspondiente y se muestra el precio final
                let descuento = 0;

                if (carrito.length === 2) {
                    descuento = 0.15;
                } else if (carrito.length > 2) {
                    descuento = 0.25;
                }

                const precioFinal = precioTotal * (1 - descuento);


                alert(`El precio total de su compra es $${precioFinal.toFixed(2)}.`)

                // Se detalla la compra
                let detalleCompra = "Detalle de la compra:\n";
                carrito.forEach((producto) => {
                    detalleCompra += `- ${producto.nombre} ${producto.modelo}: $${producto.precio}\n`;
                });
                detalleCompra += `\nPrecio total: $${precioTotal}\nDescuento: ${(descuento * 100)}%\nPrecio final: $${precioFinal}`;
                alert(detalleCompra);


                // Preguntamos si el usuario desea realizar otra compra
                const realizarOtraCompra = confirm("¿Desea realizar otra compra?");
                if (realizarOtraCompra) {
                    carrito = []; // Vaciamos el carrito
                    precioTotal = 0; // Reiniciamos el precio total
                    mostrarAlertas();
                } else {
                    alert("¡Gracias por su compra!");
                    break; // Finaliza la simulación
                }
            }
        }
    } while (true);
}


mostrarAlertas();
