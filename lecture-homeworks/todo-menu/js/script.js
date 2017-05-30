/**
 * Created by Hilda on 5/30/2017.
 */

    var ID = 0;
    function inherit(SubClass, BaseClass) {
        SubClass.prototype = Object.create(BaseClass.prototype, {
            constructor: {
                value: SubClass,
                configurable: true,
                writable: true
            }
        });
    };

    function Renderable() {}
    Renderable.prototype.render = function() {
        throw new Error('render is not implemented');
    };

    function TodoItem(title){
        Renderable.call(this);
        this.ID = ++ID;
        this.$title = title;
        this.$completed = false;
    }
    inherit(TodoItem,Renderable);
    TodoItem.prototype.render = function(){
        var self = this;
        var li = document.createElement('li');
        var input = document.createElement('input');
        var a = document.createElement('a');
        input.type = "checkbox";
        if(this.$completed){ input.setAttribute("checked","checked");};
        input.addEventListener('click',function(){ChangeStatus( self, input)});
        a.href = '#';
        a.appendChild(document.createTextNode('X'));
        a.addEventListener('click', function(){deleteItem(self.ID)});
        li.appendChild(input);
        li.appendChild(document.createTextNode(this.$title));
        li.appendChild(a);
        return li;
    };
    function ChangeStatus(self, input){
        self.$completed = !(self.$completed);
        if(self.$completed){ input.setAttribute("checked","checked");}
        document.getElementById("compTasks").innerHTML = TodoList.$todos.filter(function(v){
            return v.$completed == true}).length;

    }
    function filter(radioButton){
        if(radioButton.name == "All"){
            todoL.innerHTML = '';
            todoL.appendChild(TodoList.render());
        }else if(radioButton.name == "Completed"){
            todoL.innerHTML = '';
            todoL.appendChild(TodoList.render(true));
        }else{
            todoL.innerHTML = '';
            todoL.appendChild(TodoList.render(false));
        }
    }

    function TodoMenu(){
        Renderable.call(this);
        this.$todos = [];
    }
    inherit(TodoMenu,Renderable);

    TodoMenu.prototype.render = function(status){
        document.getElementById("allTasks").innerHTML = this.$todos.length;
        document.getElementById("compTasks").innerHTML = this.$todos.filter(function(v){
            return v.$completed == true}).length;

        var ul = document.createElement('ul');
        ul.id = "todos";
        this.$todos.forEach(function(item) {
            if((status == undefined) || (item.$completed == status)) {
                ul.appendChild(item.render());
            }
        });
        return ul;
    };

    TodoMenu.prototype.addItem = function(){
        var elNewTask = document.getElementById('new-task');
        var title = elNewTask.value.trim();
        if(!title) {
            alert("Please input valid title");
            return;
        }
        this.$todos.push(new TodoItem(title));
        elNewTask.value = '';
    }

    TodoMenu.prototype.deleteItem = function(id) {
        var item = this.$todos.indexOf(this.$todos.find(function(v) {
            return v.ID == id;
        }));
        this.$todos.splice(item, 1);
    }

    document.getElementById("add").addEventListener('click',addItem);
    document.getElementById("r1").addEventListener('click',function(){filter(document.getElementById("r1"))});
    document.getElementById("r2").addEventListener('click',function(){filter(document.getElementById("r2"))});
    document.getElementById("r3").addEventListener('click',function(){filter(document.getElementById("r3"))});
    var TodoList = new TodoMenu();
    var todoL = document.getElementById("todo-list");

    function addItem(){
        TodoList.addItem();
        todoL.innerHTML = '';
        todoL.appendChild(TodoList.render());

    }

    function deleteItem(id){
        TodoList.deleteItem(id);
        todoL.innerHTML = '';
        todoL.appendChild(TodoList.render());
    }


