<?php
class Estilo {

        private $id;
        private $recinto;
        private $ca;
        private $ec;
        private $ea;
        private $or;
        private $ca_ce;
        private $ea_or;
        private $estilo;

        
        function Estilo() {
            $this->id = 0;
            $this->recinto = '';
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

        function getRecinto() {
            return $this->recinto;
        }

        function getCA() {
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

        function setRecinto($recinto) {
            $this->recinto = $recinto;
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
?>
