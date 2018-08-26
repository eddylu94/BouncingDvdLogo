<template>
  <div v-bind:style="tvScreenContainerStyle">
    <div v-bind:style="tvScreenStyle">
      <dvdlogo></dvdlogo>
    </div>
  </div>
</template>

<script>
import DvdLogo from './DvdLogo.vue'

export default {
  name: 'TvScreen',
  components: {
    dvdlogo: DvdLogo
  },
  data () {
    return {
      tvScreenContainerStyle: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100%'
      },
      tvScreenStyle: {
        backgroundColor: '#181818',
        width: '800px',
        height: '400px'
      }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
