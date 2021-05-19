<?php

class ControladorMapa{
    
    private $vista;
    
    public function __construct() {
        $this->vista=new Vista();
    } // constructor
    
    public function vistaMapa(){
        $this->vista->show("vistaMapa.php", null);
    }
            
}    

