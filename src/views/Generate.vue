<template>
  <div class="generate">
    <div class="template">
      <div class="template-item">
        <img
          class="template-item-image"
          :src="template && template.preview_image_url"
        />
      </div>
    </div>
    <div class="tip">请长按图片保存</div>
    <div class="back-btn" @click="handleBack()" />
    <div class="copyright">
      模板作者：{{ template.author }}<br />
      公众号：i五中狼 <br />
      <a href="https://fly.moe" target="_blank">©Fly3949</a>
    </div>
  </div>
</template>

<script>
export default {
  name: "Generate",
  data() {
    return {
      template: null,
      avatar: null
    };
  },
  activated() {
    this.template = this.$store.getters.template;
    this.avatar = this.$store.getters.avatar;
    console.log(this.template, this.avatar);
    if (!this.template || !this.avatar) {
      this.$router.push({ path: "/" });
    }
  },
  methods: {
    handleBack() {
      this.$router.push({ path: "/" });
    }
  }
};
</script>

<style lang="scss" scoped>
.template {
  padding-top: 130px;
  display: flex;
  justify-content: center;
  align-items: center;

  &-item {
    width: 400px;
    height: 400px;
    background: rgb(235, 246, 255);
    border-radius: 20px;
    display: flex;
    justify-content: center;
    align-items: center;

    &-image {
      width: 360px;
      height: 360px;
      border-radius: 15px;
    }
  }
}

.tip {
  margin-top: 30px;
  font-size: 32px;
  color: #ffffff;
  text-align: center;
}

.back-btn {
  margin: 80px auto 0 auto;
  background-image: url("../assets/images/back-btn.png");
  background-size: cover;
  width: 352px;
  height: 116px;
}
</style>
