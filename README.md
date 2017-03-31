# InFINiWars: Production

[InFINiWars live][githubpage]

[githubpage]: https://akashskysingh.github.io/InFINiWars/

InFINiWars is a javascript focused game. InFINiWars is at its core the game of Space Invaders. The original game is an arcade style, 1 player space-themed shooter. The player uses a ship, or token to destroy incoming waves of space invaders, either to complete a level and progress forward, or rack up a high score. This variation will change the enemy mechanic by making the player fight against an endless wave of enemies as they generate score. The player gets feedback the moment their ship is destroyed!

![image of Root page](/docs/doc/wireframes/fullpage.png)


## Features & Implementation

### Canvas Driven
At its core, InFINiWars is rendered on Canvas. Many intricate scripts come together to achieve the current status of InFINiWars. Collision detection as well as enemy wave generation, coupled with user interaction all drive the user experience. A player pilots a spacecraft to fight incoming enemies to no end. Inevitably, the purpose of the game is to see how long you can last, and brag to friends about your personal best.

![image of Canvas](/docs/doc/wireframes/canvas.png)


### Features
Just as explained above, high scores are the driving point for InFINiWars. A base counter with an event handler serves to tally overall successful enemy invader eliminations. Within this process, a user can restart the game from the beginning of the wave. Some of these features are placeholders for future updates.

![image of Right Panel](/docs/doc/wireframes/rightpanel.png)


## Future Directions for the Project

In addition to the features already implemented, I plan to continue work on this project.  The next steps for InFINiWars are outlined below.

### Addition of Sounds and Animations

I find the implementation of sound and animations absolutely necessary to add ambience to the overall user experience. By implementing `Sound.js` module and various animation sprites, I hope I can bring InFINiWars of entertainment.

### Level and Difficulty Progression

I plan to develop and implement an increasing difficulty and level progression meta in attempts to increase the challenge and longevity of InFINiWars. Just like any other game, by progressively increasing the difficulty of the enemies through various machinations, InFINiWars attractive qualities can rise as replay-ability substantially increases.

### Dynamic visuals

InFINiWars follows the overall design of **Space Invaders** of the past with some variations. The implementation of a dynamic visual model will take this project to the next step. The user will experience user interface and enemy changes over increasing levels.
