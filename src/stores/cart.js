import { defineStore } from 'pinia'

export const useCartStore = defineStore('cart', {
    state: () => ({
        items: []
    }),

    getters: {
        totalItemsCount: (state) =>
            state.items.reduce(
                (total, item) => total + item.quantity,
                0
            ),

        totalPrice: (state) =>
            state.items.reduce(
                (sum, item) => sum + item.price * item.quantity,
                0
            )
    },

    actions: {
        addToCart(foodItem) {
            const existing = this.items.find(
                item => item.id === foodItem.id
            )

            if (existing) {
                existing.quantity++
            } else {
                this.items.push({
                    ...foodItem,
                    quantity: 1
                })
            }
        },

        removeItem(id) {
            this.items = this.items.filter(
                item => item.id !== id
            )
        },

        changeQuantity(id, amount) {
            const item = this.items.find(
                item => item.id === id
            )

            if (!item) return

            item.quantity += amount

            if (item.quantity <= 0) {
                this.removeItem(id)
            }
        },
        clearCart() {
            this.items = [];
        }
    }
})