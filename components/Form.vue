<script setup>

</script>


<template>
    <div class="form-container">
    <input type="text" placeholder="Service Name" class="form-control mb-2">
    <input type="text" placeholder="Business Name" class="form-control mb-2">
    <input type="text" placeholder="Service Rating" class="form-control mb-2">
    <button type="button" class="btn btn-primary">Submit</button>

    </div>
</template>



<style scoped>

.form-container {
    display: flex;
    flex-direction: column;
    margin: auto;
    margin-top: 100px;
    gap: 20px;
    width: 100%; 
    max-width: 500px; 
  }

</style>