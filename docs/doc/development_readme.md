## InFINiWars: Space Invader Variation

### Background

InFINiWars is at its core the game of **Space Invaders**.  The original game is an arcade style, 1 player space-themed shooter.  The player uses a ship, or token to destroy incoming waves of space invaders, either to complete a level and progress forward, or rack up a high score. This variation will change the enemy mechanic by making the player fight against an endless wave of enemies as they generate score. The player gets feedback the moment their ship is destroyed!

In future developments, I plan to bring **Space Invaders** into the modern era by:

1. An increase in difficulty by speed and wave intervals,
2. Limiting the user on ammo as they progress level to level,
3. Eventually, requiring a player to combo attacks to win.

There are many variations on the **Space Invaders**.  This simulation will incorporate several of those variations, outlined in the **Functionality & MVP** and **Bonus Features** sections.

### Functionality & MVP

With this **Space Invaders** simulator, users will be able to:

- [x] Restart the game board
- [x] Move "spacecraft" and fire at enemies
- [x] "Invaders" which move towards "spacecraft"
- [x] See their score

In addition, this project will include:

- [x] A production Readme

### Wireframes

This app will consist of a single screen with game canvas, game controls, and nav links to the Github, my LinkedIn, and the About modal.  Game controls will include Start, Reset, and mute buttons.  On the left, there will be lore about the game, as well as the movement schema.  On the right, there will be a live feed for user progress, as well as the button overlay for features mentioned above.  Additionally, the game will have a modal  appear prompting to continue game.

![wireframes](./doc/wireframes/InFINiWars.png)

### Architecture and Technologies

This project will be implemented with the following technologies:

- Vanilla JavaScript and `jquery` for overall structure and game logic,
- `Easel.js` with `HTML5 Canvas` for DOM manipulation and rendering,
- `Sound.js` to handle sound rendering on collisions, and
- Webpack to bundle and serve up the various scripts.

In addition to the webpack entry file, there will be six scripts involved in this project:

`Game.js`: this script will handle the logic for creating and updating the necessary `Easel.js` and `Canvas.js` elements and rendering them to the DOM.

`Game_view.js`: this script will handle the keybinding actions of relevant objects and the animation cycle of the game itself.

`Spacecraft.js`: this script will handle the logic behind the scenes.  A Spacecraft object will use a Projectile and its own movement scheme.

`Invader.js`: this script will be the enemy object displayed on render and their related actions. An Invader will also use Projectile and its own movement scheme.

`Projectile.js`: this script is the projectile or bullet being shot out of enemies and spacecraft. This will be bound to movements and/or actions done by Spacecraft.

`Moving_object.js`: this script will handle the movement schema for all following objects which extend to this module. Will also handle object collision.

`Game_status.js`: this script  will house the necessary variables to provide feedback to user, as well as the prompts for game play.

`Util.js`: this script will handle the calculations for distance guessing and checking between various objects rendered on DOM.

### Implementation Timeline

**Day 1**: Setup all necessary Node modules, including getting webpack up and running and `Easel.js` installed.  Create `webpack.config.js` as well as `package.json`.  Write a basic entry file and the bare bones of all 4 scripts outlined above.  Learn the basics of `Easel.js`.  Goals for the day:

- Get a green bundle with `webpack`
- Learn enough `Easel.js` to render an object to the `Canvas` element

**Day 2**: Dedicate this day to learning the `Easel.js` API.  First, build out the various `Canvas` related objects.  Then, render at least one form of game to test general layout of game status. One working level should allow for bug testing of overall code. Goals for the day:

- Complete the base game rendering logic
- Begin styling and work on game state storage
- Get at least one working level with starting parameters

**Day 3**: Create the remaining parameters to the game. Complete styling of `Game` with working sound experience and functionality. Goals are to:

- Verify sound functions as intended
- Verify button, modal prompt, and game functionality
- Verify natural game progression for better user experience

**Day 4**: Finish styling and bug testing. Verify potential errors and design flaws for rapid improvement. Find a natural limit for game progression.


### Bonus features

There are many directions this **Space Invaders** replica could eventually go.  Some anticipated updates are:

- [ ] Have sounds accompanying actions and visuals
- [ ] A progress/level modal allowing the user move amp  up the difficulty/progress
- [ ] Get realtime feedback for scores and wave clears
- [ ] Increasing movement and fire-back rate from "Invaders"
- [ ] Add options for different modes and player-limitations
- [ ] Introduce dynamic canvas schemes from retro to modern
