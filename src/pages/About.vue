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
					My name is Jake Rieger and I like to make web apps. I'm a huge fan of Vue.js (this website uses it)
					and Python.
				</p>
				<p>
					I enjoy UI design and cryptography as well. Most of my projects are written in JavaScript, Python, or C.
					I also have both professional and personal experience with the following:
					<ul>
						<li>Django</li>
						<li>Flask</li>
						<li>PHP</li>
						<li>Go</li>
						<li>MySQL</li>
						<li>MongoDB</li>
						<li>Electron</li>
					</ul>
				</p>
				<h3>GET IN TOUCH</h3>
				<br>
				<form action="mailto:contact.jakerieger@gmail.com" method="post" enctype="text/plain">
					<input type="text" name="name" placeholder="Name"><br><br>
					<input type="text" name="_replyto" placeholder="Email"><br><br>
					<textarea name="message" rows="4" placeholder="Comment"></textarea><br><br>
					<input type="submit" class="form-submit" value="Send">
					<input type="reset" class="form-submit" value="Reset">
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

.form-submit:hover {
	background: rgba(0,0,0,0.05);
	cursor: pointer;
}
</style>
