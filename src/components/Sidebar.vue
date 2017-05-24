<template>
	<div class="links">
		<router-link to="/">home</router-link> <span>&#9608;</span>
		<br>
		<router-link :to="{ path: 'portfolio' }">portfolio</router-link> <span>&#9608;</span>
		<br>
		<router-link :to="{ path: 'about' }">about</router-link> <span>&#9608;</span>
		<br>
	</div>
</template>

<script>
export default {
  name: 'sidebar'
}
</script>

<style scoped>
span {
	color: #ddd;
}

a {
	font-weight: 300;
	text-decoration: none;
	letter-spacing: 6px;
	color: #222;
}

a:hover {
	border-bottom: 1px dotted #222;
}

.links {
	margin-top: 40px;
	text-align: right;
	margin-right: 60px;
}
</style>
