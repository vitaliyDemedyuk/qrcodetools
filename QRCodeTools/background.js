$(document).ready( function () {

    $(function() {
            initialization();
        });

        function initialization(){localStorage["qrCodeHeight"] = (localStorage["qrCodeHeight"] == null) ? 250 : localStorage["qrCodeHeight"];
            localStorage["qrCodeWidth"] = (localStorage["qrCodeWidth"] == null) ? 250 : localStorage["qrCodeWidth"];
            localStorage["qrCodeColor"] = (localStorage["qrCodeColor"] == null) ? "#000000" : localStorage["qrCodeColor"];
            localStorage["qrCodeBackgroundColor"] = (localStorage["qrCodeBackgroundColor"] == null) ? "#ffffff" : localStorage["qrCodeBackgroundColor"];
            localStorage["qrCodeFileName"] = (localStorage["qrCodeFileName"] == null) ? "qrcode" : localStorage["qrCodeFileName"];
        }
});