$(function () {
    Highcharts.setOptions({
        chart: {
            style: {
                fontFamily: 'Roboto Condensed'
            }
        },
        lang: {
            thousandsSep: ','
        }
    });
    $('#rec').highcharts({
        chart: {
            type: 'column'
        },
        credits: {
            text: 'Source: Harris Polls',
            href: '',
            position: {
                align: 'right',
                verticalAlign: 'bottom'
            }
        },
        exporting: {
            enabled: false
        },
        xAxis: {
            categories: ['2011', '2015']
        },
        yAxis: {
            labels: {
                format: '{value}%'
            },
            title: {
                enabled: false
            },
            min: 0
        },
        tooltip: {
            pointFormat: '<span style="color:{series.color}">{series.name}</span>: {point.percentage:.0f}%<br/>',
            shared: true
        },
        plotOptions: {
            column: {
                stacking: 'percent',
                events: {
                    legendItemClick: function () {
                        return false;
                    }
                }
            },
            allowPointSelect: false,
        },
        legend: {
            reversed: true,
            align: 'center',
            x: 0,
            layout: 'horizontal',
            verticalAlign: 'bottom',
            backgroundColor: (Highcharts.theme && Highcharts.theme.background2) || 'white',
            borderColor: '#CCC',
            borderWidth: 0,
            shadow: false
        },
        title: {
            text: 'Support for Recreational Marijuana',
            style: {
                fontFamily: 'Roboto',
                fontWeight: 'bold',
                fontSize: '2em'
            }
        },
        subtitle: {
            text: 'Certain states are discussing the idea of legalizing marijuana. Would you support or oppose the legalization of marijuana for the following purposes in your state: Recreational Use?',
            style: {
                fontFamily: 'Roboto Condensed',
                fontWeight: 'bold',
                fontSize: '1em'
            }
        },
        series: [{
            name: 'Oppose',
            color: '#4A969E',
            data: [18, 13]
        }, {
            name: 'Not Sure',
            color: '#516061',
            data: [7, 5]
        }, {
            name: 'Decline',
            color: '#967421',
            data: [1, 1]
        }, {
            name: 'Support',
            color: '#FFC437',
            data: [74, 81]
        }]
    });
});