<template>
  <div class="container">
    <div class="buttons">
        <NuxtLink to="/"><button type="button" class="btn btn-warning">Home</button></NuxtLink>
        <NuxtLink to="/experiences"><button type="button" class="btn btn-warning">My Experiences</button></NuxtLink>
    </div>
    <h2>Pinia Store</h2>
   <div class="card-container"> <Card v-for="(card, index) in cardStore.cards" :key="index" :card="card"/></div>
  </div>

</template>

<script setup>
import {useCardStore} from '../stores/cardStore'

const cardStore = useCardStore()
</script>

<style scoped>

.container {
display: flex;
flex-direction: column;
align-items: center;
  margin-top: 30px;
}
.card-container {
  display: flex;
  flex-wrap: wrap; 
  justify-content: center; 
  gap: 20px; 
}
h2 {
  display: flex;
  justify-content: center;
  margin-top: 30px;
}

button {
  width: 160px;
}

.buttons {
    display: flex;
    gap: 20px;
    margin-bottom: 50px;
}


</style>
  