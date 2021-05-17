<?php

class ModeloProfesor {

    protected $bd;
    
    public function __construct(){
        require 'configuraciones/SPDO.php';
        $this->bd= SPDO::singleton();        
    } // constructor
    
    public function obtenerProfesores(){
        $query = $this->bd->prepare("SELECT * FROM profesor");
        $query->execute();
        $data = $query->fetchAll(PDO::FETCH_ASSOC);
        $query->closeCursor();
        $rows = count($data);
        $profesorArray = [];

        for ($i = 0; $i < $rows; $i++) {
            $profesor = new Profesor();
            $profesor->setId($data[$i]["profesor_id"]);
            $profesor->setA($data[$i]["profesor_A"]);
            $profesor->setB($data[$i]["profesor_B"]);
            $profesor->setC($data[$i]["profesor_C"]);
            $profesor->setD($data[$i]["profesor_D"]);
            $profesor->setE($data[$i]["profesor_E"]);
            $profesor->setF($data[$i]["profesor_F"]);
            $profesor->setG($data[$i]["profesor_G"]);
            $profesor->setH($data[$i]["profesor_H"]);
            $profesor->setClase($data[$i]["profesor_class"]);

            array_push($profesorArray, $profesor->getJsonData());
        }
        
        return $profesorArray;
    }
}