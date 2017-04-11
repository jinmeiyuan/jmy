function GV() { }
//乡镇数据源
GV.regionarray = [];
GV.username = $.cookie("username");
GV.account = $.cookie("account");
GV.roleid = $.cookie("roleid");
GV.regionno = $.cookie("regionno");
GV.regionname = $.cookie("regionname");
GV.userid = $.cookie("userid");
//指标类型数据源
GV.plantypearray = [];
GV.plantypearray.push({ value: "有偿分配", text: "有偿分配" });
GV.plantypearray.push({ value: "有偿调剂", text: "有偿调剂" });
GV.plantypearray.push({ value: "有偿交易", text: "有偿交易" });
GV.itemstatearray = new Object();
GV.itemstatearray["-1"] = "作废"; //白色
GV.itemstatearray["10"] = "申报中";//灰色
GV.itemstatearray["20"] = "初审中";
GV.itemstatearray["21"] = "初审失败";//红色
GV.itemstatearray["40"] = "审核中";//黄色
GV.itemstatearray["41"] = "审核失败"; //红色
GV.itemstatearray["50"] = "再次核对";
GV.itemstatearray["60"] = "待缴费";
GV.itemstatearray["70"] = "缴费审核";
GV.itemstatearray["90"] = "缴费成功"; //绿色
GV.itemstatearray["91"] = "指标延期";
GV.itemstatearray["92"] = "申请批次";
GV.itemstatearray["93"] = "确认批次";
GV.itemstatearray["94"] = "核对地块差额";
GV.itemstatearray["95"] = "补交差额";
GV.itemstatearray["96"] = "再次审核";
GV.itemstatearray["97"] = "领导批示";
GV.itemstatearray["100"] = "项目结束"; 
GV.rolearray = new Object();
GV.rolearray["townservice"] = "乡镇填报人";
GV.rolearray["townleading"] = "乡镇负责人";
GV.rolearray["countyoffice"] = "国土局办公室";
GV.rolearray["countyleading"] = "国土局领导";
GV.rolearray["system"] = "系统管理员";
GV.jftypearray =[];
GV.jftypearray.push({ value: "按农用地价格比例计算", text: "按农用地价格比例计算" });
GV.jftypearray.push({ value: "未利用地价格", text: "未利用地价格" });
GV.nutypepricearray = [];
GV.nutypepricearray.push({ value: "T1", text: "工业仓储用地" });
GV.nutypepricearray.push({ value: "T2", text: "经营性用地" });
GV.nutypepricearray.push({ value: "T3", text: "载体建设用地" });
GV.nutypepricearray.push({ value: "T4", text: "公共管理与公共设施用地" });
GV.nutypepricearray.push({ value: "T5", text: "综合价格" });
GV.nutypepricearray.push({ value: "T6", text: "其他" });