var Harv = require('Harvester');
var Car = require('Car');
var Spawner = require('Spawner');
var Bob = require('Bob');
var Rep = require('Rep');
var Upg = require('Upg');
var RMsr = require('RoomMaster');
var Scan = require('Scanner');

module.exports.loop = function () {
    console.log(Game.rooms['W6N1'].name + '    ' + Game.rooms['W8N1'].name);
    var scanners = _.filter(Game.creeps, (creep) => creep.memory.role == 'scanner');
    /*Memory.OwnedRooms = 
    {
        'W6N1': Game.rooms['W6N1'],
        'W7N1': Game.rooms['W7N1']
    };*/
    Memory.OwnedRooms.room1 = Game.rooms['W6N1'];
    Memory.OwnedRooms.room2 = Game.rooms['W7N1'];

    for (var i = 0; i < scanners.length; i++)
    {
        Scan.run(scanners[i]);
    }



    if (!Memory.OwnedRooms.W6N1.Scanner)
    {
        Memory.OwnedRooms.W6N1.Scanner = 'E';
    }
    if (!Memory.OwnedRooms.W7N1.Scanner)
    {
        Memory.OwnedRooms.W7N1.Scanner = 'E';
    }
    

    for(var name in Memory.creeps) {
        if(!Game.creeps[name]) {
            delete Memory.creeps[name];
            console.log('Clearing non-existing creep memory:', name);
        }
    }

    for(var name in Game.creeps) 
    {
        var creep = Game.creeps[name];
        if (creep.memory.role == 'scanner')
            Scan.run(creep);
        if (creep.memory.role == 'harvester')
            Harv.run(creep);
        else if (creep.memory.role == 'car')
            Car.run(creep);
        else if (creep.memory.role == 'bob')
            Bob.run(creep);
        else if (creep.memory.role == 'rep')
            Rep.run(creep);
        else if (creep.memory.role == 'upg')
            Upg.run(creep);
        else if (creep.memory.role == 'RM')
            RMsr.run(creep);
    }
    /*
    if (Memory.OwnedRooms.W6N1.scanner == !creep)
    {
        Memory.OwnedRooms.W6N1.scanner = '';
    }
    if (Memory.OwnedRooms.W7N1.scanner == !creep)
    {
        Memory.OwnedRooms.W7N1.scanner = '';
    }*/

    var RMs = _.filter(Game.creeps, (creep) => creep.memory.role == 'RM'); //get a array of harvesters by looking at thier memory.role
    var CE = 0;
    var EC = 0;
    /*
    for(var name in Game.spawns)
    {
        var sp = Game.spawns[name];
        EC += sp.energyCapacity;
        CE += sp.energy;
    }*/
    var ST = 0;
    if(RMs < 1)
    {
        console.log('Spawning RoomMaster');
        Spawner.SpawnRM();
    }
}