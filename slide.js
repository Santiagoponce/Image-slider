console.log("Hola mundo");
var controlSlide=document.querySelector(".slideButton");
var listaConCentinela=
{
    //atributos
    imagenes:document.querySelectorAll(".piece"),
    indice:0,

    //metodos
   nextImage:function(){
        
        if(this.indice+1==this.imagenes.length)
            {
                animar('fadeOut 2s running',this.imagenes[this.indice]);
                this.imagenes[this.indice].classList.toggle("inactive");
                this.indice=0;
                animar('fadeOut 2s reverse ,translateX 2s reverse',this.imagenes[this.indice]);
                this.imagenes[this.indice].classList.toggle("inactive");
                return 
            }

        animar('fadeOut 2s running',this.imagenes[this.indice]);
        this.imagenes[this.indice++].classList.toggle("inactive");

        animar('fadeOut 2s reverse ,translateX 2s reverse',this.imagenes[this.indice]);
        this.imagenes[this.indice].classList.toggle("inactive");

    },

    prevImage:function(){
        
        if(this.indice==0)
            {                
                animar('fadeOut 2s running',this.imagenes[this.indice]);
                this.imagenes[this.indice].classList.toggle("inactive");

                this.indice=this.imagenes.length-1;
                animar('fadeOut 2s reverse ,translate-X 2s reverse',this.imagenes[this.indice]);
                this.imagenes[this.indice].classList.toggle("inactive");
                return 
            }
            
        animar('fadeOut 2s running',this.imagenes[this.indice]);
        this.imagenes[this.indice--].classList.toggle("inactive");
        animar('fadeOut 2s reverse ,translate-X 2s reverse',this.imagenes[this.indice]);
        this.imagenes[this.indice].classList.toggle("inactive");

    }

}

function animar(stringAnimation,target)
{
    target.style.animation=stringAnimation;
    setTimeout(()=>
    {    target.style.animation='';
},2300);

}

controlSlide.addEventListener("click",(e)=>
{
    console.log(e.target);
    if(e.target.className=='next')
        listaConCentinela.nextImage();
    else
        listaConCentinela.prevImage();
})