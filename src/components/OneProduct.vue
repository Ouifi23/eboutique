<template>
  <!-- Afficher le produit -->
  <div class="card" :data-key="product.id">

    <!-- Afficher l'image -->
    <div class="img-container">
      <img :src="product.img" alt="" />
    </div>

    <!-- Afficher le nom et le prix -->
    <div class="card-text">
      <h3>{{ product.description }}</h3>
      <span>{{ product.price }} €</span>
    </div>

    <!-- Afficher les icônes -->
    <div class="card-icons">
      <div class="like-container">

        <!-- Afficher les favoris -->
        <input type="checkbox" name="checkbox" id="1" :checked="product.favorite"/>
        <label for="id">
          <i class="fas fa-heart" @click="switchFavorite(product)"></i>
        </label>
      </div>
      <div class="add-to-card">

        <!-- Afficher le panier -->
        <button>
          <img
            src="../assets/cart-shopping-solid.svg"
            alt=""
            class="cart"
          />
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
 const props = defineProps({
   product: {
     type: Object,
     required: true
   },
 })

 const emit = defineEmits(['switch'])
/**
 * @function switchFavorite
 * @description Basculer le produit comme favori.
 * @param {object} product - Le produit à basculer.
 * @emits switch
 */
 const switchFavorite = (product) => {
   emit("switch")
 }
</script>