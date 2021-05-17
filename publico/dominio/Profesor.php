<?php

class Profesor {
    private $id;
    private $a;
    private $b;
    private $c;
    private $d;
    private $e;
    private $f;
    private $g;
    private $h;
    private $clase;
    
    function Profesor() {
        $this->id = 0;
        $this->a = '';
        $this->b = '';
        $this->c = '';
        $this->d = '';
        $this->e = '';
        $this->f = '';
        $this->g = '';
        $this->h = '';
        $this->clase = '';
    }
    
    function getId() {
        return $this->id;
    }

    function getA() {
        return $this->a;
    }

    function getB() {
        return $this->b;
    }

    function getC() {
        return $this->c;
    }

    function getD() {
        return $this->d;
    }

    function getE() {
        return $this->e;
    }

    function getF() {
        return $this->f;
    }

    function getG() {
        return $this->g;
    }

    function getH() {
        return $this->h;
    }

    function getClase(){
        return $this->clase;
    }

    function setId($id) {
        $this->id = $id;
    }

    function setA($a) {
        $this->a = $a;
    }

    function setB($b) {
        $this->b = $b;
    }

    function setC($c) {
        $this->c = $c;
    }

    function setD($d) {
        $this->d = $d;
    }

    function setE($e) {
        $this->e = $e;
    }

    function setF($f) {
        $this->f = $f;
    }

    function setG($g) {
        $this->g = $g;
    }

    function setH($h) {
        $this->h = $h;
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

