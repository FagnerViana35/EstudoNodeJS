import tarefas from "../router/tarefas";

export default app => {
    const Tarefas = app.models.tarefas;
    app.get('tarefas', (req, res) =>{
        Tarefas.findAll({}, (tarefas) =>{
            res.json({tarefas: tarefas})
        })
    })
}