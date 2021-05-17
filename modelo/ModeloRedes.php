<?php

class ModeloRedes {

    protected $bd;
    
    public function __construct(){
        require 'configuraciones/SPDO.php';
        $this->bd= SPDO::singleton();        
    } // constructor
    public function obtenerRedes(){
        $query = $this->bd->prepare("SELECT * FROM redes");
        $query->execute();
        $data = $query->fetchAll(PDO::FETCH_ASSOC);
        $query->closeCursor();
        $rows = count($data);
        $redesArray = [];

        for ($i = 0; $i < $rows; $i++) {
            $Red = new Redes();
            $Red->setId($data[$i]["redes_id"]);
            $Red->setFiabilidad($data[$i]["redes_fiabilidad_r"]);
            $Red->setNumeroEnlaces($data[$i]["redes_numero_enlaces_l"]);
            $Red->setCapacidad($data[$i]["redes_capacidad_Ca"]);
            $Red->setCosto($data[$i]["redes_costo_Co"]);
            $Red->setClase($data[$i]["redes_clase"]);

            array_push($redesArray, $Red->getJsonData());
        }
        
        return $redesArray;
    }
}