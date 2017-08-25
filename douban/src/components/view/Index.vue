<template>
  <div class="index">
    <div class="header">首页</div>
    <div class="title">
  <span v-model="title">{{title}}</span>
</div>
    <div class="in_theaters">
     <ul class="movieList">
       <li class="movie" v-for="item in MList">
         <ul>
          <li>
            <a :href="item.alt">
              <img :src="item.images.small" :alt="item.title">
            </a>

          </li>
          <li>{{item.title}}</li>
          <li>{{item.rating.average}}</li>

         </ul>
      </li>
     </ul>

</div>
  </div>
</template>

<script type="text/ecmascript-6">
  import axios from 'axios'
  export default {
    data () {
      return {
        note: [],
        MList: [],
        title: ''
      }
    },
    created () {
      this.getNote()
    },
    methods: {
      getNote () {
        let vm = this
        axios.get('api/movie/in_theaters?count=').then(function (res) {
          console.log(123)
          console.log(res)
          vm.title = res.data.title
          console.log(vm.title)
          vm.MList = res.data.subjects
        }).catch(function (error) {
          console.log(error)
        })
      }
    }

  }
</script>

<style >
.hedaer{
display:flex;
}
.in_theaters{
display: inline-block;
}
ul{
  display: block;
  list-style-type: none;
  margin: auto;
}

</style>
