<template>
  <div class="app">
    <div class="app_btn">
      <my-button @click = "showDialog">
      Создать
      </my-button>
      <my-select></my-select>
    </div>
    <my-dialog v-model:show = "dialogVisible">
      <post-form @create = "createPost"/>
    </my-dialog>
    <post-list v-if = "!isPostsLoading"
      :posts="posts"
      @remove="removePost"/>
    <div v-else> идет загрузка</div>
  </div>
</template>

<script>
import PostForm from '@/components/PostForm.vue';
import PostList from '@/components/PostList.vue';
import axios from 'axios';
 export default {
  components: {
    PostForm, PostList
  },
  data() {
    return {
      posts: [], 
      dialogVisible: false,
      isPostsLoading: false,
    }
  },
  methods: {
    createPost(post){
      this.posts.push(post);
      this.dialogVisible = false;
      console.log(post)
    },
    removePost(post){
      this.posts = this.posts.filter((p) => p.id !== post.id)
    }, 
    showDialog(){
      this.dialogVisible = true;
    },
    async fetchPosts() {
      try{
          this.isPostsLoading = true;        
          const response = await axios.get('https://jsonplaceholder.typicode.com/posts?_limit=10');
          this.posts = response.data;
      }
      catch (e) {
        alert('error')
      }
      finally {
        this.isPostsLoading = false;
      }
    }
  },
  mounted() {
    this.fetchPosts();
  }
 }
</script>

<style>
*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
.app{
  padding: 20px;
}
a,button{
  cursor: pointer;
}
.app_btn{
  display: flex;
  justify-content: space-between;
}
</style>