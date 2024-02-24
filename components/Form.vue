<script setup>
import { ref } from 'vue'

const serviceName = ref('')
const businessName = ref('')
const serviceRating = ref('')

const cards = reactive([])

const addService = () => {
  
  cards.push({
    serviceName: serviceName.value,
    businessName: businessName.value,
    serviceRating: serviceRating.value,
  })

  serviceName.value = ''
  businessName.value = ''
  serviceRating.value = ''
}
</script>

<template>
    <div class="form-container">
    <input v-model="serviceName" type="text" placeholder="Service Name" class="form-control mb-2"> 
    <input v-model="businessName" type="text" placeholder="Business Name" class="form-control mb-2">
    <input v-model="serviceRating" type="text" placeholder="Service Rating" class="form-control mb-2">
    <button @click="addService" type="button" class="btn btn-primary">Submit</button>

    <div class="card-container">
      <div class="card m-2" v-for="(card, index) in cards" :key="index">
        <div class="card-body">
          <h5 class="card-title">{{ card.serviceName }}</h5>
          <h6 class="card-subtitle">{{ card.businessName }}</h6>
          <p class="card-text">Service Rating: {{ card.serviceRating }}</p>
        </div>
      </div>
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
  flex-wrap: wrap;
  justify-content: center; 
  gap: 20px; 
}

.card {
  width: 300px; 
}

.card-title {
  padding-bottom: 12px;
}

.card-subtitle {
  padding-bottom: 12px;
}

.card-body {
  height: 140px;
}


</style>
