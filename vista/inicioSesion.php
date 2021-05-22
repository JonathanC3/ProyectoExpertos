
<?php 
  include_once 'publico/header.php'; 
?> 

<div class="container"  style="margin-top:30px" >
  <br>
  <div class="row">
    <div class="col">
      <h2>Ingrese las credenciales</h2>
      <form style="color: black" method="post" action="?controlador=Admin&accion=inicioSesion">
        <div  class="form-group">
          <label for="correo" >Correo de Usuario:</label>
          <input type="text" id="correo" name="correo" placeholder="Correo" required="true"/>
        </div>
        <div  class="form-group">
          <label for="contrasenna">Contraseña:</label>
          <input type="password" id="contrasenna" name="contrasenna" placeholder="contrasenna" required="true"/>
          </div>
          <div  class="form-group">
              <input type="submit" class="btn btn-secondary"> 
          </div>
        <span name="resultado" id="resultado"></span>
      </form>
    </div>
  </div>
</div><br><br><br>

<?php
  include_once 'publico/footer.php';
?>