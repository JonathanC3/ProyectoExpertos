<?php

class Redes {
    private $id;
    private $fiabilidad;
    private $numeroEnlaces;
    private $capacidad;
    private $costo;
    private $clase;
    
    function Red() {
            $this->id = 0;
            $this->fiabilidad = 0;
            $this->numeroEnlaces = 0;
            $this->capacidad = '';
            $this->costo = '';
            $this->clase = '';
    }
    function getId() {
        return $this->id;
    }

    function getFiabilidad(){
        return $this->fiabilidad;
    }

    function getNumeroEnlaces() {
        return $this->numeroEnlaces;
    }

    function getCapacidad(){
        $this->capacidad;
    }

    public function getCosto() {
        return $this->costo;
    }

    function getClase() {
        return $this->clase;
    }

    function setId($id) {
        $this->id = $id;
    }

    function setFiabilidad($fiabilidad){
        $this->fiabilidad = $fiabilidad;
    }

    function setNumeroEnlaces($numeroEnlaces) {
        $this->numeroEnlaces = $numeroEnlaces;
    }

    function setCapacidad($capacidad){
        $this->capacidad = $capacidad;
    }

    function setCosto($costo) {
        $this->costo = $costo;
    }

    function setClase($clase) {
        $this->clase = $clase;
    }

    //convierte en un json el objeto
    function getJsonData() {
        $var = get_object_vars($this);
        foreach ($var as &$value) {
            if (is_object($value) && method_exists($value, 'getJsonData')) {
                $value = $value->getJsonData();
            }
        }
        return $var;
    }
}

