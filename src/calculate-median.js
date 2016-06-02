function calculate_median(arr) {
  //请勿改动函数名
    var arr_evn = [];
    var arr_num = 0;
    var result = 0;

    var arr_sort = arr.sort();
    
    for(var i = 0; i < arr_sort.length; i++){ //将第偶数个数取出放入arr_evn
        if(i%2 != 0){
            arr_evn[arr_num] = arr_sort[i];
            arr_num++;
        }
    }

    if(arr_num%2 == 0){      //判断数组元素个数是偶数
        result = (arr_evn[arr_num/2] + arr_evn[arr_num/2 - 1])/2;
        return result;
    }

    else {  //数组元素个数为奇数
        result = (arr_evn[parseInt(arr_num / 2)]);
        return result;
    }
}

module.exports = calculate_median;