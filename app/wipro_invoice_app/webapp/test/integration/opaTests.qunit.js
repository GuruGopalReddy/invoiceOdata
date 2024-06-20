sap.ui.require(
    [
        'sap/fe/test/JourneyRunner',
        'wiproinvoiceapp/test/integration/FirstJourney',
		'wiproinvoiceapp/test/integration/pages/invoicelistList',
		'wiproinvoiceapp/test/integration/pages/invoicelistObjectPage'
    ],
    function(JourneyRunner, opaJourney, invoicelistList, invoicelistObjectPage) {
        'use strict';
        var JourneyRunner = new JourneyRunner({
            // start index.html in web folder
            launchUrl: sap.ui.require.toUrl('wiproinvoiceapp') + '/index.html'
        });

       
        JourneyRunner.run(
            {
                pages: { 
					onTheinvoicelistList: invoicelistList,
					onTheinvoicelistObjectPage: invoicelistObjectPage
                }
            },
            opaJourney.run
        );
    }
);