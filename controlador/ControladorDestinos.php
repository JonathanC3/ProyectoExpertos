<?php

class ControladorDestinos{
    
    private $vista;
    
    public function __construct() {
        $this->vista=new Vista();
    } // constructor
    
    public function vistaDestinos(){
        $this->vista->show("vistaDestinos.php", null);
    }
    public function buscarDestino(){
        //require 'modelo/ModeloAdmin.php';
        $estadia=$_POST['estadia'];
        $camino=$_POST['camino'];
        $precios=$_POST['precios'];
        $cantidad=$_POST['cantidad'];
        
        /*$provincia = $_POST['provin'];
        $canton = $_POST['canto'];
        $distrito = $_POST['distri'];
        $otrassenas = $_POST['otrasenas'];*
         * 
         */
        
        array_push($var, $estadia);
        array_push($var, $camino);
        array_push($var, $precios);
        $salida='estadia '.$estadia.' tipo camino '.$camino.' precios '.$precios.' '.$cantidad;
        $this->vista->show("vistaDestinos.php", $salida);
    }
    public function buscarDestinos(){
        //require 'modelo/ModeloAdmin.php';
        $estadia= intval($_POST['estadia']);
        $camino=intval($_POST['camino']);
        $precios=intval($_POST['precios']);
        $cantidad=$_POST['cantidad'];
        $valores=[];
        $trillizas=array("estadia" => 1, "camino" => 2, "precios" => 1, "cantidad" => 2);
        $guayabo=array("estadia" => 2, "camino" => 1, "precios" => 2, "cantidad" => 1);
        $pacuare=array("estadia" => 3, "camino" => 2, "precios" => 3, "cantidad" => 3);
        //$guayabo=[2, 1, 2, 4];
        //$pacuare=[3, 2, 3, 2];
        
        array_push($valores, $trillizas);
        array_push($valores, $guayabo);
        array_push($valores, $pacuare);
        /*
        if ($estadia==1 && $camino==2 && $precios==1 && $cantidad>6) {
            $this->vista->show("vistaTrillizas.php", null);
        } elseif ($estadia==2 && $camino==2 && $precios==2 && $cantidad>3) {
            $this->vista->show("vistaTrillizas.php", null);
        } elseif ($estadia==2 && $camino==1 && $precios==2 && $cantidad>3) {
            $this->vista->show("vistaGuayabo.php", null);
        } elseif ($estadia==3 && $camino==2 && $precios==3 && $cantidad<=3) {
            $this->vista->show("vistaPacuareLodge.php", null);
        } else {
            $this->vista->show("inicioSesion.php", null);
        }*/
        $coordenadas=[];
        // tri 9.975332518595632, -83.70545242549002
        //gua 9.99360920210156, -83.69345693916657
        //pacu 9.934619659382406, -83.69536058842579
        if($this->distanciaEuclidiana($valores, $estadia, $camino, $precios, $cantidad)==0){
            array_push($coordenadas, 9.975332518595632);
            array_push($coordenadas, -83.70545242549002);
            $this->vista->show("vistaTrillizas.php", $coordenadas);
        } elseif ($this->distanciaEuclidiana($valores, $estadia, $camino, $precios, $cantidad)==1) {
            array_push($coordenadas, 9.99360920210156);
            array_push($coordenadas, -83.69345693916657);
            $this->vista->show("vistaGuayabo.php", $coordenadas);
        } else {
            array_push($coordenadas, 9.934619659382406);
            array_push($coordenadas, -83.69536058842579);
            $this->vista->show("vistaPacuareLodge.php", $coordenadas);
        }
         
        
    }
    public function distanciaEuclidiana($destinos, $estadia, $camino, $precios, $cantidad){
        $resultado=100000;
        $numeroReg=0;
        for ($i = 0; $i < count($destinos); $i++) {
            //sumatoria de las filas que toma en cuenta el algoritmo, 
            //luego de buscar la diferencia entre la original y la que entra como parámetro
            // luego elevadas al cuadrado
            $sumatoria= pow($destinos[$i]["estadia"]-$estadia, 2)+pow($destinos[$i]["camino"]-$camino, 2)+pow($destinos[$i]["precios"]-$estadia, 2)+pow($destinos[$i]["cantidad"]-$cantidad, 2);
            //raíz cuadrada de la sumatoria de todos los valores
            $distancia= sqrt($sumatoria);
            //aquí comparan para mostrar el más cercano al que entra como parámetro
            if ($resultado>$distancia) {
                $resultado=$distancia;
                $numeroReg=$i;
            }
             
        }
        //muestra el array correcto
        return $numeroReg;
    }
}   
