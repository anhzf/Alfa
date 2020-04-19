	
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
					thumbnail: './assets/Men_s-IMBA-Jacket-Night-Ride-Font-View_2000x.jpg'
				},
				{
					productID: 10222,
					name: 'Hoodie',
					thumbnail: './assets/9211.jpg'
				},
				{
					productID: 10011,
					name: 'Topi',
					thumbnail: './assets/stock-photo-baseball-cap-isolated-on-white-background-701847175.jpg'
				},
				{
					productID: 10013,
					name: 'Kathok',
					thumbnail: './assets/8093 rz.jpg'
				},
				{
					productID: 10012,
					name: 'Jaket',
					thumbnail: './assets/8093 rz.jpg'
				}
            ]
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
				props: ['productid','name','thumbnail'],
				template: `
					<div
						class="card"
						title="Click to see details"
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
                        this.$emit('add-to-cart',productID)
                    }
                }
			}
        },
        methods: {
            updateCart(id) {
                this.carts = [...this.carts, id]
            }
        }
    })