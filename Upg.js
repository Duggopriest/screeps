var fun = require('fun');
var Upg =
{

    /** @param {Creep} creep **/
    run: function (creep) {
        if (creep) {
            var a = 0;
            //var sources = creep.room.find(FIND_MY_STRUCTURES);
            //var SortedSources = _.sortBy(sources, s => creep.pos.getRangeTo(s));
            var targetSource = Game.getObjectById('cf030773144fccf');
            //console.log(targetSource);

            for (var name in Game.spawns) {
                var sp = Game.spawns[name];
                var EC = sp.energyCapacity;
                var CE = sp.energy;
            }

            if (creep.store.getFreeCapacity() == 50) {
                creep.memory.state = false;
            }
            else if (creep.store.getFreeCapacity() == 0) {
                creep.memory.state = true;
            }
            if (creep.memory.state == true) {
                creep.moveTo(targetSource);
                creep.upgradeController(targetSource)
            }
            else if (creep.memory.state == false) {
                creep.moveTo(fun.ClosestSto(creep));
                creep.withdraw(fun.ClosestSto(creep), RESOURCE_ENERGY);
            }
        }

    }
};

module.exports = Upg;