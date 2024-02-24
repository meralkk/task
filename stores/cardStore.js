import { defineStore } from 'pinia'

export const useCardStore = defineStore('cardStore', {
  state: () => ({
    cards: [],
  }),
  actions: {
    addCard(card) {
      this.cards.push(card)
    }
  },
  getters: {
    cardsStartingWithM: (state) => {
      return state.cards.filter((card) => card.serviceName.toLowerCase().startsWith('m'))
    }
  },
})
