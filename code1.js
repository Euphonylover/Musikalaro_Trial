gdjs.CordilleraCode = {};
gdjs.CordilleraCode.GDmainmapbObjects1= [];
gdjs.CordilleraCode.GDmainmapbObjects2= [];
gdjs.CordilleraCode.GDCorbgObjects1= [];
gdjs.CordilleraCode.GDCorbgObjects2= [];
gdjs.CordilleraCode.GDWelcomeObjects1= [];
gdjs.CordilleraCode.GDWelcomeObjects2= [];
gdjs.CordilleraCode.GDInfomusic2Objects1= [];
gdjs.CordilleraCode.GDInfomusic2Objects2= [];
gdjs.CordilleraCode.GDNewObject2Objects1= [];
gdjs.CordilleraCode.GDNewObject2Objects2= [];
gdjs.CordilleraCode.GDNewObjectObjects1= [];
gdjs.CordilleraCode.GDNewObjectObjects2= [];
gdjs.CordilleraCode.GDwelcomeObjects1= [];
gdjs.CordilleraCode.GDwelcomeObjects2= [];
gdjs.CordilleraCode.GDNewObject3Objects1= [];
gdjs.CordilleraCode.GDNewObject3Objects2= [];
gdjs.CordilleraCode.GDbackbvObjects1= [];
gdjs.CordilleraCode.GDbackbvObjects2= [];

gdjs.CordilleraCode.conditionTrue_0 = {val:false};
gdjs.CordilleraCode.condition0IsTrue_0 = {val:false};
gdjs.CordilleraCode.condition1IsTrue_0 = {val:false};
gdjs.CordilleraCode.condition2IsTrue_0 = {val:false};
gdjs.CordilleraCode.condition3IsTrue_0 = {val:false};
gdjs.CordilleraCode.conditionTrue_1 = {val:false};
gdjs.CordilleraCode.condition0IsTrue_1 = {val:false};
gdjs.CordilleraCode.condition1IsTrue_1 = {val:false};
gdjs.CordilleraCode.condition2IsTrue_1 = {val:false};
gdjs.CordilleraCode.condition3IsTrue_1 = {val:false};


gdjs.CordilleraCode.mapOfGDgdjs_46CordilleraCode_46GDmainmapbObjects1Objects = Hashtable.newFrom({"mainmapb": gdjs.CordilleraCode.GDmainmapbObjects1});gdjs.CordilleraCode.mapOfGDgdjs_46CordilleraCode_46GDmainmapbObjects1Objects = Hashtable.newFrom({"mainmapb": gdjs.CordilleraCode.GDmainmapbObjects1});gdjs.CordilleraCode.mapOfGDgdjs_46CordilleraCode_46GDmainmapbObjects1Objects = Hashtable.newFrom({"mainmapb": gdjs.CordilleraCode.GDmainmapbObjects1});gdjs.CordilleraCode.mapOfGDgdjs_46CordilleraCode_46GDbackbvObjects1Objects = Hashtable.newFrom({"backbv": gdjs.CordilleraCode.GDbackbvObjects1});gdjs.CordilleraCode.mapOfGDgdjs_46CordilleraCode_46GDNewObject2Objects1Objects = Hashtable.newFrom({"NewObject2": gdjs.CordilleraCode.GDNewObject2Objects1});gdjs.CordilleraCode.mapOfGDgdjs_46CordilleraCode_46GDNewObject2Objects1Objects = Hashtable.newFrom({"NewObject2": gdjs.CordilleraCode.GDNewObject2Objects1});gdjs.CordilleraCode.mapOfGDgdjs_46CordilleraCode_46GDNewObject2Objects1Objects = Hashtable.newFrom({"NewObject2": gdjs.CordilleraCode.GDNewObject2Objects1});gdjs.CordilleraCode.eventsList0 = function(runtimeScene) {

{


gdjs.CordilleraCode.condition0IsTrue_0.val = false;
{
gdjs.CordilleraCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
}if (gdjs.CordilleraCode.condition0IsTrue_0.val) {
{gdjs.evtTools.sound.playMusic(runtimeScene, "Bamboo.ogg", true, 15, 1);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("mainmapb"), gdjs.CordilleraCode.GDmainmapbObjects1);

gdjs.CordilleraCode.condition0IsTrue_0.val = false;
{
gdjs.CordilleraCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.CordilleraCode.mapOfGDgdjs_46CordilleraCode_46GDmainmapbObjects1Objects, runtimeScene, true, false);
}if (gdjs.CordilleraCode.condition0IsTrue_0.val) {
/* Reuse gdjs.CordilleraCode.GDmainmapbObjects1 */
{for(var i = 0, len = gdjs.CordilleraCode.GDmainmapbObjects1.length ;i < len;++i) {
    gdjs.CordilleraCode.GDmainmapbObjects1[i].setAnimation(1);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("mainmapb"), gdjs.CordilleraCode.GDmainmapbObjects1);

gdjs.CordilleraCode.condition0IsTrue_0.val = false;
gdjs.CordilleraCode.condition1IsTrue_0.val = false;
gdjs.CordilleraCode.condition2IsTrue_0.val = false;
{
gdjs.CordilleraCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.CordilleraCode.mapOfGDgdjs_46CordilleraCode_46GDmainmapbObjects1Objects, runtimeScene, true, false);
}if ( gdjs.CordilleraCode.condition0IsTrue_0.val ) {
{
gdjs.CordilleraCode.condition1IsTrue_0.val = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
}if ( gdjs.CordilleraCode.condition1IsTrue_0.val ) {
{
{gdjs.CordilleraCode.conditionTrue_1 = gdjs.CordilleraCode.condition2IsTrue_0;
gdjs.CordilleraCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(10698028);
}
}}
}
if (gdjs.CordilleraCode.condition2IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Main Map", false);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("mainmapb"), gdjs.CordilleraCode.GDmainmapbObjects1);

gdjs.CordilleraCode.condition0IsTrue_0.val = false;
{
gdjs.CordilleraCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.CordilleraCode.mapOfGDgdjs_46CordilleraCode_46GDmainmapbObjects1Objects, runtimeScene, true, true);
}if (gdjs.CordilleraCode.condition0IsTrue_0.val) {
/* Reuse gdjs.CordilleraCode.GDmainmapbObjects1 */
{for(var i = 0, len = gdjs.CordilleraCode.GDmainmapbObjects1.length ;i < len;++i) {
    gdjs.CordilleraCode.GDmainmapbObjects1[i].setAnimation(0);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("backbv"), gdjs.CordilleraCode.GDbackbvObjects1);

gdjs.CordilleraCode.condition0IsTrue_0.val = false;
gdjs.CordilleraCode.condition1IsTrue_0.val = false;
gdjs.CordilleraCode.condition2IsTrue_0.val = false;
{
gdjs.CordilleraCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.CordilleraCode.mapOfGDgdjs_46CordilleraCode_46GDbackbvObjects1Objects, runtimeScene, true, false);
}if ( gdjs.CordilleraCode.condition0IsTrue_0.val ) {
{
gdjs.CordilleraCode.condition1IsTrue_0.val = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
}if ( gdjs.CordilleraCode.condition1IsTrue_0.val ) {
{
{gdjs.CordilleraCode.conditionTrue_1 = gdjs.CordilleraCode.condition2IsTrue_0;
gdjs.CordilleraCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(10724860);
}
}}
}
if (gdjs.CordilleraCode.condition2IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Main Map", false);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("NewObject2"), gdjs.CordilleraCode.GDNewObject2Objects1);

gdjs.CordilleraCode.condition0IsTrue_0.val = false;
{
gdjs.CordilleraCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.CordilleraCode.mapOfGDgdjs_46CordilleraCode_46GDNewObject2Objects1Objects, runtimeScene, true, false);
}if (gdjs.CordilleraCode.condition0IsTrue_0.val) {
/* Reuse gdjs.CordilleraCode.GDNewObject2Objects1 */
{for(var i = 0, len = gdjs.CordilleraCode.GDNewObject2Objects1.length ;i < len;++i) {
    gdjs.CordilleraCode.GDNewObject2Objects1[i].pauseAnimation();
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("NewObject2"), gdjs.CordilleraCode.GDNewObject2Objects1);

gdjs.CordilleraCode.condition0IsTrue_0.val = false;
{
gdjs.CordilleraCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.CordilleraCode.mapOfGDgdjs_46CordilleraCode_46GDNewObject2Objects1Objects, runtimeScene, true, true);
}if (gdjs.CordilleraCode.condition0IsTrue_0.val) {
/* Reuse gdjs.CordilleraCode.GDNewObject2Objects1 */
{for(var i = 0, len = gdjs.CordilleraCode.GDNewObject2Objects1.length ;i < len;++i) {
    gdjs.CordilleraCode.GDNewObject2Objects1[i].playAnimation();
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("NewObject2"), gdjs.CordilleraCode.GDNewObject2Objects1);

gdjs.CordilleraCode.condition0IsTrue_0.val = false;
gdjs.CordilleraCode.condition1IsTrue_0.val = false;
gdjs.CordilleraCode.condition2IsTrue_0.val = false;
{
gdjs.CordilleraCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.CordilleraCode.mapOfGDgdjs_46CordilleraCode_46GDNewObject2Objects1Objects, runtimeScene, true, false);
}if ( gdjs.CordilleraCode.condition0IsTrue_0.val ) {
{
gdjs.CordilleraCode.condition1IsTrue_0.val = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
}if ( gdjs.CordilleraCode.condition1IsTrue_0.val ) {
{
{gdjs.CordilleraCode.conditionTrue_1 = gdjs.CordilleraCode.condition2IsTrue_0;
gdjs.CordilleraCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(10664916);
}
}}
}
if (gdjs.CordilleraCode.condition2IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Cor page 1", false);
}}

}


};

gdjs.CordilleraCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.CordilleraCode.GDmainmapbObjects1.length = 0;
gdjs.CordilleraCode.GDmainmapbObjects2.length = 0;
gdjs.CordilleraCode.GDCorbgObjects1.length = 0;
gdjs.CordilleraCode.GDCorbgObjects2.length = 0;
gdjs.CordilleraCode.GDWelcomeObjects1.length = 0;
gdjs.CordilleraCode.GDWelcomeObjects2.length = 0;
gdjs.CordilleraCode.GDInfomusic2Objects1.length = 0;
gdjs.CordilleraCode.GDInfomusic2Objects2.length = 0;
gdjs.CordilleraCode.GDNewObject2Objects1.length = 0;
gdjs.CordilleraCode.GDNewObject2Objects2.length = 0;
gdjs.CordilleraCode.GDNewObjectObjects1.length = 0;
gdjs.CordilleraCode.GDNewObjectObjects2.length = 0;
gdjs.CordilleraCode.GDwelcomeObjects1.length = 0;
gdjs.CordilleraCode.GDwelcomeObjects2.length = 0;
gdjs.CordilleraCode.GDNewObject3Objects1.length = 0;
gdjs.CordilleraCode.GDNewObject3Objects2.length = 0;
gdjs.CordilleraCode.GDbackbvObjects1.length = 0;
gdjs.CordilleraCode.GDbackbvObjects2.length = 0;

gdjs.CordilleraCode.eventsList0(runtimeScene);
return;

}

gdjs['CordilleraCode'] = gdjs.CordilleraCode;
