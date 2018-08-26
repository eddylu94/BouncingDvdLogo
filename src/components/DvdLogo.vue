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
        backgroundColor: '#0000FF'
      }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
