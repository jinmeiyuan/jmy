String.format = function() {
    if (arguments.length == 0)
        return null;
    var str = arguments[0];
    for ( var i = 1; i < arguments.length; i++) {
        var re = new RegExp('\\{' + (i - 1) + '\\}', 'gm');
        str = str.replace(re, arguments[i]);
    }
    return str;
};


String.uuid = function () {
    var guid = "";
    for (var i = 1; i <= 32; i++) {
        var n = Math.floor(Math.random() * 16.0).toString(16);
        guid += n;
        if ((i == 8) || (i == 12) || (i == 16) || (i == 20))
            guid += "-";
    }
    return guid + "";
};
String.datediff = function (sDate1, sDate2) {
    var arrDate, objDate1, objDate2, intDays;
    arrDate = sDate1.split("-");
    objDate1 = new Date(arrDate[0] + '-' + arrDate[1] + '-' + arrDate[2]);
    arrDate = sDate2.split("-");
    objDate2 = new Date(arrDate[0] + '-' + arrDate[1] + '-' + arrDate[2]);
    intDays = parseInt((objDate2 - objDate1) / 1000 / 60 / 60 / 24);
    return intDays;
};
String.seconddiff = function (sDate1, sDate2) {
    var strdate1, objdate1, objdate2, strdate2,seconds;
    strdate1 = sDate1.replace("-", "/");
    strdate1 = strdate1.replace("-", "/");

    strdate2 = sDate2.replace("-", "/");
    strdate2 = strdate2.replace("-", "/");

    objdate1 = new Date(strdate1);
    objdate2 = new Date(strdate2);
    seconds = parseInt((objdate2 - objdate1) / 1000);
    return seconds;
};
//�ж��Ƿ����2000-01-01 0:00:00
String.isdefaultdate = function (value) {
    var datestr = value.replace(/-/g, "/");
    var dateobj = new Date(datestr);
    var setdateobj = new Date(2000, 0, 1, 0, 0, 0, 0);
    if ((dateobj-setdateobj) ==0) {
        return "";
    } else {
        return value;
    }
};

String.geturlparam=function(name){
    var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)"); //����һ������Ŀ�������������ʽ����
    var r = window.location.search.substr(1).match(reg);  //ƥ��Ŀ�����
    if (r != null) {return unescape(r[2]);}else{ return null;} //���ز���ֵ
};

String.getArrayByKey = function (key, array) {
    var result = "";
    for (var i = 0; i < array.length; i++) {
        var obj = array[i];
        if (obj.value == key) {
            result = obj.text;
            break;
        }
    }
    return result;
};


/**
* ʱ�����ĸ�ʽ��
*/
Date.prototype.format = function(format)
{
/*
* format="yyyy-MM-dd hh:mm:ss";
*/
var o = {
"M+" : this.getMonth() + 1,
"d+" : this.getDate(),
"h+" : this.getHours(),
"m+" : this.getMinutes(),
"s+" : this.getSeconds(),
"q+" : Math.floor((this.getMonth() + 3) / 3),
"S" : this.getMilliseconds()
}

if (/(y+)/.test(format))
{
format = format.replace(RegExp.$1, (this.getFullYear() + "").substr(4
- RegExp.$1.length));
}

for (var k in o)
{
if (new RegExp("(" + k + ")").test(format))
{
format = format.replace(RegExp.$1, RegExp.$1.length == 1
? o[k]
: ("00" + o[k]).substr(("" + o[k]).length));
}
}
return format;
}

/**
* linkbutton������չ
* @param {Object} jq
*/
$.extend($.fn.linkbutton.methods, {
    /**
    * ����ѡ�������д��
    * @param {Object} jq
    */
    enable: function (jq) {
        return jq.each(function () {
            var state = $.data(this, 'linkbutton');
            if ($(this).hasClass('l-btn-disabled')) {
                var itemData = state._eventsStore;
                //�ָ�������
                if (itemData.href) {
                    $(this).attr("href", itemData.href);
                }
                //�ظ�����¼�
                if (itemData.onclicks) {
                    for (var j = 0; j < itemData.onclicks.length; j++) {
                        $(this).bind('click', itemData.onclicks[j]);
                    }
                }
                //����targetΪnull����մ洢���¼��������
                itemData.target = null;
                itemData.onclicks = [];
                $(this).removeClass('l-btn-disabled');
            }
        });
    },
    /**
    * ����ѡ�������д��
    * @param {Object} jq
    */
    disable: function (jq) {
        return jq.each(function () {
            var state = $.data(this, 'linkbutton');
            if (!state._eventsStore)
                state._eventsStore = {};
            if (!$(this).hasClass('l-btn-disabled')) {
                var eventsStore = {};
                eventsStore.target = this;
                eventsStore.onclicks = [];
                //��������
                var strHref = $(this).attr("href");
                if (strHref) {
                    eventsStore.href = strHref;
                    $(this).attr("href", "javascript:void(0)");
                }
                //����ֱ����ϰ󶨵�onclick�����ϵ��¼�
                var onclickStr = $(this).attr("onclick");
                if (onclickStr && onclickStr != "") {
                    eventsStore.onclicks[eventsStore.onclicks.length] = new Function(onclickStr);
                    $(this).attr("onclick", "");
                }
                //����ʹ��jquery�󶨵��¼�
                var eventDatas = $(this).data("events") || $._data(this, 'events');
                if (eventDatas["click"]) {
                    var eventData = eventDatas["click"];
                    for (var i = 0; i < eventData.length; i++) {
                        if (eventData[i].namespace != "menu") {
                            eventsStore.onclicks[eventsStore.onclicks.length] = eventData[i]["handler"];
                            $(this).unbind('click', eventData[i]["handler"]);
                            i--;
                        }
                    }
                }
                state._eventsStore = eventsStore;
                $(this).addClass('l-btn-disabled');
            }
        });
    }
});