<template>
  <div class="home">
    <div class="tip">请选择模板</div>
    <div class="template">
      <div
        v-for="item in dataList"
        :key="item.id"
        class="template-item"
        @click="handleChooseTemplate(item)"
      >
        <img class="template-item-image" :src="item.preview_image_url" />
      </div>
    </div>
    <div class="copyright">
      公众号：i五中狼 <br />
      <a href="https://fly.moe" target="_blank">©Fly3949</a>
    </div>

    <input
      ref="filElem"
      type="file"
      accept="image/*"
      style="display: none"
      @change="setCropImage"
    />
    <simple-crop :crop-params="cropParams" @crop="cropCallback" />
  </div>
</template>

<script>
import SimpleCrop from "simple-crop/index.vue";
import dataList from "@/data/data";

export default {
  name: "Home",
  components: {
    "simple-crop": SimpleCrop
  },
  data() {
    return {
      cropParams: {
        src: null, // 裁剪图片地址
        size: {
          //裁剪尺寸
          width: 800,
          height: 600
        },
        borderColor: "#fff", //裁剪框边框颜色
        cropSizePercent: 0.9, //裁剪框显示比例
        visible: false // 默认隐藏
      },
      dataList
    };
  },
  methods: {
    // 选中模板
    handleChooseTemplate(template) {
      // console.log(template);
      this.$store.dispatch("setTemplate", template);
      this.cropParams = JSON.parse(JSON.stringify(this.cropParams)); //改变对象引用
      this.cropParams.visible = false;
      this.cropParams.size = {
        width: template.avatar_width,
        height: template.avatar_height
      };
      this.$refs.filElem.dispatchEvent(new MouseEvent("click"));
    },
    // 设置裁剪图片
    setCropImage(evt) {
      this.cropParams = JSON.parse(JSON.stringify(this.cropParams)); //改变对象引用
      var files = evt.target.files;
      if (files.length > 0) {
        this.cropParams.src = files[0];
        this.cropParams.visible = true;
      }
      evt.target.value = "";
    },
    // 图片裁剪回调函数
    async cropCallback($resultCanvas) {
      console.log("cropCallback");
      // $resultCanvas.style.marginRight = "10px";
      // $resultCanvas.style.width = "50%";
      // document.body.appendChild($resultCanvas);
      // console.log($resultCanvas.toDataURL());
      await this.$store.dispatch("setAvatar", $resultCanvas.toDataURL());
      this.$router.push({ name: "Generate" });
    }
  }
};
</script>

<style lang="scss" scoped>
@import url("../assets/styles/crop.css");

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
    background: rgb(235, 246, 255);
    border-radius: 15px;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 22px;

    &-image {
      width: 170px;
      height: 170px;
      border-radius: 10px;
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
