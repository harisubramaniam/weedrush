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
    $('#partmed').highcharts({
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
        title: {
            text: null
        },
        legend: {
            reversed: true,
            align: 'center',
            verticalAlign: 'bottom',
        },
        title: {
            text: 'Medical marijuana support by party',
            style: {
                fontFamily: 'Roboto',
                fontWeight: 'bold',
                fontSize: '2em'
            },
        },
        subtitle: {
            text: 'Certain states are discussing the idea of legalizing marijuana. Would you support or oppose the legalization of marijuana for the following purposes in your state: Medical treatment?',
            style: {
                fontFamily: 'Roboto Condensed',
                fontWeight: 'bold',
                fontSize: '1em'
            }
        },
        xAxis: {
            categories: ['Democrats', 'Independents', 'Republicans']
        },
        yAxis: {
            min: 0,
            title: {
                text: null
            }
        },
        tooltip: {
            pointFormat: '<span style="color:{series.color}">{series.name}</span>: <b>{point.y}%</b><br/>',
            shared: true,
            reversed: true
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
            series: {
                pointWidth: 60
            }
        },
        series: [{
            name: 'Oppose',
            data: [8, 9, 23],
            color: '#4A969E'
        }, {
            name: 'Neither support nor oppose',
            data: [5, 5, 8],
            color: '#516061'
        }, {
            name: 'Support',
            data: [87, 86, 69],
            color: '#FFC437'
        }]
    });
});