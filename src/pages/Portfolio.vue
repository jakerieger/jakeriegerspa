<template>
	<div>
		<sidebar></sidebar>
		<h2>PORTFOLIO</h2>
		<p>small showcase of my best work</p>
		<br><br>
		<div class="container">
			<div class="row">
				<div class="col-md-6 image-container">
					<h1 class="title">HouseMD</h1>
					<span>A simple, live markdown editor for Windows - </span>
					<a href="https://github.com/jakerieger/housemd">GitHub Repo</a>
					<br><br>
					<div class="ss-container">
						<img class="screenshot" src="../assets/housemd.jpg">
					</div>
				</div>
				<div class="col-md-6 image-container">
					<h1 class="title">LucidAIO</h1>
					<span>Powerful automated checkout software - </span>
					<a href="https://lucidaio.com">Website</a>
					<br><br>
					<div class="ss-container">
						<img class="screenshot" src="../assets/lucidaio.jpg">
					</div>
				</div>
				<div class="col-md-6 image-container">
					<h1 class="title">Ping</h1>
					<span>Asynchronous proxy testing - </span>
					<a href="https://github.com/lucidaio/ping">GitHub Repo</a>
					<br><br>
					<div class="ss-container">
						<img class="screenshot" src="../assets/ping.jpg">
					</div>
				</div>
				<div class="col-md-6 image-container">
					<h1 class="title">Proxy.js</h1>
					<span>Node library for proxy testing - </span>
					<a href="https://github.com/jakerieger/proxyjs">GitHub Repo</a>
					<br><br>
					<div class="ss-container">
						<img class="screenshot" src="../assets/proxyjs.png">
					</div>
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

.screenshot {
	border-radius: 8px;
}

.ss-container {
	height: 350px;
	overflow: hidden;
	border-radius: 8px;
}
</style>
