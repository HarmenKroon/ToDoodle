//var voegToe = function doFunction();
//var ToDo = [];
//document.getElementById("newToDoId").onclick = doFunction {
// var todo = (document.getElementById("nameId"), document.getElementById("descId"), document.getElementById("timeId"), document.getElementById("priorityId"));
//ToDo.add(todo);
//}




var text = document.getElementById("nameId");
var desc = document.getElementById("descId");
var date = document.getElementById("dateId");
var time = document.getElementById("timeId");
var prior = document.getElementById("priorityId");

function ToDo(Text) {
	this.Text = Text;
	//this.Desc = Desc;
	//this.Date = Date;
	//this.Time = Time;
	//this.Prior = Prior;

	this.setText = function(t) {this.Text = t};
	//this.getDesc = function() {return this.Desc};
	//this.getDate = function() {return this.Date};
	//this.getTime = function() {return this.Time};
	//this.getPrior = function() {return this.Prior};

	this.toString = function( ) {
		return "Haai " + this.Text + "einde."	};
	}

var todo1 = new ToDo("hallo" );
confirm( todo1.toString() ); 


