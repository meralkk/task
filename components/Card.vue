<template>
  <div class="card m-2">
    <div class="card-body">
      <h5 class="card-title">{{ card.serviceName }}</h5>
      <h6 class="card-subtitle">{{ card.businessName }}</h6>
      <Rating :modelValue="card.serviceRating" :clickable="false"/>
    </div>
  </div>
</template>

<script setup>
import Rating from './Rating.vue';

const props = defineProps({
  card: {
    type: Object,
    required: true
  }
});

const {card} = props;
</script>

<style scoped>
.card {
  width: 300px;
}

.card-title, .card-subtitle {
  padding-bottom: 12px;
}

.card-body {
  height: 140px;
}
</style>
