var Scanner =
{
    /** @param {Creep} creep **/
    run: function (creep) {
        if (creep) {
            Memory.Sources          = creep.room.find(FIND_SOURCES);
            creep.memory.Harvesters = _.filter(Game.creeps, (creep) => creep.memory.role == 'harvester', (creep) => creep.memory.CMS == 'noTarget');

            if (Memory.OwnedRooms.W6N1.Scanner == 'E')
            {
                Memory.OwnedRooms.W6N1.Scanner = creep;
                creep.memory.targRm = Memory.OwnedRooms.W6N1;
            }
            else if (Memory.OwnedRooms.W7N1.Scanner == 'E')
            {
                Memory.OwnedRooms.W7N1.Scanner = creep;
                creep.memory.targRm = Memory.OwnedRooms.W7N1;
            }

            if (creep.room.name != creep.memory.targRm)
            {
                var exit = creep.room.findExitTo(creep.memory.targRm);

                creep.moveTo(creep.pos.findClosestByRange(exit));
            }
        }

        
    }
};
module.exports = Scanner;