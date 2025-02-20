import { Router } from "express";
import { helloWordController } from "./controller/hello-word.controller";

const router = Router();
const baseUrl = '/api/hello-world';

router.get(`${baseUrl}`, helloWordController.helloWord);

export const helloWorldRouter = router;
