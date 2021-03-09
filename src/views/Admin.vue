<template>
<div class="admin"> 
       <div class="page-wrapper default-theme sidebar-bg bg1 toggled">
          <a id="show-sidebar" @click="closeMenu" class="btn btn-sm btn-dark" href="#">
              <i class="fas fa-bars"></i>
          </a> 
        <nav id="sidebar" class="sidebar-wrapper">
            <div class="sidebar-content">
                <!-- sidebar-brand -->
                <div class="sidebar-item sidebar-brand">
                    <a href="#">MozNova</a>
                    <div id="close-sidebar" @click="closeMenu">
                        <i class="fas fa-times"></i>
                    </div>
                </div> 
                <!-- sidebar-header -->
                <div class="sidebar-item sidebar-header d-flex flex-nowrap">
                    <div class="user-pic">
                        <img class="img-responsive img-rounded" src="/img/user.png" alt="User picture">
                    </div>
                    <div class="user-info">
                        <span class="user-name">Jotino
                            <strong>Jotino</strong>
                        </span>
                        <span class="user-role">Administrador</span>
                        <span class="user-status">
                            <i class="fa fa-circle"></i>
                            <span>Online</span>
                        </span>
                    </div>
                </div>
                <!-- sidebar-search  -->
                <div class="sidebar-item sidebar-search">
                    <div>
                        <div class="input-group">
                            <input type="text" class="form-control search-menu" placeholder="Search...">
                            <div class="input-group-append">
                                <span class="input-group-text">
                                    <i class="fa fa-search" aria-hidden="true"></i>
                                </span>
                            </div>
                        </div>
                    </div>
                </div> 
                <!-- sidebar-menu  -->
                <div class=" sidebar-item sidebar-menu">
                    <ul>
                        <li class="header-menu">
                            <span>Geral</span>
                        </li>
       
                        <li>
                            <router-link to="/admin/dash">
                                <i class="fa fa-book"></i>
                                <span class="menu-text">Dashboard</span>
                            </router-link>
                        </li>
                        <li>
                           
                            <router-link to="/admin/cursosdash">
                                <i class="fa fa-calendar"></i>
                                <span class="menu-text">Cursos</span>
                            </router-link>
                          
                        </li>
                        <li>
                            <router-link to="/admin/pedidos">
                                <i class="fa fa-folder"></i>
                                <span class="menu-text">Pedidos</span>
                            </router-link>
                        </li> 
                        <li>
                            <a href="#" @click="logout()">
                                 <i class="fa fa-power-off"></i>
                                 <span class="menu-text">Sair</span>
                            </a>
                        </li>
                     
                    </ul>
                </div> 
                <!-- sidebar-menu  -->
            </div>
        
        </nav>
        <!-- page-content  -->

          <main class="page-content">
            <router-view/>
        </main>
       

        <!-- page-content" -->
    </div>
  </div> 
</template>

<script>
import $ from 'jquery';
import {fb} from '../firebase';
export default {
    name: "admin",
    methods:{
        closeMenu(){
            $(".page-wrapper").toggleClass("toggled");
        },
        logout(){
          fb.auth().signOut()
          .then(() => {
              this.$router.replace('/');
          }) 
          .catch((err) =>{
                console.log(err);
            });
        }
    }

}
</script>

<style>

</style>