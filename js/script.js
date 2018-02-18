function Phone(brand, price, color, camera) {
	this.brand = brand;
	this.price = price;
	this.color = color;
	this.camera = camera; //dodany aparat
}
Phone.prototype.printInfo = function() {
		console.log("The phone brand is " + this.brand + " it has " + this.camera + " camera, the color is " + this.color + " and the price is " + this.price + "zł.");
}
var iPhone6S = new Phone("Apple", 2250, "silver", "12mp");
var GalaxyS6 = new Phone("Samsung", 999, "black", "16mp");
var One = new Phone("OnePlus", 1650, "silver", "13mp");