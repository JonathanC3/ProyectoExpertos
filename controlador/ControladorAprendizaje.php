<?php

class ControladorAprendizaje {

    private $vista;
    
    public function __construct() {
        $this->vista=new Vista();
    } // constructor
    function estiloAprendizaje() {
        require 'modelo/ModeloAprendizaje.php';
        require 'publico/dominio/Estilo.php';

        $modeloAprendizaje = new ModeloAprendizaje();
        $estilosAprendizaje = $modeloAprendizaje->obtenerTodosLosEstilosAprendizaje();
        $this->vista->show("aprendizajeVista.php", $estilosAprendizaje);
    }        
}


