const tarefas = [
    {title: "Ir na casa da sogra"},
    {title: "Estudar programação"}
]
export default app => {
  app.get("/tarefas", (req, res) => {
    res.json({tarefas})
  })  
}