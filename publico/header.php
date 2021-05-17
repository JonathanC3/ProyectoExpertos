<!DOCTYPE html>
<html lang="es">
    <head>
        <title>Destinos Turísticos</title>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <link rel="shortcut icon" type="image/x-icon" href="publico/img/descarga.ico">
        <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.8.1/css/all.css" integrity="sha384-50oBUHEmvpQ+1lW4y57PTFmhCaXp0ML5d60M1M7uH2+nqUivzIebhndOJK28anvf" crossorigin="anonymous">
        <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css">
        <link href="https://cdn.jsdelivr.net/bootstrap.tagsinput/0.8.0/bootstrap-tagsinput.css" rel="stylesheet"/>
        <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.4.0/jquery.min.js"></script>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.7/umd/popper.min.js"></script>
        <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js"></script>
        <script src="publico/js/script.js" type="text/javascript"></script>
        <script src="publico/js/scripting.js" type="text/javascript"></script>
        <script src="https://code.jquery.com/jquery-3.3.1.js"></script>
        <script src="https://cdn.datatables.net/1.10.20/js/jquery.dataTables.min.js"></script>
        <link rel="stylesheet" href="https://cdn.datatables.net/1.10.20/css/jquery.dataTables.min.css">
        <script type="text/javascript" src="publico/js/typeahead.js"></script>
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
            <h1><a href="?controlador/accionpordefecto">Destinos Turísticos</a></h1>
        </div>
        <nav class="navbar navbar-expand-sm bg-dark navbar-dark">
            <div class="container-fluid">
                <div class="navbar-header">
                    <a class="navbar-brand" href="#">Seleccione la opción</a>
                </div>
                <ul class="navbar-nav">
                    <li class="nav-item">
                        <a class="nav-link" href="?controlador=Aprendizaje&accion=estiloAprendizaje">Estilo de aprendizaje</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="?controlador=Recinto&accion=origenRecinto">Recinto de origen</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="?controlador=SexoEstudiante&accion=adivinarSexoEstudiante">Sexo del estudiante</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="?controlador=EstiloAprendizaje&accion=adivinarEstiloAprendizaje">Estilo de aprendizaje del estudiante</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="?controlador=TipoProfesor&accion=determinarTipoProfesor">Tipo del profesor</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="?controlador=Redes&accion=clasificacionRedes">Tipo de redes (Clase A o B)</a>
                    </li>
                </ul>
            </div>
        </nav>
