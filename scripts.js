const pacientes = [
  {
    paciente: {
      nombre: "Manuel",
      edad: 25,
      sexo: "H"
    },
    diasIngresado: 3,
    dieta: "Baja en fibra"
  },
  {
    paciente: {
      nombre: "Marta",
      edad: 56,
      sexo: "M"
    },
    diasIngresado: 5,
    dieta: "Diabetes"
  },
  {
    paciente: {
      nombre: "Julia",
      edad: 38,
      sexo: "M"
    },
    diasIngresado: 1,
    dieta: "Sin sal"
  },
  {
    paciente: {
      nombre: "Esteban",
      edad: 40,
      sexo: "H"
    },
    diasIngresado: 3,
    dieta: "Diabetes"
  },
  {
    paciente: {
      nombre: "Arturo",
      edad: 19,
      sexo: "H"
    },
    diasIngresado: 2,
    dieta: "Baja en fibra"
  },
  {
    paciente: {
      nombre: "Isabel",
      edad: 63,
      sexo: "M"
    },
    diasIngresado: 6,
    dieta: "Sin sal"
  }
];

const sonMayoresEdad = array => array
  .filter(objeto => objeto.paciente.edad >= 18)
  .length;

const sonHombresDiabeticos = array => array
  .filter(objeto => objeto.dieta === "Diabetes" && objeto.paciente.sexo === "H")
  .length;

const calculoDiasIngreso = array => array
  .map(objeto => objeto.diasIngresado)
  .reduce((total, diasIngresado) => total + diasIngresado);

const calculoEdadMujeres = array => {
  const sonMujeres = array
    .filter(objeto => objeto.paciente.sexo === "M");
  const mediaEdadMujeres = sonMujeres
    .map(objeto => objeto.paciente.edad)
    .reduce((total, edades) => (total + edades) / sonMujeres.length);
  return Math.round(mediaEdadMujeres);
};

function resumir(array) {
  const resumen = {
    nPacientes: array.length,
    nMayoresEdad: sonMayoresEdad(array),
    nHombresDiabeticos: sonHombresDiabeticos(array),
    totalDiasIngreso: calculoDiasIngreso(array),
    mediaEdadMujeres: calculoEdadMujeres(array),
  };
  return resumen;
}

console.log(resumir(pacientes));
