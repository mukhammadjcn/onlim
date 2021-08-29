<template>

    <!-- Animation Prallalex -->
    <div class="animation">
        <kinesis-container>
              <kinesis-element :strength="80" class="dots">
                  <img src="../assets/intro/dots.png" alt="">
              </kinesis-element>
              <kinesis-element :strength="60" class="circle2" axis="y">
              </kinesis-element>
              <kinesis-element :strength="100" class="shape">
                <img src="../assets/intro/shape.png" alt="">
              </kinesis-element>
              <kinesis-element :strength="80">
                <div class="circle1"></div>
              </kinesis-element>
          </kinesis-container>
    </div>
</template>

<script>
export default {
    name : 'Animation'
}
</script>

<style lang="scss">
.animation{
    & > div{
      position: absolute;
      top: 110px;
      left: 0;
      width: 100%;
      height: 100%;
    }
    .dots{
      right: 35%;
      position: absolute;
      bottom: 20%;
    }
    .circle1{
      width: 600px;
      height: 600px;
      border: 1px solid #9ac5ed;
      border-radius: 50%;
      position: absolute;
      left: -200px;
      top: -200px;
    }
    .circle2{
      width: 400px;
      height: 400px;
      border: 1px solid #bbc3fb;
      border-radius: 50%;
      position: absolute;
      right: 0;
      top: 60px;
    }
    .shape{
      position: absolute;
      right: 20px;
      top: 20%;
      width: 200px;
      height: 200px;
      img{
        width: 100%;
        object-fit: cover;
      }
    }
}
</style>