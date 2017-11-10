// Constants strings
var emailTarget = "email";
var emailAddressFrom = "antonovmering@live.com";
var emailAddressTo = "oleksiy.antonov@live.com";
var emailKey = "[SH@OAA]";

// ***** EMail stream emulation: Start ***** //
function NotificationEmailObjectComposeSubject(paramObject) {
    return emailKey + " " + paramObject.Initiator + "@" + paramObject.State;
}

function NotificationEmailObjectSend(paramIrl) {
    var sensorOpenObject = new SensorOpenObject();
    SensorOpenObjectInitialize(sensorOpenObject, paramIrl);
    SensorOpenObjectLoad(sensorOpenObject);

    sendTo(emailTarget, {
        from: emailAddressFrom,
        to: emailAddressTo,
        subject: NotificationEmailObjectComposeSubject(sensorOpenObject),
        text: NotificationObjectComposeBody(sensorOpenObject, SensorOpenObjectTimeStampDiffSeconds(sensorOpenObject))
    });
}
// ***** EMail stream emulation: End ***** //