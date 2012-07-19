<?php

$path = 'public/img';

if ($handle = opendir($path)) {
    $dir = array();
    while (false !== ($file = readdir($handle))) {
        if ($file != '.' & $file != '..') {
            $album_path = $path . '/' . $file;
            $dir[] = array(
                'name' => preg_replace('/-/', ' ', $file),
                'path' => $album_path,
                'last_modified' => date("F d Y H:i:s", filemtime($album_path))
            );
        }            
    }
    closedir($handle);
}

echo json_encode(array('albums' => $dir));
?> 