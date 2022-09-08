export default app =>{
    app.listen(app.get('port'), () => {
        console.log(`http://localhost:${PORT}`)
    })
}