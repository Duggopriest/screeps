var Funs = require('fun');
var Car =
{

    /** @param {Creep} creep **/
    run: function (creep) {

        var sources = creep.room.find(FIND_MY_SPAWNS); //creep.pos.findClosestByRange(FIND_ACTIVE_SOURCES)
        var SortedSpawns = _.sortBy(sources, s => creep.pos.getRangeTo(s));
        var harvesters = _.filter(Game.creeps, (creep) => creep.memory.role == 'harvester');
        var targetStorage;
        if (creep.memory.Following == 'single') {
            var harvesters = _.filter(Game.creeps, (creep) => creep.memory.role == 'harvester');
            for (var i = 0; i < harvesters.length; i++) {
                if (harvesters[i].memory.CTT == 'single' || harvesters[i].memory.CTT == creep.name) {
                    creep.say('Found a partner!');
                    harvesters[i].memory.CTT = creep.name;
                    creep.memory.Following = harvesters[i].name;
                    break;
                }
            }
        }

        if (!Game.creeps[creep.memory.Following]) {
            creep.memory.Following = 'single';
        }

        //var ext = creep.room.find(FIND_MY_STRUCTURES, {filter: (s) => { return (s.structureType == 'extension'); }});
        //console.log(ext[0].store.getUsedCapacity(RESOURCE_ENERGY));
        //console.log(Game.spawns['Spawn1'].store.getUsedCapacity(RESOURCE_ENERGY));
        //structure.store.getFreeCapacity(RESOURCE_ENERGY) > 0
        //console.log(creep.room + '  ' + Game.spawns['Spawn1'].room);
        if (Game.spawns['Spawn1'].store.getUsedCapacity(RESOURCE_ENERGY) == 300 && creep.room == Game.spawns['Spawn1'].room)
        {
            targetStorage = Funs.ClosestExt(creep);
        }
        else
        {
            targetStorage = Game.spawns['Spawn1'];
        }

        if (targetStorage == false)
        {
            targetStorage = Funs.ClosestSto(creep);
        }

        if (creep.store.getUsedCapacity() == 0 && creep.memory.Following != 'single' && Game.creeps[creep.memory.Following].memory.St != 'M') 
        {
            creep.memory.targRm = Game.creeps[creep.memory.Following].room.name;
            Funs.Move(creep, Game.creeps[creep.memory.Following]);
        }
        else if (targetStorage != false) {
            //creep.say('storing');
            creep.memory.targRm = Game.spawns['Spawn1'].room.name;
            Funs.Move(creep, targetStorage);
            creep.transfer(targetStorage, RESOURCE_ENERGY);
        }

    }
};

module.exports = Car;