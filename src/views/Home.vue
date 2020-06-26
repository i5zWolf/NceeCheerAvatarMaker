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
      accept="image/png,image/jpeg"
      style="display: none"
      @change="setCropImage"
    />
    <simple-crop
      :crop-params="cropParams"
      @crop="cropCallback"
      @upload="uploadCallback"
      @close="closeCallback"
    />
  </div>
</template>

<script>
import SimpleCrop from "simple-crop/index.vue";

export default {
  name: "Home",
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
        cropSizePercent: 0.9, //裁剪框显示比例
        visible: false // 默认隐藏
      },
      dataList: [
        {
          id: 1,
          preview_image_url:
            "https://cdn.fly3949.com/wp-content/uploads/2020/03/avatar-longhair-150x150.jpg",
          template_width: 1024,
          template_height: 1024,
          avatar_top: 200,
          avatar_left: 200,
          avatar_width: 700,
          avatar_height: 700
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
  },
  methods: {
    // 选中模板
    handleChooseTemplate(template) {
      console.log(template);
      this.$refs.filElem.dispatchEvent(new MouseEvent("click"));
    },
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
        this.cropParams.visible = true;
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
