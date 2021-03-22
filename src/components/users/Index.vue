<template>
    <div>
        <ul class="list-group" v-if="!loading">
            <li class="list-group-item" v-for="(user, i) in users" :key="user.id"> 
                <div class="row">          
                    <div class="col-6 col-sm-3 offset-3 offset-sm-0">
                        <img v-if="user.image == '' " src="/img/user.png" class="img-fluid">
                        <img v-else :src="'http://127.0.0.1:8000/storage/' + user.image" class="img-fluid">
                    </div>               
                    <div class="col-12 col-sm-9">
                        <div>
                            <b>Nome: </b> {{user.name}}                  
                        </div>
                        <div>
                            <b>E-mail: </b> {{user.email}}      
                        </div>    
                        <div>
                            <b>Senha: </b> {{user.password}}         
                        </div>        

                        <div class="d-flex justify-content-around d-sm-block mt-3">
                            <button class="btn btn-sm btn-outline-primary col-sm-2 col-3" 
                                style="margin-right: 5px" @click="editar(user.id)">Editar</button>
                            <button class="btn btn-sm btn-outline-info col-sm-2 col-3" 
                                style="margin-left: 5px" @click="visualizar(user.id)">Visualizar</button>
                            <button class="btn btn-sm btn-outline-danger col-sm-2 col-3" 
                                style="margin-left: 5px" data-bs-toggle="modal" data-bs-target="#exampleModal"
                                @click="deleteId = user.id; deleteIndex = i">Apagar</button>                                                       
                        </div>                      
                    </div>
                </div>           
            </li>
        </ul>

        <Modal body="Excluir este usuário?" @apagar="apagar"/>

        <div class="d-flex justify-content-center" >
            <img src="/img/loading.gif" v-show="loading">
        </div>
        
    </div>
</template>

<script>

import Modal from '../Modal'

export default {
    components: { Modal },
    data(){
        return {
            loading: true,
            users: [],
            deleteId: 0,
            deleteIndex: 0
        }
    },
    created(){
        this.$emit('created', 'Lista')
        this.$axios.get('user').then(res => { 
            this.users = res.data 
            this.loading = false
        })
    },
    methods: {
        editar(id){
            this.$router.push(`users/${id}/edit`)
        },
        visualizar(id){
            this.$router.push(`users/${id}/show`)
        },
        apagar() {
            this.$axios.delete('user/' + this.deleteId).then(() => {
                this.users.splice(this.deleteIndex, 1)
            })
        },
    }
}
</script>
