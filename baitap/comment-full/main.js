Vue.component('individual-comment', {
  template: '#comment-template',  // là 1 li gồm các đối tượng đc loop trong thẻ script
  props: ['commentpost']
});

new Vue({
  el: '#app',
  data: {
    newComment: '',
    comments: [
      { 
        text: 'Looks great Julianne!',
        author: 'Robin Rendle',
        authorImg: 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/28963/v-coffee.jpg'
      },
      { 
        text: 'I love the Sea',
        author: 'Miriam Suzanne',
        authorImg: 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/28963/v-miriam.jpg'
      },
      { 
        text: 'Where are you?',
        author: 'Geoff Graham',
        authorImg: 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/28963/v-geoff.jpg'
      }
    ]
  },
  methods: {
    addComment: function () {
    //hằng số k thay đổi
      const newCommentObj = {
        text: this.newComment, // thêm text khi ngdung nhap vao
        author: 'Magoo',
        authorImg: 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/28963/v-skull.jpg'
      };
      this.comments.push(newCommentObj);// mảng comments thêm 1 đối tượng mới có 3 cái
      this.newComment = '';
    }
  }
});