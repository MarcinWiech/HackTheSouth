if (self.CavalryLogger) { CavalryLogger.start_js(["LXMSI"]); }

__d("SUIInstantWorkflowTheme",["cssVar","SUIAtlasTheme","SUIBusinessTheme","SUIMultistepModalUniform.business","SUITextInputUniform.business","SUITheme","SUITypeaheadUniform.business","SUITypeStyle","createBUITypeStyle"],(function(a,b,c,d,e,f,g){"use strict";a=new(b("SUITheme"))({id:"iw",components:babelHelpers["extends"]({},b("SUIBusinessTheme"),{SUIFloatLabelTextInput:{labelColor:"#90949c",verticalPadding:8},SUIFloatLabelTypeahead:{labelColor:"#90949c",verticalPadding:8},SUITextInput:babelHelpers["extends"]({},b("SUITextInputUniform.business"),{characterCountTypeStyle:new(b("SUITypeStyle"))({color:"#FFFFFF",fontFamily:"Helvetica, Arial, sans-serif",fontSize:"11px",fontWeight:"normal"}),height:30,typeStyle:new(b("SUITypeStyle"))({color:"#1d2129",fontFamily:"Helvetica, Arial, sans-serif",fontSize:"14px"})}),SUIMultistepModal:babelHelpers["extends"]({},b("SUIMultistepModalUniform.business"),{typeStyle:b("createBUITypeStyle")({color:"#5B5C5E",fontSize:"14px"})}),SUITypeahead:babelHelpers["extends"]({},b("SUIAtlasTheme").SUITypeahead,{input:babelHelpers["extends"]({},b("SUIAtlasTheme").SUITypeahead.input,{typeStyle:new(b("SUITypeStyle"))({color:"#1d2129",fontFamily:"Helvetica, Arial, sans-serif",fontSize:"14px"})}),disabled:babelHelpers["extends"]({},b("SUITypeaheadUniform.business").disabled)})})});e.exports=a}),null);
__d("Droppable",["Collection","Drag","Draggable","Vector","emptyFunction"],(function(a,b,c,d,e,f){__p&&__p();function g(a){"use strict";__p&&__p();if(!a)throw new Error("Element should be a DOM node");if(!(this instanceof g))if(a instanceof Array){var c=[];a.forEach(function(a){c.push(new g(a))});return new(b("Collection"))(g,c)}else return new g(a);else this.data={},this.dom=a,this.namespace=null}g.prototype.destroy=function(){"use strict";this.namespace&&b("Drag").removeDroppable(this.namespace,this),this.data=this.dom=null};g.prototype.setNamespace=function(a){"use strict";this.namespace&&b("Drag").removeDroppable(this.namespace,this);this.namespace=a;b("Drag").addDroppable(a,this);return this};g.prototype.setZIndex=function(a){"use strict";this.zIndex=a;return this};g.prototype.hasPointMovedHorizontally=function(a){"use strict";var c=b("Vector").getElementPosition(this.dom);return c.x<=a.x&&this.dom.offsetWidth+c.x>a.x};g.prototype.hasPointMovedVertically=function(a){"use strict";var c=b("Vector").getElementPosition(this.dom);return c.y<=a.y&&this.dom.offsetHeight+c.y>a.y};g.prototype.hasPointMovedInside=function(a){"use strict";return this.hasPointMovedHorizontally(a)&&this.hasPointMovedVertically(a)};g.prototype.setDragOverHandler=function(a){"use strict";this.ondragover=a;return this};g.prototype.setDragOutHandler=function(a){"use strict";this.ondragout=a;return this};g.prototype.setDragOverVectically=function(){"use strict";this.isDraggedOver=g.prototype.hasPointMovedVertically;return this};g.prototype.setDragOverHorizontally=function(){"use strict";this.isDraggedOver=g.prototype.hasPointMovedHorizontally;return this};g.prototype.setDragMoveHandler=function(a){"use strict";this.ondragmove=a;return this};g.prototype.setDropHandler=function(a){"use strict";this.ondrop=a;return this};g.prototype.zIndex=0;g.prototype.isDraggedOver=g.prototype.hasPointMovedInside;g.prototype.ondragover=b("emptyFunction");g.prototype.ondragout=b("emptyFunction");g.prototype.ondragmove=b("emptyFunction");g.prototype.ondrop=b("emptyFunction");g.prototype.getDOM=b("Draggable").prototype.getDOM;g.prototype.setKey=b("Draggable").prototype.setKey;g.prototype.getKey=b("Draggable").prototype.getKey;e.exports=g}),null);
__d("SortableGroup",["Arbiter","CSS","DOM","Draggable","Droppable","Style","Vector","emptyFunction","removeFromArray"],(function(a,b,c,d,e,f){__p&&__p();function g(){"use strict";this.namespace="sortable"+ ++g.instanceCount,this.draggables={},this.droppables={},this.sortables={},this.linkedGroups=[],this.linkedGroups.onbeforelinkjump=b("emptyFunction"),this.linkedGroups.onlinkjump=b("emptyFunction"),this.rootNode=null,this.boundingBox=null,this.neverEmpty=!1,this.hasEmptyMessage=!1,this.isDroppable=!0,this.isDraggable=!0,this.useScroller=!0,this.dragOverCriteria="inside",this.requireSameParent=!0,this.previousIndexList=[],this.anchor=null,this.disabled=!1,this.autoWidth=!1,this.placeholderWidth=!1,this.placeholderHeight=!1}g.prototype.addEmptyMessage=function(a,c){"use strict";var d="placeholder";a.parentNode!=c&&b("DOM").appendContent(c,a);this.emptyMessage=a;this._initializeAdded(d,a);this.hasEmptyMessage=!0;this.sortables[d]=a;this.droppables[d]=new(b("Droppable"))(a).setNamespace(this.namespace).setDragOverHandler(this._dragOverHandlerShim.bind(this,d));return this};g.prototype.setAutoWidth=function(a){"use strict";this.autoWidth=a;return this};g.prototype.setPlaceholderWidth=function(a){"use strict";this.placeholderWidth=a;return this};g.prototype.setPlaceholderHeight=function(a){"use strict";this.placeholderHeight=a;return this};g.prototype.setUseScroller=function(a){"use strict";this.useScroller=a;return this};g.prototype.setDragOverHorizontally=function(){"use strict";this.dragOverCriteria="horizontal";return this};g.prototype.setDragOverVertically=function(){"use strict";this.dragOverCriteria="vertical";return this};g.prototype.removeEmptyMessage=function(){"use strict";this.emptyMessage&&b("DOM").remove(this.emptyMessage);this.hasEmptyMessage=!1;this.removeSortable("placeholder");return this};g.prototype.addSortable=function(a,c,d,e){"use strict";this._initializeAdded(a,c);this.sortables[a]=c;this.draggables[a]=new(b("Draggable"))(c).setNamespace(this.namespace).setGutter(this.gutter).setUseAbsolute(!0).setUseScroller(this.useScroller).setGrabHandler(this.grabHandler.bind(this,a)).setDropHandler(this.dropHandler.bind(this,a,e)).setKey("key",a).setBoundingBox(this.boundingBox);d&&this.draggables[a].addHandle(d);this.droppables[a]=new(b("Droppable"))(c).setNamespace(this.namespace).setDragOverHandler(this._dragOverHandlerShim.bind(this,a));this.dragOverCriteria==="horizontal"?this.droppables[a].setDragOverHorizontally():this.dragOverCriteria==="vertical"&&this.droppables[a].setDragOverVectically();return this};g.prototype.destroy=function(){"use strict";for(var a in this.droppables)this.droppables[a].destroy();for(var c in this.draggables)this.draggables[c].destroy();this.droppables=this.draggables=this.rootNode=null;b("removeFromArray")(this.linkedGroups,this);for(var d=0;d<this.linkedGroups.length;d++)this.linkedGroups[d].linkedGroups=this.linkedGroups};g.prototype.dragOverHandler=function(a,b){"use strict";__p&&__p();if(!this.isDroppable&&!this.anchor)return;var c=!1;if(!(b in this.draggables)){this.linkedGroups.onbeforelinkjump.call(this,b);if(!this.migrateLinkedSortable(b))throw new Error("Draggable dropped onto a foreign droppable!");c=!0}var d=!0,e=this.getSortables(),f=this.sortables[b],g=this.sortables[a];if(!this.anchor){var h=e.length;for(var i=0;i<h;i++)if(e[i]==g)break;else if(e[i]==f){d=!1;break}}else g=this.anchor;this.onbeforedragover(f,g);e=this.linkedGroups.placeholder;this.insertPlaceholder(e,g,d||this.anchor);e.parentNode.insertBefore(f,e);this.ondragover(f,g,b,a);c&&this.linkedGroups.onlinkjump.call(this,b)};g.prototype.dropHandler=function(a,c){"use strict";__p&&__p();if(this._checkLastRemaining()){this.draggables[a].resetPosition();return}var d=this.linkedGroups.placeholder;b("CSS").removeClass(this.sortables[a],"drag");this.draggables[a].resetPosition();d.parentNode.insertBefore(this.sortables[a],d);d.parentNode.removeChild(d);for(var d=0;d<this.linkedGroups.length;d++)this.linkedGroups[d].anchor&&delete this.linkedGroups[d].anchor;this.ondropcallback(a,this.sortables[a]);this.onorderchange();this.previousIndexList.length===0&&(this.previousIndexList=Object.keys(this.sortables));d=this.previousIndexList.indexOf(a);a=this.getOrder().indexOf(a);b("Arbiter").inform("drag-and-drop/"+c,{previousIndex:d,currentIndex:a});this.previousIndexList=this.getOrder()};g.prototype.getOrder=function(){"use strict";var a=[],b=this.getSortables();for(var c=0;c<b.length;c++)for(var d in this.sortables)if(this.sortables[d]==b[c]){a.push(d);break}return a};g.prototype.getSortables=function(){"use strict";return this.rootNode?this.rootNode.childNodes:[]};g.prototype.grabHandler=function(a){"use strict";__p&&__p();if(this.disabled||this._checkLastRemaining()||!this.isDraggable){this.draggables[a].killDrag();return}this.onbeforegrabcallback(this.sortables[a],a);var c=this.linkedGroups.placeholder,d=this.sortables[a];b("CSS").setClass(c,d.className);b("CSS").addClass(c,"droppable_placeholder");b("CSS").addClass(d,"drag");b("Vector").getElementDimensions(d).setElementDimensions(c);this.autoWidth?b("Style").set(c,"width","auto"):this.placeholderWidth&&b("Style").set(c,"width",this.placeholderWidth+"px");this.placeholderHeight&&b("Style").set(c,"height",this.placeholderHeight+"px");d.parentNode.insertBefore(c,d);this.ongrabcallback(this.sortables[a],a);this.isDroppable||(this.anchor=d.nextSibling,this.anchor||(this.anchor=b("DOM").create("div"),d.parentNode.appendChild(this.anchor)))};g.prototype.insertPlaceholder=function(a,c,d){"use strict";d?b("DOM").insertBefore(c,a):b("DOM").insertAfter(c,a)};g.prototype.keyExists=function(a){"use strict";return this.sortables[a]};g.prototype.link=function(a){"use strict";__p&&__p();a.linkedGroups=this.linkedGroups;this.linkedGroups.length||this.linkedGroups.push(this);this.linkedGroups.push(a);for(var a=0;a<this.linkedGroups.length;a++)if(this.linkedGroups[a].namespace!=this.namespace){this.linkedGroups[a].namespace=this.namespace;for(var b in this.linkedGroups[a].droppables){this.linkedGroups[a].droppables[b].setNamespace(this.namespace);var c=this.linkedGroups[a].draggables[b];c&&c.setNamespace(this.namespace)}}return this};g.prototype.migrateLinkedSortable=function(a){"use strict";__p&&__p();for(var b=0;b<this.linkedGroups.length;b++)if(a in this.linkedGroups[b].draggables){this.sortables[a]=this.linkedGroups[b].sortables[a];this.draggables[a]=this.linkedGroups[b].draggables[a];this.draggables[a].setGrabHandler(this.grabHandler.bind(this,a)).setDropHandler(this.dropHandler.bind(this,a));this.droppables[a]=this.linkedGroups[b].droppables[a];this.droppables[a].setDragOverHandler(this._dragOverHandlerShim.bind(this,a));delete this.linkedGroups[b].sortables[a];delete this.linkedGroups[b].draggables[a];delete this.linkedGroups[b].droppables[a];return!0}return!1};g.prototype.removeSortable=function(a){"use strict";a in this.sortables&&(a in this.draggables&&this.draggables[a].destroy(),a in this.droppables&&this.droppables[a].destroy(),delete this.draggables[a],delete this.droppables[a],delete this.sortables[a])};g.prototype.removeAllSortables=function(){"use strict";for(var a in this.sortables)this.removeSortable(a)};g.prototype.setDisabled=function(a){"use strict";this.disabled=a;return this};g.prototype.forceDrop=function(a){"use strict";a in this.sortables&&this.draggables[a].forceDrop()};g.prototype.killDrag=function(a){"use strict";a in this.sortables&&this.draggables[a].killDrag()};g.prototype.setBeforeGrabCallback=function(a){"use strict";this.onbeforegrabcallback=a;return this};g.prototype.setBoundingBox=function(a){"use strict";this.boundingBox=a;for(var b in this.draggables)this.draggables[b].setBoundingBox(this.boundingBox);return this};g.prototype.setBeforeDragOverCallback=function(a){"use strict";this.onbeforedragover=a;return this};g.prototype.setDragOverCallback=function(a){"use strict";this.ondragover=a;return this};g.prototype.setDropCallback=function(a){"use strict";this.ondropcallback=a;return this};g.prototype.setDroppable=function(a){"use strict";this.isDroppable=a;return this};g.prototype.setDraggable=function(a){"use strict";this.isDraggable=a;return this};g.prototype.setGrabCallback=function(a){"use strict";this.ongrabcallback=a;return this};g.prototype.setBeforeLinkJumpHandler=function(a){"use strict";this.linkedGroups.onbeforelinkjump=a;return this};g.prototype.setInsertPlaceholderHandler=function(a){"use strict";this.insertPlaceholder=a};g.prototype.setLinkJumpHandler=function(a){"use strict";this.linkedGroups.onlinkjump=a;return this};g.prototype.setNeverEmpty=function(a){"use strict";this.neverEmpty=a};g.prototype.setOrderChangeHandler=function(a){"use strict";this.onorderchange=a;return this};g.prototype.setRequireSameParent=function(a,b){"use strict";this.requireSameParent=b};g.prototype.setSortablesGetter=function(a){"use strict";this.getSortables=a};g.prototype._checkLastRemaining=function(a){"use strict";a=this.hasEmptyMessage?2:1;return this.neverEmpty&&this.getSortables().length==a};g.prototype._dragOverHandlerShim=function(a,b){"use strict";this.dragOverHandler(a,b.getKey("key"))};g.prototype._initializeAdded=function(a,c){"use strict";if(this.rootNode===null)this.rootNode=c.parentNode,this.linkedGroups.placeholder||(this.linkedGroups.placeholder=b("DOM").create(c.tagName,{className:"dragPlaceholder",style:{padding:"0"}}));else if(this.requireSameParent&&this.rootNode!=c.parentNode)throw new Error("All sortables of a collection must share the same parentNode");if(a in this.draggables)throw new Error("All sortables must have a unique key")};g.instanceCount=0;Object.assign(g.prototype,{gutter:15,onbeforegrabcallback:b("emptyFunction"),onbeforedragover:b("emptyFunction"),ondragover:b("emptyFunction"),ondropcallback:b("emptyFunction"),ongrabcallback:b("emptyFunction"),onorderchange:b("emptyFunction")});e.exports=a.SortableGroup||g}),null);
__d("PageCreateFundraiserAction.react",["ix","Image.react","PageActionOpenURLAsyncDialog.react","React","fbglyph"],(function(a,b,c,d,e,f,g){"use strict";a=function(a){return b("React").createElement(b("PageActionOpenURLAsyncDialog.react"),babelHelpers["extends"]({},a,{image:b("React").createElement(b("Image.react"),{src:g("128224")})}))};e.exports=a}),null);
__d("PresmaProfileBlock.react",["cx","Layout.react","Image.react","React","joinClasses"],(function(a,b,c,d,e,f,g){"use strict";var h=b("Layout.react").Column,i=b("Layout.react").FillColumn;a=function(a){return b("React").createElement("div",{className:b("joinClasses")("_4tne",a.className),onClick:a.onClick,role:"link",tabIndex:"0"},b("React").createElement(b("Layout.react"),null,b("React").createElement(h,null,b("React").createElement("div",{className:"_4tnf"},b("React").createElement(b("Image.react"),{className:"_4tng",src:a.photoUrl}))),b("React").createElement(i,null,b("React").createElement("div",{className:"_2pic"},b("React").createElement("div",{className:"_4tnh"},a.name),b("React").createElement("div",{className:"_4tni"},a.subText)))))};e.exports=a}),null);
/**
 * License: https://www.facebook.com/legal/license/MDzNl_j9yvg/
 */
__d("fbjs-0.8.16",[],(function(a,b,c,d,e,f){"use strict";__p&&__p();a={};var g={exports:a};function h(){throw new Error("The fbjs package should not be required without a full path.")}var i=!1,j=function(){i||(i=!0,h());return g.exports};b={};var k={exports:b};function l(){__p&&__p();function a(a){return function(){return a}}var b=function(){};b.thatReturns=a;b.thatReturnsFalse=a(!1);b.thatReturnsTrue=a(!0);b.thatReturnsNull=a(null);b.thatReturnsThis=function(){return this};b.thatReturnsArgument=function(a){return a};k.exports=b}var m=!1,n=function(){m||(m=!0,l());return k.exports};c={};var o={exports:c};function p(){__p&&__p();function a(a,b,c,d,e,f,g,h){__p&&__p();if(!a){if(b===void 0)a=new Error("Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings.");else{var i=[c,d,e,f,g,h],j=0;a=new Error(b.replace(/%s/g,function(){return i[j++]}));a.name="Invariant Violation"}a.framesToPop=1;throw a}}o.exports=a}var q=!1,r=function(){q||(q=!0,p());return o.exports};d={};var s={exports:d};function t(){__p&&__p();var a=Object.prototype.hasOwnProperty;function b(a,b){if(a===b)return a!==0||b!==0||1/a===1/b;else return a!==a&&b!==b}function c(c,d){__p&&__p();if(b(c,d))return!0;if(typeof c!=="object"||c===null||typeof d!=="object"||d===null)return!1;var e=Object.keys(c),f=Object.keys(d);if(e.length!==f.length)return!1;for(var f=0;f<e.length;f++)if(!a.call(d,e[f])||!b(c[e[f]],d[e[f]]))return!1;return!0}s.exports=c}var u=!1,v=function(){u||(u=!0,t());return s.exports};f={};var w={exports:f};function x(){var a=n();a=a;w.exports=a}var y=!1,z=function(){y||(y=!0,x());return w.exports};a=function(a){switch(a){case void 0:return j();case"/lib/emptyFunction":return n();case"/lib/invariant":return r();case"/lib/shallowEqual":return v();case"/lib/warning":return z()}};e.exports=a}),null);
__d("XBulkVideoUploadController",["XController"],(function(a,b,c,d,e,f){e.exports=b("XController").create("/video/bulk_upload/",{target_id:{type:"String",required:!0},is_reference_video:{type:"Bool",defaultValue:!1},is_show_video:{type:"Bool",defaultValue:!1}})}),null);