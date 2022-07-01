if (self.CavalryLogger) { CavalryLogger.start_js_script(document.currentScript); }/*FB_PKG_DELIM*/

__d("PolarisUserListItem",["cx","fbt","FastLink","PolarisAssetManagerGlyphMapping","PolarisFollowButtonContainer","PolarisGenericStrings","PolarisIGCoreBox","PolarisIGCoreConstants","PolarisIGCoreHeartFilledIcon","PolarisIGCoreIconButton","PolarisIGCoreListItem","PolarisIGCoreText","PolarisIGCoreVerifiedBadge","PolarisLinkBuilder","PolarisUserAvatar","PolarisUserAvatarWithStories","PolarisUserHoverCard","PolarisUserLinkWithHoverCard","PolarisrelationshipSelectors","PolarisuseIGCorePreviousValue","PolarisuserSelectors","nullthrows","react","react-redux-wwwig"],(function(a,b,c,d,e,f,g,h,i){var j=d("react");b=d("react");var k=b.useCallback,l=b.useEffect,m=b.useState,n=function(a){var b=a.onClick;a=a.user;var e=a.isVerified;a=a.username;return a===void 0?null:j.jsx(c("FastLink"),{href:d("PolarisLinkBuilder").buildUserLink(a),onClick:b,title:a,children:j.jsx(c("PolarisIGCoreBox"),{direction:"row",children:j.jsx(c("PolarisIGCoreText").BodyEmphasized,{dangerouslySetClassName:{__className:"_ab58"},display:"truncated",children:j.jsxs(c("PolarisIGCoreBox"),{alignItems:"center",direction:"row",children:[a,e===!0&&j.jsx(c("PolarisIGCoreBox"),{marginStart:2,children:j.jsx(c("PolarisIGCoreVerifiedBadge"),{size:"small"})})]})})})})};e=function(a){var b=a.analyticsContext,e=a.avatarSize;e=e===void 0?"medium":e;var f=a.avatarTriggerAnalyticsContext;f=f===void 0?null:f;var g=a.borderlessFollowButton,h=a.entryPoint,o=a.hasLiked;o=o===void 0?!1:o;var p=a.hideFollowButton,q=a.hideName,r=a.hideStoryRings,s=a.hoverPositionType;s=s===void 0?null:s;var t=a.id,u=a.isVisible,v=a.onDismiss,w=a.onFollowClick,x=a.onScrollEnter,y=a.onUsernameClick,z=a.position,A=a.relationship,B=a.truncateText,C=a.user,D=a.usernameTriggerAnalyticsContext;D=D===void 0?null:D;a=a.viewer;var E=c("PolarisuseIGCorePreviousValue")(u),F=m(!0),G=F[0],H=F[1];F=k(function(){w&&A&&w({index:z,userId:t,followedByViewer:d("PolarisrelationshipSelectors").followedByViewer(A)})},[t,w,z,A]);var I=k(function(){x({index:z,userId:t})},[t,x,z]),J=k(function(){y({index:z,userId:t})},[t,y,z]);l(function(){E!==!0&&u&&I()},[I,u,E]);p=!p&&(a==null?void 0:a.id)!==C.id;a=r?j.jsxs(c("PolarisIGCoreBox"),{children:[j.jsx(c("PolarisUserAvatar"),{profilePictureUrl:c("nullthrows")(C.profilePictureUrl),size:c("PolarisIGCoreConstants").AVATAR_SIZES[e],username:C.username}),o&&j.jsx("div",{className:"_ab59",children:j.jsx(c("PolarisIGCoreHeartFilledIcon"),{alt:i._(/*FBT_CALL*/"Liked"/*FBT_CALL*/),color:"ig-badge",size:12})})]}):j.jsx(c("PolarisUserAvatarWithStories"),{profilePictureUrl:c("nullthrows")(C.profilePictureUrl),size:c("PolarisIGCoreConstants").AVATAR_SIZES[e],storyEntrypoint:h,username:C.username});r=null;v!=null&&(r=function(){H(!1),v(t)});o=j.jsxs(j.Fragment,{children:[j.jsx(c("PolarisFollowButtonContainer"),{analyticsContext:b,borderless:g,onClick:F,relationship:A,userId:C.id,useSmallText:g}),r!=null&&j.jsx(c("PolarisIGCoreBox"),{marginStart:3,right:!0,children:j.jsx(c("PolarisIGCoreIconButton"),{alt:d("PolarisGenericStrings").DISMISS_TEXT,icon:d("PolarisAssetManagerGlyphMapping").ICONS.GREY_CLOSE,noMinSize:!0,onClick:r})})]});return G&&j.jsx(c("PolarisIGCoreListItem"),{action:p?o:void 0,context:C.suggestionDescription,icon:s!=null&&f!=null?j.jsx(c("PolarisUserHoverCard"),{display:"block",positionType:s,triggerAnalyticsContext:f,userId:C.id,children:a}):a,subtitle:q?null:C.fullName,title:s!=null&&D!=null?j.jsx(c("PolarisUserLinkWithHoverCard"),{color:"ig-primary-text",onClick:J,positionType:s,triggerAnalyticsContext:D,userId:C.id,username:(e=C==null?void 0:C.username)!=null?e:""}):j.jsx(n,{onClick:J,user:C}),truncateText:B})};function a(a,b){return{relationship:d("PolarisrelationshipSelectors").getRelationship(a.relationships,b.id),user:d("PolarisuserSelectors").getUserById(a,b.id),viewer:d("PolarisuserSelectors").getViewer(a)}}f=d("react-redux-wwwig").connect(a)(e);g["default"]=f}),98);
__d("PolarisUserList",["PolarisErrorBoundaryWithHoldout","PolarisIGCoreBox","PolarisIGCoreListItemPlaceholder","PolarisIGCoreSpinner","PolarisIGVirtualList","PolarisUserListItem","react"],(function(a,b,c,d,e,f,g){var h=d("react");a=10;var i=65;b=function(a){babelHelpers.inheritsLoose(b,a);function b(){var b,d;for(var e=arguments.length,f=new Array(e),g=0;g<e;g++)f[g]=arguments[g];return(b=d=a.call.apply(a,[this].concat(f))||this,d.$1=h.createRef(),d.$2=function(a){var b=d.props.onFollowClick;b&&b(a)},d.$3=function(a){var b=a.index;a=a.isVisible;var e=d.props,f=e.analyticsContext,g=e.avatarSize,i=e.avatarTriggerAnalyticsContext,j=e.borderlessFollowButton,k=e.entryPoint,l=e.hideName,m=e.hoverPositionType,n=e.isLoading,o=e.likers,p=e.truncateListItemText,q=e.userIds;e=e.usernameTriggerAnalyticsContext;return q.length===0?n?h.jsx(c("PolarisIGCoreListItemPlaceholder"),{size:g},b):null:h.jsx(c("PolarisErrorBoundaryWithHoldout"),{children:h.jsx(c("PolarisUserListItem"),{analyticsContext:f,avatarSize:g,avatarTriggerAnalyticsContext:i,borderlessFollowButton:j,entryPoint:k,hasLiked:o==null?void 0:o.has(q[b]),hideFollowButton:d.props.hideFollowButton,hideName:l,hideStoryRings:d.props.hideStoryRings,hoverPositionType:m||"absolute",id:q[b],isVisible:a,onDismiss:d.props.onDismiss,onFollowClick:d.$2,onScrollEnter:d.$4,onUsernameClick:d.$5,position:b,truncateText:p,usernameTriggerAnalyticsContext:e})},q[b])},d.$4=function(a){var b=d.props.onScrollChange;b&&b(a)},d.$5=function(a){var b=d.props.onUsernameClick;b&&b(a)},b)||babelHelpers.assertThisInitialized(d)}var d=b.prototype;d.componentDidUpdate=function(a){this.$1.current!=null&&this.props.userIds.length===this.props.initialRenderCount&&a.userIds.length===0&&this.$1.current.forceUpdate()};d.render=function(){var a=this.props,b=a.containerSize,d=a.initialRenderCount,e=a.isLoading,f=a.onScroll;a=a.userIds;return h.jsxs(h.Fragment,{children:[h.jsx(c("PolarisIGVirtualList"),{containerSize:b,estimatedItemSize:i,initialRenderCount:d,itemCount:a.length||d,onScroll:f,pageletName:"UserList",ref:this.$1,renderer:this.$3,style:e&&a.length===0?{overflowY:"hidden"}:{}}),a.length>0&&e&&h.jsx(c("PolarisIGCoreBox"),{alignItems:"center",marginTop:4,children:h.jsx(c("PolarisIGCoreSpinner"),{size:"medium"})})]})};return b}(h.PureComponent);b.defaultProps={avatarTriggerAnalyticsContext:null,borderlessFollowButton:!1,containerSize:"auto",entryPoint:"unknown",hideFollowButton:!1,hideName:!1,hideStoryRings:!1,hoverPositionType:null,initialRenderCount:a,isLoading:!1,usernameTriggerAnalyticsContext:null};g["default"]=b}),98);