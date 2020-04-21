let header = new Vue({
	el: 'header',
	data: {
		currentSlide: 0,
		slides: [{
			title: 'Berbagai Souvenir Perusahaan',
			subTitle: 'Disini kami melayani penjualan Barang Promosi dengan harga yang murah dan Berkualitas. Meriahkan Acara anda dengan Souvenir yang berkualitas dari kami.',
			image: './assets/2545386 rz.jpg',
			action: {
				text: 'Lihat Produk',
				to: 'javascript:void(0)'
			}
			},
			{
				title: 'Berbagai Souvenir Perusahaan',
				image: './assets/2545386 rz.jpg',
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
		carts: [],
		products: [
			{
				productID: 10010,
				name: 'Jaket',
				thumbnail: './assets/Men_s-IMBA-Jacket-Night-Ride-Font-View_2000x.jpg',
				previewImages: [
					'./assets/Men_s-IMBA-Jacket-Night-Ride-Font-View_2000x.jpg',
					'./assets/Men_s-IMBA-Jacket-Night-Ride-Font-View_2000x.jpg',
					'./assets/Men_s-IMBA-Jacket-Night-Ride-Font-View_2000x.jpg',
					'./assets/Men_s-IMBA-Jacket-Night-Ride-Font-View_2000x.jpg',
					'./assets/Men_s-IMBA-Jacket-Night-Ride-Font-View_2000x.jpg'
				]
			},
			{
				productID: 10222,
				name: 'Hoodie',
				thumbnail: './assets/9211 rz.jpg',
				previewImages: [
					'./assets/9211 rz.jpg',
					'./assets/9211 rz.jpg',
					'./assets/9211 rz.jpg'
				]
			},
			{
				productID: 10011,
				name: 'Topi',
				thumbnail: './assets/stock-photo-baseball-cap-isolated-on-white-background-701847175.jpg',
				previewImages: [
					'./assets/stock-photo-baseball-cap-isolated-on-white-background-701847175.jpg',
					'./assets/stock-photo-baseball-cap-isolated-on-white-background-701847175.jpg',
					'./assets/stock-photo-baseball-cap-isolated-on-white-background-701847175.jpg'
				]
			},
			{
				productID: 10013,
				name: 'Kathok',
				thumbnail: './assets/8093 rz.jpg',
				previewImages: [
					'./assets/8093 rz.jpg',
					'./assets/8093 rz.jpg',
					'./assets/8093 rz.jpg'
				]
			},
			{
				productID: 10012,
				name: 'Jaket',
				thumbnail: './assets/8093 rz.jpg',
				previewImages: [
					'./assets/8093 rz.jpg',
					'./assets/8093 rz.jpg',
					'./assets/8093 rz.jpg'
				]
			}
		],
		modal: null
	},
	components: {
		'search-section': {
			template: `
                <section class="parallax">
                    <input
                        v-model="search"
                        type="text" class="search"
                        placeholder="Type here to Search"
                        @focusin="searchFocus"
                        @change="searching"
                    >
					<span>{{ search }}</span>
                    <div class="card-gallery">

					

                    </div>

                </section>
                `,
			data() {
				return {
					search: null
				}
			},
			methods: {
				searchFocus() {
					this.$el.scrollIntoView({
						behavior: 'smooth'
					})
				},
				searching() {
					console.log(this.search)
				}
			}
		},
		'product-card': {
			props: ['productid', 'name', 'thumbnail'],
			template: `
					<div
						class="card"
						title="Click to see details"
						@click="$emit('show-modal',productid)"
					>
						<img :src="thumbnail">
						<div class="desc">
							<span>{{ name }}</span>
                            <a
                                class="btn-rounded"
                                @click="addToCart(productid)"
                            >
								<i
									class="material-icons"
									title="add to carts"
								>add_shopping_cart</i>
							</a>
						</div>
					</div>
				`,
			methods: {
				addToCart(productID) {
					this.$emit('add-to-cart', productID)
				}
			}
		},
		'product-modal': {
			props: {
				'modal-data': Object
			},
			template: `
				<div class="modal-full-screen">
					<div class="modal__header">
						<h1>Detail Barang</h1>
					</div>
					<div class="modal__body product-on-modal">
						<div class="preview">
							<div class="img-gallery-slide">
								<img v-for="image in previewImages"
									:src="image"
									:alt="itemName">
							</div>
							<img src="./assets/jaket.jpg" alt="Jaket">
						</div>
						<div class="item-desc">
							<h1>{{ itemName }}</h1>
							<div class="info">
								<div class="rating">
									<i class="material-icons">star</i>
									<i class="material-icons">star</i>
									<i class="material-icons">star</i>
									<i class="material-icons">star</i>
									<i class="material-icons">star</i>
									<span style="
										grid-column: 5 span;
										text-align: right;
										"
									>1783 Review</span>
								</div>
								<span class="price">Rp 180.000<span class="sold"> Terjual 90.123</span></span>
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
									<img src="./assets/jaket.jpg" alt="Jaket">
									<span>jaket</span>
								</div>
								<div class="card">
									<img src="./assets/jaket.jpg" alt="Jaket">
									<span>jaket</span>
								</div>
								<div class="card">
									<img src="./assets/jaket.jpg" alt="Jaket">
									<span>jaket</span>
								</div>
								<div class="card" style="justify-content: center; align-items: center;">
									<a class="btn outline">MORE</a>
								</div>
							</div>
						</div>
					</div>
					<div class="modal__footer">
						<button
							class="btn-flat"
							@click="$emit('close')"
						>CLOSE</button>
						<button class="btn">ADD TO CHARTS</button>
					</div>
				</div>
			`,
			computed: {
				previewImages() {
					return [this['modalData'].thumbnail ,...this['modalData'].previewImages]
				},
				itemName() {
					return this['modalData'].name
				}
			}
		}
	},
	methods: {
		updateCart(id) {
			this.carts = [...this.carts, id]
		},
		showModal(productID) {
			this.modal = productID
		},
		closeModal() {
			this.modal = null
		}
	},
	computed: {
		modalData() {
			return this.modal ? this.products.filter(({ productID }) => productID === this.modal)[0]
				: {
					productID: null,
					name: null,
					thumbnail: null,
					previewImages: []
				}
		}
	}
})