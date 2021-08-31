var fun =
{
    CSH: function ()
    {
        for (var i = 0; i < Memory.Sources.length; i++)
        {
            if (Memory.Sources[i].harvester) {
                if(!Game.creeps[Memory.Sources[i].harvester.name] && Memory.Sources[i].harvester != 'E')
                {
                    console.log(Memory.Sources[i].harvester + '  setting to E of ' + Memory.Sources[i].id);
                    Memory.Sources[i].harvester = 'E';
                }
            }
        }
    },

    GTECap: function ()
    {
        var Total = 0;
        for (var i = 0; i < Memory.Ext.length; i++)
        {
            Total   += Memory.Ext[i].energyCapacity;
        }
        Total   += Game.spawns['Spawn1'].store.getCapacity(RESOURCE_ENERGY);
        //console.log(Total);
        return Total;
    },
    GTECur: function ()
    {
        var Current = 0;
        for (var i = 0; i < Memory.Ext.length; i++)
        {
            Current += Memory.Ext[i].energy;
        }
        Current += Game.spawns['Spawn1'].store.getUsedCapacity(RESOURCE_ENERGY);
        //console.log(Current);
        return Current;
    }, //energyCapacityAvailablenumber

    ClosestExt: function (creep)
    {
        var a = false;
        var ext = creep.room.find(FIND_MY_STRUCTURES, {filter: (s) => { return (s.structureType == 'extension'); }});
        for (var i = 0; i < ext.length; i++)
        {
            if(ext[i].store.getUsedCapacity(RESOURCE_ENERGY) != 50)
            {
                return ext[i];
            }
        }
        return a;
    },
    ClosestSto: function (creep)
    {
        var a = false;
        var ext = creep.room.find(FIND_STRUCTURES, {filter: (s) => { return (s.structureType == STRUCTURE_CONTAINER) }});
        for (var i = 0; i < ext.length; i++)
        {
            if(ext[i].store.getUsedCapacity(RESOURCE_ENERGY) != 50)
            {
                return ext[i];
            }
        }
        return a;
    },

    MoveAwayFromEdge: function(pos, creep) {
        var x = pos.x;
        var y = pos.y;
        if (pos.x == 0) {
          x = 1;
        }
        if (pos.x == 49) {
          x = 48;
        }
        if (pos.y == 0) {
          y = 1;
        }
        if (pos.y == 49) { 
          y = 48;
        }
        //creep.say('moving away');
        creep.moveTo(x, y);
    },
    nextStepIntoRoom: function(pos, nextRoom) {
        var x = pos.x;
        var y= pos.y;
        if (pos.x == 0) {
            x = 48;
        }
        if (pos.x == 49) {
            x = 1;
        }
        if (pos.y == 0) {
            y = 48;
        }
        if (pos.y == 49) { 
            y = 1;
        }
        return new RoomPosition(x,y,nextRoom);
    },

    Move: function (creep, target) {
        //console.log(creep.name + '  ' + creep.memory.lastroom + 'l t' + creep.memory.targRm);
        /*if (creep.room.name != creep.memory.lastroom)
        {
            fun.MoveAwayFromEdge(creep.pos, creep);
        }
        else */if (creep.room.name == creep.memory.targRm)
        {
            fun.MoveAwayFromEdge(creep.pos, creep);
            creep.moveTo(target);
        }
        else// if (creep.memory.targRm != 'E' && creep.room.name != creep.memory.targRm)
        {
            /*
            //creep.say('mov ' + creep.memory.targRm);
            var exit = creep.room.findExitTo(creep.memory.targRm);
            creep.moveTo(creep.pos.findClosestByRange(exit));
            */
            var route = Game.map.findRoute(creep.room, creep.memory.targRm);
            if (route.length > 0) 
            {
                var exit = creep.pos.findClosestByRange(route[0].exit);
                if (exit != null) 
                {
                    if (creep.pos.x == exit.x && creep.pos.y == exit.y) 
                    {
                        var nextStep = this.nextStepIntoRoom(creep.pos, creep.memory.targRm);
                        creep.moveTo(nextStep);
                    } 
                    else 
                    {
                        creep.moveTo(exit);
                    }
                }
            }
        }
        //creep.memory.lastroom = creep.room.name;
    },

    ClearH: function () {
        if (Memory.Sources.length != 0) {
            for (var i = 0; i < Memory.Sources.length; i++)
            {
                if (Memory.Sources[i].harvester)
                {
                    if (Memory.Sources[i].harvester != 'E' && (!Game.creeps[Memory.Sources[i].harvester.name] || Game.creeps[Memory.Sources[i].harvester.name].memory.CMS != Memory.Sources[i].id))
                    {
                        console.log(Memory.Sources[i].harvester.name + ' clearing from ' + Memory.Sources[i].id);
                        Memory.Sources[i].harvester = 'E';
                    }
                }            
            }
        }
    },

    DropedEne: function () {
        var energy = creep.room.find(
            FIND_DROPPED_ENERGY,
            1
        );
    },


};
module.exports = fun;