<?php
    include_once 'publico/header.php';
    
?>
<script>
    var lat = <?php echo $vars[0] ?>;
    var long = <?php echo $vars[1] ?>;
</script>
    <div class="container"  style="margin-top:30px">
        <h1>Monumento Nacional Guayabo</h1>
   


   
    </div>
    



    <div class="padding-medium">
         <div class="container-large-max padding-top-large">
            <div class="row with-gutter">
                <div class="padding-bottom-xlarge">
                            
                        <div class="card__image">
                        <class="img-fluid" alt="Responsive image" >
                         <img src="./publico/img/guayabo unida.png" alt=""/ style="width:100% ">
                         </div>
                         <div class="card__content container-small-min-height">
                                   
                                   
                        </div>
                         
                        </div>
                </div>
                </div>
                </div>

 
                <div class="container"  style="margin-top:30px">
                <h1>Direccion </h1>

                <body text="orange">
                ​El Monumento Nacional Guayabo se ubica al noroeste de la ciudad de Turrialba, en el Distrito de Santa Teresita del cantón de Turrialba, provincia de Cartago. Aproximadamente 20 hectáreas del área protegida comprenden el sitio arqueológico, que consiste en un conjunto de estructuras arquitectónicas prehispánicas elaboradas en piedra –cantos rodados de río-, mismas que se construyeron en un período de tiempo que se ubica entre el año 1000 antes de Cristo y 1400 después de Cristo; para una ocupación prolongada de aproximadamente 2400 años.
 
                 Dentro de sus 233 hectáreas, esta área silvestre protege un remanente de bosque pluvial pre-montano siempre verde, en un rango altitudinal entre los 990 y los 1300 metros sobre el nivel del mar y la temperatura promedio anual alcanza los 24 ºC.
                 </body>
   


   
    </div>
     
                <h1>Contactanos </h1>
                    

                <div class="container text-center">
                    
                    <h1>Mapa del lugar</h1>
                    <!--
                    <button onclick="getLocation()">Elige Coordenadas</button>

                    <input id="demo" type="hidden"/>
                    <input id="demo2" type="hidden"/> 
                    <button id="oculto" style="visibility: hidden" onclick="init(lat, long)">Muestra mapa</button>
                    <div id="map" style="width:400px; height: 300px; border: solid; border-color: #00FFFF  "></div>
                    -->
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3929.532945967112!2d-83.69296558576967!3d9.972761076240355!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8fa0d1771b4106e1%3A0xe1b330be8cb15827!2sMonumento%20Nacional%20Guayabo!5e0!3m2!1ses-419!2scr!4v1621657199456!5m2!1ses-419!2scr" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy"></iframe>
                </div>
<script src="https://maps.googleapis.com/maps/api/js?key=AIzaSyDbsb8YJ60oXSl51CzgRrkJvH1TNz3wWxk"></script>
    
<?php
    include_once 'publico/footer.php';
?>