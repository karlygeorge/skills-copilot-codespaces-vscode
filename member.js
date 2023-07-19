function skillsMember() {
    return {
        restrict: "g",
        templateURL: 'modules/skills/views/member.html',
        controller: 'SkillsMemberController',
        controllerAs: 'vm',
        bindToController: true,
        scope: {
            member: '-'
        },
    }
};