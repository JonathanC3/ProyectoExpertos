<?php
class Estudiante {
    private $id;
    private $sexo;
    private $recinto;
    private $promedio;
    private $ca;
    private $ec;
    private $ea;
    private $or;
    private $ca_ce;
    private $ea_or;
    private $estilo;
        
    //constructor

    function Estudiante() {
        $this->id = 0;
        $this->sexo = '';
        $this->recinto = '';
        $this->promedio = 0.0;
        $this->ca = 0;
        $this->ec = 0;
        $this->ea = 0;
        $this->or = 0;
        $this->ca_ce = 0;
        $this->ea_or = 0;
    }

    function getId() {
        return $this->id;
    }

    function getSexo(){
        return $this->sexo;
    }

    function getRecinto() {
        return $this->recinto;
    }

    function getPromedio(){
        $this->promedio;
    }

    public function getCA() {
        return $this->ca;
    }

    function getEC() {
        return $this->ec;
    }

    function getEA() {
        return $this->ea;
    }

    function getOR() {
        return $this->or;
    }

    function getCA_CE() {
        return $this->ca_ce;
    }

    function getEA_OR() {
        return $this->ea_or;
    }

    function getEstilo() {
        return $this->estilo;
    }

    function setId($id) {
        $this->id = $id;
    }

    function setSexo($sexo){
        $this->sexo = $sexo;
    }

    function setRecinto($recinto) {
        $this->recinto = $recinto;
    }

    function setPromedio($promedio){
        $this->promedio = $promedio;
    }

    function setCA($ca) {
        $this->ca = $ca;
    }

    function setEC($ec) {
        $this->ec = $ec;
    }

    function setEA($ea) {
        $this->ea = $ea;
    }

    function setOR($or) {
        $this->or = $or;
    }

    function setCA_CE($ca_ce) {
        $this->ca_ce = $ca_ce;
    }

    function setEA_OR($ea_or) {
        $this->ea_or = $ea_or;
    }

    function setEstilo($estilo) {
        $this->estilo = $estilo;
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

