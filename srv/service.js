const cds = require('@sap/cds');
const { insert } = require('@sap/cds/libx/_runtime/hana/execute');
const axios = require('axios');
const { timeStamp } = require('console');
const { workerData } = require('worker_threads');

module.exports = cds.service.impl(async function () {

    let { invoicelist } = this.entities;


    this.on('wiproInvoiceDoc', async (req) => {
        // debugger
        // var BPA = await cds.connect.to('wipro_invoice_doc');

        // let supplier = await BPA.get(`/sap/opu/odata/sap/Z_INVOICE_WIPRO_SRV/invoiceListSet`);


        // const credentials = Buffer.from('DEVELOPER09:peol@12345').toString('base64');

        // This is the second configuration option
        // const res = await axios.get("https://gopalvirtul:7009/sap/opu/odata/sap/Z_INVOICE_WIPRO_SRV/invoiceListSet", {
        //     headers: {
        //         "Authorization": 'Basic REVWRUxPUEVSMDk6cGVvbEAxMjM0NQ=='
        //     }

        // }
        const res = await axios.get(("http://gopalvirtul:7009/sap/opu/odata/sap/Z_INVOICE_WIPRO_SRV/invoiceListSet"), {
            headers: {
                "Authorization": 'Basic REVWRUxPUEVSMDk6cGVvbEAxMjM0NQ=='
            }

        }
        );


        console.log("res", res);

        var arr = [];

        for (let i = 0; i < res.data.d.results.length; i++) {
            arr.push({
                invoiceNo: res.data.d.results[i].invoiceNo,
                fiscalYear: res.data.d.results[i].fiscalYear,
                docDate: res.data.d.results[i].docDate,
                userName: res.data.d.results[i].userName,
                vendorNo: res.data.d.results[i].vendorNo,
                invoiceAmnt: res.data.d.results[i].invoiceAmnt



            })

        }

        await DELETE.from(invoicelist);
        console.log("arr", arr);
        await INSERT.into(invoicelist, arr);

        console.log("executed");


    }),
    this.on('downloadPdf', async (req) => {
        debugger
           var invno = req.data.invoiceNo;
           var fisy  = req.data.fiscalYear;


        const docpdf = await axios.get((`http://gopalvirtul:7009/sap/opu/odata/sap/Z_INVOICE_WIPRO_SRV/invoiceDocSet(invoiceNo='${invno}',fiscalYear='${fisy}')`), {
            headers: {
                "Authorization": 'Basic REVWRUxPUEVSMDk6cGVvbEAxMjM0NQ=='
            }

        }
        );console.log("docpdf contenttt", docpdf);
        console.log("docpdf content path", docpdf.data.d.content);
        console.log("executed");

        return docpdf.data.d.content;
    })
})