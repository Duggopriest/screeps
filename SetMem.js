var SetMem =
{
    run: function () {
        for (var j = 0; j < 4; j++)
        {
            if(!Memory.OwnedRooms[j].Scanner)
            {
                Memory.OwnedRooms[j].Scanner = 'E';
            }
            if(!Game.creeps[Memory.OwnedRooms[j].Scanner])
            {
                Memory.OwnedRooms[j].Scanner = 'E';
            }
        }

        Memory.OwnedRooms = 
        {
            0:
            {
                Roomobj: Game.rooms['W6N1'],
                name: 'W6N1',
                Scanner: Memory.OwnedRooms[0].Scanner,
                Sources: Memory.OwnedRooms[0].Sources,
            },
            1:
            {
                Roomobj: Game.rooms['W6N2'],
                name: 'W6N2',
                Scanner: Memory.OwnedRooms[1].Scanner,
                Sources: Memory.OwnedRooms[1].Sources,
            },
            2:
            {
                Roomobj: Game.rooms['W7N1'],
                name: 'W7N1',
                Scanner: Memory.OwnedRooms[2].Scanner,
                Sources: Memory.OwnedRooms[2].Sources,
            },
            3:
            {
                Roomobj: Game.rooms['W7N2'],
                name: 'W7N2',
                Scanner: Memory.OwnedRooms[3].Scanner,
                Sources: Memory.OwnedRooms[3].Sources,
            }
        };
    },

    AddS: function (creep, NewId) {
        if (Memory.Sources.length != 0) {
            for (var i = 0; i < Memory.Sources.length; i++)
            {
                //console.log(Memory.Sources[i].id);
                if (Memory.Sources[i].id == NewId)
                {
                    return;
                }
            }
        }
        creep.say('New Sources');
        var n = Memory.Sources.length;
        n = 
        {
                id: NewId,
                room: creep.room.name,
                harvester: 'E',
        };
        Memory.Sources.push(n);
    }
};

module.exports = SetMem;