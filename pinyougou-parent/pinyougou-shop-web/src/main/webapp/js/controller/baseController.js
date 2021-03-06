app.controller("baseController",function ($scope) {
    //分页控件属性配置
    $scope.paginationConf = {
        //当前页
        currentPage: 1,
        //总记录数
        totalItems: 10,
        //每页查询的记录数
        itemsPerPage: 10,
        //分页选项，用于选择每页显示多少条记录
        perPageOptions: [10, 20, 30, 40, 50],
        //当页码变更后触发的函数
        onChange: function () {
            $scope.reloadList();//重新加载
        }
    };

    //重新加载数据
    $scope.reloadList = function () {
        //$scope.findPage($scope.paginationConf.currentPage, $scope.paginationConf.itemsPerPage);
        $scope.search( $scope.paginationConf.currentPage, $scope.paginationConf.itemsPerPage);
    }

    //选中的id列表
    $scope.selectIds = [];

    //复选更新选中列表
    $scope.updateSelection = function ($event, id) {
        //如果是被选中,则增加到数组
        if ($event.target.checked) {
            $scope.selectIds.push(id);
        } else {
            //查找当前id的下标
            var idx = $scope.selectIds.indexOf(id);
            //删除数据
            $scope.selectIds.splice(idx, 1);
        }
    }

    $scope.auditStatus = [];
    //复选更新选中列表
    $scope.updateStatus = function ($event, auditStatus) {
        //如果是被选中,则增加到数组
        if ($event.target.checked) {
            $scope.auditStatus.push(auditStatus);
        } else {
            //查找当前id的下标
            var idx = $scope.auditStatus.indexOf(auditStatus);
            //删除数据
            $scope.auditStatus.splice(idx, 1);
        }
    }
    //跟据需求输出json串
    //jsonString要转换的json串,key要读取的值
    $scope.jsonToString=function (jsonString,key) {
        var json = JSON.parse(jsonString);
        var result = "";
        for(var i = 0;i < json.length; i++){
            if(i > 0){
                result += ",";
            }
            result += json[i][key];
        }
        return result;
    }

    /**
     * 遍历List<Map>，查找对应的数据
     * @param list 搜索列表
     * @param key  搜索的key
     * @param value 对比的值
     */
    $scope.searchObjectByKey=function (list,key,value) {
        for (var i = 0; i < list.length; i++) {
            if (list[i][key] == value){
                return list[i];
            }
        }
        //找不到返回空
        return null;
    }
})