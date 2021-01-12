<template>
  <div class="hello">
    <Tag color="primary" class="title">
      TODO
    </Tag>
    <Input v-model="text" maxlength="100" show-word-limit type="textarea" placeholder="Enter something..."
      style="width: 400px" />
    <Button @click="addText">添加</Button>
    <Card v-for="item in list" :key="item._id" class="card">
      <p slot="title">
        {{item.updated_at}}
      </p>
      <Icon type="md-close" slot="extra" @click.prevent="delTtem(item._id)">
      </Icon>
      <p>
        {{item.content}}
      </p>
    </Card>
  </div>
</template>

<script>
export default {
  data() {
    return {
      name: 'Todolist',
      list: [],
      text: ''
    }
  },
  mounted() {
    this.queryList()
  },
  methods: {
    addText() {
      if (this.text != '') {
        this.$http.post('http://localhost:3000/create', { content: this.text }, {
          header: {
            "Access-Control-Allow-Origin": "*",
            "Access-Control-Allow-Methods": "GET, POST, PATCH, PUT, DELETE, OPTIONS",
            "Access-Control-Allow-Headers": "Origin, Content-Type, X-Auth-Token"
          }
        }).then((res) => {
          console.log(res)
          this.queryList();
        })
      } else {
        // eslint-disable-nextline no-undef
        this.$Message['warning']({
          background: true,
          content: '内容不能为空'
        });
      }
    },
    delTtem(id) {
      this.$http.get(`http://localhost:3000/destroy?id=${id}`).then((res) => {
        console.log(res)
        this.queryList();
      })
    },
    queryList() {
      this.$http.get("http://localhost:3000/search").then((res) => {
        this.list = res.data;
      })
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.title {
  margin-bottom: 20px;
}
.hello {
  width: 100%;
  height: 100%;
  padding: 0 20%;
  overflow-y: auto;
}
.card {
  margin-bottom: 16px;
}
</style>
