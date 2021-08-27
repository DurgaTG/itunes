Ext.define('Day15ExtJS.Application', {
  extend: 'Ext.app.Application',
  name: 'Day15ExtJS',
  requires: ['Day15ExtJS.*'],

  launch: function () {
    Ext.Viewport.add([{xtype: 'mainview'}])
  },

  onAppUpdate: function () {
    Ext.Msg.confirm('Application Update', 'This application has an update, reload?',
      function (choice) {
        if (choice === 'yes') {
          window.location.reload()
        }
      }
    )
  }
})
