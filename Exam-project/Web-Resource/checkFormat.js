function checkFormat(executionContext) {

    var formContext = executionContext.getFormContext();
    var phoneNumber = formContext.getAttribute("telephone1").getValue();
    const regex = /^\+355\d{9}$/;

    if (phoneNumber !== null) {
        if (regex.test(phoneNumber)) {

        } else {
            const notification = {
                text: "Please check the business phone number format",
                title: `Warning!`,
            };
            Xrm.Navigation.openAlertDialog(notification);
        }
    }
}
