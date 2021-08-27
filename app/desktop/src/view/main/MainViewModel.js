Ext.define('Day15ExtJS.view.main.MainViewModel', {
  extend: 'Ext.app.ViewModel',
  alias: 'viewmodel.mainviewmodel',
  requires: [
      'Day15ExtJS.model.Tune'
      ],
  
     stores: {
      tunes: {
          model: 'Day15ExtJS.model.Tune',
          autoLoad: true,
          sorters: ['artist', 'title']
      }
  }
});
