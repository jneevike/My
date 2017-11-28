/**
 * Created by Administrator on 2017/11/26.
 */
var html=document.documentElement;
var screenWidth=html.clientWidth;
var timer=null;
var uiWidth=640;
var fonts=40;
var bili=uiWidth/fonts;
html.style.fontSize=screenWidth/bili+'px';
window.onresize= function () {
    clearTimeout(timer);
    timer=setTimeout(function () {
        screenWidth=html.clientWidth;
        if(screenWidth<=320){
            html.style=fonts=320/bili+'px';
        }else if(screenWidth>=uiWidth){
            html.style.fontSize=uiWidth/bili+'px';
        }else {
            html.style.fontSize=screenWidth/bili+'px';
        }
    },100);

}