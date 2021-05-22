<?php
class ControladorPrototipoVentana {

    private $vista;
    
    public function __construct() {
        $this->vista=new Vista();
    } // constructor
    function PrototipoVentana() {
            require 'modelo/ModeloProfesor.php';
            require 'publico/dominio/Profesor.php';

           /* $modeloProfesor = new ControladorTipoProfesor();
            $profesores = $modeloProfesor->obtenerProfesores();
            $this->vista->show("tipoProfesor.php", $profesores);*/
    }       
}