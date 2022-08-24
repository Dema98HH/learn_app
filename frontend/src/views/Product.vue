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
                <div> Add to Card </div>
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
        getProduct() {
            const category_slug = this.$route.params.category_slug
            const product_slug = this.$route.params.product_slug

            axios
                .get(`/api/v1/products/${category_slug}/${product_slug}`)
                .then(response => {
                    this.product = response.data
                })
                .catch(error => {
                    console.log('error')
                })
        },
    }
}
</script>