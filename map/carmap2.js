function carmap(){
	this.defaults = {
		url: "http://222.44.123.251"+'/maps/{z}/{x}/{y}.png',
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

	this.layer = new TileLayer(this.defaults);

	this.view = new ol.View({
		center: ol.proj.fromLonLat([121.054378,32.469629]),
        zoom: 10,
        minZoom: 1,
        maxZoom: 12
	});

	this.sate = new ol.layer.Group({
		layers : [this.layer]
	});

	this.map = new ol.Map({
		target : 'map',
		layers : [
			this.sate
		],
		view : this.view
	});

};

carmap.prototype.TileLayer = function(options){
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

carmap.prototype.createLine = function(objArr){
	var points = [];

	for (var i = 0; i < objArr.length; i++) {
	    points.push(wgs84togcj02(parseFloat(objArr[i].x),parseFloat(objArr[i].y)));
	}

	var line = new ol.geom.LineString(points);
	    
	    
	var feature = new ol.Feature({
	    geometry : line.transform("EPSG:4326","EPSG:3857")
	});

	   
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
	    })
	}));

	var source = new ol.source.Vector({
	    type:'LineString',
	    features : [feature]
    });

	this.alayer = new ol.layer.Vector({
	    source : source,
	});

	if(points.length > 0){
	    var startFeature = new ol.Feature(
	        (new ol.geom.Point(points[0])).transform("EPSG:4326","EPSG:3857")
	    );
		startFeature.setStyle(iconstyle("../css/image/icon/car_start.png"));
		this.alayer.getSource().addFeature(startFeature);

		var endFeature = new ol.Feature(
			(new ol.geom.Point(points[points.length-1])).transform("EPSG:4326","EPSG:3857")        
	    );
	    endFeature.setStyle(iconstyle("../css/image/icon/car_end.png"));
	    this.alayer.getSource().addFeature(endFeature);
	}

	if(objArr.length>0){
	    this.view.setCenter(ol.proj.fromLonLat(wgs84togcj02(objArr[0].x,objArr[0].y)));
	}

	this.map.addLayer(this.alayer);
};

