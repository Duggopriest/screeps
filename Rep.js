var Rep =
{

    /** @param {Creep} creep **/
    run: function (creep) {
        if (creep) {
            var a = 0;
            var sources = creep.room.find(FIND_MY_STRUCTURES, {
                filter: (s) => { return (s.hits > 500); }});
            var SortedSources = _.sortBy(sources, s => creep.pos.getRangeTo(s));
            //var SortedSources = creep.pos.findClosestByRange();
            var targetSource;
            var reps = _.filter(Game.creeps, (creep) => creep.memory.role == 'rep');

            for (var i = 0; i < reps.length; i++) {
                targetSource = SortedSources[a];
                if (reps[i].memory.CMS == targetSource.id && reps[i].name != creep.name) {
                    i = 0;
                    a++;
                }
            }
            creep.memory.CMS = targetSource.id;
            var harvesters = _.filter(Game.creeps, (creep) => creep.memory.role == 'harvester'); //get a array of harvesters by looking at thier memory.role
            var cars = _.filter(Game.creeps, (creep) => creep.memory.role == 'car');
            var bobs = _.filter(Game.creeps, (creep) => creep.memory.role == 'bob');

            for (var name in Game.spawns) {
                var sp = Game.spawns[name];
                var EC = sp.energyCapacity;
                var CE = sp.energy;
            }

            if (creep.store.getFreeCapacity() == 50) {
                creep.memory.state = false;
            }
            else if (creep.store.getFreeCapacity() == 0 && (harvesters.length >= 1 && cars.length >= 1)) {
                creep.memory.state = true;
            }

            if (creep.memory.state == true) {
                creep.moveTo(targetSource);
                creep.build(targetSource)
            }
            else if (creep.memory.state == false) {
                creep.moveTo(Game.spawns['Spawn1']);
                creep.withdraw(Game.spawns['Spawn1'], RESOURCE_ENERGY)
            }
        }

    }
};

module.exports = Rep;