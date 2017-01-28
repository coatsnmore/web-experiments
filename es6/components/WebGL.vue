<template>
	<div>
		<h2>Web GL</h2>
		<p>WebGL (Web Graphics Library) is a JavaScript API for rendering interactive 3D and 2D graphics within any compatible web
			browser without the use of plug-ins. WebGL does so by introducing an API that closely conforms to OpenGL ES 2.0 that can
			be used in HTML5 canvas elements.</p>
		<div id="scene"></div>
	</div>
</template>

<script>
  import Scene from '../webgl/Scene'

  export default {
    mounted: function () {
        this.scene = new Scene('scene', 600, 300)
        this.scene.tick();
    }
  }
</script async>