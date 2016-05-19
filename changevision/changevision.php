<?php
if(!defined('DATALIFEENGINE'))
{
  	die("Hacking attempt!");
}
include ('engine/api/api.class.php');
$myConfig  = array(
	'cachePrefix' => !empty($cachePrefix) ? $cachePrefix : 'vision',
	'cacheSuffix' => !empty($cacheSuffix) ? $cacheSuffix : false
);
$cacheName = md5(implode('_', $myConfig));
$cacheModule  = false;
$cacheModule  = dle_cache($myConfig['cachePrefix'], $cacheName . $config['skin'], $myConfig['cacheSuffix']);
if (!$cacheModule) {
	$cacheModule = '<link media="screen" href="'.$config['http_home_url'].'engine/modules/changevision/vision/css/style.css" type="text/css" rel="stylesheet" />
	<script type="text/javascript" src="'.$config['http_home_url'].'engine/modules/changevision/vision/js/js.cookie.js">
	</script><script type="text/javascript" src="'.$config['http_home_url'].'engine/modules/changevision/vision/js/js.settings.js"></script>';
	$cacheModule .= '<div id="changevision-clear"><a href="#" id="changevision-ver">Версия для слабовидящих</a></div>';
	$cacheModule .= '
<div id="changevision-on">
<div id="changevision-style">
<span class="ch_remove"><a href="#" class="ch_close" title="Обычная версия сайта"><img src="" class="ch_img"> Обычная версия сайта</a></span>
<span class="ch_images">Изображения: <a href="#" class="ch_imagesOff" title="Выключить">Выкл.</a><a href="#" class="ch_imagesOn" title="Включить">Вкл.</a></span>
<span class="ch_font">Размер шрифта: <a href="#" class="ch_a-14" title="14px">A</a><a href="#" class="ch_a-16" title="16px">A</a><a href="#" class="ch_a-18" title="18px">A</a><a href="#" class="ch_a-24" title="24px">A</a></span>
<span class="ch_line_height">Интервал межсимвольный: <a href="#" class="ch_letter_spacingOn" title="Межсимвольный интервал включить"><img src="" class="ch_img">Вкл.</a><a href="#" class="ch_letter_spacingOff" title="Межсимвольный интервал выключть"><img src="" class="ch_img">Выкл.</a> Межстрочный: <a href="#" class="ch_line_heightOn" title="Межстрочный интервал включть"><img src="" class="ch_img"> Вкл.</a><a href="#" class="ch_line_heightOff" title="Межстрочный интервал выключть"><img src="" class="ch_img">Выкл.</a></span>
<span class="ch_color_scheme">Цветовая схема:<a href="#" class="ch_white" title="Черным по белому">A</a><a href="#" class="ch_black"title="Белым по черному">A</a><a href="#" class="ch_blue" title="Темно-синим по голубому">A</a><a href="#" class="ch_green" title="Зеленым по темно-коричневому">A</a></span>
</div>
</div>
	';
	create_cache($myConfig['cachePrefix'], $cacheModule, $cacheName . $config['skin'], $myConfig['cacheSuffix']);
}
echo $cacheModule;

?>