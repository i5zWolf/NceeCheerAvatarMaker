const menu = [
  {
    path: "/",
    name: "Home",
    component: () => import("@/views/Home"),
    meta: {}
  },
  {
    path: "/generate",
    name: "Generate",
    component: () => import("@/views/Generate"),
    meta: {}
  }
];

export { menu };
