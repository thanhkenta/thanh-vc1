import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);  //import thư viện Vuex và thông báo với VueJS về việc sử dụng vuex thông qua Vue.use(Vuex).

//+Trung tâm của mọi ứng dụng Vuex là kho chứa (store),
// một kho chứa đơn giản là nơi khai báo, lưu trữ các trạng thái ứng dụng.


/*Kho chứa Vuex có thể tác động lại các Vue component lấy trạng thái từ đó, trạng thái sẽ được cập nhật khi có thay
 đổi một cách hiệu quả. Các trạng thái trong kho chứa không thể thay đổi trực tiếp, chỉ có một cách duy nhất để thay đổi trạng thái là phải commit.*/
export const store = new Vuex.Store({		//Thay đổi store từ 1 object JS thuần thành 1 instance của Vuex.Store.
	strict:true,	//#6-mutations
	state:{									//khởi tạo và gán giá trị
		products:[
	        {name:'Yellow',price:20},
	        {name:'Red',price:40},
	        {name:'Green',price:60},
	        {name:'Pink',price:80}
     	]
	},
	getters:{
		saleProducts_store:state => {
			var saleProducts_s = state.products.map(product_sale => {
					return {
						name: '**' + product_sale.name + '**',
						price: product_sale.price/2
					}
				});
			return saleProducts_s;
		}
	},
	/*mutations:{
		reducePrice_store:state => {
			state.products.forEach(product_reducePrice => {
					product_reducePrice.price -=1;
				})
		}
	},
	actions:{
		reducePrice_store_actions:context => {  //sd context
			setTimeout(function(){
				context.commit('reducePrice_store');
			},2000)
		}
	}*/

// truyền amount
	mutations:{
		reducePrice_store:(state,payload) => {
			state.products.forEach(product_reducePrice => {
					product_reducePrice.price -=payload;  //(4) truyền lại vào đây
				})
		}
	},
	actions:{
		reducePrice_store_actions:(context,payload) => {  //sd context
			setTimeout(function(){
				context.commit('reducePrice_store',payload);
			},2000)
		}
	}
})