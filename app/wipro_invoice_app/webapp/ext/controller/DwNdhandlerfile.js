sap.ui.define([
    "sap/m/MessageToast"
], function (MessageToast) {
    'use strict';

    return {
       
        Dwndhandlermethod: async function (oEvent) {
            
            debugger
            var selectedCells = this._view.mAggregations.content[0].mAggregations.content.mAggregations.content.mAggregations._content.getSelectedItem().mAggregations.cells
            for (let i = 0; i < selectedCells.length; i++) {
                		if (i == 0){
                		var invoiceNo1 =	selectedCells[i].mProperties.text;
                		}
                        
                	   if (i == 1) {
                			var fiscalYear1 =	selectedCells[i].mProperties.text;
                		}
                         
                		if (i != 0 && i != 1 ){
                			break;
                		}
                        
                        
                	}
            MessageToast.show("Downloading Pdf...");
            let funcname = "downloadPdf";
            // var oFunc = this.getView().getModel().bindContext(`/${funcname}(...)`);
            var oFunc = this._view.getModel().bindContext(`/${funcname}(...)`);
            oFunc.setParameter('invoiceNo', invoiceNo1  );
            oFunc.setParameter('fiscalYear', fiscalYear1  );
            
            await oFunc.execute();


            let context = oFunc.getBoundContext();
            let getdata = context.getValue();
            let base64String = getdata.value;

            if (!base64String || typeof base64String !== 'string') {
                throw new Error("Invalid Base64 string received");
            }
            function base64ToBlob(base64, mimeType) {
                var byteCharacters = atob(base64);
                var byteNumbers = new Array(byteCharacters.length);
                for (var i = 0; i < byteCharacters.length; i++) {
                    byteNumbers[i] = byteCharacters.charCodeAt(i);
                }
                var byteArray = new Uint8Array(byteNumbers);
                return new Blob([byteArray], { type: mimeType });
            }

           
            var pdfBlob = base64ToBlob(base64String, 'application/pdf');
            var pdfUrl = URL.createObjectURL(pdfBlob);
            var link = document.createElement('a');
            link.href = pdfUrl;
            link.download = 'document.pdf';
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
            MessageToast.show("PDF downloaded successfully.");






        }
    };
});
