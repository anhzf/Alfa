<?
require_once 'process.php';
$prodInf = new productInfo('alfa_store');
$product = $prodInf->get($_GET['productID'])->fetch_assoc();
// $result['product_img'] = json_decode($result['product_img']);
// $result['product_label'] = json_decode($result['product_label']);
// print_r($product);
?>
<!DOCTYPE html>
<html>

<head>
	<title>Alfa Product Catalogue</title>
	<meta charset="utf-8">
	<link rel="stylesheet" type="text/css" href="style/Compiled/style.min.css">
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
	<style>
		[data-slide="headSlide"] {
			--position: calc(10% + 100px);
		}

		[data-slide="headSlide"].round-back-button {
			left: var(--position);
		}

		[data-slide="headSlide"].round-next-button {
			right: var(--position);
		}

		@media(max-width: 1000px) {
			[data-slide="headSlide"] {
				--position: calc(10% + 70px);
			}
		}

		@media(max-width: 800px) {
			[data-slide="headSlide"] {
				--position: 10%;
			}
		}

		@media(max-width: 450px) {
			input.search {
				width: 100%;
				padding: 20px 40px;
			}
		}

		@media(max-width: 540px) {
			[data-slide="headSlide"] {
				--position: 5%;
			}
		}
	</style>
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
			<div class="items">
				<img src="assets/2545386.jpg">
				<div class="side-panel">
					<h1>Berbagai Souvenir Perusahaan</h1>
					<span>Disini kami melayani penjualan Barang Promosi dengan harga yang murah dan Berkualitas. Meriahkan Acara anda dengan Souvenir yang berkualitas dari kami.</span>
					<a href="" class="btn outline">Lihat Produk</a>
				</div>
			</div>
			<div class="items">
				<img src="assets/2545386.jpg">
				<div class="side-panel">
					<h1>Berbagai Souvenir Perusahaan</h1>
					<span>Disini kami melayani penjualan Barang Promosi dengan harga yang murah dan Berkualitas. Meriahkan Acara anda dengan Souvenir yang berkualitas dari kami.</span>
					<a href="" class="btn outline">Lihat Produk</a>
				</div>
			</div>
			<div class="items">
				<img src="assets/2545386.jpg">
				<div class="side-panel">
					<h1>Berbagai Souvenir Perusahaan</h1>
					<span>Disini kami melayani penjualan Barang Promosi dengan harga yang murah dan Berkualitas. Meriahkan Acara anda dengan Souvenir yang berkualitas dari kami.</span>
					<a href="" class="btn outline">Lihat Produk</a>
				</div>
			</div>
		</div>
	</header>
	<main>
		<section>
			<h1>from Alfa Store</h1>
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
		<section class="parallax" style="--bg-url: url('<?=$path['app']?>assets/2315594.jpg');">
			<input type="text" class="search" placeholder="Type here to Search">
		</section>
		<section class="analogous2" style="scroll-snap-type: y mandatory;">
			<h1 class="scrollspy heading-sticky" data-scrollspy="sticked">Apparel</h1>
			<div class="body-sticky" data-scrollspy="sticked">
				<div class="card-gallery">
					<div class="card">
						<img src="">
						<div class="desc">
							<span>Klambi</span>
							<i class="material-icons" data-tooltips="Add to Chart">add_shopping_cart</i>
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
					</div>
					<div class="card" style="justify-content: center; align-items: center;">
						<button class="btn outline">More</button>
					</div>
				</div>
			</div>
			<h1 class="scrollspy heading-sticky" data-scrollspy="sticked">Gadget</h1>
			<div class="body-sticky" data-scrollspy="sticked">
				<div class="card-gallery">
					<div class="card"></div>
					<div class="card"></div>
					<div class="card"></div>
					<div class="card"></div>
					<div class="card"></div>
					<div class="card"></div>
				</div>
			</div>
			<h1 class="scrollspy heading-sticky" data-scrollspy="sticked">Tools</h1>
			<div class="body-sticky" data-scrollspy="sticked">
				<div class="card-gallery">
					<div class="card"></div>
					<div class="card"></div>
					<div class="card"></div>
					<div class="card"></div>
					<div class="card"></div>
					<div class="card"></div>
				</div>
			</div>
			<h1 class="scrollspy heading-sticky" data-scrollspy="sticked">Children</h1>
			<div class="body-sticky" data-scrollspy="sticked">
				<div class="card-gallery">
					<div class="card"></div>
					<div class="card"></div>
					<div class="card"></div>
					<div class="card"></div>
					<div class="card"></div>
					<div class="card"></div>
				</div>
			</div>
			<h1 class="scrollspy heading-sticky" data-scrollspy="sticked">Bags</h1>
			<div class="body-sticky" data-scrollspy="sticked">
				<div class="card-gallery">
					<div class="card"></div>
					<div class="card"></div>
					<div class="card"></div>
					<div class="card"></div>
					<div class="card"></div>
					<div class="card"></div>
				</div>
			</div>
			<h1 class="scrollspy heading-sticky" data-scrollspy="sticked">Giftset</h1>
			<div class="body-sticky" data-scrollspy="sticked">
				<div class="card-gallery">
					<div class="card"></div>
					<div class="card"></div>
					<div class="card"></div>
					<div class="card"></div>
					<div class="card"></div>
					<div class="card"></div>
				</div>
			</div>
			<h1 class="scrollspy heading-sticky" data-scrollspy="sticked">Houseware</h1>
			<div class="body-sticky" data-scrollspy="sticked">
				<div class="card-gallery">
					<div class="card"></div>
					<div class="card"></div>
					<div class="card"></div>
					<div class="card"></div>
					<div class="card"></div>
					<div class="card"></div>
				</div>
			</div>
			<h1 class="scrollspy heading-sticky" data-scrollspy="sticked">Office</h1>
			<div class="body-sticky" data-scrollspy="sticked">
				<div class="card-gallery">
					<div class="card"></div>
					<div class="card"></div>
					<div class="card"></div>
					<div class="card"></div>
					<div class="card"></div>
					<div class="card"></div>
				</div>
			</div>
			<h1 class="scrollspy heading-sticky" data-scrollspy="sticked">Souvenir</h1>
			<div class="body-sticky" data-scrollspy="sticked">
				<div class="card-gallery">
					<div class="card"></div>
					<div class="card"></div>
					<div class="card"></div>
					<div class="card"></div>
					<div class="card"></div>
					<div class="card"></div>
				</div>
			</div>
			<h1 class="scrollspy heading-sticky" data-scrollspy="sticked">Others</h1>
			<div class="body-sticky" data-scrollspy="sticked">
				<div class="card-gallery">
					<div class="card"></div>
					<div class="card"></div>
					<div class="card"></div>
					<div class="card"></div>
					<div class="card"></div>
					<div class="card"></div>
				</div>
			</div>
		</section>
	</main>
	<div class="modal">
		<div class="modals full-screen" data-modal-id="modal-product">
			<div class="head">[Products Name]</div>
			<div class="content product-on-modal">
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
					<div class="reviews complementary">
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
					<div class="card-gallery" id="suggestedProducts">
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
			<div class="footer"><button class="btn flat" onclick="closeModal();">CLOSE</button><button class="btn">ADD TO CHARTS</button></div>
		</div>
	</div>
</body>
<script src="./lib/vue.js"></script>
<script src="./script.js"></script>
<script type="text/javascript">
	const
		prodMod = new modal(document.querySelector("[data-modal-id='modal-product']")),
		urlObj = new URL(document.location);
	prodMod.open();
	// chkURL();
	// function chkURL() {
	// 	var paramProdID = urlObj.searchParams.get('productID');
	// 	if (paramProdID !== null) {
	// 		const xhr = new XMLHttpRequest();
	// 		xhr.onreadystatechange = function () {
	// 			if (xhr.status === 200 && xhr.readyState === 4) {
	// 				console.log(xhr.responseText);
	// 			}
	// 		}
	// 		xhr.open("GET", "process.php?productInfo="+paramProdID);
	// 		xhr.send();
	// 	}
	// }
</script>

</html>