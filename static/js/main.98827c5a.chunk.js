(this["webpackJsonpescape-velocity"]=this["webpackJsonpescape-velocity"]||[]).push([[0],{21:function(e,t,n){},29:function(e,t,n){},36:function(e,t,n){"use strict";n.r(t);var r,i,s=n(0),c=n.n(s),o=n(6),a=n.n(o),l=(n(29),n(21),n(7)),d=n(15),h=n(16),b=h.a.button(r||(r=Object(d.a)(["\n  width: 9%;\n  height: 9%;\n\n  font-size: ",";\n  background: ",";\n  color: ",";\n  font-weight: ",";\n  border: 1px solid white;\n  border-collapse: collapse;\n  border-radius: 5px;\n"])),(function(e){return e.characters.length,"8px"}),(function(e){return 0===e.characters.length?e.tiletype.color:"repeating-linear-gradient(45deg, white, white 10px, "+e.tiletype.color+" 10px,  "+e.tiletype.color+" 20px)"}),(function(e){return 0===e.characters.length?"black":"white"}),(function(e){return 0===e.characters.length?"normal":"bold"})),u=n(1),j=function(e){for(var t=e.tiles,n=e.onClick,r=[],i=0;i<t.length;i++){for(var s=0;s<t[i].length;s++){var c=n.bind(undefined,s,i);r.push(Object(u.jsx)(b,{tiletype:t[s][i].type,characters:t[s][i].characters,onClick:c,children:0!==t[s][i].characters.length?"X":"("+s+","+i+")"},"Cell"+s+":"+i))}r.push(Object(u.jsx)("br",{},"LineBreak"+i))}return Object(u.jsx)("span",{className:"map",children:r})},p=5,v={x:5,y:5},x=100,f=4,O=[0,60,90,100,100,100,100,100,100,100,100],m=5,y=function(e){var t=e.phase,n=e.characters;return Object(u.jsxs)("span",{className:"statusbar",children:[Object(u.jsx)("b",{children:"Status bar"}),Object(u.jsx)("br",{}),"Turn: ",t.turn," (00:00:0",t.untilNextTurn,")",Object(u.jsx)("br",{}),"Action Points: ",n[0].ap," / ",f,Object(u.jsx)("br",{}),"Health Points: ",n[0].hp," / ",x,Object(u.jsx)("br",{}),Object(u.jsx)("br",{}),Object(u.jsx)("br",{}),Object(u.jsx)("br",{})]})},g=function(e){var t=e.onClick;return Object(u.jsxs)("span",{className:"actionbar",children:[Object(u.jsx)("b",{children:"Actions"}),Object(u.jsx)("br",{}),Object(u.jsx)("input",{className:"action",type:"button",value:"Search",onClick:t})]})},w=n(4),A=function e(t,n,r){Object(w.a)(this,e),this.id=void 0,this.name=void 0,this.frequency=void 0,this.id=t,this.name=n,this.frequency=r},k=[new A(0," ",-1),new A(1,"Log",0),new A(2,"Plank",1),new A(3,"Iron Ore",2),new A(4,"Iron Bar",1),new A(5,"Iron Sheet",2),new A(6,"Broken Circuit Board",1),new A(7,"Electronic Component",2),new A(8,"Transistor Radio",999)],C=n(19),I=function(e){var t=e.alertText,n=e.isVisible;return Object(u.jsx)("span",{className:"alertbar",children:Object(u.jsxs)(C.a,{show:n,variant:t.variant,children:[Object(u.jsx)(C.a.Heading,{children:t.header}),t.body]},"mainAlert")})},N=function e(t,n,r){Object(w.a)(this,e),this.header=void 0,this.body=void 0,this.variant=void 0,this.header=t,this.body=n,this.variant=r};!function(e){e.WARNING="warning",e.PRIMARY="primary"}(i||(i={}));var P,T={START:new N("Your starship was heavily damaged during an orbital fight...","Pilots managed to perform an emergency landing on the planet below. The vessel is irreversibly damaged. Fellow crew is dead. Endless jungle covering the entire surface.",i.PRIMARY),OUT_OF_AP:new N("Out of Action Points","You are too tired to perform this action and need to chill for a  while. AP recover with time. Action Points recover gradually with time.",i.WARNING)},D=function e(t,n,r){Object(w.a)(this,e),this.id=void 0,this.name=void 0,this.color=void 0,this.id=t,this.name=n,this.color=r},E=[new D(0,"Forest","#32a871"),new D(1,"Starship","#929da6"),new D(2,"Impact Cleaning","#76a693")],R=function e(t,n,r){Object(w.a)(this,e),this.type=void 0,this.coords=void 0,this.characters=void 0,this.items=void 0,this.type=t,this.coords={x:n,y:r},this.characters=[],this.items=[]},S=function e(){Object(w.a)(this,e),this.turn=void 0,this.untilNextTurn=void 0,this.isNight=void 0,this.alertActive=void 0,this.untilAlertDismissed=void 0,this.turn=1,this.untilNextTurn=p,this.isNight=!1,this.untilAlertDismissed=0,this.alertActive=T.START,this.untilAlertDismissed=1200},M=function e(t){Object(w.a)(this,e),this.size=void 0,this.slots=void 0,this.size=t,this.slots=new Array(t);for(var n=0;n<this.slots.length;n++)this.slots[n]=k[0]},F=function e(t,n,r,i){Object(w.a)(this,e),this.hp=void 0,this.ap=void 0,this.coords=void 0,this.inventory=void 0,this.hp=t,this.ap=n,this.coords={x:r,y:i},this.inventory=new M(6)},z=function(e){for(var t=[],n=0;n<k.length;n++)k[n].frequency===e&&t.push(k[n]);return t},B=n(3),_=h.a.input(P||(P=Object(d.a)(["\n  width: 90%;\n  height: 40px;\n  margin: 3px 3px 3px 3px;\n  background-color: rgb(148, 148, 184);\n  border-radius: 5px;\n  border: 2px solid rgb(209, 209, 224);\n  color: white;\n  text-align: center;\n  font-size: 14px;\n"]))),H=n(9),L=function(e){var t=e.characters,n=e.onClick;e.onDragEnd;return Object(u.jsx)(H.c,{droppableId:"items-inventory",children:function(e){return Object(u.jsxs)("ul",Object(B.a)(Object(B.a)({},e.droppableProps),{},{ref:e.innerRef,children:[t[0].inventory.slots.map((function(e,t){return Object(u.jsx)(H.b,{draggableId:"item-inventory-"+t,index:t,children:function(r){return Object(u.jsx)("li",Object(B.a)(Object(B.a)(Object(B.a)({ref:r.innerRef},r.draggableProps),r.dragHandleProps),{},{children:Object(u.jsx)(_,{type:"submit",value:e.name,onClick:function(){return n(t)}})}))}},t)})),e.placeholder]}))}})},Y=function(e){var t=e.characters,n=e.onClick,r=e.onDragEnd;return Object(u.jsxs)("div",{children:[Object(u.jsx)("b",{children:"Inventory"}),Object(u.jsx)("br",{}),Object(u.jsx)(L,{characters:t,onClick:n,onDragEnd:r})]})},q=function(e){var t=e.characters,n=e.tiles,r=e.onClick,i=(e.onDragEnd,t[0].coords.x),s=t[0].coords.y;return Object(u.jsx)(H.c,{droppableId:"items-cell",children:function(e){return Object(u.jsxs)("ul",Object(B.a)(Object(B.a)({},e.droppableProps),{},{ref:e.innerRef,children:[n[i][s].items.map((function(e,t){return Object(u.jsx)(H.b,{draggableId:"item-cell-"+t,index:t,children:function(e){return Object(u.jsx)("li",Object(B.a)(Object(B.a)(Object(B.a)({ref:e.innerRef},e.draggableProps),e.dragHandleProps),{},{children:Object(u.jsx)(_,{type:"submit",value:n[i][s].items[t].name,onClick:function(){return r(t)}})}))}},t)})),e.placeholder]}))}})},U=function(e){var t=e.characters,n=e.tiles,r=e.onClick,i=e.onDragEnd,s=t[0].coords.x,c=t[0].coords.y;return Object(u.jsxs)("div",{children:[Object(u.jsxs)("b",{children:[n[s][c].type.name," (",s,", ",c,")"]}),Object(u.jsx)("br",{}),Object(u.jsx)(q,{characters:t,tiles:n,onClick:r,onDragEnd:i})]})},G=function(){return Object(u.jsxs)("div",{children:[Object(u.jsx)("b",{children:"Craft"}),Object(u.jsx)("br",{})]})},J=function(e){var t=e.characters,n=e.tiles,r=e.onClickInventory,i=e.onClickCell,s=e.onDragEnd;return Object(u.jsx)(H.a,{onDragEnd:s,children:Object(u.jsx)("table",{className:"itembar",children:Object(u.jsx)("tbody",{children:Object(u.jsxs)("tr",{className:"itemlists",children:[Object(u.jsx)("td",{className:"itemlist",children:Object(u.jsx)(Y,{characters:t,onClick:r,onDragEnd:s})}),Object(u.jsx)("td",{className:"itemlist",children:Object(u.jsx)(U,{characters:t,tiles:n,onClick:i,onDragEnd:s})}),Object(u.jsx)("td",{className:"itemlist",children:Object(u.jsx)(G,{})})]})})})})},V=function(){var e=function(){for(var e=new Array(11),t=0;t<e.length;t++){e[t]=new Array(11);for(var n=0;n<e[t].length;n++)e[t][n]=new R(E[0],t,n)}e[5][5].type=E[1],e[4][4].type=E[2],e[5][4].type=E[2],e[6][4].type=E[2],e[4][5].type=E[2],e[6][5].type=E[2],e[4][6].type=E[2],e[5][6].type=E[2],e[6][6].type=E[2],e[5][5].characters.push(new F(x,f,v.x,v.y));var r=[];return r.push(new F(x,f,v.x,v.y)),{characters:r,phase:new S,tiles:e}}(),t=Object(s.useState)(e.characters),n=Object(l.a)(t,2),r=n[0],i=n[1],c=Object(s.useState)(e.phase),o=Object(l.a)(c,2),a=o[0],d=o[1],h=Object(s.useState)(e.tiles),b=Object(l.a)(h,2),w=b[0],A=b[1],C=function(){var e=Object(s.useState)(0),t=Object(l.a)(e,2),n=(t[0],t[1]);return function(){return n((function(e){return e+1}))}}(),N=function(){var e=r,t=a;a.untilNextTurn>1?t.untilNextTurn-=1:(t.turn+=1,t.untilNextTurn=p,e[0].ap<4&&(e[0].ap+=1)),t.untilAlertDismissed>0&&(t.untilAlertDismissed-=1),i(e),d(t),C()},P=function(e){var t=a;t.alertActive=e,t.untilAlertDismissed=m,d(t),C()},D=function(e,t){return Math.max(Math.abs(w[e][t].coords.x-r[0].coords.x),Math.abs(w[e][t].coords.y-r[0].coords.y))};return Object(s.useEffect)((function(){setInterval(N,1e3)}),[]),Object(u.jsxs)("div",{className:"ui",children:[Object(u.jsxs)("div",{className:"ui-row1",children:[Object(u.jsx)(j,{tiles:w,onClick:function(e,t){if(r[0].ap>0){if(1===D(e,t)){var n=r;n[0].ap-=1;var s=r[0].coords.x,c=r[0].coords.y;n[0].coords={x:e,y:t};var o=w;o[s][c].characters=[],o[e][t].characters.push(n[0]),i(n),A(o)}}else P(T.OUT_OF_AP);C()}}),Object(u.jsx)(J,{characters:r,tiles:w,onClickInventory:function(e){if(r[0].inventory.slots[e].id!==k[0].id){var t=r[0].coords.x,n=r[0].coords.y,s=r,c=w;c[t][n].items.push(r[0].inventory.slots[e]),s[0].inventory.slots[e]=k[0],i(s),A(c)}C()},onClickCell:function(e){for(var t=-1,n=0;n<r[0].inventory.size;n++)if(r[0].inventory.slots[n]===k[0]){t=n;break}if(-1!==t){var s=r[0].coords.x,c=r[0].coords.y,o=r,a=w;o[0].inventory.slots[t]=w[s][c].items[e],a[s][c].items.splice(e,1),i(o),A(a)}C()},onDragEnd:function(e){if(console.log(e),e.destination){var t=Array(0),n=Array(0),s=r[0].coords.x,c=r[0].coords.y;if("items-inventory"===e.source.droppableId&&"items-cell"===e.destination.droppableId){t=Array.from(r[0].inventory.slots),n=Array.from(w[s][c].items);var o=t.splice(e.source.index,1),a=Object(l.a)(o,1)[0];n.splice(e.destination.index,0,a);var d=r,h=w;d[0].inventory.slots=t,h[s][c].items=n,i(d),A(h)}if("items-cell"===e.source.droppableId&&"items-inventory"===e.destination.droppableId){t=Array.from(w[s][c].items),n=Array.from(r[0].inventory.slots);var b=t.splice(e.source.index,1),u=Object(l.a)(b,1)[0];n.splice(e.destination.index,0,u);var j=r,p=w;j[0].inventory.slots=n,p[s][c].items=t,i(j),A(p)}if("items-inventory"===e.source.droppableId&&"items-inventory"===e.destination.droppableId){var v=Array.from(r[0].inventory.slots),x=v.splice(e.source.index,1),f=Object(l.a)(x,1)[0];v.splice(e.destination.index,0,f);var O=r,m=w;O[0].inventory.slots=v,i(O),A(m)}if("items-cell"===e.source.droppableId&&"items-cell"===e.destination.droppableId){var y=Array.from(w[s][c].items),g=y.splice(e.source.index,1),k=Object(l.a)(g,1)[0];y.splice(e.destination.index,0,k);var I=r,N=w;N[s][c].items=y,i(I),A(N)}C()}}})]}),Object(u.jsxs)("div",{className:"ui-row2",children:[Object(u.jsx)(y,{phase:a,characters:r}),Object(u.jsx)(g,{onClick:function(){if(r[0].ap>0){var e=r;e[0].ap-=1;for(var t=-1,n=0;n<r[0].inventory.size;n++)if(r[0].inventory.slots[n]===k[0]){t=n;break}var s=Math.floor(Math.random()*k.length);if(-1!==t)e[0].inventory.slots[t]=function(){for(var e=100*Math.random(),t=0;t<O.length-1;t++)if(e>O[t]&&e<O[t+1]){var n=z(t);return n[Math.floor(Math.random()*n.length)]}return k[0]}(),i(e);else{var c=w,o=r[0].coords.x,a=r[0].coords.y;c[o][a].items.push(k[s]),i(e),A(c)}}else P(T.OUT_OF_AP);C()}})]}),Object(u.jsx)("div",{className:"ui-row3",children:Object(u.jsx)(I,{alertText:a.alertActive,isVisible:a.untilAlertDismissed>0})})]})},W=(n(35),function(){return Object(u.jsx)(V,{})}),X=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,38)).then((function(t){var n=t.getCLS,r=t.getFID,i=t.getFCP,s=t.getLCP,c=t.getTTFB;n(e),r(e),i(e),s(e),c(e)}))};a.a.render(Object(u.jsx)(c.a.StrictMode,{children:Object(u.jsx)(W,{})}),document.getElementById("root")),X()}},[[36,1,2]]]);
//# sourceMappingURL=main.98827c5a.chunk.js.map