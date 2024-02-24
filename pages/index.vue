<script setup>
import Form from "../components/Form.vue"
</script>

<template>
    <div>
  <div class="links">
      <NuxtLink to="/pinia"><button type="button" class="btn btn-warning">Pinia Store</button></NuxtLink>
  </div>
      <Form></Form>
    </div>
</template>
  
<style>

.links {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 30px;

    list-style: none;
    margin:0; padding:0;
    height: 100px;
}

.links a {
    text-decoration: none;
}
</style>
  