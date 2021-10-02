const mapa=document.querySelector(".maze")
const player=document.createElement("div")
player.id="player"
geraMapa(map)
function geraMapa(fonte){
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