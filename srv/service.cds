using {db} from '../db/schema';

service MyService {

    entity invoicelist as projection on db.invoicelist;

    function wiproInvoiceDoc( vendorNo : String ) returns String;
    function downloadPdf( invoiceNo : String , fiscalYear : String ) returns String;

}

