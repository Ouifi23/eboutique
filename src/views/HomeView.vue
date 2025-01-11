<script setup>
import OneProduct from "../components/OneProduct.vue"
import { ref } from "vue"
import { useProductsStore } from "../stores/product"

const store = useProductsStore()
const products = ref([])

products.value = store.getAllProducts

</script>

<template>
  <main class="home-container">

    <!-- Afficher le titre -->
    <h1>Produits</h1>

    <!-- Afficher les produits -->
    <div class="card-cart-container">
      <div class="card-container">

        <!-- Afficher les produits -->
        <OneProduct v-for="(product, key) in products" :product="product" :key="key" @switch="product.favorite = !product.favorite"></OneProduct>
      </div>
    </div>
    <hr>
    
  </main>
  
</template>

<style>
.cart {
  height: 15px;
}
</style>
