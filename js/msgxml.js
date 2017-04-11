function MsgXml() { }
MsgXml.CreateXmlString = function (xmlstr, msgid) {
    var rxmlstr = "<?xml version=\"1.0\" encoding=\"utf-8\" ?>";
    rxmlstr += "<QC>";
    rxmlstr += String.format("<MSGID>{0}</MSGID>", msgid);
    rxmlstr += String.format("<ISDEBUG>{0}</ISDEBUG>", "T");
    rxmlstr += String.format("<SESSIONID>{0}</SESSIONID>", "");
    try {
        rxmlstr += String.format("<ACCOUNT>{0}</ACCOUNT>", GV.account);
    } catch (e) {
        rxmlstr += String.format("<ACCOUNT></ACCOUNT>");
    }
    rxmlstr += String.format("<MSGBODY>{0}</MSGBODY>", xmlstr);
    rxmlstr += "</QC>";

    return rxmlstr;
};
MsgXml.requrl = "ulhandler.ashx";
MsgXml.execlurl = "datagrid-to-excel.ashx";
MsgXml.filenamelength = 36; //文件名字符串截取起始位置
MsgXml.datatype = "text"; //text数据类型时为调试模式 xml为运行模式
MsgXml.timesecond = 20; //倒计时刷新间隔
MsgXml.precision = 4; //小数点保留几位
MsgXml.pagesize = 15;//页码数
MsgXml.detailwindowurl = "window/detailWindow.htm";//详情页面地址

//用户登录
MsgXml.ULLogin = function (obj) {
    var xmlstr = String.format("<ACCOUNT>{0}</ACCOUNT>", obj.account);
    xmlstr += String.format("<PASSWORD>{0}</PASSWORD>", obj.password);
    return MsgXml.CreateXmlString(xmlstr, "ULLogin");
}
//添加用地指标
MsgXml.ULPlanAdd = function (obj) {
    var xmlstr = String.format("<PLANID>{0}</PLANID>", obj.planid);
    xmlstr += String.format("<PLANNAME>{0}</PLANNAME>", obj.planname);
    xmlstr += String.format("<PLANTYPE>{0}</PLANTYPE>", obj.plantype);
    xmlstr += String.format("<SOURCE>{0}</SOURCE>", obj.source);
    xmlstr += String.format("<AREA>{0}</AREA>", obj.area);
    xmlstr += String.format("<PRICE>{0}</PRICE>", obj.price);
    xmlstr += String.format("<FBDATE>{0}</FBDATE>", obj.fbdate);
    xmlstr += String.format("<ENDDATE>{0}</ENDDATE>", obj.enddate);
    xmlstr += String.format("<REMARK>{0}</REMARK>", obj.remark);
    xmlstr += String.format("<PERCENT>{0}</PERCENT>", obj.percent);
    xmlstr += String.format("<NUPRICE>{0}</NUPRICE>", obj.nuprice);
    xmlstr += String.format("<NUTYPEPRICE>{0}</NUTYPEPRICE>", obj.nutypeprice);

    return MsgXml.CreateXmlString(xmlstr, "ULPlanAdd");
};
//添加用地指标--交易、调剂
MsgXml.ULPlanAddJytj = function (obj) {
    var xmlstr = String.format("<PLANID>{0}</PLANID>", obj.planid);
    xmlstr += String.format("<PLANNAME>{0}</PLANNAME>", obj.planname);
    xmlstr += String.format("<PLANTYPE>{0}</PLANTYPE>", obj.plantype);
    xmlstr += String.format("<SOURCE>{0}</SOURCE>", obj.source);
    xmlstr += String.format("<AREA>{0}</AREA>", obj.area);
    xmlstr += String.format("<PRICE>{0}</PRICE>", obj.price);
    xmlstr += String.format("<FBDATE>{0}</FBDATE>", obj.fbdate);
    xmlstr += String.format("<ENDDATE>{0}</ENDDATE>", obj.enddate);
    xmlstr += String.format("<REMARK>{0}</REMARK>", obj.remark);
    xmlstr += String.format("<STARTTIME>{0}</STARTTIME>", obj.starttime);
    xmlstr += String.format("<ENDTIME>{0}</ENDTIME>", obj.endtime);
    xmlstr += String.format("<QUOTECOUNT>{0}</QUOTECOUNT>", obj.quotecount);
    xmlstr += String.format("<PERCENT>{0}</PERCENT>", obj.percent);
    xmlstr += String.format("<NUPRICE>{0}</NUPRICE>", obj.nuprice);
    xmlstr += String.format("<NUTYPEPRICE>{0}</NUTYPEPRICE>", obj.nutypeprice);

    return MsgXml.CreateXmlString(xmlstr, "ULPlanAdd");
};
//删除用地指标附件
MsgXml.ULPlanFileDel = function (fileid) {
    var xmlstr = String.format("<FILEID>{0}</FILEID>", fileid);
    return MsgXml.CreateXmlString(xmlstr, "ULPlanFileDel");
};
//获取指标
MsgXml.ULPlanQuery = function (obj) {
    var xmlstr = String.format("<ACCOUNT>{0}</ACCOUNT>", obj.account);
    xmlstr += String.format("<PLANTYPE>{0}</PLANTYPE>", obj.plantype);
    return MsgXml.CreateXmlString(xmlstr, "ULPlanQuery");
};
//修改用地指标
MsgXml.ULPlanEdit = function (obj) {
    var xmlstr = String.format("<PLANID>{0}</PLANID>", obj.planid);
    xmlstr += String.format("<PLANNAME>{0}</PLANNAME>", obj.planname);
    xmlstr += String.format("<PLANTYPE>{0}</PLANTYPE>", obj.plantype);
    xmlstr += String.format("<SOURCE>{0}</SOURCE>", obj.source);
    xmlstr += String.format("<AREA>{0}</AREA>", obj.area);
    xmlstr += String.format("<PRICE>{0}</PRICE>", obj.price);
    xmlstr += String.format("<FBDATE>{0}</FBDATE>", obj.fbdate);
    xmlstr += String.format("<ENDDATE>{0}</ENDDATE>", obj.enddate);
    xmlstr += String.format("<REMARK>{0}</REMARK>", obj.remark);
    xmlstr += String.format("<PERCENT>{0}</PERCENT>", obj.percent);
    xmlstr += String.format("<NUPRICE>{0}</NUPRICE>", obj.nuprice);
    xmlstr += String.format("<NUTYPEPRICE>{0}</NUTYPEPRICE>", obj.nutypeprice);

    return MsgXml.CreateXmlString(xmlstr, "ULPlanEdit");
};

//修改用地指标--交易、调剂
MsgXml.ULPlanEditJytj = function (obj) {
    var xmlstr = String.format("<PLANID>{0}</PLANID>", obj.planid);
    xmlstr += String.format("<PLANNAME>{0}</PLANNAME>", obj.planname);
    xmlstr += String.format("<PLANTYPE>{0}</PLANTYPE>", obj.plantype);
    xmlstr += String.format("<SOURCE>{0}</SOURCE>", obj.source);
    xmlstr += String.format("<AREA>{0}</AREA>", obj.area);
    xmlstr += String.format("<PRICE>{0}</PRICE>", obj.price);
    xmlstr += String.format("<FBDATE>{0}</FBDATE>", obj.fbdate);
    xmlstr += String.format("<ENDDATE>{0}</ENDDATE>", obj.enddate);
    xmlstr += String.format("<REMARK>{0}</REMARK>", obj.remark);
    xmlstr += String.format("<STARTTIME>{0}</STARTTIME>", obj.starttime);
    xmlstr += String.format("<ENDTIME>{0}</ENDTIME>", obj.endtime);
    xmlstr += String.format("<QUOTECOUNT>{0}</QUOTECOUNT>", obj.quotecount);
    xmlstr += String.format("<PERCENT>{0}</PERCENT>", obj.percent);
    xmlstr += String.format("<NUPRICE>{0}</NUPRICE>", obj.nuprice);
    xmlstr += String.format("<NUTYPEPRICE>{0}</NUTYPEPRICE>", obj.nutypeprice);

    return MsgXml.CreateXmlString(xmlstr, "ULPlanEdit");
};
//删除用地指标
MsgXml.ULPlanDel = function (planid) {
    var xmlstr = String.format("<PLANID>{0}</PLANID>", planid);
    return MsgXml.CreateXmlString(xmlstr, "ULPlanDel");
};
//获取公共文件
MsgXml.ULFileQuery = function () {
    var xmlstr = String.format("<FILETYPE>{0}</FILETYPE>", "PUB");
    return MsgXml.CreateXmlString(xmlstr, "ULFileQuery");
};
//获取申报地块信息
MsgXml.ULItemQuery = function (obj) {
    var xmlstr = "";
    xmlstr += String.format("<PLANID>{0}</PLANID>", obj.planid);
    xmlstr += String.format("<ACCOUNT>{0}</ACCOUNT>", obj.account);
    xmlstr += String.format("<PAGESIZE>{0}</PAGESIZE>", obj.pagesize);
    xmlstr += String.format("<PAGENUMBER>{0}</PAGENUMBER>", obj.pagenumber);
    return MsgXml.CreateXmlString(xmlstr, "ULItemQuery");
};
//获取乡镇编号
MsgXml.ULRegionQuery = function () {
    return MsgXml.CreateXmlString("", "ULRegionQuery");
};

//添加地块信息
MsgXml.ULApplyItemAdd = function (obj) {
    var xmlstr = "";
    xmlstr += String.format("<ITEMID>{0}</ITEMID>", obj.itemid);
    xmlstr += String.format("<PLANID>{0}</PLANID>", obj.planid);
    xmlstr += String.format("<FILLPERSON>{0}</FILLPERSON>", obj.fillperson);
    xmlstr += String.format("<FILLTIME>{0}</FILLTIME>", obj.filltime);
    xmlstr += String.format("<ITEMINDEX>{0}</ITEMINDEX>", obj.itemindex);
    xmlstr += String.format("<REGIONNO>{0}</REGIONNO>", obj.regionno);
    xmlstr += String.format("<REGIONNAME>{0}</REGIONNAME>", obj.regionname);
    xmlstr += String.format("<LANDNO>{0}</LANDNO>", obj.landno);
    xmlstr += String.format("<LANDGH>{0}</LANDGH>", obj.landgh);
    xmlstr += String.format("<LANDPOS>{0}</LANDPOS>", obj.landpos);
    xmlstr += String.format("<PRICE>{0}</PRICE>", obj.price);
    xmlstr += String.format("<YDAREA1>{0}</YDAREA1>", obj.ydarea1);
    xmlstr += String.format("<YDAREA2>{0}</YDAREA2>", obj.ydarea2);
    xmlstr += String.format("<YDAREA3>{0}</YDAREA3>", obj.ydarea3);
    xmlstr += String.format("<YDAREA4>{0}</YDAREA4>", obj.ydarea4);
    xmlstr += String.format("<YDAREA5>{0}</YDAREA5>", obj.ydarea5);
    xmlstr += String.format("<JSAREA1>{0}</JSAREA1>", obj.jsarea1);
    xmlstr += String.format("<JSAREA2>{0}</JSAREA2>", obj.jsarea2);
    xmlstr += String.format("<JSAREA3>{0}</JSAREA3>", obj.jsarea3);
    xmlstr += String.format("<JSAREA4>{0}</JSAREA4>", obj.jsarea4);
    xmlstr += String.format("<JSAREA5>{0}</JSAREA5>", obj.jsarea5);
    xmlstr += String.format("<REMARK>{0}</REMARK>", obj.remark);
    xmlstr += String.format("<PRICE2>{0}</PRICE2>", obj.price2);
    xmlstr += String.format("<PRICE5>{0}</PRICE5>", obj.price5);
    xmlstr += String.format("<NUTYPE>{0}</NUTYPE>", obj.nutype);
    xmlstr += String.format("<USETIME>{0}</USETIME>", obj.usetime);
    return MsgXml.CreateXmlString(xmlstr, "ULApplyItemAdd");
};
//修改地块信息
MsgXml.ULApplyItemEdit = function (obj) {
    var xmlstr = "";
    xmlstr += String.format("<ITEMID>{0}</ITEMID>", obj.itemid);
    xmlstr += String.format("<ITEMINDEX>{0}</ITEMINDEX>", obj.itemindex);
    xmlstr += String.format("<REGIONNO>{0}</REGIONNO>", obj.regionno);
    xmlstr += String.format("<REGIONNAME>{0}</REGIONNAME>", obj.regionname);
    xmlstr += String.format("<LANDNO>{0}</LANDNO>", obj.landno);
    xmlstr += String.format("<LANDGH>{0}</LANDGH>", obj.landgh);
    xmlstr += String.format("<LANDPOS>{0}</LANDPOS>", obj.landpos);
    xmlstr += String.format("<PRICE>{0}</PRICE>", obj.price);
    xmlstr += String.format("<YDAREA1>{0}</YDAREA1>", obj.ydarea1);
    xmlstr += String.format("<YDAREA2>{0}</YDAREA2>", obj.ydarea2);
    xmlstr += String.format("<YDAREA3>{0}</YDAREA3>", obj.ydarea3);
    xmlstr += String.format("<YDAREA4>{0}</YDAREA4>", obj.ydarea4);
    xmlstr += String.format("<YDAREA5>{0}</YDAREA5>", obj.ydarea5);
    xmlstr += String.format("<JSAREA1>{0}</JSAREA1>", obj.jsarea1);
    xmlstr += String.format("<JSAREA2>{0}</JSAREA2>", obj.jsarea2);
    xmlstr += String.format("<JSAREA3>{0}</JSAREA3>", obj.jsarea3);
    xmlstr += String.format("<JSAREA4>{0}</JSAREA4>", obj.jsarea4);
    xmlstr += String.format("<JSAREA5>{0}</JSAREA5>", obj.jsarea5);
    xmlstr += String.format("<REMARK>{0}</REMARK>", obj.remark);
    xmlstr += String.format("<PRICE2>{0}</PRICE2>", obj.price2);
    xmlstr += String.format("<PRICE5>{0}</PRICE5>", obj.price5);
    //xmlstr += String.format("<NUTYPE>{0}</NUTYPE>", obj.nutype);
    xmlstr += String.format("<USETIME>{0}</USETIME>", obj.usetime);
    return MsgXml.CreateXmlString(xmlstr, "ULApplyItemEdit");
};
//删除地块信息
MsgXml.ULApplyItemDel = function (id) {
    var xmlstr = "";
    xmlstr += String.format("<ITEMID>{0}</ITEMID>", id);
    return MsgXml.CreateXmlString(xmlstr, "ULApplyItemDel");
};
//删除事务附件
MsgXml.ULApplyFileDel = function (id) {
    var xmlstr = "";
    xmlstr += String.format("<FILEID>{0}</FILEID>", id);
    return MsgXml.CreateXmlString(xmlstr, "ULApplyFileDel");
};

//获取乡镇地块信息
MsgXml.ULRegionItemQuery = function (obj) {
    var xmlstr = "";
    xmlstr += String.format("<ACCOUNT>{0}</ACCOUNT>", obj.account);
    xmlstr += String.format("<REGIONNO>{0}</REGIONNO>", obj.regionno);
    xmlstr += String.format("<DATE start='{0}' end='{1}' />", obj.start, obj.end);
    xmlstr += String.format("<PAGESIZE>{0}</PAGESIZE>", obj.pagesize);
    xmlstr += String.format("<PAGENUMBER>{0}</PAGENUMBER>", obj.pagenumber);
    return MsgXml.CreateXmlString(xmlstr, "ULRegionItemQuery");
};

//添加上传文件信息
MsgXml.UploadFilesAdd = function (obj) {
    var xmlstr = "<FILELIST>";
    for (var i = 0; i < obj.length; i++) {
        var row = obj[i];
        xmlstr += String.format("<FILE fileid='{0}' typeid='{1}' comment='{2}' type='{3}' remark='{4}' msgid='{5}' filename='{6}' flag='{7}' />", row.fileid, row.typeid, row.comment, row.type, row.remark, row.msgid, row.filename,row.flag);
    }
    xmlstr += "</FILELIST>";
    return MsgXml.CreateXmlString(xmlstr, "UploadFilesAdd");
};

//删除上传文件信息
MsgXml.UploadFileDel = function (fileid) {
    var xmlstr = String.format("<FILEID>{0}</FILEID>", fileid);
    return MsgXml.CreateXmlString(xmlstr, "UploadFileDel");
};
//确认申报地块信息审核
MsgXml.ULApplyItemConfirm = function (obj) {
    var xmlstr = "";
    for (var i = 0; i < obj.length; i++) {
        var row = obj[i];
        xmlstr += String.format("<ITEM id='{0}' landno='{1}'   />", row.itemid, row.landno);
    }
    return MsgXml.CreateXmlString(xmlstr, "ULApplyItemConfirm");
};
 //国土局办公室申报地块信息审核
MsgXml.ULApplyItemCheck = function (obj) {
    var xmlstr = "";
    for (var i = 0; i < obj.length; i++) {
        var row = obj[i];
        xmlstr += String.format("<ITEM id='{0}' landno='{1}' state='{2}' checkremark='{3}'  />", row.itemid, row.landno, row.state, row.checkremark);
    }
    return MsgXml.CreateXmlString(xmlstr, "ULApplyItemCheck");
};
 //国土局领导申报地块信息审核
 MsgXml.ULApplyItemApprove = function (obj) {
     var xmlstr = "";
     for (var i = 0; i < obj.length; i++) {
         var row = obj[i];
         xmlstr += String.format("<ITEM id='{0}' landno='{1}' state='{2}' approveremark='{3}'  />", row.itemid, row.landno, row.state, row.approveremark);
     }
     return MsgXml.CreateXmlString(xmlstr, "ULApplyItemApprove");
 };
 //获取公告
 MsgXml.ULAdvertQuery = function (obj) {
     var xmlstr = "";
     return MsgXml.CreateXmlString(xmlstr, "ULAdvertQuery");
 };
 //添加公告
 MsgXml.ULAdvertAdd = function (obj) {
     var xmlstr = "";
     xmlstr += String.format("<ACCOUNT>{0}</ACCOUNT>", obj.account);
     xmlstr += String.format("<ADVERTID>{0}</ADVERTID>", obj.advertid);
     xmlstr += String.format("<ADVERTTITLE>{0}</ADVERTTITLE>", obj.adverttitle);
     xmlstr += String.format("<ADVERTTYPE>{0}</ADVERTTYPE>", obj.adverttype);
     xmlstr += String.format("<MSGCONTENT>{0}</MSGCONTENT>", obj.msgcontent);
     xmlstr += String.format("<ENDDATE>{0}</ENDDATE>", obj.enddate);
     xmlstr += String.format("<BELONGTO>{0}</BELONGTO>", obj.belongto); //选填
     xmlstr += String.format("<REGIONNO>{0}</REGIONNO>", obj.regionno); //选填
     return MsgXml.CreateXmlString(xmlstr, "ULAdvertAdd");
 };
 //编辑公告
 MsgXml.ULAdvertEdit = function (obj) {
     var xmlstr = "";
     xmlstr += String.format("<ACCOUNT>{0}</ACCOUNT>", obj.account);
     xmlstr += String.format("<ADVERTID>{0}</ADVERTID>", obj.advertid);
     xmlstr += String.format("<ADVERTTITLE>{0}</ADVERTTITLE>", obj.adverttitle);
     xmlstr += String.format("<ADVERTTYPE>{0}</ADVERTTYPE>", obj.adverttype);
     xmlstr += String.format("<MSGCONTENT>{0}</MSGCONTENT>", obj.msgcontent);
     xmlstr += String.format("<ENDDATE>{0}</ENDDATE>", obj.enddate);
     xmlstr += String.format("<BELONGTO>{0}</BELONGTO>", obj.belongto); //选填
     xmlstr += String.format("<REGIONNO>{0}</REGIONNO>", obj.regionno); //选填
     return MsgXml.CreateXmlString(xmlstr, "ULAdvertEdit");
 };
 //删除公告
 MsgXml.ULAdvertDel = function (obj) {
     var xmlstr = "";
     xmlstr += String.format("<ACCOUNT>{0}</ACCOUNT>", obj.account);
     xmlstr += String.format("<ADVERTID>{0}</ADVERTID>", obj.advertid);
     return MsgXml.CreateXmlString(xmlstr, "ULAdvertDel");
 };
 //获取竞拍信息
 MsgXml.ULAuctionInfo = function (obj) {
     var xmlstr = "";
     xmlstr += String.format("<ACCOUNT>{0}</ACCOUNT>", obj.account);
     xmlstr += String.format("<PLANID>{0}</PLANID>", obj.planid);
     return MsgXml.CreateXmlString(xmlstr, "ULAuctionInfo");
 };
 //获取竞价历史信息
 MsgXml.ULQuoteHis = function (obj) {
     var xmlstr = "";
     xmlstr += String.format("<ACCOUNT>{0}</ACCOUNT>", obj.account);
     xmlstr += String.format("<ITEMID>{0}</ITEMID>", obj.itemid);
     return MsgXml.CreateXmlString(xmlstr, "ULQuoteHis");
 };
 //乡镇上报竞拍价格
 MsgXml.ULApplyQuote = function (obj) {
     var xmlstr = "";
     xmlstr += String.format("<ACCOUNT>{0}</ACCOUNT>", obj.account);
     xmlstr += String.format("<PLANID>{0}</PLANID>", obj.planid);
     xmlstr += String.format("<ITEMID>{0}</ITEMID>", obj.itemid);
     xmlstr += String.format("<PRICE>{0}</PRICE>", obj.price);
     return MsgXml.CreateXmlString(xmlstr, "ULApplyQuote");
 };
 //获取通知
 MsgXml.ULNoticeQuery = function (obj) {
     var xmlstr = "";
     xmlstr += String.format("<ACCOUNT>{0}</ACCOUNT>", obj.account);
     return MsgXml.CreateXmlString(xmlstr, "ULNoticeQuery");
 };
 //阅读通知
 MsgXml.ULNoticeRead = function (obj) {
     var xmlstr = "";
     xmlstr += String.format("<ACCOUNT>{0}</ACCOUNT>", obj.account);
     xmlstr += String.format("<NOTICEID>{0}</NOTICEID>", obj.noticeid);
     return MsgXml.CreateXmlString(xmlstr, "ULNoticeRead");
 };
 //查询历史消息通知
 MsgXml.ULNoticeGetByDate = function (obj) {
     var xmlstr = "";
     xmlstr += String.format("<ACCOUNT>{0}</ACCOUNT>", obj.account);
     xmlstr += String.format("<DATE start='{0}' end='{1}' />", obj.starttime,obj.endtime);
     return MsgXml.CreateXmlString(xmlstr, "ULNoticeGetByDate");
 };
 //添加项目跟踪信息
 MsgXml.ULActionAdd = function (obj) {
     var xmlstr = "";
     xmlstr += String.format("<ITEMID>{0}</ITEMID>", obj.itemid);
     xmlstr += String.format("<ACTID>{0}</ACTID>", obj.actid);
     xmlstr += String.format("<ACTTYPE>{0}</ACTTYPE>", obj.acttype);
     xmlstr += String.format("<ACTTIME>{0}</ACTTIME>", obj.acttime);
     xmlstr += String.format("<REMARK>{0}</REMARK>", obj.remark);
     xmlstr += String.format("<ATTACH1>{0}</ATTACH1>", obj.attach1);
     return MsgXml.CreateXmlString(xmlstr, "ULActionAdd");
 };
 //修改项目跟踪信息
 MsgXml.ULActionEdit = function (obj) {
     var xmlstr = "";
     xmlstr += String.format("<ACTID>{0}</ACTID>", obj.actid);
     xmlstr += String.format("<ACTTYPE>{0}</ACTTYPE>", obj.acttype);
     xmlstr += String.format("<ACTTIME>{0}</ACTTIME>", obj.acttime);
     xmlstr += String.format("<REMARK>{0}</REMARK>", obj.remark);
     xmlstr += String.format("<ATTACH1>{0}</ATTACH1>", obj.attach1);
     return MsgXml.CreateXmlString(xmlstr, "ULActionEdit");
 };
 //删除项目跟踪信息
 MsgXml.ULActionDel = function (obj) {
     var xmlstr = "";
     xmlstr += String.format("<ACTID>{0}</ACTID>", obj.actid);
     return MsgXml.CreateXmlString(xmlstr, "ULActionDel");
 };
 //获取项目跟踪信息
 MsgXml.ULActionQuery = function (obj) {
     var xmlstr = "";
     xmlstr += String.format("<ITEMID>{0}</ITEMID>", obj.itemid);
     return MsgXml.CreateXmlString(xmlstr, "ULActionQuery");
 };
 //申报地块缴费
 MsgXml.ULApplyItemPay = function (obj) {
     var xmlstr = "";
     xmlstr += String.format("<ITEM id='{0}' landno='{1}' payamount='{2}' payremark='{3}' />", obj.id,obj.landno,obj.payamount,obj.payremark);
     return MsgXml.CreateXmlString(xmlstr, "ULApplyItemPay");
 };
 //项目成立
 MsgXml.ULCreateProject = function (obj) {
     var xmlstr = "";
     xmlstr += String.format("<ITEM id='{0}' landno='{1}'  />", obj.itemid, obj.landno);
     return MsgXml.CreateXmlString(xmlstr, "ULCreateProject");
 };
 //查询帐号
 MsgXml.ULUserQuery = function (obj) {
     var xmlstr = "";
     xmlstr += String.format("<ACCOUNT>{0}</ACCOUNT>", obj.account);
     return MsgXml.CreateXmlString(xmlstr, "ULUserQuery");
 };
 //添加帐号
 MsgXml.ULUserAdd = function (obj) {
     var xmlstr = "";
     xmlstr += String.format("<ACCOUNT>{0}</ACCOUNT>", obj.account);
     xmlstr += String.format("<USERID>{0}</USERID>", obj.userid);
     xmlstr += String.format("<USERNAME>{0}</USERNAME>", obj.username);
     xmlstr += String.format("<USERTYPE>{0}</USERTYPE>", obj.usertype);
     xmlstr += String.format("<ROLEID>{0}</ROLEID>", obj.roleid);
     xmlstr += String.format("<UACCOUNT>{0}</UACCOUNT>", obj.uaccount);
     xmlstr += String.format("<PASSWORD>{0}</PASSWORD>", obj.password);
     xmlstr += String.format("<REGIONNO>{0}</REGIONNO>", obj.regionno);
     xmlstr += String.format("<EMAIL>{0}</EMAIL>", obj.email);
     return MsgXml.CreateXmlString(xmlstr, "ULUserAdd");
 };
 //修改帐号
 MsgXml.ULUserEdit = function (obj) {
     var xmlstr = "";
     xmlstr += String.format("<ACCOUNT>{0}</ACCOUNT>", obj.account);
     xmlstr += String.format("<USERID>{0}</USERID>", obj.userid);
     xmlstr += String.format("<USERNAME>{0}</USERNAME>", obj.username);
     xmlstr += String.format("<USERTYPE>{0}</USERTYPE>", obj.usertype);
     xmlstr += String.format("<ROLEID>{0}</ROLEID>", obj.roleid);
     xmlstr += String.format("<UACCOUNT>{0}</UACCOUNT>", obj.uaccount);
     xmlstr += String.format("<PASSWORD>{0}</PASSWORD>", obj.password);
     xmlstr += String.format("<REGIONNO>{0}</REGIONNO>", obj.regionno);
     xmlstr += String.format("<EMAIL>{0}</EMAIL>", obj.email);
     return MsgXml.CreateXmlString(xmlstr, "ULUserEdit");
 };
  //删除帐号
 MsgXml.ULUserDel = function (obj) {
     var xmlstr = "";
     xmlstr += String.format("<ACCOUNT>{0}</ACCOUNT>", obj.account);
     xmlstr += String.format("<USERID>{0}</USERID>", obj.userid);
     return MsgXml.CreateXmlString(xmlstr, "ULUserDel");
 };
 //修改密码
 MsgXml.ULUserEditPwd = function (obj) {
     var xmlstr = "";
     xmlstr += String.format("<USERID>{0}</USERID>", obj.userid);
     xmlstr += String.format("<ACCOUNT>{0}</ACCOUNT>", obj.account);
     xmlstr += String.format("<PASSWORD>{0}</PASSWORD>", obj.password);
     return MsgXml.CreateXmlString(xmlstr, "ULUserEdit");
 };
 MsgXml.ULItemStatQuery = function (obj) {
     var xmlstr = "";
     xmlstr += String.format("<ACCOUNT>{0}</ACCOUNT>", obj.account);
     xmlstr += String.format("<DATE start='{0}' end='{1}' />", obj.start,obj.end);
     return MsgXml.CreateXmlString(xmlstr, "ULItemStatQuery");
 };
 MsgXml.ULExpand = function (obj) {
     var xmlstr = "";
     xmlstr += String.format("<EXPANDID>{0}</EXPANDID>", obj.expandid);
     xmlstr += String.format("<TID>{0}</TID>", obj.tid);
     xmlstr += String.format("<EXTYPE>{0}</EXTYPE>", obj.extype);
     xmlstr += String.format("<T1>{0}</T1>", obj.t1);
     xmlstr += String.format("<T2>{0}</T2>", obj.t2);
     xmlstr += String.format("<T3>{0}</T3>", obj.t3);
     xmlstr += String.format("<T4>{0}</T4>", obj.t4);
     xmlstr += String.format("<T5>{0}</T5>", obj.t5);
     xmlstr += String.format("<N1>{0}</N1>", obj.n1);
     xmlstr += String.format("<N2>{0}</N2>", obj.n2);
     xmlstr += String.format("<N3>{0}</N3>", obj.n3);
     xmlstr += String.format("<N4>{0}</N4>", obj.n4);
     xmlstr += String.format("<N5>{0}</N5>", obj.n5);
     /*
     xmlstr += String.format("<D1>{0}</D1>", obj.d1);
     xmlstr += String.format("<D2>{0}</D2>", obj.d2);
     xmlstr += String.format("<D3>{0}</D3>", obj.d3);
     */
     return MsgXml.CreateXmlString(xmlstr, "ULExpand");
 };

 MsgXml.ULExpandQuery = function (obj) {
     var xmlstr = "";
     xmlstr += String.format("<EXTYPE>{0}</EXTYPE>", obj.extype);
     return MsgXml.CreateXmlString(xmlstr, "ULExpandQuery");
 };

 //审核返回
 MsgXml.ULItemCheckBack = function (obj) {
     var xmlstr = "";
     xmlstr += String.format("<ITEMID>{0}</ITEMID>", obj.itemid);
     xmlstr += String.format("<REGIONNO>{0}</REGIONNO>", obj.regionno);
     xmlstr += String.format("<ITEMSTATE>{0}</ITEMSTATE>", obj.itemstate);
     return MsgXml.CreateXmlString(xmlstr, "ULItemCheckBack");
 };
 //删除扩展表
 MsgXml.ULExpandDel = function (expandid) {
     var xmlstr = "";
     xmlstr += String.format("<EXPANDID>{0}</EXPANDID>", expandid);
     return MsgXml.CreateXmlString(xmlstr, "ULExpandDel");
 };
 //修改地块信息状态
 MsgXml.ULApplyItemEditItemState = function (obj) {
     var xmlstr = "";
     xmlstr += String.format("<ITEMID>{0}</ITEMID>", obj.itemid);
     xmlstr += String.format("<ITEMSTATE>{0}</ITEMSTATE>", obj.itemstate);
     return MsgXml.CreateXmlString(xmlstr, "ULApplyItemEditItemState");
 };
 //获取日志记录
 MsgXml.ULLogServiceQuery = function (obj) {
     var xmlstr = "";
     xmlstr += String.format("<LOGTYPE>{0}</LOGTYPE>", obj.logtype);
     xmlstr += String.format("<CREATETIME start='{0}' end='{1}'/>", obj.start, obj.end);
     xmlstr += String.format("<PAGESIZE>{0}</PAGESIZE>", obj.pagesize);
     xmlstr += String.format("<PAGENUMBER>{0}</PAGENUMBER>", obj.pagenumber);
     return MsgXml.CreateXmlString(xmlstr, "ULLogServiceQuery");
 };
 //获取日志记录
 MsgXml.ULLogServiceDetailQuery = function (obj) {
     var xmlstr = "";
     xmlstr += String.format("<PRIMARYKEY>{0}</PRIMARYKEY>", obj.primarykey);
     xmlstr += String.format("<CREATETIME>{0}</CREATETIME>", obj.createtime);
     xmlstr += String.format("<PAGESIZE>{0}</PAGESIZE>", obj.pagesize);
     xmlstr += String.format("<PAGENUMBER>{0}</PAGENUMBER>", obj.pagenumber);
     return MsgXml.CreateXmlString(xmlstr, "ULLogServiceDetailQuery");
 };
 //变更地块用途
 MsgXml.ULApplyItemChangeUse = function (itemid) {
     var xmlstr = "";
     xmlstr += String.format("<ITEMID>{0}</ITEMID>", itemid);
     return MsgXml.CreateXmlString(xmlstr, "ULApplyItemChangeUse");
 };
 //地块指标延期
 MsgXml.ULApplyItemChangeUseTime = function (obj) {
     var xmlstr = "";
     xmlstr += String.format("<ITEMID>{0}</ITEMID>", obj.itemid);
     xmlstr += String.format("<USETIME>{0}</USETIME>", obj.usetime);
     xmlstr += String.format("<USETIMEMARK>{0}</USETIMEMARK>", obj.usetimemark);
     return MsgXml.CreateXmlString(xmlstr, "ULApplyItemChangeUseTime");
 };
 //上报地块实际面积
 MsgXml.ULApplyItemUseFactArea = function (obj) {
     var xmlstr = "";
     xmlstr += String.format("<ITEMID>{0}</ITEMID>", obj.itemid);
     xmlstr += String.format("<FACTYDAREA2>{0}</FACTYDAREA2>", obj.factydarea2);
     xmlstr += String.format("<FACTYDAREA5>{0}</FACTYDAREA5>", obj.factydarea5);
     xmlstr += String.format("<FACTYDAREA3>{0}</FACTYDAREA3>", obj.factydarea3);
     xmlstr += String.format("<FACTYDAREA4>{0}</FACTYDAREA4>", obj.factydarea4);
     return MsgXml.CreateXmlString(xmlstr, "ULApplyItemUseFactArea");
 };
 //补交差额上传缴费凭证
 MsgXml.ULApplyItemPayment = function (obj) {
     var xmlstr = "";
     xmlstr += String.format("<ITEMID>{0}</ITEMID>", obj.itemid);
     xmlstr += String.format("<NUMBER1>{0}</NUMBER1>", obj.number1);
     xmlstr += String.format("<NUMBER2>{0}</NUMBER2>", obj.number2);
     xmlstr += String.format("<NUMBER3>{0}</NUMBER3>", obj.number3);
     return MsgXml.CreateXmlString(xmlstr, "ULApplyItemPayment");
 };

 //批量上传地块附加信息
 MsgXml.PatchUploadLandInfor = function (obj) {
     var xmlstr = "";
     xmlstr += String.format("<PLANID>{0}</PLANID>", obj.planid);
     xmlstr += String.format("<FILLPERSON>{0}</FILLPERSON>", obj.fillperson);
     xmlstr += String.format("<REGIONNO>{0}</REGIONNO>", obj.regionno);
     xmlstr += String.format("<REGIONNAME>{0}</REGIONNAME>", obj.regionname);
     return MsgXml.CreateXmlString(xmlstr, "PatchUploadLandInfor");
 };

 //
 MsgXml.ULItemQueryByItemID = function (obj) {
     var xmlstr = "";
     xmlstr += String.format("<ITEMID>{0}</ITEMID>", obj.itemid);
     return MsgXml.CreateXmlString(xmlstr, "ULItemQueryByItemID");
 };