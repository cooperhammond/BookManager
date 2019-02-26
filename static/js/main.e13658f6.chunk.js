(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{162:function(e,t,n){e.exports=n(397)},182:function(e,t){},184:function(e,t){},216:function(e,t){},217:function(e,t){},23:function(e,t,n){"use strict";var a=n(159),o=new a.Dispatcher;t.a=o},28:function(e,t,n){"use strict";var a=n(69),o=n.n(a);t.a=o()({CREATE_ITEM:"CREATE_ITEM",READ_ITEMS:"READ_ITEMS",UPDATE_ITEM:"UPDATE_ITEM",DELETE_ITEM:"DELETE_ITEM"})},286:function(e,t){},380:function(e,t,n){},382:function(e,t,n){},384:function(e,t,n){},386:function(e,t,n){},388:function(e,t,n){},390:function(e,t,n){},392:function(e,t,n){},395:function(e,t,n){},397:function(e,t,n){"use strict";n.r(t);var a=n(0),o=n.n(a),i=n(158),s=n.n(i),c=n(12),r=n(13),u=n(15),l=n(14),d=n(16),m=n(1),h=n(23),p=n(69),b=n.n(p)()({FOCUS_SWITCHED:"VIEW_CHANGED",POPUP_CLOSED:"POPUP_CLOSED",POPUP_OPENED:"POPUP_OPENED"}),f={changeView:function(e){h.a.dispatch({type:b.VIEW_CHANGED,args:e})},closePopup:function(){h.a.dispatch({type:b.POPUP_CLOSED})},openPopup:function(e){h.a.dispatch({type:b.POPUP_OPENED,action:e})}},g=n(36),v=n(43),y=n.n(v),E=n(7),k={student:"student",book:"book",code:"code"},C={general:"general",create:"create",update:"update"},O={student:"STUDENTS",book:"BOOKS",code:"CODES"},T=C.general,j=k.student,I=null,N=!1,_=[],w=U(),M=y()({},g.EventEmitter.prototype,{getFocusScope:function(){return T},getDisplayTitle:function(){return w},getItemType:function(){return j},getFocusItem:function(){return I},getGeneralDisplayTitle:function(e){return O[e]},getPastFocusItem:function(e){return _[e]},showPopup:function(){return N},emitChange:function(){this.emit("change")},addChangeListener:function(e){this.on("change",e)},removeChangeListener:function(e){this.removeListener("change",e)}});M.dispatchToken=h.a.register(function(e){switch(e.type){case b.VIEW_CHANGED:var t=e.args;t!=={}&&(S(t),M.emitChange());break;case b.POPUP_CLOSED:N=!1,S({newScope:"general"}),M.emitChange();break;case b.POPUP_OPENED:Object.values(C).includes(e.action)&&S({newScope:e.action}),M.emitChange()}});var P=M;function S(e){var t=e.newScope,n=e.newItemType,a=e.itemId,o=e.itemIndex;Object.values(C).includes(t)&&(N=(T=t)===C.create||T===C.update),Object.values(k).includes(n)&&(j=n),a?I=E.a.getItemById(j,a):o?I=E.a.getItemByIndex(j,o):(I&&_.unshift(I),I=null),U(),M.emitChange()}function U(){if(T===C.general)w=O[j];else if(T===C.update){var e=I||_[0];j===k.student?w="".concat(e.lastName,", ").concat(e.firstName):j===k.book?w="".concat(e.title," by ").concat(e.author):j===k.code&&(w="Code: ".concat(e.code))}return w}var D=function(e){function t(e){var n;return Object(c.a)(this,t),(n=Object(u.a)(this,Object(l.a)(t).call(this,e))).state={isPressed:!1,isHighlighted:!1},n.handleClick=n.handleClick.bind(Object(m.a)(Object(m.a)(n))),n.onMouseDown=n.onMouseDown.bind(Object(m.a)(Object(m.a)(n))),n.onMouseUp=n.onMouseUp.bind(Object(m.a)(Object(m.a)(n))),n._onChange=n._onChange.bind(Object(m.a)(Object(m.a)(n))),n}return Object(d.a)(t,e),Object(r.a)(t,[{key:"handleClick",value:function(){f.changeView({newScope:this.props.focusScope,newItemType:this.props.itemType})}},{key:"onMouseDown",value:function(){this.setState({isPressed:!0})}},{key:"onMouseUp",value:function(){this.setState({isPressed:!1})}},{key:"componentDidMount",value:function(){P.addChangeListener(this._onChange),this._onChange()}},{key:"componentWillUnmount",value:function(){P.removeChangeListener(this._onChange)}},{key:"_onChange",value:function(){P.getItemType()===this.props.itemType&&P.getFocusScope()===this.props.focusScope?this.setState({isHighlighted:!0}):this.setState({isHighlighted:!1})}},{key:"render",value:function(){return function(e,t){var n="button",a="selector";return t.isPressed&&(n+=" pressed"),t.isHighlighted&&(n+=" highlighted",a+=" highlighted"),o.a.createElement("div",null,o.a.createElement("div",{className:a}),o.a.createElement("div",{className:n,onClick:this.handleClick,onMouseDown:this.onMouseDown,onMouseUp:this.onMouseUp,onMouseLeave:this.onMouseUp},o.a.createElement("img",{className:"icon",alt:e.displayName,src:e.icon}),o.a.createElement("div",{className:"text"},e.displayName)))}.call(this,this.props,this.state)}}]),t}(a.Component),L=(n(380),function(e){function t(){return Object(c.a)(this,t),Object(u.a)(this,Object(l.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(r.a)(t,[{key:"render",value:function(){return function(){return o.a.createElement("div",{className:"sidebar floating"},o.a.createElement(D,{icon:"assets/icons/student.svg",displayName:"Students",itemType:"student",focusScope:"general"}),o.a.createElement("hr",{className:"sidebar-line"}),o.a.createElement(D,{icon:"assets/icons/book.svg",displayName:"Books",itemType:"book",focusScope:"general"}),o.a.createElement("hr",{className:"sidebar-line"}),o.a.createElement(D,{icon:"assets/icons/code.svg",displayName:"Codes",itemType:"code",focusScope:"general"}))}.call(this,this.props,this.state)}}]),t}(a.Component)),A=(n(382),function(e,t){var n=this,a=t.labels.map(function(e,t){return o.a.createElement("th",{key:e+t},e)}),i=t.rows.map(function(t,a){var i;return i=e.data?e.data[a]._id:a,o.a.createElement("tr",{"data-index":i,key:t+a,onClick:n.onItemClick},t.map(function(e,t){return/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@(([[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(String(e).toLowerCase())?o.a.createElement("td",{key:e+""+t,onClick:function(e){return e.stopPropagation()}},o.a.createElement("a",{href:"mailto:".concat(e)},e)):o.a.createElement("td",{"data-index":i,key:e+""+t},e)}))});return 0!==i.length?o.a.createElement("table",{className:"focus-table"},o.a.createElement("thead",null,o.a.createElement("tr",null,a)),o.a.createElement("tbody",null,i)):o.a.createElement("div",{className:"no-item-title-wrapper"},o.a.createElement("div",{className:"no-item-title"},"There are no ",t.itemType,"s",this.props.itemType?" associated":"","."))});var x=function(e){function t(e){var n;return Object(c.a)(this,t),(n=Object(u.a)(this,Object(l.a)(t).call(this,e))).state={labels:[],rows:[]},n._onChange=n._onChange.bind(Object(m.a)(Object(m.a)(n))),n.onItemClick=n.onItemClick.bind(Object(m.a)(Object(m.a)(n))),n}return Object(d.a)(t,e),Object(r.a)(t,[{key:"_onChange",value:function(){var e=this.props.itemType?this.props.itemType:P.getItemType(),t=this.props.data?this.props.data:E.a.getItems(e),n=[],a=[],o=[];if("student"===e?(n=["Name","Email","Checked Out Books"],a=[function(e){return"".concat(e.lastName,", ").concat(e.firstName)},"email","codes"]):"book"===e?(n=["Title","Total Codes","Total Readers"],a=["title","codes","readers"]):"code"===e&&(n=["Associated Book","Checkout Code"],"code"===this.props.itemType&&"student"===P.getItemType()||(n[2]="User"),a=[function(e){return E.a.getItemById("book",e.book).title},"code",function(e){if(e.student){var t=E.a.getItemById("student",e.student);return"".concat(t.lastName,", ").concat(t.firstName)}return"None"}]),t&&n!==[]&&a!==[])for(var i=0;i<t.length;i++){for(var s=t[i],c=[],r=0;r<n.length;r++){var u,l=a[r];"string"===typeof l?("object"===typeof(u=s[l])&&(u=u.length),c.push(u)):"function"===typeof l&&(u=l(s),c.push(u))}o.push(c)}this._mounted&&this.setState({labels:n,rows:o,itemType:e})}},{key:"onItemClick",value:function(e){var t=e.target,n={newScope:"update",newItemType:this.props.itemType?this.props.itemType:P.getItemType()};this.props.data?n.itemId=t.dataset.index:n.itemIndex=t.dataset.index,f.changeView(n)}},{key:"componentDidMount",value:function(){this._mounted=!0,P.addChangeListener(this._onChange),E.a.addChangeListener(this._onChange),this._onChange()}},{key:"componentWillUnmount",value:function(){this._mounted=!1,P.removeChangeListener(this._onChange),E.a.removeChangeListener(this._onChange)}},{key:"render",value:function(){return A.call(this,this.props,this.state)}}]),t}(a.Component),R=function(e){function t(e){var n;return Object(c.a)(this,t),(n=Object(u.a)(this,Object(l.a)(t).call(this,e))).state={isPressed:!1,isHovered:!1},n.onMouseDown=n.onMouseDown.bind(Object(m.a)(Object(m.a)(n))),n.onMouseUp=n.onMouseUp.bind(Object(m.a)(Object(m.a)(n))),n}return Object(d.a)(t,e),Object(r.a)(t,[{key:"onMouseDown",value:function(){this.setState({isPressed:!0})}},{key:"onMouseUp",value:function(){this.setState({isPressed:!1})}},{key:"render",value:function(){return function(e,t){var n=e.class;return t.isPressed&&(n+=" pressed"),o.a.createElement("div",null,o.a.createElement("div",{className:"".concat(e.class,"-wrapper")},o.a.createElement("div",{className:n,onClick:e.onClick,onMouseDown:this.onMouseDown,onMouseUp:this.onMouseUp,onMouseLeave:this.onMouseUp},o.a.createElement("div",{className:"icon"},e.icon))))}.call(this,this.props,this.state)}}]),t}(a.Component),B=(n(384),function(e){function t(e){var n;return Object(c.a)(this,t),(n=Object(u.a)(this,Object(l.a)(t).call(this,e))).state={},n.onItemClick=n.onItemClick.bind(Object(m.a)(Object(m.a)(n))),n._onChange=n._onChange.bind(Object(m.a)(Object(m.a)(n))),n}return Object(d.a)(t,e),Object(r.a)(t,[{key:"onItemClick",value:function(e){var t=e.target.dataset.index;f.changeView({newScope:"update",itemType:P.getItemType(),itemIndex:t})}},{key:"onButtonClick",value:function(){f.changeView({newScope:"create"})}},{key:"_onChange",value:function(){var e=P.getGeneralDisplayTitle(P.getItemType());this.setState({displayName:e})}},{key:"componentDidMount",value:function(){P.addChangeListener(this._onChange),this._onChange()}},{key:"componentWillUnmount",value:function(){P.removeChangeListener(this._onChange)}},{key:"render",value:function(){return function(e,t){return o.a.createElement("div",{className:"focusbox floating"},o.a.createElement("div",{className:"header"},t.displayName),o.a.createElement(R,{onClick:this.onButtonClick,class:"add-button",icon:"+"}),o.a.createElement(x,{tableType:"general"}))}.call(this,this.props,this.state)}}]),t}(a.Component)),V=(n(386),function(e){function t(e){var n;return Object(c.a)(this,t),(n=Object(u.a)(this,Object(l.a)(t).call(this,e))).state={isPressed:!1},n.onClick=n.onClick.bind(Object(m.a)(Object(m.a)(n))),n.onMouseDown=n.onMouseDown.bind(Object(m.a)(Object(m.a)(n))),n.onMouseUp=n.onMouseUp.bind(Object(m.a)(Object(m.a)(n))),n}return Object(d.a)(t,e),Object(r.a)(t,[{key:"onClick",value:function(){var e="".concat(E.a.getServerURL(),"/report/download");console.log(Object({NODE_ENV:"production",PUBLIC_URL:"/miskatonic-book-manager"})),setTimeout(function(){var t={file:e};window.open(t.file)},100)}},{key:"onMouseDown",value:function(){this.setState({isPressed:!0})}},{key:"onMouseUp",value:function(){this.setState({isPressed:!1})}},{key:"render",value:function(){return function(e,t){var n="report-button floating";return t.isPressed&&(n+=" pressed"),o.a.createElement("div",{className:"report-wrapper"},o.a.createElement("div",{className:n,onClick:this.onClick,onMouseDown:this.onMouseDown,onMouseUp:this.onMouseUp,onMouseLeave:this.onMouseUp},o.a.createElement("div",null,"Download Report")))}.call(this,this.props,this.state)}}]),t}(a.Component)),F=(n(388),function(e){function t(e){var n;return Object(c.a)(this,t),(n=Object(u.a)(this,Object(l.a)(t).call(this,e))).state={studentsReading:0,booksCheckedOut:0,unusedCodes:0},n._onChange=n._onChange.bind(Object(m.a)(Object(m.a)(n))),n}return Object(d.a)(t,e),Object(r.a)(t,[{key:"_onChange",value:function(){for(var e=0,t=E.a.getItems("student"),n=0;n<t.length;n++)t[n].codes.length>0&&(e+=1);for(var a=0,o=E.a.getItems("book"),i=0;i<o.length;i++)a+=o[i].readers;for(var s=0,c=E.a.getItems("code"),r=0;r<c.length;r++)c[r].student||(s+=1);this.setState({studentsReading:e,booksCheckedOut:a,unusedCodes:s})}},{key:"componentDidMount",value:function(){E.a.addChangeListener(this._onChange),this._onChange()}},{key:"componentWillUnmount",value:function(){E.a.removeChangeListener(this._onChange)}},{key:"render",value:function(){return function(e,t){return o.a.createElement("div",{className:"statistic-box statistic-boxes-wrapper"},o.a.createElement("div",{className:"floating statistic-box students-reading"},o.a.createElement("div",{className:"number"},t.studentsReading),o.a.createElement("div",{className:"title"},"Students Reading")),o.a.createElement("div",{className:"floating statistic-box books-checked-out"},o.a.createElement("div",{className:"number"},t.booksCheckedOut),o.a.createElement("div",{className:"title"},"Checked Out Books")),o.a.createElement("div",{className:"floating statistic-box unused-codes"},o.a.createElement("div",{className:"number"},t.unusedCodes),o.a.createElement("div",{className:"title"},"Unused Codes")))}.call(this,this.props,this.state)}}]),t}(a.Component)),q=n(160),W=(n(390),n(392),n(28)),H={createItem:function(e,t){h.a.dispatch({type:W.a.CREATE_ITEM,itemType:e,data:t})},readItems:function(e){h.a.dispatch({type:W.a.READ_ITEMS,itemType:e})},updateItem:function(e,t,n){h.a.dispatch({type:W.a.UPDATE_ITEM,itemType:e,id:t,data:n})},deleteItem:function(e,t){h.a.dispatch({type:W.a.DELETE_ITEM,itemType:e,id:t})}},G=function(e){function t(e){var n;return Object(c.a)(this,t),(n=Object(u.a)(this,Object(l.a)(t).call(this,e))).state={isPressed:!1},n.onClick=n.onClick.bind(Object(m.a)(Object(m.a)(n))),n.onMouseDown=n.onMouseDown.bind(Object(m.a)(Object(m.a)(n))),n.onMouseUp=n.onMouseUp.bind(Object(m.a)(Object(m.a)(n))),n}return Object(d.a)(t,e),Object(r.a)(t,[{key:"onClick",value:function(){window.confirm("Delete this "+this.props.itemType+"?")&&(H.deleteItem(this.props.itemType,this.props.itemId),f.closePopup())}},{key:"onMouseDown",value:function(){this.setState({isPressed:!0})}},{key:"onMouseUp",value:function(){this.setState({isPressed:!1})}},{key:"render",value:function(){return function(e,t){var n="delete-button";return t.isPressed&&(n+=" pressed"),o.a.createElement("div",null,o.a.createElement("div",{className:"delete-button-wrapper"},o.a.createElement("div",{className:n,onClick:this.onClick,onMouseDown:this.onMouseDown,onMouseUp:this.onMouseUp,onMouseLeave:this.onMouseUp},o.a.createElement("img",{className:"icon",alt:"Delete Item",src:"assets/icons/garbage.svg"}))))}.call(this,this.props,this.state)}}]),t}(a.Component),z=function(e,t){var n,a,i,s,c=this,r=t.itemType,u=t.scope;return"create"===u?n=this.handleCreate:"update"===u&&(n=this.handleUpdate),"student"===r?(i=this.handleValueChange,s=t.data,a=o.a.createElement("div",null,o.a.createElement("label",null,"First Name:",o.a.createElement("input",{"data-key":"firstName",value:s.firstName,type:"text",required:!0,onChange:i})),o.a.createElement("br",null),o.a.createElement("label",null,"Last Name:",o.a.createElement("input",{"data-key":"lastName",value:s.lastName,type:"text",required:!0,onChange:i})),o.a.createElement("br",null),o.a.createElement("label",null,"Email:",o.a.createElement("input",{"data-key":"email",value:s.email,type:"email",required:!0,onChange:i})),o.a.createElement("br",null),o.a.createElement("label",null,"Grade:",o.a.createElement("input",{"data-key":"grade",value:s.grade||"",type:"number",min:"1",max:"12",required:!0,onChange:i})))):"book"===r?a=function(e,t){return o.a.createElement("div",null,o.a.createElement("label",null,"Title:",o.a.createElement("input",{"data-key":"title",value:t.title,type:"text",required:!0,onChange:e})),o.a.createElement("br",null),o.a.createElement("label",null,"Author:",o.a.createElement("input",{"data-key":"author",value:t.author,type:"text",required:!0,onChange:e})))}(this.handleValueChange,t.data):"code"===r&&(a=function(e,t){var n=E.a.getItems("book").map(function(e,t){return o.a.createElement("option",{key:e.title+t,value:e._id},e.title," by ",e.author)}),a=E.a.getItems("student").map(function(e,t){return o.a.createElement("option",{key:e.firstName+t,value:e._id},e.lastName,", ",e.firstName)});return a.unshift(o.a.createElement("option",{key:"no-student",value:""},"No Student")),o.a.createElement("div",null,o.a.createElement("label",null,"Book attached to code:",o.a.createElement("br",null),o.a.createElement("select",{"data-key":"book",required:!0,value:t.book,onChange:e},n)),o.a.createElement("br",null),o.a.createElement("label",null,"Student code is assigned to:",o.a.createElement("br",null),o.a.createElement("select",{"data-key":"student",value:t.student,onChange:e},a)))}(this.handleValueChange,t.data)),o.a.createElement("div",{className:"popup-wrapper",onClick:this.closeSelf},o.a.createElement("div",{className:"popup-form",ref:this.scrollRef,onClick:function(e){return e.stopPropagation()}},o.a.createElement(R,{onClick:this.closeSelf,class:"close-button",icon:""}),"update"===u?o.a.createElement(G,{itemType:t.itemType,itemId:t.itemId}):null,o.a.createElement("div",null,t.displayTitle),o.a.createElement("form",{onSubmit:n},a,o.a.createElement("input",{type:"submit",value:"Submit"}))),"update"===u?o.a.createElement("div",{className:"side-info",onClick:function(e){return e.stopPropagation()}},t.associatedItems.map(function(e,t){return o.a.createElement("div",{key:e+t},"code"!==r?o.a.createElement(R,{onClick:function(){return c.addAssociatedItem(e.itemType)},class:"add-button",icon:"+"}):null,o.a.createElement("div",{className:"associated-item-tables"},o.a.createElement("div",{className:"associated-item-titles"},e.itemTitle),o.a.createElement(x,{key:e.itemType,itemType:e.itemType,data:e.data})))})):null)},J=n(161),Z=n.n(J),$=function(e){function t(e){var n;return Object(c.a)(this,t),(n=Object(u.a)(this,Object(l.a)(t).call(this,e))).state={scope:null,itemType:null,itemId:null,data:{},associatedItems:[],displayTitle:""},n.scrollRef=o.a.createRef(),n._onChange=n._onChange.bind(Object(m.a)(Object(m.a)(n))),n.handleValueChange=n.handleValueChange.bind(Object(m.a)(Object(m.a)(n))),n.addAssociatedItem=n.addAssociatedItem.bind(Object(m.a)(Object(m.a)(n))),n.handleCreate=n.handleCreate.bind(Object(m.a)(Object(m.a)(n))),n.handleUpdate=n.handleUpdate.bind(Object(m.a)(Object(m.a)(n))),n.closeSelf=n.closeSelf.bind(Object(m.a)(Object(m.a)(n))),n.escFunction=n.escFunction.bind(Object(m.a)(Object(m.a)(n))),n}return Object(d.a)(t,e),Object(r.a)(t,[{key:"_onChange",value:function(){var e=P.getFocusScope(),t=P.getItemType(),n=P.getFocusItem(),a=n?n._id:null,o={},i=[],s="";if("student"===t?(s=n?"Update Student":"Add Student",o={firstName:n?n.firstName:"",lastName:n?n.lastName:"",email:n?n.email:"",grade:n?n.grade:""}):"book"===t?(s=n?"Update Book":"Add Book",o={title:n?n.title:"",author:n?n.author:""}):"code"===t&&(s=n?"Update Code":"Create Code",o={student:n&&n.student?n.student:"",book:n?n.book:E.a.getItems("book")[0]._id}),"student"!==t&&"book"!==t||!n){if("code"===t&&n){var c={itemType:"book",itemTitle:"Associated Book",data:[E.a.getItemById("book",n.book)]};if(i.push(c),n.student){var r={itemType:"student",itemTitle:"Assigned Student",data:[E.a.getItemById("student",n.student)]};i.push(r)}}}else{for(var u={itemType:"code",itemTitle:"student"===t?"Student's Codes":"Book's Codes",data:[]},l=0;l<n.codes.length;l++)u.data.push(E.a.getItemById("code",n.codes[l]));i.push(u)}this._mounted&&(this.scrollRef.current.scrollTo(0,0),this.setState({scope:e,itemId:a,itemType:t,data:o,associatedItems:i,displayTitle:s}))}},{key:"handleValueChange",value:function(e){var t=e.target,n=t.value,a=t.dataset.key;this.setState({data:Z()(this.state.data,Object(q.a)({},a,{$set:n}))})}},{key:"addAssociatedItem",value:function(e){f.changeView({newScope:"create",newItemType:e})}},{key:"handleCreate",value:function(e){e.preventDefault(),this.state.data!=={}&&(H.createItem(this.state.itemType,this.state.data),this.closeSelf())}},{key:"handleUpdate",value:function(e){e.preventDefault(),this.state.data!=={}&&(H.updateItem(this.state.itemType,this.state.itemId,this.state.data),this.closeSelf())}},{key:"componentDidMount",value:function(){this._mounted=!0,P.addChangeListener(this._onChange),document.addEventListener("keydown",this.escFunction,!1),this._onChange()}},{key:"componentWillUnmount",value:function(){this._mounted=!1,P.removeChangeListener(this._onChange),document.removeEventListener("keydown",this.escFunction,!1)}},{key:"escFunction",value:function(e){27===e.keyCode&&this.closeSelf()}},{key:"closeSelf",value:function(){f.closePopup()}},{key:"render",value:function(){return z.call(this,this.props,this.state)}}]),t}(a.Component),K=(n(395),function(e){function t(e){var n;return Object(c.a)(this,t),(n=Object(u.a)(this,Object(l.a)(t).call(this,e))).state={showPopup:!1},n._onChange=n._onChange.bind(Object(m.a)(Object(m.a)(n))),n}return Object(d.a)(t,e),Object(r.a)(t,[{key:"_onChange",value:function(){var e=P.showPopup();this.setState({showPopup:e})}},{key:"componentDidMount",value:function(){P.addChangeListener(this._onChange)}},{key:"componentWillUnmount",value:function(){P.removeChangeListener(this._onChange)}},{key:"render",value:function(){return function(e,t){return o.a.createElement("div",null,o.a.createElement("div",{className:"main"},o.a.createElement("div",{className:"stacked"},o.a.createElement(L,null),o.a.createElement(V,null)),o.a.createElement(B,null),o.a.createElement(F,null)),t.showPopup?o.a.createElement($,null):null)}.call(this,this.props,this.state)}}]),t}(a.Component));s.a.render(o.a.createElement(K,null),document.getElementById("root"))},7:function(e,t,n){"use strict";(function(e){var a=n(36),o=n(43),i=n.n(o),s=n(58),c=n.n(s),r=n(23),u=n(28),l="https://miskatonic-book-manager-server.herokuapp.com";console.log(e),console.log(l);var d={student:[],book:[],code:[]},m={student:"student",book:"book",code:"code"},h={student:"students",book:"books",code:"codes"},p={student:"lastName",book:"title",code:function(e){var t=b.getItemById(m.book,e.book);if(t)return t.title}};f(m.student),f(m.book),f(m.code);var b=i()({},a.EventEmitter.prototype,{getItems:function(e){return d[e]},getItemById:function(e,t){return d[e].find(function(e){return e._id===t})},getItemByIndex:function(e,t){return d[e][t]},getServerURL:function(){return l},emitChange:function(){this.emit("change")},addChangeListener:function(e){this.on("change",e)},removeChangeListener:function(e){this.removeListener("change",e)}});function f(e){var t=l+"/".concat(h[e]),n={requestType:"get",itemType:e};c.a.get(t,{json:!0},function(e,t,a){g(e,t,a,n)})}function g(e,t,n,a){if(e)return console.log(e);var o,i,s=a.itemType;"get"===a.requestType?(o=p[s],i=n,n=[].slice.call(i).sort(function(e,t){return"function"===typeof o?function(e,t,n){return e(t)<e(n)?-1:e(t)>e(n)?1:0}(o,e,t):function(e,t,n){return t[e]<n[e]?-1:t[e]>n[e]?1:0}(o,e,t)}),d[s]=n):(f(s),setTimeout(function(){f(m.student),f(m.book),f(m.code)},1e3),setTimeout(function(){f(m.student),f(m.book),f(m.code)},3e3),setTimeout(function(){f(m.student),f(m.book),f(m.code)},1e4)),b.emitChange()}b.dispatchToken=r.a.register(function(e){switch(e.type){case u.a.CREATE_ITEM:void 0!==e.itemType&&void 0!==e.data&&function(e,t){var n=l+"/".concat(h[e],"/create"),a={requestType:"post",itemType:e,data:t};c.a.post(n,{form:t},function(e,t,n){g(e,t,n,a)})}(e.itemType,e.data);break;case u.a.READ_ITEMS:void 0!==e.itemType&&f(e.itemType);break;case u.a.UPDATE_ITEM:void 0!==e.itemType&&void 0!==e.id&&void 0!==e.data&&function(e,t,n){var a=l+"/".concat(h[e],"/").concat(t,"/update"),o={requestType:"put",itemType:e,id:t,data:n};c.a.put(a,{form:n},function(e,t,n){g(e,t,n,o)})}(e.itemType,e.id,e.data);break;case u.a.DELETE_ITEM:void 0!==e.itemType&&void 0!==e.id&&function(e,t){var n=l+"/".concat(h[e],"/").concat(t,"/delete"),a={requestType:"delete",itemType:e,id:t};c.a.delete(n,{json:!0},function(e,t,n){g(e,t,n,a)})}(e.itemType,e.id,e.data)}}),t.a=b}).call(this,n(9))}},[[162,2,1]]]);
//# sourceMappingURL=main.e13658f6.chunk.js.map