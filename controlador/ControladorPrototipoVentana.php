<?php

class ControladorDestinos{
    
    private $vista;
    
    public function __construct() {
        $this->vista=new Vista();
    } // constructor
    
    public function vistaDestinos(){
        $this->vista->show("vistaDestinos.php", null);
    }
    public function buscarDestino(){
        //require 'modelo/ModeloAdmin.php';
        $estadia=$_POST['estadia'];
        $camino=$_POST['camino'];
        $precios=$_POST['precios'];
        $cantidad=$_POST['cantidad'];
        /*$provincia = $_POST['provin'];
        $canton = $_POST['canto'];
        $distrito = $_POST['distri'];
        $otrassenas = $_POST['otrasenas'];*
         * 
         */
        $var=[];
        array_push($var, $estadia);
        array_push($var, $camino);
        array_push($var, $precios);
        $salida='estadia '.$estadia.' tipo camino '.$camino.' precios '.$precios.' '.$cantidad;
        $this->vista->show("vistaDestinos.php", $salida);
    }
}   
