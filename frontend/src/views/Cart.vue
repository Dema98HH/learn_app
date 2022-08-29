<template>
<div class="row justify-content-center">
    <div class="col-10">
        <h2 class="mt-3">Carts</h2>
    <div class="card mt-3">
        <div class="card-body">
            <!---->
            <table class="table">
            <thead>
                <tr>
                <th scope="col">Product</th>
                <th scope="col">Price</th>
                <th scope="col">Quantity</th>
                <th scope="col">Total</th>
                </tr>
            </thead>
            <tbody>
                <CartItem
                v-for="item in cart.items"
                v-bind:key="item.product.id"
                v-bind:initialItem="item" />
            </tbody>
            </table>



            <!---->
        </div>
    </div>
</div>
</div>
</template>


<script>
import axios from 'axios'
import CartItem from '@/components/CartItem.vue'



    export default {
        name: 'Cart',
        components: {
    CartItem,
    CartItem
},
        data (){
            return {
                cart: {
                    items: []
                }
            }
        },
        mounted() {
            this.cart = this.$store.state.cart
        },
        computed: {
            cartTotalLength() {
                return this.cart.items.reduce((acc, curVal) => {
                    return acc += curVal.quantity
                }, 0)
            }
        }
    }
</script>