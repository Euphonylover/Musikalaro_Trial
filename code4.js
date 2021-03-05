gdjs.mindanaoCode = {};
gdjs.mindanaoCode.GDmainmapbObjects1= [];
gdjs.mindanaoCode.GDmainmapbObjects2= [];
gdjs.mindanaoCode.GDminbgObjects1= [];
gdjs.mindanaoCode.GDminbgObjects2= [];
gdjs.mindanaoCode.GDkulintangObjects1= [];
gdjs.mindanaoCode.GDkulintangObjects2= [];
gdjs.mindanaoCode.GDdabakanObjects1= [];
gdjs.mindanaoCode.GDdabakanObjects2= [];
gdjs.mindanaoCode.GDgandinganObjects1= [];
gdjs.mindanaoCode.GDgandinganObjects2= [];
gdjs.mindanaoCode.GDBabandirObjects1= [];
gdjs.mindanaoCode.GDBabandirObjects2= [];
gdjs.mindanaoCode.GDPangalayObjects1= [];
gdjs.mindanaoCode.GDPangalayObjects2= [];
gdjs.mindanaoCode.GDagungObjects1= [];
gdjs.mindanaoCode.GDagungObjects2= [];
gdjs.mindanaoCode.GDNewObjectObjects1= [];
gdjs.mindanaoCode.GDNewObjectObjects2= [];
gdjs.mindanaoCode.GDbackbObjects1= [];
gdjs.mindanaoCode.GDbackbObjects2= [];
gdjs.mindanaoCode.GDpbuttonObjects1= [];
gdjs.mindanaoCode.GDpbuttonObjects2= [];
gdjs.mindanaoCode.GDkbuttonObjects1= [];
gdjs.mindanaoCode.GDkbuttonObjects2= [];
gdjs.mindanaoCode.GDpangalayObjects1= [];
gdjs.mindanaoCode.GDpangalayObjects2= [];
gdjs.mindanaoCode.GDkuliObjects1= [];
gdjs.mindanaoCode.GDkuliObjects2= [];

gdjs.mindanaoCode.conditionTrue_0 = {val:false};
gdjs.mindanaoCode.condition0IsTrue_0 = {val:false};
gdjs.mindanaoCode.condition1IsTrue_0 = {val:false};
gdjs.mindanaoCode.condition2IsTrue_0 = {val:false};
gdjs.mindanaoCode.condition3IsTrue_0 = {val:false};
gdjs.mindanaoCode.conditionTrue_1 = {val:false};
gdjs.mindanaoCode.condition0IsTrue_1 = {val:false};
gdjs.mindanaoCode.condition1IsTrue_1 = {val:false};
gdjs.mindanaoCode.condition2IsTrue_1 = {val:false};
gdjs.mindanaoCode.condition3IsTrue_1 = {val:false};


gdjs.mindanaoCode.mapOfGDgdjs_46mindanaoCode_46GDpbuttonObjects1Objects = Hashtable.newFrom({"pbutton": gdjs.mindanaoCode.GDpbuttonObjects1});gdjs.mindanaoCode.mapOfGDgdjs_46mindanaoCode_46GDkbuttonObjects1Objects = Hashtable.newFrom({"kbutton": gdjs.mindanaoCode.GDkbuttonObjects1});gdjs.mindanaoCode.mapOfGDgdjs_46mindanaoCode_46GDmainmapbObjects1Objects = Hashtable.newFrom({"mainmapb": gdjs.mindanaoCode.GDmainmapbObjects1});gdjs.mindanaoCode.mapOfGDgdjs_46mindanaoCode_46GDmainmapbObjects1Objects = Hashtable.newFrom({"mainmapb": gdjs.mindanaoCode.GDmainmapbObjects1});gdjs.mindanaoCode.mapOfGDgdjs_46mindanaoCode_46GDmainmapbObjects1Objects = Hashtable.newFrom({"mainmapb": gdjs.mindanaoCode.GDmainmapbObjects1});gdjs.mindanaoCode.mapOfGDgdjs_46mindanaoCode_46GDbackbObjects1Objects = Hashtable.newFrom({"backb": gdjs.mindanaoCode.GDbackbObjects1});gdjs.mindanaoCode.eventsList0 = function(runtimeScene) {

{


gdjs.mindanaoCode.condition0IsTrue_0.val = false;
{
gdjs.mindanaoCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
}if (gdjs.mindanaoCode.condition0IsTrue_0.val) {
{gdjs.evtTools.sound.playMusic(runtimeScene, "Tungkil-[AudioTrimmer.com].ogg", true, 20, 1);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("pbutton"), gdjs.mindanaoCode.GDpbuttonObjects1);

gdjs.mindanaoCode.condition0IsTrue_0.val = false;
gdjs.mindanaoCode.condition1IsTrue_0.val = false;
gdjs.mindanaoCode.condition2IsTrue_0.val = false;
{
gdjs.mindanaoCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.mindanaoCode.mapOfGDgdjs_46mindanaoCode_46GDpbuttonObjects1Objects, runtimeScene, true, false);
}if ( gdjs.mindanaoCode.condition0IsTrue_0.val ) {
{
gdjs.mindanaoCode.condition1IsTrue_0.val = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
}if ( gdjs.mindanaoCode.condition1IsTrue_0.val ) {
{
{gdjs.mindanaoCode.conditionTrue_1 = gdjs.mindanaoCode.condition2IsTrue_0;
gdjs.mindanaoCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(10564996);
}
}}
}
if (gdjs.mindanaoCode.condition2IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Pangalay", false);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("kbutton"), gdjs.mindanaoCode.GDkbuttonObjects1);

gdjs.mindanaoCode.condition0IsTrue_0.val = false;
gdjs.mindanaoCode.condition1IsTrue_0.val = false;
gdjs.mindanaoCode.condition2IsTrue_0.val = false;
{
gdjs.mindanaoCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.mindanaoCode.mapOfGDgdjs_46mindanaoCode_46GDkbuttonObjects1Objects, runtimeScene, true, false);
}if ( gdjs.mindanaoCode.condition0IsTrue_0.val ) {
{
gdjs.mindanaoCode.condition1IsTrue_0.val = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
}if ( gdjs.mindanaoCode.condition1IsTrue_0.val ) {
{
{gdjs.mindanaoCode.conditionTrue_1 = gdjs.mindanaoCode.condition2IsTrue_0;
gdjs.mindanaoCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(10698788);
}
}}
}
if (gdjs.mindanaoCode.condition2IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Kulintang 1", false);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("mainmapb"), gdjs.mindanaoCode.GDmainmapbObjects1);

gdjs.mindanaoCode.condition0IsTrue_0.val = false;
{
gdjs.mindanaoCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.mindanaoCode.mapOfGDgdjs_46mindanaoCode_46GDmainmapbObjects1Objects, runtimeScene, true, false);
}if (gdjs.mindanaoCode.condition0IsTrue_0.val) {
/* Reuse gdjs.mindanaoCode.GDmainmapbObjects1 */
{for(var i = 0, len = gdjs.mindanaoCode.GDmainmapbObjects1.length ;i < len;++i) {
    gdjs.mindanaoCode.GDmainmapbObjects1[i].setAnimation(1);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("mainmapb"), gdjs.mindanaoCode.GDmainmapbObjects1);

gdjs.mindanaoCode.condition0IsTrue_0.val = false;
gdjs.mindanaoCode.condition1IsTrue_0.val = false;
gdjs.mindanaoCode.condition2IsTrue_0.val = false;
{
gdjs.mindanaoCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.mindanaoCode.mapOfGDgdjs_46mindanaoCode_46GDmainmapbObjects1Objects, runtimeScene, true, false);
}if ( gdjs.mindanaoCode.condition0IsTrue_0.val ) {
{
gdjs.mindanaoCode.condition1IsTrue_0.val = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
}if ( gdjs.mindanaoCode.condition1IsTrue_0.val ) {
{
{gdjs.mindanaoCode.conditionTrue_1 = gdjs.mindanaoCode.condition2IsTrue_0;
gdjs.mindanaoCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(10730868);
}
}}
}
if (gdjs.mindanaoCode.condition2IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Main Map", false);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("mainmapb"), gdjs.mindanaoCode.GDmainmapbObjects1);

gdjs.mindanaoCode.condition0IsTrue_0.val = false;
{
gdjs.mindanaoCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.mindanaoCode.mapOfGDgdjs_46mindanaoCode_46GDmainmapbObjects1Objects, runtimeScene, true, true);
}if (gdjs.mindanaoCode.condition0IsTrue_0.val) {
/* Reuse gdjs.mindanaoCode.GDmainmapbObjects1 */
{for(var i = 0, len = gdjs.mindanaoCode.GDmainmapbObjects1.length ;i < len;++i) {
    gdjs.mindanaoCode.GDmainmapbObjects1[i].setAnimation(0);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("backb"), gdjs.mindanaoCode.GDbackbObjects1);

gdjs.mindanaoCode.condition0IsTrue_0.val = false;
gdjs.mindanaoCode.condition1IsTrue_0.val = false;
gdjs.mindanaoCode.condition2IsTrue_0.val = false;
{
gdjs.mindanaoCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.mindanaoCode.mapOfGDgdjs_46mindanaoCode_46GDbackbObjects1Objects, runtimeScene, true, false);
}if ( gdjs.mindanaoCode.condition0IsTrue_0.val ) {
{
gdjs.mindanaoCode.condition1IsTrue_0.val = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
}if ( gdjs.mindanaoCode.condition1IsTrue_0.val ) {
{
{gdjs.mindanaoCode.conditionTrue_1 = gdjs.mindanaoCode.condition2IsTrue_0;
gdjs.mindanaoCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(10686588);
}
}}
}
if (gdjs.mindanaoCode.condition2IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Main Map", false);
}}

}


};

gdjs.mindanaoCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.mindanaoCode.GDmainmapbObjects1.length = 0;
gdjs.mindanaoCode.GDmainmapbObjects2.length = 0;
gdjs.mindanaoCode.GDminbgObjects1.length = 0;
gdjs.mindanaoCode.GDminbgObjects2.length = 0;
gdjs.mindanaoCode.GDkulintangObjects1.length = 0;
gdjs.mindanaoCode.GDkulintangObjects2.length = 0;
gdjs.mindanaoCode.GDdabakanObjects1.length = 0;
gdjs.mindanaoCode.GDdabakanObjects2.length = 0;
gdjs.mindanaoCode.GDgandinganObjects1.length = 0;
gdjs.mindanaoCode.GDgandinganObjects2.length = 0;
gdjs.mindanaoCode.GDBabandirObjects1.length = 0;
gdjs.mindanaoCode.GDBabandirObjects2.length = 0;
gdjs.mindanaoCode.GDPangalayObjects1.length = 0;
gdjs.mindanaoCode.GDPangalayObjects2.length = 0;
gdjs.mindanaoCode.GDagungObjects1.length = 0;
gdjs.mindanaoCode.GDagungObjects2.length = 0;
gdjs.mindanaoCode.GDNewObjectObjects1.length = 0;
gdjs.mindanaoCode.GDNewObjectObjects2.length = 0;
gdjs.mindanaoCode.GDbackbObjects1.length = 0;
gdjs.mindanaoCode.GDbackbObjects2.length = 0;
gdjs.mindanaoCode.GDpbuttonObjects1.length = 0;
gdjs.mindanaoCode.GDpbuttonObjects2.length = 0;
gdjs.mindanaoCode.GDkbuttonObjects1.length = 0;
gdjs.mindanaoCode.GDkbuttonObjects2.length = 0;
gdjs.mindanaoCode.GDpangalayObjects1.length = 0;
gdjs.mindanaoCode.GDpangalayObjects2.length = 0;
gdjs.mindanaoCode.GDkuliObjects1.length = 0;
gdjs.mindanaoCode.GDkuliObjects2.length = 0;

gdjs.mindanaoCode.eventsList0(runtimeScene);
return;

}

gdjs['mindanaoCode'] = gdjs.mindanaoCode;
