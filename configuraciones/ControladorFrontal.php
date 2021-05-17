<?php

class ControladorFrontal {
    static function main(){
        require 'configuraciones/Vista.php';
        require 'configuraciones/configuracion.php';
        
        if(!empty($_GET['controlador']))
            $nombreControlador='Controlador'.$_GET['controlador'];
        else    
            $nombreControlador='ControladorPorDefecto';
        
        if(!empty($_GET['accion']))
            $nombreAccion=$_GET['accion'];
        else 
            $nombreAccion='accionpordefecto';
        
        $rutaControlador=$config->get('carpetaControlador').$nombreControlador.'.php';
        
        if(is_file($rutaControlador))
            require $rutaControlador;
        else
            die ('Controlador no encontrado - 404 not found');
        
        if(is_callable(array($nombreControlador,$nombreAccion))==FALSE){
            trigger_error($nombreAccion.'-> '.$nombreControlador. ' no existe', E_USER_NOTICE);
            return FALSE;
        }
        
        $controlador=new $nombreControlador();
        $controlador->$nombreAccion();
        
    } // main
} // fin clase

?>
