<template>
    <div>
        <ul class="list-group" v-if="!loading">
            <li class="list-group-item" v-for="(costumer, i) in costumers" :key="costumer.id">                       
                <div>
                    <b>Nome: </b> {{costumer.name}}               
                </div>
                <div>
                    <b>Registro médico: </b> {{costumer.medical_record}}
                </div>    
                <div>
                    <b>Cidade: </b> {{costumer.city}}
                </div>
                
                <div class="d-flex justify-content-around d-sm-block mt-3">
                    <button class="btn btn-sm btn-outline-primary col-sm-2 col-3" 
                        style="margin-right: 5px" @click="editar(costumer.id)">Editar</button>
                    <button class="btn btn-sm btn-outline-info col-sm-2 col-3" 
                        style="margin-left: 5px" @click="visualizar(costumer.id)">Visualizar</button>
                    <button class="btn btn-sm btn-outline-danger col-sm-2 col-3" 
                        style="margin-left: 5px" data-bs-toggle="modal" data-bs-target="#exampleModal"
                        @click="deleteId = costumer.id; deleteIndex = i">Apagar</button>
                </div>                      
                             
            </li>
        </ul>
        <Modal body="Excluir este cliente?" @apagar="apagar"/>

        <div class="d-flex justify-content-center" >
            <img src="/img/loading.gif" v-show="loading">
        </div>
    </div>
</template>

<script>

import Modal from '../Modal'

export default {
    components: {Modal},
    data(){
        return {
            costumers: [],
            loading: true,
            deleteId: 0,
            deleteIndex: 0

        }
    },
    created(){
        this.$emit('created', 'Lista')
        this.$axios.get('costumer').then(res => { 
            this.costumers = res.data 
            this.loading = false
        })
    },
    methods: {
        editar(id){
            this.$router.push(`/costumers/${id}/edit`)
        },
        visualizar(id){
            this.$router.push(`/costumers/${id}/show`)
        },
        apagar() {
            this.$axios.delete('costumer/' + this.deleteId).then(() => {
                this.costumers.splice(this.deleteIndex, 1)
            })
        },
    }
}
</script>