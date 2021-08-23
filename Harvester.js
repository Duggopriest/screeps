var Harvester =
{

    /** @param {Creep} creep **/
    run: function (creep) {
        if (creep) {
            var targetSource = Game.getObjectById(creep.memory.CMS);
            var harvesters = _.filter(Game.creeps, (creep) => creep.memory.role == 'harvester');

            if (creep.memory.CMS != 'noTarget') 
            {
                creep.moveTo(targetSource);
                creep.harvest(targetSource);
            }

            if (!Game.creeps[creep.memory.CTT])
            {
                creep.memory.CTT = 'single';
            }
            else
            {
                creep.transfer(Game.creeps[creep.memory.CTT], RESOURCE_ENERGY);
            }
        }
    }
};

module.exports = Harvester;