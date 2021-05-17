<?php

class ModeloEstudiante {

    protected $bd;
    
    public function __construct(){
        require 'configuraciones/SPDO.php';
        $this->bd= SPDO::singleton();        
    } // constructor
    public function obtenerTodosLosEstudiantes() {
        $query = $this->bd->prepare("SELECT * FROM estudiante");
        $query->execute();
        $data = $query->fetchAll(PDO::FETCH_ASSOC);
        $query->closeCursor();
        $rows = count($data);
        $estudiantesArray = [];

        for ($i = 0; $i < $rows; $i++) {
            $estudiante = new Estudiante();
            $estudiante->setId($data[$i]["estudiante_id"]);
            $estudiante->setSexo($data[$i]["estudiante_sexo"]);
            $estudiante->setRecinto($data[$i]["estudio_recinto"]);
            $estudiante->setPromedio($data[$i]["estudiante_promedio"]);
            $estudiante->setCA($data[$i]["estudiante_CA"]);
            $estudiante->setEC($data[$i]["estudiante_EC"]);
            $estudiante->setEA($data[$i]["estudiante_EA"]);
            $estudiante->setOR($data[$i]["estudiante_OR"]);
            $estudiante->setCA_CE($data[$i]["estudiante_CA_CE"]);
            $estudiante->setEA_OR($data[$i]["estudiante_EA_OR"]);
            $estudiante->setEstilo($data[$i]["estudiante_estilo"]);

            array_push($estudiantesArray, $estudiante->getJsonData());
        }
        
        return $estudiantesArray;
    }

}