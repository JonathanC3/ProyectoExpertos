<?php
include_once 'publico/header.php';
?>
<script>
    //llena un array con los estudiantes de la consulta
    var estudiantes = <?php echo json_encode($vars); ?>;
</script>

<div class="container text-center">
    <div class="col-sm-12">
        <h2>Adivinar sexo del estudiante</h2>
    </div>
    <div class="row">
        <div class="col-sm-4">
            <h4>Estilo de aprendizaje:</h4>
            <select name="estilo" id="estilo" class="form-control">
                <option value="1">DIVERGENTE</option>
                <option value="2">CONVERGENTE</option>
                <option value="3">ASIMILADOR</option>
                <option value="4">ACOMODADOR</option>
            </select>
            <br><br>
        </div>
        <div class="col-sm-4">
            <h4>Último promedio de matrícula:</h4>
            <input type="number" id="promedio" name="promedio" step=".01" class="form-control">
            <br><br>
        </div>
        <div class="col-sm-4">    
            <h4>Recinto:</h4>
            <select name="recinto" id="recinto" class="form-control">
                <option value="1">Paraíso</option>
                <option value="2">Turrialba</option>
            </select>
            <br><br><br>
        </div>
    </div>
    <div class="row">
        <div class="col-sm-12">
            <button class="btn btn-success" onclick="adivinarSexoEstudiante(estudiantes);" class="form-control">Adivinar</button>
            <br><br><br>
            <h4 id="mensaje3"></h4>
        </div>
    </div>
</div>
	

<?php
  include_once 'publico/footer.php';
?>
