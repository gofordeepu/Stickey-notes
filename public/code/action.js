let AddNote=document.getElementById("add-btn");
let total=0
let initial=-1
AddNote.addEventListener("click",function(e){
    let card=document.createElement("div");
    card.className=`card${total}`;
    card.style.padding="2em"
    card.innerHTML=`<div class="card-header">
    <div class="icon">
       <img src="./delete.png" alt="" style="height:1em;width:1em" id="del-icon">
    </div>
   </div>
 
   <textarea name="" id="" cols="8" rows="6"></textarea>
 </div>`;
 
 document.getElementById("main-div").append(card);
 total++;
 initial++;
 for(i=initial;i<total;i++)
 {
     let cards=document.querySelector(`.card${i}`);
     let delBtn=cards.children[0].children[0].children[0];
     delBtn.addEventListener("click",function(e){
         this.parentNode.parentNode.parentNode.remove();
         console.log(this.parentNode.parentNode.parentNode)
         total--;
         if(total==0)
         {
           location.reload();
         }
     });
    
 }
});


