<template>
    <div class="page-product">
        <div class="row mt-5">
            <div class="col-2"></div>
            <div class="col-6">
                <img v-bind:src="product.get_image" style="height: 500px;">

            </div>

            <div class="col-2">
                <h1 class="title"> {{ product.name }}</h1>
                <p> {{ product.description }}</p>

                <div class="mt-5">${{ product.price }}</div>
                <div class="mt-4 mb-5">
                    <input type="number" class="input" min="1" max="10" v-model="quantity">
                </div>
                <button @click="addToCart"> Add to Card </button>
            </div>
            <div class="col-1"></div>
        </div>
    </div>

</template>

<script>
import axios from 'axios';

export default {
    name: 'Product',
    data() {
        return {
            product: {},
            quantity: 1
        }
    },
    mounted() {
        this.getProduct()
    },

    
    methods: {
        async getProduct() {

            const category_slug = this.$route.params.category_slug
            const product_slug = this.$route.params.product_slug

            await axios
                .get(`/api/v1/products/${category_slug}/${product_slug}`)
                .then(response => {
                    this.product = response.data

                    document.title = this.product.name + ' | Shop'
                })
                .catch(error => {
                    console.log('error')
                })

        },

        addToCart() {

            if (isNaN(this.quantity) || this.quantity < 1) {
                this.quantity = 1
            }

            const items = {
                product: this.product,
                quantity: this.quantity

            }

            this.$store.commit('addToCart', items)
        },
    }
}
</script>