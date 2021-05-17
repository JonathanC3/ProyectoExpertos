//primer algoritmo imitando al de estilo.htm
//utilizando la fórmula de distancia euclidiana
function calcularEstiloAprendizaje(estiloAprendizaje) {
    //las columnas utilizadas en el algoritmo 
    var ec = parseInt(document.getElementById('C5').value) + parseInt(document.getElementById('C9').value) + parseInt(document.getElementById('C13').value) + parseInt(document.getElementById('C17').value) + parseInt(document.getElementById('C25').value) + parseInt(document.getElementById('C29').value);
    var or = parseInt(document.getElementById('C2').value) + parseInt(document.getElementById('C10').value) + parseInt(document.getElementById('C22').value) + parseInt(document.getElementById('C26').value) + parseInt(document.getElementById('C30').value) + parseInt(document.getElementById('C34').value);
    var ca = parseInt(document.getElementById('C7').value) + parseInt(document.getElementById('C11').value) + parseInt(document.getElementById('C15').value) + parseInt(document.getElementById('C19').value) + parseInt(document.getElementById('C31').value) + parseInt(document.getElementById('C35').value);
    var ea = parseInt(document.getElementById('C4').value) + parseInt(document.getElementById('C12').value) + parseInt(document.getElementById('C24').value) + parseInt(document.getElementById('C28').value) + parseInt(document.getElementById('C32').value) + parseInt(document.getElementById('C36').value);
    
    //valor que se utilizará para comparar
    var total = 100000;
    //tupla que almacenará la posición más cercana 
    var numeroTupla = 0;
    //for que recorre todos los datos como parámetro de la consulta 
    //de la tabla de estudiantes
    for(var i = 0; i < estiloAprendizaje.length; i++){
        //sumatoria de las filas que toma en cuenta el algoritmo, 
        //luego de buscar la diferencia entre la original y la que entra como parámetro
        // luego elevadas al cuadrado
        var sumatoria = Math.pow((estiloAprendizaje[i].ca - ca), 2) + Math.pow((estiloAprendizaje[i].ec - ec), 2) + Math.pow((estiloAprendizaje[i].ea - ea), 2) + Math.pow((estiloAprendizaje[i].or - or), 2);
        //raíz cuadrada de la sumatoria de todos los valores
        var distancia = Math.sqrt(sumatoria);
        //aquí comparan para mostrar el más cercano al que entra como parámetro
        if(total > distancia){
            //la distancia se acerca al dato final
            total = distancia;
            numeroTupla = i;
        }
    }
    //select para cambiar el color y mostrar 
    //el estilo de estudiante
    switch (estiloAprendizaje[numeroTupla].estilo) {
        case "ACOMODADOR":
            document.getElementById('mensaje1').style.color = "orange";
            document.getElementById('mensaje1').innerHTML = 'Su estilo de aprendizaje es: ' + (estiloAprendizaje[numeroTupla].estilo) + '.';
            break;
        case "CONVERGENTE":
            document.getElementById('mensaje1').style.color = "blue";
            document.getElementById('mensaje1').innerHTML = 'Su estilo de aprendizaje es: ' + (estiloAprendizaje[numeroTupla].estilo) + '.';
            break;
        case "ASIMILADOR":
            document.getElementById('mensaje1').style.color = "green";
            document.getElementById('mensaje1').innerHTML = 'Su estilo de aprendizaje es: ' + (estiloAprendizaje[numeroTupla].estilo) + '.';
            break;
        case "DIVERGENTE":
            document.getElementById('mensaje1').style.color = "red";
            document.getElementById('mensaje1').innerHTML = 'Su estilo de aprendizaje es: ' + (estiloAprendizaje[numeroTupla].estilo) + '.';
            break;
    }
}

//segundo algoritmo para adivinar el origen del recinto
function adivinarOrigenRecinto(estudiantes) {
    //valor que se utilizará para comparar
    var resultado = 100000;
    //tupla que almacenará la posición más cercana 
    var numeroTupla = 0;
    //for que recorre todos los datos como parámetro de la consulta 
    //de la tabla estudiantes
    for (var i = 0; i < estudiantes.length; i++) {
        var sexoTupla = 0;
        var estiloTupla = 0;
        
        //le da parámetro de 1 para masculino
        //si es femenino es 2
        if (estudiantes[i].sexo === 'F') {
            sexoTupla = 2;
        }
        //switch para identificar el valor del estilo de aprendizaje de 1 a 4
        //se le asigna el valor a estiloTupla
        switch (estudiantes[i].estilo) {
            case 'DIVERGENTE':
                estiloTupla = 1;
                break;
            case 'CONVERGENTE':
                estiloTupla = 2;
                break;
            case 'ASIMILADOR':
                estiloTupla = 3;
                break;
            case 'ACOMODADOR':
                estiloTupla = 4;
                break;
        }
        
        //distancia euclidiana aplicada a los valores de las tuplas para definir distancia
        var sumatoria = Math.pow((estiloTupla - (parseInt(document.getElementById('estiloAprendizaje').value))), 2) + Math.pow(sexoTupla - (parseInt(document.getElementById('sexo').value)), 2) + Math.pow((parseFloat(estudiantes[i].promedio)) - (parseFloat(document.getElementById('promedio').value)), 2);
        var distancia = Math.sqrt(sumatoria);
        
        //aquí comparan para mostrar el más cercano al que entra como parámetro
        //comparando los datos de la tupla y los ingresados
        if (resultado > distancia) {
            resultado = distancia;
            numeroTupla = i;
        }               
    }
    //se imprime el recinto al que más se acerca dependiendo de las tupñas
    //la que tiene menor distancia euclidiana además de id de la tupla
    document.getElementById('mensaje2').innerHTML = 'Su recinto de origen es: ' + estudiantes[numeroTupla].recinto + ' de id ' + estudiantes[numeroTupla].id;
}

//tercer algoritmo para adivinar el sexo de un estudiante
function adivinarSexoEstudiante(estudiantes) {
    //valor que se utilizará para comparar
    var resultado = 100000;
    //tupla que almacenará la posición más cercana 
    var numeroTupla = 0;
    //for que recorre todos los datos como parámetro de la consulta 
    //de la tabla de estudiantes
    for (var i = 0; i < estudiantes.length; i++) {
        var recintoTupla = 1;
        var estiloTupla = 0;
        
        
        //se le da valor a los recintos que pertenecen las personas en las
        //tuplas si es paraíso es 1 y turrialba es 2  
        if (estudiantes[i].recinto === 'Turrialba') {
            recintoTupla = 2;
        }
        //se elige el estilo de aprendizaje y se le asigna un valor
        //de 1 a 4
        switch (estudiantes[i].estilo) {
            case 'DIVERGENTE':
                estiloTupla = 1;
                break;
            case 'CONVERGENTE':
                estiloTupla = 2;
                break;
            case 'ASIMILADOR':
                estiloTupla = 3;
                break;
            case 'ACOMODADOR':
                estiloTupla = 4;
                break;
        }
                        
        //distancia euclidiana aplicada a los valores de las tuplas para definir distancia
        var sumatoria = Math.pow((estiloTupla - (parseInt(document.getElementById('estilo').value))), 2) + Math.pow(recintoTupla - (parseInt(document.getElementById('recinto').value)), 2) + Math.pow((parseFloat(estudiantes[i].promedio)) - (parseFloat(document.getElementById('promedio').value)), 2);
        var distancia = Math.sqrt(sumatoria);
        
        //aquí comparan para mostrar el más cercano al que entra como parámetro
        //comparando los datos de la tupla y los ingresados
        if (resultado > distancia) {
            resultado = distancia;
            numeroTupla = i;
        }               
    }
    
    //if para mostrar el sexo en la pantalla dependiendo de la tupla
    if(estudiantes[numeroTupla].sexo === 'M')
        document.getElementById('mensaje3').innerHTML = 'Su sexo es: Masculino y el número de tupla es: '+estudiantes[numeroTupla].id+'.';
    else
        document.getElementById('mensaje3').innerHTML = 'Su sexo es: Femenino y el número de tupla es: '+estudiantes[numeroTupla].id+'.';
}

//cuarto algoritmo para adivinar estilo de aprendizaje 
//de un estudiante por medio de distancia euclidiana
function adivinarEstiloAprendizaje(estudiantes) {
    //valor que se utilizará para comparar
    var resultado = 100000;
    //tupla que almacenará la posición más cercana 
    var numeroTupla = 0;
    //for que recorre todos los datos como parámetro de la consulta 
    //de la tabla estudiantes
    for (var i = 0; i < estudiantes.length; i++) {
        var recintoTupla = 1;
        var sexoTupla = 1;
        
        //se le da valor a los recintos que pertenecen las personas en las
        //tuplas si es paraíso es 1 y turrialba es 2  

        if (estudiantes[i].recinto === 'Turrialba') {
            recintoTupla = 2;
        }
        //le da parámetro de 1 para masculino
        //si es femenino es 2
        if (estudiantes[i].sexo === 'F') {
            sexoTupla = 2;
        }
        //distancia euclidiana aplicada a los valores de las tuplas para definir distancia
        var sumatoria = Math.pow((sexoTupla - (parseInt(document.getElementById('sexo').value))), 2) + Math.pow(recintoTupla - (parseInt(document.getElementById('recinto').value)), 2) + 
                Math.pow((parseFloat(estudiantes[i].promedio)) - (parseFloat(document.getElementById('promedio').value)), 2);
        var distancia = Math.sqrt(sumatoria);
        
        //aquí comparan para mostrar el más cercano al que entra como parámetro
        //comparando los datos de la tupla y los ingresados
        if (resultado > distancia) {
            resultado = distancia;
            numeroTupla = i;
        }
    }
    //select para cambiar el color y mostrar 
    //el estilo de aprendizaje del estudiante
    switch (estudiantes[numeroTupla].estilo) {
        case "ACOMODADOR":
            document.getElementById('mensaje4').style.color = "orange";
            document.getElementById('mensaje4').innerHTML = 'Su estilo de aprendizaje es: ' + (estudiantes[numeroTupla].estilo) + ' en la posición '+estudiantes[numeroTupla].id+'.';
            break;
        case "CONVERGENTE":
            document.getElementById('mensaje4').style.color = "blue";
            document.getElementById('mensaje4').innerHTML = 'Su estilo de aprendizaje es: ' + (estudiantes[numeroTupla].estilo) + ' en la posición '+estudiantes[numeroTupla].id+'.';
            break;
        case "ASIMILADOR":
            document.getElementById('mensaje4').style.color = "green";
            document.getElementById('mensaje4').innerHTML = 'Su estilo de aprendizaje es: ' + (estudiantes[numeroTupla].estilo) + ' en la posición '+estudiantes[numeroTupla].id+'.';
            break;
        case "DIVERGENTE":
            document.getElementById('mensaje4').style.color = "red";
            document.getElementById('mensaje4').innerHTML = 'Su estilo de aprendizaje es: ' + (estudiantes[numeroTupla].estilo) + ' en la posición '+estudiantes[numeroTupla].id+'.';
            break;
    }
}

//quinto algoritmo para determinar el tipo de profesor 
//por medio de distancia euclidiana
function determinarTipoProfesor(profesores) {
    //valor que se utilizará para comparar
    var resultado = 100000;
    //tupla que almacenará la posición más cercana 
    var numeroTupla = 0;
    //for que recorre todos los datos como parámetro de la consulta 
    //de la tabla profesores
    for (var i = 0; i < profesores.length; i++) {
        //variables utilizadas para determinar los valores finales de
        //cada uno de los valores de la consulta cambiandolos por números
        var generoTupla, autoEvaluacionTupla, disciplinaTupla,
                pcTupla, habWebTupla, expWebTupla = 0;
        
        //se proporciona un número dependiendo del sexo del profesor
        //o si no quiere mostrarlo
        switch(profesores[i].b){
            case "F": 
                generoTupla = 1;
                break;
            case "M": 
                generoTupla = 2;
                break;
            case "NA": 
                generoTupla = 3;
                break;
        }
        //se proporciona un número dependiendo de la autoEvalución del profesor
        //de 1 a 3
        switch(profesores[i].c){
            case "B": 
                autoEvaluacionTupla = 1;
                break;
            case "I": 
                autoEvaluacionTupla = 2;
                break;
            case "A": 
                autoEvaluacionTupla = 3;
                break;
        }
        //se proporciona un número dependiendo de la disciplina del profesor
        //desde 1 a 3
        switch(profesores[i].e){
            case "DM": 
                disciplinaTupla = 1;
                break;
            case "ND": 
                disciplinaTupla = 2;
                break;
            case "o": 
                disciplinaTupla = 3;
                break;
        } 
        
        //se proporciona un número dependiendo de las habilidades con la computadora
        //del profesor de 1 a 3
        switch(profesores[i].f){
            case "L": 
                pcTupla = 1;
                break;
            case "A": 
                pcTupla = 2;
                break;
            case "H": 
                pcTupla = 3;
                break;
        }
        
        //se proporciona un número dependiendo de la experiencia 
        //utilizando tecnologías web para enseñanza del profesor
        //de 1 a 3
        switch(profesores[i].g){
            case "N": 
                habWebTupla = 1;
                break;
            case "S": 
                habWebTupla = 2;
                break;
            case "O": 
                habWebTupla = 3;
                break;
        }
        
        //se proporciona un número dependiendo de la experiencia 
        //del profesor para utilizar páginas web para enseñanza del profesor
        //de 1 a 3
        switch(profesores[i].h){
            case "N": 
                expWebTupla = 1;
                break;
            case "S": 
                expWebTupla = 2;
                break;
            case "O": 
                expWebTupla = 3;
                break;
        } 
        //distancia euclidiana aplicada a los valores de las tuplas para definir distancia
        var sumatoria = Math.pow(profesores[i].a - (parseInt(document.getElementById('edad').value)), 2) + Math.pow(generoTupla - (parseInt(document.getElementById('genero').value)), 2) + 
            Math.pow(autoEvaluacionTupla - (parseInt(document.getElementById('autoevaluacion').value)), 2) + Math.pow(profesores[i].d - (parseInt(document.getElementById('numeroVeces').value)), 2) +
            Math.pow(disciplinaTupla - (parseInt(document.getElementById('disciplina').value)), 2) + Math.pow(pcTupla - (parseInt(document.getElementById('habilidadPC').value)), 2) +
            Math.pow(habWebTupla - (parseInt(document.getElementById('habilidadWeb').value)), 2) + Math.pow(expWebTupla - (parseInt(document.getElementById('experienciaWeb').value)), 2);
        var distancia = Math.sqrt(sumatoria);
        
        //aquí comparan para mostrar el más cercano al que entra como parámetro
        //comparando los datos de la tupla y los ingresados
        if (resultado > distancia) {
            resultado = distancia;
            numeroTupla = i;
        }
    }
    //salida en pantalla del tipo de profesor
    document.getElementById('mensaje5').innerHTML = 'El profesor es de tipo ' + profesores[numeroTupla].clase + ' en la posición '+profesores[numeroTupla].id+'.';
}

//sexto algoritmo para determinar la clasificación de redes (clases A o B)
//por medio de distancia euclidiana
function determinarClasificacion(redes) {
    //valor que se utilizará para comparar
    var resultado = 100000;
    //tupla que almacenará la posición más cercana 
    var numeroTupla = 0;
    //for que recorre todos los datos como parámetro de la consulta 
    //de la tabla redes
    for (var i = 0; i < redes.length; i++) {
        var capacidadTupla = 1;
        var costoTupla = 1;
        
        //se proporciona un número dependiendo de la capacidad de la red
        //de 1 a 3
        switch(redes[i].capacidad){
            case "Low": capacidadTupla = 1;
                break;
            case "Medium": capacidadTupla = 2;
                break;
            case "High": capacidadTupla = 3;
                break;
        }
        
        //se proporciona un número dependiendo de la costo de la red
        //de 1 a 3
        switch(redes[i].costo){
            case "Low": costoTupla = 1;
                break;
            case "Medium": costoTupla = 2;
                break;
            case "High": costoTupla = 3;
                break;
        }
        
        //distancia euclidiana aplicada a los valores de las tuplas para definir distancia
        var sumatoria = Math.pow(costoTupla - (parseInt(document.getElementById('costo').value)), 2) + Math.pow(capacidadTupla - (parseInt(document.getElementById('capacidad').value)), 2) + 
                Math.pow(redes[i].fiabilidad - (parseInt(document.getElementById('confiabilidad').value)), 2) + Math.pow(redes[i].numeroEnlaces - (parseInt(document.getElementById('numeroEnlaces').value)), 2);
        var distancia = Math.sqrt(sumatoria);
        
        //aquí comparan para mostrar el más cercano al que entra como parámetro
        //comparando los datos de la tupla y los ingresados
        if (resultado > distancia) {
            resultado = distancia;
            numeroTupla = i;
        }
    }
    //salida en pantalla de la clasificación de redes
    document.getElementById('mensaje6').innerHTML = 'Basado en los parámetros la red se clasifica en: ' + redes[numeroTupla].clase + ' en la posición ' +redes[numeroTupla].id +'.';
}


