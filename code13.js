gdjs.RondallaCode = {};
gdjs.RondallaCode.GDmainmapbObjects1= [];
gdjs.RondallaCode.GDmainmapbObjects2= [];
gdjs.RondallaCode.GDbgObjects1= [];
gdjs.RondallaCode.GDbgObjects2= [];
gdjs.RondallaCode.GDpaperinfoObjects1= [];
gdjs.RondallaCode.GDpaperinfoObjects2= [];
gdjs.RondallaCode.GDButtoninsObjects1= [];
gdjs.RondallaCode.GDButtoninsObjects2= [];
gdjs.RondallaCode.GDButtonperfObjects1= [];
gdjs.RondallaCode.GDButtonperfObjects2= [];
gdjs.RondallaCode.GDNewObjectObjects1= [];
gdjs.RondallaCode.GDNewObjectObjects2= [];
gdjs.RondallaCode.GDbackbuttonObjects1= [];
gdjs.RondallaCode.GDbackbuttonObjects2= [];
gdjs.RondallaCode.GDinfo2Objects1= [];
gdjs.RondallaCode.GDinfo2Objects2= [];
gdjs.RondallaCode.GDinfoObjects1= [];
gdjs.RondallaCode.GDinfoObjects2= [];
gdjs.RondallaCode.GDInstrumentsObjects1= [];
gdjs.RondallaCode.GDInstrumentsObjects2= [];
gdjs.RondallaCode.GDwatchObjects1= [];
gdjs.RondallaCode.GDwatchObjects2= [];
gdjs.RondallaCode.GDRondallanameObjects1= [];
gdjs.RondallaCode.GDRondallanameObjects2= [];

gdjs.RondallaCode.conditionTrue_0 = {val:false};
gdjs.RondallaCode.condition0IsTrue_0 = {val:false};
gdjs.RondallaCode.condition1IsTrue_0 = {val:false};
gdjs.RondallaCode.condition2IsTrue_0 = {val:false};
gdjs.RondallaCode.condition3IsTrue_0 = {val:false};
gdjs.RondallaCode.conditionTrue_1 = {val:false};
gdjs.RondallaCode.condition0IsTrue_1 = {val:false};
gdjs.RondallaCode.condition1IsTrue_1 = {val:false};
gdjs.RondallaCode.condition2IsTrue_1 = {val:false};
gdjs.RondallaCode.condition3IsTrue_1 = {val:false};


gdjs.RondallaCode.mapOfGDgdjs_46RondallaCode_46GDmainmapbObjects1Objects = Hashtable.newFrom({"mainmapb": gdjs.RondallaCode.GDmainmapbObjects1});gdjs.RondallaCode.mapOfGDgdjs_46RondallaCode_46GDmainmapbObjects1Objects = Hashtable.newFrom({"mainmapb": gdjs.RondallaCode.GDmainmapbObjects1});gdjs.RondallaCode.mapOfGDgdjs_46RondallaCode_46GDmainmapbObjects1Objects = Hashtable.newFrom({"mainmapb": gdjs.RondallaCode.GDmainmapbObjects1});gdjs.RondallaCode.mapOfGDgdjs_46RondallaCode_46GDbackbuttonObjects1Objects = Hashtable.newFrom({"backbutton": gdjs.RondallaCode.GDbackbuttonObjects1});gdjs.RondallaCode.mapOfGDgdjs_46RondallaCode_46GDInstrumentsObjects1Objects = Hashtable.newFrom({"Instruments": gdjs.RondallaCode.GDInstrumentsObjects1});gdjs.RondallaCode.mapOfGDgdjs_46RondallaCode_46GDwatchObjects1Objects = Hashtable.newFrom({"watch": gdjs.RondallaCode.GDwatchObjects1});gdjs.RondallaCode.eventsList0 = function(runtimeScene) {

{


gdjs.RondallaCode.condition0IsTrue_0.val = false;
{
gdjs.RondallaCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
}if (gdjs.RondallaCode.condition0IsTrue_0.val) {
{gdjs.evtTools.sound.playMusic(runtimeScene, "Walang-Hanggang-Karaoke-vid-[AudioTrimmer.com]-[AudioTrimmer.com].ogg", true, 3, 1);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("mainmapb"), gdjs.RondallaCode.GDmainmapbObjects1);

gdjs.RondallaCode.condition0IsTrue_0.val = false;
{
gdjs.RondallaCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.RondallaCode.mapOfGDgdjs_46RondallaCode_46GDmainmapbObjects1Objects, runtimeScene, true, false);
}if (gdjs.RondallaCode.condition0IsTrue_0.val) {
/* Reuse gdjs.RondallaCode.GDmainmapbObjects1 */
{for(var i = 0, len = gdjs.RondallaCode.GDmainmapbObjects1.length ;i < len;++i) {
    gdjs.RondallaCode.GDmainmapbObjects1[i].setAnimation(1);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("mainmapb"), gdjs.RondallaCode.GDmainmapbObjects1);

gdjs.RondallaCode.condition0IsTrue_0.val = false;
gdjs.RondallaCode.condition1IsTrue_0.val = false;
gdjs.RondallaCode.condition2IsTrue_0.val = false;
{
gdjs.RondallaCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.RondallaCode.mapOfGDgdjs_46RondallaCode_46GDmainmapbObjects1Objects, runtimeScene, true, false);
}if ( gdjs.RondallaCode.condition0IsTrue_0.val ) {
{
gdjs.RondallaCode.condition1IsTrue_0.val = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
}if ( gdjs.RondallaCode.condition1IsTrue_0.val ) {
{
{gdjs.RondallaCode.conditionTrue_1 = gdjs.RondallaCode.condition2IsTrue_0;
gdjs.RondallaCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(8449580);
}
}}
}
if (gdjs.RondallaCode.condition2IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Main Map", false);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("mainmapb"), gdjs.RondallaCode.GDmainmapbObjects1);

gdjs.RondallaCode.condition0IsTrue_0.val = false;
{
gdjs.RondallaCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.RondallaCode.mapOfGDgdjs_46RondallaCode_46GDmainmapbObjects1Objects, runtimeScene, true, true);
}if (gdjs.RondallaCode.condition0IsTrue_0.val) {
/* Reuse gdjs.RondallaCode.GDmainmapbObjects1 */
{for(var i = 0, len = gdjs.RondallaCode.GDmainmapbObjects1.length ;i < len;++i) {
    gdjs.RondallaCode.GDmainmapbObjects1[i].setAnimation(0);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("backbutton"), gdjs.RondallaCode.GDbackbuttonObjects1);

gdjs.RondallaCode.condition0IsTrue_0.val = false;
gdjs.RondallaCode.condition1IsTrue_0.val = false;
gdjs.RondallaCode.condition2IsTrue_0.val = false;
{
gdjs.RondallaCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.RondallaCode.mapOfGDgdjs_46RondallaCode_46GDbackbuttonObjects1Objects, runtimeScene, true, false);
}if ( gdjs.RondallaCode.condition0IsTrue_0.val ) {
{
gdjs.RondallaCode.condition1IsTrue_0.val = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
}if ( gdjs.RondallaCode.condition1IsTrue_0.val ) {
{
{gdjs.RondallaCode.conditionTrue_1 = gdjs.RondallaCode.condition2IsTrue_0;
gdjs.RondallaCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(8449676);
}
}}
}
if (gdjs.RondallaCode.condition2IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Visayas", false);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Instruments"), gdjs.RondallaCode.GDInstrumentsObjects1);

gdjs.RondallaCode.condition0IsTrue_0.val = false;
gdjs.RondallaCode.condition1IsTrue_0.val = false;
{
gdjs.RondallaCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.RondallaCode.mapOfGDgdjs_46RondallaCode_46GDInstrumentsObjects1Objects, runtimeScene, true, false);
}if ( gdjs.RondallaCode.condition0IsTrue_0.val ) {
{
gdjs.RondallaCode.condition1IsTrue_0.val = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
}}
if (gdjs.RondallaCode.condition1IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "RonPage1", false);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("watch"), gdjs.RondallaCode.GDwatchObjects1);

gdjs.RondallaCode.condition0IsTrue_0.val = false;
gdjs.RondallaCode.condition1IsTrue_0.val = false;
gdjs.RondallaCode.condition2IsTrue_0.val = false;
{
gdjs.RondallaCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.RondallaCode.mapOfGDgdjs_46RondallaCode_46GDwatchObjects1Objects, runtimeScene, true, false);
}if ( gdjs.RondallaCode.condition0IsTrue_0.val ) {
{
gdjs.RondallaCode.condition1IsTrue_0.val = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
}if ( gdjs.RondallaCode.condition1IsTrue_0.val ) {
{
{gdjs.RondallaCode.conditionTrue_1 = gdjs.RondallaCode.condition2IsTrue_0;
gdjs.RondallaCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(10833908);
}
}}
}
if (gdjs.RondallaCode.condition2IsTrue_0.val) {
{gdjs.evtTools.window.openURL("https://www.youtube.com/watch?v=eQ0WUPIzzbg&list=PLJPyalARUKjvTBbTg_Nma1vLbXm2TtR5L&index=8", runtimeScene);
}}

}


};

gdjs.RondallaCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.RondallaCode.GDmainmapbObjects1.length = 0;
gdjs.RondallaCode.GDmainmapbObjects2.length = 0;
gdjs.RondallaCode.GDbgObjects1.length = 0;
gdjs.RondallaCode.GDbgObjects2.length = 0;
gdjs.RondallaCode.GDpaperinfoObjects1.length = 0;
gdjs.RondallaCode.GDpaperinfoObjects2.length = 0;
gdjs.RondallaCode.GDButtoninsObjects1.length = 0;
gdjs.RondallaCode.GDButtoninsObjects2.length = 0;
gdjs.RondallaCode.GDButtonperfObjects1.length = 0;
gdjs.RondallaCode.GDButtonperfObjects2.length = 0;
gdjs.RondallaCode.GDNewObjectObjects1.length = 0;
gdjs.RondallaCode.GDNewObjectObjects2.length = 0;
gdjs.RondallaCode.GDbackbuttonObjects1.length = 0;
gdjs.RondallaCode.GDbackbuttonObjects2.length = 0;
gdjs.RondallaCode.GDinfo2Objects1.length = 0;
gdjs.RondallaCode.GDinfo2Objects2.length = 0;
gdjs.RondallaCode.GDinfoObjects1.length = 0;
gdjs.RondallaCode.GDinfoObjects2.length = 0;
gdjs.RondallaCode.GDInstrumentsObjects1.length = 0;
gdjs.RondallaCode.GDInstrumentsObjects2.length = 0;
gdjs.RondallaCode.GDwatchObjects1.length = 0;
gdjs.RondallaCode.GDwatchObjects2.length = 0;
gdjs.RondallaCode.GDRondallanameObjects1.length = 0;
gdjs.RondallaCode.GDRondallanameObjects2.length = 0;

gdjs.RondallaCode.eventsList0(runtimeScene);
return;

}

gdjs['RondallaCode'] = gdjs.RondallaCode;
