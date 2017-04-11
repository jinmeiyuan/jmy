/**生成GUID值**/
function newGuid(){
	var guid = "";
	for(var i=0;i<32;i++){
		var n = Math.floor(Math.random()*16.0).toString(16);
		guid += n;
		if((i==7 || i ==11 || i ==15 || i==19)){
			guid += "-";
		}
	}
	return guid;
}

function TranTree(arr,item){
	var sameLevel = true;
	if(arr.length > 0){
		if(arr[0].groupno.length < item.groupno.length){
			sameLevel = false;
		}
	}
	if(sameLevel){
		item.id = item.groupid;
		arr.push(item);
	}
	else{
		for(var i=0; i< arr.length ; i++){
			if(item.groupno.indexOf(arr[i].groupno) != -1){
				TranTree(arr[i].children,item);
			}
		}
	}
}

function TranTreePerson(groupTreeArr,employeeArr){
	for(var i = 0;i<employeeArr.length ; i++){
		tranPersonToTree(employeeArr[i],groupTreeArr);
	}
}

function tranPersonToTree(employee,arr){
	for(var i = 0 ;i< arr.length;i++){
		try{
			if(employee.groupno.indexOf(arr[i].groupno) != -1){
			if(employee.groupno == arr[i].groupno){
				arr[i].children.push(employee);
			}
			else{
				if(employee.groupno.length > arr[i].groupno.length && "children" in arr[i]){
					tranPersonToTree(employee,arr[i].children);
				}
			}
		}
		}catch(err){

		}
		
	}
}

function getGroupNoById(groupid,groupArr){
	for(var i=0; i < groupArr.length;i++){
		if(groupArr[i].groupid == groupid){
			return groupArr[i].groupno;
		}
	}
}

function getGroupIdByName(groupname,groupArr){
	for (var i = 0; i < groupArr.length; i++) {
		if(groupArr[i].groupname == groupname){
			return groupArr[i].groupid;
		}
	}
	return "";
}

function getGroupNoByName(groupname,groupArr){
	for(var i=0; i < groupArr.length;i++){
		if(groupArr[i].groupname == groupname){
			return groupArr[i].groupno;
		}
	}
};

function getRoleIdByName(rolename,roleArr){
	for (var i = 0; i < roleArr.length; i++) {
		if(roleArr[i].rolename == rolename){
			return groupArr[i].roleid;
		}
	}
	return "";
};

function compare(epName){
	return function(a,b){
		return a[epName].localeCompare(b[epName]);
	}
}

function postFun(requrl,xmlStr){
	$.ajax({
		url : requrl,
		type : "POST",
		dataType:"json",
		data:xmlStr,
		success:function(data){
			var jsonObj = eval(data);
			return jsonObj;			
		}
	});
}

/**将一个数字转化成两个**/
function getTwoNum(str){
	return (parseInt(str)>=10)?str:("0"+str);
}