<template>
  <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="exampleModalLabel">Confirmação</h5>
          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div class="modal-body">
        <h6>{{body}}</h6>
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-primary col-2" data-bs-dismiss="modal">Não</button>
          <button type="button" class="btn btn-primary col-2" data-bs-dismiss="modal" 
            @click="apagar">Sim</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
    props: ['body'],
    methods: {
      apagar(){
        this.$emit('apagar')
      }
    }
}
</script>