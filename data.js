// ====== CONFIGURACIÓN (cambiá estos datos) ======
const CONFIG = {
  nombre: "EstiloÚnico",
  lema: "Ropa con personalidad. Elegí tu prenda y pedila por WhatsApp.",
  instagram: "estilounico",          // CAMBIAR: tu usuario real de Instagram, sin @
  whatsapp: "5493468542942",         // para el link (solo números)
  telefono: "+54 9 3468 54-2942",    // como se muestra en la barra
  envio: 1000,
  ga: ""                             // opcional: ID de Google Analytics (ej "G-XXXXXXX"). Solo carga si aceptan cookies
};

const categorias = [
  { nombre: "Vestidos", genero: "mujer" }, { nombre: "Remeras", genero: "mujer" },
  { nombre: "Pantalones", genero: "mujer" }, { nombre: "Conjuntos", genero: "mujer" },
  { nombre: "Buzos/Camperas", genero: "hombre" }, { nombre: "Remeras", genero: "hombre" },
  { nombre: "Pantalones", genero: "hombre" }, { nombre: "Conjuntos", genero: "hombre" }
];

// ====== PRENDAS ======
// Para agregar una: copiá una línea, pegala antes del "];" y cambiá los datos.
// "descuento" es un porcentaje (0 si no tiene). "detalles" es opcional.
// La última que agregues aparece primera. El nombre no puede repetirse dentro del mismo género.
const productos = [
  { nombre: "Vestido midi floral", genero: "mujer", categoria: "Vestidos", precio: 65000, descuento: 15, talles: ["S","M","L"], imagen: "https://via.placeholder.com/400x500?text=Vestido+Midi", descripcion: "Falda midi, tirante fino, tejido elástico", detalles: ["Tejido elástico", "Largo midi"], disponible: true },
  { nombre: "Pantalón wide leg", genero: "mujer", categoria: "Pantalones", precio: 42000, descuento: 0, talles: ["S","M","L","XL"], imagen: "https://via.placeholder.com/400x500?text=Pantalon+Wide", descripcion: "Cintura alta, pierna ancha, tela sastre", detalles: ["Tela sastre"], disponible: true },
  { nombre: "Remera oversize", genero: "mujer", categoria: "Remeras", precio: 18000, descuento: 0, talles: ["S","M","L"], imagen: "https://via.placeholder.com/400x500?text=Remera+Oversize", descripcion: "Algodón 100%, corte holgado", detalles: ["Algodón 100%"], disponible: true },
  { nombre: "Falda + top bordó", genero: "mujer", categoria: "Conjuntos", precio: 55000, descuento: 10, talles: ["S","M","L"], imagen: "https://via.placeholder.com/400x500?text=Conjunto+Top", descripcion: "Falda midi + top sin mangas, ideal para salir", detalles: ["Dos piezas"], disponible: true },
  { nombre: "Buzo capuchón", genero: "hombre", categoria: "Buzos/Camperas", precio: 52000, descuento: 0, talles: ["S","M","L","XL"], imagen: "https://via.placeholder.com/400x500?text=Buzo+Hombre", descripcion: "Felpa interior, capucha ajustable, bolsillo canguro", detalles: ["Felpa interior", "Bolsillo canguro"], disponible: true },
  { nombre: "Remera baggy", genero: "hombre", categoria: "Remeras", precio: 20000, descuento: 0, talles: ["S","M","L","XL"], imagen: "https://via.placeholder.com/400x500?text=Remera+Baggy", descripcion: "Corte baggy, algodón pesado, cuello reforzado", detalles: ["Algodón pesado"], disponible: true },
  { nombre: "Pantalón cargo", genero: "hombre", categoria: "Pantalones", precio: 48000, descuento: 20, talles: ["S","M","L","XL"], imagen: "https://via.placeholder.com/400x500?text=Pantalon+Cargo", descripcion: "Corte recto, 6 bolsillos, tela ripstop", detalles: ["6 bolsillos", "Ripstop"], disponible: true },
  { nombre: "Conjunto falda + top", genero: "hombre", categoria: "Conjuntos", precio: 55000, descuento: 0, talles: ["S","M","L"], imagen: "https://via.placeholder.com/400x500?text=Conjunto+Hombre", descripcion: "Dos piezas, corte moderno", detalles: [], disponible: false }
];
