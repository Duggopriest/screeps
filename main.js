var Harv = require('Harvester');
var Car = require('Car');
var Spawner = require('Spawner');
var Bob = require('Bob');
var Rep = require('Rep');
var Upg = require('Upg');
var RMsr = require('RoomMaster');
var Scan = require('Scanner');
var SetMeme = require('SetMem');
var fun = require('fun');

module.exports.loop = function () {
    for(var name in Memory.creeps) {
        if(!Game.creeps[name]) {
            delete Memory.creeps[name];
            console.log('Clearing non-existing creep memory:', name);
        }
    }

    Memory.NextRoom = Game.map.describeExits('W6N1');
    SetMeme.run();
    RMsr.run();
    fun.CSH();
    fun.ClearH();
    //console.log(fun.GTECap());
    //console.log(fun.GTECur());


    for(var name in Game.creeps) 
    {
        var creep = Game.creeps[name];
        if (creep.memory.role == 'scanners')
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
    }
    /*
    if (Memory.OwnedRooms.W6N1.scanner == !creep)
    {
        Memory.OwnedRooms.W6N1.scanner = '';
    }
    if (Memory.OwnedRooms.W7N1.scanner == !creep)
    {
        Memory.OwnedRooms.W7N1.scanner = '';
    }
    var RMs = _.filter(Game.creeps, (creep) => creep.memory.role == 'RM'); //get a array of harvesters by looking at thier memory.role
    var CE = 0;
    var EC = 0;
    
    for(var name in Game.spawns)
    {
        var sp = Game.spawns[name];
        EC += sp.energyCapacity;
        CE += sp.energy;
    }*/
}