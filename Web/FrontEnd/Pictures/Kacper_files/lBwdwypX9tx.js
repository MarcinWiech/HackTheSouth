if (self.CavalryLogger) { CavalryLogger.start_js(["9IcIp"]); }

__d("StringTransformations",[],(function(a,b,c,d,e,f){e.exports={unicodeEscape:function(a){return a.replace(/[^A-Za-z0-9\-\.\:\_\$\/\+\=]/g,function(a){a=a.charCodeAt().toString(16);return"\\u"+("0000"+a.toUpperCase()).slice(-4)})},unicodeUnescape:function(a){return a.replace(/(\\u[0-9A-Fa-f]{4})/g,function(a){return String.fromCharCode(parseInt(a.slice(2),16))})}}}),null);
__d("JSScheduler",["SchedulerFb-Internals_DO_NOT_USE"],(function(a,b,c,d,e,f){"use strict";__p&&__p();var g={unstable_Immediate:b("SchedulerFb-Internals_DO_NOT_USE").unstable_ImmediatePriority,unstable_UserBlocking:b("SchedulerFb-Internals_DO_NOT_USE").unstable_UserBlockingPriority,unstable_Normal:b("SchedulerFb-Internals_DO_NOT_USE").unstable_NormalPriority,unstable_Low:b("SchedulerFb-Internals_DO_NOT_USE").unstable_LowPriority,unstable_Idle:b("SchedulerFb-Internals_DO_NOT_USE").unstable_IdlePriority},h=!1;function i(a,b){var c;j.runWithPriority(a,function(){return c=j.defer(b)});if(!c)throw new Error("Runwith priority failed to set the callback object");return c}var j={priorities:g,getCurrentPriorityLevel:b("SchedulerFb-Internals_DO_NOT_USE").unstable_getCurrentPriorityLevel,runWithPriority:b("SchedulerFb-Internals_DO_NOT_USE").unstable_runWithPriority,defer:function(a){return b("SchedulerFb-Internals_DO_NOT_USE").unstable_scheduleCallback(a)},next:function(a){return b("SchedulerFb-Internals_DO_NOT_USE").unstable_next(a)},getCallbackScheduler:function(){var a=j.getCurrentPriorityLevel();return function(b){return i(a,b)}},scheduleNormalPriCallback:function(a){return i(g.unstable_Normal,a)},scheduleLoggingPriCallback:function(a){return i(g.unstable_Low,a)},scheduleSpeculativeCallback:function(a){return i(g.unstable_Idle,a)},makeSchedulerGlobalEntry:function(){a.ScheduleJSWork=function(a){return function(){for(var c=arguments.length,d=new Array(c),e=0;e<c;e++)d[e]=arguments[e];h?a.apply(void 0,d):b("SchedulerFb-Internals_DO_NOT_USE").unstable_scheduleCallback(function(){h=!0,a.apply(void 0,d),h=!1})}}}};e.exports=j}),null);
__d("WebDevicePerfInfoLogging",["Banzai","JSScheduler","WebDevicePerfInfoData"],(function(a,b,c,d,e,f){"use strict";__p&&__p();function g(a){__p&&__p();var b=document.createElement("canvas");b=b.getContext("webgl")||b.getContext("experimental-webgl");if(!b)return;var c=b.getExtension("WEBGL_debug_renderer_info");if(!c)return;var d=b.getParameter(c.UNMASKED_RENDERER_WEBGL);b=b.getParameter(c.UNMASKED_VENDOR_WEBGL);a.gpu_vendor=b;a.gpu_renderer=d}function h(){var a={};navigator&&navigator.hardwareConcurrency!==void 0&&(a.cpu_cores=navigator.hardwareConcurrency);navigator&&navigator.deviceMemory!==void 0&&(a.ram=navigator.deviceMemory);b("WebDevicePerfInfoData").needsFullUpdate&&g(a);b("Banzai").post("web_device_perf_info_log",a)}a={doLog:function(){(b("WebDevicePerfInfoData").needsFullUpdate||b("WebDevicePerfInfoData").needsPartialUpdate)&&b("JSScheduler").scheduleSpeculativeCallback(h)}};e.exports=a}),null);
__d("WebStorageMonster",["AsyncRequest","Event","StringTransformations","UserActivity","WebStorage","WebStorageMonsterLoggingURI","isEmpty","setTimeoutAcrossTransitions"],(function(a,b,c,d,e,f){__p&&__p();var g=3e5,h=!1;function i(a){var c={};for(var d in a){var e=a.getItem(d),f=b("StringTransformations").unicodeEscape(d);typeof e==="string"&&(c[f]=e.length)}return c}function j(a){var c=b("WebStorage").getLocalStorage();if(!c||!a.keys)return;m._getLocalStorageKeys().forEach(function(b){a.keys.includes(b)&&c.removeItem(b)})}function k(a){var c=b("WebStorage").getLocalStorage();c&&m._getLocalStorageKeys().forEach(function(b){a.some(function(a){return new RegExp(a).test(b)})||c.removeItem(b)})}function l(a){a===void 0&&(a=!1),b("UserActivity").isActive(g)?b("setTimeoutAcrossTransitions")(function(){l(a)},g):m.cleanNow(a)}var m={registerLogoutForm:function(a,c){b("Event").listen(a,"submit",function(a){m.cleanOnLogout(c)})},schedule:function(a){a===void 0&&(a=!1);if(h)return;h=!0;l(a)},cleanNow:function(a){__p&&__p();a===void 0&&(a=!1);var c=Date.now(),d={},e=b("WebStorage").getLocalStorage();e&&(d.local_storage=i(e));e=b("WebStorage").getSessionStorage();e&&(d.session_storage=i(e));e=!b("isEmpty")(d);var f=Date.now();d.logtime=f-c;if(e){f=b("WebStorageMonsterLoggingURI").uri;if(f===null)return null;new(b("AsyncRequest"))(f).setData(d).setHandler(function(c){c=c.getPayload();c.keys&&(c.keys=c.keys.map(b("StringTransformations").unicodeUnescape));a||j(c)}).send()}},cleanOnLogout:function(a){a&&k(a);a=b("WebStorage").getSessionStorage();a&&a.clear()},_getLocalStorageKeys:function(){var a=b("WebStorage").getLocalStorage();return a?Object.keys(a):[]}};e.exports=m}),null);