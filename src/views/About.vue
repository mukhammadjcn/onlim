<template>
  <div class="about">
    <Header />
    <div class="intro">
      <div class="container row">
        <h1>Hayotingzni yaxshilang</h1>
        <p>Ta'lim orqali</p>
      </div>
    </div>

    <div class="marketSize">
      <div class="container">
        <div class="marketSize__info">
          <span>START TO SUCCESS</span>
          <h1>The Leading Global Marketplace for Learning and Instruction</h1>
          <p>Neque convallis a cras semper auctor. Libero id faucibus nisl tincidunt egetnvallis a cras semper auctonvallis a cras semper aucto. Neque convallis a cras semper auctor. Liberoe convallis a cras semper atincidunt egetnval</p>
        </div>
      </div>
    </div>
    <Footer />
  </div>
</template>

<script>
import Footer from '../components/Footer.vue'
import Header from '../components/Header.vue'
export default {
  name : "About",
  components : {
    Header,
    Footer
  }
}
</script>

<style lang="scss">
.about{
  .header{
    top: 0;
    background: #ffffffab;
  }
  .intro{
    padding: 0;
    margin-top: 120px;
    height: 570px;
    background-image: url('../assets/about/about.jpg');
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
    .container{
      height: 100%;
      flex-direction: column;
      padding: 0;
      justify-content: center;
      gap: 16px;
      h1{
        font-size: 64px;
        line-height: 1.25em;
        color: #FFFFFF;
      }
      p{
        font-size: 48px;
        font-weight: 400;
        line-height: 1.42em;
        color: #FFFFFF;
      }
    }
  }
  .marketSize{
    padding: 64px 0;
    &__info{
      text-align: center;
      width: 70%;
      margin: auto;
      span{
        font-size: 15px;
        font-weight: 500;
        text-transform: uppercase;
        line-height: 26px;
        letter-spacing: 2px;
      }
      h1{
        font-size: 40px;
        line-height: 1.4em;
      }
      p{
        font-size: 15px;
        line-height: 26px;
      }
    }
  }
}
</style>
