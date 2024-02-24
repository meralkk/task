<script setup>
import { ref, reactive } from 'vue'
import Rating from "./Rating.vue"
import Card from "./Card.vue"

const serviceName = ref('')
const businessName = ref('')
const serviceRating = ref(0)

const cards = reactive([])

const addService = () => {
  cards.push({
    serviceName: serviceName.value,
    businessName: businessName.value,
    serviceRating: serviceRating.value
  })

  serviceName.value = ''
  businessName.value = ''
  serviceRating.value = 0
}
</script>

<template>
  <div class="form-container">
    <input v-model="serviceName" type="text" placeholder="Service Name" class="form-control mb-2">
    <input v-model="businessName" type="text" placeholder="Business Name" class="form-control mb-2">
    <Rating v-model="serviceRating"></Rating>
    <button @click="addService" type="button" class="btn btn-primary">Submit</button>
    
    <!-- Card container to display services in a flex layout -->
    <div class="card-container">
      <Card v-for="(card, index) in cards" :key="index" :card="card" class="service-card"/>
    </div>
  </div>
</template>

<style scoped>
.form-container {
  display: flex;
  flex-direction: column;
  margin: auto;
  margin-top: 100px;
  gap: 10px;
  max-width: 80%; 
}

.card-container {
  display: flex;
  flex-wrap: wrap; /* Allows cards to wrap to the next line if there's not enough space */
  justify-content: center; 
  gap: 20px; 
}
</style>
