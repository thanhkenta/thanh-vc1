<template>
	<div id="product-list-one">
		<h2>Product List One</h2>
		<ul>
			<!-- cũ -->
			<!-- <li v-for="product in products">
				<span class="name">{{product.name}}</span>
				<span class="price">${{product.price}}</span>
			</li> -->
			
			<!-- #5-getters  thay đổi giá-->
			<li v-for="product in saleProducts">
				<span class="name">{{product.name}}</span>
				<span class="price">${{product.price}}</span>
			</li>
		</ul>
		<!-- <button v-on:click="reducePrice">Renduce Price</button> -->
		<!-- TRUYỀN amount -->
		<button v-on:click="reducePrice(4)">Renduce Price</button>
	</div>
</template>
<script>
	export default {
		/*props:['products'],*/  //xoa vi da tao store trong vuex

		/*data(){

		},*/
		computed:{
			products(){
				//$store trong main.js khi tao new Vue({})
				//lay bien state trong store.js
				return this.$store.state.products;
			},
			//5: getters
			//đây là gián tiếp || tạo trực tiếp trong store.js
			/*saleProducts(){
				//sd hàm map() để thay đổi giá trị (truyền tham sô là product_sale để xử lý khi trỏ vào thuộc tính)
				var saleProducts_s = this.$store.state.products.map(product_sale => {
					return {
						name: '**' + product_sale.name + '**',
						price: product_sale.price/2
					}
				});
				return saleProducts_s;
			}*/
			//tạo trực tiếp trong store.js
			saleProducts(){
				//trỏ vào store->getters.saleProducts_store
				return this.$store.getters.saleProducts_store;
			}
		},
		methods:{
			/*reducePrice:function(){
				this.$store.state.products.forEach(product_reducePrice => {
					product_reducePrice.price -=1;
				})
				//tạo trực tiếp trong store.js
				//#6-mutations: commit theo mutations(mỗi lần thay đổi sẽ lưu lại)
				return this.$store.commit('reducePrice_store');	
			}*/

			//#7-actions : sử lý bất đồng bộ
			/*reducePrice:function(){		
				return this.$store.dispatch('reducePrice_store_actions');
			}*/
			//truyền amount
			reducePrice:function(amount){		
				return this.$store.dispatch('reducePrice_store_actions',amount);
			}
		}
	}
</script>

<style scoped>
	#product-list-one .price {
  background: #0027ff;
  color: white;
  float: right;
  padding: 5px;
}
#product-list-one li {
  width: 20%;
  margin-bottom: 13px;
}
</style>