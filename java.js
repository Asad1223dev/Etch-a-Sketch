const grid=document.querySelector("#grid");
const resizeButton=document.querySelector("#resize");
const pickColor=document.querySelector("#pick-color");
const clearButton=document.querySelector("#clear");
const hoverButton=document.querySelector("#hover");

function gridSize(size)
{
    grid.textContent="";
    const cellNumber=size*size;
    const cellSize=576/size+"px";
    for(let i=0; i<cellNumber;i++)
    {
       const cell=document.createElement("div");
        cell.classList.add("cell");
        cell.style.width=cellSize;
        cell.style.height=cellSize;
        cell.addEventListener("click",function(){
            cell.classList.add("colored");
            cell.style.backgroundColor=pickColor.value;
        });
        cell.addEventListener("dblclick",function(){
            cell.classList.remove("colored");
            cell.style.backgroundColor="";
        });
        cell.addEventListener("mouseenter", function () {
            if(isHovering){
            cell.classList.add("colored");
            cell.style.backgroundColor = pickColor.value;
            }
        });
        grid.appendChild(cell);
    }
}

gridSize(8);

    resizeButton.addEventListener("click",function(){
        const newSize=prompt("Add side length of grid");
        if(newSize===null)
        {
            return;
        }
        if(newSize> 64 || newSize<0)
        {
            alert("Please enter from 1 to 64!");
        }
        else
        {
            gridSize(newSize);
        }
});


clearButton.addEventListener("click", function () {
  const cells = document.querySelectorAll(".cell");

  for (let i = 0; i < cells.length; i++) {
    cells[i].classList.remove("colored");
    cells[i].style.backgroundColor = "";
  }
});

       let isHovering = false;
hoverButton.addEventListener("click", function () {
  isHovering = !isHovering; 
  hoverButton.classList.toggle("active", isHovering);
});

