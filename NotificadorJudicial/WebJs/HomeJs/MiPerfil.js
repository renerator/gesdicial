function enviar() {
    $("#resultado").html("<div class='alert alert-success alert-dismissible fade in' role='alert'><button type='button' class='close' data-dismiss='alert' aria-label='Close'><span aria-hidden='true'>×</span></button><strong>Cambios Realizados</strong> La modificación se ha realizado con exito.</div>");
    setTimeout(function () {
        $("#resultado").fadeOut(1500);
    }, 3000);
}

$(document).ready(function () {
    Highcharts.chart('contenedor_chartPrimario', {
        chart: {
            type: 'column'
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
            text: 'Trámites realizados año 2016'
        },
        subtitle: {
            text: 'Diferencia de trámites según encargo, valores por cantidad'
        },
        xAxis: {
            categories: [
                'Ene',
                'Feb',
                'Mar',
                'Abr',
                'May',
                'Jun',
                'Jul',
                'Ago',
                'Sep',
                'Oct',
                'Nov',
                'Dic'
            ],
            crosshair: true
        },
        yAxis: {
            min: 0,
            title: {
                text: 'Cantidad'
            }
        },
        tooltip: {
            headerFormat: '<span style="font-size:10px">{point.key}</span><table>',
            pointFormat: '<tr><td style="color:{series.color};padding:0">{series.name}: </td>' +
                '<td style="padding:0"><b>{point.y:.1f} mm</b></td></tr>',
            footerFormat: '</table>',
            shared: true,
            useHTML: true
        },
        plotOptions: {
            column: {
                pointPadding: 0.2,
                borderWidth: 0
            }
        },
        series: [{
            name: 'Notificaciones',
            data: [49.9, 71.5, 106.4, 129.2, 144.0, 176.0, 135.6, 148.5, 216.4, 194.1, 95.6, 54.4]

        }, {
            name: 'Embargos',
            data: [83.6, 78.8, 98.5, 93.4, 106.0, 84.5, 105.0, 104.3, 91.2, 83.5, 106.6, 92.3]

        }, {
            name: 'Audiencias',
            data: [48.9, 38.8, 39.3, 41.4, 47.0, 48.3, 59.0, 59.6, 52.4, 65.2, 59.3, 51.2]

        }, {
            name: 'Inf. sumaria de Testigos',
            data: [42.4, 33.2, 34.5, 39.7, 52.6, 75.5, 57.4, 60.4, 47.6, 39.1, 46.8, 51.1]

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

    var chart = new Highcharts.Chart({
        chart: {
            renderTo: 'contenedor_chart3',
            type: 'column',
            options3d: {
                enabled: true,
                alpha: 15,
                beta: 15,
                depth: 50,
                viewDistance: 25
            }
        },
        exporting: {
            enabled: true
        },
        credits: {
            href: 'http://producesoftware.cl/',
            text: 'Produce Software Ltda.',
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
        title: {
            text: 'Valores últimos meses'
        },
        subtitle: {
            text: 'Test options by dragging the sliders below'
        },
        plotOptions: {
            column: {
                depth: 25
            }
        },
        series: [{
            data: [29.9, 71.5, 106.4, 129.2, 144.0, 176.0, 135.6, 148.5, 216.4, 194.1, 95.6, 54.4]
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

    Highcharts.chart('contenedor_chart',
        {
            exporting: {
                enabled: true
            },
            credits: {
                href: 'http://producesoftware.cl/',
                text: 'Produce Software Ltda.',
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
            title: {
                text: 'Trámites realizados hasta Marzo 2017'
            },

            subtitle: {
                text: 'Reporte realizado según información ingresada en el sistema'
            },

            yAxis: {
                title: {
                    text: 'Número de trámites'
                }
            },
            legend: {
                layout: 'vertical',
                align: 'right',
                verticalAlign: 'middle'
            },

            plotOptions: {
                series: {
                    pointStart: 2010
                }
            },

            series: [{
                name: 'Notificaciones',
                data: [392, 250, 717, 965, 703, 199, 371, 141]
            }, {
                name: 'Embargos',
                data: [249, 240, 297, 298, 324, 302, 102, 404]
            }, {
                name: 'Información sumaria de testigos',
                data: [117, 172, 160, 197, 201, 243, 147, 393]
            }, {
                name: 'Audiencia Testimonial',
                data: [null, null, 798, 135, 112, 224, 344, 342]
            }, {
                name: 'Otras',
                data: [129, 594, 810, 112, 698, 118, 182, 181]
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

    Highcharts.chart('contenedor_chart2', {
        chart: {
            plotBackgroundColor: null,
            plotBorderWidth: null,
            plotShadow: false,
            type: 'pie'
        },
        exporting: {
            enabled: true
        },
        credits: {
            href: 'http://producesoftware.cl/',
            text: 'Produce Software Ltda.',
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
        title: {
            text: 'Ultimos trámites solicitados'
        },
        tooltip: {
            pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
        },
        plotOptions: {
            pie: {
                allowPointSelect: true,
                cursor: 'pointer',
                dataLabels: {
                    enabled: true,
                    format: '<b>{point.name}</b>: {point.percentage:.1f} %',
                    style: {
                        color: (Highcharts.theme && Highcharts.theme.contrastTextColor) || 'black'
                    }
                }
            }
        },
        series: [{
            name: 'Trámites',
            colorByPoint: true,
            data: [{
                name: 'Notificaciones',
                y: 56.33
            }, {
                name: 'Embargos',
                y: 24.03,
                sliced: true,
                selected: true
            }, {
                name: 'Inf. Sumaria de testigos',
                y: 10.38
            }, {
                name: 'Audiencia Testimonial',
                y: 4.77
            }, {
                name: 'Inscripciones',
                y: 0.91
            }, {
                name: 'Otros',
                y: 0.2
            }]
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
