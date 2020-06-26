const menu = [
  {
    path: "/",
    name: "Home",
    component: () => import("@/views/Home"),
    meta: {}
  },
  {
    path: "/crop",
    name: "Crop",
    component: () => import("@/views/Crop"),
    meta: {}
  }
];

export { menu };
