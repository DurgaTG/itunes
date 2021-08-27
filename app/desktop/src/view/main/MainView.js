Ext.define('Day15ExtJS.view.main.MainView', {
  extend: "Ext.tab.Panel",
            xtype: 'mainview',
            requires: [
                'Day15ExtJS.view.main.MainViewController',
                'Day15ExtJS.view.main.MainViewModel',
                'Day15ExtJS.view.TunesView'
            ],
            controller: "mainviewcontroller",
            viewModel: {
                type: "mainviewmodel"
            },

            tabBarPosition: 'bottom',

            items: [{
                title: "Thumbnails",
                xtype: 'tunesview',
                listeners: {
                  select: 'onThumbSelect'
              },
                bind: {
                    store: '{tunes}'
                },
                html : "<h1>tunes view </h1>"
            }, {
                title: "Grid",
                xtype: 'tunesgrid',
                listeners: {
                  select: 'onGridSelect'
              },
                bind: {
                  store: '{tunes}'
              },
              html : "<h1>tunes grid </h1>"
            },{
              title: "Grid",
            html : "<h1>tunes grid </h1>"
          }
          ]
        });