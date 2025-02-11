"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Transport_1 = require("./Transport");
var owner1 = new Transport_1.Transport.OwnerClass("Капранов", "Василий", "Генадьевич", new Date(1990, 1, 1), Transport_1.Transport.TypeOfDocument.Passport, "1234", "567890");
var car1 = new Transport_1.Transport.CarImpl("Toyota", "Camry", 2020, "QWERTYU789632", "ABC123", owner1, Transport_1.Transport.BodyType.Sedan, Transport_1.Transport.CarClass.Luxury);
var motorbike1 = new Transport_1.Transport.MotorbikeImpl("Yamaha", "YZF-R1", 2021, "SRFGGDFGHYHB8889", "XYZ789", owner1, "Sport", true);
var storage = new Transport_1.Transport.VehicleStorageImpl();
storage.addVehicle(car1);
storage.addVehicle(motorbike1);
storage.getAllVehicles().forEach(function (vehicle) { return vehicle.printInfo(); });
