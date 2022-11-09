// url de chama da API
var apiHost = "";

var listaDiv       = null;
var trLista        = null;
var tdListaChamada = null;
var tdListaAcao    = null;
var tdListaDia     = null;
var tdListaHora    = null;

var luz         = 0;
var agua        = 0
var umidade     = 0;
var temperatura = 0;
var nutriente   = 0;

var listaTemperaturaValor = [];
var listaUmidadeValor     = [];
var listaTemperaturaHora  = [];
var listaUmidadeHora      = [];

document.getElementById("comandoApagar").addEventListener("click",function () {
	$.ajax({url: apiHost+"painel_apagar", success: function(result){
    		alert(" comando enviado apagar "+result);
  	}});
});

document.getElementById("comandoAcender").addEventListener("click",function () {
        $.ajax({url: apiHost+"painel_acender", success: function(result){
                alert(" comando enviado acender "+result);
        }});
});

document.getElementById("comandoMolhar").addEventListener("click",function () {
        $.ajax({url: apiHost+"painel_molhar", success: function(result){
                alert(" comando enviado molhar "+result);
        }});
});

document.getElementById("comandoAdubar").addEventListener("click",function () {
        $.ajax({url: apiHost+"painel_adubar", success: function(result){
                alert(" comando enviado adubar "+result);
        }});
});

window.Apex = {
  chart: {
    foreColor: '#fff',
    toolbar: {
      show: false
    },
  },
  colors: ['#00ff00', '#17ead9', '#f02fc2'],
  stroke: {
    width: 3
  },
  dataLabels: {
    enabled: false
  },
  grid: {
    borderColor: "#00ff00",
  },
  xaxis: {
    axisTicks: {
      color: '#00ff00'
    },
    axisBorder: {
      color: "#333"
    }
  },
 tooltip: {
    theme: 'dark',
    x: {
      formatter: function (val) {
        return moment(new Date(val)).format("HH:mm:ss")
      }
    }
  },
  yaxis: {
    decimalsInFloat: 2,
    opposite: true,
    labels: {
      offsetX: -10
    }
  }
};
     
var configSatusSemanalPlantinha = {
          series: [{
          name: 'Media Semanal',
          data: [luz,agua, umidade, temperatura],
        }],
          chart: {
          height: 350,
          type: 'radar',
        },
        title: {
          text: 'Media de Saude da Plantinha'
        },
        xaxis: {
          categories: ['Luz', 'Agua', 'Umidade', 'Calor']
    	} 
};

var graficoSatusSemanalPlantinha = new ApexCharts(document.querySelector('#satusSemanalPlantinha'), configSatusSemanalPlantinha);
graficoSatusSemanalPlantinha.render();

var configUmidadeDiariaBarra = {
  chart: {
    height: 70,
    type: 'bar',
    stacked: true,
    sparkline: {
      enabled: true
    }
  },
  plotOptions: {
    bar: {
      horizontal: true,
      barHeight: '20%',
      colors: {
        backgroundBarColors: ['#40475D']
      }
    },
  },
  colors: ['#f0e6fa'],
  stroke: {
    width: 0,
  },
  series: [{
    name: 'Umidade',
    data: [0]
  }],
  title: {
    floating: true,
    offsetX: -10,
    offsetY: 5,
    text: 'Umidade'
  },
  subtitle: {
    floating: true,
    align: 'right',
    offsetY: 0,
    text: '',
    style: {
      fontSize: '20px'
    }
  },
  tooltip: {
    enabled: false
  },
  xaxis: {
    categories: ['Umidade'],
  },
  yaxis: {
    max: 100
  },
  fill: {
    type: 'gradient',
    gradient: {
      inverseColors: false,
      gradientToColors: ['#11ccee']
    }
  },
}

var graficoUmidadeDiariaBarra = new ApexCharts(document.querySelector('#umidadeDiariaBarra'), configUmidadeDiariaBarra);
graficoUmidadeDiariaBarra.render();


var configAguaDiariaBarra = {
  chart: {
    height: 70,
    type: 'bar',
    stacked: true,
    sparkline: {
      enabled: true
    }
  },
  plotOptions: {
    bar: {
      horizontal: true,
      barHeight: '20%',
      colors: {
        backgroundBarColors: ['#40475D']
      }
    },
  },
  colors: ['#4466ff'],
  stroke: {
    width: 0,
  },
  series: [{
    name: 'Agua',
    data: [0]
  }],
  title: {
    floating: true,
    offsetX: -10,
    offsetY: 5,
    text: 'Agua'
  },
  subtitle: {
    floating: true,
    align: 'right',
    offsetY: 0,
    text: '',
    style: {
      fontSize: '20px'
    }
  },
  tooltip: {
    enabled: false
  },
  xaxis: {
    categories: ['Agua'],
  },
  yaxis: {
    max: 900
  },
  fill: {
    type: 'gradient',
    gradient: {
      inverseColors: false,
      gradientToColors: ['#1ce1ce']
    }
  },
}

var graficoAguaDiariaBarra = new ApexCharts(document.querySelector('#aguaDiariaBarra'), configAguaDiariaBarra);
graficoAguaDiariaBarra.render();


var configTemperaturaDiariaBarra = {
  chart: {
    height: 70,
    type: 'bar',
    stacked: true,
    sparkline: {
      enabled: true
    }
  },
  plotOptions: {
    bar: {
      horizontal: true,
      barHeight: '20%',
      colors: {
        backgroundBarColors: ['#40475D']
      }
    },
  },
  colors: ['#eaa800'],
  stroke: {
    width: 0,
  },
  series: [{
    name: 'Temperatura',
    data: [0]
  }],
  fill: {
    type: 'gradient',
    gradient: {
      gradientToColors: ['#d62d20']
    }
  },
  title: {
    floating: true,
    offsetX: -10,
    offsetY: 5,
    text: 'Temperatura'
  },
  subtitle: {
    floating: true,
    align: 'right',
    offsetY: 0,
    text: '',
    style: {
      fontSize: '20px'
    }
  },
  tooltip: {
    enabled: false
  },
  xaxis: {
    categories: ['Temperatura'],
  },
  yaxis: {
    max: 100
  },
}

var graficoTemperaturaDiariaBarra = new ApexCharts(document.querySelector('#temperaturaDiariaBarra'), configTemperaturaDiariaBarra);
graficoTemperaturaDiariaBarra.render();


var configLuzDiariaBarra = {
  chart: {
    height: 70,
    type: 'bar',
    stacked: true,
    sparkline: {
      enabled: true
    }
  },
  plotOptions: {
    bar: {
      horizontal: true,
      barHeight: '20%',
      colors: {
        backgroundBarColors: ['#40475D']
      }
    },
  },
  colors: ['#A629C2'],
  stroke: {
    width: 0,
  },
  series: [{
    name: 'Luz',
    data: [0]
  }],
  fill: {
    type: 'gradient',
    gradient: {
      gradientToColors: ['#ffffff']
    }
  },
  title: {
    floating: true,
    offsetX: -10,
    offsetY: 5,
    text: 'Luz'
  },
  subtitle: {
    floating: true,
    align: 'right',
    offsetY: 0,
    text: '',
    style: {
      fontSize: '20px'
    }
  },
  tooltip: {
    enabled: false
  },
  xaxis: {
    categories: ['Luz'],
  },
  yaxis: {
    max: 1000
  },
}

var graficoLuzDiariaBarra = new ApexCharts(document.querySelector('#luzDiariaBarra'), configLuzDiariaBarra);
graficoLuzDiariaBarra.render();

function criarGraficoTemperaturaUmidade(){

$.getJSON(apiHost+"diario.temperatura.12", function(result){

        $.each(result, function(i, campoJson){
                listaTemperaturaValor.push(campoJson.valor);
                campoJson.hora = campoJson.hora+"H";
                listaTemperaturaHora.push(campoJson.hora);
        });
  });

 $.getJSON(apiHost+"diario.umidade.12", function(result){

        $.each(result, function(i, campoJson){
                listaUmidadeValor.push(campoJson.valor);
                campoJson.hora = campoJson.hora+"H";
                listaUmidadeHora.push(campoJson.hora);
        });
  });

	var options = {
          series: [
          {
            name: "Umidade",
            data: listaUmidadeValor
          },
          {
            name: "Temperatura",
            data: listaTemperaturaValor
          }
        ],
          chart: {
          height: 300,
          type: 'line',
          dropShadow: {
            enabled: true,
            color: '#00ff01',
            top: 18,
            left: 7,
            blur: 10,
            opacity: 0.2
          },
          toolbar: {
            show: false
          }
        },
        colors: ['#0000ff', '#ff0000'],
        dataLabels: {
          enabled: true,
        },
        stroke: {
          curve: 'smooth'
        },
        title: {
          text: 'Umidade por Temperatura 12h',
          align: 'left'
        },
        grid: {
          borderColor: '#00ff01',
          row: {
            colors: ['#262D47','#262D47'], // takes an array which will be repeated on columns
            opacity: 0.5
          },
        },
        markers: {
          size: 1
        },
        xaxis: {
          categories: listaTemperaturaHora,
	title: {
            text: ''
          }
        },
        yaxis: {
          title: {
            text: ''
          },
          min: 5,
          max: 100
        },
        legend: {
          position: 'top',
          horizontalAlign: 'right',
          floating: true,
          offsetY: -25,
          offsetX: -5
        }
        };

	setTimeout(function(){
    		var graficoUmidadeXTemperatura = new ApexCharts(document.querySelector("#chart"), options);
        	graficoUmidadeXTemperatura.render();	
	}, 5000);
}

// funcao de update com dados da api
function carregarDados(){
	luz         = 0;
	agua        = 0
	umidade     = 0;
	temperatura = 0;
	nutriente   = 0;

 $.getJSON(apiHost+"pegar.lista.comandos", function(result){
	listaDiv       = document.getElementById("lista.comandos");
	while (listaDiv.firstChild) {
    		listaDiv.removeChild(listaDiv.lastChild);
 	 }
	$.each(result, function(i, campoJson){
	    trLista        = document.createElement("tr");
	    tdListaChamada = document.createElement("td");
            tdListaAcao    = document.createElement("td");
            tdListaDia     = document.createElement("td");
            tdListaHora    = document.createElement("td");
	    tdListaChamada.innerHTML = campoJson.nome;
	    tdListaAcao.innerHTML    = campoJson.comando;
            tdListaDia.innerHTML     = campoJson.dia;
            tdListaHora.innerHTML    = campoJson.hora;
	    trLista.appendChild(tdListaChamada);
	    trLista.appendChild(tdListaAcao);
	    trLista.appendChild(tdListaDia);
	    trLista.appendChild(tdListaHora);
	    listaDiv.appendChild(trLista);
	});
  });

$.getJSON(apiHost+"media.semanal", function(result){
       $.each(result, function(i, campoJson){
		graficoSatusSemanalPlantinha.updateOptions({
			series: [{
      			data: [campoJson.luz,campoJson.agua,campoJson.umidade,campoJson.temperatura]
			}]
  		});
		document.getElementById("ultimoUpdate").innerHTML = campoJson.dia+" - "+campoJson.hora;	
       });
  });
$.getJSON(apiHost+"diario.umidade", function(result){
	$.each(result, function(i, campoJson){
               graficoUmidadeDiariaBarra.updateOptions({
        		series: [{
                		data: [campoJson.valor]
        		}],
    			subtitle: {
      				text: campoJson.valor
    			}
        	});
        });

  });
$.getJSON(apiHost+"diario.agua", function(result){
        $.each(result, function(i, campoJson){
               graficoAguaDiariaBarra.updateOptions({
                        series: [{
                                data: [campoJson.valor]
                        }],
                        subtitle: {
                                text: campoJson.valor
                        }
                });
        });

  });
$.getJSON(apiHost+"diario.temperatura", function(result){
        $.each(result, function(i, campoJson){
               graficoTemperaturaDiariaBarra.updateOptions({
                        series: [{
                                data: [campoJson.valor]
                        }],
                        subtitle: {
                                text: campoJson.valor
                        }
                });
        });

  });
$.getJSON(apiHost+"diario.luz", function(result){
        $.each(result, function(i, campoJson){
               graficoLuzDiariaBarra.updateOptions({
                        series: [{
                                data: [campoJson.valor]
                        }],
                        subtitle: {
                                text: campoJson.valor
                        }
                });
        });

  });
}

//untervalo de update de dados
window.setInterval(carregarDados,30000);

carregarDados();
criarGraficoTemperaturaUmidade();

