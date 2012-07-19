Ext.regModel("Album", {
    fields: [
        {name: "name", type: "string"},
        {name: "path", type: "string"},
        {name: "last_modified", type: "string"}
    ],
    
    proxy: {
        type: 'ajax',
        url: 'http://bmautohk.com/get-album.php',
        reader: {
            root: 'albums',
            type: 'json'
        }
    }
});