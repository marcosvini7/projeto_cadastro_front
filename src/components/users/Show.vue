<template>
    <div class="d-flex justify-content-center">
        <div class="card col-12 col-sm-8 p-sm-5 p-2 bg-light" v-if="!loading">
            <div class="d-flex justify-content-center">
                <img v-if="user.image == '' " src="/img/user.png" class="img-fluid col-8">
                <img v-else :src="'http://127.0.0.1:8000/storage/' + user.image" class="img-fluid col-8">
            </div>
            <div class="col-12" id="area-dados">
                <div>
                    <b>Nome: </b> {{user.name}}               
                </div>
                <div>
                    <b>E-mail: </b> {{user.email}}               
                </div>    
                <div>
                    <b>Senha: </b> {{user.password}}            
                </div> 
                <div class="d-flex justify-content-around mt-3">
                    <button class="btn btn-outline-primary col-4"  @click="editar">Editar</button>
                    <button class="btn btn-sm btn-outline-danger col-4" style="margin-left: 5px" 
                        data-bs-toggle="modal" data-bs-target="#exampleModal">Apagar</button>    
                </div>          
            </div>
        </div>
        <img src="/img/loading.gif" v-show="loading">
        <Modal body="Excluir este usuário?" @apagar="apagar"/>
    </div>
</template>

<script>
import Modal from '../Modal'

export default {
    components: {Modal},
    data(){
        return{
            loading: true,
            user: {}
        }
    },
    created(){
        this.$emit('created', 'Detalhes')
        this.$axios.get('user/' + this.$route.params.id)
            .then(res => { 
                this.user = res.data
                this.loading = false
            })
    },
    methods: {
        editar(){
            this.$router.push(`/users/${this.$route.params.id}/edit`)
        },
        apagar() {
            this.$axios.delete('user/' + this.$route.params.id).then(() => {
                this.$router.push('/users')
            })
        }
    }
}
</script>

<style>
    #area-dados{
        font-size: 18px;
        font-weight: 400;
    }
</style>