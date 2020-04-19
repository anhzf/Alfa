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

		<search-section></search-section>

		<section style="scroll-snap-type: y mandatory;">
		
			<div class="product-groups">
				<h1 class="section-header">Apparel</h1>
				<div class="card-gallery">

					<product-card
						v-for="{ productID, name, thumbnail } in products"
						:key="productID"
						:productid="productID"
						:name="name"
						:thumbnail="thumbnail"
						@add-to-cart="updateCart"
					></product-card>

					<div class="card" style="justify-content: center; align-items: center;">
						<button class="btn-outline">More</button>
					</div>
					
				</div>
			</div>
	
			<div class="product-groups">
				<h1 class="section-header">Apparel</h1>
				<div class="card-gallery">


					<product-card
						v-for="{ productID, name, thumbnail } in products"
						:key="productID"
						:productid="productID"
						:name="name"
						:thumbnail="thumbnail"
						@add-to-cart="updateCart"
					></product-card>


					<div class="card" style="justify-content: center; align-items: center;">
						<button class="btn-outline">More</button>
					</div>

					
				</div>
			</div>

		</section>

	</main>
	<div class="modal__container">
		<div class="modal-full-screen">
			<div class="modal__header">
				<h1>[Products Name]</h1>
			</div>
			<div class="modal__body product-on-modal">
				<div class="img">
					<div class="img-gallery-slide">
						<img src="assets/Men_s-IMBA-Jacket-Night-Ride-Font-View_2000x.jpg" alt="Jaket">
						<img src="assets/Men_s-IMBA-Jacket-Night-Ride-Font-View_2000x.jpg" alt="Jaket">
						<img src="assets/Men_s-IMBA-Jacket-Night-Ride-Font-View_2000x.jpg" alt="Jaket">
						<img src="assets/Men_s-IMBA-Jacket-Night-Ride-Font-View_2000x.jpg" alt="Jaket">
						<img src="assets/Men_s-IMBA-Jacket-Night-Ride-Font-View_2000x.jpg" alt="Jaket">
						<img src="assets/Men_s-IMBA-Jacket-Night-Ride-Font-View_2000x.jpg" alt="Jaket">
					</div>
					<img src="assets/Men_s-IMBA-Jacket-Night-Ride-Font-View_2000x.jpg" alt="Jaket">
				</div>
				<div class="item-desc">
					<h1>JAKET ASLI LOREM IPSUM TERBUAT DARI KAYU JATI</h1>
					<div>
						<div class="rating">
							<i class="material-icons" style="color: var(--p-color-500);">star</i>
							<i class="material-icons" style="color: var(--p-color-500);">star</i>
							<i class="material-icons" style="color: var(--p-color-500);">star</i>
							<i class="material-icons" style="color: var(--p-color-500);">star</i>
							<i class="material-icons">star</i>
							1783 Review
						</div>
						<span class="price">Rp 180.000<span class="sold">Terjual 90.123</span></span>
					</div>
					<p class="desc">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
						tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
						quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
						consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
						cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
						proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
					<div class="reviews">
						<h3>Review</h3>
						<div class="card-gallery">
							<div class="review card">
								<div class="thumbnail">
									<img src="https://iconsgalore.com/wp-content/uploads/2018/10/male-avatar-1-featured-2.png">
								</div>
								<div>
									<span class="user">Fulan</span>
									<span class="comment">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
										tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
										quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
										consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
										cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
										proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</span>
								</div>
							</div>
							<div class="review card">
								<div class="thumbnail">
									<img src="https://iconsgalore.com/wp-content/uploads/2018/10/male-avatar-1-featured-2.png">
								</div>
								<div>
									<span class="user">Fulan</span>
									<span class="comment">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
										tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
										quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
										consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
										cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
										proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</span>
								</div>
							</div>
							<div class="review card">
								<div class="thumbnail">
									<img src="https://iconsgalore.com/wp-content/uploads/2018/10/male-avatar-1-featured-2.png">
								</div>
								<div>
									<span class="user">Fulan</span>
									<span class="comment">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
										tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
										quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
										consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
										cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
										proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</span>
								</div>
							</div>
						</div>
					</div>
					<h4>SUGGESTED PRODUCTS</h4>
					<div class="card-gallery suggested-products">
						<div class="card">
							<img src="assets/Men_s-IMBA-Jacket-Night-Ride-Font-View_2000x.jpg" alt="Jaket">
							<span>jaket</span>
						</div>
						<div class="card">
							<img src="assets/Men_s-IMBA-Jacket-Night-Ride-Font-View_2000x.jpg" alt="Jaket">
							<span>jaket</span>
						</div>
						<div class="card">
							<img src="assets/Men_s-IMBA-Jacket-Night-Ride-Font-View_2000x.jpg" alt="Jaket">
							<span>jaket</span>
						</div>
						<div class="card" style="justify-content: center; align-items: center;">
							<a class="btn outline">MORE</a>
						</div>
					</div>
				</div>
			</div>
			<div class="modal__footer">
				<button class="btn-flat"">CLOSE</button>
				<button class="btn">ADD TO CHARTS</button>
			</div>
		</div>
	</div>
</body>
<script src="./lib/vue.js"></script>
<script src="./app.js"></script>

</html>