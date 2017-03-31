var app = angular.module('KirjeApp', ['ngMaterial']);

app.controller('KirjeController', ['$scope', function($scope) {

    $scope.showOfficeSelect = false;
    $scope.showMessageSelect = false;
    $scope.merged = false;
    $scope.showPrint = false;
    $scope.shownOffices = [];
    $scope.bank = null;
    $scope.office = null;
    $scope.selectedMessage = null;
    $scope.manualMessageInput = "Kirjoita oma viesti";
    $scope.manualMessage = "";


    $scope.messages = [
        { name: "Suoramaksuvaltakirja", message: "Ohessa meille postissa saapunut, teidän asiakkaanne suoramaksuvaltakirja" },
        { name: "Maksukortti", message: "Ohessa meille postissa saapunut, teidän asiakkaanne maksukortti" },
        { name: "Maksupalvelutoimeksianto", message: "Ohessa meille postissa saapunut, teidän asiakkaanne maksupalvelutoimeksianto" }
    ];


    $scope.reset = function() {
        $scope.showOfficeSelect = false;
        $scope.showMessageSelect = false;
        $scope.merged = false;
        $scope.showPrint = false;
        $scope.shownOffices = [];
        $scope.bank = null;
        $scope.office = null;
        $scope.selectedMessage = null;
        $scope.bankNumber = "";
        $scope.origNumber = null;
        $scope.bankNotFound = null;
        $scope.manualMessageInput = "Kirjoita oma viesti";
        console.log("reset")
    }


    $scope.filterBanks = function(banknumber) {

        if (!banknumber) {
            $scope.shownOffices = [];
            $scope.bank = null;
            $scope.office = null;
            $scope.bankNotFound = null;
            console.log("filter returns empty list with value " + banknumber);
            return;
        }
        $scope.origNumber = banknumber;
        var checked = checkForCurrentBank(parseInt(banknumber), null);
        var bank = $scope.getBank(checked[0]);
        if (checked[0] != banknumber) {

            $scope.merged = true;
            $scope.office = $scope.getOffice(bank, checked[1]);
        }

        if (bank) {
            $scope.bank = bank;
            $scope.shownOffices = [];
            for (var i = 0; i < bank.offices.length; i++) {
                $scope.shownOffices.push(bank.offices[i]);
            }
            $scope.showOfficeSelect = true;
            $scope.bankNotFound = null;
        } else {
            $scope.bankNotFound = "Pankkia ei löytynyt numerolla " + banknumber;
        }


    }

    $scope.getBank = function(banknumber) {
        for (var i = 0; i < banks.length; i++) {
            if (banks[i].number == banknumber) {
                return banks[i];
            }
        }
        return null;
    }

    $scope.getOffice = function(bank, officenumber) {
        for (var i = 0; i < bank.offices.length; i++) {
            if (bank.offices[i].office == officenumber) {
                return bank.offices[i];
            }
        }
    }

    $scope.chooseOffice = function(officename) {
        for (var i = 0; i < $scope.shownOffices.length; i++) {
            if ($scope.shownOffices[i].officename == officename) {
                $scope.office = $scope.shownOffices[i];
                return;
            }
        }
    }

    $scope.setMessage = function(messageId) {
        switch (messageId) {
            case "1":
                $scope.message = "Ohessa meille postissa saapunut, teidän asiakkaanne suoramaksuvaltakirja";
            case "2":
                $scope.message = "Ohessa meille postissa saapunut, teidän asiakkaanne maksupalvelutoimeksianto";
            case "3":
                $scope.message = "Ohessa meille postissa saapunut, teidän asiakkaanne maksukortti";
        }
    }
    $scope.selectMessage = function(message) {
        console.log($scope.selectedMessage);
        $scope.selectedMessage = message;
        console.log($scope.selectedMessage);
    }

    $scope.print = function() {
        window.open("lib/print.html?bankname=" + $scope.bank.bankname + "&office=" + $scope.office.officename + "&address=" + $scope.office.address + "&city=" + $scope.office.city + "&message=" + $scope.selectedMessage.message + "&orignumber=" + $scope.origNumber, "print", "_blank");
    }
    $scope.otherBanks = function() {
        window.location = "other_banks.html";
    }
    $scope.manualForm = function() {
        window.location = "manual_form.html";
    }

    $scope.toggleManualMessage = function() {
        if ($scope.manualMessageInput == "Kirjoita oma viesti") {
            $scope.manualMessageInput = "Valitse valmis viesti";
        } else {
            $scope.manualMessageInput = "Kirjoita oma viesti";
        }

    }
    $scope.setManualMessage = function(message) {
        $scope.selectedMessage = { name: "manual", message: message };
    }

}]);



print = function(bankname, officename, address, city, message, orignumber) {
    window.open("lib/print.html?bankname=" + bankname + "&officename=" + officename + "&address=" + address + "&city=" + city + "&message=" + message + "&orignumber=" + orignumber, "print", "_blank");
}