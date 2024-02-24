import { defineStore } from 'pinia'

export const useCardStore = defineStore('cardStore', {
  state: () => ({
    cards: [],
  }),
  actions: {
    addCard(card) {
      this.cards.push(card)
    }
  }
})
