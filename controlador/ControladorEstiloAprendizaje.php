<?php
class ControladorEstiloAprendizaje {

    private $vista;
    
    public function __construct() {
        $this->vista=new Vista();
    } // constructor
    function adivinarEstiloAprendizaje() {
        require 'modelo/ModeloEstudiante.php';
        require 'publico/dominio/Estudiante.php';

        $ModeloEstudiante = new ModeloEstudiante();
        $estudiantes = $ModeloEstudiante->obtenerTodosLosEstudiantes();
        $this->vista->show("aprendizajeEstudiante.php", $estudiantes);
    }
        
}

