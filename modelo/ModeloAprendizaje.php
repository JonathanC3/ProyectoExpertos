<?php

class ModeloAprendizaje {

    protected $bd;
    
    public function __construct(){
        require 'configuraciones/SPDO.php';
        $this->bd= SPDO::singleton();        
    } // constructor
    public function obtenerTodosLosEstilosAprendizaje() {
        $sql = "SELECT * FROM recinto_estilo";
        $query = $this->bd->prepare($sql);
        $query->execute();
        $data = $query->fetchAll(PDO::FETCH_ASSOC);
        $query->closeCursor();
        $rows = count($data);
        $aprendizajeArray = [];

        for ($i = 0; $i < $rows; $i++) {
            $aprendizaje = new Estilo();
            $aprendizaje->setId($data[$i]["recinto_estilo_id"]);
            $aprendizaje->setRecinto($data[$i]["recinto_estilo_recinto"]);
            $aprendizaje->setCA($data[$i]["recinto_estilo_CA"]);
            $aprendizaje->setEC($data[$i]["recinto_estilo_EC"]);
            $aprendizaje->setEA($data[$i]["recinto_estilo_EA"]);
            $aprendizaje->setOR($data[$i]["recinto_estilo_OR"]);
            $aprendizaje->setCA_CE($data[$i]["recinto_estilo_CA_CE"]);
            $aprendizaje->setEA_OR($data[$i]["recinto_estilo_EA_OR"]);
            $aprendizaje->setEstilo($data[$i]["recinto_estilo_aprendizaje"]);

            array_push($aprendizajeArray, $aprendizaje->getJsonData());
        }/* Fin del for i, que inserta en un arreglo todos los registros de los 
        estilos de aprendizaje que existen en la base de datos. */
        
        return $aprendizajeArray;
    }/* Fin del la función obtenerTodosLosEstilosAprendizaje, que retorna el arreglo
    con todos registros de los estilos de aprendizaje que existen en su respectiva
    tabla de la base de datos. */
}//Fin de la clase EstiloAprendizajeModel


