<template>
  <div class="row">
    <div class="col-sm-12 col-md-8">
      <!-- new pizza -->
      <app-new-pizza></app-new-pizza>
    </div>
    <div class="col-sm-12 col-md-4">
      <!-- 品种展示 -->
      <h3 class="text-muted my-5">菜单</h3>
      <table class="table">
        <thead class="table table-default">
          <tr>
            <th>品种</th>
            <th>删除</th>
          </tr>
        </thead>
        <tbody v-for="item in getMenuItems" :key="item.name">
          <tr>
            <td>{{item.name}}</td>
            <td>
              <button @click="deleteData(item)" class="btn btn-outline-danger btn-sm">&times;</button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
import NewPizza from "./NewPizza.vue";
export default {
  data() {
    return {

    }
  },
  components: {
    "app-new-pizza": NewPizza
  },
  computed: {
    getMenuItems(){
        return this.$store.getters.getMenuItems   
    }
  },
  created() {
    this.Axios.get("https://wd3160611847cyelke.wilddogio.com/menu.json")
      .then(res => {
        
      })
      let menuArray = []
      let data =  this.$store.getters.getMenuItems
      for(let key in data){
              // console.log(key)
              // console.log(data[key])
              data[key].id = key
              menuArray.push(data[key])
            }
      this.$store.commit('setMenuItems',menuArray)
  },
  methods: {
    deleteData(item) {
      console.log(item)
      this.Axios.delete("https://wd3160611847cyelke.wilddogio.com/menu/" + item.id + "/.json")
        .then(res => {
          // this.$store.commit('removeMenuItems',itme)
          console.log(res)
          this.$router.push({ name: "menuLink" });
        })
    }
    
  }
};
</script>


