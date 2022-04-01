// 클릭할 대상
const make1num = document.querySelector("#make_num1")
const make5num = document.querySelector("#make_num5")

// 이벤트 등록
make1num.addEventListener("click", show1num);
make5num.addEventListener("click", show5num);

// 로또 생성 함수
function show1num(){
    let num_one = [];
    for(let i=1; i<46; i++){
        num_one.push(i);
    }
    num_one.sort(function(){
        return Math.random() - 0.5
    }) 
    //console.log(num_one);
    //추출 .slice() vs .splice()

    let start = Math.ceil(Math.random() * 40);
    let new_num_one = num_one.slice(start, start+6);
    new_num_one.sort(function(a,b){ //오름차순 정리
       return a-b;
    });
    //let bonus_num = new_num_one[new_num_one.length-1]
    localStorage.setItem("lottoNum", new_num_one)
     
    location.href = "/result1"
}

function show5num(){
    let num_five = [];
    for(let i=1; i<46; i++){
        num_five.push(i);
    }
    //console.log(num_five);

    //arrow function (화살표 함수 표기법)
    num_five.sort((a,b)=>{return Math.random() - 0.7}); 
    //console.log(num_five);

    //6개씩 랜덤 5회 추출
    let num_five_arr = [];
    for(let i=0; i<5; i++){
        let start = Math.ceil(Math.random() * 40);
        //console.log("start : "+start);
        let new_num_five = num_five.slice(start, start+6);
        new_num_five.sort(function(a,b){ //오름차순 정리
           return a-b;
        });
        //console.log(new_num_five);
        num_five_arr.push(new_num_five);
    }

    //console.log(num_five_arr);
    localStorage.setItem("lottoNums", JSON.stringify(num_five_arr));
    location.href = "/result5"
}