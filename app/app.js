/**
 * This file sets application-wide settings and launches the application when everything has
 * been loaded onto the page. By default we just render the applications Viewport inside the
 * launch method (see app/views/Viewport.js).
 */ 
Gallery = new Ext.Application({
    name: "Gallery",
    defaultUrl: 'Album/index',
    launch: function() {
        this.viewport = new Gallery.Viewport();
    }
});
