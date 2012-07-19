// image models
Ext.regModel("Image", {
    fields: [
        {name: "name", type: "string"},
        {name: "size", type: "string"},
        {name: "date", type: "string"},
        {name: "path", type: "string"},
        {name: "thumb", type: "string"},
		{name: "description", type: "string"},
    ],
    proxy: {
        type: 'ajax',
        //url: 'get-album.php',
        reader: {
            root: 'files',
            type: 'json'
        }
    }
});