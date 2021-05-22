<?php
    include_once 'publico/header.php';
    
?>
  <body>
     <div class="container">
        <div class="row text-center login-page">
	   <div class="col-md-12 login-form">
	      <form method="post"  action="?controlador=PorDefecto&accion=iniciarSesion"> 			
	         <div class="row">
		    <div class="col-md-12 login-form-header">
		       <p class="login-form-font-header">Login <p>
		    </div>
		</div>
		<div class="row">
		   <div class="col-md-12 login-from-row">
		      <input name="usuario" type="text" placeholder="Usuario" required/>
		   </div>
		</div>
		<div class="row">
		   <div class="col-md-12 login-from-row">
		      <input name="password" type="password" placeholder="Contraseña" required/>
		   </div>
		</div>
		<div class="row">
		   <div class="col-md-12 login-from-row">
		      <button class="btn btn-info" type="submit">Ingresar</button>
		   </div>
		</div>
	    </form>
	</div>
     </div>
  </div>
</html>