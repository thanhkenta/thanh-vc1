<template>
  <div id="app">
    <app-header></app-header><!-- /header -->
    <app-content></app-content><!-- /content -->
    <app-footer></app-footer><!-- /footer -->
  </div>
  
</template>

<script>
  import Header from './component/header';
  import Content from './component/content';
  import Footer from './component/footer';

export default {
  data () {
    return {

    }
  },
  components:{
    'app-header' :Header,
    'app-content' :Content,
    'app-footer' :Footer,
  }
}
</script>

<style>
@import url('https://maxcdn.bootstrapcdn.com/bootstrap/3.3.2/css/bootstrap.min.css');
@import url('https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css');
@import url('https://cdnjs.cloudflare.com/ajax/libs/foundation/6.2.4/foundation.min.css');
@import url('https://fonts.googleapis.com/css?family=Nunito');
*{
  padding:0px;
  margin:0px;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}

.content {
  width: 680px;
  margin: 0 auto;
}
.tasks__clear.button-group.pull-right {
}
.tasks__list.no-bullet {
  display: inline-block;
  margin-top: 50px;
}
.tasks__item {
    width: 100%;
    display: flex;
}
.tasks__list.no-bullet {
  width: 100%;
}
.tasks__item{
    margin-bottom: .5em;
  position: relative;
      margin-left: 0px;
    margin-right: 0px;
}

.tasks__item__toggle{
    cursor: pointer;
  width: 100%;
  text-align :left;
  padding: .85em 2.25em .85em 1em;
  background-color: black;
  opacity: 0.5;
  border: 1px solid rgba(black, 0.8);
}


.tasks__item__toggle:hover{
    background-color: rgba(black, 0.6);
    opacity: 0.6;
  border-color: rgba(black, 0.7);
}


.tasks__item__toggle--completed{
    color:black;
    font-weight: bold;
    text-decoration: line-through;
    background-color: green;
    opacity: 0.8;
    border-color: rgba(green, 0.18);
}


.tasks__item__toggle--completed:hover{
  opacity: 0.855;
  border-color: rgba(green, 0.3);
}


.tasks__item__remove{
    position: absolute;
  height: 100%;
  top: 50%;
  right: 0;
  transform: translateY(-50%);
}
.edit{
    position: absolute;
  height: 100%;
  top: 50%;
  left: 47em;
  transform: translateY(-50%);
  margin-left: 10px;
}

.tasks__item__remove i{
  vertical-align: middle
}

.in-search {
    display: inline-block;
    width: 100%;
}
.searchh {
    float: right;
    display: inline-block;
}
h1 {
  float: left;
}
.search input {
    margin-top: 20px;
    float: left;
    width: 200px;
}
.btn.btn-primary.btn-xs {
    float: right;
    padding: 10px;
    margin-top: 19px;
}

input[type="checkbox"] {
    width: 5%;
}input[type="checkbox"]:focus {
    border: none;
}

.selection {
    display: block;
    text-align: left;
}
label {
    display: inline;
}

#myModal {
    background: rgba(0, 0, 0, 0.1);
}

.finish {
    margin-top: 35px;
    font-size: 21px;
}
li:nth-child(1) {
    color: #4098d9;
}
li:nth-child(2) {
    color: #4cae59;
}
.finish ul li:nth-child(3) {
    color: #ffc74f;
}
hr {
    width: 500px;
}
</style>
