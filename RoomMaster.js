var Spawner = require('Spawner');
var fun = require('fun');
var RoomMaster =
{
    run: function () {
        var car                 = _.filter(Game.creeps, (creep) => creep.memory.role == 'car');
        var bobs                = _.filter(Game.creeps, (creep) => creep.memory.role == 'bob');
        var upgs                = _.filter(Game.creeps, (creep) => creep.memory.role == 'upg');
        var reps                = _.filter(Game.creeps, (creep) => creep.memory.role == 'rep');
        var harvesters          = _.filter(Game.creeps, (creep) => creep.memory.role == 'harvester');
        var scanners            = _.filter(Game.creeps, (creep) => creep.memory.role == 'scanners');
        //Memory.Harvesters       = _.filter(Game.creeps, (creep) => creep.memory.role == 'harvester', (creep) => creep.memory.CMS == 'noTarget');
        //console.log(Memory.OwnedRooms.length)
        if(scanners.length < 4)
        {
            console.log('Spawning Scanner');
            Spawner.SpawnScanner();
        }
        
        if(fun.GTECur() >= 300)
        {
            if(harvesters.length < Memory.Sources.length && (car.length >= harvesters.length || harvesters.length == 0))
            {
                console.log('Spawning Harvester');
                Spawner.SpawnHarvester();
            }
            else if (harvesters.length > car.length)
            {
                console.log('Spawning Car');
                Spawner.SpawnCar();
            }
            else if(reps.length < 2)
            {
                //console.log('Spawning The Plumer');
                Spawner.SpawnRep();
            }
            else if(upgs.length < 1)
            {
                //console.log('Spawning Upgrader');
                Spawner.SpawnUpg();
            }
            else if(bobs.length < 1)
            {
                //console.log('Spawning BOB THE BUILDER');
                Spawner.SpawnBob();
            }
        }
    }
};

module.exports = RoomMaster;