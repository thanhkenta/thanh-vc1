<template>
	<div id="product-list-two">
		<h2>Product List Two</h2>
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

			//tạo trực tiếp trong store.js
			saleProducts(){
				//trỏ vào store->getters.saleProducts_store
				return this.$store.getters.saleProducts_store;
			}
		}
	}
</script>

<style scoped>
	#product-list-two {
  background: #D1e4FF;
  padding: 10px 20px;
  box-shadow: 3px 8px 16px red;
  width: 508px;
}
#product-list-two ul {
  list-style: none;
  padding: 0px;
}
#product-list-two li {
  background: rgba(255,255,255,0.5);
  margin-top: 10px;
  margin-right: 30px;
  padding: 20px;
}
#product-list-two .price {
  font-weight: bold;
  display: block;
  color: #cf2240;
}
</style>