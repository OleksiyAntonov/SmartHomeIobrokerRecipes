// Iobroker resources prefixes
var ioBrokerDivider = ".";
var iobrokerEvent = "event";
/***** Iobroker resources: End *****/
/***** Iobroker.zwave resources: Start *****/
var iobrokerZwaveSensor_1 = "Sensor_1";
var iobrokerZwaveSensor_Binary = "SENSOR_BINARY";
// Iobroker resource location (IRL)
var sensorZwaveInstance = "zwave.0";
// Eingangtur
var sensorEingangturNode = "NODE4";
var sensorEingangturIrl = sensorZwaveInstance + ioBrokerDivider + sensorEingangturNode + ioBrokerDivider;
var sensorEingangturEvent = sensorEingangturIrl + iobrokerEvent;
// Balkon door
var sensorBalkonDoorNode = "NODE6";
var sensorBalkonDoorIrl = sensorZwaveInstance + ioBrokerDivider + sensorBalkonDoorNode + ioBrokerDivider;
var sensorBalkonDoorEvent = sensorBalkonDoorIrl + iobrokerZwaveSensor_Binary + ioBrokerDivider + iobrokerZwaveSensor_1;
// Mailbox
var sensorMailboxNode = "NODE3";
var sensorMailboxIrl = sensorZwaveInstance + ioBrokerDivider + sensorMailboxNode + ioBrokerDivider;
var sensorMailboxEvent = sensorMailboxIrl + iobrokerZwaveSensor_Binary + ioBrokerDivider + iobrokerZwaveSensor_1;
// Internal intercommunication objects properties
var objectName = "name";
var objectInitiatorId = "initiatorid";
var objectInitiator = "initiator";
var objectStateId = "stateid";
var objectState = "state";
var objectTimestamp = "ts";
var objectLatestChange = "lc";
// Internal intercommunication objects inside homeBrain adapter
var sensorOpenObjectInstance = "homebrain.0";
var sensorOpenObjectLocationEingangtur = "eingangtur";
var sensorOpenObjectLocationBalkonDoor = "balkondoor";
var sensorOpenObjectLocationMailbox = "mailbox";
var sensorOpenObjectName = "sensoropen";
// Statuses
var sensorStatusOpened = "0";
var sensorStatusClosed = "1";
var sensorOpenObjectInstanceEingangtur = 0;
var sensorOpenObjectInstanceBalkonDoor = 1;
var sensorOpenObjectInstanceMailbox = 2;
var sensorOpenObjectInstanceEingangturName = "Eingangtur";
var sensorOpenObjectInstanceBalkonDoorName = "Balkon-Door";
var sensorOpenObjectInstanceMailboxName = "Mailbox";
// Intercommunication objects instances
var sensorOpenObjectEingangturIrl = sensorOpenObjectInstance + "." + sensorOpenObjectLocationEingangtur + "." + sensorOpenObjectName + ".";
var sensorOpenObjectBalkonDoorIrl = sensorOpenObjectInstance + "." + sensorOpenObjectLocationBalkonDoor + "." + sensorOpenObjectName + ".";
var sensorOpenObjectMailboxIrl = sensorOpenObjectInstance + "." + sensorOpenObjectLocationMailbox + "." + sensorOpenObjectName + ".";
//# sourceMappingURL=resourcesConstants.js.map