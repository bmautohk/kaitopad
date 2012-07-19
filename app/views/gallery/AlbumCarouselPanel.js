Gallery.views.AlbumCarouselPanel = Ext.extend(Ext.Panel, {
   
    layout: 'fit',
    initComponent: function() {
        this.dockedItems = [{
            xtype: 'toolbar',
            dock: 'bottom',
            items: [{
                    itemId: 'backButton',
                    ui: 'back',
                    text: 'Back',
                    iconMask: true
                }, {
                    itemId: 'homeButton',
                    iconCls: 'home',
                    iconMask: true
                }, { xtype: 'spacer' }, {
                    iconCls: 'help',
                    iconMask: true,
                    handler: function() {
                    new Ext.Panel({
                        floating: true,
                        centered: true,
                        modal: true, 
                        html: '<div class="helpbox">' + 
                                '<div style="margin: 0;">Swipe left/right to switch image</div>' +
                               '</div>'
                    }).showBy(this);
                }
                }
            ] 
        }];
        
        this.carousel = new Ext.Carousel({
            indicator: false,
			scroll: false,
            //defaults: {			    scroll: 'vertical'            }
        });
        
        this.items = [this.carousel];
        
        Gallery.views.AlbumCarouselPanel.superclass.initComponent.apply(this, arguments);
    }
});

Ext.reg('gallery-albumcarouselpanel', Gallery.views.AlbumCarouselPanel);