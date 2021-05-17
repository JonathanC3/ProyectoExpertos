<?php

class ControladorRedes {

    private $vista;
    
    public function __construct() {
        $this->vista=new Vista();
    } // constructor
    public function clasificacionRedes(){
        require 'modelo/ModeloRedes.php';
        require 'publico/dominio/Redes.php';

        $ModeloRedes = new ModeloRedes();
        $redes = $ModeloRedes->obtenerRedes();
        $this->vista->show("clasificacionRedes.php", $redes);
    }
}

