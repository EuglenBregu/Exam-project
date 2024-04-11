 function filterUsers(executionContext) {
    var formContext = executionContext.getFormContext();
    var skill = formContext.getAttribute("exam_skill");

     if (skill != null && skill.getValue() != null) {
        var skillId = skill.getValue()[0].id;
        fetchUsers(skillId, formContext);
    }
}
function fetchUsers(skillId, formContext) {
    var viewId = "e88ca999-0b16-4ae9-b6a9-9edc840d42d8";
    var entity = "systemuser";
    var viewDisplayName = "User Lookup View";

    var fetchUsers = "<fetch version='1.0' output-format='xml-platform' mapping='logical' distinct='false'>" +
        "<entity name='systemuser'>" +
        "<link-entity name='exam_systemuser_exam_skill' from='systemuserid' to='systemuserid' link-type='inner' alias='aa' intersect='true'>" +
        "<filter type='and'>" +
        "<condition attribute='exam_skillid' operator='eq' uitype='exam_skill' value='" + skillId + "' />" +
        "</filter>" +
        "</link-entity>" +
        "</entity>" +
        "</fetch>";
    var layout = "<grid name='resultset' jump='fullname' select='1' icon='1' preview='1'>" +
                "<row name='result' id='contactid'>" +
                "<cell name='fullname' width='300' />" +
                "</row>" +
                "</grid>";

    formContext.getControl("exam_user").addCustomView(viewId, entity, viewDisplayName, fetchUsers, layout, true);
}





