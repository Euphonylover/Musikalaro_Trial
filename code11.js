gdjs.LowPage3Code = {};
gdjs.LowPage3Code.GDmainmapbObjects1= [];
gdjs.LowPage3Code.GDmainmapbObjects2= [];
gdjs.LowPage3Code.GDbgObjects1= [];
gdjs.LowPage3Code.GDbgObjects2= [];
gdjs.LowPage3Code.GDtubaObjects1= [];
gdjs.LowPage3Code.GDtubaObjects2= [];
gdjs.LowPage3Code.GDbuttubaObjects1= [];
gdjs.LowPage3Code.GDbuttubaObjects2= [];
gdjs.LowPage3Code.GDBrassObjects1= [];
gdjs.LowPage3Code.GDBrassObjects2= [];
gdjs.LowPage3Code.GDActivity2bObjects1= [];
gdjs.LowPage3Code.GDActivity2bObjects2= [];
gdjs.LowPage3Code.GDActivity2Objects1= [];
gdjs.LowPage3Code.GDActivity2Objects2= [];
gdjs.LowPage3Code.GDActivityObjects1= [];
gdjs.LowPage3Code.GDActivityObjects2= [];
gdjs.LowPage3Code.GDTuba12Objects1= [];
gdjs.LowPage3Code.GDTuba12Objects2= [];
gdjs.LowPage3Code.GDTuba1Objects1= [];
gdjs.LowPage3Code.GDTuba1Objects2= [];
gdjs.LowPage3Code.GDact2Objects1= [];
gdjs.LowPage3Code.GDact2Objects2= [];
gdjs.LowPage3Code.GDact1Objects1= [];
gdjs.LowPage3Code.GDact1Objects2= [];
gdjs.LowPage3Code.GDListening2Objects1= [];
gdjs.LowPage3Code.GDListening2Objects2= [];
gdjs.LowPage3Code.GDListeningObjects1= [];
gdjs.LowPage3Code.GDListeningObjects2= [];
gdjs.LowPage3Code.GDbackbuttonObjects1= [];
gdjs.LowPage3Code.GDbackbuttonObjects2= [];

gdjs.LowPage3Code.conditionTrue_0 = {val:false};
gdjs.LowPage3Code.condition0IsTrue_0 = {val:false};
gdjs.LowPage3Code.condition1IsTrue_0 = {val:false};
gdjs.LowPage3Code.condition2IsTrue_0 = {val:false};
gdjs.LowPage3Code.condition3IsTrue_0 = {val:false};
gdjs.LowPage3Code.conditionTrue_1 = {val:false};
gdjs.LowPage3Code.condition0IsTrue_1 = {val:false};
gdjs.LowPage3Code.condition1IsTrue_1 = {val:false};
gdjs.LowPage3Code.condition2IsTrue_1 = {val:false};
gdjs.LowPage3Code.condition3IsTrue_1 = {val:false};


gdjs.LowPage3Code.mapOfGDgdjs_46LowPage3Code_46GDmainmapbObjects1Objects = Hashtable.newFrom({"mainmapb": gdjs.LowPage3Code.GDmainmapbObjects1});gdjs.LowPage3Code.mapOfGDgdjs_46LowPage3Code_46GDmainmapbObjects1Objects = Hashtable.newFrom({"mainmapb": gdjs.LowPage3Code.GDmainmapbObjects1});gdjs.LowPage3Code.mapOfGDgdjs_46LowPage3Code_46GDmainmapbObjects1Objects = Hashtable.newFrom({"mainmapb": gdjs.LowPage3Code.GDmainmapbObjects1});gdjs.LowPage3Code.mapOfGDgdjs_46LowPage3Code_46GDbackbuttonObjects1Objects = Hashtable.newFrom({"backbutton": gdjs.LowPage3Code.GDbackbuttonObjects1});gdjs.LowPage3Code.mapOfGDgdjs_46LowPage3Code_46GDTuba1Objects1Objects = Hashtable.newFrom({"Tuba1": gdjs.LowPage3Code.GDTuba1Objects1});gdjs.LowPage3Code.mapOfGDgdjs_46LowPage3Code_46GDact2Objects1Objects = Hashtable.newFrom({"act2": gdjs.LowPage3Code.GDact2Objects1});gdjs.LowPage3Code.mapOfGDgdjs_46LowPage3Code_46GDact1Objects1Objects = Hashtable.newFrom({"act1": gdjs.LowPage3Code.GDact1Objects1});gdjs.LowPage3Code.eventsList0 = function(runtimeScene) {

{


gdjs.LowPage3Code.condition0IsTrue_0.val = false;
{
gdjs.LowPage3Code.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
}if (gdjs.LowPage3Code.condition0IsTrue_0.val) {
{gdjs.evtTools.sound.playMusic(runtimeScene, "MARCHING-BAND-PARADE_Trombone.ogg", true, 3, 1);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("mainmapb"), gdjs.LowPage3Code.GDmainmapbObjects1);

gdjs.LowPage3Code.condition0IsTrue_0.val = false;
{
gdjs.LowPage3Code.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.LowPage3Code.mapOfGDgdjs_46LowPage3Code_46GDmainmapbObjects1Objects, runtimeScene, true, false);
}if (gdjs.LowPage3Code.condition0IsTrue_0.val) {
/* Reuse gdjs.LowPage3Code.GDmainmapbObjects1 */
{for(var i = 0, len = gdjs.LowPage3Code.GDmainmapbObjects1.length ;i < len;++i) {
    gdjs.LowPage3Code.GDmainmapbObjects1[i].setAnimation(1);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("mainmapb"), gdjs.LowPage3Code.GDmainmapbObjects1);

gdjs.LowPage3Code.condition0IsTrue_0.val = false;
gdjs.LowPage3Code.condition1IsTrue_0.val = false;
gdjs.LowPage3Code.condition2IsTrue_0.val = false;
{
gdjs.LowPage3Code.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.LowPage3Code.mapOfGDgdjs_46LowPage3Code_46GDmainmapbObjects1Objects, runtimeScene, true, false);
}if ( gdjs.LowPage3Code.condition0IsTrue_0.val ) {
{
gdjs.LowPage3Code.condition1IsTrue_0.val = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
}if ( gdjs.LowPage3Code.condition1IsTrue_0.val ) {
{
{gdjs.LowPage3Code.conditionTrue_1 = gdjs.LowPage3Code.condition2IsTrue_0;
gdjs.LowPage3Code.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(8448196);
}
}}
}
if (gdjs.LowPage3Code.condition2IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Main Map", false);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("mainmapb"), gdjs.LowPage3Code.GDmainmapbObjects1);

gdjs.LowPage3Code.condition0IsTrue_0.val = false;
{
gdjs.LowPage3Code.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.LowPage3Code.mapOfGDgdjs_46LowPage3Code_46GDmainmapbObjects1Objects, runtimeScene, true, true);
}if (gdjs.LowPage3Code.condition0IsTrue_0.val) {
/* Reuse gdjs.LowPage3Code.GDmainmapbObjects1 */
{for(var i = 0, len = gdjs.LowPage3Code.GDmainmapbObjects1.length ;i < len;++i) {
    gdjs.LowPage3Code.GDmainmapbObjects1[i].setAnimation(0);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("backbutton"), gdjs.LowPage3Code.GDbackbuttonObjects1);

gdjs.LowPage3Code.condition0IsTrue_0.val = false;
gdjs.LowPage3Code.condition1IsTrue_0.val = false;
gdjs.LowPage3Code.condition2IsTrue_0.val = false;
{
gdjs.LowPage3Code.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.LowPage3Code.mapOfGDgdjs_46LowPage3Code_46GDbackbuttonObjects1Objects, runtimeScene, true, false);
}if ( gdjs.LowPage3Code.condition0IsTrue_0.val ) {
{
gdjs.LowPage3Code.condition1IsTrue_0.val = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
}if ( gdjs.LowPage3Code.condition1IsTrue_0.val ) {
{
{gdjs.LowPage3Code.conditionTrue_1 = gdjs.LowPage3Code.condition2IsTrue_0;
gdjs.LowPage3Code.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(8449484);
}
}}
}
if (gdjs.LowPage3Code.condition2IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "LowPage1", false);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Tuba1"), gdjs.LowPage3Code.GDTuba1Objects1);

gdjs.LowPage3Code.condition0IsTrue_0.val = false;
gdjs.LowPage3Code.condition1IsTrue_0.val = false;
gdjs.LowPage3Code.condition2IsTrue_0.val = false;
{
gdjs.LowPage3Code.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.LowPage3Code.mapOfGDgdjs_46LowPage3Code_46GDTuba1Objects1Objects, runtimeScene, true, false);
}if ( gdjs.LowPage3Code.condition0IsTrue_0.val ) {
{
gdjs.LowPage3Code.condition1IsTrue_0.val = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
}if ( gdjs.LowPage3Code.condition1IsTrue_0.val ) {
{
{gdjs.LowPage3Code.conditionTrue_1 = gdjs.LowPage3Code.condition2IsTrue_0;
gdjs.LowPage3Code.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(10804388);
}
}}
}
if (gdjs.LowPage3Code.condition2IsTrue_0.val) {
{gdjs.evtTools.sound.playMusic(runtimeScene, "Dahil Sa’yo Tuba (online-audio-converter.com)-[AudioTrimmer.com].ogg", false, 100, 1);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("act2"), gdjs.LowPage3Code.GDact2Objects1);

gdjs.LowPage3Code.condition0IsTrue_0.val = false;
gdjs.LowPage3Code.condition1IsTrue_0.val = false;
gdjs.LowPage3Code.condition2IsTrue_0.val = false;
{
gdjs.LowPage3Code.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.LowPage3Code.mapOfGDgdjs_46LowPage3Code_46GDact2Objects1Objects, runtimeScene, true, false);
}if ( gdjs.LowPage3Code.condition0IsTrue_0.val ) {
{
gdjs.LowPage3Code.condition1IsTrue_0.val = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
}if ( gdjs.LowPage3Code.condition1IsTrue_0.val ) {
{
{gdjs.LowPage3Code.conditionTrue_1 = gdjs.LowPage3Code.condition2IsTrue_0;
gdjs.LowPage3Code.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(6913444);
}
}}
}
if (gdjs.LowPage3Code.condition2IsTrue_0.val) {
{gdjs.evtTools.window.openURL("https://www.youtube.com/watch?v=FeHUkqsnnx8&list=PLJPyalARUKjvTBbTg_Nma1vLbXm2TtR5L&index=13", runtimeScene);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("act1"), gdjs.LowPage3Code.GDact1Objects1);

gdjs.LowPage3Code.condition0IsTrue_0.val = false;
gdjs.LowPage3Code.condition1IsTrue_0.val = false;
gdjs.LowPage3Code.condition2IsTrue_0.val = false;
{
gdjs.LowPage3Code.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.LowPage3Code.mapOfGDgdjs_46LowPage3Code_46GDact1Objects1Objects, runtimeScene, true, false);
}if ( gdjs.LowPage3Code.condition0IsTrue_0.val ) {
{
gdjs.LowPage3Code.condition1IsTrue_0.val = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
}if ( gdjs.LowPage3Code.condition1IsTrue_0.val ) {
{
{gdjs.LowPage3Code.conditionTrue_1 = gdjs.LowPage3Code.condition2IsTrue_0;
gdjs.LowPage3Code.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(10813692);
}
}}
}
if (gdjs.LowPage3Code.condition2IsTrue_0.val) {
{gdjs.evtTools.window.openURL("https://www.youtube.com/watch?v=asbW5Fij9Go&list=PLJPyalARUKjvTBbTg_Nma1vLbXm2TtR5L&index=12", runtimeScene);
}}

}


};

gdjs.LowPage3Code.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.LowPage3Code.GDmainmapbObjects1.length = 0;
gdjs.LowPage3Code.GDmainmapbObjects2.length = 0;
gdjs.LowPage3Code.GDbgObjects1.length = 0;
gdjs.LowPage3Code.GDbgObjects2.length = 0;
gdjs.LowPage3Code.GDtubaObjects1.length = 0;
gdjs.LowPage3Code.GDtubaObjects2.length = 0;
gdjs.LowPage3Code.GDbuttubaObjects1.length = 0;
gdjs.LowPage3Code.GDbuttubaObjects2.length = 0;
gdjs.LowPage3Code.GDBrassObjects1.length = 0;
gdjs.LowPage3Code.GDBrassObjects2.length = 0;
gdjs.LowPage3Code.GDActivity2bObjects1.length = 0;
gdjs.LowPage3Code.GDActivity2bObjects2.length = 0;
gdjs.LowPage3Code.GDActivity2Objects1.length = 0;
gdjs.LowPage3Code.GDActivity2Objects2.length = 0;
gdjs.LowPage3Code.GDActivityObjects1.length = 0;
gdjs.LowPage3Code.GDActivityObjects2.length = 0;
gdjs.LowPage3Code.GDTuba12Objects1.length = 0;
gdjs.LowPage3Code.GDTuba12Objects2.length = 0;
gdjs.LowPage3Code.GDTuba1Objects1.length = 0;
gdjs.LowPage3Code.GDTuba1Objects2.length = 0;
gdjs.LowPage3Code.GDact2Objects1.length = 0;
gdjs.LowPage3Code.GDact2Objects2.length = 0;
gdjs.LowPage3Code.GDact1Objects1.length = 0;
gdjs.LowPage3Code.GDact1Objects2.length = 0;
gdjs.LowPage3Code.GDListening2Objects1.length = 0;
gdjs.LowPage3Code.GDListening2Objects2.length = 0;
gdjs.LowPage3Code.GDListeningObjects1.length = 0;
gdjs.LowPage3Code.GDListeningObjects2.length = 0;
gdjs.LowPage3Code.GDbackbuttonObjects1.length = 0;
gdjs.LowPage3Code.GDbackbuttonObjects2.length = 0;

gdjs.LowPage3Code.eventsList0(runtimeScene);
return;

}

gdjs['LowPage3Code'] = gdjs.LowPage3Code;
