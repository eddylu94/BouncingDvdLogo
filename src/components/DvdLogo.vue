<template>
  <div v-bind:style="dvdLogoStyle">
  </div>
</template>

<script>
export default {
  name: 'DvdLogo',
  data () {
    return {
      dvdLogoStyle: {
        width: '150px',
        height: '100px',
        backgroundColor: '#0000FF',
        transform: 'translate(0px, 0px)'
      }
    }
  },
  mounted () {
    this.posX = 0
    this.posY = 0
    var changeXMag = 1
    var changeYMag = 1
    var changeX = changeXMag
    var changeY = changeYMag
    var distance = 0;

    var interval = setInterval(() => {
      this.posX += changeX
      this.posY += changeY

      var isRight = this.posX >= 800 - 150
      var isLeft = this.posX <= 0
      var isTop = this.posY <= 0
      var isBottom = this.posY >= 400 - 100

      var isHorizontalBoundary = isLeft || isRight
      var isVerticalBounday = isTop || isBottom
      
      if (isHorizontalBoundary && isVerticalBounday) {
        clearInterval(interval)
      }
      if (isHorizontalBoundary) {
        changeX *= -1
      }
      if (isVerticalBounday) {
        changeY *= -1
      }
      
      this.dvdLogoStyle.transform = `translate(${this.posX}px, ${this.posY}px)`
    }, 10)
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
