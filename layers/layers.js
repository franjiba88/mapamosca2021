var wms_layers = [];


        var lyr_GoogleHybrid_0 = new ol.layer.Tile({
            'title': 'Google Hybrid',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' &middot; <a href="https://www.google.at/permissions/geoguidelines/attr-guide.html">Map data ©2015 Google</a>',
                url: 'https://mt1.google.com/vt/lyrs=y&x={x}&y={y}&z={z}'
            })
        });
var format_LIMITESCATASTRAL_1 = new ol.format.GeoJSON();
var features_LIMITESCATASTRAL_1 = format_LIMITESCATASTRAL_1.readFeatures(json_LIMITESCATASTRAL_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_LIMITESCATASTRAL_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_LIMITESCATASTRAL_1.addFeatures(features_LIMITESCATASTRAL_1);
var lyr_LIMITESCATASTRAL_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_LIMITESCATASTRAL_1, 
                style: style_LIMITESCATASTRAL_1,
                interactive: true,
                title: '<img src="styles/legend/LIMITESCATASTRAL_1.png" /> LIMITES CATASTRAL'
            });
var format_07_02_NucleosUrbanos_pol_2 = new ol.format.GeoJSON();
var features_07_02_NucleosUrbanos_pol_2 = format_07_02_NucleosUrbanos_pol_2.readFeatures(json_07_02_NucleosUrbanos_pol_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_07_02_NucleosUrbanos_pol_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_07_02_NucleosUrbanos_pol_2.addFeatures(features_07_02_NucleosUrbanos_pol_2);
var lyr_07_02_NucleosUrbanos_pol_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_07_02_NucleosUrbanos_pol_2, 
                style: style_07_02_NucleosUrbanos_pol_2,
                interactive: true,
                title: '<img src="styles/legend/07_02_NucleosUrbanos_pol_2.png" /> 07_02_NucleosUrbanos_pol'
            });
var format_TRATAMIENTOTOTAL_3 = new ol.format.GeoJSON();
var features_TRATAMIENTOTOTAL_3 = format_TRATAMIENTOTOTAL_3.readFeatures(json_TRATAMIENTOTOTAL_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_TRATAMIENTOTOTAL_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_TRATAMIENTOTOTAL_3.addFeatures(features_TRATAMIENTOTOTAL_3);
var lyr_TRATAMIENTOTOTAL_3 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_TRATAMIENTOTOTAL_3, 
                style: style_TRATAMIENTOTOTAL_3,
                interactive: true,
                title: '<img src="styles/legend/TRATAMIENTOTOTAL_3.png" /> TRATAMIENTO TOTAL'
            });
var format_POLGONOS_4 = new ol.format.GeoJSON();
var features_POLGONOS_4 = format_POLGONOS_4.readFeatures(json_POLGONOS_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_POLGONOS_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_POLGONOS_4.addFeatures(features_POLGONOS_4);
var lyr_POLGONOS_4 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_POLGONOS_4, 
                style: style_POLGONOS_4,
                interactive: true,
                title: '<img src="styles/legend/POLGONOS_4.png" /> POLÍGONOS'
            });
var format_ZONAEXCLUSIN2021_5 = new ol.format.GeoJSON();
var features_ZONAEXCLUSIN2021_5 = format_ZONAEXCLUSIN2021_5.readFeatures(json_ZONAEXCLUSIN2021_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ZONAEXCLUSIN2021_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ZONAEXCLUSIN2021_5.addFeatures(features_ZONAEXCLUSIN2021_5);
var lyr_ZONAEXCLUSIN2021_5 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_ZONAEXCLUSIN2021_5, 
                style: style_ZONAEXCLUSIN2021_5,
                interactive: true,
                title: '<img src="styles/legend/ZONAEXCLUSIN2021_5.png" /> ZONA EXCLUSIÓN 2021'
            });

lyr_GoogleHybrid_0.setVisible(true);lyr_LIMITESCATASTRAL_1.setVisible(true);lyr_07_02_NucleosUrbanos_pol_2.setVisible(true);lyr_TRATAMIENTOTOTAL_3.setVisible(true);lyr_POLGONOS_4.setVisible(true);lyr_ZONAEXCLUSIN2021_5.setVisible(true);
var layersList = [lyr_GoogleHybrid_0,lyr_LIMITESCATASTRAL_1,lyr_07_02_NucleosUrbanos_pol_2,lyr_TRATAMIENTOTOTAL_3,lyr_POLGONOS_4,lyr_ZONAEXCLUSIN2021_5];
lyr_LIMITESCATASTRAL_1.set('fieldAliases', {'MAPA': 'MAPA', 'TTGGSS': 'TTGGSS', 'NUMSYMBOL': 'NUMSYMBOL', 'FECHAALTA': 'FECHAALTA', 'FECHABAJA': 'FECHABAJA', 'NINTERNO': 'NINTERNO', 'REFCAT': 'REFCAT', 'layer': 'layer', 'path': 'path', });
lyr_07_02_NucleosUrbanos_pol_2.set('fieldAliases', {'codigo_nd': 'codigo_nd', 'cod_pob': 'cod_pob', 'nombre_pob': 'nombre_pob', 'nivel': 'nivel', 'estado': 'estado', });
lyr_TRATAMIENTOTOTAL_3.set('fieldAliases', {'ID_RECINTO': 'ID_RECINTO', 'CD_PROV': 'CD_PROV', 'CD_MUN': 'CD_MUN', 'CD_POL': 'CD_POL', 'CD_PARCELA': 'CD_PARCELA', 'CD_RECINTO': 'CD_RECINTO', 'CD_USO': 'CD_USO', 'NU_AREA': 'NU_AREA', 'PC_PASTOS': 'PC_PASTOS', 'COEF_REG': 'COEF_REG', 'PDTE_MEDIA': 'PDTE_MEDIA', 'INCIDENCIA': 'INCIDENCIA', 'REGION': 'REGION', 'GC': 'GC', 'VER': 'VER', 'layer': 'layer', 'path': 'path', });
lyr_POLGONOS_4.set('fieldAliases', {'ID_POLIGON': 'ID_POLIGON', 'CD_PROVINC': 'CD_PROVINC', 'CD_MUNICIP': 'CD_MUNICIP', 'CD_POLIGON': 'CD_POLIGON', 'PICADA': 'PICADA', 'Nº MOSCA': 'Nº MOSCA', 'PLACA': 'PLACA', 'PARAJE': 'PARAJE', });
lyr_ZONAEXCLUSIN2021_5.set('fieldAliases', {'id': 'id', 'codigo_nd': 'codigo_nd', 'cod_pob': 'cod_pob', 'nombre_pob': 'nombre_pob', 'nivel': 'nivel', 'estado': 'estado', });
lyr_LIMITESCATASTRAL_1.set('fieldImages', {'MAPA': 'Range', 'TTGGSS': 'TextEdit', 'NUMSYMBOL': 'Range', 'FECHAALTA': 'Range', 'FECHABAJA': 'Range', 'NINTERNO': 'TextEdit', 'REFCAT': 'TextEdit', 'layer': 'TextEdit', 'path': 'TextEdit', });
lyr_07_02_NucleosUrbanos_pol_2.set('fieldImages', {'codigo_nd': '', 'cod_pob': '', 'nombre_pob': '', 'nivel': '', 'estado': '', });
lyr_TRATAMIENTOTOTAL_3.set('fieldImages', {'ID_RECINTO': 'TextEdit', 'CD_PROV': 'Range', 'CD_MUN': 'Range', 'CD_POL': 'Range', 'CD_PARCELA': 'TextEdit', 'CD_RECINTO': 'TextEdit', 'CD_USO': 'TextEdit', 'NU_AREA': 'TextEdit', 'PC_PASTOS': 'Range', 'COEF_REG': 'Range', 'PDTE_MEDIA': 'TextEdit', 'INCIDENCIA': 'TextEdit', 'REGION': 'TextEdit', 'GC': 'TextEdit', 'VER': 'TextEdit', 'layer': 'TextEdit', 'path': 'TextEdit', });
lyr_POLGONOS_4.set('fieldImages', {'ID_POLIGON': 'TextEdit', 'CD_PROVINC': 'TextEdit', 'CD_MUNICIP': 'TextEdit', 'CD_POLIGON': 'TextEdit', 'PICADA': 'TextEdit', 'Nº MOSCA': 'TextEdit', 'PLACA': 'TextEdit', 'PARAJE': 'TextEdit', });
lyr_ZONAEXCLUSIN2021_5.set('fieldImages', {'id': 'TextEdit', 'codigo_nd': 'TextEdit', 'cod_pob': 'TextEdit', 'nombre_pob': 'TextEdit', 'nivel': 'TextEdit', 'estado': 'TextEdit', });
lyr_LIMITESCATASTRAL_1.set('fieldLabels', {'MAPA': 'no label', 'TTGGSS': 'no label', 'NUMSYMBOL': 'no label', 'FECHAALTA': 'no label', 'FECHABAJA': 'no label', 'NINTERNO': 'no label', 'REFCAT': 'no label', 'layer': 'no label', 'path': 'no label', });
lyr_07_02_NucleosUrbanos_pol_2.set('fieldLabels', {'codigo_nd': 'no label', 'cod_pob': 'no label', 'nombre_pob': 'inline label', 'nivel': 'no label', 'estado': 'no label', });
lyr_TRATAMIENTOTOTAL_3.set('fieldLabels', {'ID_RECINTO': 'no label', 'CD_PROV': 'no label', 'CD_MUN': 'inline label', 'CD_POL': 'no label', 'CD_PARCELA': 'no label', 'CD_RECINTO': 'no label', 'CD_USO': 'no label', 'NU_AREA': 'no label', 'PC_PASTOS': 'no label', 'COEF_REG': 'no label', 'PDTE_MEDIA': 'no label', 'INCIDENCIA': 'no label', 'REGION': 'no label', 'GC': 'no label', 'VER': 'no label', 'layer': 'no label', 'path': 'no label', });
lyr_POLGONOS_4.set('fieldLabels', {'ID_POLIGON': 'no label', 'CD_PROVINC': 'no label', 'CD_MUNICIP': 'no label', 'CD_POLIGON': 'inline label', 'PICADA': 'no label', 'Nº MOSCA': 'no label', 'PLACA': 'no label', 'PARAJE': 'no label', });
lyr_ZONAEXCLUSIN2021_5.set('fieldLabels', {'id': 'no label', 'codigo_nd': 'no label', 'cod_pob': 'no label', 'nombre_pob': 'no label', 'nivel': 'no label', 'estado': 'no label', });
lyr_ZONAEXCLUSIN2021_5.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});