import Router from "koa-router";
import api from "./api";
import auth from "./auth";

const router = new Router();

router.use(auth.routes()).use(api.routes());

export default router;
