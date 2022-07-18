

function addGlobalEventListner(type, selector, callback){
    document.documentElement.addEventListener(type,function(e){
        if(e.target.matches(selector)){
            callback(e);
        }
    })
}

var btn = document.querySelector('#btn');
btn.addEventListener('click',function(e){
    var div = document.createElement('div');
    div.classList.add('new-div');
    var txt = document.getElementById('input').value;
    div.innerHTML = txt;
    var container = document.querySelector('.container');
    container.append(div);
})

addGlobalEventListner('click','.new-div',function(e){
    alert(e.target.innerHTML);
})
