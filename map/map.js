var TileLayer = function (options) {
		var layer = new ol.layer.Tile({
			extent: ol.proj.transformExtent(options.mapExtent, options.fromProject, options.toProject),
			source: new ol.source.XYZ({
				attributions: [options.attribution],
				url: options.url,
				tilePixelRatio: options.tilePixelRatio, // THIS IS IMPORTANT
				minZoom: options.mapMinZoom,
				maxZoom: options.mapMaxZoom
			})
		});
		return layer;
	};
	//定义Google切片参数    
var map;	
var view;
var PI = Math.PI;
var a = 6378245.0;
var ee = 0.00669342162296594323;
function initMap(){
	var defaults = {
		url: 'http://222.44.123.251/maps/{z}/{x}/{y}.png',
		mapExtent: [-2.0037508342787E7, -2.0037508342787E7, 2.0037508342787E7, 2.0037508342787E7],
		mapMinZoom: 1,
		mapMaxZoom: 14,
		attribution: new ol.Attribution({
			html: 'Tiles © GoogleMap'
		}),
		tilePixelRatio: 1,
		fromProject: "EPSG:102100",
		toProject: "EPSG:3857"
	};
	var layer = new TileLayer(defaults);
	view = new ol.View({
        center: ol.proj.fromLonLat([121.476788,31.234082]),
        zoom: 12,
        minZoom: 6,
        maxZoom: 16
    });
	var sate = new ol.layer.Group({
        layers: [layer]
    });
    map = new ol.Map({
        target: 'map',
        layers: [ 
			sate
        ],
        view:view
      });
}

/**var layerlv1,layerlv2;
var createMark = function(obj){
	var layerlv1arry1 = [];
    var layerlv1arry2 = [];
	var coordinates = ol.proj.fromLonLat([obj.x,obj.y])
        var feature = new ol.Feature(new ol.geom.Point(coordinates));
        //设置地图图标
        feature.setStyle(iconstyle());
       // feature.id = obj[i].ID;
        //feature.X = obj[i].X;
        //feature.Y = obj[i].Y;
        layerlv1arry1.push(feature)
		layerlv1 = new ol.layer.Vector({
        source: new ol.source.Vector({
            features: layerlv1arry1
        })
    });
    map.addLayer(layerlv1);
}**/


var layerlv1;
function createMark(objArr){
	var layerlv1arry1 = [];
	features = [];
	layerlv1arry1 = [];
	for (var i = 0; i < objArr.length; i++) {
		var coordinates = ol.proj.fromLonLat(wgs84togcj02(objArr[i].x,objArr[i].y));
        var feature = new ol.Feature(new ol.geom.Point(coordinates));
        //设置地图图标
        feature.setStyle(iconstyle("../css/image/icon/position-big.png",""));
        feature.name = "1";
        layerlv1arry1.push(feature);
	}

	layerlv1 = new ol.layer.Vector({
        source: new ol.source.Vector({
            features : layerlv1arry1
        })
    });
    if(objArr.length>0){
        view.setCenter(ol.proj.fromLonLat(wgs84togcj02(objArr[0].x,objArr[0].y)));
    }
    map.addLayer(layerlv1);
}

var layerlv2;
function createMark2(objp,name){
    var layerlv1arry2 = [];
    features = [];
    layerlv1arry2 = [];
        var coordinates = ol.proj.fromLonLat(wgs84togcj02(objp.x,objp.y));
        var feature = new ol.Feature(new ol.geom.Point(coordinates));
        //设置地图图标
        feature.setStyle(iconstyle("../css/image/icon/mapperson.png",name));
        layerlv1arry2.push(feature);

    layerlv2 = new ol.layer.Vector({
        source: new ol.source.Vector({
            features : layerlv1arry2
        })
    });
    map.addLayer(layerlv2);
}

function removeLayer(){
    map.removeLayer(layerlv1);
}

function removeLayer2(){
    map.removeLayer(alayer);
}

function removeLayer3(num){
    if(num == 0){
        map.removeLayer(layerlv1);
    }
    else if(num == 1){
        map.removeLayer(alayer);
    }
    else if(num == 2){
        map.removeLayer(layerlv2);
    }
}

var iconstyle = function(iconmc,name) {
    return new ol.style.Style({
        image: new ol.style.Icon({
            src: iconmc
        }),
        text : new ol.style.Text({
            text : name
        })
    });
}

var alayer;
/*************画线****************/
function createLine2(objArr,showStart){
    var points = [];

    for (var i = 0; i < objArr.length; i++) {
        points.push(wgs84togcj02(parseFloat(objArr[i].x),parseFloat(objArr[i].y)));
    }

    var line = new ol.geom.LineString(points);
    
    
    var feature = new ol.Feature({
        geometry : line.transform("EPSG:4326","EPSG:3857")
    });
    feature.title = "1";

   
    feature.setStyle(new ol.style.Style({
        stroke : new ol.style.Stroke({
            color : [255,0,0,1],
            width : 4
        }),
        fill:new ol.style.Fill({
            color:"#0044CC"
        }),
        image : new ol.style.Icon({
            src : "../css/image/icon/arrow.png"
        }),
        text : new ol.style.Text({
            text : ""
        })
    }));

    var source = new ol.source.Vector({
        type:'LineString',
        features : [feature]
    });

    

    alayer = new ol.layer.Vector({
        source : source,
    });

    if(points.length > 0){
        

        if(!showStart){
            var startFeature = new ol.Feature(
                (new ol.geom.Point(points[0])).transform("EPSG:4326","EPSG:3857")
            );
            startFeature.setStyle(iconstyle("../css/image/icon/car_start.png",""));
            alayer.getSource().addFeature(startFeature);

            var endFeature = new ol.Feature(
                (new ol.geom.Point(points[points.length-1])).transform("EPSG:4326","EPSG:3857")        
            );
            endFeature.setStyle(iconstyle("../css/image/icon/car_end.png",""));
            alayer.getSource().addFeature(endFeature);
        }
        
    }

   

    if(objArr.length>0){
        //view.setCenter(ol.proj.fromLonLat(wgs84togcj02(a[0].x,a[0].y)));
         view.setCenter(ol.proj.fromLonLat(wgs84togcj02(objArr[0].x,objArr[0].y)));
    }

    map.addLayer(alayer);
}


/******高德谷歌转化成标准图标********/
var gcj02towgs84 = function(lng, lat){
    if (out_of_china(lng, lat)) {
        return [lng, lat]
    }
    else {
        var dlat = transformlat(lng - 105.0, lat - 35.0);
        var dlng = transformlng(lng - 105.0, lat - 35.0);
        var radlat = lat / 180.0 * PI;
        var magic = Math.sin(radlat);
        magic = 1 - ee * magic * magic;
        var sqrtmagic = Math.sqrt(magic);
        dlat = (dlat * 180.0) / ((a * (1 - ee)) / (magic * sqrtmagic) * PI);
        dlng = (dlng * 180.0) / (a / sqrtmagic * Math.cos(radlat) * PI);
        mglat = lat + dlat;
        mglng = lng + dlng;
        return [lng * 2 - mglng, lat * 2 - mglat]

    }
}

/********将标准坐标转化为高德坐标*********/
function wgs84togcj02(lng, lat) {
    if (out_of_china(lng, lat)) {
        return [lng, lat]
    }
    else {
        var dlat = transformlat(lng - 105.0, lat - 35.0);
        var dlng = transformlng(lng - 105.0, lat - 35.0);
        var radlat = lat / 180.0 * PI;
        var magic = Math.sin(radlat);
        magic = 1 - ee * magic * magic;
        var sqrtmagic = Math.sqrt(magic);
        dlat = (dlat * 180.0) / ((a * (1 - ee)) / (magic * sqrtmagic) * PI);
        dlng = (dlng * 180.0) / (a / sqrtmagic * Math.cos(radlat) * PI);
        var mglat = lat + dlat;
        var mglng = lng + dlng;
        return [mglng, mglat]
    }
}

var transformlat = function(lng, lat){
    var ret = -100.0 + 2.0 * lng + 3.0 * lat + 0.2 * lat * lat + 0.1 * lng * lat + 0.2 * Math.sqrt(Math.abs(lng));
    ret += (20.0 * Math.sin(6.0 * lng * PI) + 20.0 * Math.sin(2.0 * lng * PI)) * 2.0 / 3.0;
    ret += (20.0 * Math.sin(lat * PI) + 40.0 * Math.sin(lat / 3.0 * PI)) * 2.0 / 3.0;
    ret += (160.0 * Math.sin(lat / 12.0 * PI) + 320 * Math.sin(lat * PI / 30.0)) * 2.0 / 3.0;
    return ret
}

var transformlng = function(lng, lat){
    var ret = 300.0 + lng + 2.0 * lat + 0.1 * lng * lng + 0.1 * lng * lat + 0.1 * Math.sqrt(Math.abs(lng));
    ret += (20.0 * Math.sin(6.0 * lng * PI) + 20.0 * Math.sin(2.0 * lng * PI)) * 2.0 / 3.0;
    ret += (20.0 * Math.sin(lng * PI) + 40.0 * Math.sin(lng / 3.0 * PI)) * 2.0 / 3.0;
    ret += (150.0 * Math.sin(lng / 12.0 * PI) + 300.0 * Math.sin(lng / 30.0 * PI)) * 2.0 / 3.0;
    return ret
}

var out_of_china = function(lng, lat){
    return (lng < 72.004 || lng > 137.8347) || ((lat < 0.8293 || lat > 55.8271) || false);
}