<?php

class ControladorTrillizas{
    
    private $vista;
    
    public function __construct() {
        $this->vista=new Vista();
    } // constructor
    
    public function vistaTrillizas(){
        $this->vista->show("vistaTrillizas.php", null);
    }
            
}   