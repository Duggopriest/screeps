var Harv = require('Harvester');
var Car = require('Car');

var Spawner =
{
    SpawnHarvester: function() 
    {
        var harvesters = _.filter(Game.creeps, (creep) => creep.memory.role == 'harvester'); //get a array of harvesters by looking at thier memory.role
        var a = 1;
        var newName = 'H' + a; //making a name
        for (var i = 0; i < harvesters.length; i++)
        {
            console.log(newName + ' ' + harvesters[i].name)
            if (harvesters[i].name == newName)
            {
                var newName = 'H' + (harvesters.length + a);
                a++;
                i = 0;
            }
        }
        //console.log('Spawning H');
        Game.spawns['Spawn1'].spawnCreep([WORK,CARRY,CARRY,MOVE], newName, 
            {
                memory:
                {
                    role: 'harvester',
                    CMS: 'noTarget',
                    CTT: 'single',
                }
            }
        );// gets the name of a spawn and does .spawn creep and attaches parts to it as well as a name and inserts memory.role
    },

    SpawnCar: function() 
    {
        var a = 1;
        var cars = _.filter(Game.creeps, (creep) => creep.memory.role == 'car');
        var newName = 'C' + (cars.length + 1);
        for (var i = 0; i < cars.length; i++)
        {
            if (cars[i].name == newName)
            {
                var newName = 'C' + (cars.length + a);
                a++;
                i = 0;
            }
        }  
        //console.log('Spawning C');
        Game.spawns['Spawn1'].spawnCreep([CARRY,CARRY,CARRY,MOVE,MOVE,MOVE], newName, 
            {
                memory:
                {
                    role: 'car',
                    Following: 'single'
                }
            }
        );
    },

    SpawnBob: function() 
    {
        var a = 1;
        var bobs = _.filter(Game.creeps, (creep) => creep.memory.role == 'bob');
        var newName = 'B' + (bobs.length + 1);
        for (var i = 0; i < bobs.length; i++)
        {
            if (bobs[i].name == newName)
            {
                var newName = 'B' + (bobs.length + (a + 1))
                i = 0;
            }
        }   
        Game.spawns['Spawn1'].spawnCreep([WORK,WORK,CARRY,MOVE], newName, 
            {
                memory:
                {
                    role: 'bob',
                    state: false,
                    CMS: 'noTarget'
                }
            }
        );
    },
    SpawnRep: function() 
    {
        var a = 1;
        var reps = _.filter(Game.creeps, (creep) => creep.memory.role == 'rep');
        var newName = 'R' + (reps.length + 1);
        for (var i = 0; i < reps.length; i++)
        {
            if (reps[i].name == newName)
            {
                var newName = 'R' + (reps.length + (a + 1))
                i = 0;
            }
        }   
        Game.spawns['Spawn1'].spawnCreep([WORK,WORK,CARRY,MOVE], newName, 
            {
                memory:
                {
                    role: 'rep',
                    state: false,
                    CMS: 'noTarget'
                }
            }
        );
    },
    SpawnUpg: function() 
    {
        var a = 1;
        var upgs = _.filter(Game.creeps, (creep) => creep.memory.role == 'upg');
        var newName = 'U' + (upgs.length + 1);
        for (var i = 0; i < upgs.length; i++)
        {
            if (upgs[i].name == newName)
            {
                var newName = 'U' + (upgs.length + (a + 1))
                i = 0;
            }
        }   
        Game.spawns['Spawn1'].spawnCreep([WORK,CARRY,MOVE,MOVE], newName, 
            {
                memory:
                {
                    role: 'upg',
                    state: false,
                    CMS: 'noTarget'
                }
            }
        );
    },
    SpawnRM: function() 
    {
        var a = 1;
        var RM = _.filter(Game.creeps, (creep) => creep.memory.role == 'RM');
        var newName = 'RM' + (RM.length + 1);
        for (var i = 0; i < RM.length; i++)
        {
            if (RM[i].name == newName)
            {
                var newName = 'RM' + (RM.length + (a + 1))
                i = 0;
            }
        }   
        Game.spawns['Spawn1'].spawnCreep([MOVE], newName, 
            {
                memory:
                {
                    role: 'RM',
                    state: false,
                    Sources: 'E',
                    Harvesters: 'E',
                }
            }
        );
    },
    SpawnScanner: function() 
    {
        var a = 1;
        var scanners = _.filter(Game.creeps, (creep) => creep.memory.role == 'Scanner');
        var newName = 'Scanner' + (RM.length + 1);
        for (var i = 0; i < scanners.length; i++)
        {
            if (scanners[i].name == newName)
            {
                var newName = 'Scanner' + (scanners.length + (a + 1))
                i = 0;
            }
        }   
        Game.spawns['Spawn1'].spawnCreep([MOVE], newName, 
            {
                memory:
                {
                    role: 'scanners',
                    state: false,
                    Sources: 'E',
                    Harvesters: 'E',
                    targRm: 'E',
                }
            }
        );
    },
};

module.exports = Spawner;