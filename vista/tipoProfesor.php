<?php
    include_once 'publico/header.php';
?>
<script>
    //llena un array con los profesores de la consulta
    var profesores = <?php echo json_encode($vars); ?>;
</script>
<div class="container text-center">
    <div class="col-sm-12">
        <h1>Determinar el tipo de profesor</h1>
    </div>
    <div class="row">
        <div class="col-sm-12">
            <h2>Demografía</h2>
        </div>
        <div class="col-sm-3"></div>
        <div class="col-sm-3">    
            <h3>Edad de Profesor:</h3>
            <select name="edad" id="edad" class="form-control">
                <option value="1">Menor a 31 años</option>
                <option value="2">Entre 31 y 55 años</option>
                <option value="3">Mayor de 55 años</option>
            </select>
            <br><br>
        </div>
        <div class="col-sm-3">
            <h3>Género:</h3>
            <select name="genero" id="genero" class="form-control">
                <option value="1">Femenino</option>
                <option value="2">Masculino</option>
                <option value="3">No disponible</option>
            </select>
            <br><br>
        </div>
        <div class="col-sm-3"></div>
    </div>
    <div class="row">
        <div class="col-sm-12">
            <h2>Historial</h2>
        </div>
    </div>
    <div class="row">
        <div class="col-sm-4">
            <h3>Autoevaluación o experiencia:</h3>
            <select name="autoevaluacion" id="autoevaluacion" class="form-control">
                <option value="1">Principiante</option>
                <option value="2">Intermedio</option>
                <option value="3">Avanzado</option>
            </select>
            <br><br>
        </div>
        <div class="col-sm-4">    
            <h3>Veces que ha dado ese curso:</h3>
            <select name="numeroVeces" id="numeroVeces" class="form-control">
                <option value="1">Nunca</option>
                <option value="2">De 1 a 5 veces</option>
                <option value="3">Más de 5 veces</option>
            </select>
            <br><br>
        </div>
        <div class="col-sm-4">    
            <h3>Área de especialización:</h3>
            <select name="disciplina" id="disciplina" class="form-control">
                <option value="1">Toma de decisiones</option>
                <option value="2">Diseño de redes</option>
                <option value="3">Otro</option>
            </select>
            <br><br>
        </div>
        <div class="col-sm-4">
            <h3>Habilidades para usar computadoras:</h3>
            <select name="habilidadPC" id="habilidadPC" class="form-control">
                <option value="1">Baja</option>
                <option value="2">Media</option>
                <option value="3">Alta</option>
            </select>
            <br><br>
        </div>
        <div class="col-sm-4">
            <h4>Experiencia utilizando tecnologías web para enseñanza:</h4>
            <select name="habilidadWeb" id="habilidadWeb" class="form-control">
                <option value="1">Nunca</option>
                <option value="2">Algunas veces</option>
                <option value="3">Con frecuencia</option>
            </select>
            <br><br>
        </div>
        <div class="col-sm-4">    
            <h3>Experiencia del profesor utilizando sitios web:</h3>
            <select name="experienciaWeb" id="experienciaWeb" class="form-control">
                <option value="1">Nunca</option>
                <option value="2">Algunas veces</option>
                <option value="3">Con frecuencia</option>
            </select>
            <br><br><br>
        </div>
    </div>
    <div class="row">
        <div class="col-sm-12">
            <button class="btn btn-success" onclick="determinarTipoProfesor(profesores);">Determinar tipo de Profesor</button>
            <br><br><br>
            <h4 id="mensaje5"></h4>
        </div>
    </div>
</div>

<?php
  include_once 'publico/footer.php';
?>
