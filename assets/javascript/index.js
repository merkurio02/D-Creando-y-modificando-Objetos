function spaces(number){

    let ss="";
    for(let xss=0; xss<number;xss++){
        ss+=" ";
    }
    return ss;
}


function Consultorio(nombre, pacientes) {
    this.nombre = nombre;
    this.pacientes = pacientes || [];

    // Object.defineProperty(this, 'getNombre', {
    //     get: function () {
    //         return nombre;
    //     }
    // });
    // Object.defineProperty(this, 'setNombre', {
    //     set: function (nombre) {
    //         nombre = nombre;
    //     }
    // });

    // Object.defineProperty(this, 'getPacientes', {
    //     get: function () {
    //         return pacientes;
    //     }
    // });
    // Object.defineProperty(this, 'setPacientes', {
    //     set: function (pacientes) {
    //         pacientes = pacientes;
    //     }
    // });

    // Object.defineProperty(this, 'addPaciente', {
    //     set: function (paciente) {
    //         pacientes.push(paciente);
    //     }
    // });

}


Consultorio.prototype.getNombre = function () {
    return this.nombre;
}
Consultorio.prototype.setNombre = function (nombre) {
    this.nombre = nombre;
}
Consultorio.prototype.getPacientes = function () {
    return this.pacientes;
}
Consultorio.prototype.setPacientes = function (pacientes) {
    this.pacientes = pacientes;
}
Consultorio.prototype.addPaciente = function (paciente) {
    this.pacientes.push(paciente);
}
Consultorio.prototype.showPacientes = function () {
    let text="*     NOMBRE     * EDAD *    RUT   * DIAGNOSTICO\n";
    for(let paciente of this.pacientes){
        text+=`* ${paciente.getNombre()}${spaces(16-paciente.getNombre().length)}`
        text+=`*${spaces(2)}${paciente.getEdad()}${spaces(2)}`
        text+=`*${paciente.getRut()}`
        text+=`* ${paciente.getDiagnostico()}\n` ;
    }
    console.log(text);
    
}
Consultorio.prototype.existPaciente = function (nombre) {
    for(let paciente of this.pacientes){
        console.log(paciente.getNombre().includes(nombre));
        if(paciente.getNombre().includes(nombre)){
            return true;
        }
    }
    
    return false;
    
}

function Paciente(nombre, edad, rut, diagnostico) {
    this.nombre = nombre;
    this.edad = edad;
    this.rut = rut;
    this.diagnostico = diagnostico;

}
// nombre
Paciente.prototype.getNombre = function () {
    return this.nombre;
}
Paciente.prototype.setNombre = function (nombre) {
    this.nombre = nombre;
}
// edad
Paciente.prototype.getEdad = function () {
    return this.edad;
}
Paciente.prototype.setEdad = function (edad) {
    this.edad = edad;
}
// rut
Paciente.prototype.getRut = function () {
    return this.rut;
}
Paciente.prototype.setRut = function (rut) {
    this.rut = rut;
}
// diagnostico
Paciente.prototype.getDiagnostico= function () {
    return this.diagnostico;
}
Paciente.prototype.setDiagnostico = function (diagnostico) {
    this.edad = diagnostico;
}


var hospital = new Consultorio('San Jose');

var p1 =new Paciente('Juan Pablo',35,'21874637-H','Quebradura de brazo')
var p2 =new Paciente('Patricio Ortiga',35,'23847365-H','Huticaria')
var p3 =new Paciente('Dante',35,'23847365-H','Quemadura de 9° grado')

hospital.setNombre('San Jose');
hospital.addPaciente(p1);
hospital.addPaciente(p2);
hospital.addPaciente(p3);


console.log(hospital.existPaciente("Dante")?'Existe':'Noexiste');  





