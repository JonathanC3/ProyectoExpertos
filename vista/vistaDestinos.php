<?php
    include_once 'publico/header.php';  
?>
<div class="container text-center">
    <h2>Buscar Destino</h2>
    <form style="color: black" method="post" action="?controlador=Destinos&accion=buscarDestinos">
            <div class="form-group">
                <label for="estadia">Tiempo de estadía</label>
                <select id="estadia" name="estadia" required="true">
                    <option value=1>De un día para otro</option>
                    <option value=2>Tres días</option>
                    <option value=3>Una semana</option>
                </select>
            </div>
            <div class="form-group">
                <label for="camino">Tipo de Camino</label>
                <select id="camino" name="camino" required="true">
                    <option value=1>Asfalto</option>
                    <option value=2>Lastre</option>
                </select>
            </div>
            <div class="form-group">
                <label for="precios">Rango de Precios</label>
                <select id="precios" name="precios" required="true">
                    <option value=1>Opción Económica</option>
                    <option value=2>Opción Estándar</option>
                    <option value=3>Opción Premium</option>
                </select>
            </div>
            <div class="form-group">
                <label for="cantidad">Cantidad de Personas</label>
                <select id="cantidad" name="cantidad" required="true">
                    <option value=1>De 1 a 2 personas</option>
                    <option value=2>De 3 a 5 personas</option>
                    <option value=3>De 5 a 8 personas</option>
                </select>
            </div>
            <div class="form-group">
                <button type="submit" class="btn btn-primary" value="buscar" method="post">Determinar el destino</button>
            </div>
            
          <h4 id="mensaje2"></h4>
        </div>
    </div>
    </form> 
    
</div>
<?php
    include_once 'publico/footer.php';
?>
