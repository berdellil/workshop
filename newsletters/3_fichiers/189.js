(window.odspNextWebpackJsonp=window.odspNextWebpackJsonp||[]).push([[189],{1867:function(e,t,n){"use strict";var r=n(1956),i=n(1798),s=n(1799),o=n(44),u=n(230),a=n(30),f=n(69),l=n(962),c=n(1855),h=new RegExp("^Templates$","i"),p=(function(){function e(){}e.isFolder=function(e,t){return t?e&&(e.type===u.e.Folder||e.type===u.e.OneNote):e&&e.type===u.e.Folder};e.isCheckedOut=function(e){return l.e(e)};e.isCheckedOutByUser=function(e,t){return l.n(e,t)};e.isCheckedOutByOther=function(t,n){return e.isCheckedOut(t)&&!e.isCheckedOutByUser(t,n)};e.showCheckedOutByOtherDialog=function(e){return e.requestDialog({title:r.i,component:{name:c.e.tagName,params:{text:r.r}},actions:[{name:i.cancelActionText,execute:function(){return f.n.wrap(2)},icon:new s.e("Cancel"),isDefault:!0}]}).wait().then(function(){return{resultType:o.e.Success}})};e.isPublished=function(t,n){return n.isModerated?t.properties[e.PublishProperty]&&"3"!==t.properties[e.PublishProperty]&&"1"!==t.properties[e.PublishProperty]:0===e.getVersionNoModeration(t,n).minor&&0!==e.getVersionNoModeration(t,n).major};e.needsPublishingReminder=function(t,n){return!e.isPublished(t,n)&&(!e.isPendingApproval(t,n)&&!e.isPageTemplate(t)&&((!t.properties||!t.properties._ScheduledVersion||t.properties.owshiddenversion!==t.properties._ScheduledVersion)&&(a.e.hasItemPermission(t,a.e.editListItems)&&n.enableMinorVersions&&!e.isFolder(t,!0))))};e.isPublishingRelevant=function(t,n){return a.e.hasItemPermission(t,a.e.editListItems)&&n.enableMinorVersions&&!e.isCheckedOut(t)&&!e.isFolder(t,!0)};e.getVersionNoModeration=function(e,t){return t.isModerated?{major:0,minor:0}:this.getVersion(e,t)};e.getVersion=function(t,n){if(t&&t.properties&&t.properties[e.VersionProperty]){var r=Number(t.properties[e.VersionProperty])%512;return{major:Math.floor(Number(t.properties[e.VersionProperty])/512),minor:r}}return{major:0,minor:0}};e.isPendingApproval=function(t,n){return!!n.isModerated&&(t&&t.properties&&t.properties[e.PublishProperty]&&"2"===t.properties[e.PublishProperty])};e.isPageTemplate=function(e){if(!e.id)return!1;var t=e.id.split("/"),n=t.length;return h.test(t[n-2])};e.isApprovalRelevant=function(t,n){return n&&n.isModerated&&!e.isCheckedOut(t)&&a.e.hasItemPermission(t,a.e.editListItems)&&a.e.hasItemPermission(t,a.e.approveItems)};e.FileTypeProperty="FSObjType";e.PublishProperty="_ModerationStatus.";e.VersionProperty="_UIVersion";return e})();t.e=p},1982:function(e,t,n){"use strict";var r=n(7),i=n(8),s=new r.t({name:"IFrameDialog.key",loader:new i.t(function(){return n.ee([306,"ondemand.resx-ondemand"],2400).then(function(e){return e.resourceKey.local})})});t.e=s},2290:function(e,t,n){"use strict";n.d(t,"e",function(){return S});var r=n(0),i=n(1602),s=n(1849),o=n(1827),u=n(1911),a=n(1842),f=n(1828),l=n(1805),c=n(8),h=n(59),p=n(58),d=n(77),v=n(187),m=n(1090),g=n(389),y=n(36),b=(function(e){Object(r.__extends)(t,e);function t(t,n){void 0===t&&(t={});var r=e.call(this,t)||this;r._pageContext=n.pageContext;r._dataRequestor=new n.dataRequestorType({qosName:"VersionControlDataSource"});r._itemUrlHelper=n.itemUrlHelper;r._apiUrlHelper=n.apiUrlHelper;return r}t.prototype.checkOutItem=function(e){var t=this._itemUrlHelper.getItemUrlParts(e.item.key),n=this._apiUrlHelper.build().webByItemUrl(t);n=(n=n.methodWithAliases("GetFileByServerRelativePath",{DecodedUrl:t.serverRelativeItemUrl})).segment("CheckOut");return this._dataRequestor.getData({url:n.toString(),qosName:"CheckOutItem"})};t.prototype.undoCheckOutItem=function(e){var t=this._itemUrlHelper.getItemUrlParts(e.item.key),n=this._apiUrlHelper.build().webByItemUrl(t);n=(n=n.methodWithAliases("GetFileByServerRelativePath",{DecodedUrl:t.serverRelativeItemUrl})).segment("UndoCheckOut");return this._dataRequestor.getData({url:n.toString(),qosName:"UndoCheckOutItem"})};t.prototype.checkInItem=function(e){var t=this._itemUrlHelper.getItemUrlParts(e.item.key),n=this._apiUrlHelper.build().webByItemUrl(t);n=(n=n.methodWithAliases("GetFileByServerRelativePath",{DecodedUrl:t.serverRelativeItemUrl})).methodWithAliases("CheckIn",{comment:e.comments,checkintype:0});return this._dataRequestor.getData({url:n.toString(),qosName:"CheckInItem"})};t.prototype.getVersionHistoryUrl=function(e,t,n){var r=[h.e.escapeUrlForCallback(this._pageContext.webAbsoluteUrl),"/",this._pageContext.layoutsUrl,n?"/DocSetVersions.aspx?ID=":"/Versions.aspx?FileName=",h.e.encodeURIComponent(e),"&IsDlg=1"];if(t){r.push("&list=");r.push(h.e.encodeURIComponent(p.e.normalizeUpper(t,!0)))}return r.join("")};t.prototype.supportsDocSetVersioning=function(){return Object(d.isFeatureEnabled)(d.DocumentSetsModernView)&&Object(d.isFeatureEnabled)(d.UseItemsScopeInTeamSites)};t.dependencies=Object(r.__assign)(Object(r.__assign)({},i.default.dependencies),{pageContext:y.h,apiUrlHelper:m.e,itemUrlHelper:v.u,dataRequestorType:g.n});return t})(i.default),w=Object(c.s)("VersionControlDataSource",b),E=(function(e){Object(r.__extends)(t,e);function t(t,n){void 0===t&&(t={});var r=e.call(this,t,n)||this;r._itemProvider=n.itemProvider;r._dataSource=n.versionControlDataSource;r._store=n.itemsStore;r._operationProvider=n.operationProvider;return r}t.prototype.checkOutItem=function(e){var t,n=this,r=e.item,i=this._store.getItem(e.parentKey),s=this._operationProvider.register({name:r.name,type:o.e.checkOutItem,payloads:{checkOutItem:{parent:i.peek(),item:r}},iconName:r.iconName});s.progress.maximum(1);s.progress.current(0);t=this._dataSource.checkOutItem(e);s.state(a.e.started);return t.then(function(){n._itemProvider.invalidateItem(e.parentKey);s.progress.current(1);s.state(a.e.completed)},function(){s.state(a.e.failed)})};t.prototype.undoCheckOutItem=function(e){var t,n=this,r=e.item,i=this._store.getItem(e.parentKey),s=this._operationProvider.register({name:r.name,type:o.e.undoCheckOutItem,payloads:{undoCheckOutItem:{parent:i.peek(),item:r}},iconName:r.iconName});s.progress.maximum(1);s.progress.current(0);t=this._dataSource.undoCheckOutItem(e);s.state(a.e.started);return t.then(function(){n._itemProvider.invalidateItem(e.parentKey);s.progress.current(1);s.state(a.e.completed)},function(){s.state(a.e.failed)})};t.prototype.checkInItem=function(e){var t,n=this,r=e.item,i=this._store.getItem(e.parentKey),s=this._operationProvider.register({name:r.name,type:o.e.checkInItem,payloads:{checkInItem:{parent:i.peek(),item:r}},iconName:r.iconName});s.progress.maximum(1);s.progress.current(0);t=this._dataSource.checkInItem(e);s.state(a.e.started);return t.then(function(){n._itemProvider.invalidateItem(e.parentKey);s.progress.current(1);s.state(a.e.completed)},function(e){s.state(a.e.failed);try{s.error(new u.e({message:e.message.value}))}catch(e){}})};t.prototype.getVersionHistoryUrl=function(e,t,n){return this._dataSource.getVersionHistoryUrl(e,t,n)};t.prototype.supportsDocSetVersioning=function(){return this._dataSource.supportsDocSetVersioning()};t.dependencies=Object(r.__assign)(Object(r.__assign)({},i.default.dependencies),{itemProvider:l.resourceKey,versionControlDataSource:w,itemsStore:f.t,operationProvider:s.resourceKey});return t})(i.default),S=Object(c.s)("VersionControlProvider",E)},2931:function(e,t,n){"use strict";n.r(t);var r=n(0),i=n(1867),s=n(1795),o=n(57),u=n(93),a=n(1982),f=n(1793),l=n(44),c=n(76),h=n(30),p=n(69),d=n(1806),v=n(2290),m=n(187),g=n(1805),y=n(1841),b=n(2172),w=n(1803),E=n(1802),S=(function(e){Object(r.__extends)(t,e);function t(t,n){void 0===t&&(t={});void 0===n&&(n={});var r=e.call(this,t,n)||this;r.name="VersionHistory";r._urlDataSource=r.resources.consume(u.pe);r._itemUrlHelper=r.resources.consume(m.u);r._itemCommandHelper=r.resources.consume(y.t);r._itemParentHelper=r.resources.consume(E.e);r._itemSelectionHelper=new(r.child(w.e))({allowMultiSelect:!1,canFallback:!1,overrideItem:t.item});return r}t.prototype.onIsAvailable=function(){var e=this._itemSelectionHelper.firstItem();if(e){var t=this.observables.unwrap(this._itemParentHelper.getFacetedAncestorOrSelf(e,"list"));return this._urlDataSource.getPageType()!==c.e.TextFileEditor&&!!t&&!!t.list&&this._itemCommandHelper.isCommandSupported(e,b.i)&&!this._isRemoteWeb(t)&&!this._isFolder(e)&&!(!t.list.enableVersions&&!t.list.isModerated)&&3!==e.itemStatus&&4!==e.itemStatus&&h.e.hasItemPermission(e,h.e.viewVersions)}return!1};t.prototype.onExecute=function(e,t){return Object(r.__awaiter)(this,void 0,p.n,function(){var e,t,n,i,s,u,c,h,m;return Object(r.__generator)(this,function(r){switch(r.label){case 0:e=this.resources.consume(d.e);t=this.resources.consume(g.resourceKey);n=this.resources.consume(v.e);i=this._itemSelectionHelper.currentItem();return[4,this._itemSelectionHelper.resolveFirst()];case 1:if(!(s=r.sent()))return[2,p.n.resolve({resultCode:"EmptySelection",resultType:l.e.Failure})];if(!(u=this.observables.peekUnwrap(this._itemParentHelper.getFacetedAncestorOrSelf(s,"list"))).list)return[2,p.n.resolve({resultCode:"InvalidExecution",resultType:l.e.Failure})];c=n.supportsDocSetVersioning()&&s.isDocSet;h=u.list.isDocumentLibrary&&!c?"":u.list.id;m=c?this._getServerId(s):s.id;return[2,e.requestDialog({title:o.D,size:"XLarge",control:Object(f.i)(a.e,{componentUrl:n.getVersionHistoryUrl(m,h,c),showInDialog:!0,heightOffset:.5,forceSharePointScrollbar:!0}),actions:[]}).wait().then(function(){t.invalidateItem(i.key);return{resultType:l.e.Success}})]}})})};t.prototype._isRemoteWeb=function(e){return this._itemUrlHelper.getItemUrlParts(e.key).isCrossDomain};t.prototype._isFolder=function(e){return(!(this.resources.consume(v.e).supportsDocSetVersioning()&&!!this._getServerId(e))||!e.isDocSet)&&i.e.isFolder(e,!0)};t.prototype._getServerId=function(e){return e&&e.properties&&e.properties.ID||""};return t})(s.e);t.default=S}}]);