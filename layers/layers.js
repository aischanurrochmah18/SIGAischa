var wms_layers = [];

var format_batangkecamatannn_0 = new ol.format.GeoJSON();
var features_batangkecamatannn_0 = format_batangkecamatannn_0.readFeatures(json_batangkecamatannn_0, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_batangkecamatannn_0 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_batangkecamatannn_0.addFeatures(features_batangkecamatannn_0);
var lyr_batangkecamatannn_0 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_batangkecamatannn_0, 
                style: style_batangkecamatannn_0,
                popuplayertitle: 'batangkecamatannn',
                interactive: true,
    title: 'batangkecamatannn<br />\
    <img src="styles/legend/batangkecamatannn_0_0.png" /> Bandar<br />\
    <img src="styles/legend/batangkecamatannn_0_1.png" /> Banyuputih<br />\
    <img src="styles/legend/batangkecamatannn_0_2.png" /> Batang<br />\
    <img src="styles/legend/batangkecamatannn_0_3.png" /> Bawang<br />\
    <img src="styles/legend/batangkecamatannn_0_4.png" /> Blado<br />\
    <img src="styles/legend/batangkecamatannn_0_5.png" /> Gringsing<br />\
    <img src="styles/legend/batangkecamatannn_0_6.png" /> Kandeman<br />\
    <img src="styles/legend/batangkecamatannn_0_7.png" /> Limpung<br />\
    <img src="styles/legend/batangkecamatannn_0_8.png" /> Pecalungan<br />\
    <img src="styles/legend/batangkecamatannn_0_9.png" /> Reban<br />\
    <img src="styles/legend/batangkecamatannn_0_10.png" /> Subah<br />\
    <img src="styles/legend/batangkecamatannn_0_11.png" /> Tersono<br />\
    <img src="styles/legend/batangkecamatannn_0_12.png" /> Tulis<br />\
    <img src="styles/legend/batangkecamatannn_0_13.png" /> Warungasem<br />\
    <img src="styles/legend/batangkecamatannn_0_14.png" /> Wonotunggal<br />\
    <img src="styles/legend/batangkecamatannn_0_15.png" /> <br />' });

lyr_batangkecamatannn_0.setVisible(true);
var layersList = [lyr_batangkecamatannn_0];
lyr_batangkecamatannn_0.set('fieldAliases', {'NAMOBJ': 'NAMOBJ', 'FCODE': 'FCODE', 'REMARK': 'REMARK', 'METADATA': 'METADATA', 'SRS_ID': 'SRS_ID', 'KDBBPS': 'KDBBPS', 'KDCBPS': 'KDCBPS', 'KDCPUM': 'KDCPUM', 'KDEBPS': 'KDEBPS', 'KDEPUM': 'KDEPUM', 'KDPBPS': 'KDPBPS', 'KDPKAB': 'KDPKAB', 'KDPPUM': 'KDPPUM', 'LUASWH': 'LUASWH', 'TIPADM': 'TIPADM', 'WADMKC': 'WADMKC', 'WADMKD': 'WADMKD', 'WADMKK': 'WADMKK', 'WADMPR': 'WADMPR', 'WIADKC': 'WIADKC', 'WIADKK': 'WIADKK', 'WIADPR': 'WIADPR', 'WIADKD': 'WIADKD', 'UUPP': 'UUPP', 'luas': 'luas', 'SHAPE_Leng': 'SHAPE_Leng', 'SHAPE_Area': 'SHAPE_Area', 'Luas_Km2': 'Luas_Km2', 'Jml_Pddk': 'Jml_Pddk', 'Kepadatann': 'Kepadatann', });
lyr_batangkecamatannn_0.set('fieldImages', {'NAMOBJ': 'TextEdit', 'FCODE': 'TextEdit', 'REMARK': 'TextEdit', 'METADATA': 'TextEdit', 'SRS_ID': 'TextEdit', 'KDBBPS': 'TextEdit', 'KDCBPS': 'TextEdit', 'KDCPUM': 'TextEdit', 'KDEBPS': 'TextEdit', 'KDEPUM': 'TextEdit', 'KDPBPS': 'TextEdit', 'KDPKAB': 'TextEdit', 'KDPPUM': 'TextEdit', 'LUASWH': 'TextEdit', 'TIPADM': 'TextEdit', 'WADMKC': 'TextEdit', 'WADMKD': 'TextEdit', 'WADMKK': 'TextEdit', 'WADMPR': 'TextEdit', 'WIADKC': 'TextEdit', 'WIADKK': 'TextEdit', 'WIADPR': 'TextEdit', 'WIADKD': 'TextEdit', 'UUPP': 'TextEdit', 'luas': 'TextEdit', 'SHAPE_Leng': 'TextEdit', 'SHAPE_Area': 'TextEdit', 'Luas_Km2': 'Range', 'Jml_Pddk': 'TextEdit', 'Kepadatann': 'TextEdit', });
lyr_batangkecamatannn_0.set('fieldLabels', {'NAMOBJ': 'no label', 'FCODE': 'no label', 'REMARK': 'no label', 'METADATA': 'no label', 'SRS_ID': 'no label', 'KDBBPS': 'no label', 'KDCBPS': 'no label', 'KDCPUM': 'no label', 'KDEBPS': 'no label', 'KDEPUM': 'no label', 'KDPBPS': 'no label', 'KDPKAB': 'no label', 'KDPPUM': 'no label', 'LUASWH': 'no label', 'TIPADM': 'no label', 'WADMKC': 'no label', 'WADMKD': 'no label', 'WADMKK': 'no label', 'WADMPR': 'no label', 'WIADKC': 'no label', 'WIADKK': 'no label', 'WIADPR': 'no label', 'WIADKD': 'no label', 'UUPP': 'no label', 'luas': 'no label', 'SHAPE_Leng': 'no label', 'SHAPE_Area': 'no label', 'Luas_Km2': 'no label', 'Jml_Pddk': 'no label', 'Kepadatann': 'no label', });
lyr_batangkecamatannn_0.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});