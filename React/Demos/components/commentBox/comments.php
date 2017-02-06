<?php
header('content-type:text/html;charset="utf-8"');
error_reporting(0);

$news = array(
	array('id'=>'1','author'=>'Hunter','text'=> "This is one comment","img"=>"img/baidu.jpg"),
	array('id'=>'2','author'=>'HHT','text'=> "This is another comment","img"=>"img/google.jpg"),
	array('id'=>'3','author'=>'Peter','text'=> "Long comment, the more is ignore, this","img"=>"img/huohu.jpg"),
	array('id'=>'4','author'=>'Hunter','text'=> "This is one comment","img"=>"img/google.jpg"),
	array('id'=>'5','author'=>'HHT','text'=> "Long comment, the more is ignore, this","img"=>"img/baidu.jpg"),
	array('id'=>'6','author'=>'Hunter','text'=> "This is another comment","img"=>"img/huohu.jpg"),
);

echo json_encode($news);