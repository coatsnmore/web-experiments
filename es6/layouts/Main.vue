<template>
	<div class="container">
		<ul>
			<li>
				<v-link href="/">Home</v-link>
				<v-link href="/notification">Notification</v-link>
				<v-link href="/webgl">Web GL</v-link>
				<v-link href="/audio">Audio</v-link>
				<v-link href="/gamepad">Gamepad</v-link>
			</li>
		</ul>

		<slot></slot>

		<div>♥ from coatsn</div>
	</div>
</template>

<script>
  import VLink from '../components/VLink.vue'

  export default {
    components: {
      VLink
    }
  }
</script>

<style scoped>
	
	.container ul {
		/*max-width: 600px;
		margin: 0 auto;
		padding: 15px 30px;
		background: #f9f7f5;*/
    list-style: none;
	}
</style>