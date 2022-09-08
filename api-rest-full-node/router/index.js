
export default app => {
    app.get("/", (req, res) =>{
    res.json({status: "Bem vindo a API"})
})};