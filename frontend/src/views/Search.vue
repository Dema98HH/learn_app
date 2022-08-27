<template>
    <div class="page-search">
        <div class="row">
            <div class="col-12">
                <h1 class="title">Search</h1>

                <h2>Search term: "{{query}}"</h2>
            </div>
        </div>

        <div class="row mt-5">
            <div class="col-3 card p-2 m-2"
            v-for="product in products"
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
    </div>
</template>


<script>
import axios from 'axios'
import ProductBox from '@/components/ProductBox.vue'

export default {
    name: 'Search',
    components: {
        ProductBox
    },
    data () {
        return {
            products: [],
            query: ''
        }
    },

    mounted() {
        document.title = 'Search | Djackets'

        let uri = window.location.search.substring(1)
        let params = new URLSearchParams(uri)

        if (params.get('query')) {
            this.query = params.get('query')


            this.performSearch()
        }
    },
    methods: {
        async performSearch(){
            
            await axios
                .post(`/api/v1/products/search/`, {'query': this.query})
                .then(response => {
                    this.products = response.data

                })
                .catch(error => {
                    console.log('error')
                })
        }
    },
}
</script>