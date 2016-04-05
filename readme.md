# AngularJS Bee Game

### The Bee Game Rules

There is only one **Queen Bee**.
- The Queen Bee has a lifespan of **100 Points**. When hit **8 Points** are deducted from her lifespan
- If the Queen Bee runs out of points, all remaining bees automatically run out of points and the game ends

There are five **Worker Bees**.
- Each Worker Bee has a lifespan of **75 Points**. When hit **10 Points** are deducted from a Worker bee's lifespan

There are eight **Drone Bees**.
- Each Drone Bee has a lifespan of **50 Points**. When hit **12 Points** are deducted from a Drone bee's lifespan

### Application files structure

    app/                    --> Files used in production
      css/                  --> CSS folder
       master.css           --> Default stylesheet compiled from master.scss
       vendor/
         bootstrap.css
      js/                   --> Javascript folder
       controllers.js       --> Contains the Bee Game controller
       vendor/
         AngularJS
      sass/                 --> SASS folder
        master.scss         --> Main SASS file
      index.html            --> Index file, the Bee Game template



