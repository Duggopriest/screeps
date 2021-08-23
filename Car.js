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
                    console.log('Found a partner!');
                    harvesters[i].memory.CTT = creep.name;
                    creep.memory.Following = harvesters[i].name;
                    break;
                }
            }
        }

        if (!Game.creeps[creep.memory.Following]) {
            creep.memory.Following = 'single';
        }


        var ext = creep.room.find(FIND_MY_STRUCTURES, {filter: (s) => { return (s.structureType == 'extension'); }});
        //console.log(ext[0].store.getUsedCapacity(RESOURCE_ENERGY));
        //console.log(Game.spawns['Spawn1'].store.getUsedCapacity(RESOURCE_ENERGY));
        //structure.store.getFreeCapacity(RESOURCE_ENERGY) > 0
        
        if (Game.spawns['Spawn1'].store.getUsedCapacity(RESOURCE_ENERGY) == 300)
        {
            for (var i = 0; i < harvesters.length; i++) {
                if(ext[i].store.getUsedCapacity(RESOURCE_ENERGY) != 50)
                {
                    targetStorage = ext[i];
                    break;
                }
            }
        }
        else
        {
            targetStorage = Game.spawns['Spawn1'];
        }

        if (creep.store.getFreeCapacity() != 0 || creep.memory.Following == 'single') {
            creep.moveTo(Game.creeps[creep.memory.Following]);
        }
        else {
            creep.moveTo(targetStorage);
            creep.transfer(targetStorage, RESOURCE_ENERGY);
        }

    }
};

module.exports = Car;