<template>
<div class="page-category">
    <h2> {{category.name}}</h2>
</div>

 <div class="columns is-multiline">
    <div class="column is-12 mt-4">
        <h2 class="is-size-2 has-text-centered">Latest products</h2>
    </div>

    <div class="row mt-5">
      <div class="col-3 card p-2 m-2"
      v-for="product in category.products"
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

   <!-- <ProductBox
      v-for="product in category.products"
      v-bind:key="product.id"
      v-bind:product="product" /> -->
  </div>



</template>


<script>
import axios from 'axios'

import ProductBox from '@/components/ProductBox.vue'

export default {
    name: 'Category',
    components: {
        ProductBox
    },
    data() {
        return {
            category: {
                products: []
            }
        }
    },
    mounted() {
        this.getCategory()
    },
    watch: {
       $route(to, from) {
            if (to.name === 'Category') {
                this.getCategory()
            }
        }
    },
    methods: {
        async getCategory() {
            const categorySlug = this.$route.params.category_slug

            axios
                .get(`/api/v1/products/${categorySlug}/`)
                .then( response => {
                    this.category = response.data

                    document.title = this.category.name + ' | Shop'
                })
                .catch(error => {
                    console.log(error)
                })
        }
    }
}
</script>