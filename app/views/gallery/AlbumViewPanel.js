Gallery.views.AlbumViewPanel = Ext.extend(Ext.Panel, {
	fullscreen:true,
    layout: 'fit',
	html: '<div style="background:#fff;"></div>',
    initComponent: function() {
        this.store = new Ext.data.Store({
            autoLoad: true,
            model: 'Image'
        });
        
        this.dockedItems = [{
            xtype: 'toolbar',
            dock: 'bottom',
            itemId: 'albumToolbar',
            items: [{
                itemId: 'homeButton',
                ui: 'back',
                text: 'Back'
            }, { xtype: 'spacer' }, { 
                itemId: 'helpButton',
                iconCls: 'help',
                iconMask: true,
                handler: function() {
                    new Ext.Panel({
                        floating: true,
                        centered: true,
                        modal: true, 
                        html: '<div class="helpbox">' + 
                                '<div style="margin: 0;">Tap to view,</div>' +
                                '<div>Swipe to change background</div>' + 
                               '</div>'
                    }).showBy(this);
                }
            }] 
        }];
    
        this.xtpl = new Ext.XTemplate(
            '<div style="padding:10px 5px 5px 5px;">',
            '<tpl for=".">',
                '<div class="node" style="background:url(http://bmautohk.com/{thumb});">',
                '</div>',
            '</tpl>',
            '</div>'
        );
    
        this.dataView = new Ext.DataView({
            store: this.store,
            tpl: this.xtpl,
			itemSelector: 'div.node'
        });
        
        this.items = [this.dataView];
    
        Gallery.views.AlbumViewPanel.superclass.initComponent.apply(this, arguments);
    }
});

Ext.reg('gallery-albumviewpanel', Gallery.views.AlbumViewPanel);