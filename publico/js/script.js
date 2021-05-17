var tablelista;
var i = 0;

function moraOnChange(sel) {

    if (sel.value == "1") {
        $("#a1").show();
        $("#b2").hide();
        $("#c3").hide();
    }
    if (sel.value == "2") {
        $("#a1").hide();
        $("#b2").show();
        $("#c3").hide();
    }
    if (sel.value == "3") {
        $("#a1").hide();
        $("#b2").hide();
        $("#c3").show();
    }

}
function mostrarOrden() {
    types = [];
    crit = [];
    llaves = [];
    var categoria = $("#categoriaProducto").val();
    $('#lblCantidad').text('');
    $("input[name='criterios[]']").each(function () {
        crit.push($(this).val());
    });
    //console.log(cantidadV);
    $("input[name='valores[]']").each(function () {
//var values=$(this).val();
        types.push($(this).val());
    });
    contador = 0;
    acumulador = '';
    final = '';
    for (var i = 0; i < crit.length; i++) {
        string = types[i];
        valores = string.split(".");
        acumulador = '';
        for (var j = 0; j < valores.length; j++) {
            entero = j + 1;
            valor = valores[j];
            llaves.push(categoria + "-" + (i + 1) + "-" + entero + "#");
            acumulador += categoria + "-" + (i + 1) + "-" + entero + "#" + valor + '&';
        }
        final += acumulador.substr(0, acumulador.length - 1);
        final += ",";
        contador += valores.length;
    }
    console.log(llaves.toString());
    //console.log(types.length);
    $('#lblCantidad').text(contador);
    $('#lblValores').text(final.substr(0, final.length - 1));
    //var archivos=document.getElementsByName('archivos[]').;
    //console.log(archivos);
    //document.getElementsByName('archivos[]');
    //.var criterios = '';
    //  $('input.inputArchivos').each(function() {
    //    criterios = criterios.concat(($(this).val()), ",");
    //});
    //alert(criterios);
}
$(document).ready(function () {
    $('.typeahead').typeahead({
        autoSelect: false,
        selectOnBlur: false,
        source: function (query, process) {
            return $.post('?controlador=Producto&accion=autocompletar', {caracteres: query}, function (data) {
                if (data !== "") {
                    data = $.parseJSON(data);
                    return process(data);
                }
            });
        }
    });
    $('.typeaheadSub').typeahead({
        autoSelect: false,
        selectOnBlur: false,
        source: function (query, process) {
            return $.post('?controlador=Producto&accion=autocompletarSubcategorias', {caracteres: query}, function (data) {
                if (data !== "") {
                    data = $.parseJSON(data);
                    return process(data);
                }
            });
        }
    });
    $('#monto').mask("000.000.000.000.000", {reverse: true});
    /*$("#monto").on({
     "focus": function (event) {
     $(event.target).select();
     },
     "keyup": function (event) {
     $(event.target).val(function (index, value) {
     return value.replace(/\D/g, "")
     .replace(/([0-9])([0-9]{2})$/, '$1.$2')
     .replace(/\B(?=(\d{3})+(?!\d)\.?)/g, ",");
     });
     }
     });*/

    /*var parametros = {
     "datosProveedor": "-Ger35"
     }
     var table = $('#example1').DataTable({
     "ajax": {
     "destroy": true,
     "url": "?controlador=Producto&accion=obtenerProductosPorProveedor",
     "method": "POST",
     "dataSrc": '',
     "data": parametros
     },
     "columns": [
     {"defaultContent": "<input type='checkbox' name='indiceProductoSeleccionado[]'/>"},
     {"data": "productoid"},
     {"data": "productonombre"},
     {"defaultContent": "<input type='text' class='form-control cantidadCompra'>"},
     {"defaultContent": "<input type='text' class='form-control precioUnitarioCompra'>"},
     {"defaultContent": "<input type='text' class='form-control descuentoCompra'>"}
     
     ]
     });*/

    var tablaContado = $('#comprasContado').DataTable({
        "ajax": {
            "destroy": true,
            "url": "?controlador=Producto&accion=obtenerComprasContado",
            "method": "POST",
            "dataSrc": '',
        },
        "columns": [
            {"data": "numerocompra"},
            {"data": "estado"},
            {"data": "proveedor"},
            {"data": "monto"},
            {"data": "ids"},
            {"data": "codigosProductos"},
            {"data": "nombres"},
            {"data": "cantidades"},
            {"data": "precios"},
            {"data": "descuentos"},
            {"defaultContent": "<button type='button' class='editarCompraContado'><i>Editar</i></button> <button type='button' class='eliminarContado'><i>Eliminar</i></button>"}
        ]
    });
    actualizarDatosCompraMayoreoContado("#comprasContado tbody", tablaContado);
    eliminarDatosCompraMayoreoContado("#comprasContado tbody", tablaContado);
    var tablaCredito = $('#comprasCredito').DataTable({
        "ajax": {
            "destroy": true,
            "url": "?controlador=Producto&accion=obtenerComprasCredito",
            "method": "POST",
            "dataSrc": '',
        },
        "columns": [
            {"data": "numerocompra"},
            {"data": "estado"},
            {"data": "proveedor"},
            {"data": "monto"},
            {"data": "ids"},
            {"data": "codigosProductos"},
            {"data": "nombres"},
            {"data": "cantidades"},
            {"data": "precios"},
            {"data": "descuentos"},
            {"defaultContent": "<button type='button' class='editarCompraCredito'><i>Editar</i></button> <button type='button' class='eliminarCredito'><i>Eliminar</i></button>"}
        ]
    });
    actualizarDatosCompraMayoreoCredito("#comprasCredito tbody", tablaCredito);
    eliminarDatosCompraMayoreoCredito("#comprasCredito tbody", tablaCredito);
    $('#selectProveedor').change(function () {
        var tableProd = $('#example1').DataTable();
        var valor = this.value;
        var datosProveedorSplit = valor.split("*");
        tableProd.clear();
        tableProd.destroy();
        var parametros = {
            "datosProveedor": datosProveedorSplit[1]
        }
        tableProd = $('#example1').DataTable({
            "ajax": {
                "destroy": true,
                "url": "?controlador=Producto&accion=obtenerProductosPorProveedor",
                "method": "POST",
                "dataSrc": '',
                "data": parametros
            },
            "columns": [
                {"defaultContent": "<input type='checkbox' name='indiceElemento[]'/>"},
                {"sClass": "idProducto", "data": "productoid"},
                {"sClass": "nombreProducto", "data": "productonombre"},
                {"sClass": "cantidadProducto", "defaultContent": "<input type='number' class='form-control cantidadCompra'>"},
                {"sClass": "precioProducto", "defaultContent": "<input type='text' class='form-control precioUnitarioCompra'>"},
                {"sClass": "descuentoProducto", "defaultContent": "<input type='number' class='form-control descuentoCompra'>"}

            ],
            "paging": false
        });
        mascara();
    });
    $('#selectFacturasParaAbonos').change(function () {
        var tableProd = $('#abonos').DataTable();
        var valor = this.value;
        var datosProveedorSplit = valor.split("*");
        tableProd.clear();
        tableProd.destroy();
        var parametros = {
            "idVenta": datosProveedorSplit[0]
        }
        tableProd = $('#abonos').DataTable({
            "ajax": {
                "destroy": true,
                "url": "?controlador=Admin&accion=obtenerAbonos",
                "method": "POST",
                "dataSrc": '',
                "data": parametros
            },
            "columns": [
                {"sClass": "idAbono", "data": "abonoid"},
                {"sClass": "fechaAbono", "data": "abonofecha"},
                {"sClass": "montoAbono", "data": "abonomonto"}

            ]
        });
    });
});
function mascara() {
    setTimeout(aplicarMascaraInputsTabla, 1000);
}

function aplicarMascaraInputsTabla() {
    $('.precioUnitarioCompra').mask("000.000.000.000.000", {reverse: true});
}

function actualizarDatosCompraMayoreoContado(tbody, table) {
    var tableProd = $('#example1').DataTable();
    $(document).on("click", "button.editarCompraContado", function () {

        var data = table.row($(this).parents("tr")).data();
        var proveedor = $("#selectProveedor option[value^='" + data.proveedor + "']").prop('selected', true),
                tipoCompra = $("#tipoCompra").val("Contado"),
                monto = $("#monto").val(data.monto),
                estado = $("#selectEstado").val(data.estado);
        var valor = $("#selectProveedor").val();
        var datosProveedorSplit = valor.split("*");
        tableProd.clear();
        tableProd.destroy();
        var parametros = {
            "datosProveedor": datosProveedorSplit[1]
        }
        tableProd = $('#example1').DataTable({
            "ajax": {
                "destroy": true,
                "url": "?controlador=Producto&accion=obtenerProductosPorProveedor",
                "method": "POST",
                "dataSrc": '',
                "data": parametros
            },
            "columns": [
                {"defaultContent": "<input type='checkbox' name='indiceElemento[]'/>"},
                {"sClass": "idProducto", "data": "productoid"},
                {"sClass": "nombreProducto", "data": "productonombre"},
                {"sClass": "cantidadProducto", "defaultContent": "<input type='text' class='form-control cantidadCompra'>"},
                {"sClass": "precioProducto", "defaultContent": "<input type='text' class='form-control precioUnitarioCompra'>"},
                {"sClass": "descuentoProducto", "defaultContent": "<input type='text' class='form-control descuentoCompra'>"}

            ],
            "paging": false
        });
        setTimeout(marcarProductosSeleccionadosEnCompraMayoreoContado, 1000, tableProd, data);
    });
}

function actualizarDatosCompraMayoreoCredito(tbody, table) {
    var tableProd = $('#example1').DataTable();
    $(document).on("click", "button.editarCompraCredito", function () {

        var data = table.row($(this).parents("tr")).data();
        var proveedor = $("#selectProveedor option[value^='" + data.proveedor + "']").prop('selected', true),
                tipoCompra = $("#tipoCompra").val("Credito"),
                monto = $("#monto").val(data.monto),
                estado = $("#selectEstado").val(data.estado);
        var valor = $("#selectProveedor").val();
        var datosProveedorSplit = valor.split("*");
        tableProd.clear();
        tableProd.destroy();
        var parametros = {
            "datosProveedor": datosProveedorSplit[1]
        }
        tableProd = $('#example1').DataTable({
            "ajax": {
                "destroy": true,
                "url": "?controlador=Producto&accion=obtenerProductosPorProveedor",
                "method": "POST",
                "dataSrc": '',
                "data": parametros
            },
            "columns": [
                {"defaultContent": "<input type='checkbox' name='indiceElemento[]'/>"},
                {"sClass": "idProducto", "data": "productoid"},
                {"sClass": "nombreProducto", "data": "productonombre"},
                {"sClass": "cantidadProducto", "defaultContent": "<input type='text' class='form-control cantidadCompra'>"},
                {"sClass": "precioProducto", "defaultContent": "<input type='text' class='form-control precioUnitarioCompra'>"},
                {"sClass": "descuentoProducto", "defaultContent": "<input type='text' class='form-control descuentoCompra'>"}

            ],
            "paging": false
        });
        setTimeout(marcarProductosSeleccionadosEnCompraMayoreoCredito, 1000, tableProd, data);
    });
}

function marcarProductosSeleccionadosEnCompraMayoreoContado(tableProd, data) {
    $("#botonesDeAccionCompraMayoreo").html("");
    var codigosProductos = (data.ids).split(",");
    var cantidadesProductos = (data.cantidades).split(",");
    var precioProductos = (data.precios).split(",");
    var descuentoProductos = (data.descuentos).split(",");
    var tamaniolistaCodigosProductos = codigosProductos.length;
    for (var inicio = 0; inicio < tamaniolistaCodigosProductos; inicio++) {
        tableProd.rows().every(function (rowIdx, tableLoop, rowLoop) {
            var nodo = this.node();
            var datanproductosproveedor = tableProd.row($(this)).data();
            if (datanproductosproveedor.productoid === codigosProductos[inicio]) {
                $(nodo).find('input').prop('checked', true);
                $(nodo).find('input.cantidadCompra').val(cantidadesProductos[inicio]);
                $(nodo).find('input.precioUnitarioCompra').val(precioProductos[inicio]);
                $(nodo).find('input.descuentoCompra').val(descuentoProductos[inicio]);
            }
        });
    }
    mascara();
    $("#botonesDeAccionCompraMayoreo").html('<input type="button" class="btn btn-secondary" id="btnActualizarCompraMayoreo" name="btnActualizarCompraMayoreo" value="Actualizar Compra" onclick="actualizarCompraContadoMayoreo(' + data.numerocompra + ')">');
}

function marcarProductosSeleccionadosEnCompraMayoreoCredito(tableProd, data) {
    $("#botonesDeAccionCompraMayoreo").html("");
    var codigosProductos = (data.ids).split(",");
    var cantidadesProductos = (data.cantidades).split(",");
    var precioProductos = (data.precios).split(",");
    var descuentoProductos = (data.descuentos).split(",");
    var tamaniolistaCodigosProductos = codigosProductos.length;
    for (var inicio = 0; inicio < tamaniolistaCodigosProductos; inicio++) {
        tableProd.rows().every(function (rowIdx, tableLoop, rowLoop) {
            var nodo = this.node();
            var datanproductosproveedor = tableProd.row($(this)).data();
            if (datanproductosproveedor.productoid === codigosProductos[inicio]) {
                $(nodo).find('input').prop('checked', true);
                $(nodo).find('input.cantidadCompra').val(cantidadesProductos[inicio]);
                $(nodo).find('input.precioUnitarioCompra').val(precioProductos[inicio]);
                $(nodo).find('input.descuentoCompra').val(descuentoProductos[inicio]);
            }
        });
    }
    mascara();
    $("#botonesDeAccionCompraMayoreo").html('<input type="button" class="btn btn-secondary" id="btnActualizarCompraMayoreoCredito" name="btnActualizarCompraMayoreo" value="Actualizar Compra" onclick="actualizarCompraCreditoMayoreo(' + data.numerocompra + ')">');
}

function actualizarCompraContadoMayoreo(numeroCompra) {
    var tableProd = $('#example1').DataTable();
    var rows = $(tableProd.$('input[type="checkbox"]').map(function () {
        return $(this).prop("checked") ? $(this).closest('tr') : null;
    }));
    var ary = [];
    $(function () {
        rows.each(function (a, b) {
            var id = $('.idProducto', b).text();
            var cantidad = $('.cantidadCompra', b).val();
            var precio = $('.precioUnitarioCompra', b).cleanVal();
            var descuento = $('.descuentoCompra', b).val();
            ary.push({idProducto: id, cantidadProducto: cantidad, precioUnitario: precio, descuentoProducto: descuento});
        });
        var valor = $("#selectProveedor").val();
        var datosProveedorSplit = valor.split("*");
        var parametros = {
            "numeroCompra": numeroCompra,
            "proveedor": datosProveedorSplit[0],
            "tipoCompra": $("#tipoCompra").val(),
            "monto": $("#monto").cleanVal(),
            "estado": $("#selectEstado").val(),
            "detalles": ary
        };
        $.ajax(
                {
                    data: parametros,
                    url: '?controlador=Producto&accion=actualizarCompraContadoMayoreo',
                    type: 'post',
                    dataType: 'json',
                    beforeSend: function () {
                        $("#msj").html("Procesando, \n\ espere por favor...");
                    },
                    success: function (response) {
                        if (response.msj == "Falso") {
                            $("#msj").html("No se pudo completar la operación");
                        } else {
                            $("#msj").html("Compra actualizada exitosamente");
                            location.reload();
                        }
                    }
                }
        );
    });
}

function actualizarCompraCreditoMayoreo(numeroCompra) {
    var tableProd = $('#example1').DataTable();
    var rows = $(tableProd.$('input[type="checkbox"]').map(function () {
        return $(this).prop("checked") ? $(this).closest('tr') : null;
    }));
    var ary = [];
    $(function () {
        rows.each(function (a, b) {
            var id = $('.idProducto', b).text();
            var cantidad = $('.cantidadCompra', b).val();
            var precio = $('.precioUnitarioCompra', b).cleanVal();
            var descuento = $('.descuentoCompra', b).val();
            ary.push({idProducto: id, cantidadProducto: cantidad, precioUnitario: precio, descuentoProducto: descuento});
        });
        //alert(JSON.stringify( ary));

        var valor = $("#selectProveedor").val();
        var datosProveedorSplit = valor.split("*");
        var parametros = {
            "numeroCompra": numeroCompra,
            "proveedor": datosProveedorSplit[0],
            "tipoCompra": $("#tipoCompra").val(),
            "monto": $("#monto").cleanVal(),
            "estado": $("#selectEstado").val(),
            "detalles": ary
        };
        $.ajax(
                {
                    data: parametros,
                    url: '?controlador=Producto&accion=actualizarCompraCreditoMayoreo',
                    type: 'post',
                    dataType: 'json',
                    beforeSend: function () {
                        $("#msj").html("Procesando, \n\ espere por favor...");
                    },
                    success: function (response) {
                        if (response.msj == "Falso") {
                            $("#msj").html("No se pudo completar la operación");
                        } else {
                            $("#msj").html("Compra actualizada exitosamente");
                            location.reload();
                        }
                    }
                }
        );
    });
}

function eliminarDatosCompraMayoreoContado(tbody, table) {
    $(document).on("click", "button.eliminarContado", function () {
        var datan = table.row($(this).parents("tr")).data();
        var parametros = {
            "numeroCompra": datan.numerocompra
        };
        $.ajax(
                {
                    data: parametros,
                    url: '?controlador=Producto&accion=eliminarCompraMayoreoContado',
                    type: 'post',
                    beforeSend: function () {
                    },
                    success: function (response) {
                        location.reload();
                    }
                }
        );
        $('#example').DataTable().ajax.reload();
    });
}

function eliminarDatosCompraMayoreoCredito(tbody, table) {
    $(document).on("click", "button.eliminarCredito", function () {
        var datan = table.row($(this).parents("tr")).data();
        var parametros = {
            "numeroCompra": datan.numerocompra
        };
        $.ajax(
                {
                    data: parametros,
                    url: '?controlador=Producto&accion=eliminarCompraMayoreoCredito',
                    type: 'post',
                    beforeSend: function () {
                    },
                    success: function (response) {
                        location.reload();
                    }
                }
        );
        $('#example').DataTable().ajax.reload();
    });
}

function registrarCompraMayoreo() {
    var tableProd = $('#example1').DataTable();
    var rows = $(tableProd.$('input[type="checkbox"]').map(function () {
        return $(this).prop("checked") ? $(this).closest('tr') : null;
    }));
    var ary = [];
    $(function () {
        rows.each(function (a, b) {
            var id = $('.idProducto', b).text();
            var cantidad = $('.cantidadCompra', b).val();
            var precio = $('.precioUnitarioCompra', b).cleanVal();
            var descuento = $('.descuentoCompra', b).val();
            ary.push({idProducto: id, cantidadProducto: cantidad, precioUnitario: precio, descuentoProducto: descuento});
        });
        //alert(JSON.stringify( ary));

        var valor = $("#selectProveedor").val();
        var datosProveedorSplit = valor.split("*");
        var parametros = {
            "proveedor": datosProveedorSplit[0],
            "tipoCompra": $("#tipoCompra").val(),
            "monto": $("#monto").cleanVal(),
            "estado": $("#selectEstado").val(),
            "detalles": ary
        };
        $.ajax(
                {
                    data: parametros,
                    url: '?controlador=Producto&accion=registrarCompraMayoreo',
                    type: 'post',
                    dataType: 'json',
                    beforeSend: function () {
                        //$("#msj").html("Procesando, \n\ espere por favor...");
                    },
                    success: function (response) {
                        if (response.msj == "Falso") {
                            $(".error").html("No se pudo completar la operación.");
                        } else {
                            $(".exito").html("Compra registrada exitosamente.");
                            location.reload();
                        }
                    }
                }
        );
    });
}

function agregarMas() {
    $("<div>").load("publico/InputDinamico.php", function () {
        $("#criterios").append($(this).html());
    });
}
function agregarMasCorreos() {
    $("<div>").load("publico/InputDinamicoCorreo.php", function () {
        $("#correos").append($(this).html());
    });
}
function agregarMasPorcentajes() {
    $("<div>").load("publico/InputDinamicoPorc.php", function () {
        $("#porcentajeS").append($(this).html());
    });
}
function agregarMasDirecciones() {
    $("<div>").load("publico/InputDinamicoDireccion.php", function () {
        $("#direcciones").append($(this).html());
    });
}
function agregarMasTelefonos() {
    $("<div>").load("publico/InputDinamicoTelefono.php", function () {
        $("#telefonos").append($(this).html());
    });
}

function borrarRegistro() {
    $('div.lista-producto').each(function (index, item) {
        jQuery(':checkbox', this).each(function () {
            if ($(this).is(':checked')) {
                $(item).remove();
            }
        });
    });
}
function borrarRegistroPorc() {
    $('div.lista-porc').each(function (index, item) {
        jQuery(':checkbox', this).each(function () {
            if ($(this).is(':checked')) {
                $(item).remove();
            }
        });
    });
}

function borrarRegistroCorreo() {
    $('div.lista-correo').each(function (index, item) {
        jQuery(':checkbox', this).each(function () {
            if ($(this).is(':checked')) {
                $(item).remove;
            }
        });
        jQuery('div.lista-val').each()
    });
}
function borrarRegistroDireccion() {
    $('div.lista-direccion').each(function (index, item) {
        jQuery(':checkbox', this).each(function () {
            if ($(this).is(':checked')) {
                $(item).remove();
            }
        });
    });
}
function borrarRegistroTelefono() {
    $('div.lista-telefono').each(function (index, item) {
        jQuery(':checkbox', this).each(function () {
            if ($(this).is(':checked')) {
                $(item).remove();
            }
        });
    });
}

function removerTodosInpus() {
    $('div.lista-telefono').each(function (index, item) {
        $(item).remove();
    });
    $('div.lista-correo').each(function (index, item) {
        $(item).remove();
    });
    $('div.lista-direccion').each(function (index, item) {
        $(item).remove();
    });
}

function realizarProceso(usuario, contrasenna) {

    var parametros = {
        "usuario": usuario,
        "contrasenna": contrasenna
    };
    $.ajax(
            {
                data: parametros,
                url: '?controlador=Item&accion=proceso',
                type: 'post',
                beforeSend: function () {
                    $("#mensaje").html("Procesando, \n\ espere por favor...");
                },
                success: function (response) {
                    $("#mensaje").html(response);
                }
            }
    );
} // realizarProceso

function inicioSesion(nombre, contrasenna) {
    var parametros = {
        "nombre": nombre,
        "contrasenna": contrasenna
    };
    $.ajax(
            {
                data: parametros,
                url: '?controlador=Admin&accion=inicioSesion',
                type: 'post',
                beforeSend: function () {
                    $("#resultado").html("Procesando, \n\ espere por favor...");
                },
                success: function (response) {
                    if (response == "error") {
                        $("#resultado").html("Error");
                    } else {
                        $("#mensaje").html("Bienvenido");
                    }
                }
            }
    );
} // realizarProceso


$(document).ready(function () {
    var table = $('#example').DataTable({
        "ajax": {
            "url": "?controlador=Producto&accion=obtenerCategorias",
            "method": "POST",
            "dataSrc": ''
        },
        "columns": [
            {"data": "categoriacodigo"},
            {"data": "categorianombre"},
            {"data": "categoriadescripcion"},
            {"defaultContent": "<button type='button' class='editar'><i>Editar</i></button> <button type='button' class='eliminar'><i>Eliminar</i></button>"}

        ]
    });
    actualizarDatosCategoria("#example tbody", table);
    eliminarDatosCategoria("#example tbody", table);
    var tablaSubCategoria = $('#tbSubCategorias').DataTable({
        "ajax": {
            "url": "?controlador=Producto&accion=obtenerSubCategorias",
            "method": "POST",
            "dataSrc": ''
        },
        "columns": [
            {"data": "subcategoriacodigo"},
            {"data": "categorianombre"},
            {"data": "subcategorianombre"},
            {"data": "subcategoriadescripcion"},
            {"defaultContent": "<button type='button' class='editarSub'><i>Editar</i></button> <button type='button' class='eliminarSub'><i>Eliminar</i></button>"}

        ]
    });
    actualizarDatosSubCategoria("#tbSubCategorias tbody", tablaSubCategoria);
    eliminarDatosSubCategoria("#tbSubCategorias tbody", tablaSubCategoria);
});
function actualizarDatosCategoria(tbody, table) {
    $(document).on("click", "button.editar", function () {
        var data = table.row($(this).parents("tr")).data();
        var categoriaNombre = $("#categoriaNombre").val(data.categorianombre),
                categoriaCodigo = $("#codigoCategoria").val(data.categoriacodigo),
                categoriaDetalle = $("#categoriaDetalle").val(data.categoriadescripcion)
    });
}

function actualizarDatosSubCategoria(tbody, table) {
    $(document).on("click", "button.editarSub", function () {
        var data = table.row($(this).parents("tr")).data();
        var subcategoriaNombre = $("#subCategoriaNombre").val(data.subcategorianombre),
                subcategoriaCodigo = $("#codigoSubCategoria").val(data.subcategoriacodigo),
                subcategoriaDetalle = $("#subCategoriaDetalle").val(data.subcategoriadescripcion),
                categoriaNombre = $("#categoria").val($("#categoria" + " option").filter(function () {
            return this.text == data.categorianombre
        }).val());
    });
}

function actualizarCategoria() {
    var parametros = {
        "codigoCategoria": $("#codigoCategoria").val(),
        "nombreCategoria": $("#categoriaNombre").val(),
        "detalleCategoria": $("#categoriaDetalle").val()
    };
    $.ajax(
            {
                data: parametros,
                url: '?controlador=Producto&accion=actualizarCategoria',
                type: 'post',
                beforeSend: function () {
                },
                success: function (response) {
                    location.reload();
                }
            }
    );
}

function actualizarSubCategoria() {
    var parametros = {
        "codigoSubCategoria": $("#codigoSubCategoria").val(),
        "nombreSubCategoria": $("#subCategoriaNombre").val(),
        "detalleSubCategoria": $("#subCategoriaDetalle").val(),
        "categoriaId": $("#categoria").val()
    };
    $.ajax(
            {
                data: parametros,
                url: '?controlador=Producto&accion=actualizarSubCategoria',
                type: 'post',
                beforeSend: function () {
                },
                success: function (response) {
                    location.reload();
                }
            }
    );
}

function eliminarDatosCategoria(tbody, table) {
    $(document).on("click", "button.eliminar", function () {
        var datan = table.row($(this).parents("tr")).data();
        var parametros = {
            "codigoCategoria": datan.categoriacodigo
        };
        $.ajax(
                {
                    data: parametros,
                    url: '?controlador=Producto&accion=eliminarCategoria',
                    type: 'post',
                    beforeSend: function () {
                    },
                    success: function (response) {
                    }
                }
        );
        $('#example').DataTable().ajax.reload();
    });
}

function eliminarDatosSubCategoria(tbody, table) {
    $(document).on("click", "button.eliminarSub", function () {
        var datan = table.row($(this).parents("tr")).data();
        var parametros = {
            "codigoSubCategoria": datan.subcategoriacodigo
        };
        $.ajax(
                {
                    data: parametros,
                    url: '?controlador=Producto&accion=eliminarSubCategoria',
                    type: 'post',
                    beforeSend: function () {
                    },
                    success: function (response) {
                    }
                }
        );
        $('#tbSubCategorias').DataTable().ajax.reload();
    });
}

function crearCategoria() {

    var parametro = {
        "nombreCategoria": $("#categoriaNombre").val(),
        "detalleCategoria": $("#categoriaDetalle").val()
    };
    if (parametro["nombreCategoria"] === "" || parametro["nombreCategoria"] === " ") {
        $(".error").html("Por favor, introduzca un nombre para la categoría.");
    } else {
        if (parametro["detalleCategoria"] === " " || parametro["detalleCategoria"] === "") {
            $(".error").html("Por favor, introduzca una descripción para la categoría.");
        } else {
            $(".error").html("");
            $.ajax(
                    {
                        data: parametro,
                        url: '?controlador=Producto&accion=crearCategoria',
                        type: 'post',
                        dataType: 'json',
                        beforeSend: function () {
                        },
                        success: function (response) { //en response va el resultado
                            if (response.msj === "Correcto") {
                                $(".exito").html('Categoría registrada correctamente');
                                $("#categoriaNombre").html('');
                                location.reload();
                            } else {
                                $(".error").html("Ya se encuentra registrada esta categoría.");
                            }
                        },
                        error: function () {
                        }
                    }
            );
        }


    }
}

function crearSubCategoria() {

    var parametro = {
        "nombreSubCategoria": $("#subCategoriaNombre").val(),
        "detalleSubCategoria": $("#subCategoriaDetalle").val(),
        "categoriaId": $("#categoria").val()
    };
    if (parametro["nombreSubCategoria"] === "" || parametro["nombreSubCategoria"] === " ") {
        $(".error").html("Por favor, introduzca un nombre para la categoría.");
    } else {
        if (parametro["detalleSubCategoria"] === "" || parametro["detalleSubCategoria"] === " ") {
            $(".error").html("Por favor, introduzca una descripción para la categoría.");
        }else{
            $(".error").html("");
        $.ajax(
                {
                    data: parametro,
                    url: '?controlador=Producto&accion=crearSubCategoria',
                    type: 'post',
                    dataType: 'json',
                    beforeSend: function () {
                    },
                    success: function (response) { //en response va el resultado
                        if (response.msj === "Correcto") {
                            $(".exito").html('Subcategoría registrada correctamente');
                            $("#subCategoriaNombre").html('');
                            location.reload();
                        } else {
                            $(".error").html("Ya se encuentra registrada esta subcategoría.");
                        }
                    },
                    error: function () {
                    }
                }
        );
        }
    }
}

$(document).ready(function () {
    var table2 = $('#example2').DataTable({
        "ajax": {
            "url": "?controlador=Producto&accion=obtenerProductos",
            "method": "POST",
            "dataSrc": ''
        },
        "columns": [
            {"data": "productocodigo"},
            {"data": "productonombre"},
            {"data": "productodescripcion"},
            {"data": "productoid"},
            {"data": "productoestado"},
            {"data": "categoriaproductocriterio"},
            {"data": "categoriaproductocriteriovalores"},
            //{ "data": "categorianombre" },
            /* { "data": "productoimagen",
             "render": function(data,type,row){
             return '<center><img src="publico/img/imagenproducto/'+data+'" width="120" heigth="80"/></center>';
             }
             },*/
            //"render": function(data,type,row){
            //  var array=dividirCadena(data, ",");
            //return '<center><img src="publico/img/imagenproducto/'+array[0]+'" width="120" heigth="80"/>\n\
            //<img src="publico/img/imagenproducto/'+array[1]+'" width="120" heigth="80"/>\n\
            //<img src="publico/img/imagenproducto/'+array[2]+'" width="120" heigth="80"/></center>';
            //  <!--}

            //},-->
            {"defaultContent": "<button type='button' class='editarproducto'><i>Editar</i></button> <button type='button' class='mostrarImagenes'><i>Mostrar Imagenes</i></button> <button type='button' class='eliminarproducto'><i>Eliminar</i></button>"}
        ]
    });
    obtenerDatos("#example2 tbody", table2);
    //editarProductos();
    mostrarImagen();
    eliminarDatos("#example2 tbody", table2);
});
function dividirCadena(cadenaADividir, separador) {
    var arrayDeCadenas = cadenaADividir.split(separador);
    return arrayDeCadenas;
}
function obtenerDatos(tbody, table2) {
    $(document).on("click", "button.editarproducto", function () {
        var data = table2.row($(this).parents("tr")).data();
        var productonombre = $("#nombreProducto").val(data.productonombre),
                productodescripcion = $("#descripcionProducto").val(data.productodescripcion),
                productoimagen = $("#imagenrespaldo").val(data.productoimagen);
        codigo = $("#codigo").val(data.productocodigo);
        $('#preview').empty();
        var form_data = new FormData();
        form_data.append("id", data.productoid);
        $.ajax(
                {
                    data: form_data,
                    url: '?controlador=Producto&accion=vistaImagenes',
                    type: 'post',
                    dataType: 'json',
                    contentType: false,
                    processData: false,
                    beforeSend: function () {
                        //$("#mensaje").html("Procesando, \n\ espere por favor...");
                    },
                    success: function (response) {

                        for (var index = 0; index < response.length; index++) {
                            var src = response[index];
                            console.log(src);
                            // Add img element in <div id='preview'>
                            $('#preview').append('<img src="publico/img/imagenproducto/' + src + '" width="100px;" height="100px"/>');
                        }

                    }
                }
        );
        $('#example2').DataTable().ajax.reload();
    });
}
function mostrarImagen() {
    $(document).on("click", "button.mostrarImagenes", function () {
        var tabla = $('#example2').DataTable({
            retrieve: true,
            paging: false
        });
        var datan = tabla.row($(this).parents("tr")).data();
        $('#preview').empty();
        var form_data = new FormData();
        form_data.append("id", datan.productoid);
        $.ajax(
                {
                    data: form_data,
                    url: '?controlador=Producto&accion=vistaImagenes',
                    type: 'post',
                    dataType: 'json',
                    contentType: false,
                    processData: false,
                    beforeSend: function () {
                        //$("#mensaje").html("Procesando, \n\ espere por favor...");
                    },
                    success: function (response) {

                        for (var index = 0; index < response.length; index++) {
                            var src = response[index];
                            console.log(src);
                            // Add img element in <div id='preview'>
                            $('#preview').append('<img src="publico/img/imagenproducto/' + src + '" width="100px;" height="100px"/>');
                        }

                    }
                }
        );
        $('#example2').DataTable().ajax.reload();
    });
}

function eliminarDatos(tbody, table2) {
    $(document).on("click", "button.eliminarproducto", function () {
        var datan = table2.row($(this).parents("tr")).data();
        var parametros = {
            "codigo": datan.productocodigo
        };
        $.ajax(
                {
                    data: parametros,
                    url: '?controlador=Producto&accion=eliminarProducto',
                    type: 'post',
                    beforeSend: function () {
                        $("#mensaje").html("Procesando, \n\ espere por favor...");
                    },
                    success: function (response) { //en response va el resultado

                        $("#mensaje").html(response);
                    }

                }

        );
    });
}
function mostrarImagen() {
    $(document).on("click", "button.mostrarImagenes", function () {
        var tabla = $('#example2').DataTable({
            retrieve: true,
            paging: false
        });
        var datan = tabla.row($(this).parents("tr")).data();
        $('#preview').empty();
        var form_data = new FormData();
        form_data.append("id", datan.productoid);
        $.ajax(
                {
                    data: form_data,
                    url: '?controlador=Producto&accion=vistaImagenes',
                    type: 'post',
                    dataType: 'json',
                    contentType: false,
                    processData: false,
                    beforeSend: function () {
                        //$("#mensaje").html("Procesando, \n\ espere por favor...");
                    },
                    success: function (response) {

                        for (var index = 0; index < response.length; index++) {
                            var src = response[index];
                            console.log(src);
                            // Add img element in <div id='preview'>
                            $('#preview').append('<img src="publico/img/imagenproducto/' + src + '" width="100px;" height="100px"/>');
                        }

                    }
                }
        );
        $('#example2').DataTable().ajax.reload();
    });
}
function eliminarDatos(tbody, table2) {
    $(document).on("click", "button.eliminarproducto", function () {
        var datan = table2.row($(this).parents("tr")).data();
        var parametros = {
            "codigo": datan.productocodigo
        };
        $.ajax(
                {
                    data: parametros,
                    url: '?controlador=Producto&accion=eliminarProducto',
                    type: 'post',
                    beforeSend: function () {
                        $("#mensaje").html("Procesando, \n\ espere por favor...");
                    },
                    success: function (response) {
                        $("#mensaje").html(response);
                    }
                }
        );
        $('#example2').DataTable().ajax.reload();
    });
}


function actualizarProducto() {
    if ($("#files").val() === "") {
        var form_data = new FormData();
        form_data.append('estado', "NO");
        var totalfiles = document.getElementById('files').files.length;
        for (var index = 0; index < totalfiles; index++) {
            form_data.append("files[]", document.getElementById('files').files[index]);
        }
        form_data.append('codigoProducto', $("#codigo").val());
        form_data.append('nombreProducto', $("#nombreProducto").val());
        form_data.append('descripcionProducto', $("#descripcionProducto").val());
        form_data.append('categoriaProducto', $("#categoriaProducto").val());
    } else {
        var form_data = new FormData();
        var totalfiles = document.getElementById('files').files.length;
        for (var index = 0; index < totalfiles; index++) {
            form_data.append("files[]", document.getElementById('files').files[index]);
        }
        form_data.append('estado', "SI");
        form_data.append('codigoProducto', $("#codigo").val());
        form_data.append('nombreProducto', $("#nombreProducto").val());
        form_data.append('descripcionProducto', $("#descripcionProducto").val());
        form_data.append('categoriaProducto', $("#categoriaProducto").val());
        form_data.append('ordenProducto', $('#orden').val());
    }

    $.ajax(
            {
                data: form_data,
                url: '?controlador=producto&accion=actualizarProducto',
                type: 'post',
                contentType: false,
                processData: false,
                beforeSend: function () {
                    $("#mensaje").html("Procesando, \n\ espere por favor...");
                },
                success: function () {
                    location.reload();
                }
            }
    );
}

$(document).ready(function () {
    var table3 = $('#proveedor').DataTable({
        "ajax": {
            "url": "?controlador=Proveedor&accion=obtenerProveedor",
            "method": "POST",
            "dataSrc": ''
        },
        "columns": [
            {"data": "proveedorid"},
            {"data": "proveedornombre"},
            {"data": "proveedorproductocodigo"},
            {"data": "proveedordiascredito"},
            {"data": "contactoestado"},
            {"data": "contactocorreocriterio"},
            {"data": "contactocorreovalor"},
            {"data": "contactodireccionprovincia"},
            {"data": "contactodireccioncanton"},
            {"data": "contactodirecciondistrito"},
            {"data": "contactodireccionotrassenas"},
            {"data": "contactotelefonocriterio"},
            {"data": "contactotelefonovalor"},
            {"defaultContent": "<button type='button' class='editarproveedor'><i>Editar</i></button> <button type='button' class='eliminarproveedor'><i>Eliminar</i></button>"}

        ]
    });
    actualizarDatosProveedor("#proveedor tbody", table3);
    eliminarDatosProveedor("#proveedor tbody", table3);
});
function actualizarDatosProveedor(tbody, table3) {
    $(document).on("click", "button.editarproveedor", function () {
        //desmarcar toda la tabla producto
        tablelista.rows().every(function (rowIdx, tableLoop, rowLoop) {
            var nodo1 = this.node();
            $(nodo1).find('input').prop('checked', false);
        });
        //eliminar inpus dinamicos
        removerTodosInpus();
        var dataP = table3.row($(this).parents("tr")).data();
        var proveedorId = $("#idProveedor").val(dataP.proveedorid),
                proveedorNombre = $("#nombre").val(dataP.proveedornombre),
                contactoEstado = $("#estado").val(dataP.contactoestado),
                proveedorCredito = $("#credito").val(dataP.proveedordiascredito);
        var ids = 0;
        //correo
        var contactoCorreoCriterio = (dataP.contactocorreocriterio).split(",");
        var contactoCorreoValor = (dataP.contactocorreovalor).split(",");
        var contador = contactoCorreoCriterio.length;
        for (var contCorreo = 0; contCorreo < contador - 1; ) {
            $("#correos").append("<div class='lista-correo float-clear' style='clear:both;'><ul class='list-group'><li class='list-group-item'><div class='float-left'><input type='checkbox' name='indiceElemento[]'/></div><p class='float-left'>Criterio:</p><div class='float-left'><input class='form-control inputDinamicoCorreo ' type='text' id='" + (ids + 1) + "' name='criterios[]'/></div><p class='float-left'>Valor:</p><div class='float-left'><input class='form-control inputDinamicoCorreo' type='text' id='" + (ids + 2) + "' name='valores[]'/></div></li></ul>");
            $("#" + (ids + 1)).val(contactoCorreoCriterio[contCorreo]);
            $("#" + (ids + 2)).val(contactoCorreoValor[contCorreo]);
            ids = ids + 2;
            contCorreo++;
        }
        //direccion
        var contactoDireccionProvincia = (dataP.contactodireccionprovincia).split(",");
        var contactoDireccionCanton = (dataP.contactodireccioncanton).split(",");
        var contactoDireccionDistrito = (dataP.contactodirecciondistrito).split(",");
        var contactoDireccionOtraSenas = (dataP.contactodireccionotrassenas).split(",");
        var contadordireccion = contactoDireccionCanton.length;
        for (var contDirec = 0; contDirec < contadordireccion - 1; ) {
            var direccionhtml = "<div class='lista-direccion float-clear' style='clear:both;'><ul class='list-group'><li class='list-group-item'><div class='float-left'><input type='checkbox' name='indiceElemento[]'/></div><p class='float-left'>Provicia:</p><div class='float-left'><input class='form-control inputDinamicoDireccion' type='text' id='" + (ids + 1) + "' name='provincia[]'/></div><p class='float-left'>Canton:</p><div class='float-left'><input class='form-control inputDinamicoDireccion' type='text' id='" + (ids + 2) + "' name='canton[]'/></div><p class='float-left'>Distrito:</p><div class='float-left'><input class='form-control inputDinamicoDireccion' type='text' id='" + (ids + 3) + "' name='distrito[]'/></div><p class='float-left'>Otras Señas:</p><div class='float-left'><input class='form-control inputDinamicoDireccion' type='text' id='" + (ids + 4) + "' name='otrassenas[]'/></div></li></ul></div>"
            $("#direcciones").append(direccionhtml);
            $("#" + (ids + 1)).val(contactoDireccionProvincia[contDirec]);
            $("#" + (ids + 2)).val(contactoDireccionCanton[contDirec]);
            $("#" + (ids + 3)).val(contactoDireccionDistrito[contDirec]);
            $("#" + (ids + 4)).val(contactoDireccionOtraSenas[contDirec]);
            ids = ids + 4;
            contDirec++;
        }
        //telefono
        var contactoTelefonoCriterio = (dataP.contactotelefonocriterio).split(",");
        var contactoTelefonoValor = (dataP.contactotelefonovalor).split(",");
        var contadorTel = contactoTelefonoCriterio.length;
        for (var contTel = 0; contTel < contadorTel - 1; ) {
            $("#telefonos").append("<div class='lista-telefono float-clear' style='clear:both;'><ul class='list-group'><li class='list-group-item'><div class='float-left'><input type='checkbox' name='indiceElemento[]'/></div><p class='float-left'>Criterio:</p><div class='float-left'><input class='form-control inputDinamicoTelefono ' type='text' id='" + (ids + 1) + "' name='criterios[]'/></div><p class='float-left'>Valor:</p><div class='float-left'><input class='form-control inputDinamicoTelefono' type='tel' id='" + (ids + 2) + "' name='valores[]'  min=1000' max='99999999'/></div></li></ul>");
            $("#" + (ids + 1)).val(contactoTelefonoCriterio[contTel]);
            $("#" + (ids + 2)).val(contactoTelefonoValor[contTel]);
            ids = ids + 2;
            contTel++;
        }
        //Productos
        var proveedorproductos = (dataP.proveedorproductocodigo).split(",");
        var listaProductos = proveedorproductos.length;
        for (var inicio = 0; inicio < listaProductos; inicio++) {
            tablelista.rows().every(function (rowIdx, tableLoop, rowLoop) {
                var nodo = this.node();
                var datanproductosproveedor = tablelista.row($(this)).data();
                if (datanproductosproveedor.productocodigo === proveedorproductos[inicio]) {
                    $(nodo).find('input').prop('checked', true);
                }
            });
        }

    });
}

function actualizarProveedor() {
    var productos = '';
    var estadoTransaccion = 0;
    var banderaCorreo = 0;
    var banderaDireccion = 0;
    var banderaTelefono = 0;
    tablelista.rows().every(function (rowIdx, tableLoop, rowLoop) {
        var nodo = this.node();
        var estado = $(nodo).find('input').prop('checked');
        var datanproductosproveedor = tablelista.row($(this)).data();
        if (estado === true) {
            productos = productos.concat(datanproductosproveedor.productocodigo, ",");
        }
    });
    var correos = '';
    $('input.inputDinamicoCorreo').each(function () {
        if (($(this).val()) !== "") {
            correos = correos.concat(($(this).val()), ",");
            banderaCorreo = banderaCorreo + 1;
        }
    });
    var direccion = '';
    $('input.inputDinamicoDireccion').each(function () {
        if (($(this).val()) !== "") {
            direccion = direccion.concat(($(this).val()), ",");
            banderaDireccion = banderaDireccion + 1;
        }
    });
    var telefonos = '';
    var contadorTel = 0;
    $('input.inputDinamicoTelefono').each(function () {
        if (($(this).val()) !== "") {
            if (contadorTel === 1) {
                if (($(this).val()) >= 1000 && ($(this).val()) <= 9999999999) {
                    telefonos = telefonos.concat(($(this).val()), ",");
                    banderaTelefono = banderaTelefono + 1;
                } else {
                    $(".error").html("Numero de telefono incorrecto");
                    estadoTransaccion = 1;
                }
                contadorTel = 0;
            } else {
                telefonos = telefonos.concat(($(this).val()), ",");
                contadorTel = contadorTel + 1;
                banderaTelefono = banderaTelefono + 1;
            }
        }
    });
    var parametro = {
        "id": $("#idProveedor").val(),
        "nombre": $("#nombre").val(),
        "credito": $("#credito").val(),
        "estado": $("#estado").val(),
        "correo": correos.substring(0, correos.length - 1),
        "direccion": direccion.substring(0, direccion.length - 1),
        "telefono": telefonos.substring(0, telefonos.length - 1),
        "producto": productos.substring(0, productos.length - 1)
    };
    var modCorreo = banderaCorreo % 2;
    var modDireccion = banderaDireccion % 4;
    var modTelefono = banderaTelefono % 2;
    if (parametro["correo"] === "" || parametro["nombre"] === "" || parametro["credito"] === "" || parametro["estado"] === "" || parametro["direccion"] === "" || parametro["telefono"] === "" || parametro["producto"] === "" || estadoTransaccion === 1 || modCorreo !== 0 || modDireccion !== 0 || modTelefono !== 0) {
        if (parametro["nombre"] === "") {
            $(".error").html("No ingreso nombre");
        } else {
            if (parametro["credito"] === "") {
                $(".error").html("No ingreso la cantidad de dias de credito");
            } else {
                if (parametro["estado"] === "") {
                    $(".error").html("No ingreso un estado del contacto");
                } else {
                    if (parametro["correo"] === "" || modCorreo !== 0) {
                        $(".error").html("Datos del correo no completados");
                    } else {
                        if (parametro["direccion"] === "" || modDireccion !== 0) {
                            $(".error").html("Datos de direccion no completados");
                        } else {
                            if (estadoTransaccion === 1) {
                                $(".error").html("Numero de telefono incorrecto");
                            } else {
                                if (parametro["telefono"] === "" || modTelefono !== 0) {
                                    $(".error").html("Datos de telefono no completados");
                                } else {
                                    if (parametro["producto"] === "") {
                                        $(".error").html("No se selecciono producto");
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
    } else {
        $(".error").html("");
        $(".exito").html("");
        $.ajax(
                {
                    data: parametro,
                    url: '?controlador=Proveedor&accion=actualizarProveedor',
                    type: 'post',
                    beforeSend: function () {
                    },
                    success: function(response) {
                        alert("Proveedor Actualizado");
                        location.reload();
                    },
                    error: function() {
                        $(".error").html("No se pudo actualizar");
                    }
                }
        );
    }
}
function eliminarDatosProveedor(tbody, table3) {
    $(document).on("click", "button.eliminarproveedor", function () {
        var datanP = table3.row($(this).parents("tr")).data();
        var parametros = {
            "idProveedor": datanP.proveedorid
        };
        $.ajax(
                {
                    data: parametros,
                    url: '?controlador=Proveedor&accion=eliminarProveedor',
                    type: 'post',
                    beforeSend: function () {
                    },

                    success: function(response) {
                        $(".exito").html("Proveedor eliminado");
                    },
                    error: function() {
                        $(".error").html("No se pudo eliminar");
                    }

                }
        );
        $('#proveedor').DataTable().ajax.reload();
    });
}

$(document).ready(function () {
    tablelista = $('#listaproductos').DataTable({
        "ajax": {
            "url": "?controlador=Producto&accion=obtenerProductos",
            "method": "POST",
            "dataSrc": ''
        },
        "columns": [

            {"defaultcontent": null, render: function () {
                    return "<input type = 'checkbox' name='indiceProductosProveedor[]'/>";
                }},
            {"data": "productocodigo"},
            {"data": "productonombre"},
        ]
    });
});
function crearProveedor() {
    var productos = '';
    var estadoTransaccion = 0;
    var banderaCorreo = 0;
    var banderaDireccion = 0;
    var banderaTelefono = 0;
    tablelista.rows().every(function (rowIdx, tableLoop, rowLoop) {
        var nodo = this.node();
        var estado = $(nodo).find('input').prop('checked');
        var datanproductosproveedor = tablelista.row($(this)).data();
        if (estado === true) {
            productos = productos.concat(datanproductosproveedor.productocodigo, ",");
        }
    });
    var correos = '';
    $('input.inputDinamicoCorreo').each(function () {
        if (($(this).val()) !== "") {
            correos = correos.concat(($(this).val()), ",");
            banderaCorreo = banderaCorreo + 1;
        }
    });
    var direccion = '';
    $('input.inputDinamicoDireccion').each(function () {
        if (($(this).val()) !== "") {
            direccion = direccion.concat(($(this).val()), ",");
            banderaDireccion = banderaDireccion + 1;
        }
    });
    var telefonos = '';
    var contadorTel = 0;
    $('input.inputDinamicoTelefono').each(function () {
        if (($(this).val()) !== "") {
            if (contadorTel === 1) {
                if (($(this).val()) >= 1000 && ($(this).val()) <= 9999999999) {
                    telefonos = telefonos.concat(($(this).val()), ",");
                    banderaTelefono = banderaTelefono + 1;
                } else {
                    $(".error").html("Numero de telefono incorrecto");
                    estadoTransaccion = 1;
                }
                contadorTel = 0;
            } else {
                telefonos = telefonos.concat(($(this).val()), ",");
                contadorTel = contadorTel + 1;
                banderaTelefono = banderaTelefono + 1;
            }
        }
    });
    var parametro = {
        "correo": correos.substring(0, correos.length - 1),
        "nombre": $("#nombre").val(),
        "credito": $("#credito").val(),
        "estado": $("#estado").val(),
        "direccion": direccion.substring(0, direccion.length - 1),
        "telefono": telefonos.substring(0, telefonos.length - 1),
        "producto": productos.substring(0, productos.length - 1)
    };
    var modCorreo = banderaCorreo % 2;
    var modDireccion = banderaDireccion % 4;
    var modTelefono = banderaTelefono % 2;
    if (parametro["correo"] === "" || parametro["nombre"] === "" || parametro["credito"] === "" || parametro["estado"] === "" || parametro["direccion"] === "" || parametro["telefono"] === "" || parametro["producto"] === "" || estadoTransaccion === 1 || modCorreo !== 0 || modDireccion !== 0 || modTelefono !== 0) {
        if (parametro["nombre"] === "") {
            $(".error").html("No ingreso nombre");
        } else {
            if (parametro["credito"] === "") {
                $(".error").html("No ingreso la cantidad de dias de credito");
            } else {
                if (parametro["estado"] === "") {
                    $(".error").html("No ingreso un estado del contacto");
                } else {
                    if (parametro["correo"] === "" || modCorreo !== 0) {
                        $(".error").html("Datos del correo no completados");
                    } else {
                        if (parametro["direccion"] === "" || modDireccion !== 0) {
                            $(".error").html("Datos de direccion no completados");
                        } else {
                            if (estadoTransaccion === 1) {
                                $(".error").html("Numero de telefono incorrecto");
                            } else {
                                if (parametro["telefono"] === "" || modTelefono !== 0) {
                                    $(".error").html("Datos de telefono no completados");
                                } else {
                                    if (parametro["producto"] === "") {
                                        $(".error").html("No se selecciono producto");
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
    } else {
        $(".error").html("");
        $(".exito").html("");
        $.ajax(
                {
                    data: parametro,
                    url: '?controlador=Proveedor&accion=registrarProveedor',
                    type: 'post',
                    dataType: 'json',
                    beforeSend: function () {
                    },
                    success: function (response) { //en response va el resultado
                        if (response.msj === "Correcto") {
                            $(".exito").html('Registrado registrado correctamente');
                            $("#nombre").html('');
                            location.reload();
                        } else {
                            $(".error").html("Ya se encuentra registrado un proveedor con ese nombre.");
                        }
                    },
                    error: function() {
                        $(".error").html("No se pudo registrar");
                    }
                }
        );
    }
}

function crearProducto() {
    criterio = [];
    valor = [];
    llaves = [];
    if ($("#files").val() === "" || $("#nombreProducto").val() === "" || $("#descripcionProducto").val() === "" || $("#categoriaProducto").val() === "" || $("#orden").val() === "") {
        $("#aviso").html("Por favor complete el campo correspondiente");
    } else {
        cantidad = 0;
        var categoria = $("#categoriaProducto").val();
        $("input[name='criterios[]']").each(function () {
            cantidad++;
            criterio.push(cantidad + '#' + $(this).val());
        });
        criterios = criterio.join(",");
        $("input[name='valores[]']").each(function () {
            valor.push($(this).val());
        });
        acumulador = '';
        final = '';
        for (var i = 0; i < criterio.length; i++) {
            string = types[i];
            valores = string.split(".");
            acumulador = '';
            for (var j = 0; j < valores.length; j++) {
                entero = j + 1;
                valor = valores[j];
                contadores = i + 1;
                llaves.push(categoria + "-" + contadores + "-" + entero);
                acumulador += categoria + "-" + contadores + "-" + entero + "#" + valor + '&';
            }
            final += acumulador.substr(0, acumulador.length - 1);
            final += ",";
        }

        llavesF = llaves.join(",");
        console.log("vas " + llavesF);
        var form_data = new FormData();
        var totalfiles = document.getElementById('files').files.length;
        for (var index = 0; index < totalfiles; index++) {
            form_data.append("files[]", document.getElementById('files').files[index]);
        }
        form_data.append('nombreProducto', $("#nombreProducto").val());
        form_data.append('descripcionProducto', $("#descripcionProducto").val());
        form_data.append('categoriaProducto', $("#categoriaProducto").val());
        form_data.append('criteriosCategoria', criterios);
        form_data.append('criteriosValores', final);
        form_data.append('llavesValores', llavesF);
        form_data.append('orden', $('#ordenProducto').val());
        form_data.append('estado', $('#estadoProducto').val());
        form_data.append('porcentaje', $('#porcentaje').val());
        form_data.append('peso', $('#pesoProducto').val());
        form_data.append('volumen', $('#volumenProducto').val());
        $.ajax({
            url: '?controlador=Producto&accion=registrarProducto',
            type: 'post',
            data: form_data,
            contentType: false,
            processData: false,
            beforeSend: function () {
            },
            success: function (response) { //en response va el resultado
                if (response.msj === "Correcto") {
                    $("#aviso").html('Registrado registrado correctamente');
                    $("#correo").html('');
                    location.reload();
                } else {
                    $("#aviso").html("error al ingresar el producto");
                    location.reload();
                }

            },
            error: function () {
            }
        });
    }
}
//cuentas por cobrar
$(document).ready(function () {
    var tableCuenta = $('#ventasPorCobrar').DataTable({
        "ajax": {
            "destroy": true,
            "url": "?controlador=Cuenta&accion=obtenerCuentas",
            "method": "POST",
            "dataSrc": ''
        },
        "columns": [
            {"data": "ventaporcobrarid"},
            {"data": "ventaporcobrarnumerofactura"},
            {"data": "ventaporcobrarfecha"},
            {"data": "ventaporcobrarcliente"},
            {"data": "ventaporcobrarsaldo"},
            {"data": "ventaporcobrarreincidente"},
            {"data": "ventaporcobrarestado"},
            {"data": "ventaporcobrarplanesid"},
            {"defaultContent": "<button type='button' class='editarcuenta'><i>Editar</i></button><button type='button' class='eliminarcuenta'><i>Eliminar</i></button>"}
        ]
    });
    obtenerDatosCuenta("#ventasPorCobrar tbody", tableCuenta);
    eliminarDatosCuenta("#ventasPorCobrar tbody", tableCuenta);
});
function actualizarCuenta() {
    var parametro = {
        "id": $("#idCuenta").val(),
        "reincidente": $("#selectReincidente").val(),
        "estado": $("#selectEstado").val()
    };
    $.ajax(
            {
                data: parametro,
                url: '?controlador=Cuenta&accion=actualizarCuenta',
                type: 'post',
                beforeSend: function () {
                },
                success: function (response) {
                    location.reload();
                }
            }
    );
}
function obtenerDatosCuenta(tbody, tableCuenta) {
    $(document).on("click", "button.editarcuenta", function () {
        var data = tableCuenta.row($(this).parents("tr")).data();
        $("#selectReincidente option[value^='" + data.ventaporcobrarreincidente + "']").prop('selected', true)//,
        $("#selectEstado option[value^='" + data.ventaporcobrarestado + "']").prop('selected', true)
        $("#idCuenta").val(data.ventaporcobrarid);
    });
}
function eliminarDatosCuenta(tbody, tableCuenta) {
    $(document).on("click", "button.eliminarcuenta", function () {
        var datan = table2.row($(this).parents("tr")).data();
        var parametros = {
            "id": datan.ventaporcobrarid
        };
        $.ajax(
                {
                    data: parametros,
                    url: '?controlador=Cuenta&accion=eliminarCuenta',
                    type: 'post',
                    beforeSend: function () {
                        $("#mensaje").html("Procesando, \n\ espere por favor...");
                    },
                    success: function () { //en response va el resultado

                        $("#mensaje").html("bien");
                    }

                }

        );
    });
}

function ActualizarMorosidad() {
    $.ajax(
            {
                url: '?controlador=Cuenta&accion=actualizarMorosos',
                type: 'post',
                beforeSend: function () {
                    $("#mensaje").html("Procesando, \n\ espere por favor...");
                },
                success: function () { //en response va el resultado
                    location.reload();
                }
            }

    );
}

$(document).ready(function () {
    $('#morosos').DataTable({
        "ajax": {
            "url": "?controlador=Cuenta&accion=obtenerMorosos",
            "method": "POST",
            "dataSrc": ''
        },
        "columns": [
            {"data": "usuarioid"},
            {"data": "usuarionombreusuario"},
            {"data": "cantidadventas"}
        ]
    });
});
//porcentaje morosidad
function registrarMorosos() {
    crit = [];
    val = [];

    $("input[name='porcentajes[]']").each(function () {
        crit.push($(this).val());
    });
    rango = crit.join(",");
    $("input[name='valoresP[]']").each(function () {
        val.push($(this).val());
    });
    valores = val.join(".");
    console.log(rango + " & " + valores);
    var form_data = new FormData();
    form_data.append('rangoPorcentaje', rango);
    form_data.append('valores', valores);
    form_data.append('id', $("#cuentasNombreI").val());
    $.ajax(
            {
                url: '?controlador=Cuenta&accion=crearIntereses',
                type: 'post',
                data: form_data,
                contentType: false,
                processData: false,
                beforeSend: function () {
                },
                success: function (response) { //en response va el resultado
                    if (response == "Si") {
                        alert(response);
                        $('#porcentajeMorosidad').DataTable().ajax.reload();
                        location.reload();
                    } else {

                    }

                },
                error: function () {
                }
            }
    );
}
$(document).ready(function () {
    var tableCuenta = $('#porcentajeMorosidad').DataTable({
        "ajax": {
            "destroy": true,
            "url": "?controlador=Cuenta&accion=obtenerCuentasMorosas",
            "method": "POST",
            "dataSrc": ''
        },
        "columns": [
            {"data": "porcentajemorosidadmoraid"},
            {"data": "porcentajemorosidadmorarango"},
            {"data": "porcentajemorosidadmoraporcentaje"},
            {"data": "porcentajemorosidadmoraporcentajeid"},
            {"defaultContent": "<button type='button' class='editarPorcentaje'><i>Editar</i></button><button type='button' class='eliminarporcentaje'><i>Eliminar</i></button>"}
        ]
    });
    obtenerDatosPorc("#porcentajeMorosidad tbody", tableCuenta);
    eliminarDatosPorc("#porcentajeMorosidad tbody", tableCuenta);
});
function obtenerDatosPorc(tbody, tableCuenta) {
    $(document).on("click", "button.editarPorcentaje", function () {
        var data = tableCuenta.row($(this).parents("tr")).data();
        $("#idCuentaM").val(data.porcentajemorosidadmoraid);
    });
}
function eliminarDatosPorc(tbody, tableCuenta) {
    $(document).on("click", "button.eliminarporcentaje", function () {
        var datan = tableCuenta.row($(this).parents("tr")).data();
        var parametros = {
            "id": datan.porcentajemorosidadmoraid
        };
        $.ajax(
                {

                    url: '?controlador=Cuenta&accion=eliminarPorcentaje',
                    type: 'post',
                    data: parametros,
                    beforeSend: function () {
                        //$("#mensaje").html("Procesando, \n\ espere por favor...");
                    },
                    success: function () { //en response va el resultado
                        $('#porcentajeMorosidad').DataTable().ajax.reload();
                        //$("#mensaje").html("bien");

                    }

                }
        );
    });
}
function mostrarTab() {
    suma = 0.0;
    imp = 0.0
    $("#cuentasTotales tbody tr").each(function(idx, fila) {
        suma += parseFloat($(this).find('td:eq(1)').html());
    });
    $("#idCuenta1").html("Ventas antes de impuestos");
    $("#idDebe1").html(suma.toFixed(2));
    $("#idCuenta2").html("Impuesto de Ventas");
    imp += suma * 0.13;
    $("#idHaber2").html(imp.toFixed(2));
    $("#idCuenta3").html("Total despues de impuestos");
    $("#idTotal3").html((suma - imp).toFixed(2));
    $("#registrarAtraso").show();

}
function buscarPorFechas() {
    var fecha1 = new Date($("#fecha1").val());
    var fecha2 = new Date($("#fecha2").val());

    if (fecha1 >= fecha2) {
        $("#resultado").css('color', 'red');
        $("#resultado").html("la fecha final debe ser despues a la fecha inicial");
    } else {
        $("#resultado").css('color', 'green');
        $("#resultado").html("correcto");
        var parametros = {
            "fechaInicio": $("#fecha1").val(),
            "fechaFinal": $("#fecha2").val(),
        };
        $.ajax(
                {

                    url: '?controlador=Asientos&accion=buscarPorFecha',
                    type: 'post',
                    data: parametros,
                    beforeSend: function() {
                        //$("#mensaje").html("Procesando, \n\ espere por favor...");
                    },
                    success: function(response) { //en response va el resultado
                        $('#tabla_resultado').html('');
                        $('#tabla_resultado').append(response);
                    }

                }
        );
    }
}
$(document).ready(function() {
    $("#registrarAtraso").hide();
    var tableAsiento = $('#asientosCierre').DataTable({
        "ajax": {
            "destroy": true,
            "url": "?controlador=Asientos&accion=obtenerAsientosCierre",
            "method": "POST",
            "dataSrc": ''
        },
        "columns": [
            {"data": "asientoscierreid"},
            {"data": "asientoscierremes"},
            {"data": "asientoscierreanno"},
            {"data": "asientoscierreimpuestos"},
            {"data": "asientoscierretotal"},
            {"defaultContent": "<button type='button' class='editarasiento'><i>Editar</i></button><button type='button' class='eliminarasiento'><i>Eliminar</i></button>"}
        ]
    });
    obtenerDatosAsiento("#asientosCierre tbody", tableAsiento);
    eliminarDatosAsiento("#asientosCierre tbody", tableAsiento);
});
function eliminarDatosAsiento(tbody, tableCuenta) {
    $(document).on("click", "button.eliminarasiento", function() {
        var datan = tableCuenta.row($(this).parents("tr")).data();
        var parametros = {
            "id": datan.asientoscierreid
        };
        $.ajax(
                {
                    url: '?controlador=Asientos&accion=eliminarAsiento',
                    type: 'post',
                    data: parametros,
                    beforeSend: function() {
                        //$("#mensaje").html("Procesando, \n\ espere por favor...");
                    },
                    success: function() { //en response va el resultado
                        $('#asientosCierre').DataTable().ajax.reload();
                        $("#resultado").css('color', 'green');
                        $("#resultado").html("eliminado correctamente");

                    }

                }
        );
    });
}
function obtenerDatosAsiento(tbody, tableCuenta) {
    $(document).on("click", "button.editarasiento", function() {
        var data = tableCuenta.row($(this).parents("tr")).data();
        var date = new Date($("#fecha2").val());
        mes = date.getMonth();
        console.log(mes);
    });
}
function registrarAsiento() {
    var date = new Date($("#fecha2").val());
    mes = date.getMonth();
    anno = date.getFullYear();
    var meses = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];
    var parametro = {
        "mes": meses[mes],
        "anno": anno,
        "imp": $("#idHaber2").text(),
        "total": $("#idTotal3").text()
    }
    //console.log($("#idHaber2").text() + " / " + $("#idTotal3").text());
    $.ajax(
            {
                url: '?controlador=Asientos&accion=registrarAsientosDeCierre',
                type: 'post',
                data: parametro,
                beforeSend: function() {
                },
                success: function(response) { //en response va el resultado
                    if (response == "Si") {
                        //alert(response);
                        $('#asientosCierre').DataTable().ajax.reload();
                        $("#resultado").css('color', 'green');
                        $("#resultado").html("Registrado correctamente");
                    } else {
                        alert(response);
                    }

                },
                error: function() {
                }
            }
    );
    $("#registrarAtraso").hide();
}