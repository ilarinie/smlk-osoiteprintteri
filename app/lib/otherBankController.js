app.controller('otherBankController', ['$scope', function($scope) {


    $scope.manualMessageInput = "Kirjoita oma viesti";
    $scope.manualMessage = "";

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

    $scope.otherBanks = [{
            "id": "op",
            "bankname": "Op-Palvelut Oy",
            "officename": "",
            "address": "PL 308",
            "city": "00101 Helsinki"
        },
        {
            "id": "nordea",
            "bankname": "Nordea Pankki Suomi Oyj",
            "officename": "Pääkonttori",
            "address": "Satamaradankatu 5",
            "city": "00020 NORDEA"
        },
        {
            "id": "danske",
            "bankname": "Danske Bank Oyj",
            "officename": "",
            "address": "PL 1561",
            "city": "00075 DANSKE BANK"
        },
        {
            "id": "aktia",
            "bankname": "Aktia Pankki Oyj",
            "officename": "",
            "address": "Mannerheimintie 14",
            "city": "00100 Helsinki"
        },
        {
            "id": "aland",
            "bankname": "Ålandsbanken",
            "officename": "",
            "address": "PB 3",
            "city": "22101 Mariehamn"
        },
        {
            "id": "hanska",
            "bankname": "Handelsbanken Oyj",
            "officename": "",
            "address": "Aleksanterinkatu 46 A",
            "city": "00101 Helsinki"
        }
    ];

    $scope.messages = [
        { name: "Suoramaksuvaltakirja", message: "Ohessa meille postissa saapunut, teidän asiakkaanne suoramaksuvaltakirja" },
        { name: "Maksukortti", message: "Ohessa meille postissa saapunut, teidän asiakkaanne maksukortti" },
        { name: "Maksupalvelutoimeksianto", message: "Ohessa meille postissa saapunut, teidän asiakkaanne maksupalvelutoimeksianto" }
    ];

    $scope.selectMessage = function(message) {
        $scope.selectedMessage = message;
    }

    $scope.selectedBank = null;

    $scope.selectBank = function(bank) {
        $scope.selectedBank = bank;
    }

    $scope.reset = function() {
        $scope.selectedBank = null;
        $scope.selectedMessage = null;
    }

    $scope.print = function() {
        window.open("lib/print.html?bankname=" + $scope.selectedBank.bankname + "&office=&address=" + $scope.selectedBank.address + "&city=" + $scope.selectedBank.city + "&orignumber=&message=" + $scope.selectedMessage.message);

    }

    $scope.frontPage = function() {
        window.location = "index.html";
    }


}]);