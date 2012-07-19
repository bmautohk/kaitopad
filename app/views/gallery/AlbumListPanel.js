Gallery.views.AlbumListPanel = Ext.extend(Ext.Panel, {
    layout: 'fit',
    initComponent: function() {
        this.store = new Ext.data.Store({
            autoLoad: true,
            model: 'Album'
        });
        
        this.dockedItems = [{
            xtype: 'toolbar',
            dock: 'bottom',
            title: 'Bmauto Catalog',
            items:[{ xtype: 'spacer' }, { 
                itemId: 'helpButton',
                iconCls: 'help',
                iconMask: true,
                handler: function() {
                    new Ext.Panel({
                        floating: true,
                        centered: true,
                        modal: true, 
                        html: '<div class="helpbox">' + 
                                '<div style="margin: 0;">Bmauto Catalog</div>' +
                                '<div> </div>' + 
                                '<div class="credit"><a href="http://bmautohk.com">BM AUTO ACCESSORIES (HK) CO LTD</a></div>' +
                               '</div>'
                    }).showBy(this);
                }
            }]
        }];
        
        this.list = new Ext.List({
            itemTpl: '{name}',
            store: this.store,
			scroll: false
        });

        this.items = [this.list];
        
        Gallery.views.AlbumListPanel.superclass.initComponent.apply(this, arguments);
    } 
});

Ext.reg('gallery-albumlistpanel', Gallery.views.AlbumListPanel);