// how you configure your game - many options
/*var config = {
    // Phaser.CANVAS || Phaser.WEBGL || Phaser.AUTO
        type: Phaser.AUTO,

    // width and height set the size of the canvas element
        width: 800,
        height: 600,

    // -- explained later
        scene: {
            preload: preload,
            create: create,
            update: update
        }
    };
    */
var config = {
    type: Phaser.AUTO,
    width: 800,
    height: 600,
    physics: {
        default: 'arcade',
        arcade: {
            gravity: { y: 0 },
            debug: false
        }
    },
    scene: {
        preload: preload,
        create: create,
        update: update
    }
};

var ship;
var cursors;
// configuration is passed into the Game obj this will start the process of bring the game to life
var game = new Phaser.Game(config);
// load assets by using the scene function preload. phaser will automatically look for this function when it starts and load anything defined within it.
function preload ()
{
    this.load.image('sky', 'assets/download.png');
    this.load.spritesheet('ship', 
        'assets/sprite7.png',
        { frameWidth: 64, frameHeight: 48 }
    );

}

function create ()
{
    this.add.image(400, 300, 'sky');

    ship = this.physics.add.sprite(100, 450, 'ship');

    ship.setBounce(0.2);
    ship.setCollideWorldBounds(true);
    ship = new Ship(ship, 100, 450, 1, 0);
}

function update ()
{
    cursors = this.input.keyboard.createCursorKeys();
    let left, right, up, down = false
    if (cursors.left.isDown) {
        left = true;
    } else if (cursors.right.isDown) {
        right = true;
    }

    if (cursors.down.isDown) {
        down = true
    } else if (cursors.up.isDown) {
        up = true
    }
    ship.update(false, false, up, down, right, left, false, false);
}
