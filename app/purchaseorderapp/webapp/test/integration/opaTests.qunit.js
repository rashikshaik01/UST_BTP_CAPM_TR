sap.ui.require(
    [
        'sap/fe/test/JourneyRunner',
        'ust/rashik/purchaseorderapp/test/integration/FirstJourney',
		'ust/rashik/purchaseorderapp/test/integration/pages/POsList',
		'ust/rashik/purchaseorderapp/test/integration/pages/POsObjectPage',
		'ust/rashik/purchaseorderapp/test/integration/pages/POItemsObjectPage'
    ],
    function(JourneyRunner, opaJourney, POsList, POsObjectPage, POItemsObjectPage) {
        'use strict';
        var JourneyRunner = new JourneyRunner({
            // start index.html in web folder
            launchUrl: sap.ui.require.toUrl('ust/rashik/purchaseorderapp') + '/index.html'
        });

       
        JourneyRunner.run(
            {
                pages: { 
					onThePOsList: POsList,
					onThePOsObjectPage: POsObjectPage,
					onThePOItemsObjectPage: POItemsObjectPage
                }
            },
            opaJourney.run
        );
    }
);