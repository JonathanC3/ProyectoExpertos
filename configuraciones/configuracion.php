<?php
// configuration
    require 'configuraciones/Config.php';
    $config=Config::singleton();
    $config->set('carpetaControlador', 'controlador/');
    $config->set('carpetaModelo', 'modelo/');
    $config->set('carpetaVista', 'vista/');
    
    $config->set('dbhost', '163.178.107.10');
    $config->set('dbname', 'if_7103_b41654');
    $config->set('dbuser', 'laboratorios');
    $config->set('dbpass', 'KmZpo.2796');
    $config->set('dbport', '3306');
    /*
    $config->set('dbhost', '127.0.0.1');
    $config->set('dbname', 'if_7103_b41654');
    $config->set('dbuser', 'admin');
    $config->set('dbpass', 'Jon@8556');
    $config->set('dbport', '3309');
    */
?>