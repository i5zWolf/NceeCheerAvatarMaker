<template>
  <div class="generate">
    <div class="template">
      <div ref="avatar-wrapper" class="template-item">
        <!-- <img
          class="template-item-image"
          :src="template && template.preview_image_url"
        /> -->
        <avatar
          ref="avatar"
          class="template-item-image"
          :template-image="template.template_image_url"
          :avatar-image="avatar"
          :template-width="template.template_width"
          :template-height="template.template_height"
          :avatar-left="template.avatar_left"
          :avatar-top="template.avatar_top"
          :avatar-width="template.avatar_width"
          :avatar-height="template.avatar_height"
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
import Avatar from "@/components/Avatar";
import { mapGetters } from "vuex";

export default {
  name: "Generate",
  components: {
    Avatar
  },
  computed: {
    ...mapGetters(["template", "avatar"])
  },
  activated() {
    // this.template = this.$store.getters.template;
    // this.avatar = this.$store.getters.avatar;
    // console.log(this.template, this.avatar);
    if (!this.template || !this.avatar) {
      this.$router.push({ path: "/" });
    }
    this.$nextTick(() => {
      this.$refs["avatar"].paint();
    });
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
  }
}

.tip {
  margin-top: 20px;
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

<style lang="scss">
.template-item-image .image {
  width: 360px;
  height: 360px;
  border-radius: 15px;
}
</style>
