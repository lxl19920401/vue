<template>
  <div class="hello">
  			<button @click='triggerParent'>{{msg}}</button>
  </div>
</template>

<script>

export default {
  name: 'subComponent',
  data () {
    return {
     
    }
  },
  props:{
  	msg:''
  },
  created(){
  	
  },
  methods:{
  	triggerParent(){
  		this.$emit('triggerParent','子组件传值')
  	},
  	childMethods(){
  		console.log('子组件方法')
  	}
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
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
</style>
