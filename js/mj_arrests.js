/* Define for default load */
var data = null;
var arrests_data = null;

/* Load default */
function start(){
  $.getJSON("data/mj_arrests.json",function(arrests) {
    arrests_data = arrests;
    // console.log(arrests_data);
  })
  .error(function(jqXHR, textStatus, errorThrown) {
    console.log("error " + textStatus);
    console.log(errorThrown);
  })
}

start();

$(document).ready(function() {
  //getDataByState(state); 
});

function update_charts() {
  getArrestsByState();
}

function getArrestsByState() {
    var count = 0;
    var i = 0;
    var year_arr = [];
    var total_arr = [];
    var male_arr = [];
    var female_arr = [];
    var white_arr = [];
    var black_arr = [];
    var others_arr = [];
    var usave_arr = [];

    var temp_state = $('#select-state').val();
    // console.log(temp_state);
    $.each(arrests_data, function() {
        loop_state = arrests_data[count].state; 
        if(temp_state == loop_state) {
            for (i = 0; i < arrests_data[count]["dataset"].length; i++) {
                year_arr.push(arrests_data[count]["dataset"][i]["year"]);
                total_arr.push(arrests_data[count]["dataset"][i]["total"]);
                male_arr.push(arrests_data[count]["dataset"][i]["male"]);
                female_arr.push(arrests_data[count]["dataset"][i]["female"]);
                white_arr.push(arrests_data[count]["dataset"][i]["white"]);
                black_arr.push(arrests_data[count]["dataset"][i]["black"]);
                others_arr.push(arrests_data[count]["dataset"][i]["others"]);
                usave_arr.push(arrests_data[count]["dataset"][i]["usave"]);
            }
        } 
        count++;
    });

    // console.log(arrests_data[0]["dataset"].length)
    // console.log(arrests_data[0].state)
    // if(arrests_data[0].state == "u.s. average") {
    //     for (j = 0; j < arrests_data[0]["dataset"].length; j++) {
    //         usave_arr.push(arrests_data[0]["dataset"][j]["total"]);
    //     }
    //     // console.log(usave_arr);
    // }

    $('#arrestsContainer').highcharts({
        chart: {
            type: 'line'
        },
        credits: {
            enabled: false
        },
        exporting: {
            enabled: false
        },
        title: {
            style: {
                fontFamily: 'Roboto Slab',
                fontWeight: 'bold',
                fontSize: '3em'
            },
            text: 'Arrests per 100,000 for ' + temp_state 
        },
        subtitle: {
            style: {
                fontFamily: 'Roboto Slab',
                fontSize: '2em'
            },
            text: null
        },
        xAxis: {
            labels: {
                style: {
                    fontFamily: 'Roboto Condensed',
                    fontSize: '1em'
                }
            },
            categories: year_arr
        },
        yAxis: {
            labels: {
                style: {
                    fontFamily: 'Roboto Condensed',
                    fontSize: '1em'
                }
            },
            title: {
                style: {
                    fontFamily: 'Roboto Condensed',
                    fontSize: '1em'
                },
                text: 'Number of Arrests'
            }
        },
        legend: {
            itemStyle: {
                fontFamily: 'Roboto Condensed',
                fontSize: '1em'
            },
            layout: 'horizontal',
            align: 'center',
            verticalAlignment: 'bottom',
            padding: 2
        },
        series: [{
            name: 'Total',
            color: "#FFC437",
            data: total_arr,
            marker: {
                symbol: "square",
                radius: 3
            }
        }, {
            name: 'Male',
            color: "#967421",
            data: male_arr,
            marker: {
                symbol: "circle",
                radius: 3
            }
        }, {
            name: 'Female',
            color: "#967421",
            data: female_arr,
            marker: {
                symbol: "circle",
                radius: 3
            }
        }, {
            name: 'Whites',
            color: "#CBD4C0",
            data: white_arr,
            marker: {
                symbol: "triangle",
                radius: 3
            }
        }, {
            name: 'Blacks',
            color: "#CBD4C0",
            data: black_arr,
            marker: {
                symbol: "triangle",
                radius: 3
            }
        }, {
            name: 'Others',
            color: "#CBD4C0",
            data: others_arr,
            marker: {
                symbol: "triangle",
                radius: 3
            }
        }, {
            name: 'U.S. Average',
            color: "#42330E",
            data: usave_arr,
            marker: {
                symbol: "diamond",
                radius: 3
            }
        }]

    });
}