$(document).ready(function () {
    //tortaGrfico
    Highcharts.chart('grafico_inicial', {
        chart: {
            type: 'area'
        },
        exporting: {
            enabled: true
        },
        lang: {
            contextButtonTitle: 'Opciones del gráfico',
            printChart: 'Imprimir Gráfico',
            downloadJPEG: 'Descargar gráfico en JPG',
            downloadPNG: 'Descargar gráfico en PNG',
            downloadPDF: 'Descargar gráfico documento PDF',
            downloadSVG: 'Descargar gráfico imagen en Vector SVG'
        },
        credits: {
            href: 'http://producesoftware.cl/',
            text: 'Produce Software Ltda.',
            enabled: true
        },
        title: {
            text: 'Encargos a la fecha'
        },
        subtitle: {
            text: 'Suma acumulada de trámites encargados a la fecha'
        },
        xAxis: {
            allowDecimals: false,
            labels: {
                formatter: function () {
                    return this.value; // clean, unformatted number for year
                }
            }
        },
        yAxis: {
            title: {
                text: 'Valor cantidad acumulada'
            },
            labels: {
                formatter: function () {
                    return this.value / 1000 + 'k';
                }
            }
        },
        tooltip: {
            pointFormat: '{series.name} Acumuladas <b>{point.y:,.0f}</b><br/>Durante el periodo {point.x}'
        },
        plotOptions: {
            area: {
                pointStart: 2013,
                marker: {
                    enabled: false,
                    symbol: 'circle',
                    radius: 2,
                    states: {
                        hover: {
                            enabled: true
                        }
                    }
                }
            }
        },
        series: [{
            name: 'Notificaciones',
            data: [550, 350, 70, 11, 150]
        }, {
            name: 'Otros (Embargos, Inscripciones, etc.)',
            data: [3, 35, 12, 115, 100]
        }],
        responsive: {
            rules: [{
                condition: {
                    maxWidth: 500
                },
                chartOptions: {
                    legend: {
                        align: 'center',
                        verticalAlign: 'bottom',
                        layout: 'horizontal'
                    },
                    yAxis: {
                        labels: {
                            align: 'left',
                            x: 0,
                            y: -5
                        },
                        title: {
                            text: null
                        }
                    },
                    subtitle: {
                        text: null
                    },
                    credits: {
                        enabled: false
                    }
                }
            }]
        }

    });
});