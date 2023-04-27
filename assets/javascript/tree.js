var tree;
var max_dist = 50;
var min_dist = 5;
var max_depth = 0;

function setup() {
	createCanvas(800,600);

	frameRate(24);
	//noLoop();
	tree = new Tree();
}

function draw() {
	clear();
	
	background(0, 110, 70);
	tree.show();
	tree.grow();
}

function Tree() {
	this.leaves = [];
	this.branches = [];
	
	for(var i = 0; i < 300; i++) {
		this.leaves.push(new Leaf());
	}
	
	var pos = createVector(width/2, height);
	var dir = createVector(0, -1);
	var root = new Branch(null, pos, dir);
	
	this.branches.push(root);
	
	var current = root;
	var found = false;

	while (!found) {
		for (var i = 0; i < this.leaves.length; i++) {
			var d = p5.Vector.dist(current.pos, this.leaves[i].pos);
			if(d < max_dist) {
				found = true;
			}
		}
		
		if (!found) {
			var branch = current.next();
			current = branch;
			this.branches.push(branch);
		}
	}
	
	this.grow = function() {
		for (var i = 0; i < this.leaves.length; i++) {
			var leaf = this.leaves[i];
			
			var closestBranch = null;
			var record = 10000;
			
			for (var j = 0; j < this.branches.length; j++) {
				var branch = this.branches[j];
				var d = p5.Vector.dist(leaf.pos, branch.pos);
				if (d < min_dist) {
					leaf.reached = true;
					closestBranch = null;
					break;
				} else if (d > max_dist) {
					
				} else if (closestBranch == null || d < record) {
					closestBranch = branch;
					record = d;
				}
			}
			
			if (closestBranch != null) {
				var newDir = p5.Vector.sub(leaf.pos, closestBranch.pos);
				newDir.normalize();
				closestBranch.dir.add(newDir);
				closestBranch.count++;
				
			}
		
		}
		
		for (var i = this.leaves.length-1; i >= 0; i--) {
			if (this.leaves[i].reached) {
				this.leaves.splice(i, 1);
			}
		}
		
		for (var i = this.branches.length-1; i >= 0; i--) {
			var branch = this.branches[i];
			if (branch.count > 0) {
				branch.dir.div(branch.count + 1);
				this.branches.push(branch.next());
			}
			branch.reset();
		}
	}
	
	this.show = function() {
		for(var i = 0; i < this.leaves.length; i++) {
			this.leaves[i].show();
		}

		for(var i = 0; i < this.branches.length; i++) {
			this.branches[i].show();
		}
	}
}

function Leaf(){
	this.reached = false;
	
	var radius =  sqrt( random(0, pow( (width-100)/2, 2) ) );
	var angle = random(0, PI);
	this.pos = createVector((width/2)+radius*cos(angle), (height-150)-radius*sin(angle));
	
	this.show = function() {
		fill(255);
		noStroke();
		quad(this.pos.x, this.pos.y, this.pos.x+1, this.pos.y, this.pos.x+1, this.pos.y+1, this.pos.x, this.pos.y+1);
	}
}

function Branch(parent, pos, dir) {
	this.pos = pos;
	this.parent = parent;
	this.dir = dir;
	this.origDir = this.dir.copy();
	this.count = 0;
	this.length = 5;
	
	if (parent == null) {
		this.depth = 0;
	} else {
		this.depth = parent.depth + 0.5;
	}
	max_depth = max(this.depth, max_depth);
	

	this.reset = function() {
		this.dir = this.origDir.copy();
		this.count = 0;
	}
	
	this.next = function() {
		var nextDir = p5.Vector.mult(this.dir, this.length);
		var nextPos = p5.Vector.add(this.pos, nextDir);
		var nextBranch = new Branch(this, nextPos, this.dir.copy());
		
		return nextBranch;
	}
	
	this.show = function() {
		if (parent != null) {
			var width = (max_depth - this.depth) / max_depth * 10 + 0.5;
			strokeWeight(width);
			stroke(255);
			line(this.pos.x, this.pos.y, this.parent.pos.x, this.parent.pos.y);
		}
	}
}