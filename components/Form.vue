<template>
  <div class="form-container">
    <input v-model="serviceName" type="text" placeholder="Service Name" class="form-control mb-2">
    <input v-model="businessName" type="text" placeholder="Business Name" class="form-control mb-2">
   <div class="rating"> <Rating v-model="serviceRating"></Rating></div>
    <button @click="addService" type="button" class="btn btn-primary">Submit</button>
    
    <!-- Card container to display services in a flex layout -->
    <div class="card-container">
      <Card v-for="(card, index) in cards" :key="index" :card="card" class="service-card"/>
    </div>
  </div>
</template>


<script setup>
import { ref } from 'vue'
import Rating from "./Rating.vue"
import Card from "./Card.vue"
import {useCardStore} from '~/stores/cardStore' 

const serviceName = ref('')
const businessName = ref('')
const serviceRating = ref(0)
const cardStore = useCardStore()

const addService = () => {
  if (!serviceName.value.trim() || !businessName.value.trim()) {
    alert('Service Name and Business Name are required.');
    return;
  }

  if (serviceRating.value < 1 || serviceRating.value > 5) {
    alert('Rating must be between 1 and 5.');
    return;
  }

  cardStore.addCard({
    serviceName: serviceName.value,
    businessName: businessName.value,
    serviceRating: serviceRating.value
  })

  serviceName.value = ''
  businessName.value = ''
  serviceRating.value = 0
}

const cards = cardStore.cards

</script>


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
  flex-wrap: wrap; 
  justify-content: center; 
  gap: 20px; 
}

.rating {
  margin: 12px 0 30px 0;
}
</style>
