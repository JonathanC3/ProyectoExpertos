<?php
include_once 'publico/header.php';
$aspectos = array('1' => 'discerniendo', '2' => 'ensayando', '3' => 'involucrándome',
    '4' => 'practicando', '5' => 'receptivamente', '6' => 'relacionando',
    '7' => 'analíticamente', '8' => 'imparcialmente', '9' => 'sintiendo',
    '10' => 'observando', '11' => 'pensando', '12' => 'haciendo', '13' =>
    'aceptando', '14' => 'arriesgando', '15' => 'evaluando', '16' =>
    'con cautela', '17' => 'intuitivamente', '18' => 'productivamente',
    '19' => 'lógicamente', '20' => 'cuestionando', '21' => 'abstracto',
    '22' => 'observando', '23' => 'concreto', '24' => 'activo', '25' =>
    'orientado al presente', '26' => 'reflexivamente', '27' => 'orientado hacia el futuro',
    '28' => 'pragmático', '29' => 'aprendo más de la experiencia', '30' =>
    'aprendo más de la observación', '31' => 'aprendo más de la conceptualización',
    '32' => 'aprendo más de la experimentación', '33' => 'emotivo', '34' =>
    'reservado', '35' => 'racional', '36' => 'abierto');
$c = 1;
?>

<script>
    var estilosAprendizaje = <?php echo json_encode($vars); ?>;
</script>

<div class="contact">
    <div class="container">
        <h2>Adivinar estilo de aprendizaje</h2>
        <div class="contact-form">
            <h5>Yo aprendo...</h5>
            <div class="bs-docs-example">
                <table class="table table-bordered table-dark">
                    <tbody>
                        <!--for para llenar dinamicamente la tabla con los valores seleccionados-->
                        <?php for ($i = 0; $i < 9; $i++) { ?>
                            <tr>
                                <?php for ($j = 0; $j < 4; $j++) { ?>
                                    <td>
                                        <?php echo '<select id="C' . $c . '">'; ?>
                                                <option value="1">1</option>
                                                <option value="2">2</option>
                                                <option value="3">3</option>
                                                <option value="4">4</option>
                                            </select>
                                        <?php
                                            echo $aspectos['' . $c . ''];
                                            $c++;
                                        ?>
                                        <br>
                                    </td>
                                <?php } ?>
                            </tr>
                        <?php } ?>
                    </tbody>
                </table>
            </div>
            <center>
                <br><br>
                <input type="button" class="btn btn-secondary" value="Calcular Tipo" onclick="calcularEstiloAprendizaje(estilosAprendizaje);">
                <br><br><br>
                <h4 id="mensaje1"></h4>
            </center>
        </div>
    </div>
</div>
<?php
  include_once 'publico/footer.php';
?>

