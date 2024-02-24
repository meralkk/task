<template>
    <div class="container">
      <div class="buttons">
        <NuxtLink to="/"><button type="button" class="btn btn-warning">Home</button></NuxtLink>
        <NuxtLink to="pinia"><button type="button" class="btn btn-warning">Pinia Store</button></NuxtLink>
      </div>
      <h2>My Experiences</h2> <br>
      <p>This task was my first experience working with technologies such as Nuxt, Vue, and Pinia Store. Since my course training did not cover these tools, I found myself at the beginning of a completely new learning adventure. During this process, I read and researched the documentation of Nuxt, Vue and Pinia Store, watched YouTube videos explaining the relevant topics, and used resources such as ChatGPT in cases I did not understand. In the early stages of the project, questions such as how Vue and Nuxt worked together, and whether to use TypeScript or JavaScript, were areas that were unclear to me and I tried to find these by researching.</p>
      <p>During the five days, I tried to understand new programming concepts and development practices. This challenged me, especially trying to grasp topics like state management via the Pinia Store, controlling reactive data flow using Vue 3's Composition API, and props passing between pages and Vue syntax. Although it is difficult to say that I have yet fully grasped these concepts, I have full confidence that constant practice and research will enable me to master these new skills.</p>
      <h5 class="info">If there is a card that starts with the letter 'm', you will be able to see it below.</h5> <br>

      <div class="card-container"> <Card v-for="(card, index) in cardStore.cards" :key="index" :card="card"/></div>

    </div>
  </template>
  
  
  <script setup>
  import {useCardStore} from '~/stores/cardStore'
  
  const cardStore = useCardStore()
  const cardsStartingWithM = cardStore.cardsStartingWithM
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

.buttons {
    display: flex;
    gap: 20px;
    margin-bottom: 50px;
}

button {
  width: 160px;
}

h2 {
  display: flex;
  justify-content: center;
  margin-top: 30px;
}

.info {
    margin-top: 50px;
    color: grey;
}
</style>
  
    