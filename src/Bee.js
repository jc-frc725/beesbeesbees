var Bee = function() {
  // use invoke .call on Grub, passing in Bee object itself
  // keyword new invisibly writes this = Object.create('something'),
  // thus .call(this) refers to newly made instance of 'something'
  Grub.call(this);
  this.age = 5;
  this.color = 'yellow';
  this.job = 'keep on growing';
};

// Set up Bee's prototype to delegate all calls to 'Car' methods to Car's prototype
Bee.prototype = Object.create(Grub.prototype);

// Set up Bee's constructor, delegates all calls to a constructor from 'Bee' instances to
// this newly-made constructor property
Bee.prototype.constructor = Bee;


