<template>
  <div class="home">
    <div class="tip">请选择模板</div>
    <div class="template">
      <div v-for="item in dataList" :key="item.id" class="template-item">
        <img class="template-item-image" :src="item.preview_image_url" />
      </div>
    </div>
    <div class="copyright">
      公众号：i五中狼 <br />
      <a href="https://fly.moe" target="_blank">©Fly3949</a>
    </div>
  </div>
</template>

<script>
export default {
  name: "Home",
  data() {
    return {
      dataList: [
        {
          id: 1,
          preview_image_url:
            "https://cdn.fly3949.com/wp-content/uploads/2020/03/avatar-longhair-150x150.jpg"
        },
        {
          id: 2,
          preview_image_url:
            "https://cdn.fly3949.com/wp-content/uploads/2020/03/avatar-longhair-150x150.jpg"
        },
        {
          id: 3,
          preview_image_url:
            "https://cdn.fly3949.com/wp-content/uploads/2020/03/avatar-longhair-150x150.jpg"
        },
        {
          id: 4,
          preview_image_url:
            "https://cdn.fly3949.com/wp-content/uploads/2020/03/avatar-longhair-150x150.jpg"
        },
        {
          id: 5,
          preview_image_url:
            "https://cdn.fly3949.com/wp-content/uploads/2020/03/avatar-longhair-150x150.jpg"
        }
      ]
    };
  }
};
</script>

<style lang="scss" scoped>
.tip {
  margin: 72px auto 30px auto;
  font-size: 32px;
  color: #ffffff;
  text-align: center;
}
.template {
  padding: 0 68px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;

  &-item {
    width: 191px;
    height: 191px;
    background: rgba(199, 230, 255, 1);
    border-radius: 15px;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 22px;

    &-image {
      width: 170px;
      height: 170px;
      border-radius: 12px;
    }
  }

  &:after {
    display: block;
    content: "";
    width: 30%;
    height: 0px;
  }
}
</style>
