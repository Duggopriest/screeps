var fun = require('fun');
var Rep =
{

    /** @param {Creep} creep **/
    run: function (creep) {
        if (creep) {
            var a = 0;
            var sources = creep.room.find(FIND_STRUCTURES, { filter: (structure) => structure.hits < (structure.hitsMax) });
            //console.log(sources[0].id);
            var SortedSources = _.sortBy(sources, s => creep.pos.getRangeTo(s));
            var targetSource;
            //var reps = _.filter(Game.creeps, (creep) => creep.memory.role == 'rep');
            targetSource = SortedSources[0];
            /*
            for (var i = 0; i < reps.length; i++) {
                targetSource = SortedSources[a];
                if (reps[i].memory.CMS == targetSource.id && reps[i].name != creep.name) {
                    i = 0;
                    a++;
                }
            }*/
            creep.memory.CMS = targetSource.id;
            
            if (creep.store.getUsedCapacity() == 0) {
                creep.memory.state = false;
            }
            else if (creep.store.getUsedCapacity() >= creep.store.getCapacity()) {
                creep.memory.state = true;
            }
            
            if (creep.memory.state == true) 
            {
                creep.moveTo(targetSource);
                creep.repair(targetSource);
                creep.say('rep');
            }
            else if (creep.memory.state == false) {
                creep.moveTo(fun.ClosestSto(creep));
                creep.withdraw(fun.ClosestSto(creep), RESOURCE_ENERGY);
            }
        }

    }
};

module.exports = Rep;