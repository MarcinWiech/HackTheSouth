if (self.CavalryLogger) { CavalryLogger.start_js(["LsKDR"]); }

__d("SphericalPhotoManagerLoader",["SphericalPhotoManager"],(function(a,b,c,d,e,f){"use strict";e.exports=b("SphericalPhotoManager").module}),null);
__d("MqttSkywalkerManager",["regeneratorRuntime","CurrentUser","FBMqttChannel","RTIFriendFanoutConfig","SkywalkerLogger","SkywalkerUtils","StreamStateMachine","gkx","promiseDone"],(function(a,b,c,d,e,f){__p&&__p();var g="/pubsub",h={t:"pong"};function i(a,b,c,d){"use strict";this.$1=a,this.$2=b,this.$3=c,this.$4=d,this.$5=Date.now(),this.$8()}i.prototype.unsubscribe=function(){"use strict";return o.unsubscribe(this)};i.prototype.getViewId=function(){"use strict";return this.$1};i.prototype.getTopic=function(){"use strict";return this.$2};i.prototype.getMessageListener=function(){"use strict";return this.$3};i.prototype.getSubscribeOptions=function(){"use strict";return this.$4};i.prototype.getCreationTime=function(){"use strict";return this.$5};i.prototype.getStreamStateMachine=function(){"use strict";return this.$6};i.prototype.getFriendFanoutSubscription=function(){"use strict";return this.$7};i.prototype.getContext=function(){"use strict";return this.$4.context};i.prototype.setFriendFanoutSubscription=function(a){"use strict";this.$7=a};i.prototype.$8=function(){"use strict";if(!j())return;this.$6=new(b("StreamStateMachine"))(n(this.$4.context));this.$4.gqlsLifecycleHandler&&this.$6.setLifecycleHandler(this.$4.gqlsLifecycleHandler);this.$6.start()};function a(){"use strict";this.$1=new Map(),this.$2=0,this.$3=new(b("SkywalkerLogger"))({gateway:"mqtt"}),this.$4=b("FBMqttChannel"),this.$5=this.$4.getConnectionState()==="Connected",this.$4.subscribeChannelEvents({onMQTTStateChanged:function(a){return this.$7(a)}.bind(this),onJSError:function(a){return this.$8(a)}.bind(this)}),this.$4.subscribe(g,function(a){return this.$9(a)}.bind(this))}a.prototype.subscribe=function(a,c,d){__p&&__p();d===void 0&&(d={});d.context=b("SkywalkerUtils").patchContext(d.context);var e=this.$10(a,c,d),f=a.substr(0,a.lastIndexOf("/"));if(b("RTIFriendFanoutConfig").passFriendFanoutSubscribeGK&&b("RTIFriendFanoutConfig").topicPrefixes.indexOf(f)>=0){f=l(a);a={context:d.context};d=this.$10(f,c,a);e.setFriendFanoutSubscription(d)}return e};a.prototype.unsubscribe=function(a){"use strict";__p&&__p();var c,d;return b("regeneratorRuntime").async(function(e){__p&&__p();while(1)switch(e.prev=e.next){case 0:c=this.$11(a);d=a.getFriendFanoutSubscription();if(!(d!=null)){e.next=5;break}e.next=5;return b("regeneratorRuntime").awrap(this.$11(d));case 5:e.next=7;return b("regeneratorRuntime").awrap(c);case 7:return e.abrupt("return",e.sent);case 8:case"end":return e.stop()}},null,this)};a.prototype.isSubscribed=function(a){"use strict";return this.$1.has(a.getViewId())};a.prototype.getSubscriptions=function(){"use strict";return Array.from(this.$1.values())};a.prototype.setOnMqttError=function(a){"use strict";this.$6=a};a.prototype.$9=function(a){"use strict";__p&&__p();a=this.$12(a);if(a==null)return;var b=a.topic,c=this.$1.get(a.view_id);if(c==null){var d="No subscription exists for this topic";for(var e=this.$1.values(),f=Array.isArray(e),g=0,e=f?e:e[typeof Symbol==="function"?Symbol.iterator:"@@iterator"]();;){var h;if(f){if(g>=e.length)break;h=e[g++]}else{g=e.next();if(g.done)break;h=g.value}h=h;if(b===h.getTopic()){h=h.getViewId();d="Found subscription with view ID "+h+", payload has "+a.view_id;break}}this.$3.warn({event_name:"missing_subscription",topic:b,message:d});return}if(!k(b,c.getTopic())){h="View ID matches subscription of topic "+c.getTopic();this.$3.error({event_name:"topic_view_id_mismatch",topic:b,message:h});return}this.$3.log({event_name:"payload_received",topic:b});if(j()&&m(a)){this.$3.log({event_name:"heartbeat_received",topic:b});g=c.getStreamStateMachine();g&&g.ping();return}c.getMessageListener()(a)};a.prototype.$10=function(a,c,d){"use strict";var e=++this.$2;a=new i(e,a,c,d);this.$1.set(e,a);this.$4.getConnectionState()==="Connected"&&b("promiseDone")(this.$13(a));return a};a.prototype.$11=function(a){__p&&__p();var c,d,e,f,g;return b("regeneratorRuntime").async(function(i){__p&&__p();while(1)switch(i.prev=i.next){case 0:d=a.getTopic();e=a.getViewId();this.$3.log({event_name:"unsubscribe_attempt",topic:d});this.$1["delete"](e);f=a.getSubscribeOptions();f.onUnsubscribeEager&&f.onUnsubscribeEager();g={unsub:[d],viewId:(c={},c[d]=e,c)};i.next=9;return b("regeneratorRuntime").awrap(this.$14(g).then(function(){this.$3.log({event_name:"unsubscribe_success",topic:d});return{data:h,error:null}}.bind(this),function(a){var b="unsubscribe_failure";a=a.toString();this.$3.log({event_name:b,topic:d,message:a});return{data:null,error:a}}.bind(this)).then(function(b){f.onUnsubscribe&&f.onUnsubscribe(b);if(j()){b=a.getStreamStateMachine();b&&b.kill()}}));case 9:return i.abrupt("return",i.sent);case 10:case"end":return i.stop()}},null,this)};a.prototype.$13=function(a){__p&&__p();var c,d,e,f,g,i;return b("regeneratorRuntime").async(function(j){__p&&__p();while(1)switch(j.prev=j.next){case 0:d=a.getTopic();e=a.getViewId();f=a.getSubscribeOptions();g={sub:[d],viewId:(c={},c[d]=e,c)};f.context!=null&&(g.context=(i={},i[d]=f.context,i));this.$3.log({event_name:"subscribe_attempt",topic:d});j.next=8;return b("regeneratorRuntime").awrap(this.$14(g).then(function(){this.$3.log({event_name:"subscribe_success",topic:d});return{data:h,error:null}}.bind(this),function(a){var b="subscribe_failure";a=a.toString();this.$3.log({event_name:b,topic:d,message:a});return{data:null,error:a}}.bind(this)).then(function(a){return f.onSubscribe&&f.onSubscribe(a)}));case 8:return j.abrupt("return",j.sent);case 9:case"end":return j.stop()}},null,this)};a.prototype.$14=function(a){"use strict";return b("regeneratorRuntime").async(function(c){while(1)switch(c.prev=c.next){case 0:c.next=2;return b("regeneratorRuntime").awrap(this.$4.publish(g,JSON.stringify(a)));case 2:return c.abrupt("return",c.sent);case 3:case"end":return c.stop()}},null,this)};a.prototype.$12=function(a){"use strict";__p&&__p();try{a=JSON.parse(a);if(a.raw==null){this.$3.error({event_name:"payload_parse_error",message:"Missing Skywalker payload object"});return null}a=JSON.parse(a.raw);var b=["topic","payload","view_id"];for(var c=0;c<b.length;c++){var d=b[c];if(!Object.prototype.hasOwnProperty.call(a,d)){this.$3.error({event_name:"payload_parse_error",message:"Missing Skywalker "+d+" field in payload"});return null}}return a}catch(a){this.$3.error({event_name:"payload_parse_error",message:a.toString()});return null}};a.prototype.$7=function(a){"use strict";__p&&__p();if(a!=="Connected")return;this.$5=!0;for(var a=this.$1,c=Array.isArray(a),d=0,a=c?a:a[typeof Symbol==="function"?Symbol.iterator:"@@iterator"]();;){var e;if(c){if(d>=a.length)break;e=a[d++]}else{d=a.next();if(d.done)break;e=d.value}e=e;e[0];e=e[1];b("promiseDone")(this.$13(e))}};a.prototype.$8=function(a){"use strict";var b=a!=null?JSON.stringify(a):null;this.$3.log({event_name:"transport_error",message:b});this.$5||(this.$3.log({event_name:"fallback_error",message:b}),this.$6&&this.$6(a))};function j(){return b("gkx")("676931")}function k(a,b){return a===b||b===l(a)}function l(a){return a+"_user_id_"+b("CurrentUser").getID()}function m(a){try{a=JSON.parse(a.payload);return a!=null&&a.heartbeat!=null}catch(a){return!1}}function n(a){if(a==null||a.transformContext==null)return!1;try{a=JSON.parse(a.transformContext);if(a.serializedQueryParameters==null)return!1;a=JSON.parse(a.serializedQueryParameters);return a!=null&&a["%options"]!=null&&a["%options"].heartbeat!=null}catch(a){return!1}}var o=new a();e.exports=o}),null);