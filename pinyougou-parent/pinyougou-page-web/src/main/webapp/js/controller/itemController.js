//商品详细页（控制层）
app.controller("itemController",function ($scope,$http) {
    //数量增加及减少
    $scope.addNum=function (x) {
        $scope.num = x;
        if ($scope.num<1){
            $scope.num=1;
        }
    }

    //记录用户选择的规格
    $scope.specificationItems={};
    //用户选择规格
    $scope.selectSpecification=function (specName, optionName) {
        $scope.specificationItems[specName]=optionName;

        searchSku();//读取sku
    }
    //判断某规格选项是否被用户选中
    $scope.isSelected=function(specName,optionName){
        if($scope.specificationItems[specName]==optionName){
            return true;
        }else{
            return false;
        }
    }
    //加载默认SKU
    $scope.loadSku=function(){
        $scope.sku=skuList[0];
        $scope.specificationItems= JSON.parse(JSON.stringify($scope.sku.spec)) ;
    }
    //匹配两个对象
    matchObject=function(map1,map2){
        for(var k in map1){
            if(map1[k]!=map2[k]){
                return false;
            }
        }
        for(var k in map2){
            if(map2[k]!=map1[k]){
                return false;
            }
        }
        return true;
    }

    //查询SKU
    searchSku=function(){
        for(var i=0;i<skuList.length;i++ ){
            if( matchObject(skuList[i].spec ,$scope.specificationItems ) ){
                $scope.sku=skuList[i];
                return ;
            }
        }
        $scope.sku={id:0,title:'--------',price:0};//如果没有匹配的
    }

    //添加商品到购物车
    $scope.addToCart=function () {
        $http.get('http://localhost:8089/cart/addGoodsToCartList.do?itemId='
            + $scope.sku.id +'&num='+$scope.num,{'withCredentials':true}).success(function (response) {
            if(response.success){
                location.href='http://localhost:8089/cart.html';//跳转到购物车页面
            }else{
                alert(response.message);
            }
        })
    }
})
