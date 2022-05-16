var li = document.getElementsByClassName('anav');
var lixue = document.getElementsByClassName('lixxuexinianji');
var wenxue = document.getElementsByClassName('wenxuexinianji');
var sheke = document.getElementsByClassName('shekexinianji');
var waiyu = document.getElementsByClassName('waiyuxinianji');
var tiyu = document.getElementsByClassName('tiyuxinianji');
var meishu = document.getElementsByClassName('meishuxinianji');
var nj = document.getElementsByClassName('nj');
var banji = document.getElementsByClassName('banji');
var liyiba = document.getElementById("liyiba");
var sum = 1;
for(var i =0;i<li.length;i++){
    li[i].count = i;
    var a = i;
    if(i==0){
        li[i].onmouseover = function(){
            this.style.backgroundColor = '#808080';
            lixue[0].style.display = 'block';
            lixue[0].onmouseover = function(){
                lixue[0].style.display = 'block';
                li[0].style.backgroundColor = '#808080';
            }
            for(var j=0; j<4; j++){
                nj[j].count1=j;
                if(j==0){
                    nj[j].onmouseover = function(){
                        this.style.backgroundColor = '#81DAF5';
                    }
                    nj[j].onclick = function(){
                        sum += 1;
                        banji[0].style.zIndex = sum;
                    }
                }
                if(j==1){
                    nj[j].onmouseover = function(){
                        this.style.backgroundColor = '#81DAF5';
                    }
                    nj[j].onclick = function(){
                        sum += 1;
                        banji[1].style.zIndex = sum;
                    }
                }
                if(j==2){
                    nj[j].onmouseover = function(){
                        this.style.backgroundColor = '#81DAF5';
                    }
                    nj[j].onclick = function(){
                        sum += 1;
                        banji[2].style.zIndex = sum;
                    }
                }
                if(j==3){
                    nj[j].onmouseover = function(){
                        this.style.backgroundColor = '#81DAF5';
                    }
                    nj[j].onclick = function(){
                        sum += 1;
                        banji[3].style.zIndex = sum;
                    }
                }
            }
        }
        li[i].onmouseout = function(){
            this.style.backgroundColor = '#424242';
            lixue[0].style.display = 'none';
            lixue[0].onmouseout = function(){
                lixue[0].style.display = 'none';
                li[0].style.backgroundColor = '#424242';
            }
            for(var j=0; j<4; j++){
                nj[j].count1=j;
                nj[j].onmouseout = function(){
                    this.style.backgroundColor = '#fff';
                }
            }
        }
    }
    if(i==1){
        li[i].onmouseover = function(){
            this.style.backgroundColor = '#808080';
            wenxue[0].style.display = 'block';
            wenxue[0].onmouseover = function(){
                wenxue[0].style.display = 'block';
                li[1].style.backgroundColor = '#808080';
            }
            for(var j=4; j<8; j++){
                nj[j].count1=j;
                if(j==4){
                    nj[j].onmouseover = function(){
                        this.style.backgroundColor = '#81DAF5';
                    }
                    nj[j].onclick = function(){
                        sum += 1;
                        banji[4].style.zIndex = sum;
                    }
                }
                if(j==5){
                    nj[j].onmouseover = function(){
                        this.style.backgroundColor = '#81DAF5';
                    }
                    nj[j].onclick = function(){
                        sum += 1;
                        banji[5].style.zIndex = sum;
                    }
                }
                if(j==6){
                    nj[j].onmouseover = function(){
                        this.style.backgroundColor = '#81DAF5';
                    }
                    nj[j].onclick = function(){
                        sum += 1;
                        banji[6].style.zIndex = sum;
                    }
                }
                if(j==7){
                    nj[j].onmouseover = function(){
                        this.style.backgroundColor = '#81DAF5';
                    }
                    nj[j].onclick = function(){
                        sum += 1;
                        banji[7].style.zIndex = sum;
                    }
                }
            }
        }
        li[i].onmouseout = function(){
            this.style.backgroundColor = '#424242';
            wenxue[0].style.display = 'none';
            wenxue[0].onmouseout = function(){
                wenxue[0].style.display = 'none';
                li[1].style.backgroundColor = '#424242';
            }
            for(var j=4; j<8; j++){
                nj[j].count1=j;
                nj[j].onmouseout = function(){
                    this.style.backgroundColor = '#fff';
                }
            }
        }
    }
    if(i==2){
        li[i].onmouseover = function(){
            this.style.backgroundColor = '#808080';
            sheke[0].style.display = 'block';
            sheke[0].onmouseover = function(){
                sheke[0].style.display = 'block';
                li[2].style.backgroundColor = '#808080';
            }
            for(var j=8; j<12; j++){
                nj[j].count1=j;
                if(j==8){
                    nj[j].onmouseover = function(){
                        this.style.backgroundColor = '#81DAF5';
                    }
                    nj[j].onclick = function(){
                        sum += 1;
                        banji[8].style.zIndex = sum;
                    }
                }
                if(j==9){
                    nj[j].onmouseover = function(){
                        this.style.backgroundColor = '#81DAF5';
                    }
                    nj[j].onclick = function(){
                        sum += 1;
                        banji[9].style.zIndex = sum;
                    }
                }
                if(j==10){
                    nj[j].onmouseover = function(){
                        this.style.backgroundColor = '#81DAF5';
                    }
                    nj[j].onclick = function(){
                        sum += 1;
                        banji[10].style.zIndex = sum;
                    }
                }
                if(j==11){
                    nj[j].onmouseover = function(){
                        this.style.backgroundColor = '#81DAF5';
                    }
                    nj[j].onclick = function(){
                        sum += 1;
                        banji[11].style.zIndex = sum;
                    }
                }
            }
        }
        li[i].onmouseout = function(){
            this.style.backgroundColor = '#424242';
            sheke[0].style.display = 'none';
            sheke[0].onmouseout = function(){
                sheke[0].style.display = 'none';
                li[2].style.backgroundColor = '#424242';
            }
            for(var j=8; j<12; j++){
                nj[j].count1=j;
                nj[j].onmouseout = function(){
                    this.style.backgroundColor = '#fff';
                }
            }
        }
    }
    if(i==3){
        li[i].onmouseover = function(){
            this.style.backgroundColor = '#808080';
            waiyu[0].style.display = 'block';
            waiyu[0].onmouseover = function(){
                waiyu[0].style.display = 'block';
                li[3].style.backgroundColor = '#808080';
            }
            for(var j=12; j<16; j++){
                nj[j].count1=j;
                if(j==12){
                    nj[j].onmouseover = function(){
                        this.style.backgroundColor = '#81DAF5';
                    }
                    nj[j].onclick = function(){
                        sum += 1;
                        banji[12].style.zIndex = sum;
                    }
                }
                if(j==13){
                    nj[j].onmouseover = function(){
                        this.style.backgroundColor = '#81DAF5';
                    }
                    nj[j].onclick = function(){
                        sum += 1;
                        banji[13].style.zIndex = sum;
                    }
                }
                if(j==14){
                    nj[j].onmouseover = function(){
                        this.style.backgroundColor = '#81DAF5';
                    }
                    nj[j].onclick = function(){
                        sum += 1;
                        banji[14].style.zIndex = sum;
                    }
                }
                if(j==15){
                    nj[j].onmouseover = function(){
                        this.style.backgroundColor = '#81DAF5';
                    }
                    nj[j].onclick = function(){
                        sum += 1;
                        banji[15].style.zIndex = sum;
                    }
                }
            }
        }
        li[i].onmouseout = function(){
            this.style.backgroundColor = '#424242';
            waiyu[0].style.display = 'none';
            waiyu[0].onmouseout = function(){
                waiyu[0].style.display = 'none';
                li[3].style.backgroundColor = '#424242';
            }
            for(var j=12; j<16; j++){
                nj[j].count1=j;
                nj[j].onmouseout = function(){
                    this.style.backgroundColor = '#fff';
                }
            }
        }
    }
    if(i==4){
        li[i].onmouseover = function(){
            this.style.backgroundColor = '#808080';
            tiyu[0].style.display = 'block';
            tiyu[0].onmouseover = function(){
                tiyu[0].style.display = 'block';
                li[4].style.backgroundColor = '#808080';
            }
            for(var j=16; j<20; j++){
                nj[j].count1=j;
                if(j==16){
                    nj[j].onmouseover = function(){
                        this.style.backgroundColor = '#81DAF5';
                    }
                    nj[j].onclick = function(){
                        sum += 1;
                        banji[16].style.zIndex = sum;
                    }
                }
                if(j==17){
                    nj[j].onmouseover = function(){
                        this.style.backgroundColor = '#81DAF5';
                    }
                    nj[j].onclick = function(){
                        sum += 1;
                        banji[17].style.zIndex = sum;
                    }
                }
                if(j==18){
                    nj[j].onmouseover = function(){
                        this.style.backgroundColor = '#81DAF5';
                    }
                    nj[j].onclick = function(){
                        sum += 1;
                        banji[18].style.zIndex = sum;
                    }
                }
                if(j==19){
                    nj[j].onmouseover = function(){
                        this.style.backgroundColor = '#81DAF5';
                    }
                    nj[j].onclick = function(){
                        sum += 1;
                        banji[19].style.zIndex = sum;
                    }
                }
            }
        }
        li[i].onmouseout = function(){
            this.style.backgroundColor = '#424242';
            tiyu[0].style.display = 'none';
            tiyu[0].onmouseout = function(){
                tiyu[0].style.display = 'none';
                li[4].style.backgroundColor = '#424242';
            }
            for(var j=16; j<20; j++){
                nj[j].count1=j;
                nj[j].onmouseout = function(){
                    this.style.backgroundColor = '#fff';
                }
            }
        }
    }
    if(i==5){
        li[i].onmouseover = function(){
            this.style.backgroundColor = '#808080';
            meishu[0].style.display = 'block';
            meishu[0].onmouseover = function(){
                meishu[0].style.display = 'block';
                li[5].style.backgroundColor = '#808080';
            }
            for(var j=20; j<24; j++){
                nj[j].count1=j;
                if(j==20){
                    nj[j].onmouseover = function(){
                        this.style.backgroundColor = '#81DAF5';
                    }
                    nj[j].onclick = function(){
                        sum += 1;
                        banji[20].style.zIndex = sum;
                    }
                }
                if(j==21){
                    nj[j].onmouseover = function(){
                        this.style.backgroundColor = '#81DAF5';
                    }
                    nj[j].onclick = function(){
                        sum += 1;
                        banji[21].style.zIndex = sum;
                    }
                }
                if(j==22){
                    nj[j].onmouseover = function(){
                        this.style.backgroundColor = '#81DAF5';
                    }
                    nj[j].onclick = function(){
                        sum += 1;
                        banji[22].style.zIndex = sum;
                    }
                }
                if(j==23){
                    nj[j].onmouseover = function(){
                        this.style.backgroundColor = '#81DAF5';
                    }
                    nj[j].onclick = function(){
                        sum += 1;
                        banji[23].style.zIndex = sum;
                    }
                }
            }
        }
        li[i].onmouseout = function(){
            this.style.backgroundColor = '#424242';
            meishu[0].style.display = 'none';
            meishu[0].onmouseout = function(){
                meishu[0].style.display = 'none';
                li[5].style.backgroundColor = '#424242';
            }
            for(var j=20; j<24; j++){
                nj[j].count1=j;
                nj[j].onmouseout = function(){
                    this.style.backgroundColor = '#fff';
                }
            }
        }
    }
}