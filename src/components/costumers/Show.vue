<template>
    <div class="d-flex justify-content-center" >
        <div class="card col-12 col-sm-8 p-sm-5 p-2 bg-light" v-if="!loading" >
            <div class="col-12" id="area-dados">
                <div>
                    <b>Nome: </b> {{ costumer.name }}                
                </div>
                <div>
                    <b>Registro médico: </b> {{ costumer.medical_record }}            
                </div>    
                <div>
                    <b>Telefone: </b>  {{ costumer.phone }}               
                </div> 
                <div>
                    <b>Celular: </b>  {{ costumer.cel }}               
                </div>
                <div>
                    <b>CEP: </b>  {{ costumer.zipcode }}               
                </div>
                <div>
                    <b>Endereço: </b>  {{ costumer.address }}               
                </div>
                <div>
                    <b>Complemento: </b>  {{ costumer.complement }}               
                </div>
                <div>
                    <b>Número de endereço: </b> {{ costumer.address_number }}              
                </div>
                <div>
                    <b>Distrito: </b> {{ costumer.district }}              
                </div>
                <div>
                    <b>Estado: </b> {{ costumer.state }}               
                </div>
                <div>
                    <b>Cidade: </b> {{ costumer.city }}               
                </div>
                <div>
                    <b>Nascimento: </b>  {{ costumer.birth }}               
                </div>
                <div>
                    <b>Idade: </b>  {{ costumer.age }}               
                </div>
                <div>
                    <b>Gênero: </b> {{ costumer.gender }}               
                </div>
                <div>
                    <b>RG: </b>  {{ costumer.rg }}               
                </div>
                <div>
                    <b>Órgão do RG: </b> {{ costumer.organ_rg }}               
                </div>
                <div>
                    <b>CPF: </b> {{ costumer.cpf }}               
                </div>

                <div class="d-flex justify-content-around mt-3">
                    <button class="btn btn-outline-primary col-4"  @click="editar">Editar</button>
                    <button class="btn btn-sm btn-outline-danger col-4" style="margin-left: 5px" 
                        data-bs-toggle="modal" data-bs-target="#exampleModal">Apagar</button>                  
                </div>
            </div>         
        </div>

        <Modal body="Excluir este cliente?" @apagar="apagar"/>

        <img src="/img/loading.gif" v-show="loading">
    </div>
</template>

<script>
import Modal from '../Modal'

export default {
    components: {Modal},
    data(){
        return{
            loading: true,
            costumer: {}
        }
    },
    created(){
        this.$emit('created', 'Detalhes')
        this.$axios.get('costumer/' + this.$route.params.id)
            .then(res => { 
                this.costumer = res.data
                this.loading = false
            })
    },
    methods: {
        editar(){
            this.$router.push(`/costumers/${this.$route.params.id}/edit`)
        },
        apagar() {
            this.$axios.delete('costumer/' + this.$route.params.id).then(() => {
                this.$router.push('/costumers')
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