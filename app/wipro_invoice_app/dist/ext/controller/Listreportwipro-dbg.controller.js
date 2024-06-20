sap.ui.define(['sap/ui/core/mvc/ControllerExtension'], function (ControllerExtension) {
	'use strict';

	return ControllerExtension.extend('wiproinvoiceapp.ext.controller.Listreportwipro', {
		// this section allows to extend lifecycle hooks or hooks provided by Fiori elements
		override: {
			/**
             * Called when a controller is instantiated and its View controls (if available) are already created.
             * Can be used to modify the View before it is displayed, to bind event handlers and do other one-time initialization.
             * @memberOf wiproinvoiceapp.ext.controller.Listreportwipro
             */
			onInit: function () {
				// you can access the Fiori elements extensionAPI via this.base.getExtensionAPI
				var oModel = this.base.getExtensionAPI().getModel();
			},
			routing: {
				onBeforeBinding: async function (oEvent) {
					debugger
					// sap.ui.getCore().byId("wiproinvoiceapp::invoicelistList--fe::table::invoicelist::LineItem::CustomAction::DownloadAction").setVisible(false)
					sap.ui.getCore().byId("wiproinvoiceapp::invoicelistList--fe::table::invoicelist::LineItem::StandardAction::Delete").setVisible(false)
					// sap.ui.getCore().byId("wiproinvoiceapp::invoicelistList--fe::table::invoicelist::LineItem::CustomAction::DownloadAction" , class="sapMBtnInner sapMBtnText sapMBtnTransparent")
					let funcname = "wiproInvoiceDoc";
					var oFunc = this.getView().getModel().bindContext(`/${funcname}(...)`);
					oFunc.setParameter('vendorNo', '0000001060');
					await oFunc.execute();
				},
				onAfterBinding: function(oEvent){
					debugger
					// var record = sap.ui.getCore().byId("wiproinvoiceapp::invoicelistList--fe::table::invoicelist::LineItem");
					// record.attachSelectionChange(function(oEvent){
					// 	debugger
					// 	var selectedCells = oEvent.oSource.mAggregations._content.getSelectedItem().getCells();
					// 	for (let i = 0; i < selectedCells.length; i++) {
					// 		if (i == 0){
					// 		var invoiceNo1 =	selectedCells[i].mProperties.text;
					// 		}
							
					// 	   if (i == 1) {
					// 			var fiscalYear1 =	selectedCells[i].mProperties.text;
					// 		}
							 
					// 		if (i != 0 && i != 1 ){
					// 			break;
					// 		}
							
							
					// 	}

						
						
					// 	// sap.ui.getCore().byId("wiproinvoiceapp::invoicelistList--fe::table::invoicelist::LineItem::CustomAction::DownloadAction").setVisible(true);
					// })

				}
			}	
		}
	});
});
