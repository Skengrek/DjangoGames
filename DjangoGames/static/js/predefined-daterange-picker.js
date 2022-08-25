
$(function () {
    $('input[id="daterange"]').daterangepicker({
        autoUpdateInput: false,
        locale: {
            format: 'DD/MM/YYYY',
            cancelLabel: "Effacer",
            applyLabel: "Appliquer",
            customRangeLabel: "Filtre personnalisé..."
        },
        ranges: {
            "Aujourd'hui": [moment(), moment()],
            "Hier": [moment().subtract(1, 'days'), moment().subtract(1, 'days')],
            "Les 7 derniers jours": [moment().subtract(6, 'days'), moment()],
            "Les 30 derniers jours": [moment().subtract(29, 'days'), moment()],
            "Le mois en cours": [moment().startOf('month'), moment().endOf('month')],
            "Le mois précédent": [moment().subtract(1, 'month').startOf('month'), moment().subtract(1, 'month').endOf('month')]
        }
    });
    $('input[id="daterange"]').on('apply.daterangepicker', function (ev, picker) {
        $(this).val(picker.startDate.format(picker.locale.format) + ' - ' + picker.endDate.format(picker.locale.format));
    });

    $('input[id="daterange"]').on('cancel.daterangepicker', function (ev, picker) {
        $(this).val('');
    });
});
