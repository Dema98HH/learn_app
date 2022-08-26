<template>

  <div class="columns is-multiline">
    <div class="column is-12 mt-4">
        <h2 class="is-size-2 has-text-centered">Latest products</h2>
    </div>
    <div class="row mt-5">
      <div class="col-3 card p-2 m-2"
      v-for="product in latestProducts"
      v-bind:key="product.id"
      >
        <div>
            <div>
              <figure>
                <img :src="product.get_thumbnail">
              </figure>
                <h3>{{ product.name }}</h3>
                <p>${{ product.price }}</p>
            </div>
            <button type="button" class="btn btn-outline-dark btn-sm">
            <router-link v-bind:to="product.get_absolute_url" class="btn">View details</router-link>
            </button>
        </div>
      </div>
    </div>

    <!--<ProductBox
      v-for="product in latestProducts"
      v-bind:key="product.id"
      v-bind:product="product" /> -->
  </div>

</template>

<script>
// @ is an alias to /src
import axios from 'axios'

import ProductBox from '@/components/ProductBox.vue'

export default {
  name: 'HomeView',
  data() {
    return {
      latestProducts: []
    }
  },
  components: {
    ProductBox,
},
  mounted() {
      this.getLatestProducts()

      document.title = 'Home | Shop'
  },

  methods: {
      getLatestProducts() {
          axios
          .get('/api/v1/latest-products/')
          .then(response => {
            this.latestProducts = response.data
          })
          .catch(error => {
            console.log(error)
          })
      }
  }
}
</script>
