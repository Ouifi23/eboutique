<script setup>
import { RouterLink, RouterView } from 'vue-router'

</script>

<template>

  <!-- EN-TÊTE -->
  <header>

    <!-- NAVIGATION -->
    <div class="wrapper">
      <nav>
        <div class="nav-container">

          <!-- LOGO -->
          <div id="logo">
              <router-link to="/">
                  <img src="https://i.ibb.co/6nhfJz5/wish-logo-800.png" alt="logo" />
              </router-link>
          </div>

          <!-- ICONES -->
          <ul id="icons">
            <li>

              <!-- Lien vers le favoris -->
              <RouterLink to="/favoris">
                <i class="fas fa-heart"></i>
              </RouterLink>
            </li>
            <li>

              <!-- Lien vers l'ajout d'un produit -->
              <RouterLink to="/add-product">
                <i class="fa-solid fa-plus"></i>
              </RouterLink>
            </li>
          </ul>  
        </div> 
      </nav>
    </div>
  </header>

  <RouterView />
</template>

<style scoped>
#icons {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 150px;
  height: 100%;
}

#icons li i{
  font-weight: bolder;
  font-size: 1.1rem;
}
</style>
