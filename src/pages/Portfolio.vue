<template>
	<div>
		<sidebar></sidebar>
		<h2>PORTFOLIO</h2>
		<p>small showcase of my best work</p>
		<br><br>
		<div class="container">
			<div class="row">
				<div class="col-md-6 image-container">
					<img src="../assets/mcao.png">
				</div>
				<div class="col-md-6 image-container">
					<img src="../assets/18h.png">
				</div>
			</div>
			<br><br>
			<div class="row">
				<div class="col-md-6 image-container">
					<img src="../assets/jr.png">
				</div>
				<div class="col-md-6 image-container">
					<img src="../assets/nw.png">
				</div>
			</div>
		</div>
		<div class="footer"></div>
	</div>
</template>

<script>
import Sidebar from '@/components/Sidebar'

export default {
	components: {
		Sidebar
	},
 	name: 'portfolio'
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
	text-indent: 6px;
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
	letter-spacing: 15px;
	text-indent: 15px;
}

.footer {
	margin-bottom: 75px;
}
</style>
