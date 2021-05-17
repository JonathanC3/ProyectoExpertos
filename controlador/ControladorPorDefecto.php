<?php

class ControladorPorDefecto{
    
    private $view;
    
    public function __construct() {
        $this->view=new Vista();
    } // constructor
    
    public function accionpordefecto(){
        $this->view->show("vistaIndex.php", null);
               
    } // acciondefault
    
} // fin clase

?>

