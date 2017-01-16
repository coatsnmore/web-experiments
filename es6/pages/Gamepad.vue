<template>
	<main-layout>
		<h2>Gamepad API</h2>
		<div id="scene"></div>
	</main-layout>
</template>

<script>
  import MainLayout from '../layouts/Main.vue'
  import Scene from '../webgl/Scene'

  export default {
    mounted: function () {
        this.scene = new Scene('scene', 600, 300)
        this.scene.tick();
    },
    components: {
      MainLayout
    }
  }
</script async>