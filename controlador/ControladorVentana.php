<?php

class ControladorVentana{
    
    private $vista;
    
    public function __construct() {
        $this->vista=new Vista();
    } // constructor
    
    public function PrototipoVentana(){
        $this->vista->show("vistaGuayabo.php", null);
    }
            
}   
