const container = document.querySelector(".container")
let arr = []
let len = 20
updateArr(len)

function update(){
    container.innerHTML = '';
    if(document.getElementById("arrSize").value){
        len = document.getElementById("arrSize").value
    }
    updateArr(len)
    
}

function sort(){
    const copy = [...arr]
    const swaps = bubbleSort(copy);
    animate(swaps);
}  

function handleKeyPress(event){
    if (event.key === "Enter") {
        event.preventDefault();
        len = event.target.value;
        update();
        console.log("Input value:", inputValue);
    }
}

function animate(swaps){
    if(swaps.length == 0) return;
    const [i,j] = swaps.shift();
    const temp = arr[i]
    arr[i] = arr[j]
    arr[j] = temp
    showbars(i)

    setTimeout(function(){
        animate(swaps)
    },200)
}

function showbars(index){
    container.innerHTML = '';
    for(let i=0; i<arr.length;i++){
        let height = arr[i]
        const bar = document.createElement("div");
        bar.className = "bar";
        bar.style.height = ""+height+"%"
        if(index && (index == i || index+1 == i)){
            bar.style.backgroundColor = "red"
        }
        container.appendChild(bar);    
    }
}

function updateArr(){
    container.innerHTML = '';
    arr = []
    for(let i=0; i<len;i++){
        let height = Math.random() * 100
        arr.push(height)
        const bar = document.createElement("div");
        bar.className = "bar";
        bar.style.height = ""+height+"%"
        container.appendChild(bar);    
    }
    console.log(len)
}

function bubbleSort(arr){
    const swaps = []
    for(let i=0; i<arr.length; i++){
        let flag = false;
        for(let j=0; j<arr.length-1-i; j++){
            if(arr[j] > arr[j+1]){
                let temp = arr[j];
                arr[j] = arr[j+1];
                arr[j+1] = temp;
                swaps.push([j,j+1])
                flag = true; 
            }
        }
        if(!flag) break;
    }
    console.log("bubbleSort")
    return swaps;
}
console.log("hello")