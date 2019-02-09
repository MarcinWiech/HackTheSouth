if (self.CavalryLogger) { CavalryLogger.start_js(["Qcm0B"]); }

__d("MessengerTypeaheadView.react",["cx","Bootloader","MessengerContactAdapters","MessengerContactList.react","MessengerSearchFunnelLoggerConstants","MessengerSearchLoggerUtil","MessengerTypeaheadUtils","MessengerUniversalSearchFunnelLoggerConstants","React","compactArray","immutable","joinClasses"],(function(a,b,c,d,e,f,g){"use strict";__p&&__p();var h;c=b("React").PropTypes;d=babelHelpers.inherits(a,b("React").PureComponent);h=d&&d.prototype;function a(){var a,c;for(var d=arguments.length,e=new Array(d),f=0;f<d;f++)e[f]=arguments[f];return c=(a=h.constructor).call.apply(a,[this].concat(e)),this.state={isExpectingEntriesUpdate:!1,localEntries:[]},this.$1=b("immutable").OrderedMap(),this.$2=function(a,b){this.props.onSelect&&this.props.onSelect(a,b)}.bind(this),c}a.prototype.componentDidUpdate=function(a,c){__p&&__p();this.$1=b("MessengerTypeaheadUtils").buildListSections(this.props.entries,this.props.queryString);if(a.isLoading&&!this.props.isLoading&&this.props.queryString!==""){this.$3({name:b("MessengerSearchFunnelLoggerConstants").FETCHED_STATE_IMPRESSION_LIST,queryString:this.props.queryString,entries:this.props.entries.map(function(a){return a.getUniqueID()})});var d=this.$1.mapEntries(function(a){var d=a[0];a=a[1];a=a.map(function(a){var e=a.getUniqueID();return{result_fbid:e,result_type:b("MessengerSearchLoggerUtil").getLoggingTypeFromMercuryType(a.getType()),rank_section:d.toString(),data_source:[c.localEntries.includes(e)?b("MessengerUniversalSearchFunnelLoggerConstants").SOURCES.LOCAL:b("MessengerUniversalSearchFunnelLoggerConstants").SOURCES.SERVER_XCONTROLLER]}});return[d.toString(),b("compactArray")(a)]}),e=[];d.forEach(function(a){e=e.concat(a)});var f=b("immutable").OrderedMap();e.forEach(function(a){f=f.set(a.result_fbid,a)});b("Bootloader").loadModules(["MessengerUniversalSearchFunnelLogger"],function(a){a.logImpressions(f,this.props.queryString,b("MessengerUniversalSearchFunnelLoggerConstants").RESULT_SURFACES.TYPEAHEAD,b("MessengerUniversalSearchFunnelLoggerConstants").SOURCES.LOCAL_AND_SERVER)}.bind(this),"MessengerTypeaheadView.react");this.setState({isExpectingEntriesUpdate:!1})}else if(a.isLoading&&this.state.isExpectingEntriesUpdate){d=this.props.entries.map(function(a){return a.getUniqueID()});this.$3({name:b("MessengerSearchFunnelLoggerConstants").LOADING_STATE_IMPRESSION_LIST,queryString:this.props.queryString,entries:d});b("Bootloader").loadModules(["MessengerUniversalSearchFunnelLogger"],function(a){var c=this.props.entries.map(function(a){var c=a.getUniqueID();a=a.getType();return[c,{result_fbid:c,result_type:b("MessengerSearchLoggerUtil").getLoggingTypeFromMercuryType(a),rank_section:b("MessengerUniversalSearchFunnelLoggerConstants").SOURCES.LOCAL,data_source:[b("MessengerUniversalSearchFunnelLoggerConstants").SOURCES.LOCAL]}]});c=b("immutable").OrderedMap(c);a.logImpressions(c,this.props.queryString,b("MessengerUniversalSearchFunnelLoggerConstants").RESULT_SURFACES.TYPEAHEAD,b("MessengerUniversalSearchFunnelLoggerConstants").SOURCES.LOCAL)}.bind(this),"MessengerTypeaheadView.react");this.setState({isExpectingEntriesUpdate:!1,localEntries:d})}a.queryString!==this.props.queryString&&this.setState({isExpectingEntriesUpdate:!0})};a.prototype.render=function(){return b("React").createElement(b("MessengerContactList.react"),{controlleeID:this.props.controlleeID,className:b("joinClasses")(this.props.className,"_4p-s"),contactAdapter:b("MessengerContactAdapters").fromSearchableEntry,hasHoverState:this.props.hasHoverState,highlightedEntry:this.props.highlightedEntry,isLoading:this.props.isLoading,listSections:this.$1,onHighlight:this.props.onHighlight,onRenderHighlight:this.props.onRenderHighlight,onScrollIntoView:this.props.onScrollIntoView,onSelect:this.$2,originalEntryIDs:this.props.originalEntryIDs,invitedEntryIDs:this.props.invitedEntryIDs,queryString:this.props.queryString,selectedEntryIDs:this.props.selectedEntryIDs,showPresence:!1,viewer:this.props.viewer})};a.prototype.$3=function(a){b("Bootloader").loadModules(["MessengerSearchFunnelLogger"],function(c){switch(a.name){case b("MessengerSearchFunnelLoggerConstants").LOADING_STATE_IMPRESSION_LIST:c.logLoadingStateQuery(b("MessengerSearchFunnelLoggerConstants").NAME,a.queryString,a.entries);break;case b("MessengerSearchFunnelLoggerConstants").FETCHED_STATE_IMPRESSION_LIST:c.logUpdateQuery(b("MessengerSearchFunnelLoggerConstants").NAME,b("MessengerSearchFunnelLoggerConstants").FETCHED_STATE_IMPRESSION_LIST,a.queryString,a.entries);break}},"MessengerTypeaheadView.react")};a.propTypes={controlleeID:c.string,entries:c.array.isRequired,hasHoverState:c.bool,highlightedEntry:c.object,isLoading:c.bool,onHighlight:c.func,onRenderHighlight:c.func,onScrollIntoView:c.func,onSelect:c.func,originalEntryIDs:c.instanceOf(b("immutable").Set),invitedEntryIDs:c.instanceOf(b("immutable").Set),queryString:c.string,selectedEntryIDs:c.instanceOf(b("immutable").Set),viewer:c.string.isRequired};e.exports=a}),null);
__d("CRMSalesOrg",[],(function(a,b,c,d,e,f){e.exports=Object.freeze({UNKNOWN:"unknown",GPA:"GPA",GSO:"GSO",SMB:"SMB"})}),null);