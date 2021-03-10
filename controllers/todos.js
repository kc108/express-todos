router.get('/', function(req, res) {
 res.render('todos/index', {
   todos: Todo.getAll()
 });
});