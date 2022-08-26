<template>

    <div class="row mt-5">
      <div class="col-3 card p-2 m-2"
      v-for="product in latestProducts"
      v-bind:key="product.id"
      v-bind:product="product"
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

</template>


<script>

export default {
    name: 'ProductBox',
    props: {
        product: Object
    }
}

</script>