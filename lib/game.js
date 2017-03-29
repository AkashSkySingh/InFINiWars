const canvas = document.getElementById("infiniwars");

const screen = canvas.getContext('2d');

const gameSize = { x: canvas.width, y: canvas.height };

const gameSize = { x: canvas.width, y: canvas.height };

this.bodies = [];

this.bodies = this.bodies.concat(createInvaders(this));

this.bodies = this.bodies.concat(new Player(this, gameSize));

this.shootSound = document.getElementById('fire');
