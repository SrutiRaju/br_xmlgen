$("#generate").click(function() {
	
	// Capture if the nonpo check box is checked
	var nonPoInv = false;
	var nonPoInvTxt = "No";
	if ($('#nonpo').prop("checked")) {
		nonPoInv = true;
		nonPoInvTxt = "Yes";
	}
	
	// Capture the value of the country based on the radio selection
	var radios = document.getElementsByName('ctyradio');
	var tmpcty = "";
	for (var i = 0, length = radios.length; i < length; i++) {
		if (radios[i].checked) {
			tmpcty = radios[i].value
			break;
		}
	}
	
	var inputData = {
        "nonpovalue": nonPoInvTxt,
        "ctyvalue": tmpcty,
        "cocd": $('#cocd').val(),
		"ponum": $('#ponum').val(),
		"vendor": $('#vendor').val(),
		"idate" : $('#idate').val(),
        "inum" : $('#inum').val(),
        "icur" : $('#icur').val(),
        "lino1" : $('#lino1').val(),
        "item1" : $('#item1').val(),
        "dsca1" : $('#dsca1').val(),
        "qty1" : $('#qty1').val(),
        "uom1" : $('#uom1').val(),
        "price1" : $('#price1').val(),
        "lamount1" : $('#lamount1').val(),
        "lino2" : $('#lino2').val(),
        "item2" : $('#item2').val(),
        "dsca2" : $('#dsca2').val(),
        "qty2" : $('#qty2').val(),
        "uom2" : $('#uom2').val(),
        "price2" : $('#price2').val(),
        "lamount2" : $('#lamount2').val(),
        "lino3" : $('#lino3').val(),
        "item3" : $('#item3').val(),
        "dsca3" : $('#dsca3').val(),
        "qty3" : $('#qty3').val(),
        "uom3" : $('#uom3').val(),
        "price3" : $('#price3').val(),
        "lamount3" : $('#lamount3').val(),
        "lino4" : $('#lino4').val(),
        "item4" : $('#item4').val(),
        "dsca4" : $('#dsca4').val(),
        "qty4" : $('#qty4').val(),
        "uom4" : $('#uom4').val(),
        "price4" : $('#price4').val(),
        "lamount4" : $('#lamount4').val(),
        "lino5" : $('#lino5').val(),
        "item5" : $('#item5').val(),
        "dsca5" : $('#dsca5').val(),
        "qty5" : $('#qty5').val(),
        "uom5" : $('#uom5').val(),
        "price5" : $('#price5').val(),
        "lamount5" : $('#lamount5').val(),
        "linetotal" : $('#linetotal').val(),
        "stax" : $('#stax').val(),
        "total" : $('#total').val(),
    };
	
	alert(	"Non PO: " + nonPoInvTxt + "\n" + 
			"Country: " + tmpcty + "; " +
			"CoCd: " + inputData.cocd + "; " +
			"PO: " + inputData.ponum + "; " +				
			"Vendor: " + inputData.vendor + "; " +
			"Inv Date: " + inputData.idate + "; " +
			"Inv #: " + inputData.inum + "; " +
			"Currency: " + inputData.icur + "\n" +
			"lino1: " + inputData.lino1 + "; " +
			"item1: " + inputData.item1 + "; " +
			"dsca1: " + inputData.dsca1 + "; " +
			"qty1: " + inputData.qty1 + "; " +
			"uom1: " + inputData.uom1 + "; " +
			"price1: " + inputData.price1 + "; " +
			"lamount1: " + inputData.lamount1 + "\n" +
			"lino2: " + inputData.lino2 + "; " +
			"item2: " + inputData.item2 + "; " +
			"dsca2: " + inputData.dsca2 + "; " +
			"qty2: " + inputData.qty2 + "; " +
			"uom2: " + inputData.uom2 + "; " +
			"price2: " + inputData.price2 + "; " +
			"lamount2: " + inputData.lamount2 + "\n" +
			"lino3: " + inputData.lino3 + "; " +
			"item3: " + inputData.item3 + "; " +
			"dsca3: " + inputData.dsca3 + "; " +
			"qty3: " + inputData.qty3 + "; " +
			"uom3: " + inputData.uom3 + "; " +
			"price3: " + inputData.price3 + "; " +
			"lamount3: " + inputData.lamount3 + "\n" +
			"lino4: " + inputData.lino4 + "; " +
			"item4: " + inputData.item4 + "; " +
			"dsca4: " + inputData.dsca4 + "; " +
			"qty4: " + inputData.qty4 + "; " +
			"uom4: " + inputData.uom4 + "; " +
			"price4: " + inputData.price4 + "; " +
			"lamount4: " + inputData.lamount4 + "\n" +
			"lino5: " + inputData.lino5 + "; " +
			"item5: " + inputData.item5 + "; " +
			"dsca5: " + inputData.dsca5 + "; " +
			"qty5: " + inputData.qty5 + "; " +
			"uom5: " + inputData.uom5 + "; " +
			"price5: " + inputData.price5 + "; " +
			"lamount5: " + inputData.lamount5 + "\n" +
			"linetotal: " + inputData.linetotal + "; " +
			"stax: " + inputData.stax + "; " +
			"total: " + inputData.total
    );
});