<template>
  <nav class="navbar navbar-expand-md navbar-dark bg-dark">
    <div class="container-fluid">
        <a class="navbar-brand" href="#">Projeto Cadastro</a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarText">
          <ul class="navbar-nav me-auto mb-2 mb-lg-0">          
            <li class="nav-item">
              <router-link class="nav-link" to="/users" exact="" active-class="active">
                <a>Usuários</a>
              </router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link" to="/costumers" active-class="active">
                <a>Clientes</a>
              </router-link>
            </li>
          </ul>         
        </div>   
    </div>
  </nav>
</template>

<script>
export default {
    
}
</script>

<style>
  nav ul li a{
    font-size: 18px;
  }
  .navbar-brand {
    font-size: 22px;
    font-weight: 700;
  }
</style>