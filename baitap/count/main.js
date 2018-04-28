Vue.component('child', {
  props: { 
    count: {
      type: Number,
      required: true
    }
  },
  template: `<div class="num">{{ count }}</div>`
})

new Vue({
  el: '#app',
  data() {
    return {
      count: 0    
    }
  },
  methods: {
    increment() {	//method có hàm
      this.count++;
    },
    decrement() {
      this.count--;
    }
  }
})