module.exports = {
    index: function(req,res){
    },

    tasks: function(req,res){
        res.json([{name:'sweep'},{name:'mop'},{name:'laundry'}])
    }
}