gdjs.Cor_32page_321Code = {};
gdjs.Cor_32page_321Code.GDmainmapbObjects1= [];
gdjs.Cor_32page_321Code.GDmainmapbObjects2= [];
gdjs.Cor_32page_321Code.GDbg1Objects1= [];
gdjs.Cor_32page_321Code.GDbg1Objects2= [];
gdjs.Cor_32page_321Code.GDinfoObjects1= [];
gdjs.Cor_32page_321Code.GDinfoObjects2= [];
gdjs.Cor_32page_321Code.GDHumancorObjects1= [];
gdjs.Cor_32page_321Code.GDHumancorObjects2= [];
gdjs.Cor_32page_321Code.GDperfbuttonObjects1= [];
gdjs.Cor_32page_321Code.GDperfbuttonObjects2= [];
gdjs.Cor_32page_321Code.GDNewObjectObjects1= [];
gdjs.Cor_32page_321Code.GDNewObjectObjects2= [];
gdjs.Cor_32page_321Code.GDinfo2tongatongObjects1= [];
gdjs.Cor_32page_321Code.GDinfo2tongatongObjects2= [];
gdjs.Cor_32page_321Code.GDinfo3Objects1= [];
gdjs.Cor_32page_321Code.GDinfo3Objects2= [];
gdjs.Cor_32page_321Code.GDinfo62Objects1= [];
gdjs.Cor_32page_321Code.GDinfo62Objects2= [];
gdjs.Cor_32page_321Code.GDinfo6Objects1= [];
gdjs.Cor_32page_321Code.GDinfo6Objects2= [];
gdjs.Cor_32page_321Code.GDinfo5Objects1= [];
gdjs.Cor_32page_321Code.GDinfo5Objects2= [];
gdjs.Cor_32page_321Code.GDclickhereObjects1= [];
gdjs.Cor_32page_321Code.GDclickhereObjects2= [];
gdjs.Cor_32page_321Code.GDinfo4Objects1= [];
gdjs.Cor_32page_321Code.GDinfo4Objects2= [];
gdjs.Cor_32page_321Code.GDNewObject2Objects1= [];
gdjs.Cor_32page_321Code.GDNewObject2Objects2= [];
gdjs.Cor_32page_321Code.GDformoreObjects1= [];
gdjs.Cor_32page_321Code.GDformoreObjects2= [];
gdjs.Cor_32page_321Code.GDmapsObjects1= [];
gdjs.Cor_32page_321Code.GDmapsObjects2= [];
gdjs.Cor_32page_321Code.GDformore1Objects1= [];
gdjs.Cor_32page_321Code.GDformore1Objects2= [];

gdjs.Cor_32page_321Code.conditionTrue_0 = {val:false};
gdjs.Cor_32page_321Code.condition0IsTrue_0 = {val:false};
gdjs.Cor_32page_321Code.condition1IsTrue_0 = {val:false};
gdjs.Cor_32page_321Code.condition2IsTrue_0 = {val:false};
gdjs.Cor_32page_321Code.condition3IsTrue_0 = {val:false};
gdjs.Cor_32page_321Code.conditionTrue_1 = {val:false};
gdjs.Cor_32page_321Code.condition0IsTrue_1 = {val:false};
gdjs.Cor_32page_321Code.condition1IsTrue_1 = {val:false};
gdjs.Cor_32page_321Code.condition2IsTrue_1 = {val:false};
gdjs.Cor_32page_321Code.condition3IsTrue_1 = {val:false};


gdjs.Cor_32page_321Code.mapOfGDgdjs_46Cor_9532page_95321Code_46GDmainmapbObjects1Objects = Hashtable.newFrom({"mainmapb": gdjs.Cor_32page_321Code.GDmainmapbObjects1});gdjs.Cor_32page_321Code.mapOfGDgdjs_46Cor_9532page_95321Code_46GDmainmapbObjects1Objects = Hashtable.newFrom({"mainmapb": gdjs.Cor_32page_321Code.GDmainmapbObjects1});gdjs.Cor_32page_321Code.mapOfGDgdjs_46Cor_9532page_95321Code_46GDmainmapbObjects1Objects = Hashtable.newFrom({"mainmapb": gdjs.Cor_32page_321Code.GDmainmapbObjects1});gdjs.Cor_32page_321Code.mapOfGDgdjs_46Cor_9532page_95321Code_46GDNewObject2Objects1Objects = Hashtable.newFrom({"NewObject2": gdjs.Cor_32page_321Code.GDNewObject2Objects1});gdjs.Cor_32page_321Code.mapOfGDgdjs_46Cor_9532page_95321Code_46GDperfbuttonObjects1Objects = Hashtable.newFrom({"perfbutton": gdjs.Cor_32page_321Code.GDperfbuttonObjects1});gdjs.Cor_32page_321Code.mapOfGDgdjs_46Cor_9532page_95321Code_46GDformore1Objects1Objects = Hashtable.newFrom({"formore1": gdjs.Cor_32page_321Code.GDformore1Objects1});gdjs.Cor_32page_321Code.mapOfGDgdjs_46Cor_9532page_95321Code_46GDformoreObjects1Objects = Hashtable.newFrom({"formore": gdjs.Cor_32page_321Code.GDformoreObjects1});gdjs.Cor_32page_321Code.mapOfGDgdjs_46Cor_9532page_95321Code_46GDformore1Objects1Objects = Hashtable.newFrom({"formore1": gdjs.Cor_32page_321Code.GDformore1Objects1});gdjs.Cor_32page_321Code.eventsList0 = function(runtimeScene) {

{


gdjs.Cor_32page_321Code.condition0IsTrue_0.val = false;
{
gdjs.Cor_32page_321Code.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
}if (gdjs.Cor_32page_321Code.condition0IsTrue_0.val) {
{gdjs.evtTools.sound.playMusic(runtimeScene, "Bamboo.ogg", true, 3, 1);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("mainmapb"), gdjs.Cor_32page_321Code.GDmainmapbObjects1);

gdjs.Cor_32page_321Code.condition0IsTrue_0.val = false;
{
gdjs.Cor_32page_321Code.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.Cor_32page_321Code.mapOfGDgdjs_46Cor_9532page_95321Code_46GDmainmapbObjects1Objects, runtimeScene, true, false);
}if (gdjs.Cor_32page_321Code.condition0IsTrue_0.val) {
/* Reuse gdjs.Cor_32page_321Code.GDmainmapbObjects1 */
{for(var i = 0, len = gdjs.Cor_32page_321Code.GDmainmapbObjects1.length ;i < len;++i) {
    gdjs.Cor_32page_321Code.GDmainmapbObjects1[i].setAnimation(1);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("mainmapb"), gdjs.Cor_32page_321Code.GDmainmapbObjects1);

gdjs.Cor_32page_321Code.condition0IsTrue_0.val = false;
gdjs.Cor_32page_321Code.condition1IsTrue_0.val = false;
gdjs.Cor_32page_321Code.condition2IsTrue_0.val = false;
{
gdjs.Cor_32page_321Code.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.Cor_32page_321Code.mapOfGDgdjs_46Cor_9532page_95321Code_46GDmainmapbObjects1Objects, runtimeScene, true, false);
}if ( gdjs.Cor_32page_321Code.condition0IsTrue_0.val ) {
{
gdjs.Cor_32page_321Code.condition1IsTrue_0.val = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
}if ( gdjs.Cor_32page_321Code.condition1IsTrue_0.val ) {
{
{gdjs.Cor_32page_321Code.conditionTrue_1 = gdjs.Cor_32page_321Code.condition2IsTrue_0;
gdjs.Cor_32page_321Code.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(10707300);
}
}}
}
if (gdjs.Cor_32page_321Code.condition2IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Main Map", false);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("mainmapb"), gdjs.Cor_32page_321Code.GDmainmapbObjects1);

gdjs.Cor_32page_321Code.condition0IsTrue_0.val = false;
{
gdjs.Cor_32page_321Code.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.Cor_32page_321Code.mapOfGDgdjs_46Cor_9532page_95321Code_46GDmainmapbObjects1Objects, runtimeScene, true, true);
}if (gdjs.Cor_32page_321Code.condition0IsTrue_0.val) {
/* Reuse gdjs.Cor_32page_321Code.GDmainmapbObjects1 */
{for(var i = 0, len = gdjs.Cor_32page_321Code.GDmainmapbObjects1.length ;i < len;++i) {
    gdjs.Cor_32page_321Code.GDmainmapbObjects1[i].setAnimation(0);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("NewObject2"), gdjs.Cor_32page_321Code.GDNewObject2Objects1);

gdjs.Cor_32page_321Code.condition0IsTrue_0.val = false;
gdjs.Cor_32page_321Code.condition1IsTrue_0.val = false;
gdjs.Cor_32page_321Code.condition2IsTrue_0.val = false;
{
gdjs.Cor_32page_321Code.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.Cor_32page_321Code.mapOfGDgdjs_46Cor_9532page_95321Code_46GDNewObject2Objects1Objects, runtimeScene, true, false);
}if ( gdjs.Cor_32page_321Code.condition0IsTrue_0.val ) {
{
gdjs.Cor_32page_321Code.condition1IsTrue_0.val = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
}if ( gdjs.Cor_32page_321Code.condition1IsTrue_0.val ) {
{
{gdjs.Cor_32page_321Code.conditionTrue_1 = gdjs.Cor_32page_321Code.condition2IsTrue_0;
gdjs.Cor_32page_321Code.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(10748508);
}
}}
}
if (gdjs.Cor_32page_321Code.condition2IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Cordillera", false);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("perfbutton"), gdjs.Cor_32page_321Code.GDperfbuttonObjects1);

gdjs.Cor_32page_321Code.condition0IsTrue_0.val = false;
gdjs.Cor_32page_321Code.condition1IsTrue_0.val = false;
gdjs.Cor_32page_321Code.condition2IsTrue_0.val = false;
{
gdjs.Cor_32page_321Code.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.Cor_32page_321Code.mapOfGDgdjs_46Cor_9532page_95321Code_46GDperfbuttonObjects1Objects, runtimeScene, true, false);
}if ( gdjs.Cor_32page_321Code.condition0IsTrue_0.val ) {
{
gdjs.Cor_32page_321Code.condition1IsTrue_0.val = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
}if ( gdjs.Cor_32page_321Code.condition1IsTrue_0.val ) {
{
{gdjs.Cor_32page_321Code.conditionTrue_1 = gdjs.Cor_32page_321Code.condition2IsTrue_0;
gdjs.Cor_32page_321Code.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(10642172);
}
}}
}
if (gdjs.Cor_32page_321Code.condition2IsTrue_0.val) {
{gdjs.evtTools.window.openURL("https://www.youtube.com/watch?v=b9dZwlQoC6o&list=PLJPyalARUKjvTBbTg_Nma1vLbXm2TtR5L&index=7", runtimeScene);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("formore1"), gdjs.Cor_32page_321Code.GDformore1Objects1);

gdjs.Cor_32page_321Code.condition0IsTrue_0.val = false;
{
gdjs.Cor_32page_321Code.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.Cor_32page_321Code.mapOfGDgdjs_46Cor_9532page_95321Code_46GDformore1Objects1Objects, runtimeScene, true, false);
}if (gdjs.Cor_32page_321Code.condition0IsTrue_0.val) {
/* Reuse gdjs.Cor_32page_321Code.GDformore1Objects1 */
{for(var i = 0, len = gdjs.Cor_32page_321Code.GDformore1Objects1.length ;i < len;++i) {
    gdjs.Cor_32page_321Code.GDformore1Objects1[i].pauseAnimation();
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("formore"), gdjs.Cor_32page_321Code.GDformoreObjects1);

gdjs.Cor_32page_321Code.condition0IsTrue_0.val = false;
gdjs.Cor_32page_321Code.condition1IsTrue_0.val = false;
{
gdjs.Cor_32page_321Code.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.Cor_32page_321Code.mapOfGDgdjs_46Cor_9532page_95321Code_46GDformoreObjects1Objects, runtimeScene, true, false);
}if ( gdjs.Cor_32page_321Code.condition0IsTrue_0.val ) {
{
gdjs.Cor_32page_321Code.condition1IsTrue_0.val = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
}}
if (gdjs.Cor_32page_321Code.condition1IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Cor pag 2", false);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("formore1"), gdjs.Cor_32page_321Code.GDformore1Objects1);

gdjs.Cor_32page_321Code.condition0IsTrue_0.val = false;
{
gdjs.Cor_32page_321Code.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.Cor_32page_321Code.mapOfGDgdjs_46Cor_9532page_95321Code_46GDformore1Objects1Objects, runtimeScene, true, true);
}if (gdjs.Cor_32page_321Code.condition0IsTrue_0.val) {
/* Reuse gdjs.Cor_32page_321Code.GDformore1Objects1 */
{for(var i = 0, len = gdjs.Cor_32page_321Code.GDformore1Objects1.length ;i < len;++i) {
    gdjs.Cor_32page_321Code.GDformore1Objects1[i].playAnimation();
}
}}

}


};

gdjs.Cor_32page_321Code.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.Cor_32page_321Code.GDmainmapbObjects1.length = 0;
gdjs.Cor_32page_321Code.GDmainmapbObjects2.length = 0;
gdjs.Cor_32page_321Code.GDbg1Objects1.length = 0;
gdjs.Cor_32page_321Code.GDbg1Objects2.length = 0;
gdjs.Cor_32page_321Code.GDinfoObjects1.length = 0;
gdjs.Cor_32page_321Code.GDinfoObjects2.length = 0;
gdjs.Cor_32page_321Code.GDHumancorObjects1.length = 0;
gdjs.Cor_32page_321Code.GDHumancorObjects2.length = 0;
gdjs.Cor_32page_321Code.GDperfbuttonObjects1.length = 0;
gdjs.Cor_32page_321Code.GDperfbuttonObjects2.length = 0;
gdjs.Cor_32page_321Code.GDNewObjectObjects1.length = 0;
gdjs.Cor_32page_321Code.GDNewObjectObjects2.length = 0;
gdjs.Cor_32page_321Code.GDinfo2tongatongObjects1.length = 0;
gdjs.Cor_32page_321Code.GDinfo2tongatongObjects2.length = 0;
gdjs.Cor_32page_321Code.GDinfo3Objects1.length = 0;
gdjs.Cor_32page_321Code.GDinfo3Objects2.length = 0;
gdjs.Cor_32page_321Code.GDinfo62Objects1.length = 0;
gdjs.Cor_32page_321Code.GDinfo62Objects2.length = 0;
gdjs.Cor_32page_321Code.GDinfo6Objects1.length = 0;
gdjs.Cor_32page_321Code.GDinfo6Objects2.length = 0;
gdjs.Cor_32page_321Code.GDinfo5Objects1.length = 0;
gdjs.Cor_32page_321Code.GDinfo5Objects2.length = 0;
gdjs.Cor_32page_321Code.GDclickhereObjects1.length = 0;
gdjs.Cor_32page_321Code.GDclickhereObjects2.length = 0;
gdjs.Cor_32page_321Code.GDinfo4Objects1.length = 0;
gdjs.Cor_32page_321Code.GDinfo4Objects2.length = 0;
gdjs.Cor_32page_321Code.GDNewObject2Objects1.length = 0;
gdjs.Cor_32page_321Code.GDNewObject2Objects2.length = 0;
gdjs.Cor_32page_321Code.GDformoreObjects1.length = 0;
gdjs.Cor_32page_321Code.GDformoreObjects2.length = 0;
gdjs.Cor_32page_321Code.GDmapsObjects1.length = 0;
gdjs.Cor_32page_321Code.GDmapsObjects2.length = 0;
gdjs.Cor_32page_321Code.GDformore1Objects1.length = 0;
gdjs.Cor_32page_321Code.GDformore1Objects2.length = 0;

gdjs.Cor_32page_321Code.eventsList0(runtimeScene);
return;

}

gdjs['Cor_32page_321Code'] = gdjs.Cor_32page_321Code;
