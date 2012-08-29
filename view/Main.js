Ext.define("MyApp.view.Main", {
    extend: 'Ext.tab.Panel',

    requires: [
        'Ext.TitleBar',
        'Ext.Video'
    ],
    config: {
        tabBarPosition: 'bottom',

        items: [
        {
            xtype: 'homepanel'
        },
        {
            xtype: 'blog'
        },
        {
            xtype: 'contactform'
        },
        {
            xtype: 'LoginFormView'
        }
            
            
        ]
    }
});
