<template>
 <div class="home"> 
   <Navbar></Navbar> 
   <hero/>
   
   <cursos/>

      <b-container class="container h-100">
        <b-row class="row h-100 justify-content-center align-items-center ">

                    <b-row class="col-md-7 mr-auto">
                        <b-col class="graphic">
                            <img src="../assets/5514.jpg" alt="" width="100%" height="480px"> 
                        </b-col>
                    </b-row>
                  <b-row class="col-md-5 ">
                       <b-col class="hero-content col-md "> 
                           <b-row class="hero-btn mt-5">
                            <h1 class="hero-title">Sobre a MozNova</h1>
                            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Veritatis, incidunt aspernatur consequuntur praesentium amet reiciendis?
                            </p>
                            </b-row>
                            <b-row class="hero-btn mt-5">
                               
                                <button class="btn custom-btn btn-outline-secondary">Conheca-nos</button>
                            </b-row>
                       </b-col> 
                   </b-row>
                  <login/>
        </b-row>
           
      </b-container>
      

  </div>
</template>

<script>
import Hero from '../components/Hero.vue'
import Cursos from '../sections/cursos.vue'
import Login from '../components/Login.vue'
export default {

  components: { 
    Hero,
    Cursos,
    Login,
    },
    name: "home",

}
</script>

<style scoped lang="scss">

    .home{
         text-align: left;
       
    }

</style>