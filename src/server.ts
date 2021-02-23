import express from "express";

const app = express();

/*
 * GET => Buscar Informação
 * POST => Salvar Informação
 * PUT => Alterar Informação
 * DELETE => Deletar Informação
 * PATCH => Alteraração específica
 */

//http://localhost:3333/users
app.get("/", (request, response) => {
  return response.send({ msg: "Hello World NLW 04!" });
});

/*
    1º Param: Rota (Recurso)
    2º Param: Request, Response
*/

app.post("/", (req, res) => {
  //dados recebidos
  return res.json({ msg: "Os dados foram salvos com sucesso." });
});

app.listen(3333, () => console.log("rodando em 3333"));
