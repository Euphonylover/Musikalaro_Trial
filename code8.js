gdjs.LowlandCode = {};
gdjs.LowlandCode.GDmainmapbObjects1= [];
gdjs.LowlandCode.GDmainmapbObjects2= [];
gdjs.LowlandCode.GDNewObjectObjects1= [];
gdjs.LowlandCode.GDNewObjectObjects2= [];
gdjs.LowlandCode.GDbglowObjects1= [];
gdjs.LowlandCode.GDbglowObjects2= [];
gdjs.LowlandCode.GDwelcomeObjects1= [];
gdjs.LowlandCode.GDwelcomeObjects2= [];
gdjs.LowlandCode.GDwekom3Objects1= [];
gdjs.LowlandCode.GDwekom3Objects2= [];
gdjs.LowlandCode.GDwekom12Objects1= [];
gdjs.LowlandCode.GDwekom12Objects2= [];
gdjs.LowlandCode.GDcontinueObjects1= [];
gdjs.LowlandCode.GDcontinueObjects2= [];
gdjs.LowlandCode.GDwekom1Objects1= [];
gdjs.LowlandCode.GDwekom1Objects2= [];
gdjs.LowlandCode.GDbuttongObjects1= [];
gdjs.LowlandCode.GDbuttongObjects2= [];
gdjs.LowlandCode.GDNewObject2Objects1= [];
gdjs.LowlandCode.GDNewObject2Objects2= [];

gdjs.LowlandCode.conditionTrue_0 = {val:false};
gdjs.LowlandCode.condition0IsTrue_0 = {val:false};
gdjs.LowlandCode.condition1IsTrue_0 = {val:false};
gdjs.LowlandCode.condition2IsTrue_0 = {val:false};
gdjs.LowlandCode.condition3IsTrue_0 = {val:false};
gdjs.LowlandCode.conditionTrue_1 = {val:false};
gdjs.LowlandCode.condition0IsTrue_1 = {val:false};
gdjs.LowlandCode.condition1IsTrue_1 = {val:false};
gdjs.LowlandCode.condition2IsTrue_1 = {val:false};
gdjs.LowlandCode.condition3IsTrue_1 = {val:false};


gdjs.LowlandCode.mapOfGDgdjs_46LowlandCode_46GDcontinueObjects1Objects = Hashtable.newFrom({"continue": gdjs.LowlandCode.GDcontinueObjects1});gdjs.LowlandCode.mapOfGDgdjs_46LowlandCode_46GDmainmapbObjects1Objects = Hashtable.newFrom({"mainmapb": gdjs.LowlandCode.GDmainmapbObjects1});gdjs.LowlandCode.mapOfGDgdjs_46LowlandCode_46GDmainmapbObjects1Objects = Hashtable.newFrom({"mainmapb": gdjs.LowlandCode.GDmainmapbObjects1});gdjs.LowlandCode.mapOfGDgdjs_46LowlandCode_46GDmainmapbObjects1Objects = Hashtable.newFrom({"mainmapb": gdjs.LowlandCode.GDmainmapbObjects1});gdjs.LowlandCode.eventsList0 = function(runtimeScene) {

{


gdjs.LowlandCode.condition0IsTrue_0.val = false;
{
gdjs.LowlandCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
}if (gdjs.LowlandCode.condition0IsTrue_0.val) {
{gdjs.evtTools.sound.playMusic(runtimeScene, "MARCHING-BAND-PARADE_Trombone.ogg", true, 50, 1);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("continue"), gdjs.LowlandCode.GDcontinueObjects1);

gdjs.LowlandCode.condition0IsTrue_0.val = false;
gdjs.LowlandCode.condition1IsTrue_0.val = false;
gdjs.LowlandCode.condition2IsTrue_0.val = false;
{
gdjs.LowlandCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.LowlandCode.mapOfGDgdjs_46LowlandCode_46GDcontinueObjects1Objects, runtimeScene, true, false);
}if ( gdjs.LowlandCode.condition0IsTrue_0.val ) {
{
gdjs.LowlandCode.condition1IsTrue_0.val = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
}if ( gdjs.LowlandCode.condition1IsTrue_0.val ) {
{
{gdjs.LowlandCode.conditionTrue_1 = gdjs.LowlandCode.condition2IsTrue_0;
gdjs.LowlandCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(8446668);
}
}}
}
if (gdjs.LowlandCode.condition2IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "LowPage1", false);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("mainmapb"), gdjs.LowlandCode.GDmainmapbObjects1);

gdjs.LowlandCode.condition0IsTrue_0.val = false;
{
gdjs.LowlandCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.LowlandCode.mapOfGDgdjs_46LowlandCode_46GDmainmapbObjects1Objects, runtimeScene, true, false);
}if (gdjs.LowlandCode.condition0IsTrue_0.val) {
/* Reuse gdjs.LowlandCode.GDmainmapbObjects1 */
{for(var i = 0, len = gdjs.LowlandCode.GDmainmapbObjects1.length ;i < len;++i) {
    gdjs.LowlandCode.GDmainmapbObjects1[i].setAnimation(1);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("mainmapb"), gdjs.LowlandCode.GDmainmapbObjects1);

gdjs.LowlandCode.condition0IsTrue_0.val = false;
gdjs.LowlandCode.condition1IsTrue_0.val = false;
gdjs.LowlandCode.condition2IsTrue_0.val = false;
{
gdjs.LowlandCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.LowlandCode.mapOfGDgdjs_46LowlandCode_46GDmainmapbObjects1Objects, runtimeScene, true, false);
}if ( gdjs.LowlandCode.condition0IsTrue_0.val ) {
{
gdjs.LowlandCode.condition1IsTrue_0.val = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
}if ( gdjs.LowlandCode.condition1IsTrue_0.val ) {
{
{gdjs.LowlandCode.conditionTrue_1 = gdjs.LowlandCode.condition2IsTrue_0;
gdjs.LowlandCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(10697420);
}
}}
}
if (gdjs.LowlandCode.condition2IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Main Map", false);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("mainmapb"), gdjs.LowlandCode.GDmainmapbObjects1);

gdjs.LowlandCode.condition0IsTrue_0.val = false;
{
gdjs.LowlandCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.LowlandCode.mapOfGDgdjs_46LowlandCode_46GDmainmapbObjects1Objects, runtimeScene, true, true);
}if (gdjs.LowlandCode.condition0IsTrue_0.val) {
/* Reuse gdjs.LowlandCode.GDmainmapbObjects1 */
{for(var i = 0, len = gdjs.LowlandCode.GDmainmapbObjects1.length ;i < len;++i) {
    gdjs.LowlandCode.GDmainmapbObjects1[i].setAnimation(0);
}
}}

}


};

gdjs.LowlandCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.LowlandCode.GDmainmapbObjects1.length = 0;
gdjs.LowlandCode.GDmainmapbObjects2.length = 0;
gdjs.LowlandCode.GDNewObjectObjects1.length = 0;
gdjs.LowlandCode.GDNewObjectObjects2.length = 0;
gdjs.LowlandCode.GDbglowObjects1.length = 0;
gdjs.LowlandCode.GDbglowObjects2.length = 0;
gdjs.LowlandCode.GDwelcomeObjects1.length = 0;
gdjs.LowlandCode.GDwelcomeObjects2.length = 0;
gdjs.LowlandCode.GDwekom3Objects1.length = 0;
gdjs.LowlandCode.GDwekom3Objects2.length = 0;
gdjs.LowlandCode.GDwekom12Objects1.length = 0;
gdjs.LowlandCode.GDwekom12Objects2.length = 0;
gdjs.LowlandCode.GDcontinueObjects1.length = 0;
gdjs.LowlandCode.GDcontinueObjects2.length = 0;
gdjs.LowlandCode.GDwekom1Objects1.length = 0;
gdjs.LowlandCode.GDwekom1Objects2.length = 0;
gdjs.LowlandCode.GDbuttongObjects1.length = 0;
gdjs.LowlandCode.GDbuttongObjects2.length = 0;
gdjs.LowlandCode.GDNewObject2Objects1.length = 0;
gdjs.LowlandCode.GDNewObject2Objects2.length = 0;

gdjs.LowlandCode.eventsList0(runtimeScene);
return;

}

gdjs['LowlandCode'] = gdjs.LowlandCode;
