function XMLHeader(msgid,sessionId,ver){
	var xmlStr = "";
	xmlStr='{"msgid":"'+msgid+'","sessionid":"'+sessionId+'","ver":"'+ver+'","msgbody":{';
	return xmlStr;
}

function XMLHeader2(msgid,sessionId,ver){
	var xmlStr = "";
	xmlStr='{"msgid":"'+msgid+'","sessionid":"'+sessionId+'","ver":"'+ver+'","msgbody":';
	return xmlStr;
}

function XMLEND(){
	return "}}";
}

/**登录**/
function RWLogin(account,password){
	var xmlStr = XMLHeader("RWLogin","","222");
	xmlStr+='"account":"'+account+'","password":"'+password+'"';
	xmlStr+=XMLEND();
	return xmlStr;
}

/**获取当天作业**/
function RWWorkDay(sessionId,ver,pid){
	var xmlStr = XMLHeader("RWWorkDay",sessionId,ver);
	xmlStr += '"pid":"'+pid+'"';
	xmlStr += XMLEND();
	return xmlStr;
}

/**添加作业**/
function RWWorkAdd(sessionid,ver,item){
	var xmlStr = XMLHeader("RWWorkAdd",sessionid,ver);

	xmlStr += '"id":"'+item.id+'",';
	xmlStr += '"name":"'+item.name+'",';
	xmlStr += '"planno":"'+item.planno+'",';
	xmlStr += '"gid":"'+item.gid+'",';
	xmlStr += '"worktype":"'+item.worktype+'",';
	xmlStr += '"starttime":"'+item.starttime+'",';
	xmlStr += '"endtime":"'+item.endtime+'",';
	xmlStr += '"linename":"'+item.linename+'",';
	xmlStr += '"regstation":"'+item.regstation+'",';
	xmlStr += '"range":"'+item.range+'",';
	xmlStr += '"glb":"'+item.glb+'",';
	xmlStr += '"content":"'+item.content+'",';
	xmlStr += '"remark":"'+item.remark+'",';
	xmlStr += '"bgmanmobile":"'+item.bgmanmobile+'",';
	xmlStr += '"fzmanmobile":"'+item.fzmanmobile+'",';
	xmlStr += '"zzmanmobile":"'+item.zzmanmobile+'",';
	xmlStr += '"xcmanmobile":"'+item.xcmanmobile+'",';
	xmlStr += '"kzkind":"'+item.kzkind+'",';
	xmlStr += '"workdate":"'+item.workdate+'"';

	xmlStr += XMLEND();
	return xmlStr;
}

/**修改作业**/
function RWWorkEdit(sessionid,ver,item){
	var xmlStr = XMLHeader("RWWorkEdit",sessionid,ver);

	xmlStr += '"id":"'+item.id+'",';
	xmlStr += '"name":"'+item.name+'",';
	xmlStr += '"planno":"'+item.planno+'",';
	xmlStr += '"gid":"'+item.gid+'",';
	xmlStr += '"starttime":"'+item.starttime+'",';
	xmlStr += '"endtime":"'+item.endtime+'",';
	xmlStr += '"linename":"'+item.linename+'",';
	xmlStr += '"regstation":"'+item.regstation+'",';
	xmlStr += '"range":"'+item.range+'",';
	xmlStr += '"glb":"'+item.glb+'",';
	xmlStr += '"content":"'+item.content+'",';
	xmlStr += '"remark":"'+item.remark+'",';
	xmlStr += '"bgmanmobile":"'+item.bgmanmobile+'",';
	xmlStr += '"fzmanmobile":"'+item.fzmanmobile+'",';
	xmlStr += '"zzmanmobile":"'+item.zzmanmobile+'",';
	xmlStr += '"xcmanmobile":"'+item.xcmanmobile+'",';
	xmlStr += '"ppoints":"'+item.ppoints+'",';
	xmlStr += '"lpoints":"'+item.lpoints+'"';

	xmlStr += XMLEND();
	return xmlStr;
}

/**********允许作业，与修改作业同一条协议*********/
function RWWorkEdit2(sessionid,ver,item){
	var xmlStr = XMLHeader("RWWorkEdit",sessionid,ver);

	xmlStr += '"id":"'+item.id+'",';
	xmlStr += '"allowno":"'+item.allowno+'",';
	xmlStr += '"allow":"'+item.allow+'"';

	xmlStr += XMLEND();
	return xmlStr;
}

/**作业查询**/
function RWWorkQuery(sessionid,ver,item){
	var xmlStr = XMLHeader("RWWorkQuery",sessionid,ver);

	xmlStr += '"kzkind":"'+item.kzkind+'",';
	xmlStr += '"groupid":"'+item.groupid+'",';
	xmlStr += '"startdate":"'+item.startdate+'",';
	xmlStr += '"enddate":"'+item.enddate+'",';
	xmlStr += '"worktype":"'+item.worktype+'"';


	xmlStr += XMLEND();
	return xmlStr;
}

/**卡控结束**/
function RWWorkEnd(sessionid,ver,item){
	var xmlStr = XMLHeader("RWWorkEnd",sessionid,ver);

	xmlStr += '"id":"'+item.id+'",';
	xmlStr += '"endpid":"'+item.endpid+'",';
	xmlStr += '"worklog":"'+item.worklog+'"';

	xmlStr += XMLEND();
	return xmlStr;
}

/**人员到岗确认**/
function RWWorkDDQR(sessionid,ver,item){
	var xmlStr = XMLHeader("RWWorkDDQR",sessionid,ver);

	xmlStr += '"id":"'+item.id+'",';
	xmlStr += '"ddqrpid":"'+item.ddqrpid+'"';

	xmlStr += XMLEND();
	return xmlStr;
}

/**登销记情况确认**/
function RWWorkDX(sessionid,ver,item){
	var xmlStr = XMLHeader("RWWorkDX",sessionid,ver);

	xmlStr += '"id":"'+item.id+'",';
	xmlStr += '"dxpid":"'+item.dxpid+'",';
	xmlStr += '"dxflag":"'+item.dxflag+'"';

	xmlStr += XMLEND();
	return xmlStr;
}

/**图片确认**/
function RWPhotoConfirm(sessionid,ver,item){
	var xmlStr = XMLHeader("RWPhotoConfirm",sessionid,ver);

	xmlStr += '"photoid":"'+item.photoid+'",';
	xmlStr += '"pid":"'+item.pid+'"';

	xmlStr += XMLEND();
	return xmlStr;
}

/**删除作业**/
function RWWorkDel(sessionid,ver,item){
	var xmlStr = XMLHeader("RWWorkDel",sessionid,ver);

	xmlStr += '"id":"'+item.id+'"';

	xmlStr += XMLEND();
	return xmlStr;
}

/**获取作业详情**/
function RWWorkGetX(sessionid,ver,item){
	var xmlStr = XMLHeader("RWWorkGetX",sessionid,ver);

	xmlStr += '"workid":"'+item.workid+'",';
	xmlStr += '"url":"'+item.url+'"';

	xmlStr += XMLEND();
	return xmlStr;
}

/**修改作业日志**/
function RWWorkLog(sessionid,ver,item){
	var xmlStr = XMLHeader("RWWorkLog",sessionid,ver);

	xmlStr += '"id":"'+item.id+'",';
	xmlStr += '"worklog":"'+item.worklog+'"';

	xmlStr += XMLEND();
	return xmlStr;
}

/**根据公里标获取点集合**/
function RWGetPointSE(sessionid,ver,item){
	var xmlStr = XMLHeader("RWGetPointSE",sessionid,ver);

	xmlStr += '"linename":"'+item.linename+'",';
	xmlStr += '"glb":"'+item.glb+'"';

	xmlStr += XMLEND();
	return xmlStr;
}

/****/
function RWGetPointByName(sessionid,ver,item){
	var xmlStr = XMLHeader("RWGetPointByName",sessionid,ver);

	xmlStr += '"workrange":"'+item.workrange+'"';

	xmlStr += XMLEND();
	return xmlStr;
}

/**获取分组**/
function RWGroupGet(sessionId,ver,pid){
	var xmlStr = XMLHeader("RWGroupGet",sessionId,ver);
	xmlStr += '"pid":"'+pid+'"';
	xmlStr += XMLEND();
	return xmlStr;
}

/**添加分组**/
function RWGroupAdd(sessionId,ver,item){
	var xmlStr = XMLHeader("RWGroupAdd",sessionId,ver);
	xmlStr += '"groupid":"'+item.groupid+'",';
	xmlStr += '"groupname":"'+item.groupname+'",';
	xmlStr += '"groupno":"'+item.groupno+'"';
	xmlStr += XMLEND();
	return xmlStr;
}

/**修改分组**/
function RWGroupEdit(sessionId,ver,item){
	var xmlStr = XMLHeader("RWGroupEdit",sessionId,ver);
	xmlStr += '"groupid":"'+item.groupid+'",';
	xmlStr += '"groupname":"'+item.groupname+'",';
	xmlStr += '"groupno":"'+item.groupno+'"';
	xmlStr += XMLEND();
	return xmlStr;
}

/**删除分组**/
function RWGroupDel(sessionId,ver,item){
	var xmlStr = XMLHeader("RWGroupDel",sessionId,ver);

	xmlStr += '"groupid":"'+item.groupid+'"';
	
	xmlStr += XMLEND();
	return xmlStr;
}

/**获取员工**/
function RWEmployeeGet(sessionId,ver){
	var xmlStr = XMLHeader("RWEmployeeGet",sessionId,ver);
	
	
	xmlStr += XMLEND();
	return xmlStr;
}

/*******添加员工******/
function RWEmployeeAdd(sessionId,ver,item){
	var xmlStr = XMLHeader("RWEmployeeAdd",sessionId,ver);

	xmlStr += '"id":"'+item.id+'",';
	xmlStr += '"name":"'+item.name+'",';
	xmlStr += '"groupid":"'+item.groupid+'",';
	xmlStr += '"mobile":"'+item.mobile+'",';
	xmlStr += '"roleid":"'+item.roleid+'"';
	
	xmlStr += XMLEND();
	return xmlStr;
}

/*******修改员工******/
function RWEmployeeEdit(sessionId,ver,item){
	var xmlStr = XMLHeader("RWEmployeeEdit",sessionId,ver);

	xmlStr += '"id":"'+item.id+'",';
	xmlStr += '"name":"'+item.name+'",';
	xmlStr += '"groupid":"'+item.groupid+'",';
	xmlStr += '"mobile":"'+item.mobile+'",';
	xmlStr += '"roleid":"'+item.roleid+'"';
	
	xmlStr += XMLEND();
	return xmlStr;
}

/*******删除员工******/
function RWEmployeeDel(sessionId,ver,item){
	var xmlStr = XMLHeader("RWEmployeeDel",sessionId,ver);

	xmlStr += '"id":"'+item.id+'"';
	
	xmlStr += XMLEND();
	return xmlStr;
}

/**获取角色**/
function RWRoleGet(sessionId,ver){
	var xmlStr = XMLHeader("RWRoleGet",sessionId,ver);
		
	xmlStr += XMLEND();
	return xmlStr;
}

/*********获取数据采集信息*********/
function QWGatherQuery(sessionId,ver,item){
	var xmlStr = XMLHeader("QWGatherQuery",sessionId,ver);

	xmlStr += '"start":"'+item.start+'",';
	xmlStr += '"end":"'+item.end+'"';
	
	xmlStr += XMLEND();
	return xmlStr;
}

function RWRoleAdd(sessionId,ver,item){
	var xmlStr = XMLHeader("RWRoleAdd",sessionId,ver);

	xmlStr += '"id":"'+item.id+'",';
	xmlStr += '"name":"'+item.name+'",';
	xmlStr += '"rmk":"'+item.rmk+'"';
		
	xmlStr += XMLEND();
	return xmlStr;
}

function RWRoleEdit(sessionId,ver,item){
	var xmlStr = XMLHeader("RWRoleEdit",sessionId,ver);

	xmlStr += '"id":"'+item.id+'",';
	xmlStr += '"name":"'+item.name+'",';
	xmlStr += '"rmk":"'+item.rmk+'"';
		
	xmlStr += XMLEND();
	return xmlStr;
}

function RWRoleDel(sessionId,ver,item){
	var xmlStr = XMLHeader("RWRoleDel",sessionId,ver);

	xmlStr += '"id":"'+item.id+'"';
		
	xmlStr += XMLEND();
	return xmlStr;
}

/**添加兴趣点**/
function RWPoiAdd(sessionId,ver,item){
	var xmlStr = XMLHeader("RWPOIAdd",sessionId,ver);
	
	xmlStr += '"id":"'+item.id+'",';
	xmlStr += '"name":"'+item.name+'",';
	xmlStr += '"kind":"'+item.kind+'",';
	xmlStr += '"linename":"'+item.linename+'",';
	xmlStr += '"glb":"'+item.glb+'",';
	xmlStr += '"x":"'+item.x+'",';
	xmlStr += '"y":"'+item.y+'",';
	xmlStr += '"direct":"'+item.direct+'",';
	xmlStr += '"remark":"'+item.remark+'",';
	xmlStr += '"groupno":"'+item.groupno+'",';
	xmlStr += '"reservea":"'+item.reservea+'",';
	xmlStr += '"reserveb":"'+item.reserveb+'"';
	xmlStr += XMLEND();
	return xmlStr;
}

/***********批量添加兴趣点（test）*******************/
function RWPoiAdd2(sessionId,ver,item){
	var xmlStr = XMLHeader("RWPOIAdd2",sessionId,ver);
	xmlStr += '"list":'+item.list+'}}';
	return xmlStr;
}


/*********铁路兴趣点*********/
function RWPOIKindGet(sessionId,ver){
	var xmlStr = XMLHeader("RWPOIKindGet",sessionId,ver);
		
	xmlStr += XMLEND();
	return xmlStr;
}

function RWPOIKindAdd(sessionId,ver,item){
	var xmlStr = XMLHeader("RWPOIKindAdd",sessionId,ver);
	
	xmlStr += '"id":"'+item.id+'",';
	xmlStr += '"name":"'+item.name+'",';
	xmlStr += '"csort":"'+item.csort+'",';
	xmlStr += '"iconurl":"'+item.iconurl+'"';

	xmlStr += XMLEND();
	return xmlStr;
}

function RWPOIKindEdit(sessionId,ver,item){
	var xmlStr = XMLHeader("RWPOIKindEdit",sessionId,ver);
	
	xmlStr += '"id":"'+item.id+'",';
	xmlStr += '"name":"'+item.name+'",';
	xmlStr += '"csort":"'+item.csort+'",';
	xmlStr += '"iconurl":"'+item.iconurl+'"';

	xmlStr += XMLEND();
	return xmlStr;
}

function RWPOIKindDel(sessionId,ver,item){
	var xmlStr = XMLHeader("RWPOIKindDel",sessionId,ver);
	
	xmlStr += '"id":"'+item.id+'"';
	xmlStr += XMLEND();
	return xmlStr;
}

function RWPOIGet(sessionId,ver){
	var xmlStr = XMLHeader("RWPOIGet",sessionId,ver);
		
	xmlStr += XMLEND();
	return xmlStr;
}

function RWPOIEdit(sessionId,ver,item){
	var xmlStr = XMLHeader("RWPOIEdit",sessionId,ver);
	
	xmlStr += '"id":"'+item.id+'",';
	xmlStr += '"name":"'+item.name+'",';
	xmlStr += '"kind":"'+item.kind+'",';
	xmlStr += '"linename":"'+item.linename+'",';
	xmlStr += '"glb":"'+item.glb+'",';
	xmlStr += '"x":"'+item.x+'",';
	xmlStr += '"y":"'+item.y+'",';
	xmlStr += '"direct":"'+item.direct+'",';
	xmlStr += '"remark":"'+item.remark+'",';
	xmlStr += '"reservea":"'+item.reservea+'",';
	xmlStr += '"reserveb":"'+item.reserveb+'"';

	xmlStr += XMLEND();
	return xmlStr;
}

function RWPOIDel(sessionId,ver,item){
	var xmlStr = XMLHeader("RWPOIDel",sessionId,ver);
	
	xmlStr += '"id":"'+item.id+'"';

	xmlStr += XMLEND();
	return xmlStr;
}

/********************************/
/**查询干部值班情况**/
function RWWatchBillQuery(sessionId,ver,item){
	var xmlStr = XMLHeader("RWWatchBillQuery",sessionId,ver);
	
	xmlStr += '"date":"'+item.date+'"';

	xmlStr += XMLEND();
	return xmlStr;
}

//获取值班干部
function RWGetEmplyeeWB(sessionId,ver){
	var xmlStr = XMLHeader("RWGetEmployeeWB",sessionId,ver);
	

	xmlStr += XMLEND();
	return xmlStr;
}

/**设置值班干部**/
function RWSetEmplyeeWB(sessionId,ver,item){
	var xmlStr = XMLHeader("RWSetEmployeeWB",sessionId,ver);
	
	xmlStr += '"employeewb":[';
	for(var i=0;i<item.length;i++){
		xmlStr += '{"poikind":{"pid":"'+item[i].pid+'"}}'
		if(i != item.length-1){
			xmlStr += ',';
		}
	}
	xmlStr += "]";
	xmlStr += XMLEND();
	return xmlStr;
} 

/**************车辆管理****************/
//用车统计
function RWUseCarStat(sessionId,ver,item){
	var xmlStr = XMLHeader("RWUseCarStat",sessionId,ver);
	
	xmlStr += '"startdate":"'+item.startdate+'",';
	xmlStr += '"enddate":"'+item.enddate+'",';
	xmlStr += '"groupname":"'+item.groupname+'",';
	xmlStr += '"carname":"'+item.carname+'"';


	xmlStr += XMLEND();
	return xmlStr;
} 

//车辆轨迹查询
function RWGetPos(sessionId,ver,item){
	var xmlStr = XMLHeader("RWGetPos",sessionId,ver);
	
	xmlStr += '"kind":"'+item.kind+'",';
	xmlStr += '"simno":"'+item.simno+'",';
	xmlStr += '"start":"'+item.start+'",';
	xmlStr += '"end":"'+item.end+'"';

	xmlStr += XMLEND();
	return xmlStr;
} 

/********获取交互信息********/
function RWTalkMsgQuery(sessionId,ver,item){
	var xmlStr = XMLHeader("RWTalkMsgQuery",sessionId,ver);
	
	xmlStr += '"groupid":"'+item.groupid+'",';
	xmlStr += '"svrtime":"'+item.svrtime+'"';

	xmlStr += XMLEND();
	return xmlStr;
}

/***********导出*******************/
function RWPOIJsonToExcel(sessionId,ver,item){
	var xmlStr = XMLHeader("JsonToExcel",sessionId,ver);
	xmlStr += '"list":'+item.list+'}}';
	return xmlStr;
}

function WorkJsonToExcel(sessionId,ver,item){
	var xmlStr = XMLHeader("JsonToExcel",sessionId,ver);
	xmlStr += '"list":'+item.list+'}}';
	return xmlStr;
}

/********数据校验********/
function QWDataVerify(sessionId,ver,item){
	var xmlStr = '{"msgid":"QWDataVerify","sessionid":"'+sessionId+'","ver":"'+ver+'","msgbody":'+ item +'}';
	return xmlStr;
}

function RWRailRoadQuery(sessionId,ver){
	var xmlStr = XMLHeader("RWRailRoadQuery",sessionId,ver);
	xmlStr += XMLEND();
	return xmlStr;
}

function RWRailRoadPointQuery(sessionId,ver,item){
	var xmlStr = XMLHeader("RWRailRoadPointQuery",sessionId,ver);

	xmlStr += '"roadid":"'+item.id+'"';

	xmlStr += XMLEND();
	return xmlStr;
}

/**
* 添加线路
**/
function RWRailRoadAdd(sessionId,ver,item){
	var xmlStr = XMLHeader2("RWRailRoadAdd",sessionId,ver);
	xmlStr += item +"}";
	
	return xmlStr;
}

/**导入线路**/
function RWRailRoadInsert(sessionId,ver,item){
	var xmlStr = XMLHeader2("RWRailRoadInsert",sessionId,ver);
	xmlStr += item;
	xmlStr+="}"
	return xmlStr;
}

function RWRailRoadEdit(sessionId,ver,item){
	var xmlStr = XMLHeader2("RWRailRoadEdit",sessionId,ver);

	xmlStr += item+"}";
	
	return xmlStr;
}

/******添加线路点*********/
function RWRailRoadPointAdd(sessionId,ver,item){
	var xmlStr = XMLHeader("RWRailRoadPointAdd",sessionId,ver);

	xmlStr += '"roadid":"'+item.roadid+'",';
	xmlStr += '"point":"'+item.point+'"';
	
	xmlStr += XMLEND();
	return xmlStr;
}

function RWRailRoadDel(sessionId,ver,item){
	var xmlStr = XMLHeader("RWRailRoadDel",sessionId,ver);

	xmlStr += '"id":"'+item.id+'"';
	
	xmlStr += XMLEND();
	return xmlStr;
}

function RWRailRoadPointDel(sessionId,ver,roadid,pid){
	var xmlStr = XMLHeader("RWRailRoadPointDel",sessionId,ver);

	xmlStr += '"roadid":"'+roadid+'",';
	xmlStr += '"pid":"'+pid+'"';
	
	
	xmlStr += XMLEND();
	return xmlStr;
}

function RWGetCurPos(sessionid,ver,item){
	var xmlStr = XMLHeader2("RWGetCurPos",sessionid,ver);
	xmlStr += item + "}";
	return xmlStr;
}

function askForUrl(xmlStr){
	$.ajax({
		url:"http://192.168.0.150/SHTLB/SHTLB.ashx",
		type:"POST",
		dataType:"json",
		data:xmlStr,
		success:function(data) {
			var jsonObj = eval(data);
			if(jsonObj.result == "0"){
				var msg = eval('('+jsonObj.msgbody+')');
				return msg;
			}
			else{
				alert(jsonObj.error);
			}
		}
	});
}

/*******通用********/
function postProtocol(sessionid,ver,postHeader,item){
	var xmlStr = XMLHeader2(postHeader,sessionid,ver);
	xmlStr += item + "}";
	return xmlStr;
}