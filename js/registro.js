
//aqui se colocan todas las variables//
var rut = document.getElementById('rut');
var nombres = document.getElementById('nombres'); 
var apellidos = document.getElementById('apellidos');
var correo = document.getElementById('correo');
var direccion = document.getElementById('direccion');
var foto = document.getElementById('foto');
var contra = document.getElementById('contra');
var recontra = document.getElementById('recontra');
var error = document.getElementById('error');
//aqui le damos estilo al mensaje de error
error.style.color='white';
error.style.backgroundColor='red';

//script del registro con sus respectivos parametros de validacion
function registrar(){
    console.log('enviando datos desde js')

    var mensaje = [];

    if(rut.value===null || rut.value===''){
        mensaje.push('debe ingresar un rut')
    }

    if(nombres.value===null || nombres.value===''){
        mensaje.push('debe ingresar algun nombre')
    }

    if(apellidos.value===null || apellidos.value===''){
        mensaje.push('debe ingresar algun apellido')
    }

    if(correo.value===null || correo.value===''){
        mensaje.push('debe ingresar algun correo')
    }

    if(direccion.value===null || direccion.value===''){
        mensaje.push('debe ingresar alguna direccion')
    }

    if(foto.value===null || foto.value===''){
        mensaje.push('debe ingresar una foto')
    }

    if(contra.value===null || contra.value===''){
        mensaje.push('debe ingresar una contraseña')
    }

    if(recontra.value===null || recontra.value===''){
        mensaje.push('las contraseñas no coinciden')
    }

    error.innerHTML=mensaje.join(' || ');


    return false;
}