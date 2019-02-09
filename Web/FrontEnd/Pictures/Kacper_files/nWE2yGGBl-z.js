if (self.CavalryLogger) { CavalryLogger.start_js(["w+28o"]); }

__d("FBTilesReportDialogItems.react",["React","XUIRadioList.react"],(function(a,b,c,d,e,f){"use strict";__p&&__p();var g,h=b("XUIRadioList.react").Item;c=babelHelpers.inherits(a,b("React").Component);g=c&&c.prototype;function a(){var a,b;for(var c=arguments.length,d=new Array(c),e=0;e<c;e++)d[e]=arguments[e];return b=(a=g.constructor).call.apply(a,[this].concat(d)),this.state={selectedType:"other"},this.$1=function(a){this.setState({selectedType:a}),this.props.onSelected(a)}.bind(this),b}a.prototype.render=function(){var a=[];Object.keys(this.props.types).forEach(function(c){a.push(b("React").createElement(h,{value:c,key:c},this.props.types[c].label))}.bind(this));return b("React").createElement(b("XUIRadioList.react"),{selectedValue:this.state.selectedType,onValueChange:this.$1},a)};e.exports=a}),null);
__d("MapsReporterTypedLogger",["Banzai","GeneratedLoggerUtils","nullthrows"],(function(a,b,c,d,e,f){"use strict";__p&&__p();function a(){this.$1={}}a.prototype.log=function(){b("GeneratedLoggerUtils").log("logger:MapsReporterLoggerConfig",this.$1,b("Banzai").BASIC)};a.prototype.logVital=function(){b("GeneratedLoggerUtils").log("logger:MapsReporterLoggerConfig",this.$1,b("Banzai").VITAL)};a.prototype.logImmediately=function(){b("GeneratedLoggerUtils").log("logger:MapsReporterLoggerConfig",this.$1,{signal:!0})};a.prototype.clear=function(){this.$1={};return this};a.prototype.getData=function(){return babelHelpers["extends"]({},this.$1)};a.prototype.updateData=function(a){this.$1=babelHelpers["extends"]({},this.$1,a);return this};a.prototype.setCategory=function(a){this.$1.category=a;return this};a.prototype.setMapURI=function(a){this.$1.map_uri=a;return this};a.prototype.setNelat=function(a){this.$1.nelat=a;return this};a.prototype.setNelon=function(a){this.$1.nelon=a;return this};a.prototype.setPassesGkMapsTileserviceOsmDefault=function(a){this.$1.passes_gk_maps_tileservice_osm_default=a;return this};a.prototype.setPassesGkOxygenMapNewStyle=function(a){this.$1.passes_gk_oxygen_map_new_style=a;return this};a.prototype.setStage=function(a){this.$1.stage=a;return this};a.prototype.setSwlat=function(a){this.$1.swlat=a;return this};a.prototype.setSwlon=function(a){this.$1.swlon=a;return this};a.prototype.setTime=function(a){this.$1.time=a;return this};a.prototype.setUserComment=function(a){this.$1.user_comment=a;return this};a.prototype.setVC=function(a){this.$1.vc=a;return this};a.prototype.setWeight=function(a){this.$1.weight=a;return this};a.prototype.setZoom=function(a){this.$1.zoom=a;return this};c={category:!0,map_uri:!0,nelat:!0,nelon:!0,passes_gk_maps_tileservice_osm_default:!0,passes_gk_oxygen_map_new_style:!0,stage:!0,swlat:!0,swlon:!0,time:!0,user_comment:!0,vc:!0,weight:!0,zoom:!0};e.exports=a}),null);
__d("FBTilesInfoButton.react",["ix","cx","fbt","AdsTextInput.react","ContextualDialogArrow","FBTilesReportDialogItems.react","Image.react","Link.react","MapsReporterTypedLogger","PopoverMenu.react","React","ReactXUIMenu","XUIButton.react","XUIDialogCloseButton.react","gkx","joinClasses","leaflet","SimpleXUIDialog","XUIDialogButton.react","XUIDialogCancelButton.react","asset"],(function(a,b,c,d,e,f,g,h,i){"use strict";__p&&__p();var j,k=b("ReactXUIMenu").Item;c=babelHelpers.inherits(a,b("React").Component);j=c&&c.prototype;function a(){__p&&__p();var a,c;for(var d=arguments.length,e=new Array(d),f=0;f<d;f++)e[f]=arguments[f];return c=(a=j.constructor).call.apply(a,[this].concat(e)),this.REPORT_TYPES={lineLabel:{label:i._("Road Name"),title:i._("Report Problem With Road Name"),hint:i._("Which road is incorrectly named? (optional)")},line:{label:i._("Road Shape"),title:i._("Report Problem With Road Shape"),hint:i._("Which road is incorrectly shaped? (optional)")},lineMissing:{label:i._("Missing Road"),title:i._("Report Missing Road"),hint:i._("Which road is missing? (optional)")},polygon:{label:i._("Shape or Name of Building, Park, or Body of Water"),title:i._("Report Problem With Shape or Name of Building, Park, or Body of Water"),hint:i._("Which building, park, or body of water is incorrect? (optional)")},border:{label:i._("Country, State or City Border"),title:i._("Report Problem With Border"),hint:i._("Which border is incorrectly drawn? (optional)")},administrative:{label:i._("Country, State or City Name"),title:i._("Report Problem With Country, State or City Name"),hint:i._("Which name is incorrect? (optional)")},other:{label:i._("Other"),title:i._("Report Map Problem"),hint:i._("What's wrong with the map? (optional)")}},this.state={selectedReportType:null,reportedProblem:null,mapInfo:{mapSources:[],hereReportUrl:"",mapUrl:null,mapBounds:null,zoom:null}},this.$1=function(){this.setState({mapInfo:this.props.mapInfoCallback()});var a=this.state.mapInfo.mapSources;if(a.length==1&&a.includes("here")){this.$2();return}b("SimpleXUIDialog").showEx(b("React").createElement(b("FBTilesReportDialogItems.react"),{types:this.REPORT_TYPES,onSelected:function(a){return this.setState({selectedReportType:a})}.bind(this)}),i._("Report a Map Problem With"),b("React").createElement("div",null,b("React").createElement(b("XUIDialogCancelButton.react"),null),b("React").createElement(b("XUIDialogButton.react"),{action:"cancel",use:"confirm",label:i._("Continue"),onClick:this.$3})))}.bind(this),this.$3=function(){if(!this.state.selectedReportType)return;var a=this.REPORT_TYPES[this.state.selectedReportType];b("SimpleXUIDialog").showEx(b("React").createElement(b("AdsTextInput.react"),{multiline:!0,placeholder:a.hint,value:this.state.reportedProblem,onChange:function(a){return this.setState({reportedProblem:a})}.bind(this)}),a.title,b("React").createElement("div",null,b("React").createElement(b("XUIDialogCancelButton.react"),null),b("React").createElement(b("XUIDialogButton.react"),{action:"cancel",use:"confirm",label:i._("Send"),onClick:this.$4})))}.bind(this),this.$4=function(){var a=new(b("MapsReporterTypedLogger"))().setStage("submit_comment").setCategory(this.state.selectedReportType).setUserComment(this.state.reportedProblem).setMapURI(this.state.mapInfo.mapUrl||""),c=this.state.mapInfo.mapBounds,d=this.state.mapInfo.zoom;c!=null&&d!=null&&a.setNelon(c.getEast()).setNelat(c.getNorth()).setSwlon(c.getWest()).setSwlat(c.getSouth()).setZoom(""+d).setPassesGkMapsTileserviceOsmDefault(b("gkx")("678292")).setPassesGkOxygenMapNewStyle(b("gkx")("678293"));a.log();b("SimpleXUIDialog").showEx(i._("Your feedback helps us make Facebook maps better for everyone."),i._("Thank you"),b("React").createElement(b("XUIDialogCloseButton.react"),{use:"confirm"}))}.bind(this),c}a.prototype.render=function(){var a=this.props.surface?"/maps/attribution_terms?surface="+this.props.surface:"/maps/attribution_terms",c=b("React").createElement(b("ReactXUIMenu"),null,b("React").createElement(k,{key:"title",icon:b("React").createElement(b("Image.react"),{src:g("367566")}),onClick:function(){return window.open(a,"_blank")}},i._("Map Data Legal Notices")),b("React").createElement(k,{key:"report",icon:b("React").createElement(b("Image.react"),{src:g("408431")}),onClick:this.$1},i._("Report a problem")));return b("React").createElement(b("PopoverMenu.react"),{alignh:"right",position:"above",menu:c,layerBehaviors:[b("ContextualDialogArrow")]},b("React").createElement(b("Link.react"),{ref:"termsButton","aria-haspopup":"menu",className:b("joinClasses")(this.props.className,"_4cou")},b("React").createElement("div",{className:"_4cod"},b("React").createElement(b("Image.react"),{src:g("360713"),"aria-label":i._("Information")}))))};a.prototype.$2=function(){var a=b("SimpleXUIDialog").showEx(i._("This map has data from third-party providers. You will be redirected to them to provide feedback."),i._("Report a Map Problem"),b("React").createElement("div",null,b("React").createElement(b("XUIDialogCancelButton.react"),null),b("React").createElement(b("XUIButton.react"),{className:"_4jy1",target:"_blank",use:"default",label:i._("Open"),href:this.state.mapInfo.hereReportUrl,onClick:function(){return a.hide()}})))};e.exports=a}),null);
__d("FBTilesStaticInfoButton.react",["FBTilesInfoButton.react","React"],(function(a,b,c,d,e,f){__p&&__p();var g;g=babelHelpers.inherits(a,b("React").Component);g&&g.prototype;a.prototype.render=function(){"use strict";return b("React").createElement(b("FBTilesInfoButton.react"),{className:this.props.className,mapInfoCallback:function(){return this.props.mapInfo}.bind(this)})};function a(){"use strict";g.apply(this,arguments)}e.exports=a}),null);
__d("EventsToggle",["CSS","Event"],(function(a,b,c,d,e,f){__p&&__p();function a(a,c,d,e,f){"use strict";this.$1=c;this.$2=d;this.$3=a;this.$4=e;this.$5=f;c=this.toggle.bind(this);this.$5&&this.$5.href&&b("Event").listen(this.$5,"click",this.clickTitle);this.$4?b("Event").listen(this.$4,"click",c):this.$1&&b("Event").listen(this.$1,"click",c)}a.prototype.toggle=function(){"use strict";this.$3&&b("CSS").toggleClass(this.$3,"hidden_elem"),this.$1&&b("CSS").toggle(this.$1),this.$2&&b("CSS").toggle(this.$2)};a.prototype.clickTitle=function(a){"use strict";a.stopPropagation()};e.exports=a}),null);
__d("StickyController",["CSS","Event","Style","Vector","queryThenMutateDOM"],(function(a,b,c,d,e,f){__p&&__p();function a(a,b,c,d){"use strict";this._element=a,this._marginTop=b,this._onchange=c,this._proxy=d||a.parentNode,this._boundQueryOnScroll=this.shouldFix.bind(this),this._boundMutateOnScroll=this._mutateOnScroll.bind(this)}a.prototype.handleScroll=function(){"use strict";b("queryThenMutateDOM")(this._boundQueryOnScroll,this._boundMutateOnScroll)};a.prototype.shouldFix=function(){"use strict";return b("Vector").getElementPosition(this._proxy,"viewport").y<=this._marginTop};a.prototype._mutateOnScroll=function(){"use strict";var a=this.shouldFix();this.isFixed()!==a&&(b("Style").set(this._element,"top",a?this._marginTop+"px":""),b("CSS").conditionClass(this._element,"fixed_elem",a),this._onchange&&this._onchange(a))};a.prototype.start=function(){"use strict";if(this._event)return;this._event=b("Event").listen(window,"scroll",this.handleScroll.bind(this));setTimeout(this.handleScroll.bind(this),0)};a.prototype.stop=function(){"use strict";this._event&&this._event.remove(),this._event=null};a.prototype.isFixed=function(){"use strict";return b("CSS").hasClass(this._element,"fixed_elem")};e.exports=a}),null);
__d("EventsPermalinkController",["BlueBar","Event","EventPermalinkURISetter","EventsActionsLogger","StickyController","Vector","goURI"],(function(a,b,c,d,e,f){__p&&__p();var g=10;e.exports={init:function(a){b("EventPermalinkURISetter").setURI(a)},createStickyColumn:function(a){var c=b("Vector").getElementDimensions(b("BlueBar").getBar()).y+g,d=new(b("StickyController"))(a,c),e=b("Event").listen(window,"scroll",function(){d.start(),e.remove()})},onInfoRowClick:function(a,c,d,e){b("Event").listen(a,"click",function(){b("EventsActionsLogger").log(c,{type:b("EventsActionsLogger").Type.CLICK,target:b("EventsActionsLogger").Target.PERMALINK_INFO_ROW_LINK,acontext:d},{info_row_name:e})})},onInfoRowRedirectClick:function(a,c){b("Event").listen(a,"click",function(){return b("goURI")(c,!0)})},onGetDirectionsButtonClick:function(a,c,d){b("Event").listen(a,"click",function(){b("EventsActionsLogger").log(c,{type:b("EventsActionsLogger").Type.CLICK,target:b("EventsActionsLogger").Target.GET_DIRECTIONS_BUTTON,acontext:d})})},onMapClick:function(a,c,d){b("Event").listen(a,"click",function(){b("EventsActionsLogger").log(c,{type:b("EventsActionsLogger").Type.CLICK,target:b("EventsActionsLogger").Target.MAP,acontext:d})})}}}),null);
__d("StaticMapCallout",["csx","CSS","DOM","Parent","Style","Vector","clamp"],(function(a,b,c,d,e,f,g){__p&&__p();var h=3;c=13;var i=10,j=c/2;function a(a,c,d,e,f,g){__p&&__p();this._root=a;this._arrows=b("DOM").find(a,".fbMapCalloutArrowWrap");this._topArrow=b("DOM").find(a,".fbMapCalloutArrowTop");this._bottomArrow=b("DOM").find(a,".fbMapCalloutArrowBottom");this._leftArrow=b("DOM").find(a,".fbMapCalloutArrowLeft");this._rightArrow=b("DOM").find(a,".fbMapCalloutArrowRight");this._main=b("DOM").find(a,".fbMapCalloutMain");this._content=b("DOM").find(a,".fbMapCalloutContent");this._mapWidth=d;this._mapHeight=e;a=this._orientation=c;b("CSS").hide(this._root);b("Style").set(this._root,"position","absolute");this._left=f.left;this._top=f.top;this._right=f.right;this._bottom=f.bottom;Object.assign(this,f);if(a==="left"){b("CSS").setClass(this._arrows,"fbMapCalloutUseArrowLeft");d=this._right+h;b("Style").set(this._root,"right",d+"px")}else if(a==="right"){b("CSS").setClass(this._arrows,"fbMapCalloutUseArrowRight");e=this._left+h;b("Style").set(this._root,"left",e+"px")}else if(a==="top"){b("CSS").setClass(this._arrows,"fbMapCalloutUseArrowTop");c=this._bottom+h;b("Style").set(this._root,"bottom",c+"px")}else if(a==="bottom"){b("CSS").setClass(this._arrows,"fbMapCalloutUseArrowBottom");f=this._top+h;b("Style").set(this._root,"top",f+"px")}if(g){d=b("Parent").bySelector(this._root,"._5cw9");d.appendChild(this._root)}}Object.assign(a.prototype,{setContent:function(a){b("DOM").setContent(this._content,a),this.calloutDimensionsChanged()},calloutDimensionsChanged:function(){__p&&__p();if(this._orientation==="left"||this._orientation==="right"){var a=b("Vector").getElementDimensions(this._main),c=a.y/2;this._top+a.y/2>this._mapHeight-i&&(c=a.y-(this._mapHeight-this._top-i));c>this._top-i&&(c=this._top-i);c=b("clamp")(c,j,a.y-j);this._setArrowYOffset(c);b("Style").set(this._root,"top",this._top-c+"px")}else{a=b("Vector").getElementDimensions(this._main).x;a+=1;c=a/2;this._left+a/2>this._mapWidth-i&&(c=a-(this._mapWidth-this._left-i));c>this._left-i&&(c=this._left-i);c=b("clamp")(c,j,a-j);this._setArrowXOffset(c);b("Style").set(this._root,"left",this._left-c+"px")}},show:function(){b("CSS").show(this._root)},hide:function(){b("CSS").hide(this._root)},setZIndex:function(a){b("Style").set(this._root,"z-index",a)},_setArrowYOffset:function(a){a-=j,b("Style").set(this._leftArrow,"top",a+"px"),b("Style").set(this._rightArrow,"top",a+"px")},_setArrowXOffset:function(a){a-=j,b("Style").set(this._topArrow,"left",a+"px"),b("Style").set(this._bottomArrow,"left",a+"px")}});e.exports=a}),null);
__d("StaticMapPin",["Event"],(function(a,b,c,d,e,f){__p&&__p();var g=0,h=1,i=2,j=10,k=20;function l(a,c,d,e,f){this._pin=a,this._tooltip=c,this._callout=d,this._calloutContainer=e,this._mapID=f,this._state=g,l.instancesByMapID[f]=l.instancesByMapID[f]||[],l.instancesByMapID[f].push(this),b("Event").listen(this._pin,"mouseover",this._onMouseIn.bind(this)),b("Event").listen(this._pin,"mouseout",this._onMouseOut.bind(this)),b("Event").listen(this._pin,"click",this._onClick.bind(this))}Object.assign(l.prototype,{_onMouseIn:function(){if(this._state!==g||!this._tooltip)return;this._calloutContainer.show();this._calloutContainer.setContent(this._tooltip);this._calloutContainer.setZIndex(j);this._state=h},_onMouseOut:function(){if(this._state!==h)return;this._calloutContainer.hide();this._state=g},_onClick:function(){__p&&__p();if(!this._callout)return;if(this._state===i){this._calloutContainer.setContent(this._tooltip);this._calloutContainer.setZIndex(j);this._state=h;return}l.hideAll(this._mapID);this._calloutContainer.show();this._calloutContainer.setContent(this._callout);this._calloutContainer.setZIndex(k);this._state=i}});Object.assign(l,{instancesByMapID:[],hideAll:function(a){a=l.instancesByMapID[a];for(var b=0;b<a.length;b++)a[b]._calloutContainer.hide(),a[b]._state=g},construct:function(a){return new l(a.pin,a.tooltip,a.callout,a.callout_container,a.map_id)}});e.exports=l}),null);