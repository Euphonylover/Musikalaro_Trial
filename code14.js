gdjs.RonPage1Code = {};
gdjs.RonPage1Code.GDmainmapbObjects1= [];
gdjs.RonPage1Code.GDmainmapbObjects2= [];
gdjs.RonPage1Code.GDLaud2Objects1= [];
gdjs.RonPage1Code.GDLaud2Objects2= [];
gdjs.RonPage1Code.GDoctavina2Objects1= [];
gdjs.RonPage1Code.GDoctavina2Objects2= [];
gdjs.RonPage1Code.GDBandurria2Objects1= [];
gdjs.RonPage1Code.GDBandurria2Objects2= [];
gdjs.RonPage1Code.GDPlayingtechObjects1= [];
gdjs.RonPage1Code.GDPlayingtechObjects2= [];
gdjs.RonPage1Code.GDinfooctaObjects1= [];
gdjs.RonPage1Code.GDinfooctaObjects2= [];
gdjs.RonPage1Code.GDinfolaudObjects1= [];
gdjs.RonPage1Code.GDinfolaudObjects2= [];
gdjs.RonPage1Code.GDinfobandurriaObjects1= [];
gdjs.RonPage1Code.GDinfobandurriaObjects2= [];
gdjs.RonPage1Code.GDNext1Objects1= [];
gdjs.RonPage1Code.GDNext1Objects2= [];
gdjs.RonPage1Code.GDNewObject2Objects1= [];
gdjs.RonPage1Code.GDNewObject2Objects2= [];
gdjs.RonPage1Code.GDbandurria1Objects1= [];
gdjs.RonPage1Code.GDbandurria1Objects2= [];
gdjs.RonPage1Code.GDOctavinaObjects1= [];
gdjs.RonPage1Code.GDOctavinaObjects2= [];
gdjs.RonPage1Code.GDLaudObjects1= [];
gdjs.RonPage1Code.GDLaudObjects2= [];
gdjs.RonPage1Code.GDNewObject4Objects1= [];
gdjs.RonPage1Code.GDNewObject4Objects2= [];
gdjs.RonPage1Code.GDOctavina1Objects1= [];
gdjs.RonPage1Code.GDOctavina1Objects2= [];
gdjs.RonPage1Code.GDBandurriaObjects1= [];
gdjs.RonPage1Code.GDBandurriaObjects2= [];
gdjs.RonPage1Code.GDtechniquesObjects1= [];
gdjs.RonPage1Code.GDtechniquesObjects2= [];
gdjs.RonPage1Code.GDNextObjects1= [];
gdjs.RonPage1Code.GDNextObjects2= [];
gdjs.RonPage1Code.GDNewObjectObjects1= [];
gdjs.RonPage1Code.GDNewObjectObjects2= [];

gdjs.RonPage1Code.conditionTrue_0 = {val:false};
gdjs.RonPage1Code.condition0IsTrue_0 = {val:false};
gdjs.RonPage1Code.condition1IsTrue_0 = {val:false};
gdjs.RonPage1Code.condition2IsTrue_0 = {val:false};
gdjs.RonPage1Code.condition3IsTrue_0 = {val:false};
gdjs.RonPage1Code.conditionTrue_1 = {val:false};
gdjs.RonPage1Code.condition0IsTrue_1 = {val:false};
gdjs.RonPage1Code.condition1IsTrue_1 = {val:false};
gdjs.RonPage1Code.condition2IsTrue_1 = {val:false};
gdjs.RonPage1Code.condition3IsTrue_1 = {val:false};


gdjs.RonPage1Code.mapOfGDgdjs_46RonPage1Code_46GDmainmapbObjects1Objects = Hashtable.newFrom({"mainmapb": gdjs.RonPage1Code.GDmainmapbObjects1});gdjs.RonPage1Code.mapOfGDgdjs_46RonPage1Code_46GDmainmapbObjects1Objects = Hashtable.newFrom({"mainmapb": gdjs.RonPage1Code.GDmainmapbObjects1});gdjs.RonPage1Code.mapOfGDgdjs_46RonPage1Code_46GDmainmapbObjects1Objects = Hashtable.newFrom({"mainmapb": gdjs.RonPage1Code.GDmainmapbObjects1});gdjs.RonPage1Code.mapOfGDgdjs_46RonPage1Code_46GDNewObjectObjects1Objects = Hashtable.newFrom({"NewObject": gdjs.RonPage1Code.GDNewObjectObjects1});gdjs.RonPage1Code.mapOfGDgdjs_46RonPage1Code_46GDBandurria2Objects1Objects = Hashtable.newFrom({"Bandurria2": gdjs.RonPage1Code.GDBandurria2Objects1});gdjs.RonPage1Code.mapOfGDgdjs_46RonPage1Code_46GDoctavina2Objects1Objects = Hashtable.newFrom({"octavina2": gdjs.RonPage1Code.GDoctavina2Objects1});gdjs.RonPage1Code.mapOfGDgdjs_46RonPage1Code_46GDNext1Objects1Objects = Hashtable.newFrom({"Next1": gdjs.RonPage1Code.GDNext1Objects1});gdjs.RonPage1Code.mapOfGDgdjs_46RonPage1Code_46GDPlayingtechObjects1Objects = Hashtable.newFrom({"Playingtech": gdjs.RonPage1Code.GDPlayingtechObjects1});gdjs.RonPage1Code.eventsList0 = function(runtimeScene) {

{


gdjs.RonPage1Code.condition0IsTrue_0.val = false;
{
gdjs.RonPage1Code.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
}if (gdjs.RonPage1Code.condition0IsTrue_0.val) {
{gdjs.evtTools.sound.playMusic(runtimeScene, "Walang-Hanggang-Karaoke-vid-[AudioTrimmer.com]-[AudioTrimmer.com].ogg", true, 1, 1);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("mainmapb"), gdjs.RonPage1Code.GDmainmapbObjects1);

gdjs.RonPage1Code.condition0IsTrue_0.val = false;
{
gdjs.RonPage1Code.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.RonPage1Code.mapOfGDgdjs_46RonPage1Code_46GDmainmapbObjects1Objects, runtimeScene, true, false);
}if (gdjs.RonPage1Code.condition0IsTrue_0.val) {
/* Reuse gdjs.RonPage1Code.GDmainmapbObjects1 */
{for(var i = 0, len = gdjs.RonPage1Code.GDmainmapbObjects1.length ;i < len;++i) {
    gdjs.RonPage1Code.GDmainmapbObjects1[i].setAnimation(1);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("mainmapb"), gdjs.RonPage1Code.GDmainmapbObjects1);

gdjs.RonPage1Code.condition0IsTrue_0.val = false;
gdjs.RonPage1Code.condition1IsTrue_0.val = false;
gdjs.RonPage1Code.condition2IsTrue_0.val = false;
{
gdjs.RonPage1Code.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.RonPage1Code.mapOfGDgdjs_46RonPage1Code_46GDmainmapbObjects1Objects, runtimeScene, true, false);
}if ( gdjs.RonPage1Code.condition0IsTrue_0.val ) {
{
gdjs.RonPage1Code.condition1IsTrue_0.val = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
}if ( gdjs.RonPage1Code.condition1IsTrue_0.val ) {
{
{gdjs.RonPage1Code.conditionTrue_1 = gdjs.RonPage1Code.condition2IsTrue_0;
gdjs.RonPage1Code.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(8451988);
}
}}
}
if (gdjs.RonPage1Code.condition2IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Main Map", false);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("mainmapb"), gdjs.RonPage1Code.GDmainmapbObjects1);

gdjs.RonPage1Code.condition0IsTrue_0.val = false;
{
gdjs.RonPage1Code.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.RonPage1Code.mapOfGDgdjs_46RonPage1Code_46GDmainmapbObjects1Objects, runtimeScene, true, true);
}if (gdjs.RonPage1Code.condition0IsTrue_0.val) {
/* Reuse gdjs.RonPage1Code.GDmainmapbObjects1 */
{for(var i = 0, len = gdjs.RonPage1Code.GDmainmapbObjects1.length ;i < len;++i) {
    gdjs.RonPage1Code.GDmainmapbObjects1[i].setAnimation(0);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("NewObject"), gdjs.RonPage1Code.GDNewObjectObjects1);

gdjs.RonPage1Code.condition0IsTrue_0.val = false;
gdjs.RonPage1Code.condition1IsTrue_0.val = false;
gdjs.RonPage1Code.condition2IsTrue_0.val = false;
{
gdjs.RonPage1Code.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.RonPage1Code.mapOfGDgdjs_46RonPage1Code_46GDNewObjectObjects1Objects, runtimeScene, true, false);
}if ( gdjs.RonPage1Code.condition0IsTrue_0.val ) {
{
gdjs.RonPage1Code.condition1IsTrue_0.val = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
}if ( gdjs.RonPage1Code.condition1IsTrue_0.val ) {
{
{gdjs.RonPage1Code.conditionTrue_1 = gdjs.RonPage1Code.condition2IsTrue_0;
gdjs.RonPage1Code.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(8452108);
}
}}
}
if (gdjs.RonPage1Code.condition2IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Rondalla", false);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Bandurria2"), gdjs.RonPage1Code.GDBandurria2Objects1);

gdjs.RonPage1Code.condition0IsTrue_0.val = false;
gdjs.RonPage1Code.condition1IsTrue_0.val = false;
gdjs.RonPage1Code.condition2IsTrue_0.val = false;
{
gdjs.RonPage1Code.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.RonPage1Code.mapOfGDgdjs_46RonPage1Code_46GDBandurria2Objects1Objects, runtimeScene, true, false);
}if ( gdjs.RonPage1Code.condition0IsTrue_0.val ) {
{
gdjs.RonPage1Code.condition1IsTrue_0.val = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
}if ( gdjs.RonPage1Code.condition1IsTrue_0.val ) {
{
{gdjs.RonPage1Code.conditionTrue_1 = gdjs.RonPage1Code.condition2IsTrue_0;
gdjs.RonPage1Code.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(10835996);
}
}}
}
if (gdjs.RonPage1Code.condition2IsTrue_0.val) {
{gdjs.evtTools.sound.playMusic(runtimeScene, "Bandurria-[AudioTrimmer.com].ogg", false, 100, 1);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("octavina2"), gdjs.RonPage1Code.GDoctavina2Objects1);

gdjs.RonPage1Code.condition0IsTrue_0.val = false;
gdjs.RonPage1Code.condition1IsTrue_0.val = false;
gdjs.RonPage1Code.condition2IsTrue_0.val = false;
{
gdjs.RonPage1Code.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.RonPage1Code.mapOfGDgdjs_46RonPage1Code_46GDoctavina2Objects1Objects, runtimeScene, true, false);
}if ( gdjs.RonPage1Code.condition0IsTrue_0.val ) {
{
gdjs.RonPage1Code.condition1IsTrue_0.val = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
}if ( gdjs.RonPage1Code.condition1IsTrue_0.val ) {
{
{gdjs.RonPage1Code.conditionTrue_1 = gdjs.RonPage1Code.condition2IsTrue_0;
gdjs.RonPage1Code.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(10837148);
}
}}
}
if (gdjs.RonPage1Code.condition2IsTrue_0.val) {
{gdjs.evtTools.sound.playMusic(runtimeScene, "Octavina.ogg", false, 100, 1);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Next1"), gdjs.RonPage1Code.GDNext1Objects1);

gdjs.RonPage1Code.condition0IsTrue_0.val = false;
gdjs.RonPage1Code.condition1IsTrue_0.val = false;
gdjs.RonPage1Code.condition2IsTrue_0.val = false;
{
gdjs.RonPage1Code.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.RonPage1Code.mapOfGDgdjs_46RonPage1Code_46GDNext1Objects1Objects, runtimeScene, true, false);
}if ( gdjs.RonPage1Code.condition0IsTrue_0.val ) {
{
gdjs.RonPage1Code.condition1IsTrue_0.val = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
}if ( gdjs.RonPage1Code.condition1IsTrue_0.val ) {
{
{gdjs.RonPage1Code.conditionTrue_1 = gdjs.RonPage1Code.condition2IsTrue_0;
gdjs.RonPage1Code.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(8452204);
}
}}
}
if (gdjs.RonPage1Code.condition2IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "RonPage2", false);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Playingtech"), gdjs.RonPage1Code.GDPlayingtechObjects1);

gdjs.RonPage1Code.condition0IsTrue_0.val = false;
gdjs.RonPage1Code.condition1IsTrue_0.val = false;
gdjs.RonPage1Code.condition2IsTrue_0.val = false;
{
gdjs.RonPage1Code.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.RonPage1Code.mapOfGDgdjs_46RonPage1Code_46GDPlayingtechObjects1Objects, runtimeScene, true, false);
}if ( gdjs.RonPage1Code.condition0IsTrue_0.val ) {
{
gdjs.RonPage1Code.condition1IsTrue_0.val = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
}if ( gdjs.RonPage1Code.condition1IsTrue_0.val ) {
{
{gdjs.RonPage1Code.conditionTrue_1 = gdjs.RonPage1Code.condition2IsTrue_0;
gdjs.RonPage1Code.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(10822684);
}
}}
}
if (gdjs.RonPage1Code.condition2IsTrue_0.val) {
{gdjs.evtTools.window.openURL("https://www.youtube.com/watch?v=SqzAP0H_o7o&list=PLJPyalARUKjvTBbTg_Nma1vLbXm2TtR5L&index=16", runtimeScene);
}}

}


};

gdjs.RonPage1Code.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.RonPage1Code.GDmainmapbObjects1.length = 0;
gdjs.RonPage1Code.GDmainmapbObjects2.length = 0;
gdjs.RonPage1Code.GDLaud2Objects1.length = 0;
gdjs.RonPage1Code.GDLaud2Objects2.length = 0;
gdjs.RonPage1Code.GDoctavina2Objects1.length = 0;
gdjs.RonPage1Code.GDoctavina2Objects2.length = 0;
gdjs.RonPage1Code.GDBandurria2Objects1.length = 0;
gdjs.RonPage1Code.GDBandurria2Objects2.length = 0;
gdjs.RonPage1Code.GDPlayingtechObjects1.length = 0;
gdjs.RonPage1Code.GDPlayingtechObjects2.length = 0;
gdjs.RonPage1Code.GDinfooctaObjects1.length = 0;
gdjs.RonPage1Code.GDinfooctaObjects2.length = 0;
gdjs.RonPage1Code.GDinfolaudObjects1.length = 0;
gdjs.RonPage1Code.GDinfolaudObjects2.length = 0;
gdjs.RonPage1Code.GDinfobandurriaObjects1.length = 0;
gdjs.RonPage1Code.GDinfobandurriaObjects2.length = 0;
gdjs.RonPage1Code.GDNext1Objects1.length = 0;
gdjs.RonPage1Code.GDNext1Objects2.length = 0;
gdjs.RonPage1Code.GDNewObject2Objects1.length = 0;
gdjs.RonPage1Code.GDNewObject2Objects2.length = 0;
gdjs.RonPage1Code.GDbandurria1Objects1.length = 0;
gdjs.RonPage1Code.GDbandurria1Objects2.length = 0;
gdjs.RonPage1Code.GDOctavinaObjects1.length = 0;
gdjs.RonPage1Code.GDOctavinaObjects2.length = 0;
gdjs.RonPage1Code.GDLaudObjects1.length = 0;
gdjs.RonPage1Code.GDLaudObjects2.length = 0;
gdjs.RonPage1Code.GDNewObject4Objects1.length = 0;
gdjs.RonPage1Code.GDNewObject4Objects2.length = 0;
gdjs.RonPage1Code.GDOctavina1Objects1.length = 0;
gdjs.RonPage1Code.GDOctavina1Objects2.length = 0;
gdjs.RonPage1Code.GDBandurriaObjects1.length = 0;
gdjs.RonPage1Code.GDBandurriaObjects2.length = 0;
gdjs.RonPage1Code.GDtechniquesObjects1.length = 0;
gdjs.RonPage1Code.GDtechniquesObjects2.length = 0;
gdjs.RonPage1Code.GDNextObjects1.length = 0;
gdjs.RonPage1Code.GDNextObjects2.length = 0;
gdjs.RonPage1Code.GDNewObjectObjects1.length = 0;
gdjs.RonPage1Code.GDNewObjectObjects2.length = 0;

gdjs.RonPage1Code.eventsList0(runtimeScene);
return;

}

gdjs['RonPage1Code'] = gdjs.RonPage1Code;
