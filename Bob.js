var Bob =
{

    /** @param {Creep} creep **/
    run: function (creep) {
        if (creep) {
            var a = 0;
            var sources = creep.room.find(FIND_MY_CONSTRUCTION_SITES);
            var SortedSources = _.sortBy(sources, s => creep.pos.getRangeTo(s));
            var targetSource;
            var bobs = _.filter(Game.creeps, (creep) => creep.memory.role == 'bob');
            var cars = _.filter(Game.creeps, (creep) => creep.memory.role == 'car');

            for (var i = 0; i < bobs.length; i++) {
                targetSource = SortedSources[a];
                if (bobs[i].memory.CMS == targetSource.id && bobs[i].name != creep.name) {
                    i = 0;
                    a++;
                }
            }
            creep.memory.CMS = targetSource.id;
            var harvesters = _.filter(Game.creeps, (creep) => creep.memory.role == 'harvester'); //get a array of harvesters by looking at thier memory.role

            for (var name in Game.spawns) {
                var sp = Game.spawns[name];
                var EC = sp.energyCapacity;
                var CE = sp.energy;
            }
            
            var sourses = creep.room.find(FIND_SOURCES);

            if (creep.store.getFreeCapacity() == 50) {
                creep.memory.state = false;
            }
            else if (creep.store.getFreeCapacity() == 0 && (harvesters.length == sourses.length && cars.length == sourses.length)) {
                creep.memory.state = true;
            }

            if (creep.memory.state == true) {
                creep.moveTo(targetSource);
                creep.build(targetSource);
            }
            else if (creep.memory.state == false) {
                creep.moveTo(Game.spawns['Spawn1']);
                creep.withdraw(Game.spawns['Spawn1'], RESOURCE_ENERGY)
            }
        }
    }
};

module.exports = Bob;