var fun = require('fun');

var Spawner =
{
    SpawnHarvester: function() 
    {
        var harvesters = _.filter(Game.creeps, (creep) => creep.memory.role == 'harvester'); //get a array of harvesters by looking at thier memory.role
        var a = 1;
        var newName = 'H' + a; //making a name
        for (var i = 0; i < harvesters.length; i++)
        {
            //console.log(newName + ' ' + harvesters[i].name)
            if (harvesters[i].name == newName)
            {
                var newName = 'H' + (harvesters.length + Math.floor((Math.random() * 10)));
                a++;
                i = 0;
            }
        }
        for (var i = 0; i < Memory.Sources.length; i++) {
            if(Memory.Sources[i].harvester == 'E' || !Memory.Sources[i].harvester)
            {
                a = i;
                break;
            }
        }
        if  (fun.GTECur() <= 300 && fun.GTECur() < 400)
        {
            Game.spawns['Spawn1'].spawnCreep([WORK,CARRY,CARRY,MOVE], newName, 
                {
                    memory:
                    {
                        role: 'harvester',
                        CMS: Memory.Sources[a].id,
                        CTT: 'single',
                        targRm: Memory.Sources[a].room,
                    }
                }
            );// gets the name of a spawn and does .spawn creep and attaches parts to it as well as a name and inserts memory.role
            Memory.Sources[a].harvester = Game.creeps[newName];
        }
        else
        {
            Game.spawns['Spawn1'].spawnCreep([WORK,WORK,CARRY,CARRY,MOVE], newName, 
                {
                    memory:
                    {
                        role: 'harvester',
                        CMS: Memory.Sources[a].id,
                        CTT: 'single',
                        targRm: Memory.Sources[a].room,
                        St: 'M',
                    }
                }
            );// gets the name of a spawn and does .spawn creep and attaches parts to it as well as a name and inserts memory.role
            Memory.Sources[a].harvester = Game.creeps[newName];
        }
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
                newName = 'C' + (cars.length + a + Math.floor((Math.random() * 10)));
                a++;
                i = 0;
            }
        }
        if(fun.GTECur() >= 300)
        {
            Game.spawns['Spawn1'].spawnCreep([CARRY,CARRY,CARRY,MOVE,MOVE,MOVE], newName, 
            {
                memory:
                {
                    role: 'car',
                    Following: 'single',
                    targRm: 'E'
                }
            }
        );
        }
        else 
        {
            Game.spawns['Spawn1'].spawnCreep([CARRY,CARRY,CARRY,CARRY,CARRY,MOVE,MOVE,MOVE,MOVE,MOVE], newName, 
                {
                    memory:
                    {
                        role: 'car',
                        Following: 'single',
                        targRm: 'E'
                    }
                }
            );
        }
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
                var newName = 'B' + (bobs.length + Math.floor((Math.random() * 10)))
                i = 0;
            }
        }   
        Game.spawns['Spawn1'].spawnCreep([WORK,CARRY,CARRY,CARRY,MOVE,MOVE,MOVE], newName, 
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
                var newName = 'R' + (reps.length + Math.floor((Math.random() * 10)))
                i = 0;
            }
        }
        if(fun.GTECur() < 310)
        {
            Game.spawns['Spawn1'].spawnCreep([WORK,CARRY,CARRY,MOVE,MOVE], newName, 
                {
                    memory:
                    {
                        role: 'rep',
                        state: false,
                        CMS: 'noTarget'
                    }
                }
            );
        }
        else
        {
            Game.spawns['Spawn1'].spawnCreep([WORK,CARRY,CARRY,CARRY,MOVE,MOVE,MOVE], newName, 
                {
                    memory:
                    {
                        role: 'rep',
                        state: false,
                        CMS: 'noTarget'
                    }
                }
            );
        }
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
        Game.spawns['Spawn1'].spawnCreep([WORK,CARRY,CARRY,MOVE,MOVE], newName, 
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
                var newName = 'RM' + (RM.length + Math.floor((Math.random() * 10)))
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
        var scan = _.filter(Game.creeps, (creep) => creep.memory.role == 'scanners');
        var newName = 'S' + (scan.length + 1);
        for (var i = 0; i < (scan.length); i++)
        {
            if (scan[i].name == newName)
            {
                newName = 'S' + (scan.length + Math.floor((Math.random() * 10)))
                a += 2;
                i = 0;
            }
        }  
        Game.spawns['Spawn1'].spawnCreep([MOVE], newName, 
            {
                memory:
                {
                    role: 'scanners',
                    targRm: 'E',
                }
            }
        );
    },
};

module.exports = Spawner;