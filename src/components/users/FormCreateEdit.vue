<template>
  <form class="form-control bg-grey" id="form">
    <h6>Nome</h6>
    <input v-model="name" type="text" name="name" class="form-control" placeholder="Digite o seu nome..." maxlength="191">
    <h6>E-mail</h6>
    <input v-model="email" type="email" name="email" class="form-control" placeholder="Digite o seu e-mail..." maxlength="191">
    <h6>Senha</h6>
    <input v-model="password" type="password" name="password" class="form-control" placeholder="Digite a sua senha..." maxlength="191">
    <h6>Imagem</h6>
    <input id="file" type="file" name="image" class="form-control" placeholder="Envie uma imagem..." maxlength="191">
    <input type="button" class="btn btn-primary col-12 mt-3" :value="value" @click="submit">
  </form>
</template>

<script>
export default {
    data(){
        return {
          name: '', email: '', password: '', value: ''
        }
    },
    created(){
        if(this.$route.path == '/users/create'){
          this.value = 'Salvar'
          this.$emit('created', 'Criação')
          
        } else {
          this.value = 'Atualizar'
          this.$emit('created', 'Edição')

          this.$axios.get('user/' + this.$route.params.id)
            .then(res => { 
              var user = res.data
              this.name = user.name
              this.email = user.email
              this.password = user.password
            })
        }    
    },
    methods: {
      submit(){
        if(this.name != '' && this.email != '' && this.password != ''){
          var data = {
            name: this.name,
            email: this.email,
            password: this.password,
            image: ''
          }
          const formData = new FormData();
          const imagefile = document.querySelector("#file");
          formData.append("image", imagefile.files[0]);
          formData.append("data", JSON.stringify(data));

          if(this.$route.path == '/users/create'){
            this.$axios.post('user', formData, {
              headers: {'Content-Type': 'multipart/form-data'}
            })
              .then((res) => { this.$router.push(`/users/${res.data.id}/show`) }) 
          } else {
            formData.append('_method', 'put')
            this.$axios.post('user/' + this.$route.params.id, formData, {
              headers: {'Content-Type': 'multipart/form-data'}
            })
              .then((res) => { this.$router.push(`/users/${res.data.id}/show`) })
          }    
        }
      },
    }
}
</script>

<style>
    .bg-grey{
        background: #BDBDBD;
    }
    form h6{
        margin-top: 15px;
        margin-bottom: 15px;
    }
</style>
