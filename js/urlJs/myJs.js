function getGroup(){
	var xmlStr = RWGroupGet(sessionId,ver,pid);
	$.ajax({
		url:requrl,
		type:"POST",
		dataType:"json",
		data:xmlStr,
		success:function(data) {
			var jsonObj = eval(data);
			if(jsonObj.result == "0"){
				var msgObj = eval('('+jsonObj.msgbody+')');
				groupArr.push(msgObj.group);
				for (var i = 0; i < msgObj.length; i++) {
					groupArr.push(msgObj[i].group);
					return groupArr;
				}			
			}
			else{
				alert(jsonObj.error);
			}
		}
	});
}