<script setup>
import {FontAwesomeIcon} from '@fortawesome/vue-fontawesome'
import {library} from '@fortawesome/fontawesome-svg-core'
import {faStar} from '@fortawesome/free-solid-svg-icons'

library.add(faStar)
const model = defineModel()

function update(index) {
  model.value = index
}

const { clickable } = defineProps({
  clickable: {
    type: Boolean,
    default: true
  }
})

</script>

<template>
    <div>
        <FontAwesomeIcon 
        v-for="index in 5"
        :key="index"
        :icon="['fas', 'star']" 
        class="star"
        :class="{'active':modelValue >=index, clickable}"
        @click="clickable && update(index)"
        />
    </div>

</template>

<style>
.star {
  color: gray;
}

.active {
  color: gold;
}

.clickable {
  cursor: pointer;
}
</style>