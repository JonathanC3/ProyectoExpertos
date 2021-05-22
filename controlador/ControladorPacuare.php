<?php

class ControladorPacuare{
    
    private $vista;
    
    public function __construct() {
        $this->vista=new Vista();
    } // constructor
    
    public function VistaPacuareLodge(){
        $this->vista->show("vistaPacuareLodge.php", null);
    }
            
} 