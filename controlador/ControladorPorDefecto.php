<?php

class ControladorPorDefecto{
    
    private $view;
    
    public function __construct() {
        $this->view=new Vista();
    } // constructor
    
    public function accionpordefecto(){
        $this->view->show("vistaIndex.php", null);
               
    } // acciondefault
    public function vistaCreditos(){
        $this->view->show("vistaCreditos.php", null);
    }
    public function vistaLogin(){
        $this->view->show("vistaLogin.php", null);
               
    } 
    public function iniciarSesion(){
        $this->view->show("vistaIndex.php", null);
               
    }
    
} // fin clase

?>

