const mapa=document.querySelector(".maze")
const player=document.createElement("div")
const arrowUp=document.getElementById("arrowUp")
const arrowDown=document.getElementById("arrowDown")
const arrowLeft=document.getElementById("arrowLeft")
const arrowRight=document.getElementById("arrowRight")
player.id="player"
let playerPosition = [0,0]
novoJogo()
function novoJogo(){
    geraMapa(map)
}
function geraMapa(fonte){
    mapa.innerHTML=""
    for(let i=0;i<fonte.length;i++){
        const linha=document.createElement("div")
        linha.classList.add("maze__row")
        for(let j=0;j<fonte[i].length;j++){
            const cell = document.createElement("div")
            cell.classList.add("maze__cell")
            if(fonte[i][j]==="W"){
                cell.classList.add("maze--wall")
            }
            if(fonte[i][j]==="S"){
                playerPosition = [j,i]
                cell.appendChild(player)
            }
            if(fonte[i][j]==="F"){
                cell.id="meta"
            }
            linha.appendChild(cell)
        }
        mapa.appendChild(linha)
    }
}
function win(){
    const vitoria = document.createElement("div")
    vitoria.classList.add("Vitoria")
    vitoria.innerText="Você venceu"
    const playAgain = document.createElement("button")
    playAgain.classList.add("playAgain")
    playAgain.innerText="Jogar novamente"
    mapa.innerHTML=""
    mapa.appendChild(vitoria)
    mapa.appendChild(playAgain)
    playAgain.addEventListener("click",novoJogo)
}
document.addEventListener("keydown",movimento)
function movimento(evt){
    if(evt.key==="ArrowUp"||evt.key==="w"){
        moveUp()
    }
    if(evt.key==="ArrowDown"||evt.key==="s"){
        moveDown()
    }
    if(evt.key==="ArrowLeft"||evt.key==="a"){
        moveLeft()
    }
    if(evt.key==="ArrowRight"||evt.key==="d"){
        moveRight()
    }

}
arrowUp.addEventListener("click",moveUp)
arrowDown.addEventListener("click",moveDown)
arrowLeft.addEventListener("click",moveLeft)
arrowRight.addEventListener("click",moveRight)
function moveUp(){
    const x=playerPosition[0]
    const y=playerPosition[1]
    if(!checkWall(x,y-1)){
        movePlayer(x,y-1)
    }
    if(map[playerPosition[1]][playerPosition[0]]==='F'){
        console.log("Vitoria")
        win()
    }
}
function moveDown(){
    const x=playerPosition[0]
    const y=playerPosition[1]
    if(!checkWall(x,y+1)){
        movePlayer(x,y+1)
    }
    if(map[playerPosition[1]][playerPosition[0]]==='F'){
        console.log("Vitoria")
        win()
    }
}
function moveLeft(){
    const x=playerPosition[0]
    const y=playerPosition[1]
    if(!checkWall(x-1,y)&&x!==0){
        movePlayer(x-1,y)
    }
    if(map[playerPosition[1]][playerPosition[0]]==='F'){
        console.log("Vitoria")
        win()
    }
}
function moveRight(){
    const x=playerPosition[0]
    const y=playerPosition[1]
    if(!checkWall(x+1,y)){
        movePlayer(x+1,y)
    }
    if(map[playerPosition[1]][playerPosition[0]]==='F'){
        console.log("Vitoria")
        win()
    }
}
function checkWall(x,y){
    return map[y][x]==='W'
}
function movePlayer(x,y){
    playerPosition=[x,y]
    mapa.children[y].children[x].appendChild(player)
}