<?php
    include_once 'publico/header.php';
    
?>
<script>
    var lat = <?php echo $vars[0] ?>;
    var long = <?php echo $vars[1] ?>;
</script>
<div class="container"  style="margin-top:30px">
    <h1>Las Trillizas</h1>




</div>

<div class="row">
    <div class="col-md-4">
        <div class="thumbnail">
            <a href="/w3images/lights.jpg">
                <img src="./publico/img/trillizas1.jpg" alt=""/ style="width:100% ">
                     <div class="caption">

                </div>
            </a>
        </div>
    </div>
    <div class="col-md-4">
        <div class="thumbnail">
            <a href="/w3images/nature.jpg">
                <img src="./publico/img/trillizas4.jpg" alt=""/ style="width:100% ">
                     <div class="caption">

                </div>
            </a>
        </div>
    </div>
    <div class="col-md-4">
        <div class="thumbnail">
            <a href="/w3images/fjords.jpg">
                <img src="./publico/img/trillizas3.jpg" alt=""/ style="width:100% ">
                     <div class="caption">

                </div>
            </a>
        </div>
    </div>
</div>




<div class="container"  style="margin-top:30px">
    <h1>Direccion </h1>

    <body text="orange">
        Nos vamos para los alrededores de Santa Cruz de Turrialba, donde usted conocerá dos cataratas destacadas, caminata por senderos y hermosos parajes, una posible visita a las faldas del volcán Turrialba y otros atractivos de la zona. Se trata de 3 cataratas, entre ellas La Muralla y Las Trillizas, ambas de notable belleza en un ambiente natural de notable atractivo para la paz y espiritualidad.

        ​     </body>




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
    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3929.5044171531335!2d-83.70770548576968!3d9.975126476200348!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8fa0d109bf1d7bcd%3A0x315f485a9f62d49!2sCatarata%20Las%20Trillizas!5e0!3m2!1ses-419!2scr!4v1621657287645!5m2!1ses-419!2scr" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy"></iframe>
</div>
<script src="https://maps.googleapis.com/maps/api/js?key=AIzaSyDbsb8YJ60oXSl51CzgRrkJvH1TNz3wWxk"></script>
    
<?php
    include_once 'publico/footer.php';
?>