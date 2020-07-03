const templates = [
  {
    id: 1,
    author: "xixi",
    preview_image_url:
      "https://storage-common-upyun.qz5z.ren/ncee-avatar-templates/001/example.jpg",
    template_image_url:
      "https://storage-common-upyun.qz5z.ren/ncee-avatar-templates/001/template.png",
    template_width: 1024,
    template_height: 1024,
    avatar_top: 70,
    avatar_left: 66,
    avatar_width: 906,
    avatar_height: 948
  },
  {
    id: 13,
    author: "xixi",
    preview_image_url:
      "https://storage-common-upyun.qz5z.ren/ncee-avatar-templates/013/example.jpg",
    template_image_url:
      "https://storage-common-upyun.qz5z.ren/ncee-avatar-templates/013/template.png",
    template_width: 1024,
    template_height: 1024,
    avatar_top: 138,
    avatar_left: 66,
    avatar_width: 906,
    avatar_height: 880
  },
  {
    id: 14,
    author: "xixi",
    preview_image_url:
      "https://storage-common-upyun.qz5z.ren/ncee-avatar-templates/014/example.jpg",
    template_image_url:
      "https://storage-common-upyun.qz5z.ren/ncee-avatar-templates/014/template.png",
    template_width: 1024,
    template_height: 1024,
    avatar_top: 185,
    avatar_left: 0,
    avatar_width: 1024,
    avatar_height: 650
  },
  {
    id: 2,
    author: "庄泓睿",
    preview_image_url:
      "https://storage-common-upyun.qz5z.ren/ncee-avatar-templates/002/example.jpg",
    template_image_url:
      "https://storage-common-upyun.qz5z.ren/ncee-avatar-templates/002/template.png",
    template_width: 1024,
    template_height: 1024,
    avatar_top: 30,
    avatar_left: 30,
    avatar_width: 984,
    avatar_height: 984
  },
  {
    id: 3,
    author: "庄泓睿",
    preview_image_url:
      "https://storage-common-upyun.qz5z.ren/ncee-avatar-templates/003/example.jpg",
    template_image_url:
      "https://storage-common-upyun.qz5z.ren/ncee-avatar-templates/003/template.png",
    template_width: 1024,
    template_height: 1024,
    avatar_top: 0,
    avatar_left: 0,
    avatar_width: 1024,
    avatar_height: 1024
  },
  {
    id: 4,
    author: "庄泓睿",
    preview_image_url:
      "https://storage-common-upyun.qz5z.ren/ncee-avatar-templates/004/example.jpg",
    template_image_url:
      "https://storage-common-upyun.qz5z.ren/ncee-avatar-templates/004/template.png",
    template_width: 1024,
    template_height: 1024,
    avatar_top: 0,
    avatar_left: 0,
    avatar_width: 1024,
    avatar_height: 1024
  },
  {
    id: 5,
    author: "庄泓睿",
    preview_image_url:
      "https://storage-common-upyun.qz5z.ren/ncee-avatar-templates/005/example.jpg",
    template_image_url:
      "https://storage-common-upyun.qz5z.ren/ncee-avatar-templates/005/template.png",
    template_width: 1024,
    template_height: 1024,
    avatar_top: 60,
    avatar_left: 60,
    avatar_width: 904,
    avatar_height: 904
  },
  {
    id: 6,
    author: "庄泓睿",
    preview_image_url:
      "https://storage-common-upyun.qz5z.ren/ncee-avatar-templates/006/example.jpg",
    template_image_url:
      "https://storage-common-upyun.qz5z.ren/ncee-avatar-templates/006/template.png",
    template_width: 1024,
    template_height: 1024,
    avatar_top: 60,
    avatar_left: 60,
    avatar_width: 904,
    avatar_height: 904
  },
  {
    id: 7,
    author: "庄泓睿",
    preview_image_url:
      "https://storage-common-upyun.qz5z.ren/ncee-avatar-templates/007/example.jpg",
    template_image_url:
      "https://storage-common-upyun.qz5z.ren/ncee-avatar-templates/007/template.png",
    template_width: 1024,
    template_height: 1024,
    avatar_top: 0,
    avatar_left: 0,
    avatar_width: 1024,
    avatar_height: 1024
  },
  {
    id: 8,
    author: "庄泓睿",
    preview_image_url:
      "https://storage-common-upyun.qz5z.ren/ncee-avatar-templates/008/example.jpg",
    template_image_url:
      "https://storage-common-upyun.qz5z.ren/ncee-avatar-templates/008/template.png",
    template_width: 1024,
    template_height: 1024,
    avatar_top: 0,
    avatar_left: 0,
    avatar_width: 1024,
    avatar_height: 1024
  },
  {
    id: 9,
    author: "庄泓睿",
    preview_image_url:
      "https://storage-common-upyun.qz5z.ren/ncee-avatar-templates/009/example.jpg",
    template_image_url:
      "https://storage-common-upyun.qz5z.ren/ncee-avatar-templates/009/template.png",
    template_width: 1024,
    template_height: 1024,
    avatar_top: 0,
    avatar_left: 0,
    avatar_width: 1024,
    avatar_height: 1024
  },
  {
    id: 10,
    author: "庄泓睿",
    preview_image_url:
      "https://storage-common-upyun.qz5z.ren/ncee-avatar-templates/010/example.jpg",
    template_image_url:
      "https://storage-common-upyun.qz5z.ren/ncee-avatar-templates/010/template.png",
    template_width: 1024,
    template_height: 1024,
    avatar_top: 0,
    avatar_left: 0,
    avatar_width: 1024,
    avatar_height: 1024
  },
  {
    id: 12,
    author: "曾思恺",
    preview_image_url:
      "https://storage-common-upyun.qz5z.ren/ncee-avatar-templates/012/example.jpg",
    template_image_url:
      "https://storage-common-upyun.qz5z.ren/ncee-avatar-templates/012/template.png",
    template_width: 1024,
    template_height: 1024,
    avatar_top: 55,
    avatar_left: 85,
    avatar_width: 864,
    avatar_height: 914
  },
  {
    id: 11,
    author: "林宇鑫",
    preview_image_url:
      "https://storage-common-upyun.qz5z.ren/ncee-avatar-templates/011/example.jpg",
    template_image_url:
      "https://storage-common-upyun.qz5z.ren/ncee-avatar-templates/011/template.png",
    template_width: 1024,
    template_height: 1024,
    avatar_top: 0,
    avatar_left: 0,
    avatar_width: 1024,
    avatar_height: 1024
  }
];

export default templates;
