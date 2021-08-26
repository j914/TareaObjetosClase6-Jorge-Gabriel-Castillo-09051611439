// creacion de arreglo con objetos
const cursos = [
  {
    nombreCurso: "Desarrollo Web",
    planillaEstudiantes: [
      {
        nombre: "Juan",
        nota: 9,
      },
      {
        nombre: "Maria",
        nota: 31,
      },
      {
        nombre: "Carlos",
        nota: 19,
      },
    ],
  },
  {
    nombreCurso: "Progrmacion 2",
    planillaEstudiantes: [
      {
        nombre: "Lili",
        nota: 30,
      },
      {
        nombre: "Cleo",
        nota: 40,
      },
      {
        nombre: "Pedro",
        nota: 33,
      },
      {
        nombre: "Marco",
        nota: 21,
      },
    ],
  },
  
];


// llena la tabla con la informacion del curso
 
const llenarTabla = (curso) => {
  /**
   * Se obtiene el elemento dentro del documento html
   */
  let cuerpoTabla = document.getElementById("cuerpoTabla");
  if (!cuerpoTabla) return; 
  //funcion de flecha
  curso.planillaEstudiantes?.forEach((estudiante, index) => {
    // etiqueta de fila para html
    let fila = document.createElement("tr");
    // etiqueta de celda para html
    const celdaCurso = document.createElement("td");
    // texto que contendra la celda
    const nombreCurso = document.createTextNode(curso.nombreCurso);
    // agrega el texto a la celda
    celdaCurso.appendChild(nombreCurso);
    // agrega la celda a la fila
    fila.appendChild(celdaCurso);
    /**
     * sirve para recorrer objetos, la key es el nombre del atributo del objeto
     */
    Object.keys(estudiante).map((key) => {
      // etiquta celda que contendra el texto
      const celda = document.createElement("td");
      // crea una nuevo texto segun el valor que tiene el estudiante basado en su atributo
      let texto = null;
      Boolean(key !== "nota")
        ? (texto = document.createTextNode(estudiante[key]))
        : (texto = asignarColor(estudiante[key]));
      // agrega el texto creado a la celda creada
      celda.appendChild(texto);
      // agrega la celda a la fila
      fila.appendChild(celda);
      return true;
    });
    /**
     * agrega el hijo fila al cuerpo de la tabla
     */
    cuerpoTabla.appendChild(fila);
  });
};

/*

 devuelve una etiqueta Span con el estilo deseado segun el valor de la nota y con el texto del valor de la nota
 */
const asignarColor = (valor) => {
  let span = document.createElement("span");
  if (valor < 10) {
    span.style.color = "red";
  } else if (valor < 20) {
    span.style.color = "green";
  } else if (valor > 20) {
    span.style.color = "blue";
  }
  // setea el valor de la nota en la etiqueta span
  span.innerText = valor;
  return span;
};
cursos.forEach(curso => {
    llenarTabla(curso);    
});