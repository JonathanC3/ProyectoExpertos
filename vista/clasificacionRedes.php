<?php
include_once 'publico/header.php';
?>
<script>
     //llena un array con las redes de la consulta
    var redes = <?php echo json_encode($vars); ?>;
</script>
<div class="container text-center">
    <div class="col-sm-12">
        <h2>Determinar la Clasificación de Redes (A o B)</h2>
    </div>
    <div class="row">
        <div class="col-sm-3">
            <h4>Fiabilidad de la red</h4>
            <input type="number" id="confiabilidad" class="form-control" min="2" max="5" placeholder="de 2 a 5" required="">
        </div>
        <div class="col-sm-3">
            <h4>Número de enlaces:</h4>
            <input type="number" id="numeroEnlaces" class="form-control" min="7" max="20" placeholder="de 7 a 20" required="">
        </div>
        <div class="col-sm-3">    
            <h4>Capacidad de Red:</h4>
            <select name="capacidad" id="capacidad" class="form-control">
                <option value="1">Bajo</option>
                <option value="2">Medio</option>
                <option value="3">Alto</option>
            </select>
        </div>
        <div class="col-sm-3">    
            <h4>Costo de Red:</h4>
            <select name="costo" id="costo" class="form-control">
                <option value="1">Bajo</option>
                <option value="2">Medio</option>
                <option value="3">Alto</option>
            </select>
            <br><br><br>
        </div>
    </div>
    <div class="row">
        <div class="col-sm-12">
            <button class="btn btn-primary" onclick="determinarClasificacion(redes);" class="form-control">Determinar Red</button>
            <br><br><br>
            <h4 id="mensaje6"></h4>
        </div>
    </div>
</div>

<?php
  include_once 'publico/footer.php';
?>
