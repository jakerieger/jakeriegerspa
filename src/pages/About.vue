<template>
	<div>
		<sidebar></sidebar>
		<center>
			<img style="width: 11%; border-radius: 50%;" src="../assets/me.jpg">
		</center>
		<h2>ABOUT</h2>
		<div class="container">
			<div class="col-md-6 col-md-offset-3">
				<p>
					My name is Jake Rieger, and I like to make things. Those things happen
					to be websites, and I think I do it quite well. I spend most of my time
					working with Python-based technologies such as Flask or Django, but I can
					work with most frameworks/technologies out there today (this website uses Vue.js).
				</p>
				<p>
					I have a broad scope of skills including HTML + CSS + JavaScript,
					digital design (Photoshop & Illustrator), and even network administration.
					The following technologies I have either professional or personal experience with:
					<ul>
						<li>Django</li>
						<li>Flask</li>
						<li>PHP</li>
						<li>jQuery / Ajax</li>
						<li>Vue.js</li>
						<li>SQL</li>
					</ul>
				</p>
				<h3>GET IN TOUCH</h3>
				<br>
				<form action="mailto:contact.jakerieger@gmail.com" method="post" enctype="text/plain">
					<input type="text" name="name" placeholder="Name"><br><br>
					<input type="text" name="_replyto" placeholder="Email"><br><br>
					<textarea name="message" rows="4" placeholder="Comment"></textarea><br><br>
					<input type="submit" value="Send">
					<input type="reset" value="Reset">
				</form>
			</div>
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
input[type="submit"], input[type="reset"]  {
	border: 2px solid #444;
	outline: none;
	padding: 12px;
	background: none;
	color: #444;
	width: 100px;
	margin-right: 10px;
}

input[type="submit"]:hover, input[type="reset"]:hover {
	cursor:default;
	color: #222;
	border: 2px solid #222;
}

input[type="text"] {
	outline: none;
	padding: 5px;
	width: 75%;
	border: none;
	border-bottom: 1px dotted #ccc !important;
}

input[type="text"]:focus {
	border: none;
	border-bottom: 1px dotted #888 !important;
}

textarea {
	resize: none;
	outline: none;
	border: none;
	width: 100%;
}

img {
	-webkit-filter: grayscale(100%); /* Safari 6.0 - 9.0 */
	filter: grayscale(100%);
	margin: 0;
	padding: 8px;
	border: 1px solid #ddd;
}

img:hover {
	-webkit-filter: none;
	filter: none;
}

p {
	font-family: 'Montserrat', sans-serif;
	font-weight: 300;
	letter-spacing: 1px;
	margin-left: 1px;
}

h3 {
	padding: 0;
	margin: 0;
	color: #444;
	margin-top: 20px;
	letter-spacing: 2px;
}

h2 {
	font-family: 'Montserrat', sans-serif;
	font-weight: 500;
	font-size: 30pt;
	padding: 0;
	margin: 0;
	color: #444;
	text-align: center;
	text-indent: 15px;
	margin-top: 20px;
	letter-spacing: 15px;
}

form {
	margin-bottom: 75px;
}
</style>
