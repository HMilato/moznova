<template>
  <div class="cursosdash">
   
         <b-container class="container h-100">
     
            <div class="intro h-100">
                <b-row class="row h-100 justify-content-center align-items-center">
                    <b-col class="col-md-6">
                        <H3>Todos Cursos</H3>
                        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nemo, magni.</p>
                    </b-col>
                    <b-col class="col-md-6 ">
                        <img src="/img/ac.svg" alt="" class="img-fluid">
                    </b-col>
                </b-row>
            </div>

            <hr>
         

            <h3 class="d-inline-block">Lista dos Cursos</h3>
            <button @click="novoCurso()" class="btn btn-primary float-right"> +Novo Curso</button>
            <hr>

            <div class="table">
                <table>
                <thead>
                    <tr>
                        <th>Nome do Curso</th>
                        <th>Preco</th>
                        <th>Modificar</th>
                    </tr>
                </thead>
                <tbody> 
                    <tr v-for="curso in cursos" :key="curso.id">
                        <td>{{curso.nome}}</td>
                        <td>{{curso.preco}}</td>
                        <td><button class="btn btn-primary" @click="editarCurso(curso)">Editar</button></td>
                        <td><button class="btn btn-danger" @click="apagarCurso(curso)">Apagar</button></td>
                    </tr>

                </tbody>
            </table>
            </div>

         </b-container>

        <!-- Modal -->

         <div class="modal fade" id="curso" tabindex="-1" role="dialog" aria-labelledby="editLabel" aria-hidden="true">
             <div class="modal-dialog modal-lg" role="document">
                <div class="modal-content">
                        <div class="modal-header">
                            <h5 class="modal-title" id="editLabel">Editar Curso</h5>
                            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div class="modal-body">

                            <div class="row">
                            <!-- main curso -->
                                <div class="col-md-8">
                                    <div class="form-group">
                                    <input type="text" placeholder="Nome do Curso" v-model="curso.nome" class="form-control">
                                    </div>

                                    <div class="form-group">
                                    <vue-editor v-model="curso.descricao" placeholder="Nome do Curso"></vue-editor>
                                    </div>
                                </div>
                            <!-- product sidebar -->
                                <div class="col-md-4">
                                    <h4 class="display-6">Detalhes do Curso</h4>
                                    <hr>

                                    <div class="form-group">
                                        <input type="text" placeholder="Preco do Curso" v-model="curso.preco" class="form-control">
                                    </div>

                                    <div class="form-group">
                                        <input type="text" @keyup.188="addTag" placeholder="Tags do Curso" v-model="tag" class="form-control">
                                        
                                        <div  class="d-flex">
                                           <p v-for="tag in curso.tags" :key="tag.id">
                                                <span class="p-1">{{tag}}</span>
                                            </p>
                                           
                                        </div>
                                    </div>

                                    <div class="form-group">
                                        <label for="product_image">Imagens do Curso</label>
                                        <input type="file" @change="uploadImage" class="form-control">
                                    </div>

                                 

                                    <div class="form-group d-flex">
                                        <div v-for="image in curso.images" :key="image.id">
                                            <img :src="image" alt="" width="80px">
                                        </div> 
                                    <!-- <div class="p-1" v-for="(image, index) in curso.images" :key="index"> 
                                           
                                            <div class="img-wrapp">
                                                <img :src="image" alt="" width="80px">
                                                <span class="delete-img" @click="deleteImage(image,index)">X</span>
                                            </div>
                                     </div>  -->
                                    </div>
                                </div>
                            </div>
                           
                      </div>
                       <div class="modal-footer">
                                <button type="button" class="btn btn-secondary" data-dismiss="modal">Cancelar</button>
                                <button type="button" @click="adicionarCurso()" class="btn btn-primary" v-if="this.modal == 'novo'">Guardar</button>
                                <button type="button" @click="salvarAlteracoes()" class="btn btn-primary" v-if="this.modal == 'editar'">Aplicar Alterações </button>
                       </div>
                </div>
             </div>
         </div>

  </div>
</template>

<script>
import {db, fb} from '../firebase';
import { VueEditor } from "vue2-editor";
export default {
    name: "cursosdash",
      components: {
    VueEditor
  },

    data(){
        return{
            cursos: [],
            curso:{
              nome: null,
              preco: null,
              descricao: null,
              tags:[],
              images:[]
            },
            itemAtivado : null,
            tag: null,
            modal: null,
        }
    },

    created(){

        this.readData();

        },

    firestore(){
        return {
            cursos: db.collection('curso'),
        }
    },    

    methods: {

        addTag(){
            this.curso.tags.push(this.tag);
            this.tag = "";
        },
        
        novoCurso(){
            this.modal = 'novo';
            $('#curso').modal('show');
        },

        editarCurso(curso){
            this.modal = 'editar';
            this.curso = curso;
         //   this.itemAtivado = curso['.key'];
           $('#curso').modal('show');
           
        },

        readData(){
  
        },
        adicionarCurso(){
            this.$firestore.cursos.add(this.curso);
            
              Toast.fire({
                  position: 'top',
                      icon: 'success',
                      timer: 1600,
                      title: 'Curso adicionado com sucesso!'
                        });
             $('#curso').modal('hide');
                           

       
        },

        salvarAlteracoes(){
                this.$firestore.cursos.doc(this.curso.id).update(this.curso);
                
                  Toast.fire({
                  position: 'top-end',
                      icon: 'success',
                      timer: 1600,
                      title: 'Curso editado com sucesso!'
                        });
                 $('#curso').modal('hide');
        
        },
        
        apagarCurso(doc){
            Swal.fire({
                title: 'Realmente deseja apagar?',
                text: "Não será possível reverter isso!",
                icon: 'warning',
                showCancelButton: true,
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
                confirmButtonText: 'Sim, apague!'
                }).then((result) => {
                if (result.isConfirmed) {

                    this.$firestore.cursos.doc(doc['.key']).delete()

                        Swal.fire({
                           // position: 'top-end',
                            icon: 'success',
                            title: 'Curso apagado com sucesso!!',
                            showConfirmButton: false,
                            timer: 1000
                            })

                }
            })
        },

        clearField(){
              this.curso = {
              nome: null,
              preco: null
              
            }
        },

            uploadImage(e){

      if(e.target.files[0]){
        
          let file = e.target.files[0];
        // var storageRef = fb.storage().ref('cursos/'+ Math.random() + '_'  + file.name);
          var storageRef = fb.storage().ref('cursos/'+  file.name);

          storageRef.put(file);
          console.log(e.target.files[0]);
    
          let uploadTask  = storageRef.put(file);
    
          uploadTask.on('state_changed', (snapshot) => {
            
          }, (error) => {
            // Handle unsuccessful uploads
          }, () => {
            // Handle successful uploads on complete
            // For instance, get the download URL: https://firebasestorage.googleapis.com/...
            
            uploadTask.snapshot.ref.getDownloadURL().then((downloadURL) => {
              this.curso.images.push(downloadURL);
            }); 

          }); 

      }




    },
     
    }

}
</script>

<style>

</style>