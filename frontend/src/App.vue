<template>
  <div id="wrapper">
<!---->

<nav class="navbar navbar-expand-lg navbar-light bg-light shadow-sm">
  <a class="navbar-brand" href="#">Navbar</a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>

  <div class="collapse navbar-collapse" id="navbarSupportedContent">
    <ul class="navbar-nav mr-auto">
      <li class="nav-item active">
        <router-link to="/" class="btn">Home</router-link>
      </li>
    </ul>

    <ul class="navbar-nav mr-5">
      <li class="nav-item active">
        <router-link to="/winter" class="btn">Winter</router-link>
      </li>
      <li class="nav-item">
        <router-link to="/sommer" class="btn">Sommer</router-link>
      </li>
    </ul>




    <form class="form-inline my-2 my-lg-0 mr-5" action="/search">
      <input class="form-control mr-sm-2" type="search" placeholder="Waht are you looking for?" aria-label="Search" name="query">
      <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
    </form>
        <router-link to="/cart" class="btn btn-outline-success my-2 my-sm-0 mr-4" type="submit">Cart ({{cartTotalLength}})</router-link>
          <!--<button class="btn btn-outline-success my-2 my-sm-0 ml-2" type="submit">Cart ({{cartTotalLength}})</button>-->
  </div>
</nav>




<!---->
  <section>
      <router-view/>
  </section>

  <footer class="footer mt-5">
    <p>Copyright (c) 2022</p>
  </footer>

  </div>
</template>

<script>
export default {
data() {
  return {
    cart: {
      items: []
    }
  }
},
beforeCreate() {
  return this.$store.commit('initializeStore')
},
mounted() {
  this.cart = this.$store.state.cart
  
},
computed: {
  cartTotalLength() {
    let totalLength = 0

    for (let i = 0; i < this.cart.items.length; i++) {
      totalLength += this.cart.items[i].quantity
    }
    return totalLength
  }
}
}



</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
