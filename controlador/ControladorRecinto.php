<?php
class ControladorRecinto {

    private $vista;
    
    public function __construct() {
        $this->vista=new Vista();
    } // constructor
    function origenRecinto() {
        require 'modelo/ModeloEstudiante.php';
        require 'publico/dominio/Estudiante.php';

        $ModeloEstudiante = new ModeloEstudiante();
        $estudiantes = $ModeloEstudiante->obtenerTodosLosEstudiantes();
        $this->vista->show("origenRecinto.php", $estudiantes);
    }
}