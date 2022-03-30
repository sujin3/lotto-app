//1게임 생성

//클릭할 대상
var make5num = document.querySelector("#make_num5")

make5num.addEventListener("click", show5num);

function show5num(){
    var num_one = [];
    for(var i=1; i<46; i++){
        num_one.push(i);
    }
    num_one.sort(function(){
        return Math.random() - 0.5
    }) 
    //console.log(num_one);
    //추출 .slice() vs .splice()

    var start = Math.ceil(Math.random() * 40);
    var new_num_one = num_one.slice(start, start+6);
    console.log(new_num_one.sort(function(a,b){ //오름차순 정리
        return a-b;
    }));
    var bonus_num = new_num_one[new_num_one.length-1]
    console.log("보너스 번호 : "+bonus_num);
    //localStorage.setItem("game_one", new_num_one)
}