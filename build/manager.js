"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//exports.AffairManager = void 0;

    class manager {
        mainMemberList = new Array();
        mainAffairList = new Array();
        mainOrganizationList = new Array();
        addMember = function (_name, _email) {
            var memb = new Member(_name, _email);
            this.mainMemberList.push(memb);
        };
        addAffair = function (_Aname, _zip, _date) {
            var affair = new Affair(_Aname, _zip, _date);
            this.mainAffairList.push(affair);
        };
        addOrganization = function (_Otitle) {
            var organziation = new Organziation(_Otitle);
            this.mainOrganizationList.push(organziation);
        };
        addMemberToAffair = function (memberName, affairName) {
            for (var index in this.mainAffairList) {
                if (this.mainAffairList[index] == affairName) {
                    for (var index2 in this.mainMemberList) {
                        if (this.mainMemberList[index2] == memberName) {
                            this.mainAffairList.memberList.push(this.mainMemberList[index2]);
                        }
                    }
                }
            }
        };
        findMemberNames = function (query) {
            for (var index in this.mainMemberList) {
                if (this.mainMemberList[index].memberName() == query) {
                    return this.mainMemberList[index].memberName();
                }
            }
        };
        findAffairNames = function (query) {
            for (var index in this.mainAffairList) {
                if (this.mainAffairList[index].affairName() == query) {
                    return this.mainAffairList[query].affairName();
                }
            }
        };
        findOrganizationNames = function (query) {
            for (var index in this.mainOrganizationList) {
                if (this.mainOrganizationList[index].organizationName() == query) {
                    return this.mainOrganizationList[index].organizationName();
                }
            }
        };
        modifyAffair = function () {
            var affairInfo = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                affairInfo[_i] = arguments[_i];
            }
            for (var index in this.mainAffairList) {
                if (this.mainAffairList[index].affairName() == affairInfo[0]) {
                    this.mainAffairList[index].setAffair(affairInfo[1]);
                    return;
                }
            }
        };
        addAffairToOrganization = function (affairName, organizationName) {
            for (var index in this.mainOrganizationList) {
                if (this.mainOrganizationList[index].organizationName() == organizationName) {
                    for (var index2 in this.mainAffairList) {
                        if (this.mainAffairList[index2].affairName() == affairName) {
                            this.mainOrganizationList[index].affairList.push(this.mainAffairList[index2]);
                        }
                    }
                }
            }
        };
        getMembers = function (affairName) {
            for (var index in this.mainAffairList) {
                if (this.mainAffairList[index].affairName() == affairName) {
                    for (var index2 in this.mainAffairList[index].memberList) {
                        return this.mainAffairList[index].memberList;
                    }
                }
            }
        };

    }
    

module.exports = manager;

var Member = (function () {
    function Member(name, email) {
        this.name = name;
        this.email = email;
    }
    Object.defineProperty(Member.prototype, "memberName", {
        get: function () {
            return this.memberName;
        },
        enumerable: false,
        configurable: true
    });
    return Member;
}());
var Affair = (function () {
    function Affair(title, zipCode, dateAndTime) {
        this.title = title;
        this.zipCode = zipCode;
        this.dateAndTime = dateAndTime;
    }
    Object.defineProperty(Affair.prototype, "affairName", {
        get: function () {
            return this.title;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Affair.prototype, "setAffair", {
        set: function (nuName) {
            this.title = nuName;
        },
        enumerable: false,
        configurable: true
    });
    return Affair;
}());
var Organziation = (function () {
    function Organziation(otitle) {
        this.Otitle = otitle;
    }
    Object.defineProperty(Organziation.prototype, "organizationName", {
        get: function () {
            return this.Otitle;
        },
        enumerable: false,
        configurable: true
    });
    return Organziation;
}());
//# sourceMappingURL=manager.js.map