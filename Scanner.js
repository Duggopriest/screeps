var SetMeme = require('SetMem');
var Funs = require('fun');
var Scanner =
{
    /** @param {Creep} creep **/
    run: function (creep) {
        if (creep) 
        {
            if(creep.memory.targRm == 'E')
            {
                for (var j = 0; j < 4; j++)
                {
                    if (((Memory.OwnedRooms[j].Scanner == 'E' || !Memory.OwnedRooms[j].Scanner) && creep.memory.targRm == 'E') || Memory.OwnedRooms[j].Scanner == creep.name)
                    {
                        creep.memory.targRm = Memory.OwnedRooms[j].name;
                        Memory.OwnedRooms[j].Scanner = creep.name;
                        creep.say('f ' + Memory.OwnedRooms[j].name);
                        break;
                    }
                }
            }
            
            Funs.Move(creep, (42, 9));
            if (creep.room.name == creep.memory.targRm)
            {
                creep.moveTo(44, 9);
                var sour = creep.room.find(FIND_SOURCES);
                
                for (var j = 0; j < sour.length; j++)
                {
                    //console.log(sour[j].id);
                    SetMeme.AddS(creep, sour[j].id);
                }
            }

            //----------setting storage------------
            if(creep.room.name == 'W6N1')
            {
                Memory.Ext = creep.room.find(FIND_MY_STRUCTURES, {filter: (s) => { return (s.structureType == 'extension'); }});
            }
        }

        
    }
};
module.exports = Scanner;