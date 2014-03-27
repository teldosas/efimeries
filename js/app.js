var Pharmacy = Backbone.Model.extend({});
var PharmacyView = Backbone.View.extend({
    className: 'hidden-pharmacy pharmacy',
    tagName: 'tr',
    template: _.template('<td colspan="6">' +
            '<div class="ph-data"> ' +
                '<div class="ph-name"><%= name %></div>' +
                '<div class="ph-address-wrapper">' +
                    '<div class="ph-address-label">Διεύθυνση:</div>' +
                    '<div class="ph-address"><%= location %></div>' +
                '</div>' +
                '<div class="ph-tel-wrapper">' +
                    '<div class="ph-tel-label">Τηλέφωνο:</div>' +
                    '<div class="ph-tel"><%= telephone %></div>' +
                '</div>' +
            '</div>' +
            '<div class="ph-map"></div>' +
        '</td>'),
    render: function() {
        var attrs = this.model.toJSON();
        $(this.el).html(this.template(attrs));
//        var centerLL = new google.maps.LatLng(35.314258, 25.395584);
//        map = new google.maps.Map(this.el.getElementsByClassName('map')[0], {
//            center: centerLL,
//            zoom: 15
//        });
        return this;
    }
});
var Efimeria = Backbone.Model.extend({});
var EfimeriaView = Backbone.View.extend({
    tagName: 'tr',
    events: {
        'click': function() {
            $(this.el).next().toggleClass('hidden-pharmacy');
            var mapEl = $(this.el).next().find('.ph-map')[0];
            var latLng = new google.maps.LatLng(35.319020396631615, 25.349922073730447);
            var request = {query: this.model.get('pharmacy').name, location: latLng, radius: '500'};
            service.textSearch(request);
            this.map = new google.maps.Map(mapEl, {
                center: latLng,
                zoom: 12
            });
        }
    },
    template: _.template('<td><%= startTime %> - <%= endTime %></td>' +
        '<td><%= date %></td>' +
        '<td><%= pharmacy.name %></td>' +
        '<td><%= pharmacy.location %></td>' +
        '<td><%= pharmacy.telephone %></td>'),
    render: function() {
        var attributes = this.model.toJSON();
        $(this.el).html(this.template(attributes));
        return this;
    }
});
var Efimeries = Backbone.Collection.extend({model: Efimeria});
var efimeries = new Efimeries();
efimeries.reset([{startTime: "08:30", endTime: "22:00", date: "2014-03-24T23:00", pharmacy: {name: "ΧΑΤΖΗΔΑΚΗ ΚΑΛ.", location: "ΕΛ. ΒΕΝΙΖΕΛΟΥ 127 ΛΙΜ. ΧΕΡΣΟΝΗΣΟΥ", telephone: "2897023420"}, district: "ΧΕΡΣΟΝΗΣΟΣ", nightWatch: false}, {startTime: "08:30", endTime: "22:00", date: "2014-03-24T23:00", pharmacy: {name: "ΚΟΣΜΑΣ ΜΙΧ.", location: "ΠΑΡΑΛΙΑΚΗ ΜΑΛΙΩΝ ", telephone: "2897033923"}, district: "ΜΑΛΛΙΑ", nightWatch: false}, {startTime: "08:30", endTime: "22:00", date: "2014-03-24T23:00", pharmacy: {name: "ΣΤΟΛΙΔΗΣ ΠΑΝΤ.", location: "ΕΠΙΣΚΟΠΗ ΠΕΔΙΑΔΟΣ ", telephone: "2810771006"}, district: "ΓΟΥΒΕΣ-ΚΟΚΚΙΝΗ ΧΑΝΙ ΒΑΘΙΑΝΟΣ ΚΑΜΠΟΣ ΚΑΡΤΕΡΟΣ-ΕΠΙΣΚΟΠΗ", nightWatch: false}, {startTime: "08:30", endTime: "22:00", date: "2014-03-24T23:00", pharmacy: {name: "ΜΠΟΡΜΠΟΥΔΑΚΗΣ", location: "Λ.ΧΕΡΣΟΝΗΣΟΥ ΑΝΑΛΗΨΗ ", telephone: "2897024810"}, district: "ΑΝΑΛΗΨΗ ΧΕΡΣΟΝΗΣΣΟΥ", nightWatch: false}, {startTime: "08:30", endTime: "22:00", date: "2014-03-24T23:00", pharmacy: {name: "ΧΟΝΔΡΟΣ ΧΡ.", location: "ΣΤΑΛΙΔΑ ", telephone: "2897032222"}, district: "ΣΤΑΛΙΔΑ-ΜΟΧΟΣ", nightWatch: false}, {startTime: "22:00", endTime: "08:30", date: "2014-03-24T09:30", pharmacy: {name: "ΧΑΤΖΗΔΑΚΗΣ ΧΑΡ.", location: "ΚΟΚΚΙΝΙ ΧΑΝΙ ΑΝΩΠΟΛΗ", telephone: "2810761785"}, district: "ΔΙΑΝΥΚΤΕΡΕΥΟΝ 22:00-08:30 ΕΠΟΜΕΝΟ ΠΡΩΙ", nightWatch: true}, {startTime: "08:30", endTime: "22:00", date: "2014-03-25T23:00", pharmacy: {name: "ΧΑΡΑΛΑΜΠΑΚΗΣ Θ.", location: "ΕΛ. ΒΕΝΙΖΕΛΟΥ 33 ΛΙΜ. ΧΕΡΣΟΝΗΣΟΥ", telephone: "2897022201"}, district: "ΧΕΡΣΟΝΗΣΟΣ", nightWatch: false}, {startTime: "08:30", endTime: "22:00", date: "2014-03-25T23:00", pharmacy: {name: "ΚΡΑΣΑΚΗΣ ΙΩΑΝ.", location: "ΜΑΛΙΑ ", telephone: "2897031900"}, district: "ΜΑΛΛΙΑ", nightWatch: false}, {startTime: "08:30", endTime: "22:00", date: "2014-03-25T23:00", pharmacy: {name: "ΦΕΥΓΑΣ ΠΑΝ.", location: "ΕΠΙΣΚΟΠΗ ΠΕΔΙΑΔΟΣ             ", telephone: "2810771712"}, district: "ΓΟΥΒΕΣ-ΚΟΚΚΙΝΗ ΧΑΝΙ ΒΑΘΙΑΝΟΣ ΚΑΜΠΟΣ ΚΑΡΤΕΡΟΣ-ΕΠΙΣΚΟΠΗ", nightWatch: false}, {startTime: "08:30", endTime: "22:00", date: "2014-03-25T23:00", pharmacy: {name: "ΜΠΟΡΜΠΟΥΔΑΚΗΣ", location: "Λ.ΧΕΡΣΟΝΗΣΟΥ ΑΝΑΛΗΨΗ ", telephone: "2897024810"}, district: "ΑΝΑΛΗΨΗ ΧΕΡΣΟΝΗΣΣΟΥ", nightWatch: false}, {startTime: "08:30", endTime: "22:00", date: "2014-03-25T23:00", pharmacy: {name: "ΑΛΕΞΗΣ ΑΠ.", location: "ΜΟΧΟΣ ", telephone: "2897061301"}, district: "ΣΤΑΛΙΔΑ-ΜΟΧΟΣ", nightWatch: false}, {startTime: "22:00", endTime: "08:30", date: "2014-03-25T09:30", pharmacy: {name: "ΧΟΝΔΡΟΣ ΧΡ.", location: "ΣΤΑΛΙΔΑ ", telephone: "2897032222"}, district: "ΔΙΑΝΥΚΤΕΡΕΥΟΝ 22:00-08:30 ΕΠΟΜΕΝΟ ΠΡΩΙ", nightWatch: true}, {startTime: "08:30", endTime: "22:00", date: "2014-03-26T23:00", pharmacy: {name: "ΧΑΡΑΛΑΜΠΑΚΗΣ ΧΡ.", location: "ΕΛ. ΒΕΝΙΖΕΛΟΥ 33 ΛΙΜ. ΧΕΡΣΟΝΗΣΟΥ", telephone: "2897022201"}, district: "ΧΕΡΣΟΝΗΣΟΣ", nightWatch: false}, {startTime: "08:30", endTime: "22:00", date: "2014-03-26T23:00", pharmacy: {name: "ΜΠΕΛΙΒΑΝΗ-ΔΗΜΟΥ", location: "ΜΑΛΙΑ ", telephone: "2897031000"}, district: "ΜΑΛΛΙΑ", nightWatch: false}, {startTime: "08:30", endTime: "22:00", date: "2014-03-26T23:00", pharmacy: {name: "ΦΡΙΝΖΙΛΑ ΜΑΡΙΑ", location: "ΚΑΡΤΕΡΟΣ ΕΝΑΝΤΙ  ΠΛΑΖ ΕΟΤ", telephone: "2810381952"}, district: "ΓΟΥΒΕΣ-ΚΟΚΚΙΝΗ ΧΑΝΙ ΒΑΘΙΑΝΟΣ ΚΑΜΠΟΣ ΚΑΡΤΕΡΟΣ-ΕΠΙΣΚΟΠΗ", nightWatch: false}, {startTime: "08:30", endTime: "22:00", date: "2014-03-26T23:00", pharmacy: {name: "ΜΠΟΡΜΠΟΥΔΑΚΗΣ", location: "Λ.ΧΕΡΣΟΝΗΣΟΥ ΑΝΑΛΗΨΗ ", telephone: "2897024810"}, district: "ΑΝΑΛΗΨΗ ΧΕΡΣΟΝΗΣΣΟΥ", nightWatch: false}, {startTime: "08:30", endTime: "22:00", date: "2014-03-26T23:00", pharmacy: {name: "ΧΟΝΔΡΟΣ ΧΡ.", location: "ΣΤΑΛΙΔΑ ", telephone: "2897032222"}, district: "ΣΤΑΛΙΔΑ-ΜΟΧΟΣ", nightWatch: false}, {startTime: "22:00", endTime: "08:30", date: "2014-03-26T09:30", pharmacy: {name: "ΓΟΥΣΙΑΔΗ ΧΡ", location: "ΓΟΥΒΕΣ 70014 ", telephone: "2897041680"}, district: "ΔΙΑΝΥΚΤΕΡΕΥΟΝ 22:00-08:30 ΕΠΟΜΕΝΟ ΠΡΩΙ", nightWatch: true}, {startTime: "08:30", endTime: "22:00", date: "2014-03-27T23:00", pharmacy: {name: "ΧΑΤΖΑΚΗΣ ΜΙΧ.", location: "ΕΛ. ΒΕΝΙΖΕΛΟΥ 127 ΛΙΜ. ΧΕΡΣΟΝΗΣΟΥ", telephone: "2897023420"}, district: "ΧΕΡΣΟΝΗΣΟΣ", nightWatch: false}, {startTime: "08:30", endTime: "22:00", date: "2014-03-27T23:00", pharmacy: {name: "ΜΠΕΛΙΒΑΝΗΣ ΕΜΜ.", location: "ΜΑΛΙΑ ", telephone: "2897031590"}, district: "ΜΑΛΛΙΑ", nightWatch: false}, {startTime: "08:30", endTime: "22:00", date: "2014-03-27T23:00", pharmacy: {name: "ΧΑΤΖΗΔΑΚΗΣ ΧΑΡ.", location: "ΚΟΚΚΙΝΙ ΧΑΝΙ ΑΝΩΠΟΛΗ", telephone: "2810761785"}, district: "ΓΟΥΒΕΣ-ΚΟΚΚΙΝΗ ΧΑΝΙ ΒΑΘΙΑΝΟΣ ΚΑΜΠΟΣ ΚΑΡΤΕΡΟΣ-ΕΠΙΣΚΟΠΗ", nightWatch: false}, {startTime: "08:30", endTime: "22:00", date: "2014-03-27T23:00", pharmacy: {name: "ΜΠΟΡΜΠΟΥΔΑΚΗΣ", location: "Λ.ΧΕΡΣΟΝΗΣΟΥ ΑΝΑΛΗΨΗ ", telephone: "2897024810"}, district: "ΑΝΑΛΗΨΗ ΧΕΡΣΟΝΗΣΣΟΥ", nightWatch: false}, {startTime: "08:30", endTime: "22:00", date: "2014-03-27T23:00", pharmacy: {name: "ΑΛΕΞΗΣ ΑΠ.", location: "ΜΟΧΟΣ ", telephone: "2897061301"}, district: "ΣΤΑΛΙΔΑ-ΜΟΧΟΣ", nightWatch: false}, {startTime: "22:00", endTime: "08:30", date: "2014-03-27T09:30", pharmacy: {name: "ΔΡΑΚΑΚΗΣ ΙΩΑΝ.", location: "ΑΝΩ ΧΕΡΣΟΝΗΣΟΣ ΠΕΔΙΑΔΟΣ", telephone: " 289702392"}, district: "ΔΙΑΝΥΚΤΕΡΕΥΟΝ 22:00-08:30 ΕΠΟΜΕΝΟ ΠΡΩΙ", nightWatch: true}, {startTime: "08:30", endTime: "22:00", date: "2014-03-28T23:00", pharmacy: {name: "ΘΕΟΔΩΡΙΔΗΣ ΙΟΡ.", location: "ΕΛ. ΒΕΝΙΖΕΛΟΥ 16 ΛΙΜ. ΧΕΡΣΟΝΗΣΟΥ", telephone: "2897023196"}, district: "ΧΕΡΣΟΝΗΣΟΣ", nightWatch: false}, {startTime: "08:30", endTime: "22:00", date: "2014-03-28T23:00", pharmacy: {name: "ΡΟΥΣΑΚΗ ΜΑΡ.", location: "25ης ΜΑΡΤΙΟΥ         ΜΑΛΙΑ", telephone: "2897033333"}, district: "ΜΑΛΛΙΑ", nightWatch: false}, {startTime: "08:30", endTime: "22:00", date: "2014-03-28T23:00", pharmacy: {name: "ΓΟΥΣΙΑΔΗ ΧΡ", location: "ΓΟΥΒΕΣ 70014 ", telephone: "2897041680"}, district: "ΓΟΥΒΕΣ-ΚΟΚΚΙΝΗ ΧΑΝΙ ΒΑΘΙΑΝΟΣ ΚΑΜΠΟΣ ΚΑΡΤΕΡΟΣ-ΕΠΙΣΚΟΠΗ", nightWatch: false}, {startTime: "08:30", endTime: "22:00", date: "2014-03-28T23:00", pharmacy: {name: "ΜΠΟΡΜΠΟΥΔΑΚΗΣ", location: "Λ.ΧΕΡΣΟΝΗΣΟΥ ΑΝΑΛΗΨΗ ", telephone: "2897024810"}, district: "ΑΝΑΛΗΨΗ ΧΕΡΣΟΝΗΣΣΟΥ", nightWatch: false}, {startTime: "08:30", endTime: "22:00", date: "2014-03-28T23:00", pharmacy: {name: "ΧΟΝΔΡΟΣ ΧΡ.", location: "ΣΤΑΛΙΔΑ ", telephone: "2897032222"}, district: "ΣΤΑΛΙΔΑ-ΜΟΧΟΣ", nightWatch: false}, {startTime: "22:00", endTime: "08:30", date: "2014-03-28T09:30", pharmacy: {name: "ΘΕΟΔΩΡΙΔΗΣ ΙΟΠ.", location: "ΕΛ. ΒΕΝΙΖΕΛΟΥ 16 ΛΙΜ. ΧΕΡΣΟΝΗΣΟΥ", telephone: "2897023196"}, district: "ΔΙΑΝΥΚΤΕΡΕΥΟΝ 22:00-08:30 ΕΠΟΜΕΝΟ ΠΡΩΙ", nightWatch: true}, {startTime: "08:30", endTime: "22:00", date: "2014-03-29T23:00", pharmacy: {name: "ΚΑΝΑΚΑΚΗΣ ΛΑΜ.", location: "ΕΛ. ΒΕΝΙΖΕΛΟΥ 206 ΛΙΜ. ΧΕΡΣΟΝΗΣΟΥ", telephone: "2897029136"}, district: "ΧΕΡΣΟΝΗΣΟΣ", nightWatch: false}, {startTime: "08:30", endTime: "22:00", date: "2014-03-29T23:00", pharmacy: {name: "ΧΑΡΑΛΑΜΠΑΚΗ ΓΙΩ.", location: "ΕΛ. ΒΕΝΙΖΕΛΟΥ 174 ΜΑΛΙΑ", telephone: "2897031332"}, district: "ΜΑΛΛΙΑ", nightWatch: false}, {startTime: "08:30", endTime: "22:00", date: "2014-03-29T23:00", pharmacy: {name: "ΠΑΤΙΤΑΚΗΣ ΑΝΤ.", location: "ΚΟΚΚΙΝΙ ΧΑΝΙ  ΣΤΑΣΗ ΧΑΤΖΗ", telephone: "2810761123"}, district: "ΓΟΥΒΕΣ-ΚΟΚΚΙΝΗ ΧΑΝΙ ΒΑΘΙΑΝΟΣ ΚΑΜΠΟΣ ΚΑΡΤΕΡΟΣ-ΕΠΙΣΚΟΠΗ", nightWatch: false}, {startTime: "08:30", endTime: "22:00", date: "2014-03-29T23:00", pharmacy: {name: "ΔΡΑΚΑΚΗΣ ΙΩΑΝ.", location: "ΑΝΩ ΧΕΡΣΟΝΗΣΟΣ ΠΕΔΙΑΔΟΣ", telephone: "2897023923"}, district: "ΑΝΑΛΗΨΗ ΧΕΡΣΟΝΗΣΣΟΥ", nightWatch: false}, {startTime: "08:30", endTime: "22:00", date: "2014-03-29T23:00", pharmacy: {name: "ΑΛΕΞΗΣ ΑΠ.", location: "ΜΟΧΟΣ ", telephone: "2897061301"}, district: "ΣΤΑΛΙΔΑ-ΜΟΧΟΣ", nightWatch: false}, {startTime: "22:00", endTime: "08:30", date: "2014-03-29T09:30", pharmacy: {name: "ΚΟΣΜΑΣ ΜΙΧ.", location: "ΠΑΡΑΛΙΑΚΗ ΜΑΛΙΩΝ ", telephone: "2897033923"}, district: "ΔΙΑΝΥΚΤΕΡΕΥΟΝ 22:00-08:30 ΕΠΟΜΕΝΟ ΠΡΩΙ", nightWatch: true}, {startTime: "08:30", endTime: "22:00", date: "2014-03-30T23:00", pharmacy: {name: "ΛΑΜΠΡΑΚΗ ΓΕΩΡ.", location: "ΕΛ. ΒΕΝΙΖΕΛΟΥ 73 ΛΙΜ. ΧΕΡΣΟΝΗΣΟΥ", telephone: "2897022473"}, district: "ΧΕΡΣΟΝΗΣΟΣ", nightWatch: false}, {startTime: "08:30", endTime: "22:00", date: "2014-03-30T23:00", pharmacy: {name: "ΚΟΣΜΑΣ ΜΙΧ.", location: "ΠΑΡΑΛΙΑΚΗ ΜΑΛΙΩΝ ΜΑΛΙΑ", telephone: "2897033923"}, district: "ΜΑΛΛΙΑ", nightWatch: false}, {startTime: "08:30", endTime: "22:00", date: "2014-03-30T23:00", pharmacy: {name: "ΠΑΤΙΤΑΚΗΣ ΑΝΤ.", location: "ΚΟΚΚΙΝΙ ΧΑΝΙ  ΣΤΑΣΗ ΧΑΤΖΗ", telephone: "2810761123"}, district: "ΓΟΥΒΕΣ-ΚΟΚΚΙΝΗ ΧΑΝΙ ΒΑΘΙΑΝΟΣ ΚΑΜΠΟΣ ΚΑΡΤΕΡΟΣ-ΕΠΙΣΚΟΠΗ", nightWatch: false}, {startTime: "08:30", endTime: "22:00", date: "2014-03-30T23:00", pharmacy: {name: "ΔΡΑΚΑΚΗΣ ΙΩΑΝ.", location: "ΑΝΩ ΧΕΡΣΟΝΗΣΟΣ ΠΕΔΙΑΔΟΣ", telephone: "2897023923"}, district: "ΑΝΑΛΗΨΗ ΧΕΡΣΟΝΗΣΣΟΥ", nightWatch: false}, {startTime: "08:30", endTime: "22:00", date: "2014-03-30T23:00", pharmacy: {name: "ΧΟΝΔΡΟΣ ΧΡ.", location: "ΣΤΑΛΙΔΑ ", telephone: "2897032222"}, district: "ΣΤΑΛΙΔΑ-ΜΟΧΟΣ", nightWatch: false}, {startTime: "22:00", endTime: "08:30", date: "2014-03-30T09:30", pharmacy: {name: "ΚΡΑΣΑΚΗΣ ΙΩΑΝ.", location: "ΜΑΛΙΑ ", telephone: "2897031900"}, district: "ΔΙΑΝΥΚΤΕΡΕΥΟΝ 22:00-08:30 ΕΠΟΜΕΝΟ ΠΡΩΙ", nightWatch: true}, {startTime: "08:30", endTime: "22:00", date: "2014-03-31T23:00", pharmacy: {name: "ΠΛΑΤΑΝΑΚΗ Μ.", location: "ΛΙΜ. ΧΕΡΣΟΝΗΣΟΥ ", telephone: "2897022268"}, district: "ΧΕΡΣΟΝΗΣΟΣ", nightWatch: false}, {startTime: "08:30", endTime: "22:00", date: "2014-03-31T23:00", pharmacy: {name: "ΚΡΑΣΑΚΗΣ ΙΩΑΝ.", location: "ΜΑΛΙΑ  ", telephone: "2897031900"}, district: "ΜΑΛΛΙΑ", nightWatch: false}, {startTime: "08:30", endTime: "22:00", date: "2014-03-31T23:00", pharmacy: {name: "ΦΕΥΓΑΣ ΠΑΝ.", location: "ΕΠΙΣΚΟΠΗ ΠΕΔΙΑΔΟΣ             ", telephone: "2810771712"}, district: "ΓΟΥΒΕΣ-ΚΟΚΚΙΝΗ ΧΑΝΙ ΒΑΘΙΑΝΟΣ ΚΑΜΠΟΣ ΚΑΡΤΕΡΟΣ-ΕΠΙΣΚΟΠΗ", nightWatch: false}, {startTime: "08:30", endTime: "22:00", date: "2014-03-31T23:00", pharmacy: {name: "ΔΡΑΚΑΚΗΣ ΙΩΑΝ.", location: "ΑΝΩ ΧΕΡΣΟΝΗΣΟΣ ΠΕΔΙΑΔΟΣ", telephone: " 289702392"}, district: "ΑΝΑΛΗΨΗ ΧΕΡΣΟΝΗΣΣΟΥ", nightWatch: false}, {startTime: "08:30", endTime: "22:00", date: "2014-03-31T23:00", pharmacy: {name: "ΑΛΕΞΗΣ ΑΠ.", location: "ΜΟΧΟΣ ", telephone: "2897061301"}, district: "ΣΤΑΛΙΔΑ-ΜΟΧΟΣ", nightWatch: false}, {startTime: "22:00", endTime: "08:30", date: "2014-03-31T09:30", pharmacy: {name: "ΛΑΜΠΡΑΚΗ ΓΕΩΡ.", location: "ΕΛ. ΒΕΝΙΖΕΛΟΥ 73 ΧΕΡΣΟΝΗΣΣΟΣ", telephone: "2897022473"}, district: "ΔΙΑΝΥΚΤΕΡΕΥΟΝ 22:00-08:30 ΕΠΟΜΕΝΟ ΠΡΩΙ", nightWatch: true}, {startTime: "08:30", endTime: "22:00", date: "2014-04-01T23:00", pharmacy: {name: "ΧΑΤΖΗΔΑΚΗ ΚΑΛ.", location: "ΕΛ. ΒΕΝΙΖΕΛΟΥ 127 ΛΙΜ. ΧΕΡΣΟΝΗΣΟΥ", telephone: "2897023420"}, district: "ΧΕΡΣΟΝΗΣΟΣ", nightWatch: false}, {startTime: "08:30", endTime: "22:00", date: "2014-04-01T23:00", pharmacy: {name: "ΜΠΕΛΙΒΑΝΗΣ ΕΜΜ.", location: "ΜΑΛΙΑ ", telephone: "2897031590"}, district: "ΜΑΛΛΙΑ", nightWatch: false}, {startTime: "08:30", endTime: "22:00", date: "2014-04-01T23:00", pharmacy: {name: "ΦΡΙΝΖΙΛΑ ΜΑΡΙΑ", location: "ΚΑΡΤΕΡΟΣ ΕΝΑΝΤΙ  ΠΛΑΖ ΕΟΤ", telephone: "2810381952"}, district: "ΓΟΥΒΕΣ-ΚΟΚΚΙΝΗ ΧΑΝΙ ΒΑΘΙΑΝΟΣ ΚΑΜΠΟΣ ΚΑΡΤΕΡΟΣ-ΕΠΙΣΚΟΠΗ", nightWatch: false}, {startTime: "08:30", endTime: "22:00", date: "2014-04-01T23:00", pharmacy: {name: "ΔΡΑΚΑΚΗΣ ΙΩΑΝ.", location: "ΑΝΩ ΧΕΡΣΟΝΗΣΟΣ ΠΕΔΙΑΔΟΣ", telephone: " 289702392"}, district: "ΑΝΑΛΗΨΗ ΧΕΡΣΟΝΗΣΣΟΥ", nightWatch: false}, {startTime: "08:30", endTime: "22:00", date: "2014-04-01T23:00", pharmacy: {name: "ΧΟΝΔΡΟΣ ΧΡ.", location: "ΣΤΑΛΙΔΑ ", telephone: "2897032222"}, district: "ΣΤΑΛΙΔΑ-ΜΟΧΟΣ", nightWatch: false}, {startTime: "22:00", endTime: "08:30", date: "2014-04-01T09:30", pharmacy: {name: "ΜΠΕΛΙΒΑΝΗ-ΔΗΜΟΥ", location: "ΜΑΛΙΑ ", telephone: "2897031000"}, district: "ΔΙΑΝΥΚΤΕΡΕΥΟΝ 22:00-08:30 ΕΠΟΜΕΝΟ ΠΡΩΙ", nightWatch: true}, {startTime: "08:30", endTime: "22:00", date: "2014-04-02T23:00", pharmacy: {name: "ΧΑΡΑΛΑΜΠΑΚΗΣ Θ.", location: "ΕΛ. ΒΕΝΙΖΕΛΟΥ 33 ΛΙΜ. ΧΕΡΣΟΝΗΣΟΥ", telephone: "2897022201"}, district: "ΧΕΡΣΟΝΗΣΟΣ", nightWatch: false}, {startTime: "08:30", endTime: "22:00", date: "2014-04-02T23:00", pharmacy: {name: "ΜΠΕΛΙΒΑΝΗ-ΔΗΜΟΥ", location: "ΜΑΛΙΑ ", telephone: "2897031000"}, district: "ΜΑΛΛΙΑ", nightWatch: false}, {startTime: "08:30", endTime: "22:00", date: "2014-04-02T23:00", pharmacy: {name: "ΧΑΤΖΗΔΑΚΗΣ ΧΑΡ.", location: "ΚΟΚΚΙΝΙ ΧΑΝΙ ΑΝΩΠΟΛΗ", telephone: "2810761785"}, district: "ΓΟΥΒΕΣ-ΚΟΚΚΙΝΗ ΧΑΝΙ ΒΑΘΙΑΝΟΣ ΚΑΜΠΟΣ ΚΑΡΤΕΡΟΣ-ΕΠΙΣΚΟΠΗ", nightWatch: false}, {startTime: "08:30", endTime: "22:00", date: "2014-04-02T23:00", pharmacy: {name: "ΔΡΑΚΑΚΗΣ ΙΩΑΝ.", location: "ΑΝΩ ΧΕΡΣΟΝΗΣΟΣ ΠΕΔΙΑΔΟΣ", telephone: " 289702392"}, district: "ΑΝΑΛΗΨΗ ΧΕΡΣΟΝΗΣΣΟΥ", nightWatch: false}, {startTime: "08:30", endTime: "22:00", date: "2014-04-02T23:00", pharmacy: {name: "ΑΛΕΞΗΣ ΑΠ.", location: "ΜΟΧΟΣ ", telephone: "2897061301"}, district: "ΣΤΑΛΙΔΑ-ΜΟΧΟΣ", nightWatch: false}, {startTime: "22:00", endTime: "08:30", date: "2014-04-02T09:30", pharmacy: {name: "ΜΠΕΛΙΒΑΝΗΣ ΕΜΜ.", location: "ΜΑΛΙΑ ", telephone: "2897031590"}, district: "ΔΙΑΝΥΚΤΕΡΕΥΟΝ 22:00-08:30 ΕΠΟΜΕΝΟ ΠΡΩΙ", nightWatch: true}, {startTime: "08:30", endTime: "22:00", date: "2014-04-03T23:00", pharmacy: {name: "ΧΑΡΑΛΑΜΠΑΚΗΣ ΧΡ.", location: "ΕΛ. ΒΕΝΙΖΕΛΟΥ 33 ΛΙΜ. ΧΕΡΣΟΝΗΣΟΥ", telephone: "2897022201"}, district: "ΧΕΡΣΟΝΗΣΟΣ", nightWatch: false}, {startTime: "08:30", endTime: "22:00", date: "2014-04-03T23:00", pharmacy: {name: "ΡΟΥΣΑΚΗ ΜΑΡ.", location: "25ης ΜΑΡΤΙΟΥ         ΜΑΛΙΑ", telephone: "2897033333"}, district: "ΜΑΛΛΙΑ", nightWatch: false}, {startTime: "08:30", endTime: "22:00", date: "2014-04-03T23:00", pharmacy: {name: "ΓΟΥΣΙΑΔΗ ΧΡ", location: "ΓΟΥΒΕΣ 70014 ", telephone: "2897041680"}, district: "ΓΟΥΒΕΣ-ΚΟΚΚΙΝΗ ΧΑΝΙ ΒΑΘΙΑΝΟΣ ΚΑΜΠΟΣ ΚΑΡΤΕΡΟΣ-ΕΠΙΣΚΟΠΗ", nightWatch: false}, {startTime: "08:30", endTime: "22:00", date: "2014-04-03T23:00", pharmacy: {name: "ΔΡΑΚΑΚΗΣ ΙΩΑΝ.", location: "ΑΝΩ ΧΕΡΣΟΝΗΣΟΣ ΠΕΔΙΑΔΟΣ", telephone: " 289702392"}, district: "ΑΝΑΛΗΨΗ ΧΕΡΣΟΝΗΣΣΟΥ", nightWatch: false}, {startTime: "08:30", endTime: "22:00", date: "2014-04-03T23:00", pharmacy: {name: "ΧΟΝΔΡΟΣ ΧΡ.", location: "ΣΤΑΛΙΔΑ ", telephone: "2897032222"}, district: "ΣΤΑΛΙΔΑ-ΜΟΧΟΣ", nightWatch: false}, {startTime: "22:00", endTime: "08:30", date: "2014-04-03T09:30", pharmacy: {name: "ΜΠΟΡΜΠΟΥΔΑΚΗΣ", location: "Λ. ΧΕΡΣΟΝΗΣΟΥ ", telephone: "2897024810"}, district: "ΔΙΑΝΥΚΤΕΡΕΥΟΝ 22:00-08:30 ΕΠΟΜΕΝΟ ΠΡΩΙ", nightWatch: true}, {startTime: "08:30", endTime: "22:00", date: "2014-04-04T23:00", pharmacy: {name: "ΧΑΤΖΑΚΗΣ ΜΙΧ.", location: "ΕΛ. ΒΕΝΙΖΕΛΟΥ 127 ΛΙΜ. ΧΕΡΣΟΝΗΣΟΥ", telephone: "2897023420"}, district: "ΧΕΡΣΟΝΗΣΟΣ", nightWatch: false}, {startTime: "08:30", endTime: "22:00", date: "2014-04-04T23:00", pharmacy: {name: "ΧΑΡΑΛΑΜΠΑΚΗ ΓΙΩ.", location: "ΕΛ. ΒΕΝΙΖΕΛΟΥ 174 ΜΑΛΙΑ", telephone: "2897031332"}, district: "ΜΑΛΛΙΑ", nightWatch: false}, {startTime: "08:30", endTime: "22:00", date: "2014-04-04T23:00", pharmacy: {name: "ΠΑΤΙΤΑΚΗΣ ΑΝΤ.", location: "ΚΟΚΚΙΝΙ ΧΑΝΙ  ΣΤΑΣΗ ΧΑΤΖΗ", telephone: "2810761123"}, district: "ΓΟΥΒΕΣ-ΚΟΚΚΙΝΗ ΧΑΝΙ ΒΑΘΙΑΝΟΣ ΚΑΜΠΟΣ ΚΑΡΤΕΡΟΣ-ΕΠΙΣΚΟΠΗ", nightWatch: false}, {startTime: "08:30", endTime: "22:00", date: "2014-04-04T23:00", pharmacy: {name: "ΔΡΑΚΑΚΗΣ ΙΩΑΝ.", location: "ΑΝΩ ΧΕΡΣΟΝΗΣΟΣ ΠΕΔΙΑΔΟΣ", telephone: " 289702392"}, district: "ΑΝΑΛΗΨΗ ΧΕΡΣΟΝΗΣΣΟΥ", nightWatch: false}, {startTime: "08:30", endTime: "22:00", date: "2014-04-04T23:00", pharmacy: {name: "ΑΛΕΞΗΣ ΑΠ.", location: "ΜΟΧΟΣ ", telephone: "2897061301"}, district: "ΣΤΑΛΙΔΑ-ΜΟΧΟΣ", nightWatch: false}, {startTime: "22:00", endTime: "08:30", date: "2014-04-04T09:30", pharmacy: {name: "ΠΑΤΙΤΑΚΗΣ ΑΝΤ.", location: "ΚΟΚΚΙΝΙ ΧΑΝΙ  ΣΤΑΣΗ ΧΑΤΖΗ", telephone: "2810761123"}, district: "ΔΙΑΝΥΚΤΕΡΕΥΟΝ 22:00-08:30 ΕΠΟΜΕΝΟ ΠΡΩΙ", nightWatch: true}, {startTime: "08:30", endTime: "22:00", date: "2014-04-05T23:00", pharmacy: {name: "ΘΕΟΔΩΡΙΔΗΣ ΙΟΠ.", location: "ΕΛ. ΒΕΝΙΖΕΛΟΥ 16 ΛΙΜ. ΧΕΡΣΟΝΗΣΟΥ", telephone: "2897023196"}, district: "ΧΕΡΣΟΝΗΣΟΣ", nightWatch: false}, {startTime: "08:30", endTime: "22:00", date: "2014-04-05T23:00", pharmacy: {name: "ΚΟΣΜΑΣ ΜΙΧ.", location: "ΠΑΡΑΛΙΑΚΗ ΜΑΛΙΩΝ ", telephone: "2897033923"}, district: "ΜΑΛΛΙΑ", nightWatch: false}, {startTime: "08:30", endTime: "22:00", date: "2014-04-05T23:00", pharmacy: {name: "ΣΑΛΤΑΡΗ ΚΩΝΣΤ.", location: "ΒΑΘΕΙΑΝΟΣ ΚΑΜΠΟΣ ΓΟΥΒΕΣ", telephone: "2810762325"}, district: "ΓΟΥΒΕΣ-ΚΟΚΚΙΝΗ ΧΑΝΙ ΒΑΘΙΑΝΟΣ ΚΑΜΠΟΣ ΚΑΡΤΕΡΟΣ-ΕΠΙΣΚΟΠΗ", nightWatch: false}, {startTime: "08:30", endTime: "22:00", date: "2014-04-05T23:00", pharmacy: {name: "ΜΠΟΡΜΠΟΥΔΑΚΗΣ", location: "Λ.ΧΕΡΣΟΝΗΣΟΥ ΑΝΑΛΗΨΗ ", telephone: "2897024810"}, district: "ΑΝΑΛΗΨΗ ΧΕΡΣΟΝΗΣΣΟΥ", nightWatch: false}, {startTime: "08:30", endTime: "22:00", date: "2014-04-05T23:00", pharmacy: {name: "ΧΟΝΔΡΟΣ ΧΡ.", location: "ΣΤΑΛΙΔΑ ", telephone: "2897032222"}, district: "ΣΤΑΛΙΔΑ-ΜΟΧΟΣ", nightWatch: false}, {startTime: "22:00", endTime: "08:30", date: "2014-04-05T09:30", pharmacy: {name: "ΠΛΑΤΑΝΑΚΗ Μ.", location: "ΛΙΜ. ΧΕΡΣΟΝΗΣΟΥ ", telephone: "2897022268"}, district: "ΔΙΑΝΥΚΤΕΡΕΥΟΝ 22:00-08:30 ΕΠΟΜΕΝΟ ΠΡΩΙ", nightWatch: true}, {startTime: "08:30", endTime: "22:00", date: "2014-04-06T23:00", pharmacy: {name: "ΚΑΝΑΚΑΚΗΣ ΛΑΜ.", location: "ΕΛ. ΒΕΝΙΖΕΛΟΥ 206 ΛΙΜ. ΧΕΡΣΟΝΗΣΟΥ", telephone: "2897029136"}, district: "ΧΕΡΣΟΝΗΣΟΣ", nightWatch: false}, {startTime: "08:30", endTime: "22:00", date: "2014-04-06T23:00", pharmacy: {name: "ΚΡΑΣΑΚΗΣ ΙΩΑΝ.", location: "ΜΑΛΙΑ ", telephone: "2897031900"}, district: "ΜΑΛΛΙΑ", nightWatch: false}, {startTime: "08:30", endTime: "22:00", date: "2014-04-06T23:00", pharmacy: {name: "ΣΑΛΤΑΡΗ ΚΩΝΣΤ.", location: "ΒΑΘΕΙΑΝΟΣ ΚΑΜΠΟΣ ΓΟΥΒΕΣ", telephone: "2810762325"}, district: "ΓΟΥΒΕΣ-ΚΟΚΚΙΝΗ ΧΑΝΙ ΒΑΘΙΑΝΟΣ ΚΑΜΠΟΣ ΚΑΡΤΕΡΟΣ-ΕΠΙΣΚΟΠΗ", nightWatch: false}, {startTime: "08:30", endTime: "22:00", date: "2014-04-06T23:00", pharmacy: {name: "ΜΠΟΡΜΠΟΥΔΑΚΗΣ", location: "Λ.ΧΕΡΣΟΝΗΣΟΥ ΑΝΑΛΗΨΗ ", telephone: "2897024810"}, district: "ΑΝΑΛΗΨΗ ΧΕΡΣΟΝΗΣΣΟΥ", nightWatch: false}, {startTime: "08:30", endTime: "22:00", date: "2014-04-06T23:00", pharmacy: {name: "ΑΛΕΞΗΣ ΑΠ.", location: "ΜΟΧΟΣ ", telephone: "2897061301"}, district: "ΣΤΑΛΙΔΑ-ΜΟΧΟΣ", nightWatch: false}, {startTime: "22:00", endTime: "08:30", date: "2014-04-06T09:30", pharmacy: {name: "ΡΟΥΣΑΚΗ ΜΑΡ.", location: "ΜΑΛΙΑ ", telephone: "2897033333"}, district: "ΔΙΑΝΥΚΤΕΡΕΥΟΝ 22:00-08:30 ΕΠΟΜΕΝΟ ΠΡΩΙ", nightWatch: true}, {startTime: "08:30", endTime: "22:00", date: "2014-04-07T23:00", pharmacy: {name: "ΛΑΜΠΡΑΚΗ ΓΕΩΡ.", location: "ΕΛ. ΒΕΝΙΖΕΛΟΥ 73 ΛΙΜ. ΧΕΡΣΟΝΗΣΟΥ", telephone: "2897022473"}, district: "ΧΕΡΣΟΝΗΣΟΣ", nightWatch: false}, {startTime: "08:30", endTime: "22:00", date: "2014-04-07T23:00", pharmacy: {name: "ΜΠΕΛΙΒΑΝΗ-ΔΗΜΟΥ", location: "ΜΑΛΙΑ  ", telephone: "2897031000"}, district: "ΜΑΛΛΙΑ", nightWatch: false}, {startTime: "08:30", endTime: "22:00", date: "2014-04-07T23:00", pharmacy: {name: "ΦΡΙΝΖΙΛΑ ΜΑΡΙΑ", location: "ΚΑΡΤΕΡΟΣ ΕΝΑΝΤΙ  ΠΛΑΖ ΕΟΤ", telephone: "2810381952"}, district: "ΓΟΥΒΕΣ-ΚΟΚΚΙΝΗ ΧΑΝΙ ΒΑΘΙΑΝΟΣ ΚΑΜΠΟΣ ΚΑΡΤΕΡΟΣ-ΕΠΙΣΚΟΠΗ", nightWatch: false}, {startTime: "08:30", endTime: "22:00", date: "2014-04-07T23:00", pharmacy: {name: "ΜΠΟΡΜΠΟΥΔΑΚΗΣ", location: "Λ.ΧΕΡΣΟΝΗΣΟΥ ΑΝΑΛΗΨΗ ", telephone: "2897024810"}, district: "ΑΝΑΛΗΨΗ ΧΕΡΣΟΝΗΣΣΟΥ", nightWatch: false}, {startTime: "08:30", endTime: "22:00", date: "2014-04-07T23:00", pharmacy: {name: "ΧΟΝΔΡΟΣ ΧΡ.", location: "ΣΤΑΛΙΔΑ ", telephone: "2897032222"}, district: "ΣΤΑΛΙΔΑ-ΜΟΧΟΣ", nightWatch: false}, {startTime: "22:00", endTime: "08:30", date: "2014-04-07T09:30", pharmacy: {name: "ΣΑΛΤΑΡΗ ΚΩΝΣΤ.", location: "ΒΑΘΕΙΑΝΟΣ ΚΑΜΠΟΣ ΓΟΥΒΕΣ", telephone: "2810762325"}, district: "ΔΙΑΝΥΚΤΕΡΕΥΟΝ 22:00-08:30 ΕΠΟΜΕΝΟ ΠΡΩΙ", nightWatch: true}, {startTime: "08:30", endTime: "22:00", date: "2014-04-08T23:00", pharmacy: {name: "ΠΛΑΤΑΝΑΚΗ Μ.", location: "ΕΛ. ΒΕΝΙΖΕΛΟΥ 105 ΛΙΜ. ΧΕΡΣΟΝΗΣΟΥ", telephone: "2897022268"}, district: "ΧΕΡΣΟΝΗΣΟΣ", nightWatch: false}, {startTime: "08:30", endTime: "22:00", date: "2014-04-08T23:00", pharmacy: {name: "ΜΠΕΛΙΒΑΝΗΣ ΕΜΜ.", location: "ΜΑΛΙΑ ", telephone: "2897031590"}, district: "ΜΑΛΛΙΑ", nightWatch: false}, {startTime: "08:30", endTime: "22:00", date: "2014-04-08T23:00", pharmacy: {name: "ΧΑΤΖΗΔΑΚΗΣ ΧΑΡ.", location: "ΚΟΚΚΙΝΙ ΧΑΝΙ ΑΝΩΠΟΛΗ", telephone: "2810761785"}, district: "ΓΟΥΒΕΣ-ΚΟΚΚΙΝΗ ΧΑΝΙ ΒΑΘΙΑΝΟΣ ΚΑΜΠΟΣ ΚΑΡΤΕΡΟΣ-ΕΠΙΣΚΟΠΗ", nightWatch: false}, {startTime: "08:30", endTime: "22:00", date: "2014-04-08T23:00", pharmacy: {name: "ΜΠΟΡΜΠΟΥΔΑΚΗΣ", location: "Λ.ΧΕΡΣΟΝΗΣΟΥ ΑΝΑΛΗΨΗ ", telephone: "2897024810"}, district: "ΑΝΑΛΗΨΗ ΧΕΡΣΟΝΗΣΣΟΥ", nightWatch: false}, {startTime: "08:30", endTime: "22:00", date: "2014-04-08T23:00", pharmacy: {name: "ΑΛΕΞΗΣ ΑΠ.", location: "ΜΟΧΟΣ ", telephone: "2897061301"}, district: "ΣΤΑΛΙΔΑ-ΜΟΧΟΣ", nightWatch: false}, {startTime: "22:00", endTime: "08:30", date: "2014-04-08T09:30", pharmacy: {name: "ΣΟΛΟΓΑΝΗΣ ΠΑΡ.", location: "ΓΟΥΒΕΣ ", telephone: "2897041100"}, district: "ΔΙΑΝΥΚΤΕΡΕΥΟΝ 22:00-08:30 ΕΠΟΜΕΝΟ ΠΡΩΙ", nightWatch: true}, {startTime: "08:30", endTime: "22:00", date: "2014-04-09T23:00", pharmacy: {name: "ΧΑΤΖΗΔΑΚΗ ΚΑΛ.", location: "ΕΛ. ΒΕΝΙΖΕΛΟΥ 127 ΛΙΜ. ΧΕΡΣΟΝΗΣΟΥ", telephone: "2897023420"}, district: "ΧΕΡΣΟΝΗΣΟΣ", nightWatch: false}, {startTime: "08:30", endTime: "22:00", date: "2014-04-09T23:00", pharmacy: {name: "ΡΟΥΣΑΚΗ ΜΑΡ.", location: "25ης ΜΑΡΤΙΟΥ         ΜΑΛΙΑ", telephone: "2897033333"}, district: "ΜΑΛΛΙΑ", nightWatch: false}, {startTime: "08:30", endTime: "22:00", date: "2014-04-09T23:00", pharmacy: {name: "ΓΟΥΣΙΑΔΗ ΧΡ", location: "ΓΟΥΒΕΣ 70014 ", telephone: "2897041680"}, district: "ΓΟΥΒΕΣ-ΚΟΚΚΙΝΗ ΧΑΝΙ ΒΑΘΙΑΝΟΣ ΚΑΜΠΟΣ ΚΑΡΤΕΡΟΣ-ΕΠΙΣΚΟΠΗ", nightWatch: false}, {startTime: "08:30", endTime: "22:00", date: "2014-04-09T23:00", pharmacy: {name: "ΜΠΟΡΜΠΟΥΔΑΚΗΣ", location: "Λ.ΧΕΡΣΟΝΗΣΟΥ ΑΝΑΛΗΨΗ ", telephone: "2897024810"}, district: "ΑΝΑΛΗΨΗ ΧΕΡΣΟΝΗΣΣΟΥ", nightWatch: false}, {startTime: "08:30", endTime: "22:00", date: "2014-04-09T23:00", pharmacy: {name: "ΧΟΝΔΡΟΣ ΧΡ.", location: "ΣΤΑΛΙΔΑ ", telephone: "2897032222"}, district: "ΣΤΑΛΙΔΑ-ΜΟΧΟΣ", nightWatch: false}, {startTime: "22:00", endTime: "08:30", date: "2014-04-09T09:30", pharmacy: {name: "ΧΑΡΑΛΑΜΠΑΚΗ ΓΙΩ.", location: "ΕΛ. ΒΕΝΙΖΕΛΟΥ 174 ΜΑΛΙΑ", telephone: "2897031332"}, district: "ΔΙΑΝΥΚΤΕΡΕΥΟΝ 22:00-08:30 ΕΠΟΜΕΝΟ ΠΡΩΙ", nightWatch: true}, {startTime: "08:30", endTime: "22:00", date: "2014-04-10T23:00", pharmacy: {name: "ΧΑΡΑΛΑΜΠΑΚΗΣ Θ.", location: "ΕΛ. ΒΕΝΙΖΕΛΟΥ 33 ΛΙΜ. ΧΕΡΣΟΝΗΣΟΥ", telephone: "2897022201"}, district: "ΧΕΡΣΟΝΗΣΟΣ", nightWatch: false}, {startTime: "08:30", endTime: "22:00", date: "2014-04-10T23:00", pharmacy: {name: "ΧΑΡΑΛΑΜΠΑΚΗ ΓΙΩ.", location: "ΕΛ. ΒΕΝΙΖΕΛΟΥ 174 ΜΑΛΙΑ", telephone: "2897031332"}, district: "ΜΑΛΛΙΑ", nightWatch: false}, {startTime: "08:30", endTime: "22:00", date: "2014-04-10T23:00", pharmacy: {name: "ΠΑΤΙΤΑΚΗΣ ΑΝΤ.", location: "ΚΟΚΚΙΝΙ ΧΑΝΙ  ΣΤΑΣΗ ΧΑΤΖΗ", telephone: "2810761123"}, district: "ΓΟΥΒΕΣ-ΚΟΚΚΙΝΗ ΧΑΝΙ ΒΑΘΙΑΝΟΣ ΚΑΜΠΟΣ ΚΑΡΤΕΡΟΣ-ΕΠΙΣΚΟΠΗ", nightWatch: false}, {startTime: "08:30", endTime: "22:00", date: "2014-04-10T23:00", pharmacy: {name: "ΜΠΟΡΜΠΟΥΔΑΚΗΣ", location: "Λ.ΧΕΡΣΟΝΗΣΟΥ ΑΝΑΛΗΨΗ ", telephone: "2897024810"}, district: "ΑΝΑΛΗΨΗ ΧΕΡΣΟΝΗΣΣΟΥ", nightWatch: false}, {startTime: "08:30", endTime: "22:00", date: "2014-04-10T23:00", pharmacy: {name: "ΑΛΕΞΗΣ ΑΠ.", location: "ΜΟΧΟΣ ", telephone: "2897061301"}, district: "ΣΤΑΛΙΔΑ-ΜΟΧΟΣ", nightWatch: false}, {startTime: "22:00", endTime: "08:30", date: "2014-04-10T09:30", pharmacy: {name: "ΧΑΡΑΛΑΜΠΑΚΗΣ Θ.", location: "ΕΛ. ΒΕΝΙΖΕΛΟΥ 33 ΛΙΜ. ΧΕΡΣΟΝΗΣΟΥ", telephone: "2897022201"}, district: "ΔΙΑΝΥΚΤΕΡΕΥΟΝ 22:00-08:30 ΕΠΟΜΕΝΟ ΠΡΩΙ", nightWatch: true}, {startTime: "08:30", endTime: "22:00", date: "2014-04-11T23:00", pharmacy: {name: "ΧΑΡΑΛΑΜΠΑΚΗΣ ΧΡ.", location: "ΕΛ. ΒΕΝΙΖΕΛΟΥ 33 ΛΙΜ. ΧΕΡΣΟΝΗΣΟΥ", telephone: "2897022201"}, district: "ΧΕΡΣΟΝΗΣΟΣ", nightWatch: false}, {startTime: "08:30", endTime: "22:00", date: "2014-04-11T23:00", pharmacy: {name: "ΚΟΣΜΑΣ ΜΙΧ.", location: "ΠΑΡΑΛΙΑΚΗ ΜΑΛΛΙΩΝ ΜΑΛΙΑ", telephone: "2897033923"}, district: "ΜΑΛΛΙΑ", nightWatch: false}, {startTime: "08:30", endTime: "22:00", date: "2014-04-11T23:00", pharmacy: {name: "ΣΑΛΤΑΡΗ ΚΩΝΣΤ.", location: "ΒΑΘΕΙΑΝΟΣ ΚΑΜΠΟΣ ΓΟΥΒΕΣ", telephone: "2810762325"}, district: "ΓΟΥΒΕΣ-ΚΟΚΚΙΝΗ ΧΑΝΙ ΒΑΘΙΑΝΟΣ ΚΑΜΠΟΣ ΚΑΡΤΕΡΟΣ-ΕΠΙΣΚΟΠΗ", nightWatch: false}, {startTime: "08:30", endTime: "22:00", date: "2014-04-11T23:00", pharmacy: {name: "ΜΠΟΡΜΠΟΥΔΑΚΗΣ", location: "Λ.ΧΕΡΣΟΝΗΣΟΥ ΑΝΑΛΗΨΗ ", telephone: "2897024810"}, district: "ΑΝΑΛΗΨΗ ΧΕΡΣΟΝΗΣΣΟΥ", nightWatch: false}, {startTime: "08:30", endTime: "22:00", date: "2014-04-11T23:00", pharmacy: {name: "ΧΟΝΔΡΟΣ ΧΡ.", location: "ΣΤΑΛΙΔΑ ", telephone: "2897032222"}, district: "ΣΤΑΛΙΔΑ-ΜΟΧΟΣ", nightWatch: false}, {startTime: "22:00", endTime: "08:30", date: "2014-04-11T09:30", pharmacy: {name: "ΧΑΡΑΛΑΜΠΑΚΗΣ ΧΡ", location: "ΕΛ. ΒΕΝΙΖΕΛΟΥ 33 ΛΙΜ. ΧΕΡΣΟΝΗΣΟΥ", telephone: "2897022201"}, district: "ΔΙΑΝΥΚΤΕΡΕΥΟΝ 22:00-08:30 ΕΠΟΜΕΝΟ ΠΡΩΙ", nightWatch: true}, {startTime: "08:30", endTime: "22:00", date: "2014-04-12T23:00", pharmacy: {name: "ΧΑΤΖΑΚΗΣ ΜΙΧ.", location: "ΕΛ. ΒΕΝΙΖΕΛΟΥ 127 ΛΙΜ. ΧΕΡΣΟΝΗΣΟΥ", telephone: "2897023420"}, district: "ΧΕΡΣΟΝΗΣΟΣ", nightWatch: false}, {startTime: "08:30", endTime: "22:00", date: "2014-04-12T23:00", pharmacy: {name: "ΚΡΑΣΑΚΗΣ ΙΩΑΝ.", location: " ΜΑΛΙΑ", telephone: "2897031900"}, district: "ΜΑΛΛΙΑ", nightWatch: false}, {startTime: "08:30", endTime: "22:00", date: "2014-04-12T23:00", pharmacy: {name: "ΣΟΛΟΓΑΝΗΣ ΠΑΡ. ", location: " ΓΟΥΒΕΣ", telephone: "2897041100"}, district: "ΓΟΥΒΕΣ-ΚΟΚΚΙΝΗ ΧΑΝΙ ΒΑΘΙΑΝΟΣ ΚΑΜΠΟΣ ΚΑΡΤΕΡΟΣ-ΕΠΙΣΚΟΠΗ", nightWatch: false}, {startTime: "08:30", endTime: "22:00", date: "2014-04-12T23:00", pharmacy: {name: "ΔΡΑΚΑΚΗΣ ΙΩΑΝ.", location: "ΑΝΩ ΧΕΡΣΟΝΗΣΟΣ ΠΕΔΙΑΔΟΣ", telephone: " 289702392"}, district: "ΑΝΑΛΗΨΗ ΧΕΡΣΟΝΗΣΣΟΥ", nightWatch: false}, {startTime: "08:30", endTime: "22:00", date: "2014-04-12T23:00", pharmacy: {name: "ΑΛΕΞΗΣ ΑΠ.", location: "ΜΟΧΟΣ ", telephone: "2897061301"}, district: "ΣΤΑΛΙΔΑ-ΜΟΧΟΣ", nightWatch: false}, {startTime: "22:00", endTime: "08:30", date: "2014-04-12T09:30", pharmacy: {name: "ΧΑΤΖΑΚΗΣ ΜΙΧ.", location: "ΕΛ. ΒΕΝΙΖΕΛΟΥ 127 ΛΙΜ. ΧΕΡΣΟΝΗΣΟΥ", telephone: "2897023420"}, district: "ΔΙΑΝΥΚΤΕΡΕΥΟΝ 22:00-08:30 ΕΠΟΜΕΝΟ ΠΡΩΙ", nightWatch: true}, {startTime: "08:30", endTime: "22:00", date: "2014-04-13T23:00", pharmacy: {name: "ΘΕΟΔΩΡΙΔΗΣ ΙΟΡ.", location: "ΕΛ. ΒΕΝΙΖΕΛΟΥ 16 ΛΙΜ. ΧΕΡΣΟΝΗΣΟΥ", telephone: "2897023196"}, district: "ΧΕΡΣΟΝΗΣΟΣ", nightWatch: false}, {startTime: "08:30", endTime: "22:00", date: "2014-04-13T23:00", pharmacy: {name: "ΜΠΕΛΙΒΑΝΗ-ΔΗΜΟΥ", location: "ΜΑΛΙΑ ", telephone: "2897031000"}, district: "ΜΑΛΛΙΑ", nightWatch: false}, {startTime: "08:30", endTime: "22:00", date: "2014-04-13T23:00", pharmacy: {name: "ΣΟΛΟΓΑΝΗΣ ΠΑΡ. ", location: " ΓΟΥΒΕΣ", telephone: "2897041100"}, district: "ΓΟΥΒΕΣ-ΚΟΚΚΙΝΗ ΧΑΝΙ ΒΑΘΙΑΝΟΣ ΚΑΜΠΟΣ ΚΑΡΤΕΡΟΣ-ΕΠΙΣΚΟΠΗ", nightWatch: false}, {startTime: "08:30", endTime: "22:00", date: "2014-04-13T23:00", pharmacy: {name: "ΔΡΑΚΑΚΗΣ ΙΩΑΝ.", location: "ΑΝΩ ΧΕΡΣΟΝΗΣΟΣ ΠΕΔΙΑΔΟΣ", telephone: " 289702392"}, district: "ΑΝΑΛΗΨΗ ΧΕΡΣΟΝΗΣΣΟΥ", nightWatch: false}, {startTime: "08:30", endTime: "22:00", date: "2014-04-13T23:00", pharmacy: {name: "ΧΟΝΔΡΟΣ ΧΡ.", location: "ΣΤΑΛΙΔΑ ", telephone: "2897032222"}, district: "ΣΤΑΛΙΔΑ-ΜΟΧΟΣ", nightWatch: false}, {startTime: "22:00", endTime: "08:30", date: "2014-04-13T09:30", pharmacy: {name: "ΧΑΤΖΗΔΑΚΗ ΚΑΛ.", location: "ΕΛ. ΒΕΝΙΖΕΛΟΥ 127 ΛΙΜ. ΧΕΡΣΟΝΗΣΟΥ", telephone: "2897023420"}, district: "ΔΙΑΝΥΚΤΕΡΕΥΟΝ 22:00-08:30 ΕΠΟΜΕΝΟ ΠΡΩΙ", nightWatch: true}, {startTime: "08:30", endTime: "22:00", date: "2014-04-14T23:00", pharmacy: {name: "ΚΑΝΑΚΑΚΗΣ ΛΑΜ.", location: "ΕΛ. ΒΕΝΙΖΕΛΟΥ 206 ΛΙΜ. ΧΕΡΣΟΝΗΣΟΥ", telephone: "2897029136"}, district: "ΧΕΡΣΟΝΗΣΟΣ", nightWatch: false}, {startTime: "08:30", endTime: "22:00", date: "2014-04-14T23:00", pharmacy: {name: "ΜΠΕΛΙΒΑΝΗΣ ΕΜΜ.", location: "ΜΑΛΛΙΑ ", telephone: "2897031590"}, district: "ΜΑΛΛΙΑ", nightWatch: false}, {startTime: "08:30", endTime: "22:00", date: "2014-04-14T23:00", pharmacy: {name: "ΧΑΤΖΗΔΑΚΗΣ ΧΑΡ.", location: "ΚΟΚΚΙΝΙ ΧΑΝΙ ΑΝΩΠΟΛΗ", telephone: "2810761785"}, district: "ΓΟΥΒΕΣ-ΚΟΚΚΙΝΗ ΧΑΝΙ ΒΑΘΙΑΝΟΣ ΚΑΜΠΟΣ ΚΑΡΤΕΡΟΣ-ΕΠΙΣΚΟΠΗ", nightWatch: false}, {startTime: "08:30", endTime: "22:00", date: "2014-04-14T23:00", pharmacy: {name: "ΔΡΑΚΑΚΗΣ ΙΩΑΝ.", location: "ΑΝΩ ΧΕΡΣΟΝΗΣΟΣ ΠΕΔΙΑΔΟΣ", telephone: " 289702392"}, district: "ΑΝΑΛΗΨΗ ΧΕΡΣΟΝΗΣΣΟΥ", nightWatch: false}, {startTime: "08:30", endTime: "22:00", date: "2014-04-14T23:00", pharmacy: {name: "ΑΛΕΞΗΣ ΑΠ.", location: "ΜΟΧΟΣ ", telephone: "2897061301"}, district: "ΣΤΑΛΙΔΑ-ΜΟΧΟΣ", nightWatch: false}, {startTime: "22:00", endTime: "08:30", date: "2014-04-14T09:30", pharmacy: {name: "ΧΑΤΖΗΔΑΚΗΣ ΧΑΡ.", location: "ΚΟΚΚΙΝΙ ΧΑΝΙ ΑΝΩΠΟΛΗ", telephone: "2810761785"}, district: "ΔΙΑΝΥΚΤΕΡΕΥΟΝ 22:00-08:30 ΕΠΟΜΕΝΟ ΠΡΩΙ", nightWatch: true}, {startTime: "08:30", endTime: "22:00", date: "2014-04-15T23:00", pharmacy: {name: "ΛΑΜΠΡΑΚΗ ΓΕΩΡ.", location: "ΕΛ. ΒΕΝΙΖΕΛΟΥ 73 ΛΙΜ. ΧΕΡΣΟΝΗΣΟΥ", telephone: "2897022473"}, district: "ΧΕΡΣΟΝΗΣΟΣ", nightWatch: false}, {startTime: "08:30", endTime: "22:00", date: "2014-04-15T23:00", pharmacy: {name: "ΡΟΥΣΑΚΗ ΜΑΡ.", location: "25ης ΜΑΡΤΙΟΥ         ΜΑΛΛΙΑ", telephone: "2897033333"}, district: "ΜΑΛΛΙΑ", nightWatch: false}, {startTime: "08:30", endTime: "22:00", date: "2014-04-15T23:00", pharmacy: {name: "ΓΟΥΣΙΑΔΗ ΧΡ", location: "ΓΟΥΒΕΣ 70014 5Δ", telephone: "2897041680"}, district: "ΓΟΥΒΕΣ-ΚΟΚΚΙΝΗ ΧΑΝΙ ΒΑΘΙΑΝΟΣ ΚΑΜΠΟΣ ΚΑΡΤΕΡΟΣ-ΕΠΙΣΚΟΠΗ", nightWatch: false}, {startTime: "08:30", endTime: "22:00", date: "2014-04-15T23:00", pharmacy: {name: "ΔΡΑΚΑΚΗΣ ΙΩΑΝ.", location: "ΑΝΩ ΧΕΡΣΟΝΗΣΟΣ ΠΕΔΙΑΔΟΣ", telephone: " 289702392"}, district: "ΑΝΑΛΗΨΗ ΧΕΡΣΟΝΗΣΣΟΥ", nightWatch: false}, {startTime: "08:30", endTime: "22:00", date: "2014-04-15T23:00", pharmacy: {name: "ΧΟΝΔΡΟΣ ΧΡ.", location: "ΣΤΑΛΙΔΑ ", telephone: "2897032222"}, district: "ΣΤΑΛΙΔΑ-ΜΟΧΟΣ", nightWatch: false}, {startTime: "22:00", endTime: "08:30", date: "2014-04-15T09:30", pharmacy: {name: "ΧΟΝΔΡΟΣ ΧΡ.", location: "ΣΤΑΛΙΔΑ ", telephone: "2897032222"}, district: "ΔΙΑΝΥΚΤΕΡΕΥΟΝ 22:00-08:30 ΕΠΟΜΕΝΟ ΠΡΩΙ", nightWatch: true}, {startTime: "08:30", endTime: "22:00", date: "2014-04-16T23:00", pharmacy: {name: "ΠΛΑΤΑΝΑΚΗ Μ.", location: "ΕΛ. ΒΕΝΙΖΕΛΟΥ 105 ΛΙΜ. ΧΕΡΣΟΝΗΣΟΥ", telephone: "2897022268"}, district: "ΧΕΡΣΟΝΗΣΟΣ", nightWatch: false}, {startTime: "08:30", endTime: "22:00", date: "2014-04-16T23:00", pharmacy: {name: "ΧΑΡΑΛΑΜΠΑΚΗ ΓΙΩ.", location: "ΕΛ. ΒΕΝΙΖΕΛΟΥ 174 ΜΑΛΛΙΑ", telephone: "2897031332"}, district: "ΜΑΛΛΙΑ", nightWatch: false}, {startTime: "08:30", endTime: "22:00", date: "2014-04-16T23:00", pharmacy: {name: "ΠΑΤΙΤΑΚΗΣ ΑΝΤ.", location: "ΚΟΚΚΙΝΙ ΧΑΝΙ  ΣΤΑΣΗ ΧΑΤΖΗ", telephone: "2810761123"}, district: "ΓΟΥΒΕΣ-ΚΟΚΚΙΝΗ ΧΑΝΙ ΒΑΘΙΑΝΟΣ ΚΑΜΠΟΣ ΚΑΡΤΕΡΟΣ-ΕΠΙΣΚΟΠΗ", nightWatch: false}, {startTime: "08:30", endTime: "22:00", date: "2014-04-16T23:00", pharmacy: {name: "ΔΡΑΚΑΚΗΣ ΙΩΑΝ.", location: "ΑΝΩ ΧΕΡΣΟΝΗΣΟΣ ΠΕΔΙΑΔΟΣ", telephone: " 289702392"}, district: "ΑΝΑΛΗΨΗ ΧΕΡΣΟΝΗΣΣΟΥ", nightWatch: false}, {startTime: "08:30", endTime: "22:00", date: "2014-04-16T23:00", pharmacy: {name: "ΑΛΕΞΗΣ ΑΠ.", location: "ΜΟΧΟΣ ", telephone: "2897061301"}, district: "ΣΤΑΛΙΔΑ-ΜΟΧΟΣ", nightWatch: false}, {startTime: "22:00", endTime: "08:30", date: "2014-04-16T09:30", pharmacy: {name: "ΓΟΥΣΙΑΔΗ ΧΡ", location: "ΓΟΥΒΕΣ 70014 ", telephone: "2897041680"}, district: "ΔΙΑΝΥΚΤΕΡΕΥΟΝ 22:00-08:30 ΕΠΟΜΕΝΟ ΠΡΩΙ", nightWatch: true}, {startTime: "08:30", endTime: "22:00", date: "2014-04-17T23:00", pharmacy: {name: "ΧΑΤΖΗΔΑΚΗ ΚΑΛ.", location: "ΕΛ. ΒΕΝΙΖΕΛΟΥ 127 ΛΙΜ. ΧΕΡΣΟΝΗΣΟΥ", telephone: "2897023420"}, district: "ΧΕΡΣΟΝΗΣΟΣ", nightWatch: false}, {startTime: "08:30", endTime: "22:00", date: "2014-04-17T23:00", pharmacy: {name: "ΚΟΣΜΑΣ ΜΙΧ.", location: "ΠΑΡΑΛΙΑΚΗ ΜΑΛΛΙΩΝ ", telephone: "2897033923"}, district: "ΜΑΛΛΙΑ", nightWatch: false}, {startTime: "08:30", endTime: "22:00", date: "2014-04-17T23:00", pharmacy: {name: "ΣΑΛΤΑΡΗ ΚΩΝΣΤ.", location: "ΒΑΘΙΑΝΟΣ ΚΑΜΠΟΣ ΓΟΥΒΕΣ", telephone: "2810762325"}, district: "ΓΟΥΒΕΣ-ΚΟΚΚΙΝΗ ΧΑΝΙ ΒΑΘΙΑΝΟΣ ΚΑΜΠΟΣ ΚΑΡΤΕΡΟΣ-ΕΠΙΣΚΟΠΗ", nightWatch: false}, {startTime: "08:30", endTime: "22:00", date: "2014-04-17T23:00", pharmacy: {name: "ΔΡΑΚΑΚΗΣ ΙΩΑΝ.", location: "ΑΝΩ ΧΕΡΣΟΝΗΣΟΣ ΠΕΔΙΑΔΟΣ", telephone: " 289702392"}, district: "ΑΝΑΛΗΨΗ ΧΕΡΣΟΝΗΣΣΟΥ", nightWatch: false}, {startTime: "08:30", endTime: "22:00", date: "2014-04-17T23:00", pharmacy: {name: "ΧΟΝΔΡΟΣ ΧΡ.", location: "ΣΤΑΛΙΔΑ ", telephone: "2897032222"}, district: "ΣΤΑΛΙΔΑ-ΜΟΧΟΣ", nightWatch: false}, {startTime: "22:00", endTime: "08:30", date: "2014-04-17T09:30", pharmacy: {name: "ΔΡΑΚΑΚΗΣ ΙΩΑΝ.", location: "ΑΝΩ ΧΕΡΣΟΝΗΣΟΣ ΠΕΔΙΑΔΟΣ", telephone: " 289702392"}, district: "ΔΙΑΝΥΚΤΕΡΕΥΟΝ 22:00-08:30 ΕΠΟΜΕΝΟ ΠΡΩΙ", nightWatch: true}, {startTime: "08:30", endTime: "22:00", date: "2014-04-18T23:00", pharmacy: {name: "ΧΑΡΑΛΑΜΠΑΚΗΣ Θ.", location: "ΕΛ. ΒΕΝΙΖΕΛΟΥ 33 ΛΙΜ. ΧΕΡΣΟΝΗΣΟΥ", telephone: "2897022201"}, district: "ΧΕΡΣΟΝΗΣΟΣ", nightWatch: false}, {startTime: "08:30", endTime: "22:00", date: "2014-04-18T23:00", pharmacy: {name: "ΚΡΑΣΑΚΗΣ ΙΩΑΝ.", location: "ΜΑΛΛΙΑ ", telephone: "2897031900"}, district: "ΜΑΛΛΙΑ", nightWatch: false}, {startTime: "08:30", endTime: "22:00", date: "2014-04-18T23:00", pharmacy: {name: "ΣΟΛΟΓΑΝΗΣ ΠΑΡ. ", location: "ΓΟΥΒΕΣ ", telephone: "2897041100"}, district: "ΓΟΥΒΕΣ-ΚΟΚΚΙΝΗ ΧΑΝΙ ΒΑΘΙΑΝΟΣ ΚΑΜΠΟΣ ΚΑΡΤΕΡΟΣ-ΕΠΙΣΚΟΠΗ", nightWatch: false}, {startTime: "08:30", endTime: "22:00", date: "2014-04-18T23:00", pharmacy: {name: "ΔΡΑΚΑΚΗΣ ΙΩΑΝ.", location: "ΑΝΩ ΧΕΡΣΟΝΗΣΟΣ ΠΕΔΙΑΔΟΣ", telephone: " 289702392"}, district: "ΑΝΑΛΗΨΗ ΧΕΡΣΟΝΗΣΣΟΥ", nightWatch: false}, {startTime: "08:30", endTime: "22:00", date: "2014-04-18T23:00", pharmacy: {name: "ΑΛΕΞΗΣ ΑΠ.", location: "ΜΟΧΟΣ ", telephone: "2897061301"}, district: "ΣΤΑΛΙΔΑ-ΜΟΧΟΣ", nightWatch: false}, {startTime: "22:00", endTime: "08:30", date: "2014-04-18T09:30", pharmacy: {name: "ΘΕΟΔΩΡΙΔΗΣ ΙΟΠ.", location: "ΕΛ. ΒΕΝΙΖΕΛΟΥ 16 ΛΙΜ. ΧΕΡΣΟΝΗΣΟΥ", telephone: "2897023196"}, district: "ΔΙΑΝΥΚΤΕΡΕΥΟΝ 22:00-08:30 ΕΠΟΜΕΝΟ ΠΡΩΙ", nightWatch: true}, {startTime: "08:30", endTime: "22:00", date: "2014-04-19T23:00", pharmacy: {name: "ΧΑΡΑΛΑΜΠΑΚΗΣ ΧΡ.", location: "ΕΛ. ΒΕΝΙΖΕΛΟΥ 33 ΛΙΜ. ΧΕΡΣΟΝΗΣΟΥ", telephone: "2897022201"}, district: "ΧΕΡΣΟΝΗΣΟΣ", nightWatch: false}, {startTime: "08:30", endTime: "22:00", date: "2014-04-19T23:00", pharmacy: {name: "ΜΠΕΛΙΒΑΝΗ-ΔΗΜΟΥ", location: "ΜΑΛΛΙΑ  ", telephone: "2897031000"}, district: "ΜΑΛΛΙΑ", nightWatch: false}, {startTime: "08:30", endTime: "22:00", date: "2014-04-19T23:00", pharmacy: {name: "ΣΤΟΛΙΔΗΣ ΠΑΝΤ.", location: "ΕΠΙΣΚΟΠΗ ΠΕΔΙΑΔΟΣ ", telephone: "2810771006"}, district: "ΓΟΥΒΕΣ-ΚΟΚΚΙΝΗ ΧΑΝΙ ΒΑΘΙΑΝΟΣ ΚΑΜΠΟΣ ΚΑΡΤΕΡΟΣ-ΕΠΙΣΚΟΠΗ", nightWatch: false}, {startTime: "08:30", endTime: "22:00", date: "2014-04-19T23:00", pharmacy: {name: "ΜΠΟΡΜΠΟΥΔΑΚΗΣ", location: "Λ.ΧΕΡΣΟΝΗΣΟΥ ΑΝΑΛΗΨΗ ", telephone: "2897024810"}, district: "ΑΝΑΛΗΨΗ ΧΕΡΣΟΝΗΣΣΟΥ", nightWatch: false}, {startTime: "08:30", endTime: "22:00", date: "2014-04-19T23:00", pharmacy: {name: "ΧΟΝΔΡΟΣ ΧΡ.", location: "ΣΤΑΛΙΔΑ ", telephone: "2897032222"}, district: "ΣΤΑΛΙΔΑ-ΜΟΧΟΣ", nightWatch: false}, {startTime: "22:00", endTime: "08:30", date: "2014-04-19T09:30", pharmacy: {name: "ΚΟΣΜΑΣ ΜΙΧ.", location: "ΠΑΡΑΛΙΑΚΗ ΜΑΛΙΩΝ ", telephone: "2897033923"}, district: "ΔΙΑΝΥΚΤΕΡΕΥΟΝ 22:00-08:30 ΕΠΟΜΕΝΟ ΠΡΩΙ", nightWatch: true}, {startTime: "08:30", endTime: "22:00", date: "2014-04-20T23:00", pharmacy: {name: "ΧΑΤΖΑΚΗΣ ΜΙΧ.", location: "ΕΛ. ΒΕΝΙΖΕΛΟΥ 127 ΛΙΜ. ΧΕΡΣΟΝΗΣΟΥ", telephone: "2897023420"}, district: "ΧΕΡΣΟΝΗΣΟΣ", nightWatch: false}, {startTime: "08:30", endTime: "22:00", date: "2014-04-20T23:00", pharmacy: {name: "ΜΠΕΛΙΒΑΝΗΣ ΕΜΜ.", location: "ΜΑΛΛΙΑ ", telephone: "2897031590"}, district: "ΜΑΛΛΙΑ", nightWatch: false}, {startTime: "08:30", endTime: "22:00", date: "2014-04-20T23:00", pharmacy: {name: "ΣΤΟΛΙΔΗΣ ΠΑΝΤ.", location: "ΕΠΙΣΚΟΠΗ ΠΕΔΙΑΔΟΣ ", telephone: "2810771006"}, district: "ΓΟΥΒΕΣ-ΚΟΚΚΙΝΗ ΧΑΝΙ ΒΑΘΙΑΝΟΣ ΚΑΜΠΟΣ ΚΑΡΤΕΡΟΣ-ΕΠΙΣΚΟΠΗ", nightWatch: false}, {startTime: "08:30", endTime: "22:00", date: "2014-04-20T23:00", pharmacy: {name: "ΜΠΟΡΜΠΟΥΔΑΚΗΣ", location: "Λ.ΧΕΡΣΟΝΗΣΟΥ ΑΝΑΛΗΨΗ ", telephone: "2897024810"}, district: "ΑΝΑΛΗΨΗ ΧΕΡΣΟΝΗΣΣΟΥ", nightWatch: false}, {startTime: "08:30", endTime: "22:00", date: "2014-04-20T23:00", pharmacy: {name: "ΑΛΕΞΗΣ ΑΠ.", location: "ΜΟΧΟΣ ", telephone: "2897061301"}, district: "ΣΤΑΛΙΔΑ-ΜΟΧΟΣ", nightWatch: false}, {startTime: "22:00", endTime: "08:30", date: "2014-04-20T09:30", pharmacy: {name: "ΚΡΑΣΑΚΗΣ ΙΩΑΝ.", location: "ΜΑΛΙΑ ", telephone: "2897031900"}, district: "ΔΙΑΝΥΚΤΕΡΕΥΟΝ 22:00-08:30 ΕΠΟΜΕΝΟ ΠΡΩΙ", nightWatch: true}, {startTime: "08:30", endTime: "22:00", date: "2014-04-21T23:00", pharmacy: {name: "ΘΕΟΔΩΡΙΔΗΣ ΙΟΡ.", location: "ΕΛ. ΒΕΝΙΖΕΛΟΥ 16 ΛΙΜ. ΧΕΡΣΟΝΗΣΟΥ", telephone: "2897023196"}, district: "ΧΕΡΣΟΝΗΣΟΣ", nightWatch: false}, {startTime: "08:30", endTime: "22:00", date: "2014-04-21T23:00", pharmacy: {name: "ΡΟΥΣΑΚΗ ΜΑΡ.", location: "25ης ΜΑΡΤΙΟΥ         ΜΑΛΙΑ", telephone: "2897033333"}, district: "ΜΑΛΛΙΑ", nightWatch: false}, {startTime: "08:30", endTime: "22:00", date: "2014-04-21T23:00", pharmacy: {name: "ΓΟΥΣΙΑΔΗ ΧΡ", location: "ΓΟΥΒΕΣ 70014 ", telephone: "2897041680"}, district: "ΓΟΥΒΕΣ-ΚΟΚΚΙΝΗ ΧΑΝΙ ΒΑΘΙΑΝΟΣ ΚΑΜΠΟΣ ΚΑΡΤΕΡΟΣ-ΕΠΙΣΚΟΠΗ", nightWatch: false}, {startTime: "08:30", endTime: "22:00", date: "2014-04-21T23:00", pharmacy: {name: "ΜΠΟΡΜΠΟΥΔΑΚΗΣ", location: "Λ.ΧΕΡΣΟΝΗΣΟΥ ΑΝΑΛΗΨΗ ", telephone: " 289702481"}, district: "ΑΝΑΛΗΨΗ ΧΕΡΣΟΝΗΣΣΟΥ", nightWatch: false}, {startTime: "08:30", endTime: "22:00", date: "2014-04-21T23:00", pharmacy: {name: "ΧΟΝΔΡΟΣ ΧΡ.", location: "ΣΤΑΛΙΔΑ ", telephone: "2897032222"}, district: "ΣΤΑΛΙΔΑ-ΜΟΧΟΣ", nightWatch: false}, {startTime: "22:00", endTime: "08:30", date: "2014-04-21T09:30", pharmacy: {name: "ΛΑΜΠΡΑΚΗ ΓΕΩΡ.", location: "ΕΛ. ΒΕΝΙΖΕΛΟΥ 73 ΧΕΡΣΟΝΗΣΣΟΣ", telephone: "2897022473"}, district: "ΔΙΑΝΥΚΤΕΡΕΥΟΝ 22:00-08:30 ΕΠΟΜΕΝΟ ΠΡΩΙ", nightWatch: true}, {startTime: "08:30", endTime: "22:00", date: "2014-04-22T23:00", pharmacy: {name: "ΚΑΝΑΚΑΚΗΣ ΛΑΜ.", location: "ΕΛ. ΒΕΝΙΖΕΛΟΥ 206 ΛΙΜ. ΧΕΡΣΟΝΗΣΟΥ", telephone: "2897029136"}, district: "ΧΕΡΣΟΝΗΣΟΣ", nightWatch: false}, {startTime: "08:30", endTime: "22:00", date: "2014-04-22T23:00", pharmacy: {name: "ΧΑΡΑΛΑΜΠΑΚΗ ΓΙΩ.", location: "ΕΛ. ΒΕΝΙΖΕΛΟΥ 174 ΜΑΛΙΑ", telephone: "2897031332"}, district: "ΜΑΛΛΙΑ", nightWatch: false}, {startTime: "08:30", endTime: "22:00", date: "2014-04-22T23:00", pharmacy: {name: "ΠΑΤΙΤΑΚΗΣ ΑΝΤ.", location: "ΚΟΚΚΙΝΙ ΧΑΝΙ  ΣΤΑΣΗ ΧΑΤΖΗ", telephone: "2810761123"}, district: "ΓΟΥΒΕΣ-ΚΟΚΚΙΝΗ ΧΑΝΙ ΒΑΘΙΑΝΟΣ ΚΑΜΠΟΣ ΚΑΡΤΕΡΟΣ-ΕΠΙΣΚΟΠΗ", nightWatch: false}, {startTime: "08:30", endTime: "22:00", date: "2014-04-22T23:00", pharmacy: {name: "ΜΠΟΡΜΠΟΥΔΑΚΗΣ", location: "Λ.ΧΕΡΣΟΝΗΣΟΥ ΑΝΑΛΗΨΗ ", telephone: " 289702481"}, district: "ΑΝΑΛΗΨΗ ΧΕΡΣΟΝΗΣΣΟΥ", nightWatch: false}, {startTime: "08:30", endTime: "22:00", date: "2014-04-22T23:00", pharmacy: {name: "ΑΛΕΞΗΣ ΑΠ.", location: "ΜΟΧΟΣ ΠΕΔΙΑΔΟΣ", telephone: "2897061301"}, district: "ΣΤΑΛΙΔΑ-ΜΟΧΟΣ", nightWatch: false}, {startTime: "22:00", endTime: "08:30", date: "2014-04-22T09:30", pharmacy: {name: "ΜΠΕΛΙΒΑΝΗ-ΔΗΜΟΥ", location: "ΜΑΛΙΑ ", telephone: "2897031000"}, district: "ΔΙΑΝΥΚΤΕΡΕΥΟΝ 22:00-08:30 ΕΠΟΜΕΝΟ ΠΡΩΙ", nightWatch: true}, {startTime: "08:30", endTime: "22:00", date: "2014-04-23T23:00", pharmacy: {name: "ΛΑΜΠΡΑΚΗ ΓΡΩΡ.", location: "ΕΛ. ΒΕΝΙΖΕΛΟΥ 73 ΛΙΜ. ΧΕΡΣΟΝΗΣΟΥ", telephone: "2897022473"}, district: "ΧΕΡΣΟΝΗΣΟΣ", nightWatch: false}, {startTime: "08:30", endTime: "22:00", date: "2014-04-23T23:00", pharmacy: {name: "ΚΟΣΜΑΣ ΜΙΧ.", location: "ΠΑΡΑΛΙΑΚΗ ΜΑΛΙΩΝ ", telephone: "2897033923"}, district: "ΜΑΛΛΙΑ", nightWatch: false}, {startTime: "08:30", endTime: "22:00", date: "2014-04-23T23:00", pharmacy: {name: "ΣΑΛΤΑΡΗ ΚΩΝΣΤ.", location: "ΒΑΘΕΙΑΝΟΣ ΚΑΜΠΟΣ ΓΟΥΒΕΣ", telephone: "2810762325"}, district: "ΓΟΥΒΕΣ-ΚΟΚΚΙΝΗ ΧΑΝΙ ΒΑΘΙΑΝΟΣ ΚΑΜΠΟΣ ΚΑΡΤΕΡΟΣ-ΕΠΙΣΚΟΠΗ", nightWatch: false}, {startTime: "08:30", endTime: "22:00", date: "2014-04-23T23:00", pharmacy: {name: "ΜΠΟΡΜΠΟΥΔΑΚΗΣ", location: "Λ.ΧΕΡΣΟΝΗΣΟΥ ΑΝΑΛΗΨΗ ", telephone: " 289702481"}, district: "ΑΝΑΛΗΨΗ ΧΕΡΣΟΝΗΣΣΟΥ", nightWatch: false}, {startTime: "08:30", endTime: "22:00", date: "2014-04-23T23:00", pharmacy: {name: "ΧΟΝΔΡΟΣ ΧΡ.", location: "ΣΤΑΛΙΔΑ ", telephone: "2897032222"}, district: "ΣΤΑΛΙΔΑ-ΜΟΧΟΣ", nightWatch: false}, {startTime: "22:00", endTime: "08:30", date: "2014-04-23T09:30", pharmacy: {name: "ΜΠΕΛΙΒΑΝΗΣ ΕΜΜ.", location: "ΜΑΛΙΑ ", telephone: "2897031590"}, district: "ΔΙΑΝΥΚΤΕΡΕΥΟΝ 22:00-08:30 ΕΠΟΜΕΝΟ ΠΡΩΙ", nightWatch: true}, {startTime: "08:30", endTime: "22:00", date: "2014-04-24T23:00", pharmacy: {name: "ΠΛΑΤΑΝΑΚΗ Μ.", location: "ΕΛ. ΒΕΝΙΖΕΛΟΥ 105 ΛΙΜ. ΧΕΡΣΟΝΗΣΟΥ", telephone: "2897022268"}, district: "ΧΕΡΣΟΝΗΣΟΣ", nightWatch: false}, {startTime: "08:30", endTime: "22:00", date: "2014-04-24T23:00", pharmacy: {name: "ΚΡΑΣΑΚΗΣ ΙΩΑΝ.", location: "ΜΑΛΙΑ ", telephone: "2897031900"}, district: "ΜΑΛΛΙΑ", nightWatch: false}, {startTime: "08:30", endTime: "22:00", date: "2014-04-24T23:00", pharmacy: {name: "ΣΟΛΟΓΑΝΗΣ ΠΑΡ. ", location: " ΓΟΥΒΕΣ", telephone: "2897041100"}, district: "ΓΟΥΒΕΣ-ΚΟΚΚΙΝΗ ΧΑΝΙ ΒΑΘΙΑΝΟΣ ΚΑΜΠΟΣ ΚΑΡΤΕΡΟΣ-ΕΠΙΣΚΟΠΗ", nightWatch: false}, {startTime: "08:30", endTime: "22:00", date: "2014-04-24T23:00", pharmacy: {name: "ΜΠΟΡΜΠΟΥΔΑΚΗΣ", location: "Λ.ΧΕΡΣΟΝΗΣΟΥ ΑΝΑΛΗΨΗ ", telephone: " 289702481"}, district: "ΑΝΑΛΗΨΗ ΧΕΡΣΟΝΗΣΣΟΥ", nightWatch: false}, {startTime: "08:30", endTime: "22:00", date: "2014-04-24T23:00", pharmacy: {name: "ΑΛΕΞΗΣ ΑΠ.", location: "ΜΟΧΟΣ ΠΕΔΙΑΔΟΣ ", telephone: "2897061301"}, district: "ΣΤΑΛΙΔΑ-ΜΟΧΟΣ", nightWatch: false}, {startTime: "22:00", endTime: "08:30", date: "2014-04-24T09:30", pharmacy: {name: "ΜΠΟΡΜΠΟΥΔΑΚΗΣ", location: "Λ. ΧΕΡΣΟΝΗΣΟΥ ", telephone: "2897024810"}, district: "ΔΙΑΝΥΚΤΕΡΕΥΟΝ 22:00-08:30 ΕΠΟΜΕΝΟ ΠΡΩΙ", nightWatch: true}, {startTime: "08:30", endTime: "22:00", date: "2014-04-25T23:00", pharmacy: {name: "ΧΑΤΖΗΔΑΚΗ ΚΑΛ.", location: "ΕΛ. ΒΕΝΙΖΕΛΟΥ 127 ΛΙΜ. ΧΕΡΣΟΝΗΣΟΥ", telephone: "2897023420"}, district: "ΧΕΡΣΟΝΗΣΟΣ", nightWatch: false}, {startTime: "08:30", endTime: "22:00", date: "2014-04-25T23:00", pharmacy: {name: "ΜΠΕΛΙΒΑΝΗ-ΔΗΜΟΥ", location: "ΜΑΛΙΑ  ", telephone: "2897031000"}, district: "ΜΑΛΛΙΑ", nightWatch: false}, {startTime: "08:30", endTime: "22:00", date: "2014-04-25T23:00", pharmacy: {name: "ΣΤΟΛΙΔΗΣ ΠΑΝΤ.", location: "ΕΠΙΣΚΟΠΗ ΠΕΔΙΑΔΟΣ ", telephone: "2810771006"}, district: "ΓΟΥΒΕΣ-ΚΟΚΚΙΝΗ ΧΑΝΙ ΒΑΘΙΑΝΟΣ ΚΑΜΠΟΣ ΚΑΡΤΕΡΟΣ-ΕΠΙΣΚΟΠΗ", nightWatch: false}, {startTime: "08:30", endTime: "22:00", date: "2014-04-25T23:00", pharmacy: {name: "ΜΠΟΡΜΠΟΥΔΑΚΗΣ", location: "Λ.ΧΕΡΣΟΝΗΣΟΥ ΑΝΑΛΗΨΗ ", telephone: " 289702481"}, district: "ΑΝΑΛΗΨΗ ΧΕΡΣΟΝΗΣΣΟΥ", nightWatch: false}, {startTime: "08:30", endTime: "22:00", date: "2014-04-25T23:00", pharmacy: {name: "ΧΟΝΔΡΟΣ ΧΡ.", location: "ΣΤΑΛΙΔΑ ", telephone: "2897032222"}, district: "ΣΤΑΛΙΔΑ-ΜΟΧΟΣ", nightWatch: false}, {startTime: "22:00", endTime: "08:30", date: "2014-04-25T09:30", pharmacy: {name: "ΠΑΤΙΤΑΚΗΣ ΑΝΤ.", location: "ΚΟΚΚΙΝΙ ΧΑΝΙ  ΣΤΑΣΗ ΧΑΤΖΗ", telephone: "2810761123"}, district: "ΔΙΑΝΥΚΤΕΡΕΥΟΝ 22:00-08:30 ΕΠΟΜΕΝΟ ΠΡΩΙ", nightWatch: true}, {startTime: "08:30", endTime: "22:00", date: "2014-04-26T23:00", pharmacy: {name: "ΧΑΡΑΛΑΜΠΑΚΗΣ Θ.", location: "ΕΛ. ΒΕΝΙΖΕΛΟΥ 33 ΛΙΜ. ΧΕΡΣΟΝΗΣΟΥ", telephone: "2897022201"}, district: "ΧΕΡΣΟΝΗΣΟΣ", nightWatch: false}, {startTime: "08:30", endTime: "22:00", date: "2014-04-26T23:00", pharmacy: {name: "ΜΠΕΛΙΒΑΝΗΣ ΕΜΜ.", location: "ΜΑΛΙΑ ", telephone: "2897031590"}, district: "ΜΑΛΛΙΑ", nightWatch: false}, {startTime: "08:30", endTime: "22:00", date: "2014-04-26T23:00", pharmacy: {name: "ΦΕΥΓΑΣ ΠΑΝ.", location: "ΕΠΙΣΚΟΠΗ ΠΕΔΙΑΔΟΣ ", telephone: "2810771712"}, district: "ΓΟΥΒΕΣ-ΚΟΚΚΙΝΗ ΧΑΝΙ ΒΑΘΙΑΝΟΣ ΚΑΜΠΟΣ ΚΑΡΤΕΡΟΣ-ΕΠΙΣΚΟΠΗ", nightWatch: false}, {startTime: "08:30", endTime: "22:00", date: "2014-04-26T23:00", pharmacy: {name: "ΔΡΑΚΑΚΗΣ ΙΩΑΝ.", location: "ΑΝΩ ΧΕΡΣΟΝΗΣΟΣ ΠΕΔΙΑΔΟΣ", telephone: "2897023923"}, district: "ΑΝΑΛΗΨΗ ΧΕΡΣΟΝΗΣΣΟΥ", nightWatch: false}, {startTime: "08:30", endTime: "22:00", date: "2014-04-26T23:00", pharmacy: {name: "ΑΛΕΞΗΣ ΑΠ.", location: "ΜΟΧΟΣ ", telephone: "2897061301"}, district: "ΣΤΑΛΙΔΑ-ΜΟΧΟΣ", nightWatch: false}, {startTime: "22:00", endTime: "08:30", date: "2014-04-26T09:30", pharmacy: {name: "ΠΛΑΤΑΝΑΚΗ Μ.", location: "ΛΙΜ. ΧΕΡΣΟΝΗΣΟΥ ", telephone: "2897022268"}, district: "ΔΙΑΝΥΚΤΕΡΕΥΟΝ 22:00-08:30 ΕΠΟΜΕΝΟ ΠΡΩΙ", nightWatch: true}, {startTime: "08:30", endTime: "22:00", date: "2014-04-27T23:00", pharmacy: {name: "ΧΑΡΑΛΑΜΠΑΚΗΣ ΧΡ.", location: "ΕΛ. ΒΕΝΙΖΕΛΟΥ 33 ΛΙΜ. ΧΕΡΣΟΝΗΣΟΥ", telephone: "2897022201"}, district: "ΧΕΡΣΟΝΗΣΟΣ", nightWatch: false}, {startTime: "08:30", endTime: "22:00", date: "2014-04-27T23:00", pharmacy: {name: "ΡΟΥΣΑΚΗ ΜΑΡ.", location: "25ης ΜΑΡΤΙΟΥ         ΜΑΛΙΑ", telephone: "2897033333"}, district: "ΜΑΛΛΙΑ", nightWatch: false}, {startTime: "08:30", endTime: "22:00", date: "2014-04-27T23:00", pharmacy: {name: "ΦΕΥΓΑΣ ΠΑΝ.", location: "ΕΠΙΣΚΟΠΗ ΠΕΔΙΑΔΟΣ ", telephone: "2810771712"}, district: "ΓΟΥΒΕΣ-ΚΟΚΚΙΝΗ ΧΑΝΙ ΒΑΘΙΑΝΟΣ ΚΑΜΠΟΣ ΚΑΡΤΕΡΟΣ-ΕΠΙΣΚΟΠΗ", nightWatch: false}, {startTime: "08:30", endTime: "22:00", date: "2014-04-27T23:00", pharmacy: {name: "ΔΡΑΚΑΚΗΣ ΙΩΑΝ.", location: "ΑΝΩ ΧΕΡΣΟΝΗΣΟΣ ΠΕΔΙΑΔΟΣ", telephone: "2897023923"}, district: "ΑΝΑΛΗΨΗ ΧΕΡΣΟΝΗΣΣΟΥ", nightWatch: false}, {startTime: "08:30", endTime: "22:00", date: "2014-04-27T23:00", pharmacy: {name: "ΧΟΝΔΡΟΣ ΧΡ.", location: "ΣΤΑΛΙΔΑ ", telephone: "2897032222"}, district: "ΣΤΑΛΙΔΑ-ΜΟΧΟΣ", nightWatch: false}, {startTime: "22:00", endTime: "08:30", date: "2014-04-27T09:30", pharmacy: {name: "ΡΟΥΣΑΚΗ ΜΑΡ.", location: "ΜΑΛΙΑ ", telephone: "2897033333"}, district: "ΔΙΑΝΥΚΤΕΡΕΥΟΝ 22:00-08:30 ΕΠΟΜΕΝΟ ΠΡΩΙ", nightWatch: true}, {startTime: "08:30", endTime: "22:00", date: "2014-04-28T23:00", pharmacy: {name: "ΧΑΤΖΑΚΗΣ ΜΙΧ.", location: "ΕΛ. ΒΕΝΙΖΕΛΟΥ 127 ΛΙΜ. ΧΕΡΣΟΝΗΣΟΥ", telephone: "2897023420"}, district: "ΧΕΡΣΟΝΗΣΟΣ", nightWatch: false}, {startTime: "08:30", endTime: "22:00", date: "2014-04-28T23:00", pharmacy: {name: "ΧΑΡΑΛΑΜΠΑΚΗ ΓΙΩ.", location: "ΕΛ. ΒΕΝΙΖΕΛΟΥ 174 ΜΑΛΙΑ", telephone: "2897031332"}, district: "ΜΑΛΛΙΑ", nightWatch: false}, {startTime: "08:30", endTime: "22:00", date: "2014-04-28T23:00", pharmacy: {name: "ΠΑΤΙΤΑΚΗΣ ΑΝΤ.", location: "ΚΟΚΚΙΝΙ ΧΑΝΙ  ΣΤΑΣΗ ΧΑΤΖΗ", telephone: "2810761123"}, district: "ΓΟΥΒΕΣ-ΚΟΚΚΙΝΗ ΧΑΝΙ ΒΑΘΙΑΝΟΣ ΚΑΜΠΟΣ ΚΑΡΤΕΡΟΣ-ΕΠΙΣΚΟΠΗ", nightWatch: false}, {startTime: "08:30", endTime: "22:00", date: "2014-04-28T23:00", pharmacy: {name: "ΔΡΑΚΑΚΗΣ ΙΩΑΝ.", location: "ΑΝΩ ΧΕΡΣΟΝΗΣΟΣ ΠΕΔΙΑΔΟΣ", telephone: " 289702392"}, district: "ΑΝΑΛΗΨΗ ΧΕΡΣΟΝΗΣΣΟΥ", nightWatch: false}, {startTime: "08:30", endTime: "22:00", date: "2014-04-28T23:00", pharmacy: {name: "ΑΛΕΞΗΣ ΑΠ.", location: "ΜΟΧΟΣ ", telephone: "2897061301"}, district: "ΣΤΑΛΙΔΑ-ΜΟΧΟΣ", nightWatch: false}, {startTime: "22:00", endTime: "08:30", date: "2014-04-28T09:30", pharmacy: {name: "ΣΑΛΤΑΡΗ ΚΩΝΣΤ.", location: "ΒΑΘΕΙΑΝΟΣ ΚΑΜΠΟΣ ΓΟΥΒΕΣ", telephone: "2810762325"}, district: "ΔΙΑΝΥΚΤΕΡΕΥΟΝ 22:00-08:30 ΕΠΟΜΕΝΟ ΠΡΩΙ", nightWatch: true}, {startTime: "08:30", endTime: "22:00", date: "2014-04-29T23:00", pharmacy: {name: "ΘΕΟΔΩΡΙΔΗΣ ΙΟΠ.", location: "ΕΛ. ΒΕΝΙΖΕΛΟΥ 16 ΛΙΜ. ΧΕΡΣΟΝΗΣΟΥ", telephone: "2897023196"}, district: "ΧΕΡΣΟΝΗΣΟΣ", nightWatch: false}, {startTime: "08:30", endTime: "22:00", date: "2014-04-29T23:00", pharmacy: {name: "ΚΟΣΜΑΣ ΜΙΧ.", location: "ΠΑΡΑΛΙΑΚΗ ΜΑΛΙΩΝ ", telephone: "2897033923"}, district: "ΜΑΛΛΙΑ", nightWatch: false}, {startTime: "08:30", endTime: "22:00", date: "2014-04-29T23:00", pharmacy: {name: "ΣΑΛΤΑΡΗ ΚΩΝΣΤ.", location: "ΒΑΘΕΙΑΝΟΣ ΚΑΜΠΟΣ ΓΟΥΒΕΣ", telephone: "2810762325"}, district: "ΓΟΥΒΕΣ-ΚΟΚΚΙΝΗ ΧΑΝΙ ΒΑΘΙΑΝΟΣ ΚΑΜΠΟΣ ΚΑΡΤΕΡΟΣ-ΕΠΙΣΚΟΠΗ", nightWatch: false}, {startTime: "08:30", endTime: "22:00", date: "2014-04-29T23:00", pharmacy: {name: "ΔΡΑΚΑΚΗΣ ΙΩΑΝ.", location: "ΑΝΩ ΧΕΡΣΟΝΗΣΟΣ ΠΕΔΙΑΔΟΣ", telephone: " 289702392"}, district: "ΑΝΑΛΗΨΗ ΧΕΡΣΟΝΗΣΣΟΥ", nightWatch: false}, {startTime: "08:30", endTime: "22:00", date: "2014-04-29T23:00", pharmacy: {name: "ΧΟΝΔΡΟΣ ΧΡ.", location: "ΣΤΑΛΙΔΑ ", telephone: "2897032222"}, district: "ΣΤΑΛΙΔΑ-ΜΟΧΟΣ", nightWatch: false}, {startTime: "22:00", endTime: "08:30", date: "2014-04-29T09:30", pharmacy: {name: "ΣΟΛΟΓΑΝΗΣ ΠΑΡ.", location: "ΓΟΥΒΕΣ ", telephone: "2897041100"}, district: "ΔΙΑΝΥΚΤΕΡΕΥΟΝ 22:00-08:30 ΕΠΟΜΕΝΟ ΠΡΩΙ", nightWatch: true}, {startTime: "08:30", endTime: "22:00", date: "2014-04-30T23:00", pharmacy: {name: "ΚΑΝΑΚΑΚΗΣ ΛΑΜ.", location: "ΕΛ. ΒΕΝΙΖΕΛΟΥ 206 ΛΙΜ. ΧΕΡΣΟΝΗΣΟΥ", telephone: "2897029136"}, district: "ΧΕΡΣΟΝΗΣΟΣ", nightWatch: false}, {startTime: "08:30", endTime: "22:00", date: "2014-04-30T23:00", pharmacy: {name: "ΚΡΑΣΑΚΗΣ ΙΩΑΝ.", location: "ΜΑΛΙΑ ", telephone: "2897031900"}, district: "ΜΑΛΛΙΑ", nightWatch: false}, {startTime: "08:30", endTime: "22:00", date: "2014-04-30T23:00", pharmacy: {name: "ΣΟΛΟΓΑΝΗΣ ΠΑΡ. ", location: "ΓΟΥΒΕΣ ", telephone: "2897041100"}, district: "ΓΟΥΒΕΣ-ΚΟΚΚΙΝΗ ΧΑΝΙ ΒΑΘΙΑΝΟΣ ΚΑΜΠΟΣ ΚΑΡΤΕΡΟΣ-ΕΠΙΣΚΟΠΗ", nightWatch: false}, {startTime: "08:30", endTime: "22:00", date: "2014-04-30T23:00", pharmacy: {name: "ΔΡΑΚΑΚΗΣ ΙΩΑΝ.", location: "ΑΝΩ ΧΕΡΣΟΝΗΣΟΣ ΠΕΔΙΑΔΟΣ", telephone: " 289702392"}, district: "ΑΝΑΛΗΨΗ ΧΕΡΣΟΝΗΣΣΟΥ", nightWatch: false}, {startTime: "08:30", endTime: "22:00", date: "2014-04-30T23:00", pharmacy: {name: "ΑΛΕΞΗΣ ΑΠ.", location: "ΜΟΧΟΣ ", telephone: "2897061301"}, district: "ΣΤΑΛΙΔΑ-ΜΟΧΟΣ", nightWatch: false}, {startTime: "22:00", endTime: "08:30", date: "2014-04-30T09:30", pharmacy: {name: "ΧΑΡΑΛΑΜΠΑΚΗ ΓΙΩ.", location: "ΕΛ. ΒΕΝΙΖΕΛΟΥ 174 ΜΑΛΙΑ", telephone: "2897031332"}, district: "ΔΙΑΝΥΚΤΕΡΕΥΟΝ 22:00-08:30 ΕΠΟΜΕΝΟ ΠΡΩΙ", nightWatch: true}, {startTime: "08:30", endTime: "22:00", date: "2014-05-01T23:00", pharmacy: {name: "ΛΑΜΠΡΑΚΗ ΓΕΩΡ.", location: "ΕΛ. ΒΕΝΙΖΕΛΟΥ 73 ΛΙΜ. ΧΕΡΣΟΝΗΣΟΥ", telephone: "2897022473"}, district: "ΧΕΡΣΟΝΗΣΟΣ", nightWatch: false}, {startTime: "08:30", endTime: "22:00", date: "2014-05-01T23:00", pharmacy: {name: "ΜΠΕΛΙΒΑΝΗ-ΔΗΜΟΥ", location: "ΜΑΛΙΑ  ", telephone: "2897031000"}, district: "ΜΑΛΛΙΑ", nightWatch: false}, {startTime: "08:30", endTime: "22:00", date: "2014-05-01T23:00", pharmacy: {name: "ΣΤΟΛΙΔΗΣ ΠΑΝΤ.", location: "ΕΠΙΣΚΟΠΗ ΠΕΔΙΑΔΟΣ ", telephone: "2810771006"}, district: "ΓΟΥΒΕΣ-ΚΟΚΚΙΝΗ ΧΑΝΙ ΒΑΘΙΑΝΟΣ ΚΑΜΠΟΣ ΚΑΡΤΕΡΟΣ-ΕΠΙΣΚΟΠΗ", nightWatch: false}, {startTime: "08:30", endTime: "22:00", date: "2014-05-01T23:00", pharmacy: {name: "ΔΡΑΚΑΚΗΣ ΙΩΑΝ.", location: "ΑΝΩ ΧΕΡΣΟΝΗΣΟΣ ΠΕΔΙΑΔΟΣ", telephone: " 289702392"}, district: "ΑΝΑΛΗΨΗ ΧΕΡΣΟΝΗΣΣΟΥ", nightWatch: false}, {startTime: "08:30", endTime: "22:00", date: "2014-05-01T23:00", pharmacy: {name: "ΧΟΝΔΡΟΣ ΧΡ.", location: "ΣΤΑΛΙΔΑ ", telephone: "2897032222"}, district: "ΣΤΑΛΙΔΑ-ΜΟΧΟΣ", nightWatch: false}, {startTime: "22:00", endTime: "08:30", date: "2014-05-01T09:30", pharmacy: {name: "ΧΑΡΑΛΑΜΠΑΚΗΣ Θ.", location: "ΕΛ. ΒΕΝΙΖΕΛΟΥ 33 ΛΙΜ. ΧΕΡΣΟΝΗΣΟΥ", telephone: "2897022201"}, district: "ΔΙΑΝΥΚΤΕΡΕΥΟΝ 22:00-08:30 ΕΠΟΜΕΝΟ ΠΡΩΙ", nightWatch: true}, {startTime: "08:30", endTime: "22:00", date: "2014-05-02T23:00", pharmacy: {name: "ΠΛΑΤΑΝΑΚΗ Μ.", location: "ΕΛ. ΒΕΝΙΖΕΛΟΥ 105 ΛΙΜ. ΧΕΡΣΟΝΗΣΟΥ", telephone: "2897022268"}, district: "ΧΕΡΣΟΝΗΣΟΣ", nightWatch: false}, {startTime: "08:30", endTime: "22:00", date: "2014-05-02T23:00", pharmacy: {name: "ΜΠΕΛΙΒΑΝΗΣ ΕΜΜ.", location: "ΜΑΛΙΑ ", telephone: "2897031590"}, district: "ΜΑΛΛΙΑ", nightWatch: false}, {startTime: "08:30", endTime: "22:00", date: "2014-05-02T23:00", pharmacy: {name: "ΦΕΥΓΑΣ ΠΑΝ.", location: "ΕΠΙΣΚΟΠΗ ΠΕΔΙΑΔΟΣ             ", telephone: "2810771712"}, district: "ΓΟΥΒΕΣ-ΚΟΚΚΙΝΗ ΧΑΝΙ ΒΑΘΙΑΝΟΣ ΚΑΜΠΟΣ ΚΑΡΤΕΡΟΣ-ΕΠΙΣΚΟΠΗ", nightWatch: false}, {startTime: "08:30", endTime: "22:00", date: "2014-05-02T23:00", pharmacy: {name: "ΔΡΑΚΑΚΗΣ ΙΩΑΝ.", location: "ΑΝΩ ΧΕΡΣΟΝΗΣΟΣ ΠΕΔΙΑΔΟΣ", telephone: " 289702392"}, district: "ΑΝΑΛΗΨΗ ΧΕΡΣΟΝΗΣΣΟΥ", nightWatch: false}, {startTime: "08:30", endTime: "22:00", date: "2014-05-02T23:00", pharmacy: {name: "ΑΛΕΞΗΣ ΑΠ.", location: "ΜΟΧΟΣ ", telephone: "2897061301"}, district: "ΣΤΑΛΙΔΑ-ΜΟΧΟΣ", nightWatch: false}, {startTime: "22:00", endTime: "08:30", date: "2014-05-02T09:30", pharmacy: {name: "ΧΑΡΑΛΑΜΠΑΚΗΣ ΧΡ", location: "ΕΛ. ΒΕΝΙΖΕΛΟΥ 33 ΛΙΜ. ΧΕΡΣΟΝΗΣΟΥ", telephone: "2897022201"}, district: "ΔΙΑΝΥΚΤΕΡΕΥΟΝ 22:00-08:30 ΕΠΟΜΕΝΟ ΠΡΩΙ", nightWatch: true}, {startTime: "08:30", endTime: "22:00", date: "2014-05-03T23:00", pharmacy: {name: "ΧΑΤΖΗΔΑΚΗ ΚΑΛ.", location: "ΕΛ. ΒΕΝΙΖΕΛΟΥ 127 ΛΙΜ. ΧΕΡΣΟΝΗΣΟΥ", telephone: "2897023420"}, district: "ΧΕΡΣΟΝΗΣΟΣ", nightWatch: false}, {startTime: "08:30", endTime: "22:00", date: "2014-05-03T23:00", pharmacy: {name: "ΡΟΥΣΑΚΗ ΜΑΡ.", location: "25ης ΜΑΡΤΙΟΥ         ΜΑΛΙΑ", telephone: "2897033333"}, district: "ΜΑΛΛΙΑ", nightWatch: false}, {startTime: "08:30", endTime: "22:00", date: "2014-05-03T23:00", pharmacy: {name: "ΦΡΙΝΖΙΛΑ ΜΑΡΙΑ", location: "ΚΑΡΤΕΡΟΣ ΕΝΑΝΤΙ  ΠΛΑΖ ΕΟΤ", telephone: "2810381952"}, district: "ΓΟΥΒΕΣ-ΚΟΚΚΙΝΗ ΧΑΝΙ ΒΑΘΙΑΝΟΣ ΚΑΜΠΟΣ ΚΑΡΤΕΡΟΣ-ΕΠΙΣΚΟΠΗ", nightWatch: false}, {startTime: "08:30", endTime: "22:00", date: "2014-05-03T23:00", pharmacy: {name: "ΜΠΟΡΜΠΟΥΔΑΚΗΣ", location: "Λ.ΧΕΡΣΟΝΗΣΟΥ ΑΝΑΛΗΨΗ ", telephone: "2897024810"}, district: "ΑΝΑΛΗΨΗ ΧΕΡΣΟΝΗΣΣΟΥ", nightWatch: false}, {startTime: "08:30", endTime: "22:00", date: "2014-05-03T23:00", pharmacy: {name: "ΧΟΝΔΡΟΣ ΧΡ.", location: "ΣΤΑΛΙΔΑ ", telephone: "2897032222"}, district: "ΣΤΑΛΙΔΑ-ΜΟΧΟΣ", nightWatch: false}, {startTime: "22:00", endTime: "08:30", date: "2014-05-03T09:30", pharmacy: {name: "ΧΑΤΖΑΚΗΣ ΜΙΧ.", location: "ΕΛ. ΒΕΝΙΖΕΛΟΥ 127 ΛΙΜ. ΧΕΡΣΟΝΗΣΟΥ", telephone: "2897023420"}, district: "ΔΙΑΝΥΚΤΕΡΕΥΟΝ 22:00-08:30 ΕΠΟΜΕΝΟ ΠΡΩΙ", nightWatch: true}, {startTime: "08:30", endTime: "22:00", date: "2014-05-04T23:00", pharmacy: {name: "ΧΑΡΑΛΑΜΠΑΚΗΣ Θ.", location: "ΕΛ. ΒΕΝΙΖΕΛΟΥ 33 ΛΙΜ. ΧΕΡΣΟΝΗΣΟΥ", telephone: "2897022201"}, district: "ΧΕΡΣΟΝΗΣΟΣ", nightWatch: false}, {startTime: "08:30", endTime: "22:00", date: "2014-05-04T23:00", pharmacy: {name: "ΧΑΡΑΛΑΜΠΑΚΗ ΓΙΩ.", location: "ΕΛ. ΒΕΝΙΖΕΛΟΥ 174 ΜΑΛΙΑ", telephone: "2897031332"}, district: "ΜΑΛΛΙΑ", nightWatch: false}, {startTime: "08:30", endTime: "22:00", date: "2014-05-04T23:00", pharmacy: {name: "ΦΡΙΝΖΙΛΑ ΜΑΡΙΑ", location: "ΚΑΡΤΕΡΟΣ ΕΝΑΝΤΙ  ΠΛΑΖ ΕΟΤ", telephone: "2810381952"}, district: "ΓΟΥΒΕΣ-ΚΟΚΚΙΝΗ ΧΑΝΙ ΒΑΘΙΑΝΟΣ ΚΑΜΠΟΣ ΚΑΡΤΕΡΟΣ-ΕΠΙΣΚΟΠΗ", nightWatch: false}, {startTime: "08:30", endTime: "22:00", date: "2014-05-04T23:00", pharmacy: {name: "ΜΠΟΡΜΠΟΥΔΑΚΗΣ", location: "Λ.ΧΕΡΣΟΝΗΣΟΥ ΑΝΑΛΗΨΗ ", telephone: "2897024810"}, district: "ΑΝΑΛΗΨΗ ΧΕΡΣΟΝΗΣΣΟΥ", nightWatch: false}, {startTime: "08:30", endTime: "22:00", date: "2014-05-04T23:00", pharmacy: {name: "ΑΛΕΞΗΣ ΑΠ.", location: "ΜΟΧΟΣ ", telephone: "2897061301"}, district: "ΣΤΑΛΙΔΑ-ΜΟΧΟΣ", nightWatch: false}, {startTime: "22:00", endTime: "08:30", date: "2014-05-04T09:30", pharmacy: {name: "ΧΑΤΖΗΔΑΚΗ ΚΑΛ.", location: "ΕΛ. ΒΕΝΙΖΕΛΟΥ 127 ΛΙΜ. ΧΕΡΣΟΝΗΣΟΥ", telephone: "2897023420"}, district: "ΔΙΑΝΥΚΤΕΡΕΥΟΝ 22:00-08:30 ΕΠΟΜΕΝΟ ΠΡΩΙ", nightWatch: true}]);
var currentDate = new Date();
var plusDays = function(date, days) {
    result = new Date(date.getTime());
    result.setTime(result.getTime() + days*24*60*60*1000);
    return result;
};
efimeries.forEach(function(e) {
    var dateObject = new Date(e.get('date'));
    e.set('dateObject', dateObject);
    var formatedDate = dateObject.getDate() + '/' + (dateObject.getMonth()+1) + '/' + dateObject.getFullYear();
    e.set('date', formatedDate);
    if(plusDays(dateObject, (e.get('nightWatch'))?1:0) < currentDate) {
        e.set('hide', true);
    }
});
var EfimeriesView = Backbone.View.extend({
    tagName: 'table',
    className: 'table table-striped',
    initialize: function() {
        this.collection.on('reset', this.render, this);
    },
    render: function() {
        $(this.el).empty();
        this.collection.forEach(function(e) {
            if (!e.get('hide')) {
                var v = new EfimeriaView({model: e});
                $(this.el).append(v.render().el);
                var pV = new PharmacyView({model: new Pharmacy(e.get('pharmacy'))});
                $(this.el).append(pV.render().el);
            }
        }, this);
        return this;
    }
});
var Tab = Backbone.Model.extend({});
var TabView = Backbone.View.extend({
    className: 'tab',
    initialize: function () {
        var myEfimeries = this.model.get('efimeries');
        this.efimeriesView = new EfimeriesView({collection: myEfimeries});
        var dateTabsModel = new DateTabs();
        dateTabsModel.efimeries = myEfimeries;
        this.dateTabsView = new DateTabsView({collection: dateTabsModel});
        this.changeDateTab = function () {
            $('.date-tabs.selected').removeClass('selected');
            $(this.dateTabsView.el).addClass('selected');
        }
    },
    events: {
        'click': function() {
            $('.'+this.className+'.selected').removeClass('selected');
            $(this.el).addClass('selected');
            $('#efimeries-tables .selected').removeClass('selected');
            $(this.efimeriesView.el).addClass('selected').parent().scrollTop(0);
            if(this.changeDateTab)
                this.changeDateTab();
        }
    },
    render: function() {
        $(this.el).html('<span>'+this.model.get('tabName')+'</span>');
        return this;
    }
});
var DateTab = Backbone.Model.extend({});
var DateTabView = TabView.extend({
    className: 'date-tab',
    initialize: function() {
        var myEfimeries = this.model.get('efimeries');
        this.efimeriesView = new EfimeriesView({collection: myEfimeries});
    }
});
var Tabs = Backbone.Collection.extend({
    model: Tab,
    groupByFunction: function(e) {
        return e.get('district');
    },
    efimeries: efimeries,
    createGroups: function() {
        var groups = this.efimeries.groupBy(this.groupByFunction, this);
        Object.keys(groups).forEach(function(k) {
            var e =  new Efimeries();
            e.reset(groups[k]);
            var t = new this.model({
                tabName: k,
                efimeries: e
            });
            this.add(t);
        }, this);
    }
});
var TabsView = Backbone.View.extend({
    id: 'efimeries-app',
    initialize: function() {
        this.collection.createGroups();
    },
    efimeriesTables: $('<div>', {id: 'efimeries-tables'}),
    tabsDiv: $('<div>', {id: 'district-tabs'}),
    append: function () {
        $(this.el).append(this.tabsDiv).append(this.efimeriesTables);
    },
    render: function() {
        $(this.el).empty();
        this.collection.forEach(function (t, i) {
            var tV = new TabView({model: t});
            var tab = tV.render().el;
            this.tabsDiv.append(tab);

            var dateTabs = tV.dateTabsView.render().el;
            $(this.el).append(dateTabs);

            var table = tV.efimeriesView.render().el;
            if (i == 0) {
                $(tab).addClass('selected');
                $(table).addClass('selected');
                $(dateTabs).addClass('selected')
            }
            this.efimeriesTables.append(table);
        }, this);
        this.append();
        return this;
    }
});
var DateTabs = Tabs.extend({
    model: DateTab,
    groupByFunction: function(e, i) {
        var date = e.get('dateObject');

        function dayString(date) {
            var months = ['Ιαν', 'Φεβ', 'Μαρ', 'Απρ', 'Μάι', 'Ιουν', 'Ιουλ', 'Αυγ', 'Σεπ', 'Οκτ', 'Νοέ', 'Δεκ'];
            return date.getDate() + '-' + months[date.getMonth()];
        }
        function atDayStart(d) {
            d.setTime(d.setTime(d.getTime()- d.getTime()%(1000*60*60*24)))
            return d;
        }
        if(i == 0 && e.get('hide')) {
            date = this.efimeries.find(function(e) {return !e.get('hide')}).get('dateObject');
        }
        if(i == 0 || date > lastDate) {
            firstDate = atDayStart(date);
            lastDate = atDayStart(plusDays(firstDate, 7));
            lastDate.setTime(lastDate.getTime()-1+lastDate.getTimezoneOffset()*60*1000);
        }
        //return date.getDate()+'-'+this.months[date.getMonth()];
//        return e.get('pharmacy').telephone;
        return dayString(firstDate) + ' - ' + dayString(lastDate) ;
    }
});
var DateTabsView = TabsView.extend({
    id: '',
    className: 'date-tabs',
    render: function() {
        this.collection.forEach(function(e, i) {
            if (!e.get('efimeries').every(function(e) { return e.get('hide')})) {
                var dTV = new DateTabView({model: e});
                var dateTab = dTV.render().el;
                $(this.el).append(dateTab);

                var table = dTV.efimeriesView.render().el;

                if (i == 0) {
                    $(dateTab).addClass('selected');
                    $(table).addClass('selected');
                }
                this.efimeriesTables.append(table);
            }
        },this)
        return this;
    }
});
var tabs = new Tabs();
var tabsView = new TabsView({collection: tabs});

var efimeriesView = new EfimeriesView({collection: efimeries});
$('body').html(tabsView.render().el);

$(window).on('load', function() {
    $('.tab').each(function(i, e) {
        var el = $(e);
        el.css('padding-top', (el.height() - el.children('span').height())/2)
    });
});

$('#efimeries-app').append($('<div>', {id: 'map'}));
google.maps.event.addDomListener(window, 'load', function () {
    map = new google.maps.Map(document.getElementById('map'), {
        center: new google.maps.LatLng(35.319020396631615, 25.349922073730447),
        zoom: 12
    });

    var request = {
        location: new google.maps.LatLng(35.319020396631615, 25.349922073730447),
        radius: '500',
        query: 'restaurant'
    };

    var r;
    var places = new Backbone.GoogleMaps.LocationCollection();
    var callback = function (results, status) {
        if (status != google.maps.places.PlacesServiceStatus.OK) {
            i++;
            if(i < names.length) {
                req();
            }
            else {
                var markerCollectionView = new Backbone.GoogleMaps.MarkerCollectionView({
                    collection: places,
                    map: map
                });
                markerCollectionView.render();
            }
            return;
        } else {
            r = results;
            places.add({
                lat: r[0].geometry.location.lat(),
                lng: r[0].geometry.location.lng(),
                title: currentName
            });

// To add the marker to the map, call setMap();
        }
        i++;
        if(i < names.length) {
            req();
        }
        else {
            var markerCollectionView = new Backbone.GoogleMaps.MarkerCollectionView({
                collection: places,
                map: map
            });
            markerCollectionView.render();
        }
    };
    service = new google.maps.places.PlacesService(map);
    var names = efimeries.map(function(e) {
        var p = e.get('pharmacy');
        return [p.name, p.location];
    });
    names.forEach(function(s, i) {
        names[i][1] = s[1].trim();
    });
    names = _.uniq(names, function(e) {
        return e[0];
    });
    var i = 0;
    var currentName;
    req = function() {
        currentName = names[i][0];
        request.query = names[i][1];
        service.textSearch(request, callback);
    }
    req();
//    names.forEach(function (a) {
//        request.query = a;
//        service.textSearch(request, callback);
//    });
});

//var search = $('<input>', {
//    type: 'text',
//    class:'search'
//});
//search.prependTo($('body'))
//search.on('input', function (e) {
//    efimeries.forEach(function(efimeria) {
//        if(!efimeria.get('pharmacy').name.toLocaleLowerCase().contains(e.currentTarget.value.toLocaleLowerCase())) {
//            efimeria.set('hide', true);
//        }
//        else {
//            efimeria.set('hide', false)
//        }
//    });
//    efimeriesView.render();
//});