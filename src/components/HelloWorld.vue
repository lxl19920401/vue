<template>
  <div class="hello">
  		HelloWorldqq
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  created(){
  	this.$getInterfaceData('https://h5.ele.me/restapi/bgs/poi/reverse_geo_coding?latitude=31.899792&longitude=102.221374','GET')
      .then((response) => {
        console.log(response)
      })
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
