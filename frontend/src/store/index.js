import { createStore } from 'vuex'

import axios from 'axios'

export default createStore({
  state: {
    cart: {
      items: [],
    },
    todos: [],
    isAuthenticated: false,
    token: '',
    isLoading: false,
  },
  getters: {
    allTodos: state => state.todos
  },
  mutations: {
    initializeStore(state) {
      if (localStorage.getItem('cart')){  
        state.cart = JSON.parse(localStorage.getItem('cart'))
      } else {
        localStorage.setItem('cart', JSON.stringify(state.cart))
      }
    },
    addToCart(state, item) {

      const exists = state.cart.items.filter(i => i.product.id === item.product.id)

      if (exists.length) {
        exists[0].quantity = parseInt(exists[0].quantity) + parseInt(item.quantity)
      } else {
        state.cart.items.push(item)
      }

      localStorage.setItem('cart', JSON.stringify(state.cart))
    },

    //new test
    setTodos: (state, todos) => (state.todos = todos)

  },
  actions: {
    async fetchTodos({ commit }) {
      const response = await axios.get('http://127.0.0.1:8000/api/v1/latest-products');
      //const response = await axios.get('http://127.0.0.1:8000/api/v1/products/sommer/');

      //!!!
      commit('setTodos', response.data)
    }
  },
  modules: {
  }
})
