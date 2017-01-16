<template>
	<main-layout>
		<h2>Gamepad API</h2>
    <p>The Gamepad API is a way for developers to access and respond to signals from gamepads and other game controllers in a simple, consistent way. It contains three interfaces, two events and one specialist function, to respond to gamepads being connected and disconnected, and to access other information about the gamepads themselves, and what buttons and other controls are currently being pressed.</p>
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