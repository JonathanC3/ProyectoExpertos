<?php
include_once 'publico/header.php';
?>
<script>
    //llena un array con los estudiantes de la consulta
    var estudiantes = <?php echo json_encode($vars); ?>;
</script>

<div class="container text-center">
    <div class="col-sm-12">
        <h2>Adivinar estilo de Aprendizaje del estudiante</h2>
    </div>
    <div class="row">
        <div class="col-sm-4">    
            <h4>Recinto:</h4>
            <select name="recinto" id="recinto" class="form-control">
                <option value="1">Paraíso</option>
                <option value="2">Turrialba</option>
            </select>
            <br><br><br>
        </div>
        <div class="col-sm-4">
            <h4>Último promedio de matrícula:</h4>
            <input type="number" id="promedio" name="promedio" step=".01" class="form-control">
            <br><br>
        </div>
        <div class="col-sm-4">    
            <h4>Sexo:</h4>
            <select name="sexo" id="sexo" class="form-control">
                <option value="1">Masculino</option>
                <option value="2">Femenino</option>
            </select>
            <br><br><br>
        </div>
    </div>
    <div class="row">
        <div class="col-sm-12">
            <button class="btn btn-dark" onclick="adivinarEstiloAprendizaje(estudiantes);">Adivinar</button>
            <br><br><br>
            <h4 id="mensaje4"></h4>
        </div>
    </div>
</div>


<?php
  include_once 'publico/footer.php';
?>

