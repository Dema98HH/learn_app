<template>
<div class="row justify-content-center">
        <div class="col-10 justify-cotent-starts">
            <h2 class="col-2 mt-2">Carts</h2>
        </div>
    <div class="col-10">
        <!---->
    <div class="card mt-3 shadow">
        <div class="card-body">
            <!---->
            <table class="table">
            <thead>
                <tr>
                <th scope="col">Product</th>
                <th scope="col">Price</th>
                <th scope="col">Quantity</th>
                <th scope="col">Total</th>
                <th scope="col"></th>
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

    <div class="col-10 mt-4">
            <h2 class="col-2 mt-2">Summary</h2>
    </div>

    <div class="card mt-3 shadow">
        <div class="card-body text-align-start">
            <!---->
            <div class="row mt-3">
                <div class="col-3">
                    <strong class="margin-left">${{ cartTotalPrice.toFixed(2) }}</strong>
                </div>
                <div class="col-2">
                    <p>{{cartTotalLength}} Items </p>
                </div>
            </div>
            <!---->
        </div>
    </div>

    <div class="col-1 mt-4">
        <router-link to="/cart/checkout" class="btn btn-success">Checkout</router-link>
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
            },
            cartTotalPrice() {
                return this.cart.items.reduce((acc, curVal) => {
                    return acc += curVal.product.price * curVal.quantity
                }, 0)
            }
        }
    }
</script>