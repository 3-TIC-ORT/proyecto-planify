import fs from "fs";

function leerNotas() {
  try {
    let data = fs.readFileSync("notas.json", "utf-8");
    return JSON.parse(data);
  } catch (error) {
    return []; //
  }
}

function guardarNotas(notas) {
  let data = JSON.stringify(notas, null, 2);
  fs.writeFileSync("notas.json", data);
}

export function crearNota(usuario, titulo, contenido) {
  let notas = leerNotas();

  let nuevaNota = {
    usuario,
    titulo,
    contenido,
    fecha: new Date().toISOString()
  };

  notas.push(nuevaNota);
  guardarNotas(notas);

  console.log(`Nota creada para ${usuario}: "${titulo}"`);
}

export function mostrarNotas(usuario) {
  let notas = leerNotas();
  let notasUsuario = notas.filter(nota => nota.usuario === usuario);

  if (notasUsuario.length === 0) {
    console.log("No tienes notas todavía.");
    return;
  }

  console.log(`Notas de ${usuario}:`);
  notasUsuario.forEach((n, i) => {
    console.log(`\n[${i + 1}] ${n.titulo}`);
    console.log(`   ${n.contenido}`);
    console.log(`   (${n.fecha})`);
  });
}

export function editarNota(usuario, tituloViejo, nuevoTitulo, nuevoContenido) {
  let notas = leerNotas();
  let nota = notas.find(n => n.usuario === usuario && n.titulo === tituloViejo);

  if (!nota) {
    console.log("Nota no encontrada.");
    return;
  }

  nota.titulo = nuevoTitulo;
  nota.contenido = nuevoContenido;
  guardarNotas(notas);

  console.log(`Nota "${tituloViejo}" actualizada.`);
}

export function eliminarNota(usuario, titulo) {
  let notas = leerNotas();
  let nuevasNotas = notas.filter(
    n => !(n.usuario === usuario && n.titulo === titulo)
  );

  guardarNotas(nuevasNotas);
  console.log(`Nota "${titulo}" eliminada.`);
}