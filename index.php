<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
	<title>Alfa Product Catalogue</title>
	<link rel="stylesheet" href="./style/Compiled/style.min.css">
	<link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons">
	<link href="https://fonts.googleapis.com/css?family=Alegreya+Sans:400,500|Merriweather+Sans|Roboto+Condensed:300,400,700|Roboto:100,300,400,500,700,900|Work+Sans:400,500,600&display=swap" rel="stylesheet">
	<!-- https://fonts.google.com/?selection.family=Alegreya+Sans:400,500|Merriweather+Sans|Roboto+Condensed:300,400,700|Roboto:100,300,400,500,700,900|Work+Sans:400,500,600 -->
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
	<!-- SEO OPTIMIZAION -->
	<!-- short description page -->
	<meta name="description" content="" />
	<!-- for crawlers -->
	<meta name="robots" content="index, follow" />
	<meta name="googlebot" content="index, follow" />
	<meta name="google" content="notranslate" />
	<!-- COMING SOON META -->
	<!-- <meta name="google" content="" /> -->
</head>
<body>

	<nav class="curved">
		<div class="container">

			<div class="left"><a href="">MENU</a></div>
			<div class="center"><a href="">ALFA STORE</a></div>
			<div class="right"><a href="">ABOUT</a></div>
			
		</div>
	</nav>
	

	<header>

		<div data-slide="headSlide" data-slbtn="dcr" class="round-back-button"></div>
		<div data-slide="headSlide" data-slbtn="incr" class="round-next-button"></div>

		<div id="headSlide" class="slider">

			<div v-for="{title, subTitle, action} in slides" class="items">
				<img src="assets/2545386.jpg">
				<div class="side-panel">
					<h1>{{ title }}</h1>
					<span>{{ subTitle }}</span>
					<a v-if="Boolean(action)" :href="action.to" class="btn-outline">{{ action.text }}</a>
				</div>
			</div>

		</div>

	</header>


</body>
<script src="./lib/vue.js"></script>
<script>

	let slider = new Vue({
		el: '#headSlide',
		data: {
			slides: [
				{
					title: 'Berbagai Souvenir Perusahaan',
					subTitle: 'Disini kami melayani penjualan Barang Promosi dengan harga yang murah dan Berkualitas. Meriahkan Acara anda dengan Souvenir yang berkualitas dari kami.',
					action: {
						text: 'Lihat Produk',
						to: 'javascript:void(0)'
					}
				},
				{
					title: 'Berbagai Souvenir Perusahaan',
					subTitle: 'Disini kami melayani penjualan Barang Promosi dengan harga yang murah dan Berkualitas. Meriahkan Acara anda dengan Souvenir yang berkualitas dari kami.',
					action: {
						text: 'Lihat Produk',
						to: 'javascript:void(0)'
					}
				}
			]
		}
	})

</script>
</html>