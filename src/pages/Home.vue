<template>
	<div>
		<sidebar></sidebar>
		<h1>JAKE RIEGER</h1>
		<p>full stack python developer // design enthusiast</p>
	</div>
</template>

<script>
import Sidebar from '@/components/Sidebar'

export default {
	components: {
		Sidebar
	},
 	name: 'Home'
}
</script>

<style scoped>
p {
	text-align: center;
	letter-spacing: 6px;
	text-indent: 6px;
	font-family: 'Montserrat', sans-serif;
	font-weight: 300;
}

h1 {
	font-family: 'Montserrat', sans-serif;
	font-weight: 500;
	font-size: 64pt;
	padding: 0;
	margin: 0;
	color: #444;
	text-align: center;
	margin-top: 180px;
	text-indent: 15px;
	letter-spacing: 15px;
}
</style>
