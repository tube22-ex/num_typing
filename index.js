let interval;
let type_len;
let type_lengs;
let start_time;
let key_cnt = 0
let arr = []
let cnt = 0
let first_ran01 = true;
let first_ran = true;
let in_play = false;
let one_line
function main(){
    inter_clear()

    if(in_play == true){
    type_len = ''
    type_lengs = ''
    start_time = ''
    key_cnt = 0
    arr = []
    cnt = 0
    first_ran = true;
   document.getElementById('numdiv').innerHTML = '';

        document.getElementById('num').value = '';
    key_cnt = 0
    in_play = false;
    document.getElementById('time').textContent = '0.000';
    document.getElementById('kpm').textContent = '0.000';
    document.getElementById('score').textContent = '0';
    setTimeout(()=>{

},500)
    }
    first_ran01 = true;
    first_ran = true;
    in_play = true;
    
    
    let time = document.getElementById('time');
    let kpm = document.getElementById('kpm');
    let Elapsed_time;
    let kpm_m;
    document.getElementById('score').textContent = key_cnt

    if(document.getElementById('checkbox').checked == true){
        type_len = document.getElementById('btn03').value
    }else{
        type_len = document.getElementById('btn02').value
    }
    document.getElementById('num').focus();
    if(first_ran === true){setTimeout(ran, 400)};

    function times() {
        if(start_time != 0){
        Elapsed_time = (new Date().getTime() - start_time)/1000
        kpm_m = Math.round(((key_cnt/(Elapsed_time-0.888)*60))*100)/100
        kpm.textContent = kpm_m.toFixed(3);
        time.textContent = Elapsed_time.toFixed(3);
       
        }
    }
function inter(){
    interval = setInterval(times,20) 
}

function inter_clear(){
    clearInterval(interval)
}
function ran(){
    if(first_ran === true){
        start_time = new Date().getTime();
        inter()
        for(let i=0;i<type_len;i++){
            if(document.getElementById('btn01').value == 0){
            type_lengs = Math.floor(Math.random() * 9) + 1
            }else{
                type_lengs = document.getElementById('btn01').value - 1
            }
            arr.push(Math.floor(Math.random() * (9*(10**type_lengs))) + 1*(10**type_lengs))
            let numdiv = document.getElementById('numdiv');
            let arr_div = document.createElement('div')
            arr_div.className = 'nums'
            arr_div.textContent = arr[arr.length - 1]
            arr_div.style.float = 'left'
            numdiv.appendChild(arr_div)
            arr_div.style.width = Number(arr_div.offsetWidth + 30) +'px';

            
            //numdiv.insertBefore(arr_div,numdiv.firstChild)
            }

            if(document.getElementById('checkbox01').checked == false){
                document.getElementsByClassName('nums')[0].style.backgroundColor = '#999999';
            }
        }else{

            if(document.getElementById('checkbox').checked == false){
                if(document.getElementById('btn01').value == 0){
                    type_lengs = Math.floor(Math.random() * 9) + 1
                    }else{
                        type_lengs = document.getElementById('btn01').value - 1
                    }
                arr.push(Math.floor(Math.random() * (9*(10**type_lengs))) + 1*(10**type_lengs))
                let numdiv = document.getElementById('numdiv');
                let arr_div = document.createElement('div')
                arr_div.className = 'nums'
                arr_div.textContent = arr[arr.length - 1]
                arr_div.style.float = 'left'
                numdiv.appendChild(arr_div)
                arr_div.style.width = Number(arr_div.offsetWidth + 30) +'px';
            }
           
        }
        first_ran = false;

     
};

function check(){
    /*
    
    let res = document.createElement('div');
    res.textContent = document.getElementsByClassName('nums')[0].textContent
    res.style.width = '3em';
    res.style.float = 'left'
    if(num.value == document.getElementsByClassName('nums')[0].textContent){
        res.style.color = 'green'
    }else{
        res.style.color = 'red'  
    };

    document.getElementById('Result').appendChild(res)
    */

    let num = document.getElementById('num');

    if(document.getElementsByClassName('nums').length != 0){
        if(document.getElementById('checkbox01').checked == true){

        if(num.value == document.getElementsByClassName('nums')[0].textContent){
            
            key_cnt = key_cnt + num.value.length
            document.getElementById('score').textContent = key_cnt
            num.value = '';
            document.getElementsByClassName('nums')[0].remove()
            ran()
            cnt++
        }
    }else{

        if(num.value == document.getElementsByClassName('nums')[cnt].textContent){
            
            key_cnt = key_cnt + num.value.length
            document.getElementById('score').textContent = key_cnt
            num.value = '';
            if(first_ran01 == true){
                document.getElementsByClassName('nums')[0].style.backgroundColor = '';
                first_ran01 = false
            }

            one_line = Math.floor(document.getElementById('numdiv').clientWidth/document.getElementsByClassName('nums')[0].clientWidth)
            if(cnt+2 > one_line){
               for(let i=0;i<one_line;i++){
                document.getElementsByClassName('nums')[0].remove();
               }
               cnt = 0
            document.getElementsByClassName('nums')[cnt].style.backgroundColor = '#999999';
            }else{
            document.getElementsByClassName('nums')[cnt].style.backgroundColor = '';
            if(document.getElementsByClassName('nums').length > cnt+1){
            document.getElementsByClassName('nums')[cnt+1].style.backgroundColor = '#999999';
            }
            cnt++
            }


            ran()
            
        }



    }

    }   
            if(document.getElementById('checkbox01').checked == true){
                if(document.getElementsByClassName('nums').length <= 0){
                
                    kpm.textContent = Math.round((document.getElementById('score').textContent/time.textContent*60)*100)/100
    
                    inter_clear()
                    
                    document.getElementById('numdiv').innerHTML = '';
                    cnt = 0
                    key_cnt = 0
                    in_play = false;
                }
            }else{
                if(document.getElementsByClassName('nums').length <= cnt){
                
                    kpm.textContent = Math.round((document.getElementById('score').textContent/time.textContent*60)*100)/100
    
                    inter_clear()
                    
                    document.getElementById('numdiv').innerHTML = '';
                    cnt = 0
                    key_cnt = 0
                    in_play = false;
                }
                
            }
        
    

};

document.getElementById('num').addEventListener('keydown',function keys(e){
    if(e.code == 'Space'){check()}
});

};

document.getElementById('btn').addEventListener('click',()=>{
   main()
});

window.addEventListener('keydown',function keys(ev){
    if(ev.code == 'Escape'){
        ev.preventDefault();
        document.getElementById('btn').focus()
    }
});
