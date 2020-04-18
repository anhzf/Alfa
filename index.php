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


		<div class="slider-nav">
			<button class="btn-rounded" @click="slideNav(-1)">
				<span class="material-icons">keyboard_arrow_left</span>
			</button>
			<button class="btn-rounded" @click="slideNav()">
				<span class="material-icons">keyboard_arrow_right</span>
			</button>
		</div>


		<div id="headSlide" class="slider">

			<div v-for="{title, subTitle, image, action} in slides" class="items">
				<img :src="image">
				<div class="side-panel">
					<h1>{{ title }}</h1>
					<span>{{ subTitle }}</span>
					<a v-if="Boolean(action)" :href="action.to" class="btn-outline">{{ action.text }}</a>
				</div>
			</div>

		</div>


	</header>
	<main>


		<section>


			<h1>from AlfaStore</h1>


			<div class="card-list">


				<div class="card long">
					<h1>Diskon Lebaran</h1>
					<p>Dapatkan diskon Lebaran sebesar 25%</p>
					<div class="btn-group">
						<a href="" class="btn">Read More</a>
					</div>
				</div>


				<div class="card long card-img">
					<h1>Lorem Ipsum</h1>
					<img src="assets/9211.jpg">
					<div class="btn-group">
						<a href="" class="btn">Read More</a>
					</div>
				</div>


				<div class="card long">
					<h1>Lorem Ipsum</h1>
					<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
						tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
						quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
						consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
						cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
						proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
					<div class="btn-group">
						<a href="" class="btn">Read More</a>
					</div>
				</div>


			</div>


			<a class="btn flex-end">MORE ARTICLES</a>


		</section>


		<section class="parallax">

			<input type="text" class="search" placeholder="Type here to Search">

		</section>



		<section class="analogous2" style="scroll-snap-type: y mandatory;">

		
			<div class="product-groups">
				<h1 class="section-header">Apparel</h1>
				<div class="card-gallery">
					<!-- <div class="card">
						<img src="">
						<div class="desc">
							<span>Klambi</span>
							<a href="" class="btn-rounded">
								<i class="material-icons" data-tooltips="Add to Chart">add_shopping_cart</i>
							</a>
						</div>
					</div>
					<div class="card">
						<img src="">
						<div class="desc">
							<span>Hoodie</span>
							<i class="material-icons" data-tooltips="Add to Chart">add_shopping_cart</i>
						</div>
					</div>
					<div class="card">
						<img src="">
						<div class="desc">
							<span>Kathok</span>
							<a href="?productID=1290123"><i class="material-icons" data-tooltips="Add to Chart">add_shopping_cart</i></a>
						</div>
					</div>
					<div class="card">
						<img src="">
						<div class="desc">
							<span>Topi</span>
							<i class="material-icons" data-tooltips="Add to Chart">add_shopping_cart</i>
						</div>
					</div>
					<div class="card">
						<img src="">
						<div class="desc">
							<span>Jaket</span>
							<i class="material-icons" data-tooltips="Add to Chart">add_shopping_cart</i>
						</div>
					</div> -->


					<div v-for="{ name, thumbnail } in products" class="card">
			 			<img :src="thumbnail">
			 			<div class="desc">
			 				<span>{{ name }}</span>
			 				<a href="" class="btn-rounded">
			 					<i class="material-icons" data-tooltips="Add to Chart">add_shopping_cart</i>
			 				</a>
			 			</div>
			 		</div>


					<!-- <product-card
						v-for="{ productID, name, thumbnail } in products"
						:key="productID"
						:name="name"
						:thumbnail="thumbnail"
					></product-card> -->

					<div class="card" style="justify-content: center; align-items: center;">
						<button class="btn-outline">More</button>
					</div>

					
				</div>
			</div>


		</section>


	</main>

</body>
<script src="./lib/vue.js"></script>
<script src="./script.js"></script>
<script>
	
	let header = new Vue({
		el: 'header',
		data: {
			currentSlide: 0,
			slides: [{
					title: 'Berbagai Souvenir Perusahaan',
					subTitle: 'Disini kami melayani penjualan Barang Promosi dengan harga yang murah dan Berkualitas. Meriahkan Acara anda dengan Souvenir yang berkualitas dari kami.',
					image: './assets/2545386.jpg',
					action: {
						text: 'Lihat Produk',
						to: 'javascript:void(0)'
					}
				},
				{
					title: 'Berbagai Souvenir Perusahaan',
					image: './assets/2545386.jpg',
					subTitle: 'Disini kami melayani penjualan Barang Promosi dengan harga yang murah dan Berkualitas. Meriahkan Acara anda dengan Souvenir yang berkualitas dari kami.'
				},
				{
					title: 'Berbagai Souvenir Perusahaan',
					image: './assets/2315594.jpg'
				}
			]
		},
		methods: {
			slideNav(to = 1) {
				let
					slides = this.$el.querySelectorAll('div.items'),
					max = slides.length - 1

				this.currentSlide = (this.currentSlide + to > max) ? 0 :
					(this.currentSlide + to < 0) ? max :
					this.currentSlide + to

				slides[this.currentSlide].scrollIntoView()
			}
		}
	})
	
	let main = new Vue({
		el: 'main',
		data: {
			products: [
				{
					productID: 10010,
					name: 'Jaket',
					thumbnail: './assets/8093.jpg'
				},
				{
					productID: 10011,
					name: 'Jaket',
					thumbnail: './assets/8093.jpg'
				},
				// {
				// 	productID: 10013,
				// 	name: 'Jaket',
				// 	thumbnail: './assets/8093.jpg'
				// },
				{
					productID: 10012,
					name: 'Jaket',
					thumbnail: './assets/8093.jpg'
				}
			]
		}
	})
	
	// Vue.component('product-card',{
    //     props: ['name','thumbnail'],
	// 	template: `
	// 		<div class="card">
	// 			<img v-bind:src="{{ thumbnail }}">
	// 			<div class="desc">
	// 				<span>{{ name }}</span>
	// 				<a href="" class="btn-rounded">
	// 					<i class="material-icons" data-tooltips="Add to Chart">add_shopping_cart</i>
	// 				</a>
	// 			</div>
	// 		</div>
	// 	`
	// })

</script>

</html>