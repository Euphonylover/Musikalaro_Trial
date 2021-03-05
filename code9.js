gdjs.LowPage1Code = {};
gdjs.LowPage1Code.GDmainmapbObjects1= [];
gdjs.LowPage1Code.GDmainmapbObjects2= [];
gdjs.LowPage1Code.GDbglow1Objects1= [];
gdjs.LowPage1Code.GDbglow1Objects2= [];
gdjs.LowPage1Code.GDinfo1Objects1= [];
gdjs.LowPage1Code.GDinfo1Objects2= [];
gdjs.LowPage1Code.GDinfoObjects1= [];
gdjs.LowPage1Code.GDinfoObjects2= [];
gdjs.LowPage1Code.GDbuttonintruObjects1= [];
gdjs.LowPage1Code.GDbuttonintruObjects2= [];
gdjs.LowPage1Code.GDbuttonwatchObjects1= [];
gdjs.LowPage1Code.GDbuttonwatchObjects2= [];
gdjs.LowPage1Code.GDinfo2Objects1= [];
gdjs.LowPage1Code.GDinfo2Objects2= [];
gdjs.LowPage1Code.GDmoreObjects1= [];
gdjs.LowPage1Code.GDmoreObjects2= [];
gdjs.LowPage1Code.GDwatchObjects1= [];
gdjs.LowPage1Code.GDwatchObjects2= [];
gdjs.LowPage1Code.GDhuman1Objects1= [];
gdjs.LowPage1Code.GDhuman1Objects2= [];
gdjs.LowPage1Code.GDbackbObjects1= [];
gdjs.LowPage1Code.GDbackbObjects2= [];

gdjs.LowPage1Code.conditionTrue_0 = {val:false};
gdjs.LowPage1Code.condition0IsTrue_0 = {val:false};
gdjs.LowPage1Code.condition1IsTrue_0 = {val:false};
gdjs.LowPage1Code.condition2IsTrue_0 = {val:false};
gdjs.LowPage1Code.condition3IsTrue_0 = {val:false};
gdjs.LowPage1Code.conditionTrue_1 = {val:false};
gdjs.LowPage1Code.condition0IsTrue_1 = {val:false};
gdjs.LowPage1Code.condition1IsTrue_1 = {val:false};
gdjs.LowPage1Code.condition2IsTrue_1 = {val:false};
gdjs.LowPage1Code.condition3IsTrue_1 = {val:false};


gdjs.LowPage1Code.mapOfGDgdjs_46LowPage1Code_46GDmainmapbObjects1Objects = Hashtable.newFrom({"mainmapb": gdjs.LowPage1Code.GDmainmapbObjects1});gdjs.LowPage1Code.mapOfGDgdjs_46LowPage1Code_46GDmainmapbObjects1Objects = Hashtable.newFrom({"mainmapb": gdjs.LowPage1Code.GDmainmapbObjects1});gdjs.LowPage1Code.mapOfGDgdjs_46LowPage1Code_46GDmainmapbObjects1Objects = Hashtable.newFrom({"mainmapb": gdjs.LowPage1Code.GDmainmapbObjects1});gdjs.LowPage1Code.mapOfGDgdjs_46LowPage1Code_46GDbackbObjects1Objects = Hashtable.newFrom({"backb": gdjs.LowPage1Code.GDbackbObjects1});gdjs.LowPage1Code.mapOfGDgdjs_46LowPage1Code_46GDbuttonintruObjects1Objects = Hashtable.newFrom({"buttonintru": gdjs.LowPage1Code.GDbuttonintruObjects1});gdjs.LowPage1Code.mapOfGDgdjs_46LowPage1Code_46GDbuttonwatchObjects1Objects = Hashtable.newFrom({"buttonwatch": gdjs.LowPage1Code.GDbuttonwatchObjects1});gdjs.LowPage1Code.eventsList0 = function(runtimeScene) {

{


gdjs.LowPage1Code.condition0IsTrue_0.val = false;
{
gdjs.LowPage1Code.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
}if (gdjs.LowPage1Code.condition0IsTrue_0.val) {
{gdjs.evtTools.sound.playMusic(runtimeScene, "MARCHING-BAND-PARADE_Trombone.ogg", true, 10, 1);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("mainmapb"), gdjs.LowPage1Code.GDmainmapbObjects1);

gdjs.LowPage1Code.condition0IsTrue_0.val = false;
{
gdjs.LowPage1Code.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.LowPage1Code.mapOfGDgdjs_46LowPage1Code_46GDmainmapbObjects1Objects, runtimeScene, true, false);
}if (gdjs.LowPage1Code.condition0IsTrue_0.val) {
/* Reuse gdjs.LowPage1Code.GDmainmapbObjects1 */
{for(var i = 0, len = gdjs.LowPage1Code.GDmainmapbObjects1.length ;i < len;++i) {
    gdjs.LowPage1Code.GDmainmapbObjects1[i].setAnimation(1);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("mainmapb"), gdjs.LowPage1Code.GDmainmapbObjects1);

gdjs.LowPage1Code.condition0IsTrue_0.val = false;
gdjs.LowPage1Code.condition1IsTrue_0.val = false;
gdjs.LowPage1Code.condition2IsTrue_0.val = false;
{
gdjs.LowPage1Code.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.LowPage1Code.mapOfGDgdjs_46LowPage1Code_46GDmainmapbObjects1Objects, runtimeScene, true, false);
}if ( gdjs.LowPage1Code.condition0IsTrue_0.val ) {
{
gdjs.LowPage1Code.condition1IsTrue_0.val = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
}if ( gdjs.LowPage1Code.condition1IsTrue_0.val ) {
{
{gdjs.LowPage1Code.conditionTrue_1 = gdjs.LowPage1Code.condition2IsTrue_0;
gdjs.LowPage1Code.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(10849364);
}
}}
}
if (gdjs.LowPage1Code.condition2IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Main Map", false);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("mainmapb"), gdjs.LowPage1Code.GDmainmapbObjects1);

gdjs.LowPage1Code.condition0IsTrue_0.val = false;
{
gdjs.LowPage1Code.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.LowPage1Code.mapOfGDgdjs_46LowPage1Code_46GDmainmapbObjects1Objects, runtimeScene, true, true);
}if (gdjs.LowPage1Code.condition0IsTrue_0.val) {
/* Reuse gdjs.LowPage1Code.GDmainmapbObjects1 */
{for(var i = 0, len = gdjs.LowPage1Code.GDmainmapbObjects1.length ;i < len;++i) {
    gdjs.LowPage1Code.GDmainmapbObjects1[i].setAnimation(0);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("backb"), gdjs.LowPage1Code.GDbackbObjects1);

gdjs.LowPage1Code.condition0IsTrue_0.val = false;
gdjs.LowPage1Code.condition1IsTrue_0.val = false;
gdjs.LowPage1Code.condition2IsTrue_0.val = false;
{
gdjs.LowPage1Code.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.LowPage1Code.mapOfGDgdjs_46LowPage1Code_46GDbackbObjects1Objects, runtimeScene, true, false);
}if ( gdjs.LowPage1Code.condition0IsTrue_0.val ) {
{
gdjs.LowPage1Code.condition1IsTrue_0.val = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
}if ( gdjs.LowPage1Code.condition1IsTrue_0.val ) {
{
{gdjs.LowPage1Code.conditionTrue_1 = gdjs.LowPage1Code.condition2IsTrue_0;
gdjs.LowPage1Code.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(10699068);
}
}}
}
if (gdjs.LowPage1Code.condition2IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Lowland", false);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("buttonintru"), gdjs.LowPage1Code.GDbuttonintruObjects1);

gdjs.LowPage1Code.condition0IsTrue_0.val = false;
gdjs.LowPage1Code.condition1IsTrue_0.val = false;
gdjs.LowPage1Code.condition2IsTrue_0.val = false;
{
gdjs.LowPage1Code.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.LowPage1Code.mapOfGDgdjs_46LowPage1Code_46GDbuttonintruObjects1Objects, runtimeScene, true, false);
}if ( gdjs.LowPage1Code.condition0IsTrue_0.val ) {
{
gdjs.LowPage1Code.condition1IsTrue_0.val = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
}if ( gdjs.LowPage1Code.condition1IsTrue_0.val ) {
{
{gdjs.LowPage1Code.conditionTrue_1 = gdjs.LowPage1Code.condition2IsTrue_0;
gdjs.LowPage1Code.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(7157364);
}
}}
}
if (gdjs.LowPage1Code.condition2IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "LowPage2", false);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("buttonwatch"), gdjs.LowPage1Code.GDbuttonwatchObjects1);

gdjs.LowPage1Code.condition0IsTrue_0.val = false;
gdjs.LowPage1Code.condition1IsTrue_0.val = false;
gdjs.LowPage1Code.condition2IsTrue_0.val = false;
{
gdjs.LowPage1Code.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.LowPage1Code.mapOfGDgdjs_46LowPage1Code_46GDbuttonwatchObjects1Objects, runtimeScene, true, false);
}if ( gdjs.LowPage1Code.condition0IsTrue_0.val ) {
{
gdjs.LowPage1Code.condition1IsTrue_0.val = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
}if ( gdjs.LowPage1Code.condition1IsTrue_0.val ) {
{
{gdjs.LowPage1Code.conditionTrue_1 = gdjs.LowPage1Code.condition2IsTrue_0;
gdjs.LowPage1Code.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(10699540);
}
}}
}
if (gdjs.LowPage1Code.condition2IsTrue_0.val) {
{gdjs.evtTools.window.openURL("https://www.youtube.com/watch?v=-d8X8zi0Wsk&list=PLJPyalARUKjvTBbTg_Nma1vLbXm2TtR5L&index=15", runtimeScene);
}}

}


};

gdjs.LowPage1Code.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.LowPage1Code.GDmainmapbObjects1.length = 0;
gdjs.LowPage1Code.GDmainmapbObjects2.length = 0;
gdjs.LowPage1Code.GDbglow1Objects1.length = 0;
gdjs.LowPage1Code.GDbglow1Objects2.length = 0;
gdjs.LowPage1Code.GDinfo1Objects1.length = 0;
gdjs.LowPage1Code.GDinfo1Objects2.length = 0;
gdjs.LowPage1Code.GDinfoObjects1.length = 0;
gdjs.LowPage1Code.GDinfoObjects2.length = 0;
gdjs.LowPage1Code.GDbuttonintruObjects1.length = 0;
gdjs.LowPage1Code.GDbuttonintruObjects2.length = 0;
gdjs.LowPage1Code.GDbuttonwatchObjects1.length = 0;
gdjs.LowPage1Code.GDbuttonwatchObjects2.length = 0;
gdjs.LowPage1Code.GDinfo2Objects1.length = 0;
gdjs.LowPage1Code.GDinfo2Objects2.length = 0;
gdjs.LowPage1Code.GDmoreObjects1.length = 0;
gdjs.LowPage1Code.GDmoreObjects2.length = 0;
gdjs.LowPage1Code.GDwatchObjects1.length = 0;
gdjs.LowPage1Code.GDwatchObjects2.length = 0;
gdjs.LowPage1Code.GDhuman1Objects1.length = 0;
gdjs.LowPage1Code.GDhuman1Objects2.length = 0;
gdjs.LowPage1Code.GDbackbObjects1.length = 0;
gdjs.LowPage1Code.GDbackbObjects2.length = 0;

gdjs.LowPage1Code.eventsList0(runtimeScene);
return;

}

gdjs['LowPage1Code'] = gdjs.LowPage1Code;
