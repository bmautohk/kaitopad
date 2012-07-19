// controller
Ext.regController("Album", {
    // index controller
    index: function() {
        if (!this.listPanel) {
            this.listPanel = this.render({
                xtype: 'gallery-albumlistpanel',
                listeners: {
                    list: {
                        select: function(list, record) {
                            this.viewList(list, record, 'left');
                        },
                        scope: this
                    },
                    activate : function(listPanel) {
                        listPanel.list.getSelectionModel().deselectAll();
                    }
                }
            });
            
            Gallery.viewport.setActiveItem(this.listPanel);
        } else {
            Gallery.viewport.setActiveItem(this.listPanel, {
                type: 'slide',
                direction: 'right'
            });
        }
    },
    // viewList controller
    viewList: function(list, record, slide) {                  
        var albumView = this.render({
            xtype: 'gallery-albumviewpanel',            
            listeners: {
                deactivate: function(albumView) {
                    albumView.destroy();
                },
                dataView: {
                    itemtap: function(list, index) {
                        var imgdata = albumView.dataView.store.data.items;
                        this.viewCarousel(list, index, imgdata, record);
                    },
                    itemswipe: function(list, index) {
                        var imgdata = albumView.dataView.store.data.items;
                        albumView.update(
                            '<div style="background:url( ' + 
                                imgdata[index].data.path + ') no-repeat;'+ 
                                '"></div>'
                        );
                    },
                    scope: this
                }
            }
        });
        albumView.dataView.store.proxy.url = 'http://bmautohk.com/get-file.php?path=' + record.data.path;
        
        albumView.query('#homeButton')[0].on({
            tap: this.index,
            scope: this
        });
        
        albumView.query('#albumToolbar')[0].setTitle(record.data.name);            
            
        Gallery.viewport.setActiveItem(albumView, {
            type: 'slide',
            direction: slide
        });
    },
    // viewCarousel controller
    viewCarousel: function(list, index, imgdata, album) {
        var albumCarousel = this.render({
            xtype: 'gallery-albumcarouselpanel',
            listeners: {
                deactivate: function() {
                    albumCarousel.destroy();
                }
            }
        });
        
        for(i=0; i<imgdata.length; i++) {
            albumCarousel.carousel.add({
                html: '<div class="imgbanner">'+imgdata[i].data.description+'</div><div class="img" style="background: url(http://bmautohk.com/'+imgdata[i].data.path+');background-repeat: no-repeat;background-position:center; "></div>'
            });
        }
        
        albumCarousel.query('#homeButton')[0].on({
            tap: this.index,
            scope: this
        });

        albumCarousel.query('#backButton')[0].on({
            tap: function() {
                this.viewList(list, album, 'right');
            },
            scope: this
        })
        
        Gallery.viewport.setActiveItem(albumCarousel, 'slide');
        albumCarousel.carousel.setActiveItem(index);
    }
});