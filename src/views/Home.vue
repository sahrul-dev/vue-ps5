<template>
  <section class="home">
    <div class="wrapper-home">
      <div class="container">
        <h2>Play Has No Limits.</h2>
        <br>
        <p>PlayStation 5 Console Gaming 2021 Release.</p>
        <img src="../assets/img/dualsense.png" alt="ps5 dualsense" id="dualsense">
      </div><br>
      <div class="copyright"> 
        <p>Designed By Mohammad Sahrullah</p>
      </div>
      <br>       
    </div>
     <div class="box-v1">
      <div class="feature-games">
        <img src="../assets/img/spiderman_mm.png" alt="spiderman miles morales">
      </div>
      <div class="game-title">
        <img src="../assets/img/marvels-spider-man-logo.png" alt="logos spiderman">
        <h2>Only Exclusive on PlayStation 5</h2>
        <br>
        <button><fa icon="shopping-cart" /> <span class="text-button">Buy now</span></button>
      </div>
    </div>
    <div class="box-v2">
      <h2>Introducing PlayStation 5</h2>
      <p>Unleash new gaming possibilities that you never anticipated</p>
      <br>
      <img src="../assets/img/playstation-5-product.png" alt="PlayStation 5">
    </div>
    <div class="box-v3">
      <div class="container">
        <p class="game-overview">GAME OVERVIEW</p>
        <h2>Kena - Bridge of Spirit</h2><br>
        <p>Immerse yourself in a story-driven action-adventure set in a charming world rich with exploration and fast-paced combat. Play as Kena, a young Spirit Guide travelling to an abandoned village in search of the sacred mountain shrine.</p><br>  
        <button>
          <fa icon="gamepad"/>
          <span class="text-button">Play Now on PS5</span> 
        </button>
        <br>  
        <video playinline muted autoplay="true" width="500" height="400" loop="true">
          <source src="../assets/video/Meet the Rot, Kena- Bridge of Spirits’ cute sidekick creatures.mp4" type="video/mp4">
        </video>
      </div>
    </div>
    <div class="box-v4">
      <div class="wrapper-box-v4">
        <div class="ps-plus-logo">
          <img src="../assets/img/ps-plus-logo.png" alt="PlayStation Plus Logo">
          <br>
          <p>Discover great games, connect with friends, and enjoy new ways to play.</p>  
        </div> 
      </div>
      <div class="wrapper-card">
        <div class="container">
          <div class="flex-card">
        <div class="card">
          <img src="../assets/img/ps-plus-12-months-image-block-01-13nov20$en.png" alt="">
          <p>Rp 559,000</p><br>
          <button class="add-to-cart"><fa icon="shopping-cart" /><span class="text-button">Buy now</span></button>
          <br><br>
        </div>
        <div class="card">
          <img src="../assets/img/ps-plus-3-months-image-block-01-13nov20$en.png" alt="">
          <p>Rp 229,000</p><br>
          <button class="add-to-cart"><fa icon="shopping-cart" /><span class="text-button">Buy now</span></button>
        </div>
        <div class="card">
          <img src="../assets/img/ps-plus-1-month-image-block-01-13nov20$en.png" alt="">
          <p>Rp 89,000</p><br>
          <button class="add-to-cart"><fa icon="shopping-cart"/><span class="text-button">Buy now</span></button>
          <br>
        </div>
        </div>
           </div>
      </div>
    </div>
    <div class="box-v5">
      <div class="container">
      <h1>New savings on PlayStation Store</h1>
      <p>Deep discounts, curated collections and seasonal sales on PS5, PS4 and PS VR hits, all in one place.</p>
      <br><br>
      <div class="wrapper-card-v5">
        <div class="flex-card-v2">
          <div class="card">

          </div>
           <div class="card">
            
          </div>
           <div class="card">
            
          </div>
        </div>
      </div>
    </div>
    </div>
    <br><br>
    </div>
    <Footer />
  </section>
</template>

<script>
// @ is an alias to /src

import Footer from '../components/Footer.vue';
export default {
  name: 'Home',
  components: {
    Footer,
  }
}
</script>
