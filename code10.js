gdjs.LowPage2Code = {};
gdjs.LowPage2Code.GDmainmapbObjects1= [];
gdjs.LowPage2Code.GDmainmapbObjects2= [];
gdjs.LowPage2Code.GDp2Objects1= [];
gdjs.LowPage2Code.GDp2Objects2= [];
gdjs.LowPage2Code.GDp1Objects1= [];
gdjs.LowPage2Code.GDp1Objects2= [];
gdjs.LowPage2Code.GDfluteObjects1= [];
gdjs.LowPage2Code.GDfluteObjects2= [];
gdjs.LowPage2Code.GDsaxObjects1= [];
gdjs.LowPage2Code.GDsaxObjects2= [];
gdjs.LowPage2Code.GDtromboneObjects1= [];
gdjs.LowPage2Code.GDtromboneObjects2= [];
gdjs.LowPage2Code.GDtrumpetObjects1= [];
gdjs.LowPage2Code.GDtrumpetObjects2= [];
gdjs.LowPage2Code.GDnextpageObjects1= [];
gdjs.LowPage2Code.GDnextpageObjects2= [];
gdjs.LowPage2Code.GDbuttromObjects1= [];
gdjs.LowPage2Code.GDbuttromObjects2= [];
gdjs.LowPage2Code.GDbuttrumpetObjects1= [];
gdjs.LowPage2Code.GDbuttrumpetObjects2= [];
gdjs.LowPage2Code.GDbutsaxObjects1= [];
gdjs.LowPage2Code.GDbutsaxObjects2= [];
gdjs.LowPage2Code.GDbackbObjects1= [];
gdjs.LowPage2Code.GDbackbObjects2= [];
gdjs.LowPage2Code.GDbrassObjects1= [];
gdjs.LowPage2Code.GDbrassObjects2= [];
gdjs.LowPage2Code.GDwoodwindObjects1= [];
gdjs.LowPage2Code.GDwoodwindObjects2= [];
gdjs.LowPage2Code.GDTrombone2Objects1= [];
gdjs.LowPage2Code.GDTrombone2Objects2= [];
gdjs.LowPage2Code.GDTromboneObjects1= [];
gdjs.LowPage2Code.GDTromboneObjects2= [];
gdjs.LowPage2Code.GDTrumpet2Objects1= [];
gdjs.LowPage2Code.GDTrumpet2Objects2= [];
gdjs.LowPage2Code.GDTrumpetObjects1= [];
gdjs.LowPage2Code.GDTrumpetObjects2= [];
gdjs.LowPage2Code.GDSaxophone2Objects1= [];
gdjs.LowPage2Code.GDSaxophone2Objects2= [];
gdjs.LowPage2Code.GDSaxophoneObjects1= [];
gdjs.LowPage2Code.GDSaxophoneObjects2= [];
gdjs.LowPage2Code.GDFlute2Objects1= [];
gdjs.LowPage2Code.GDFlute2Objects2= [];
gdjs.LowPage2Code.GDFluteObjects1= [];
gdjs.LowPage2Code.GDFluteObjects2= [];
gdjs.LowPage2Code.GDWoodwindObjects1= [];
gdjs.LowPage2Code.GDWoodwindObjects2= [];
gdjs.LowPage2Code.GDNextObjects1= [];
gdjs.LowPage2Code.GDNextObjects2= [];
gdjs.LowPage2Code.GDBrassObjects1= [];
gdjs.LowPage2Code.GDBrassObjects2= [];

gdjs.LowPage2Code.conditionTrue_0 = {val:false};
gdjs.LowPage2Code.condition0IsTrue_0 = {val:false};
gdjs.LowPage2Code.condition1IsTrue_0 = {val:false};
gdjs.LowPage2Code.condition2IsTrue_0 = {val:false};
gdjs.LowPage2Code.condition3IsTrue_0 = {val:false};
gdjs.LowPage2Code.conditionTrue_1 = {val:false};
gdjs.LowPage2Code.condition0IsTrue_1 = {val:false};
gdjs.LowPage2Code.condition1IsTrue_1 = {val:false};
gdjs.LowPage2Code.condition2IsTrue_1 = {val:false};
gdjs.LowPage2Code.condition3IsTrue_1 = {val:false};


gdjs.LowPage2Code.mapOfGDgdjs_46LowPage2Code_46GDmainmapbObjects1Objects = Hashtable.newFrom({"mainmapb": gdjs.LowPage2Code.GDmainmapbObjects1});gdjs.LowPage2Code.mapOfGDgdjs_46LowPage2Code_46GDmainmapbObjects1Objects = Hashtable.newFrom({"mainmapb": gdjs.LowPage2Code.GDmainmapbObjects1});gdjs.LowPage2Code.mapOfGDgdjs_46LowPage2Code_46GDmainmapbObjects1Objects = Hashtable.newFrom({"mainmapb": gdjs.LowPage2Code.GDmainmapbObjects1});gdjs.LowPage2Code.mapOfGDgdjs_46LowPage2Code_46GDbackbObjects1Objects = Hashtable.newFrom({"backb": gdjs.LowPage2Code.GDbackbObjects1});gdjs.LowPage2Code.mapOfGDgdjs_46LowPage2Code_46GDNextObjects1Objects = Hashtable.newFrom({"Next": gdjs.LowPage2Code.GDNextObjects1});gdjs.LowPage2Code.mapOfGDgdjs_46LowPage2Code_46GDFluteObjects1Objects = Hashtable.newFrom({"Flute": gdjs.LowPage2Code.GDFluteObjects1});gdjs.LowPage2Code.mapOfGDgdjs_46LowPage2Code_46GDSaxophoneObjects1Objects = Hashtable.newFrom({"Saxophone": gdjs.LowPage2Code.GDSaxophoneObjects1});gdjs.LowPage2Code.mapOfGDgdjs_46LowPage2Code_46GDTrumpetObjects1Objects = Hashtable.newFrom({"Trumpet": gdjs.LowPage2Code.GDTrumpetObjects1});gdjs.LowPage2Code.mapOfGDgdjs_46LowPage2Code_46GDTromboneObjects1Objects = Hashtable.newFrom({"Trombone": gdjs.LowPage2Code.GDTromboneObjects1});gdjs.LowPage2Code.eventsList0 = function(runtimeScene) {

{


gdjs.LowPage2Code.condition0IsTrue_0.val = false;
{
gdjs.LowPage2Code.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
}if (gdjs.LowPage2Code.condition0IsTrue_0.val) {
{gdjs.evtTools.sound.playMusic(runtimeScene, "MARCHING-BAND-PARADE_Trombone.ogg", true, 3, 1);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("mainmapb"), gdjs.LowPage2Code.GDmainmapbObjects1);

gdjs.LowPage2Code.condition0IsTrue_0.val = false;
{
gdjs.LowPage2Code.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.LowPage2Code.mapOfGDgdjs_46LowPage2Code_46GDmainmapbObjects1Objects, runtimeScene, true, false);
}if (gdjs.LowPage2Code.condition0IsTrue_0.val) {
/* Reuse gdjs.LowPage2Code.GDmainmapbObjects1 */
{for(var i = 0, len = gdjs.LowPage2Code.GDmainmapbObjects1.length ;i < len;++i) {
    gdjs.LowPage2Code.GDmainmapbObjects1[i].setAnimation(1);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("mainmapb"), gdjs.LowPage2Code.GDmainmapbObjects1);

gdjs.LowPage2Code.condition0IsTrue_0.val = false;
gdjs.LowPage2Code.condition1IsTrue_0.val = false;
gdjs.LowPage2Code.condition2IsTrue_0.val = false;
{
gdjs.LowPage2Code.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.LowPage2Code.mapOfGDgdjs_46LowPage2Code_46GDmainmapbObjects1Objects, runtimeScene, true, false);
}if ( gdjs.LowPage2Code.condition0IsTrue_0.val ) {
{
gdjs.LowPage2Code.condition1IsTrue_0.val = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
}if ( gdjs.LowPage2Code.condition1IsTrue_0.val ) {
{
{gdjs.LowPage2Code.conditionTrue_1 = gdjs.LowPage2Code.condition2IsTrue_0;
gdjs.LowPage2Code.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(8446740);
}
}}
}
if (gdjs.LowPage2Code.condition2IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Main Map", false);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("mainmapb"), gdjs.LowPage2Code.GDmainmapbObjects1);

gdjs.LowPage2Code.condition0IsTrue_0.val = false;
{
gdjs.LowPage2Code.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.LowPage2Code.mapOfGDgdjs_46LowPage2Code_46GDmainmapbObjects1Objects, runtimeScene, true, true);
}if (gdjs.LowPage2Code.condition0IsTrue_0.val) {
/* Reuse gdjs.LowPage2Code.GDmainmapbObjects1 */
{for(var i = 0, len = gdjs.LowPage2Code.GDmainmapbObjects1.length ;i < len;++i) {
    gdjs.LowPage2Code.GDmainmapbObjects1[i].setAnimation(0);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("backb"), gdjs.LowPage2Code.GDbackbObjects1);

gdjs.LowPage2Code.condition0IsTrue_0.val = false;
gdjs.LowPage2Code.condition1IsTrue_0.val = false;
gdjs.LowPage2Code.condition2IsTrue_0.val = false;
{
gdjs.LowPage2Code.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.LowPage2Code.mapOfGDgdjs_46LowPage2Code_46GDbackbObjects1Objects, runtimeScene, true, false);
}if ( gdjs.LowPage2Code.condition0IsTrue_0.val ) {
{
gdjs.LowPage2Code.condition1IsTrue_0.val = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
}if ( gdjs.LowPage2Code.condition1IsTrue_0.val ) {
{
{gdjs.LowPage2Code.conditionTrue_1 = gdjs.LowPage2Code.condition2IsTrue_0;
gdjs.LowPage2Code.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(8446884);
}
}}
}
if (gdjs.LowPage2Code.condition2IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "LowPage1", false);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Next"), gdjs.LowPage2Code.GDNextObjects1);

gdjs.LowPage2Code.condition0IsTrue_0.val = false;
gdjs.LowPage2Code.condition1IsTrue_0.val = false;
gdjs.LowPage2Code.condition2IsTrue_0.val = false;
{
gdjs.LowPage2Code.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.LowPage2Code.mapOfGDgdjs_46LowPage2Code_46GDNextObjects1Objects, runtimeScene, true, false);
}if ( gdjs.LowPage2Code.condition0IsTrue_0.val ) {
{
gdjs.LowPage2Code.condition1IsTrue_0.val = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
}if ( gdjs.LowPage2Code.condition1IsTrue_0.val ) {
{
{gdjs.LowPage2Code.conditionTrue_1 = gdjs.LowPage2Code.condition2IsTrue_0;
gdjs.LowPage2Code.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(8448124);
}
}}
}
if (gdjs.LowPage2Code.condition2IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "LowPage3", false);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Flute"), gdjs.LowPage2Code.GDFluteObjects1);

gdjs.LowPage2Code.condition0IsTrue_0.val = false;
gdjs.LowPage2Code.condition1IsTrue_0.val = false;
gdjs.LowPage2Code.condition2IsTrue_0.val = false;
{
gdjs.LowPage2Code.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.LowPage2Code.mapOfGDgdjs_46LowPage2Code_46GDFluteObjects1Objects, runtimeScene, true, false);
}if ( gdjs.LowPage2Code.condition0IsTrue_0.val ) {
{
gdjs.LowPage2Code.condition1IsTrue_0.val = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
}if ( gdjs.LowPage2Code.condition1IsTrue_0.val ) {
{
{gdjs.LowPage2Code.conditionTrue_1 = gdjs.LowPage2Code.condition2IsTrue_0;
gdjs.LowPage2Code.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(10784220);
}
}}
}
if (gdjs.LowPage2Code.condition2IsTrue_0.val) {
{gdjs.evtTools.sound.playMusic(runtimeScene, "Dahil Sa’yo Flute-[AudioTrimmer.com].ogg", false, 100, 1);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Saxophone"), gdjs.LowPage2Code.GDSaxophoneObjects1);

gdjs.LowPage2Code.condition0IsTrue_0.val = false;
gdjs.LowPage2Code.condition1IsTrue_0.val = false;
gdjs.LowPage2Code.condition2IsTrue_0.val = false;
{
gdjs.LowPage2Code.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.LowPage2Code.mapOfGDgdjs_46LowPage2Code_46GDSaxophoneObjects1Objects, runtimeScene, true, false);
}if ( gdjs.LowPage2Code.condition0IsTrue_0.val ) {
{
gdjs.LowPage2Code.condition1IsTrue_0.val = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
}if ( gdjs.LowPage2Code.condition1IsTrue_0.val ) {
{
{gdjs.LowPage2Code.conditionTrue_1 = gdjs.LowPage2Code.condition2IsTrue_0;
gdjs.LowPage2Code.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(10785372);
}
}}
}
if (gdjs.LowPage2Code.condition2IsTrue_0.val) {
{gdjs.evtTools.sound.playMusic(runtimeScene, "Dahil Sa’yo Tenor Sax.ogg", false, 100, 1);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Trumpet"), gdjs.LowPage2Code.GDTrumpetObjects1);

gdjs.LowPage2Code.condition0IsTrue_0.val = false;
gdjs.LowPage2Code.condition1IsTrue_0.val = false;
gdjs.LowPage2Code.condition2IsTrue_0.val = false;
{
gdjs.LowPage2Code.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.LowPage2Code.mapOfGDgdjs_46LowPage2Code_46GDTrumpetObjects1Objects, runtimeScene, true, false);
}if ( gdjs.LowPage2Code.condition0IsTrue_0.val ) {
{
gdjs.LowPage2Code.condition1IsTrue_0.val = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
}if ( gdjs.LowPage2Code.condition1IsTrue_0.val ) {
{
{gdjs.LowPage2Code.conditionTrue_1 = gdjs.LowPage2Code.condition2IsTrue_0;
gdjs.LowPage2Code.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(10786492);
}
}}
}
if (gdjs.LowPage2Code.condition2IsTrue_0.val) {
{gdjs.evtTools.sound.playMusic(runtimeScene, "Dahil Sa’yo Trumpet (1).ogg", false, 100, 1);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Trombone"), gdjs.LowPage2Code.GDTromboneObjects1);

gdjs.LowPage2Code.condition0IsTrue_0.val = false;
gdjs.LowPage2Code.condition1IsTrue_0.val = false;
gdjs.LowPage2Code.condition2IsTrue_0.val = false;
{
gdjs.LowPage2Code.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.LowPage2Code.mapOfGDgdjs_46LowPage2Code_46GDTromboneObjects1Objects, runtimeScene, true, false);
}if ( gdjs.LowPage2Code.condition0IsTrue_0.val ) {
{
gdjs.LowPage2Code.condition1IsTrue_0.val = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
}if ( gdjs.LowPage2Code.condition1IsTrue_0.val ) {
{
{gdjs.LowPage2Code.conditionTrue_1 = gdjs.LowPage2Code.condition2IsTrue_0;
gdjs.LowPage2Code.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(10787356);
}
}}
}
if (gdjs.LowPage2Code.condition2IsTrue_0.val) {
{gdjs.evtTools.sound.playMusic(runtimeScene, "Dahil Sa’yo trombone (1).ogg", false, 100, 1);
}}

}


};

gdjs.LowPage2Code.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.LowPage2Code.GDmainmapbObjects1.length = 0;
gdjs.LowPage2Code.GDmainmapbObjects2.length = 0;
gdjs.LowPage2Code.GDp2Objects1.length = 0;
gdjs.LowPage2Code.GDp2Objects2.length = 0;
gdjs.LowPage2Code.GDp1Objects1.length = 0;
gdjs.LowPage2Code.GDp1Objects2.length = 0;
gdjs.LowPage2Code.GDfluteObjects1.length = 0;
gdjs.LowPage2Code.GDfluteObjects2.length = 0;
gdjs.LowPage2Code.GDsaxObjects1.length = 0;
gdjs.LowPage2Code.GDsaxObjects2.length = 0;
gdjs.LowPage2Code.GDtromboneObjects1.length = 0;
gdjs.LowPage2Code.GDtromboneObjects2.length = 0;
gdjs.LowPage2Code.GDtrumpetObjects1.length = 0;
gdjs.LowPage2Code.GDtrumpetObjects2.length = 0;
gdjs.LowPage2Code.GDnextpageObjects1.length = 0;
gdjs.LowPage2Code.GDnextpageObjects2.length = 0;
gdjs.LowPage2Code.GDbuttromObjects1.length = 0;
gdjs.LowPage2Code.GDbuttromObjects2.length = 0;
gdjs.LowPage2Code.GDbuttrumpetObjects1.length = 0;
gdjs.LowPage2Code.GDbuttrumpetObjects2.length = 0;
gdjs.LowPage2Code.GDbutsaxObjects1.length = 0;
gdjs.LowPage2Code.GDbutsaxObjects2.length = 0;
gdjs.LowPage2Code.GDbackbObjects1.length = 0;
gdjs.LowPage2Code.GDbackbObjects2.length = 0;
gdjs.LowPage2Code.GDbrassObjects1.length = 0;
gdjs.LowPage2Code.GDbrassObjects2.length = 0;
gdjs.LowPage2Code.GDwoodwindObjects1.length = 0;
gdjs.LowPage2Code.GDwoodwindObjects2.length = 0;
gdjs.LowPage2Code.GDTrombone2Objects1.length = 0;
gdjs.LowPage2Code.GDTrombone2Objects2.length = 0;
gdjs.LowPage2Code.GDTromboneObjects1.length = 0;
gdjs.LowPage2Code.GDTromboneObjects2.length = 0;
gdjs.LowPage2Code.GDTrumpet2Objects1.length = 0;
gdjs.LowPage2Code.GDTrumpet2Objects2.length = 0;
gdjs.LowPage2Code.GDTrumpetObjects1.length = 0;
gdjs.LowPage2Code.GDTrumpetObjects2.length = 0;
gdjs.LowPage2Code.GDSaxophone2Objects1.length = 0;
gdjs.LowPage2Code.GDSaxophone2Objects2.length = 0;
gdjs.LowPage2Code.GDSaxophoneObjects1.length = 0;
gdjs.LowPage2Code.GDSaxophoneObjects2.length = 0;
gdjs.LowPage2Code.GDFlute2Objects1.length = 0;
gdjs.LowPage2Code.GDFlute2Objects2.length = 0;
gdjs.LowPage2Code.GDFluteObjects1.length = 0;
gdjs.LowPage2Code.GDFluteObjects2.length = 0;
gdjs.LowPage2Code.GDWoodwindObjects1.length = 0;
gdjs.LowPage2Code.GDWoodwindObjects2.length = 0;
gdjs.LowPage2Code.GDNextObjects1.length = 0;
gdjs.LowPage2Code.GDNextObjects2.length = 0;
gdjs.LowPage2Code.GDBrassObjects1.length = 0;
gdjs.LowPage2Code.GDBrassObjects2.length = 0;

gdjs.LowPage2Code.eventsList0(runtimeScene);
return;

}

gdjs['LowPage2Code'] = gdjs.LowPage2Code;
