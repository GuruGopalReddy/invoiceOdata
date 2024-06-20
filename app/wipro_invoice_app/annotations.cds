using MyService as service from '../../srv/service';
annotate service.invoicelist with @(
    UI.FieldGroup #GeneratedGroup : {
        $Type : 'UI.FieldGroupType',
        Data : [
            {
                $Type : 'UI.DataField',
                Label : 'invoiceNo',
                Value : invoiceNo,
            },
            {
                $Type : 'UI.DataField',
                Label : 'fiscalYear',
                Value : fiscalYear,
            },
            {
                $Type : 'UI.DataField',
                Label : 'docDate',
                Value : docDate,
            },
            {
                $Type : 'UI.DataField',
                Label : 'userName',
                Value : userName,
            },
            {
                $Type : 'UI.DataField',
                Label : 'vendorNo',
                Value : vendorNo,
            },
            {
                $Type : 'UI.DataField',
                Label : 'invoiceAmnt',
                Value : invoiceAmnt,
            },
        ],
    },
    UI.Facets : [
        {
            $Type : 'UI.ReferenceFacet',
            ID : 'GeneratedFacet1',
            Label : 'General Information',
            Target : '@UI.FieldGroup#GeneratedGroup',
        },
    ],
    UI.LineItem : [
        {
            $Type : 'UI.DataField',
            Label : 'invoiceNo',
            Value : invoiceNo,
        },
        {
            $Type : 'UI.DataField',
            Label : 'fiscalYear',
            Value : fiscalYear,
        },
        {
            $Type : 'UI.DataField',
            Label : 'docDate',
            Value : docDate,
        },
        {
            $Type : 'UI.DataField',
            Label : 'userName',
            Value : userName,
        },
        {
            $Type : 'UI.DataField',
            Label : 'vendorNo',
            Value : vendorNo,
        },
    ],
);
