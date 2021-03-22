<template>
  <div>
    <div class="d-flex justify-content-center bg-info">
        <h4 class="text-white">
          <i v-show="mostrar" class="fas fa-arrow-left" @click="voltar" ></i> 
          Clientes - {{status}}
        </h4>
        
      </div>
    <div class="container mt-3">
      <div class="d-flex justify-content-end mb-3">
        <button class="btn btn-sm btn-outline-primary" @click="adicionar" v-show="!mostrar">        
          Adicionar Cliente
        </button>
      </div>
      <router-view @created="acoes"></router-view>
    </div>
  </div>
</template>

<script>


export default {
  data(){
    return {
      status: '',
      mostrar: false
    }
  },
  methods: {
    voltar(){
      this.$router.push('/costumers')
    },
    acoes($event){
      this.status = $event
      if(this.$route.path == '/costumers'){
        this.mostrar = false
      } else {
        this.mostrar = true
      }
    },
    adicionar(){
      this.$router.push('/costumers/create')
    }
  },
}
</script>

<style>
  i:hover {
    cursor: pointer;
    color: wheat;
  }
</style>