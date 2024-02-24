<script setup>
import Form from "../components/Form.vue"
</script>

<template>
    <div>
        <div class="buttons">
        <NuxtLink to="pinia"><button type="button" class="btn btn-warning">Pinia Store</button></NuxtLink>
        <NuxtLink to="experiences"><button type="button" class="btn btn-warning">My Experiences</button></NuxtLink>
    </div>
      <Form></Form>
    </div>
</template>
  
<style scoped>

.buttons {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 20px;
    list-style: none;
    margin:0; padding:0;
    height: 100px;
}

.links a {
    text-decoration: none;
}

button {
  width: 160px;
}
</style>
  