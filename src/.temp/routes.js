const c1 = () => import(/* webpackChunkName: "page--src-pages-user-id-vue" */ "E:\\learn\\blog-frontend\\src\\pages\\user\\[id].vue")
const c2 = () => import(/* webpackChunkName: "page--src-templates-tag-vue" */ "E:\\learn\\blog-frontend\\src\\templates\\Tag.vue")
const c3 = () => import(/* webpackChunkName: "page--src-templates-post-vue" */ "E:\\learn\\blog-frontend\\src\\templates\\Post.vue")
const c4 = () => import(/* webpackChunkName: "page--src-templates-my-page-vue" */ "E:\\learn\\blog-frontend\\src\\templates\\MyPage.vue")
const c5 = () => import(/* webpackChunkName: "page--src-pages-foo-vue" */ "E:\\learn\\blog-frontend\\src\\pages\\Foo.vue")
const c6 = () => import(/* webpackChunkName: "page--src-pages-contact-vue" */ "E:\\learn\\blog-frontend\\src\\pages\\Contact.vue")
const c7 = () => import(/* webpackChunkName: "page--src-pages-about-vue" */ "E:\\learn\\blog-frontend\\src\\pages\\About.vue")
const c8 = () => import(/* webpackChunkName: "page--node-modules-gridsome-0-7-23-gridsome-app-pages-404-vue" */ "E:\\learn\\blog-frontend\\node_modules\\_gridsome@0.7.23@gridsome\\app\\pages\\404.vue")
const c9 = () => import(/* webpackChunkName: "page--src-pages-index-vue" */ "E:\\learn\\blog-frontend\\src\\pages\\Index.vue")

export default [
  {
    name: "__user_id",
    path: "/user/:id",
    component: c1,
    meta: {
      dataPath: "/user/_id.json",
      dynamic: true
    }
  },
  {
    path: "/tag/:id/",
    component: c2
  },
  {
    path: "/post/:id/",
    component: c3
  },
  {
    path: "/my-page/",
    component: c4
  },
  {
    path: "/foo/",
    component: c5
  },
  {
    path: "/contact/",
    component: c6
  },
  {
    path: "/about/",
    component: c7
  },
  {
    name: "404",
    path: "/404/",
    component: c8
  },
  {
    name: "home",
    path: "/:page(\\d+)?/",
    component: c9
  },
  {
    name: "*",
    path: "*",
    component: c8
  }
]
