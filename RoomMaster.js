var Spawner = require('Spawner');
var RoomMaster =

{

    /** @param {Creep} creep **/
    run: function (creep) {
        if (creep) {
            var sor                 = creep.room.find(FIND_SOURCES);
            var car                 = _.filter(Game.creeps, (creep) => creep.memory.role == 'car');
            var bobs                = _.filter(Game.creeps, (creep) => creep.memory.role == 'bob');
            var upgs                = _.filter(Game.creeps, (creep) => creep.memory.role == 'upg');
            var reps                = _.filter(Game.creeps, (creep) => creep.memory.role == 'rep');
            var harvesters          = _.filter(Game.creeps, (creep) => creep.memory.role == 'harvester');
            var scanners            = _.filter(Game.creeps, (creep) => creep.memory.role == 'scanners');
            var EmptyScanners       = _.filter(Game.creeps, (creep) => creep.memory.role == 'scanners', (creep) => creep.memory.CMS == 'E');
            creep.memory.Sources    = creep.room.find(FIND_SOURCES);
            creep.memory.Harvesters = _.filter(Game.creeps, (creep) => creep.memory.role == 'harvester', (creep) => creep.memory.CMS == 'noTarget');
            var struct              = creep.room.find(FIND_MY_STRUCTURES);
            var conSights           = creep.room.find(FIND_MY_CONSTRUCTION_SITES);

            //console.log(creep.memory.Sources.length);
            for (var i = 0; i < creep.memory.Sources.length; i++) {
                if (creep.memory.Harvesters[i] && creep.memory.Harvesters[i].memory.CMS == 'noTarget')
                {
                    creep.memory.Harvesters[0].memory.CMS = creep.memory.Sources[i].id;
                }
            }

            /*
            for (var i = 0; i <  Memory.OwnedRooms.length; i++) {
                if (Game.rooms[Memory.OwnedRooms[i]] && EmptyScanners[0])
                {
                    creep.memory.Harvesters[i].memory.CMS = creep.memory.Sources[i].id;
                }
            }
            if(scanners.length < Memory.OwnedRooms.length)
            {
                console.log('Spawning Scanner');
                var s = Spawner.SpawnHarvester();
                if (Memory.OwnedRooms.W6N1.scanner == '')
                {
                    s.memory.targRm = Game.rooms[W6N1];
                    Memory.OwnedRooms.W6N1.scanner = s;
                }
                else if (Memory.OwnedRooms.W7N1.scanner == '')
                {
                    s.memory.targRm = Game.rooms[W7N1];
                    Memory.OwnedRooms.W7N1.scanner = s;
                }
            }
            else */if(harvesters.length < sor.length && (car.length >= harvesters.length || harvesters.length == 0))
            {
                console.log('Spawning Harvester');
                Spawner.SpawnHarvester();
            }
            else if (harvesters.length > car.length)
            {
                console.log('Spawning Car' + harvesters.length + ' ' + car.length);
                Spawner.SpawnCar();
            }
            else if(reps.length < 1 && struct.length > 0)
            {
                console.log('Spawning The Plumer');
                Spawner.SpawnRep();
            }
            else if(bobs.length < 1 && conSights.length > 0)
            {
                console.log('Spawning BOB THE BUILDER');
                Spawner.SpawnBob();
            }
            else if(upgs.length == 1)
            {
                console.log('Spawning Upgrader');
                Spawner.SpawnUpg();
            }
        }

    }
};

module.exports = RoomMaster;