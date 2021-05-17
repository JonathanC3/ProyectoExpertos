<?php
class ControladorTipoProfesor {

    private $vista;
    
    public function __construct() {
        $this->vista=new Vista();
    } // constructor
    function determinarTipoProfesor() {
            require 'modelo/ModeloProfesor.php';
            require 'publico/dominio/Profesor.php';

            $modeloProfesor = new ModeloProfesor();
            $profesores = $modeloProfesor->obtenerProfesores();
            $this->vista->show("tipoProfesor.php", $profesores);
    }
        
}

