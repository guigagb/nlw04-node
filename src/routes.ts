import { Router } from "express";
import { UserController } from "./controllers/UserController";

const router = Router();

const userController = new UserController();

/*
 * GET => Buscar Informação
 * POST => Salvar Informação
 * PUT => Alterar Informação
 * DELETE => Deletar Informação
 * PATCH => Alteraração específica
 */

router.post("/users", userController.create);

export { router };
