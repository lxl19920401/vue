<template>
  <div class="hello">
  		<sub-component @triggerParent='parent' ref="child" :msg='msg'></sub-component>
  		<button @click='triggerChild'>父组件</button>
  		{{$store.state.test}}
  </div>
</template>

<script>
import subComponent from './subComponent'
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: '子组件',
    }
  },
  created(){
	this.$getInterfaceData('https://h5.ele.me/restapi/bgs/poi/reverse_geo_coding?latitude=31.899792&longitude=102.221374','GET')
      .then((response) => {
        console.log(response)
      })
		this.$store.commit('changeStore','changeDate')
  },
  components:{
  	subComponent
  },
  methods:{
  	parent(param){
  		console.log('parent方法','子组件：'+param)
  	},
  	triggerChild(){
  		this.$refs.child.childMethods()
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
