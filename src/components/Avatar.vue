<template>
  <div class="avatar">
    <img v-if="imgSrc" class="image" :src="imgSrc" />
    <canvas id="canvas" style="display: none" />
  </div>
</template>

<script>
import { fabric } from "fabric";

function loadImage(img) {
  return new Promise(resolve => {
    fabric.Image.fromURL(
      img,
      function(oImg) {
        resolve(oImg);
      },
      { crossOrigin: "Anonymous" }
    );
  });
}

export default {
  name: "Avatar",
  props: {
    templateImage: {
      type: String,
      required: true
    },
    avatarImage: {
      type: String,
      required: true
    },
    templateWidth: {
      type: Number,
      required: true
    },
    templateHeight: {
      type: Number,
      required: true
    },
    avatarLeft: {
      type: Number,
      required: true
    },
    avatarTop: {
      type: Number,
      required: true
    },
    avatarWidth: {
      type: Number,
      required: true
    },
    avatarHeight: {
      type: Number,
      required: true
    }
  },
  data() {
    return {
      imgSrc: ""
    };
  },
  methods: {
    async paint() {
      const canvas = new fabric.StaticCanvas("canvas");
      canvas.setHeight(this.templateHeight);
      canvas.setWidth(this.templateWidth);
      const avatarImg = await loadImage(this.avatarImage);
      avatarImg.set({
        left: this.avatarLeft,
        top: this.avatarTop
      });
      canvas.add(avatarImg);
      const templateImg = await loadImage(this.templateImage);
      canvas.add(templateImg);
      this.imgSrc = canvas.toDataURL({
        format: "png"
      });
    }
  }
};
</script>
