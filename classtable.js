var btn = document.getElementsByTagName('button');
for(var i=0;i<btn.length;i++){
    btn[i].count = i;
    btn[i].onmouseover = function(){
        this.style.backgroundColor = '#848484';
    }
    // if(i%2==0){
    //     btn[i].onmouseover = function(){
    //         this.style.backgroundColor = '#848484';
    //     }
    //     btn[i].onmouseout = function(){
    //         this.style.backgroundColor = 'green';
    //     } 
    // }
    // else{
    //     btn[i].onmouseover = function(){
    //         this.style.backgroundColor = '#848484';
    //     }
    //     btn[i].onmouseout = function(){
    //         this.style.backgroundColor = 'red';
    //     } 
    // }
}