<!DOCTYPE html>
<html lang="es">
    <head>
        <title>Destinos Turísticos</title>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <link rel="shortcut icon" type="image/x-icon" href="publico/img/descarga turri.ico">
        <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.8.1/css/all.css" integrity="sha384-50oBUHEmvpQ+1lW4y57PTFmhCaXp0ML5d60M1M7uH2+nqUivzIebhndOJK28anvf" crossorigin="anonymous">
        <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css">
        <link href="https://cdn.jsdelivr.net/bootstrap.tagsinput/0.8.0/bootstrap-tagsinput.css" rel="stylesheet"/>
        <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.4.0/jquery.min.js"></script>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.7/umd/popper.min.js"></script>
        <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js"></script>
        <script src="publico/js/script.js" type="text/javascript"></script>
        <script src="publico/js/scripting.js" type="text/javascript"></script>
        <script src="publico/js/mapa.js" type="text/javascript"></script>
        <script src="https://code.jquery.com/jquery-3.3.1.js"></script>
        <script src="https://cdn.datatables.net/1.10.20/js/jquery.dataTables.min.js"></script>
        <link rel="stylesheet" href="https://cdn.datatables.net/1.10.20/css/jquery.dataTables.min.css">
        <script type="text/javascript" src="publico/js/jquery.mask.js"></script>

        <style>
            .fakeimg {
                height: 0px;
                background: #aaa;
            }
        </style>
    </head>
    <body>
        <div class="jumbotron text-center" style="margin-bottom:0">
            <h1><a href="?controlador/accionpordefecto">Destinos Turísticos en Turrialba</a></h1>
        </div>
        <nav class="navbar navbar-expand-sm navbar-dark bg-success justify-content-center">
            <ul class="navbar-nav">
                <li class="nav-item text-center">
                    <a class="nav-link" href="?controlador/accionpordefecto">Página Inicial</a>
                </li>
                <li class="nav-item text-center">
                    <a class="nav-link" href="?controlador=Mapa&accion=vistaMapa">Mapa del Sitio</a>
                </li>
                <li class="nav-item text-center">
                    <a class="nav-link" href="?controlador=Destinos&accion=vistaDestinos">Buscar destinos turísticos</a>
                </li>
                <li class="nav-item text-center">
                    <a class="nav-link" href="?controlador=PorDefecto&accion=vistaCreditos">Créditos</a>
                <li class="nav-item text-center">
                    <a class="nav-link" href="?controlador=PorDefecto&accion=vistaLogin">Login</a>
                </li>
            </ul>
        </nav>
