var icon = '{'+
	'"icon":['+
		'{"url":"icon/icon1.png","name":"图标1"},'+
		'{"url":"icon/icon2.png","name":"图标2"},'+
		'{"url":"icon/icon3.png","name":"图标3"},'+
		'{"url":"icon/icon4.png","name":"图标4"},'+
		'{"url":"icon/icon5.png","name":"图标5"},'+
		'{"url":"icon/icon6.png","name":"图标6"},'+
		'{"url":"icon/icon7.png","name":"图标7"},'+
		'{"url":"icon/icon8.png","name":"图标8"},'+
		'{"url":"icon/icon9.png","name":"图标9"},'+
		'{"url":"icon/icon10.png","name":"图标10"},'+
		'{"url":"icon/icon11.png","name":"图标11"}'+
	']'+
'}'

var iconArr = [];

function getIconArr(){
	obj = JSON.parse(icon);
	for(var i=0;i<obj.icon.length;i++){
		var copyObj = new Object();
		copyObj.url = "http://192.168.2.2/"+obj.icon[i].url;
		copyObj.name = obj.icon[i].name;
		iconArr.push(copyObj);
	}
	return iconArr;
}