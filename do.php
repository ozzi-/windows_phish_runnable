<?php
    if(isset($_GET["name"]) && isset($_GET["campaign"])){
        $now = new DateTime();
        $now = $now->format('Y-m-d H:i:s');
        $file = 'hit_phish.log';
        $fh = fopen($file, 'a+') or die("Can't create file");
        fwrite($fh,$_GET["campaign"]."@".$now." - ".$_GET["name"]."\n");
        fclose($fh);
        echo ("thanks!");
    }
?>