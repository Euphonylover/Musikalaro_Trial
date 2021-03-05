gdjs.VisayasCode = {};
gdjs.VisayasCode.GDmainmapbObjects1= [];
gdjs.VisayasCode.GDmainmapbObjects2= [];
gdjs.VisayasCode.GDbgvObjects1= [];
gdjs.VisayasCode.GDbgvObjects2= [];
gdjs.VisayasCode.GDBalitawObjects1= [];
gdjs.VisayasCode.GDBalitawObjects2= [];
gdjs.VisayasCode.GDRondallaObjects1= [];
gdjs.VisayasCode.GDRondallaObjects2= [];
gdjs.VisayasCode.GDbpastoresObjects1= [];
gdjs.VisayasCode.GDbpastoresObjects2= [];
gdjs.VisayasCode.GDBalitaw1Objects1= [];
gdjs.VisayasCode.GDBalitaw1Objects2= [];
gdjs.VisayasCode.GDRondalla1Objects1= [];
gdjs.VisayasCode.GDRondalla1Objects2= [];
gdjs.VisayasCode.GDPastores1Objects1= [];
gdjs.VisayasCode.GDPastores1Objects2= [];

gdjs.VisayasCode.conditionTrue_0 = {val:false};
gdjs.VisayasCode.condition0IsTrue_0 = {val:false};
gdjs.VisayasCode.condition1IsTrue_0 = {val:false};
gdjs.VisayasCode.condition2IsTrue_0 = {val:false};


gdjs.VisayasCode.mapOfGDgdjs_46VisayasCode_46GDmainmapbObjects1Objects = Hashtable.newFrom({"mainmapb": gdjs.VisayasCode.GDmainmapbObjects1});gdjs.VisayasCode.eventsList0 = function(runtimeScene) {

{


gdjs.VisayasCode.condition0IsTrue_0.val = false;
{
gdjs.VisayasCode.condition0IsTrue_0.val = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
}if (gdjs.VisayasCode.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Main Map", false);
}}

}


};gdjs.VisayasCode.mapOfGDgdjs_46VisayasCode_46GDmainmapbObjects1Objects = Hashtable.newFrom({"mainmapb": gdjs.VisayasCode.GDmainmapbObjects1});gdjs.VisayasCode.mapOfGDgdjs_46VisayasCode_46GDRondalla1Objects1Objects = Hashtable.newFrom({"Rondalla1": gdjs.VisayasCode.GDRondalla1Objects1});gdjs.VisayasCode.eventsList1 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("mainmapb"), gdjs.VisayasCode.GDmainmapbObjects1);

gdjs.VisayasCode.condition0IsTrue_0.val = false;
{
gdjs.VisayasCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.VisayasCode.mapOfGDgdjs_46VisayasCode_46GDmainmapbObjects1Objects, runtimeScene, true, false);
}if (gdjs.VisayasCode.condition0IsTrue_0.val) {
/* Reuse gdjs.VisayasCode.GDmainmapbObjects1 */
{for(var i = 0, len = gdjs.VisayasCode.GDmainmapbObjects1.length ;i < len;++i) {
    gdjs.VisayasCode.GDmainmapbObjects1[i].setAnimation(1);
}
}
{ //Subevents
gdjs.VisayasCode.eventsList0(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("mainmapb"), gdjs.VisayasCode.GDmainmapbObjects1);

gdjs.VisayasCode.condition0IsTrue_0.val = false;
{
gdjs.VisayasCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.VisayasCode.mapOfGDgdjs_46VisayasCode_46GDmainmapbObjects1Objects, runtimeScene, true, true);
}if (gdjs.VisayasCode.condition0IsTrue_0.val) {
/* Reuse gdjs.VisayasCode.GDmainmapbObjects1 */
{for(var i = 0, len = gdjs.VisayasCode.GDmainmapbObjects1.length ;i < len;++i) {
    gdjs.VisayasCode.GDmainmapbObjects1[i].setAnimation(0);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Rondalla1"), gdjs.VisayasCode.GDRondalla1Objects1);

gdjs.VisayasCode.condition0IsTrue_0.val = false;
gdjs.VisayasCode.condition1IsTrue_0.val = false;
{
gdjs.VisayasCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.VisayasCode.mapOfGDgdjs_46VisayasCode_46GDRondalla1Objects1Objects, runtimeScene, true, false);
}if ( gdjs.VisayasCode.condition0IsTrue_0.val ) {
{
gdjs.VisayasCode.condition1IsTrue_0.val = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
}}
if (gdjs.VisayasCode.condition1IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Rondalla", false);
}}

}


};

gdjs.VisayasCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.VisayasCode.GDmainmapbObjects1.length = 0;
gdjs.VisayasCode.GDmainmapbObjects2.length = 0;
gdjs.VisayasCode.GDbgvObjects1.length = 0;
gdjs.VisayasCode.GDbgvObjects2.length = 0;
gdjs.VisayasCode.GDBalitawObjects1.length = 0;
gdjs.VisayasCode.GDBalitawObjects2.length = 0;
gdjs.VisayasCode.GDRondallaObjects1.length = 0;
gdjs.VisayasCode.GDRondallaObjects2.length = 0;
gdjs.VisayasCode.GDbpastoresObjects1.length = 0;
gdjs.VisayasCode.GDbpastoresObjects2.length = 0;
gdjs.VisayasCode.GDBalitaw1Objects1.length = 0;
gdjs.VisayasCode.GDBalitaw1Objects2.length = 0;
gdjs.VisayasCode.GDRondalla1Objects1.length = 0;
gdjs.VisayasCode.GDRondalla1Objects2.length = 0;
gdjs.VisayasCode.GDPastores1Objects1.length = 0;
gdjs.VisayasCode.GDPastores1Objects2.length = 0;

gdjs.VisayasCode.eventsList1(runtimeScene);
return;

}

gdjs['VisayasCode'] = gdjs.VisayasCode;
