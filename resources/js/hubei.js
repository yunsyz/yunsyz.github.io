/** 地图 */
var china = [];
/**
 * R:raphael对象
 * areaids:区域ID，必须
 * childNums:区域子集个数，如果为空则默认赋值为1
 * areanames:区域名称，必须
 * attrs:区域颜色，如果为空则默认为"#D4E7E7"
 * pathdata:区域路径，必须
 * 
 * */
function paintMap(R,areaids,childNums,areanames,attrs,pathdata) {
	china = [];//重新生成时赋空
	var attr = {
			"fill": "#D4E7E7",
			"stroke": "#eee",
			"stroke-width": 1,
			"stroke-linejoin": "round"
	};
	var childNum = 1;
	//遍历生成各区域图
    for(var i=0 ;i<areaids.length;i++){
    	if(attrs[i]){
    		attr.fill = attrs[i];
    	}else{
    		attr.fill = "#D4E7E7";
    	}
    	if(childNums[i]){
    		childNum = childNums[i];
    	}else{
    		childNum = 1;
    	}
    	china[areaids[i]] = {
    			areaid:areaids[i],
    			childNum:childNum,
    			fillColor:attr.fill,
    			name:areanames[i],
    			path:R.path(pathdata[i]).attr(attr)
    	};
    }
}