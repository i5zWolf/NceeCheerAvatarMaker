<template>
  <div class="crop">
    <input type="file" accept="image/png,image/jpeg" @change="setCropImage" />
    <simple-crop
      :crop-params="cropParams"
      @crop="cropCallback"
      @upload="uploadCallback"
      @close="closeCallback"
    ></simple-crop>
  </div>
</template>

<script>
import SimpleCrop from "simple-crop/index.vue";

export default {
  name: "Crop",
  components: {
    "simple-crop": SimpleCrop
  },
  data() {
    return {
      cropParams: {
        src: "https://i.loli.net/2020/06/26/FiPBurDgGkIHc7l.png", // 裁剪图片地址
        size: {
          //裁剪尺寸
          width: 800,
          height: 600
        },
        borderColor: "#fff", //裁剪框边框颜色
        cropSizePercent: 0.9 //裁剪框显示比例
      }
    };
  },
  methods: {
    //组件更新
    updateComponent() {
      this.cropParams = JSON.parse(JSON.stringify(this.cropParams)); //改变对象引用
      this.cropParams.borderColor = "#0BFF00"; //更新值
      this.cropParams.cropSizePercent = 0.8;
      this.cropParams.size = {
        width: 600,
        height: 600
      };
    },

    //设置裁剪图片
    setCropImage(evt) {
      var files = evt.target.files;
      if (files.length > 0) {
        this.cropParams = JSON.parse(JSON.stringify(this.cropParams)); //改变对象引用
        this.cropParams.src = files[0];
      }
      evt.target.value = "";
    },

    //关闭回调
    closeCallback() {
      console.log("closeCallback");
    },

    //图片裁剪回调函数
    cropCallback($resultCanvas) {
      console.log("cropCallback");
      $resultCanvas.style.marginRight = "10px";
      $resultCanvas.style.width = "50%";
      document.body.appendChild($resultCanvas);
    },

    //上传图片回调函数
    uploadCallback(src) {
      console.log("uploadCallback " + src);
    }
  }
};
</script>

<style lang="scss" scoped>
@import url("../assets/styles/crop.css");
</style>
