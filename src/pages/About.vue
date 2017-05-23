<template>
	<div>
		<sidebar></sidebar>
		<h2>ABOUT</h2>
		<p>small showcase of my best work</p>
		<br><br>
		<div class="container">
		</div>
	</div>
</template>

<script>
import Sidebar from '@/components/Sidebar'

export default {
	components: {
		Sidebar
	},
 	name: 'about'
}
</script>

<style scoped>
.image-container {
	position: relative;
}

.image-container .after{
	position: absolute;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
	display: none;
	color: #222;
	text-align: center;
}

.image-container:hover .after{
	display: block;
}

img {
	width: 100%;
}

h3 {
	padding: 0;
	margin: 0;
	text-align: center;
	padding-top: 100px;
	font-weight: 300;
	font-size: 16pt;
}

p {
	text-align: center;
	letter-spacing: 6px;
	font-family: 'Montserrat', sans-serif;
	font-weight: 300;
}

h2 {
	font-family: 'Montserrat', sans-serif;
	font-weight: 500;
	font-size: 30pt;
	padding: 0;
	margin: 0;
	color: #444;
	text-align: center;
	margin-top: 60px;
	letter-spacing: 15px;
}
</style>