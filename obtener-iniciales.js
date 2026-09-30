function obtenerIniciales(nombreCompleto) { 
  if (typeof nombreCompleto !== "string" || nombreCompleto.trim() === "") {
    return "Entrada inválida";
  }

  const palabras = nombreCompleto.trim().split(" ").filter(p => p !== "");

  const iniciales = palabras.map(p => p[0].toUpperCase());

  return iniciales.join("");
}

console.log(obtenerIniciales("Ana Maria López"));       // Salida: AML
console.log(obtenerIniciales("Tomás Reyes Barbosa"));   // Salida: TRB
console.log(obtenerIniciales("José Maria Pérez"));      // Salida: JMP
console.log(obtenerIniciales(""));                      // Salida: Entrada inválida
console.log(obtenerIniciales(12345));                   // Salida: Entrada inválida