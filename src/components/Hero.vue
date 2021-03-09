<template>
 <div class="hero"> 

        <b-container class="container h-100">
        <b-row class="row h-100 justify-content-center align-items-center ">
                  <b-row class="col-md-5 ">
                       <b-col class="hero-content col-md "> 
                           <b-row class="hero-btn mt-5">
                            <h1 class="hero-title">Os Melhores Cursos Online</h1>
                            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Veritatis, incidunt aspernatur consequuntur praesentium amet reiciendis?
                            </p>
                            </b-row>
                            <b-row class="hero-btn mt-5">
                                <button class="btn custom-btn btn-info mr-4 ">Explore</button>
                                <button class="btn custom-btn btn-outline-secondary">Cursos</button>
                            </b-row>
                       </b-col> 
                   </b-row>
                    <b-row class="col-md-7">
                        <b-col class="graphic">
                            <img src="../assets/5514.jpg" alt="" width="100%" height="480px"> 
                        </b-col>
                    </b-row>
        </b-row>
      </b-container>

       

  </div>
</template>

<script>
export default {
    name: "Hero",

}
</script>

<style scoped lang="scss">

    .hero{
         text-align: left;
       
    }

</style>