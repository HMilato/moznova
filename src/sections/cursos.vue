<template>
    <div class="curso">
          <b-container  class = "bv-example-row" > 
              <h1 class="text-center p-5 ">Nossos Cursos</h1>
            
            <div class="bcard row"> 
               <!--   <div class=" bcard ">  -->
                 
                                <div class=" col-md-4">  
                                    <b-card
                                        title="Curso de Barbeiro"                        
                                        :img-src="require('../assets/barbeiro.jpg')"
                                        img-alt="Image"
                                        img-top
                                        img-height="200"
                                        tag="article"
                                        style="max-width: 20rem;"
                                        class="mb-5"   
                                        
                                    >  
                
                                        <b-card-text class="">
                                        Some quick example text to build on the card title and make up the bulk of the card's content.
                                        </b-card-text>

                                        <b-button href="#" variant="info">Comprar</b-button>
                                </b-card> 
                            </div>

                                <div class="col-md-4">  
                                   <b-card
                                        title="Curso de Java"                        
                                        :img-src="require('../assets/java.jpg')"
                                        img-alt="Image"
                                        img-top
                                        img-height="200"
                                        tag="article"
                                        style="max-width: 20rem;"
                                        class="mb-5" 
                                        
                                        
                                    >  
                
                                        <b-card-text class="">
                                        Some quick example text to build on the card title and make up the bulk of the card's content.
                                        </b-card-text>

                                        <b-button href="#" variant="info">Comprar</b-button>
                                </b-card> 
                                </div>

                                 <div class="col-md-4"> 
                                   <b-card
                                        title="Curso de Gastronomia"                        
                                        :img-src="require('../assets/cozinha.png')"
                                        img-alt="Image"
                                        img-top
                                        img-height="200"
                                        tag="article"
                                        style="max-width: 20rem;"
                                        class="mb-5"   
                                        
                                    >  
                
                                        <b-card-text class="">
                                        Some quick example text to build on the card title and make up the bulk of the card's content.
                                        </b-card-text>

                                        <b-button href="#" variant="info">Comprar</b-button>
                                </b-card> 
                                 </div>

                                      <div class="col-md-4"> 
                                   <b-card
                                        title="Curso de Ingles"                        
                                        :img-src="require('../assets/ingles.png')"
                                        img-alt="Image"
                                        img-top
                                        img-height="200"
                                        tag="article"
                                        style="max-width: 20rem;"
                                        class="mb-5"   
                                        
                                    >  
                
                                        <b-card-text class="">
                                        Some quick example text to build on the card title and make up the bulk of the card's content.
                                        </b-card-text>

                                        <b-button href="#" variant="info">Comprar</b-button>
                                </b-card> 
                                 </div>
            
        
             <!-- </div>  -->

            </div>
        
                
        
                   
          
            </b-container >

       
            

    </div>
  

</template>

<script>
export default {
    name: "cursos",


}
</script>

<style>
    .curso{
          background-color: rgb(245, 246, 247);
          margin-bottom: 1%;
    }
    .bcard{

        padding-bottom: 5%;
        text-align: left;
    }



</style>