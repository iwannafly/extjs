Ext.onReady(function(){ 
    var store = Ext.create('Ext.data.JsonStore', {
		fields: ['name', 'value'],
		data: [
			{'name': 'answer to life the universe and everything', 'value':42},
		]
	});

    Ext.create('Ext.panel.Panel', {
       renderTo: Ext.getBody(),
       title: 'Bitching gauge',
       width: 400,
       height: 300,
       layout: 'fit',
       items:[{
			xtype: 'chart',
            style: 'background:#fff',
            animate: {
                easing: 'bounceOut',
                duration: 500
            },
            store: store,
            insetPadding: 25,
            flex: 1,
            legend: true,
            axes: [{
                type: 'gauge',
                position: 'gauge',
                minimum: 0,
                maximum: 100,
                steps: 10,
                margin: 7
            }],
            series: [{
                type: 'gauge',
                field: 'value',
                donut: 20,
                colorSet: ['#3AA8CB', '#ddd'],
				showInLegend: true,
				label: {
					field: 'name',
					display: 'under',
					contrast: true,
					font: '18px Arial'
				}
            }]
		}]
     });
});