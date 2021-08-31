var Funs = require('fun');
var Harvester = {
    /** @param {Creep} creep **/
    run: function (creep) 
    {
        if (creep) 
        {
            var targetSource = Game.getObjectById(creep.memory.CMS);
            //creep.say(creep.pos.getRangeTo(targetSource));
            if (creep.pos.getRangeTo(targetSource) > 1)
            {
                Funs.Move(creep, targetSource);
                creep.memory.St = 'M';
            }
            else
            {
                creep.memory.St = 'H';
                creep.harvest(targetSource);
                if (!Game.creeps[creep.memory.CTT])
                    creep.memory.CTT = 'single';
                else
                    creep.transfer(Game.creeps[creep.memory.CTT], RESOURCE_ENERGY);
            }
        }
    }
};
module.exports = Harvester;