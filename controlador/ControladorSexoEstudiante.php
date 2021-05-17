<?php
class ControladorSexoEstudiante {

    private $vista;
    
    public function __construct() {
        $this->vista=new Vista();
    } // constructor
    function adivinarSexoEstudiante() {
        require 'modelo/ModeloEstudiante.php';
        require 'publico/dominio/Estudiante.php';

        $ModeloEstudiante = new ModeloEstudiante();
        $estudiantes = $ModeloEstudiante->obtenerTodosLosEstudiantes();
        $this->vista->show("sexoEstudiante.php", $estudiantes);
    }
}

