function Point(radius,theta) {
	this.radius = radius;
	this.theta = theta;
}

Point.prototype.toPolar = function() {
	this.radius = Math.sqrt(this.x*this.x+this.y*this.y);
	this.theta = Math.atan(this.y/this.x);
}

Point.prototype.toCartesian = function() {
	this.x = this.radius*Math.cos(this.theta);
	this.y = this.radius*Math.sin(this.theta);
}

// origin is the point we rotate around, point is what we are moving, angle is by how many degrees
Point.prototype.rotateAround = function(origin,point,angle) {
	angle = angle * (Math.PI/180);
	this.x = Math.cos(angle)*(point.x-origin.x)-Math.sin(angle)*(point.y-origin.y)+origin.x;
	this.y = Math.sin(angle)*(point.x-origin.x)-Math.cos(angle)*(point.y-origin.y)+origin.y;
}

module.exports = Point;