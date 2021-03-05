gdjs.PangalayCode = {};
gdjs.PangalayCode.GDmainmapbObjects1= [];
gdjs.PangalayCode.GDmainmapbObjects2= [];
gdjs.PangalayCode.GDNewObjectObjects1= [];
gdjs.PangalayCode.GDNewObjectObjects2= [];
gdjs.PangalayCode.GDNewObject2Objects1= [];
gdjs.PangalayCode.GDNewObject2Objects2= [];
gdjs.PangalayCode.GDbasicroutinObjects1= [];
gdjs.PangalayCode.GDbasicroutinObjects2= [];
gdjs.PangalayCode.GDperformanceObjects1= [];
gdjs.PangalayCode.GDperformanceObjects2= [];
gdjs.PangalayCode.GDbasicposObjects1= [];
gdjs.PangalayCode.GDbasicposObjects2= [];
gdjs.PangalayCode.GDNewObject4Objects1= [];
gdjs.PangalayCode.GDNewObject4Objects2= [];
gdjs.PangalayCode.GDpangalay3Objects1= [];
gdjs.PangalayCode.GDpangalay3Objects2= [];
gdjs.PangalayCode.GDpangalay2Objects1= [];
gdjs.PangalayCode.GDpangalay2Objects2= [];
gdjs.PangalayCode.GDpangalayObjects1= [];
gdjs.PangalayCode.GDpangalayObjects2= [];
gdjs.PangalayCode.GDPERFObjects1= [];
gdjs.PangalayCode.GDPERFObjects2= [];
gdjs.PangalayCode.GDSHORTROUTINEObjects1= [];
gdjs.PangalayCode.GDSHORTROUTINEObjects2= [];
gdjs.PangalayCode.GDbinfoObjects1= [];
gdjs.PangalayCode.GDbinfoObjects2= [];
gdjs.PangalayCode.GDbackbObjects1= [];
gdjs.PangalayCode.GDbackbObjects2= [];

gdjs.PangalayCode.conditionTrue_0 = {val:false};
gdjs.PangalayCode.condition0IsTrue_0 = {val:false};
gdjs.PangalayCode.condition1IsTrue_0 = {val:false};
gdjs.PangalayCode.condition2IsTrue_0 = {val:false};
gdjs.PangalayCode.condition3IsTrue_0 = {val:false};
gdjs.PangalayCode.conditionTrue_1 = {val:false};
gdjs.PangalayCode.condition0IsTrue_1 = {val:false};
gdjs.PangalayCode.condition1IsTrue_1 = {val:false};
gdjs.PangalayCode.condition2IsTrue_1 = {val:false};
gdjs.PangalayCode.condition3IsTrue_1 = {val:false};


gdjs.PangalayCode.mapOfGDgdjs_46PangalayCode_46GDmainmapbObjects1Objects = Hashtable.newFrom({"mainmapb": gdjs.PangalayCode.GDmainmapbObjects1});gdjs.PangalayCode.mapOfGDgdjs_46PangalayCode_46GDmainmapbObjects1Objects = Hashtable.newFrom({"mainmapb": gdjs.PangalayCode.GDmainmapbObjects1});gdjs.PangalayCode.mapOfGDgdjs_46PangalayCode_46GDmainmapbObjects1Objects = Hashtable.newFrom({"mainmapb": gdjs.PangalayCode.GDmainmapbObjects1});gdjs.PangalayCode.mapOfGDgdjs_46PangalayCode_46GDbackbObjects1Objects = Hashtable.newFrom({"backb": gdjs.PangalayCode.GDbackbObjects1});gdjs.PangalayCode.mapOfGDgdjs_46PangalayCode_46GDSHORTROUTINEObjects1Objects = Hashtable.newFrom({"SHORTROUTINE": gdjs.PangalayCode.GDSHORTROUTINEObjects1});gdjs.PangalayCode.mapOfGDgdjs_46PangalayCode_46GDPERFObjects1Objects = Hashtable.newFrom({"PERF": gdjs.PangalayCode.GDPERFObjects1});gdjs.PangalayCode.mapOfGDgdjs_46PangalayCode_46GDbinfoObjects1Objects = Hashtable.newFrom({"binfo": gdjs.PangalayCode.GDbinfoObjects1});gdjs.PangalayCode.eventsList0 = function(runtimeScene) {

{


gdjs.PangalayCode.condition0IsTrue_0.val = false;
{
gdjs.PangalayCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
}if (gdjs.PangalayCode.condition0IsTrue_0.val) {
{gdjs.evtTools.sound.playMusic(runtimeScene, "Tungkil-[AudioTrimmer.com].ogg", true, 1, 1);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("mainmapb"), gdjs.PangalayCode.GDmainmapbObjects1);

gdjs.PangalayCode.condition0IsTrue_0.val = false;
{
gdjs.PangalayCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.PangalayCode.mapOfGDgdjs_46PangalayCode_46GDmainmapbObjects1Objects, runtimeScene, true, false);
}if (gdjs.PangalayCode.condition0IsTrue_0.val) {
/* Reuse gdjs.PangalayCode.GDmainmapbObjects1 */
{for(var i = 0, len = gdjs.PangalayCode.GDmainmapbObjects1.length ;i < len;++i) {
    gdjs.PangalayCode.GDmainmapbObjects1[i].setAnimation(1);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("mainmapb"), gdjs.PangalayCode.GDmainmapbObjects1);

gdjs.PangalayCode.condition0IsTrue_0.val = false;
gdjs.PangalayCode.condition1IsTrue_0.val = false;
gdjs.PangalayCode.condition2IsTrue_0.val = false;
{
gdjs.PangalayCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.PangalayCode.mapOfGDgdjs_46PangalayCode_46GDmainmapbObjects1Objects, runtimeScene, true, false);
}if ( gdjs.PangalayCode.condition0IsTrue_0.val ) {
{
gdjs.PangalayCode.condition1IsTrue_0.val = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
}if ( gdjs.PangalayCode.condition1IsTrue_0.val ) {
{
{gdjs.PangalayCode.conditionTrue_1 = gdjs.PangalayCode.condition2IsTrue_0;
gdjs.PangalayCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(10733108);
}
}}
}
if (gdjs.PangalayCode.condition2IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Main Map", false);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("mainmapb"), gdjs.PangalayCode.GDmainmapbObjects1);

gdjs.PangalayCode.condition0IsTrue_0.val = false;
{
gdjs.PangalayCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.PangalayCode.mapOfGDgdjs_46PangalayCode_46GDmainmapbObjects1Objects, runtimeScene, true, true);
}if (gdjs.PangalayCode.condition0IsTrue_0.val) {
/* Reuse gdjs.PangalayCode.GDmainmapbObjects1 */
{for(var i = 0, len = gdjs.PangalayCode.GDmainmapbObjects1.length ;i < len;++i) {
    gdjs.PangalayCode.GDmainmapbObjects1[i].setAnimation(0);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("backb"), gdjs.PangalayCode.GDbackbObjects1);

gdjs.PangalayCode.condition0IsTrue_0.val = false;
gdjs.PangalayCode.condition1IsTrue_0.val = false;
gdjs.PangalayCode.condition2IsTrue_0.val = false;
{
gdjs.PangalayCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.PangalayCode.mapOfGDgdjs_46PangalayCode_46GDbackbObjects1Objects, runtimeScene, true, false);
}if ( gdjs.PangalayCode.condition0IsTrue_0.val ) {
{
gdjs.PangalayCode.condition1IsTrue_0.val = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
}if ( gdjs.PangalayCode.condition1IsTrue_0.val ) {
{
{gdjs.PangalayCode.conditionTrue_1 = gdjs.PangalayCode.condition2IsTrue_0;
gdjs.PangalayCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(10699796);
}
}}
}
if (gdjs.PangalayCode.condition2IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "mindanao", false);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("SHORTROUTINE"), gdjs.PangalayCode.GDSHORTROUTINEObjects1);

gdjs.PangalayCode.condition0IsTrue_0.val = false;
gdjs.PangalayCode.condition1IsTrue_0.val = false;
gdjs.PangalayCode.condition2IsTrue_0.val = false;
{
gdjs.PangalayCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.PangalayCode.mapOfGDgdjs_46PangalayCode_46GDSHORTROUTINEObjects1Objects, runtimeScene, true, false);
}if ( gdjs.PangalayCode.condition0IsTrue_0.val ) {
{
gdjs.PangalayCode.condition1IsTrue_0.val = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
}if ( gdjs.PangalayCode.condition1IsTrue_0.val ) {
{
{gdjs.PangalayCode.conditionTrue_1 = gdjs.PangalayCode.condition2IsTrue_0;
gdjs.PangalayCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(10838172);
}
}}
}
if (gdjs.PangalayCode.condition2IsTrue_0.val) {
{gdjs.evtTools.window.openURL("https://www.youtube.com/watch?v=WAuZwFGL2WA&list=PLJPyalARUKjvTBbTg_Nma1vLbXm2TtR5L&index=17", runtimeScene);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("PERF"), gdjs.PangalayCode.GDPERFObjects1);

gdjs.PangalayCode.condition0IsTrue_0.val = false;
gdjs.PangalayCode.condition1IsTrue_0.val = false;
gdjs.PangalayCode.condition2IsTrue_0.val = false;
{
gdjs.PangalayCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.PangalayCode.mapOfGDgdjs_46PangalayCode_46GDPERFObjects1Objects, runtimeScene, true, false);
}if ( gdjs.PangalayCode.condition0IsTrue_0.val ) {
{
gdjs.PangalayCode.condition1IsTrue_0.val = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
}if ( gdjs.PangalayCode.condition1IsTrue_0.val ) {
{
{gdjs.PangalayCode.conditionTrue_1 = gdjs.PangalayCode.condition2IsTrue_0;
gdjs.PangalayCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(10735948);
}
}}
}
if (gdjs.PangalayCode.condition2IsTrue_0.val) {
{gdjs.evtTools.window.openURL("https://www.youtube.com/watch?v=LROSc_APbF8", runtimeScene);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("binfo"), gdjs.PangalayCode.GDbinfoObjects1);

gdjs.PangalayCode.condition0IsTrue_0.val = false;
gdjs.PangalayCode.condition1IsTrue_0.val = false;
gdjs.PangalayCode.condition2IsTrue_0.val = false;
{
gdjs.PangalayCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.PangalayCode.mapOfGDgdjs_46PangalayCode_46GDbinfoObjects1Objects, runtimeScene, true, false);
}if ( gdjs.PangalayCode.condition0IsTrue_0.val ) {
{
gdjs.PangalayCode.condition1IsTrue_0.val = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
}if ( gdjs.PangalayCode.condition1IsTrue_0.val ) {
{
{gdjs.PangalayCode.conditionTrue_1 = gdjs.PangalayCode.condition2IsTrue_0;
gdjs.PangalayCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(10604812);
}
}}
}
if (gdjs.PangalayCode.condition2IsTrue_0.val) {
{gdjs.evtTools.window.openURL("https://www.youtube.com/watch?v=SwBHNtKPHxQ&list=PLJPyalARUKjvTBbTg_Nma1vLbXm2TtR5L&index=18", runtimeScene);
}}

}


};

gdjs.PangalayCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.PangalayCode.GDmainmapbObjects1.length = 0;
gdjs.PangalayCode.GDmainmapbObjects2.length = 0;
gdjs.PangalayCode.GDNewObjectObjects1.length = 0;
gdjs.PangalayCode.GDNewObjectObjects2.length = 0;
gdjs.PangalayCode.GDNewObject2Objects1.length = 0;
gdjs.PangalayCode.GDNewObject2Objects2.length = 0;
gdjs.PangalayCode.GDbasicroutinObjects1.length = 0;
gdjs.PangalayCode.GDbasicroutinObjects2.length = 0;
gdjs.PangalayCode.GDperformanceObjects1.length = 0;
gdjs.PangalayCode.GDperformanceObjects2.length = 0;
gdjs.PangalayCode.GDbasicposObjects1.length = 0;
gdjs.PangalayCode.GDbasicposObjects2.length = 0;
gdjs.PangalayCode.GDNewObject4Objects1.length = 0;
gdjs.PangalayCode.GDNewObject4Objects2.length = 0;
gdjs.PangalayCode.GDpangalay3Objects1.length = 0;
gdjs.PangalayCode.GDpangalay3Objects2.length = 0;
gdjs.PangalayCode.GDpangalay2Objects1.length = 0;
gdjs.PangalayCode.GDpangalay2Objects2.length = 0;
gdjs.PangalayCode.GDpangalayObjects1.length = 0;
gdjs.PangalayCode.GDpangalayObjects2.length = 0;
gdjs.PangalayCode.GDPERFObjects1.length = 0;
gdjs.PangalayCode.GDPERFObjects2.length = 0;
gdjs.PangalayCode.GDSHORTROUTINEObjects1.length = 0;
gdjs.PangalayCode.GDSHORTROUTINEObjects2.length = 0;
gdjs.PangalayCode.GDbinfoObjects1.length = 0;
gdjs.PangalayCode.GDbinfoObjects2.length = 0;
gdjs.PangalayCode.GDbackbObjects1.length = 0;
gdjs.PangalayCode.GDbackbObjects2.length = 0;

gdjs.PangalayCode.eventsList0(runtimeScene);
return;

}

gdjs['PangalayCode'] = gdjs.PangalayCode;
