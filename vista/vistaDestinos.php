<?php
    include_once 'publico/header.php';  
?>
<div class="container text-center">
    <h2>Buscar Destino</h2>
    <form style="color: black" method="post" action="?controlador=Destinos&accion=buscarDestino">
            <div class="form-group">
                <label for="estadia">Tiempo de estadía</label>
                <select id="estadia" name="estadia" required="true">
                    <option value="De un día para otro">De un día para otro</option>
                    <option value="Tres días">Tres días</option>
                    <option value="Una semana">Una semana</option>
                </select>
            </div>
            <div class="form-group">
                <label for="camino">Tipo de Camino</label>
                <select id="camino" name="camino" required="true">
                    <option value="Asfalto">Asfalto</option>
                    <option value="Lastre">Lastre</option>
                </select>
            </div>
            <div class="form-group">
                <label for="precios">Rango de Precios</label>
                <select id="precios" name="precios" required="true">
                    <option value="Opción Económica">Opción Económica</option>
                    <option value="Opción Estándar">Opción Estándar</option>
                    <option value="Opción Premium">Opción Premium</option>
                </select>
            </div>
            <div class="form-group">
                    <label for="precios">Cantidad de Personas</label>
                    <input type="number" id="cantidad" name="cantidad"required="true"/>
            </div>
            <div class="form-group">
                <button type="submit"class="btn btn-primary" value="buscar" method="post">Determinar el destino</button>
            </div>
    </form> 
    <h4 id="mensaje2"><?php echo $vars ?></h4>
    <button onclick="getLocation()">Try It</button>

    <p id="demo"></p>
</div>
<?php
    include_once 'publico/footer.php';
?>
