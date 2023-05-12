function changetored(){
   const myElement=document.getElementById("firstDiv");
    myElement.style.color = "red";
}
function changetoblue(){
    const myElement=document.getElementById("firstDiv");
     myElement.style.color = "rgb(80, 20, 219)";
 }
 function changetogreen(){
    const myElement=document.getElementById("firstDiv");
     myElement.style.color = "rgb(9, 158, 53)";
 }
 function changetotimes(){
    const myElement=document.getElementById("firstDiv");
     myElement.style.fontFamily = "'Times New Roman', Times, serif";
 }
 function changetosans(){
    const myElement=document.getElementById("firstDiv");
     myElement.style.fontFamily = "sans-serif";
 }
 function changetogill(){
    const myElement=document.getElementById("firstDiv");
     myElement.style.fontFamily = "'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif";
 }
 function changetoleft(){
    const myElement=document.getElementById("firstDiv");
     myElement.style.textAlign = "left";
 }
 function changetocenter(){
    const myElement=document.getElementById("firstDiv");
     myElement.style.textAlign = "center";
 }
 function changetoright(){
    const myElement=document.getElementById("firstDiv");
     myElement.style.textAlign = "right";
 }
// function changetoarabic(){
//     const myElement=document.getElementById("firstDiv");
//      myElement.style.textAlign = "center";
// }
// function changetohindi(){
//     const myElement=document.getElementById("firstDiv");
//      myElement.style.textAlign = "center";
// }
// function changetotamil(){
//     const myElement=document.getElementById("firstDiv");
//      myElement.style.textAlign = "center";
// }
function changetoarabic(){
    const item=document.getElementsByClassName("arabic");
for (const stream of item) {
                stream.style.display = 'block';
            }

            const default2=document.getElementsByClassName("dafault2");
            for (const stream of default2) {
                            stream.style.display = 'none';
                        }
                        const default3=document.getElementsByClassName("tamil");
                        for (const stream of default3) {
                                        stream.style.display = 'none';
                                    }
                                    const item2=document.getElementsByClassName("hindi");
                                    for (const stream of item2) {
                                                    stream.style.display = 'none';
                                                }

}

function changetohindi(){
   
    const item=document.getElementsByClassName("hindi");
    for (const stream of item) {
                    stream.style.display = 'block';
                }
    
                const default2=document.getElementsByClassName("dafault2");
                for (const stream of default2) {
                                stream.style.display = 'none';
                            }

                            const default3=document.getElementsByClassName("tamil");
                for (const stream of default3) {
                                stream.style.display = 'none';
                            }
                            const default4=document.getElementsByClassName("arabic");
                for (const stream of default4) {
                                stream.style.display = 'none';
                            }
   
}
function changetotamil(){

    const item=document.getElementsByClassName("tamil");
    for (const stream of item) {
                    stream.style.display = 'block';
                }
    
                const default2=document.getElementsByClassName("dafault2");
                for (const stream of default2) {
                                stream.style.display = 'none';
                            }

                            const default3=document.getElementsByClassName("arabic");
                for (const stream of default3) {
                                stream.style.display = 'none';
                            }
                            const item2=document.getElementsByClassName("hindi");
                            for (const stream of item2) {
                                            stream.style.display = 'none';
                                        }

   
}