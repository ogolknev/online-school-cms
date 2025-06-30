import Strapi from "@strapi/strapi";

const router = {
  type: "content-api",
  routes: [
    {
      method: "GET",
      path: "/videos/accessible",
      handler: "video.findAccessible",
      info: {},
      config: {
        description: "Get all videos accessible by user",
      },
    },
  ],
};

export default router;
