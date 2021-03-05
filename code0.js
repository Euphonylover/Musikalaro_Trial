gdjs.Main_32MapCode = {};
gdjs.Main_32MapCode.GDmainmapbObjects1= [];
gdjs.Main_32MapCode.GDmainmapbObjects2= [];
gdjs.Main_32MapCode.GDMapObjects1= [];
gdjs.Main_32MapCode.GDMapObjects2= [];
gdjs.Main_32MapCode.GDStarlowlandObjects1= [];
gdjs.Main_32MapCode.GDStarlowlandObjects2= [];
gdjs.Main_32MapCode.GDStarluzonObjects1= [];
gdjs.Main_32MapCode.GDStarluzonObjects2= [];
gdjs.Main_32MapCode.GDstarvisayasObjects1= [];
gdjs.Main_32MapCode.GDstarvisayasObjects2= [];
gdjs.Main_32MapCode.GDstarmindanaoObjects1= [];
gdjs.Main_32MapCode.GDstarmindanaoObjects2= [];
gdjs.Main_32MapCode.GDboat2Objects1= [];
gdjs.Main_32MapCode.GDboat2Objects2= [];
gdjs.Main_32MapCode.GDboatObjects1= [];
gdjs.Main_32MapCode.GDboatObjects2= [];
gdjs.Main_32MapCode.GDcloud9Objects1= [];
gdjs.Main_32MapCode.GDcloud9Objects2= [];
gdjs.Main_32MapCode.GDcloud8Objects1= [];
gdjs.Main_32MapCode.GDcloud8Objects2= [];
gdjs.Main_32MapCode.GDcloud7Objects1= [];
gdjs.Main_32MapCode.GDcloud7Objects2= [];
gdjs.Main_32MapCode.GDcloud6Objects1= [];
gdjs.Main_32MapCode.GDcloud6Objects2= [];
gdjs.Main_32MapCode.GDcloud5Objects1= [];
gdjs.Main_32MapCode.GDcloud5Objects2= [];
gdjs.Main_32MapCode.GDcloud4Objects1= [];
gdjs.Main_32MapCode.GDcloud4Objects2= [];
gdjs.Main_32MapCode.GDcloud3Objects1= [];
gdjs.Main_32MapCode.GDcloud3Objects2= [];
gdjs.Main_32MapCode.GDcloud2Objects1= [];
gdjs.Main_32MapCode.GDcloud2Objects2= [];
gdjs.Main_32MapCode.GDcloudObjects1= [];
gdjs.Main_32MapCode.GDcloudObjects2= [];
gdjs.Main_32MapCode.GDwavesObjects1= [];
gdjs.Main_32MapCode.GDwavesObjects2= [];

gdjs.Main_32MapCode.conditionTrue_0 = {val:false};
gdjs.Main_32MapCode.condition0IsTrue_0 = {val:false};
gdjs.Main_32MapCode.condition1IsTrue_0 = {val:false};


gdjs.Main_32MapCode.mapOfGDgdjs_46Main_9532MapCode_46GDStarluzonObjects1Objects = Hashtable.newFrom({"Starluzon": gdjs.Main_32MapCode.GDStarluzonObjects1});gdjs.Main_32MapCode.eventsList0 = function(runtimeScene) {

{


gdjs.Main_32MapCode.condition0IsTrue_0.val = false;
{
gdjs.Main_32MapCode.condition0IsTrue_0.val = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
}if (gdjs.Main_32MapCode.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Cordillera", false);
}}

}


};gdjs.Main_32MapCode.mapOfGDgdjs_46Main_9532MapCode_46GDStarluzonObjects1Objects = Hashtable.newFrom({"Starluzon": gdjs.Main_32MapCode.GDStarluzonObjects1});gdjs.Main_32MapCode.mapOfGDgdjs_46Main_9532MapCode_46GDStarlowlandObjects1Objects = Hashtable.newFrom({"Starlowland": gdjs.Main_32MapCode.GDStarlowlandObjects1});gdjs.Main_32MapCode.eventsList1 = function(runtimeScene) {

{


gdjs.Main_32MapCode.condition0IsTrue_0.val = false;
{
gdjs.Main_32MapCode.condition0IsTrue_0.val = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
}if (gdjs.Main_32MapCode.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Lowland", false);
}}

}


};gdjs.Main_32MapCode.mapOfGDgdjs_46Main_9532MapCode_46GDStarlowlandObjects1Objects = Hashtable.newFrom({"Starlowland": gdjs.Main_32MapCode.GDStarlowlandObjects1});gdjs.Main_32MapCode.mapOfGDgdjs_46Main_9532MapCode_46GDstarvisayasObjects1Objects = Hashtable.newFrom({"starvisayas": gdjs.Main_32MapCode.GDstarvisayasObjects1});gdjs.Main_32MapCode.eventsList2 = function(runtimeScene) {

{


gdjs.Main_32MapCode.condition0IsTrue_0.val = false;
{
gdjs.Main_32MapCode.condition0IsTrue_0.val = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
}if (gdjs.Main_32MapCode.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Visayas", false);
}}

}


};gdjs.Main_32MapCode.mapOfGDgdjs_46Main_9532MapCode_46GDstarvisayasObjects1Objects = Hashtable.newFrom({"starvisayas": gdjs.Main_32MapCode.GDstarvisayasObjects1});gdjs.Main_32MapCode.mapOfGDgdjs_46Main_9532MapCode_46GDstarmindanaoObjects1Objects = Hashtable.newFrom({"starmindanao": gdjs.Main_32MapCode.GDstarmindanaoObjects1});gdjs.Main_32MapCode.eventsList3 = function(runtimeScene) {

{


gdjs.Main_32MapCode.condition0IsTrue_0.val = false;
{
gdjs.Main_32MapCode.condition0IsTrue_0.val = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
}if (gdjs.Main_32MapCode.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "mindanao", false);
}}

}


};gdjs.Main_32MapCode.mapOfGDgdjs_46Main_9532MapCode_46GDstarmindanaoObjects1Objects = Hashtable.newFrom({"starmindanao": gdjs.Main_32MapCode.GDstarmindanaoObjects1});gdjs.Main_32MapCode.eventsList4 = function(runtimeScene) {

{


gdjs.Main_32MapCode.condition0IsTrue_0.val = false;
{
gdjs.Main_32MapCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
}if (gdjs.Main_32MapCode.condition0IsTrue_0.val) {
{gdjs.evtTools.sound.playMusic(runtimeScene, "2 minutes of pure oceansounds.mp3", true, 100, 1);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Starluzon"), gdjs.Main_32MapCode.GDStarluzonObjects1);

gdjs.Main_32MapCode.condition0IsTrue_0.val = false;
{
gdjs.Main_32MapCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.Main_32MapCode.mapOfGDgdjs_46Main_9532MapCode_46GDStarluzonObjects1Objects, runtimeScene, true, false);
}if (gdjs.Main_32MapCode.condition0IsTrue_0.val) {
/* Reuse gdjs.Main_32MapCode.GDStarluzonObjects1 */
{for(var i = 0, len = gdjs.Main_32MapCode.GDStarluzonObjects1.length ;i < len;++i) {
    gdjs.Main_32MapCode.GDStarluzonObjects1[i].setAnimation(1);
}
}
{ //Subevents
gdjs.Main_32MapCode.eventsList0(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Starluzon"), gdjs.Main_32MapCode.GDStarluzonObjects1);

gdjs.Main_32MapCode.condition0IsTrue_0.val = false;
{
gdjs.Main_32MapCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.Main_32MapCode.mapOfGDgdjs_46Main_9532MapCode_46GDStarluzonObjects1Objects, runtimeScene, true, true);
}if (gdjs.Main_32MapCode.condition0IsTrue_0.val) {
/* Reuse gdjs.Main_32MapCode.GDStarluzonObjects1 */
{for(var i = 0, len = gdjs.Main_32MapCode.GDStarluzonObjects1.length ;i < len;++i) {
    gdjs.Main_32MapCode.GDStarluzonObjects1[i].setAnimation(0);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Starlowland"), gdjs.Main_32MapCode.GDStarlowlandObjects1);

gdjs.Main_32MapCode.condition0IsTrue_0.val = false;
{
gdjs.Main_32MapCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.Main_32MapCode.mapOfGDgdjs_46Main_9532MapCode_46GDStarlowlandObjects1Objects, runtimeScene, true, false);
}if (gdjs.Main_32MapCode.condition0IsTrue_0.val) {
/* Reuse gdjs.Main_32MapCode.GDStarlowlandObjects1 */
{for(var i = 0, len = gdjs.Main_32MapCode.GDStarlowlandObjects1.length ;i < len;++i) {
    gdjs.Main_32MapCode.GDStarlowlandObjects1[i].setAnimation(1);
}
}
{ //Subevents
gdjs.Main_32MapCode.eventsList1(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Starlowland"), gdjs.Main_32MapCode.GDStarlowlandObjects1);

gdjs.Main_32MapCode.condition0IsTrue_0.val = false;
{
gdjs.Main_32MapCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.Main_32MapCode.mapOfGDgdjs_46Main_9532MapCode_46GDStarlowlandObjects1Objects, runtimeScene, true, true);
}if (gdjs.Main_32MapCode.condition0IsTrue_0.val) {
/* Reuse gdjs.Main_32MapCode.GDStarlowlandObjects1 */
{for(var i = 0, len = gdjs.Main_32MapCode.GDStarlowlandObjects1.length ;i < len;++i) {
    gdjs.Main_32MapCode.GDStarlowlandObjects1[i].setAnimation(0);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("starvisayas"), gdjs.Main_32MapCode.GDstarvisayasObjects1);

gdjs.Main_32MapCode.condition0IsTrue_0.val = false;
{
gdjs.Main_32MapCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.Main_32MapCode.mapOfGDgdjs_46Main_9532MapCode_46GDstarvisayasObjects1Objects, runtimeScene, true, false);
}if (gdjs.Main_32MapCode.condition0IsTrue_0.val) {
/* Reuse gdjs.Main_32MapCode.GDstarvisayasObjects1 */
{for(var i = 0, len = gdjs.Main_32MapCode.GDstarvisayasObjects1.length ;i < len;++i) {
    gdjs.Main_32MapCode.GDstarvisayasObjects1[i].setAnimation(1);
}
}
{ //Subevents
gdjs.Main_32MapCode.eventsList2(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("starvisayas"), gdjs.Main_32MapCode.GDstarvisayasObjects1);

gdjs.Main_32MapCode.condition0IsTrue_0.val = false;
{
gdjs.Main_32MapCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.Main_32MapCode.mapOfGDgdjs_46Main_9532MapCode_46GDstarvisayasObjects1Objects, runtimeScene, true, true);
}if (gdjs.Main_32MapCode.condition0IsTrue_0.val) {
/* Reuse gdjs.Main_32MapCode.GDstarvisayasObjects1 */
{for(var i = 0, len = gdjs.Main_32MapCode.GDstarvisayasObjects1.length ;i < len;++i) {
    gdjs.Main_32MapCode.GDstarvisayasObjects1[i].setAnimation(0);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("starmindanao"), gdjs.Main_32MapCode.GDstarmindanaoObjects1);

gdjs.Main_32MapCode.condition0IsTrue_0.val = false;
{
gdjs.Main_32MapCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.Main_32MapCode.mapOfGDgdjs_46Main_9532MapCode_46GDstarmindanaoObjects1Objects, runtimeScene, true, false);
}if (gdjs.Main_32MapCode.condition0IsTrue_0.val) {
/* Reuse gdjs.Main_32MapCode.GDstarmindanaoObjects1 */
{for(var i = 0, len = gdjs.Main_32MapCode.GDstarmindanaoObjects1.length ;i < len;++i) {
    gdjs.Main_32MapCode.GDstarmindanaoObjects1[i].setAnimation(1);
}
}
{ //Subevents
gdjs.Main_32MapCode.eventsList3(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("starmindanao"), gdjs.Main_32MapCode.GDstarmindanaoObjects1);

gdjs.Main_32MapCode.condition0IsTrue_0.val = false;
{
gdjs.Main_32MapCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.Main_32MapCode.mapOfGDgdjs_46Main_9532MapCode_46GDstarmindanaoObjects1Objects, runtimeScene, true, true);
}if (gdjs.Main_32MapCode.condition0IsTrue_0.val) {
/* Reuse gdjs.Main_32MapCode.GDstarmindanaoObjects1 */
{for(var i = 0, len = gdjs.Main_32MapCode.GDstarmindanaoObjects1.length ;i < len;++i) {
    gdjs.Main_32MapCode.GDstarmindanaoObjects1[i].setAnimation(0);
}
}}

}


};

gdjs.Main_32MapCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.Main_32MapCode.GDmainmapbObjects1.length = 0;
gdjs.Main_32MapCode.GDmainmapbObjects2.length = 0;
gdjs.Main_32MapCode.GDMapObjects1.length = 0;
gdjs.Main_32MapCode.GDMapObjects2.length = 0;
gdjs.Main_32MapCode.GDStarlowlandObjects1.length = 0;
gdjs.Main_32MapCode.GDStarlowlandObjects2.length = 0;
gdjs.Main_32MapCode.GDStarluzonObjects1.length = 0;
gdjs.Main_32MapCode.GDStarluzonObjects2.length = 0;
gdjs.Main_32MapCode.GDstarvisayasObjects1.length = 0;
gdjs.Main_32MapCode.GDstarvisayasObjects2.length = 0;
gdjs.Main_32MapCode.GDstarmindanaoObjects1.length = 0;
gdjs.Main_32MapCode.GDstarmindanaoObjects2.length = 0;
gdjs.Main_32MapCode.GDboat2Objects1.length = 0;
gdjs.Main_32MapCode.GDboat2Objects2.length = 0;
gdjs.Main_32MapCode.GDboatObjects1.length = 0;
gdjs.Main_32MapCode.GDboatObjects2.length = 0;
gdjs.Main_32MapCode.GDcloud9Objects1.length = 0;
gdjs.Main_32MapCode.GDcloud9Objects2.length = 0;
gdjs.Main_32MapCode.GDcloud8Objects1.length = 0;
gdjs.Main_32MapCode.GDcloud8Objects2.length = 0;
gdjs.Main_32MapCode.GDcloud7Objects1.length = 0;
gdjs.Main_32MapCode.GDcloud7Objects2.length = 0;
gdjs.Main_32MapCode.GDcloud6Objects1.length = 0;
gdjs.Main_32MapCode.GDcloud6Objects2.length = 0;
gdjs.Main_32MapCode.GDcloud5Objects1.length = 0;
gdjs.Main_32MapCode.GDcloud5Objects2.length = 0;
gdjs.Main_32MapCode.GDcloud4Objects1.length = 0;
gdjs.Main_32MapCode.GDcloud4Objects2.length = 0;
gdjs.Main_32MapCode.GDcloud3Objects1.length = 0;
gdjs.Main_32MapCode.GDcloud3Objects2.length = 0;
gdjs.Main_32MapCode.GDcloud2Objects1.length = 0;
gdjs.Main_32MapCode.GDcloud2Objects2.length = 0;
gdjs.Main_32MapCode.GDcloudObjects1.length = 0;
gdjs.Main_32MapCode.GDcloudObjects2.length = 0;
gdjs.Main_32MapCode.GDwavesObjects1.length = 0;
gdjs.Main_32MapCode.GDwavesObjects2.length = 0;

gdjs.Main_32MapCode.eventsList4(runtimeScene);
return;

}

gdjs['Main_32MapCode'] = gdjs.Main_32MapCode;
