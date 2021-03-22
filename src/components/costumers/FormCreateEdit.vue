<template>
  <form class="form-control bg-grey">
    <h6>Nome</h6>
    <input type="text" v-model="name" name="name" class="form-control" placeholder="Digite o seu nome..." maxlength="191">
    <h6>Registro médico</h6>
    <input type="text" v-model="medical_record" name="medical_record" class="form-control" placeholder="Registro médico..." maxlength="20">
    <h6>Telefone</h6>
    <input type="tel" v-model="phone" name="phone" class="form-control" placeholder="Digite o seu Telefone..." maxlength="20">
    <h6>Celular</h6>
    <input type="tel" v-model="cel" name="cel" class="form-control" placeholder="Digite o seu número de celular..." maxlength="20">
    <h6>CEP</h6>
    <input type="text" v-model="zipcode" name="zipcode" class="form-control" placeholder="Digite o CEP..." maxlength="191">
    <h6>Endereço</h6>
    <input type="text" v-model="address" name="address" class="form-control" placeholder="Digite o seu Endereço..." maxlength="191">
    <h6>Complemento</h6>
    <input type="text" v-model="complement" name="complement" class="form-control" placeholder="Digite o complemento..." maxlength="191">
    <h6>Número de endereço</h6>
    <input type="text" v-model="address_number" name="address_number" class="form-control" placeholder="Digite o número de endereço..." maxlength="191">
    <h6>Distitro</h6>
    <input type="text" v-model="district" name="district" class="form-control" placeholder="Digite o seu Distrito..." maxlength="191">
    <h6>Estado</h6>
    <input type="text" v-model="state" name="state" class="form-control" placeholder="Digite seu Estado..." maxlength="255">
    <h6>Cidade</h6>
    <input type="text" v-model="city" name="city" class="form-control" placeholder="Digite sua Cidade..." maxlength="191">
    <h6>Data de Nascimento</h6>
    <input type="date" v-model="birth" name="birth" class="form-control" placeholder="Data de nascimento..." maxlength="191">
    <h6>Idade</h6>
    <input type="text" v-model="age" name="age" class="form-control" placeholder="Digite sua Idade..." maxlength="191">
    <h6>Gênero</h6>
    <input type="text" v-model="gender" name="gender" class="form-control" placeholder="Digite o seu gênero..." maxlength="191">
    <h6>RG</h6>
    <input type="text" v-model="rg" name="rg" class="form-control" placeholder="Digite seu RG..." maxlength="191">
    <h6>Orgão do RG</h6>
    <input type="text" v-model="organ_rg" name="organ_rg" class="form-control" placeholder="Digite o Orgão do RG..." maxlength="191">
    <h6>CPF</h6>
    <input type="text" v-model="cpf" name="cpf" class="form-control" placeholder="Digite o seu CPF..." maxlength="20">
    <input type="button" class="btn btn-primary col-12 mt-3" :value="value" @click="submit">
  </form>
</template>

<script>
export default {
    data(){
        return {
            name: '', medical_record: '', phone: '', cel: '', zipcode: '', address: '',
            complement: '', address_number: '', district: '', state: '', city: '',
            birth: '', age: '', gender: '', rg: '', organ_rg: '', cpf: '', value: ''
        }
    },
    methods: {
        submit(){
            var data = {
                name: this.name,
                medical_record: this.medical_record,
                phone: this.phone,
                cel: this.cel,
                zipcode: this.zipcode,
                address: this.address,
                complement: this.complement,
                address_number: this.address_number,
                district: this.district,
                state: this.state,
                city: this.city,
                birth: this.birth,
                age: this.age,
                gender: this.gender,
                rg: this.rg,
                organ_rg: this.organ_rg,
                cpf: this.cpf
            }       
            if(this.name != ''){

              if(this.$route.path == '/costumers/create'){
                this.$axios.post('costumer', data).then(res => {
                  this.$router.push(`/costumers/${res.data.id}/show`)
                })
              } else {
                this.$axios.put('costumer/' + this.$route.params.id, data)
                  .then((res) => { this.$router.push(`/costumers/${res.data.id}/show`)
                })
              }
            }               
        }
    },
    created(){
        if(this.$route.path == '/costumers/create'){
            this.$emit('created', 'Criação')
            this.value = 'Salvar'
        } else {
            this.$emit('created', 'Edição')
            this.value = 'Atualizar'

            this.$axios.get('costumer/' + this.$route.params.id)
              .then(res => { 
                var costumer = res.data
                this.name = costumer.name
                this.medical_record = costumer.medical_record,
                this.phone = costumer.phone,
                this.cel = costumer.cel,
                this.zipcode = costumer.zipcode,
                this.address = costumer.address,
                this.complement = costumer.complement,
                this.address_number = costumer.address_number,
                this.district = costumer.district,
                this.state = costumer.state,
                this.city = costumer.city,
                this.birth = costumer.birth,
                this.age = costumer.age,
                this.gender = costumer.gender,
                this.rg = costumer.rg,
                this.organ_rg = costumer.organ_rg,
                this.cpf = costumer.cpf
              })
        }          
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
