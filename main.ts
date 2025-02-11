import { Transport } from "./Transport";

const owner1 = new Transport.OwnerClass("Капранов", "Василий", "Генадьевич", new Date(1990, 1, 1), Transport.TypeOfDocument.Passport, "1234", "567890");
const car1 = new Transport.CarImpl("Toyota", "Camry", 2020, "QWERTYU789632", "ABC123", owner1, Transport.BodyType.Sedan, Transport.CarClass.Luxury);
const motorbike1 = new Transport.MotorbikeImpl("Yamaha", "YZF-R1", 2021, "SRFGGDFGHYHB8889", "XYZ789", owner1, "Sport", true);
    
const storage = new Transport.VehicleStorageImpl<Transport.Vehicle>();
storage.addVehicle(car1);
storage.addVehicle(motorbike1);
    
storage.getAllVehicles().forEach(vehicle => vehicle.printInfo());
