console.log("题目总数:", questions.length);

const PASSWORD_HASH = "318";

function simpleHash(str){
    let num = 0;
    for(let i=0;i<str.length;i++){
        num += str.charCodeAt(i);
    }
    return String(num);
}

function checkPassword(){
    let val = document.getElementById("passwordInput").value;
    if(simpleHash(val) === PASSWORD_HASH){
        document.getElementById("loginBox").classList.add("hidden");
        document.getElementById("app").classList.remove("hidden");
        loadQuestion();
    }else{
        document.getElementById("errorMsg").innerText = "密码错误";
    }
}

let current = 0;

let scores = {
A:0,
B:0,
C:0,
D:0,
E:0
};

function loadQuestion(){

    if(!questions[current]) return;

    let q = questions[current];
    let box = document.getElementById("questionBox");

    box.innerHTML = `
    <div class="question">
    <h3>第 ${current+1} 题 / ${questions.length}</h3>
    <p>${q.question}</p>
    ${q.options.map((op,i)=>
        `<div class="option" onclick="selectOption(${i})">${op.text}</div>`
    ).join("")}
    </div>
    `;

    updateProgress();
}

function selectOption(index){

    let type = questions[current].options[index].type;

    scores[type]++;

    nextQuestion();
}

function nextQuestion(){
    current++;

    if(current < questions.length){
        loadQuestion();
    }else{
        showResult();
    }
}

function updateProgress(){
    let percent = (current/questions.length)*100;
    document.getElementById("progress").style.width = percent+"%";
}

function showResult(){

    document.getElementById("app").classList.add("hidden");
    document.getElementById("resultBox").classList.remove("hidden");

    // 找最高分字母
    let maxType = Object.keys(scores).reduce((a,b)=>scores[a]>scores[b]?a:b);

    let cityMap = {
        A:"上海",
        B:"北京",
        C:"成都",
        D:"杭州",
        E:"深圳"
    };

    document.getElementById("resultBox").innerHTML = `
    <h2>你的城市人格类型</h2>
    <h3>${cityMap[maxType]}</h3>
    <p>你更符合 ${maxType} 型人格特质。</p>
    `;
}

