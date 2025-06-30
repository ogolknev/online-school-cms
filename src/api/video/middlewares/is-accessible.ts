import Strapi from "@strapi/strapi";

const isAccessible: Strapi.Core.MiddlewareFactory = (config, { strapi }) => {
  return (ctx, next) => {
    const user = ctx.state.user;

    const nextData = next();

    console.log({ user, nextData });

    return nextData;
  };
};

export default isAccessible;
