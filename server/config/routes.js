const api = require('../controllers/api')

module.exports = function(app){
    app.get('/',(req,res)=>{
        api.index(req,res)
    })

    app.get('/tasks', (req,res)=>{
        api.tasks(req,res)
    })
}