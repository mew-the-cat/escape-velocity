(this["webpackJsonpescape-velocity"]=this["webpackJsonpescape-velocity"]||[]).push([[0],{24:function(e,t,i){},32:function(e,t,i){},39:function(e,t,i){"use strict";i.r(t);var n,r,s,c=i(0),a=i.n(c),o=i(8),l=i.n(o),d=(i(32),i(24),i(5)),u=i(6),h=i(10),b=i(11),O=b.a.button(n||(n=Object(h.a)(["\n  width: 9%;\n  height: 9%;\n  font-size: ",";\n  background: ",";\n  color: ",";\n  font-weight: ",";\n  border: 1px solid white;\n  border-collapse: collapse;\n  border-radius: 5px;\n"])),(function(e){return e.characters.length,"8px"}),(function(e){return 0===e.characters.length?e.tiletype.color:"repeating-linear-gradient(45deg, white, white 10px, "+e.tiletype.color+" 10px,  "+e.tiletype.color+" 20px)"}),(function(e){return 0===e.characters.length?"black":"white"}),(function(e){return 0===e.characters.length?"normal":"bold"})),j=i(1),p=function(e){for(var t=e.tiles,i=e.onClick,n=[],r=0;r<t.length;r++){for(var s=0;s<t[r].length;s++){var c=i.bind(undefined,s,r);n.push(Object(j.jsx)(O,{tiletype:t[s][r].type,characters:t[s][r].characters,onClick:c,children:0!==t[s][r].characters.length?"X":"("+s+","+r+")"},"Cell"+s+":"+r))}n.push(Object(j.jsx)("br",{},"LineBreak"+r))}return Object(j.jsx)("span",{className:"map",children:n})},m=3,f={x:5,y:5},x=100,C=20,v=5,g=function(e){var t=e.phase,i=e.characters;return Object(j.jsxs)("span",{className:"statusbar",children:[Object(j.jsx)("b",{children:"Status bar"}),Object(j.jsx)("br",{}),"Turn: ",t.turn," (00:00:0",t.untilNextTurn,")",Object(j.jsx)("br",{}),"Action Points: ",i[0].ap," / ",C,Object(j.jsx)("br",{}),"Health Points: ",i[0].hp," / ",x,Object(j.jsx)("br",{}),Object(j.jsx)("br",{}),Object(j.jsx)("br",{}),Object(j.jsx)("br",{})]})},I=b.a.input(r||(r=Object(h.a)(["\n  width: 150px;\n  height: 40px;\n  margin: 3px 3px 3px 3px;\n  background-color: rgb(102, 217, 255);\n  border-radius: 5px;\n  border: 2px solid rgb(204, 242, 255);\n  color: white;\n  font-size: 14px;\n"]))),N=function(e){var t=e.isInside,i=e.onClickSearch,n=e.onClickCraft;return Object(j.jsxs)("div",{children:[Object(j.jsx)("b",{children:"Actions"}),Object(j.jsx)("br",{}),Object(j.jsx)(I,{type:"button",value:"Search",onClick:i}),t&&Object(j.jsx)(I,{type:"button",value:"Craft",onClick:n})]})},y=i(22),T=function(e){var t=e.alertText,i=e.isVisible;return Object(j.jsx)("span",{className:"alertbar",children:Object(j.jsxs)(y.a,{show:i,variant:t.variant,children:[Object(j.jsx)(y.a.Heading,{children:t.header}),t.body]},"mainAlert")})},E=i(4),S=function e(t,i,n){Object(E.a)(this,e),this.header=void 0,this.body=void 0,this.variant=void 0,this.header=t,this.body=i,this.variant=n};!function(e){e.WARNING="warning",e.PRIMARY="primary",e.SUCCESS="success",e.VICTORY="info"}(s||(s={}));var U,A={START:new S("Your starship was heavily damaged during an orbital fight...","Pilots managed to perform an emergency landing on the planet below. The vessel is irreversibly damaged. Fellow crew is dead. Endless jungle covering the entire surface.",s.PRIMARY),OUT_OF_AP:new S("Out of Action Points","You are too tired to perform this action and need to chill for a  while. AP recover with time. Action Points recover gradually with time.",s.WARNING),NO_SEARCH_ZONE:new S("Can't Search the Starship","It's your old school ship you have flown half of the Galaxy with! You know every single crack and fissure. There is nothing surpsiring you can find. Try exploring the planet surface instead.",s.WARNING),CRAFT_NO_COMBINATION:new S("Engeneering Attempt Failed","You tried to tinker around with these items with no palpable success. It looks like you can't combine them into anything more or less interesting.",s.WARNING),CRAFT_NO_ITEMS:new S("No Enough Items","Load at least 2 items in the Engineering Bay in order to process them.",s.WARNING),CRAFT_SUCCESS:new S("Engeneering Attempt Successful","You managed to process materials into a structurally more complex item!",s.SUCCESS),CONSTRUCTION_NO_ITEMS:new S("No Enough Items","Some items required in the blueprint are missing. Ensure to store them in the starhip storage [5, 5].",s.WARNING),CONSTRUCTION_SUCCESS:new S("Construction Successful","You have managed to build a new construction according to the blueprint!",s.SUCCESS),VICTORY:new S("Emergency Beacon is Online [VICTORY]","This piece of scrap assembled with glue and duct tape on your knees seems to work! After 4 nervous hours of waiting amid the endleess forest a rescue spacecraft appears on the horizon. Your desperate call hor help was heard. You got a ticket out of this hell!",s.VICTORY)},M=function e(t,i,n,r){Object(E.a)(this,e),this.id=void 0,this.name=void 0,this.defenseBase=void 0,this.itemsToConstruct=void 0,this.id=t,this.name=i,this.defenseBase=n,this.itemsToConstruct=r},w=function e(t,i,n){Object(E.a)(this,e),this.id=void 0,this.name=void 0,this.rarity=void 0,this.id=t,this.name=i,this.rarity=n};!function(e){e.UBIQUITOUS="UBIQUITOUS",e.COMMON="COMMON",e.UNCOMMON="UNCOMMON",e.RARE="RARE",e.SCARCE="SCARCE",e.UNIQUE="UNIQUE"}(U||(U={}));var R,_,k=[new w(0,"Log",U.UBIQUITOUS),new w(1,"Plank",U.COMMON),new w(2,"Wooden Beam",U.RARE),new w(3,"Iron Ore",U.COMMON),new w(4,"Iron Bar",U.UNCOMMON),new w(5,"Iron Sheet",U.RARE),new w(6,"Broken Circuit Board",U.UNCOMMON),new w(7,"Electronic Plate",U.SCARCE),new w(8,"Transistor Radio",U.UNIQUE),new w(9,"Copper Ore",U.COMMON),new w(10,"Copper Wire",U.SCARCE),new w(11,"Antenna",U.UNIQUE)],B=[new M(0,"Starship",100),new M(1,"Engineering Bay",20),new M(2,"Emergency Beacon",0,[k[11],k[8],k[5],k[2]])],D=function e(t,i,n){Object(E.a)(this,e),this.id=void 0,this.name=void 0,this.color=void 0,this.id=t,this.name=i,this.color=n},P=[new D(0,"Forest","#32a871"),new D(1,"Starship","#929da6"),new D(2,"Impact Cleaning","#76a693")],F=function e(t,i,n){Object(E.a)(this,e),this.type=void 0,this.coords=void 0,this.characters=void 0,this.items=void 0,this.timesSearched=void 0,this.isDepleted=void 0,this.type=t,this.coords={x:i,y:n},this.characters=[],this.items=[],this.timesSearched=0,this.isDepleted=!1},Q=function e(){Object(E.a)(this,e),this.turn=void 0,this.untilNextTurn=void 0,this.isNight=void 0,this.turn=1,this.untilNextTurn=m-1,this.isNight=!1},L=function e(t,i,n,r,s,c){Object(E.a)(this,e),this.id=void 0,this.hp=void 0,this.ap=void 0,this.coords=void 0,this.items=void 0,this.itemsMax=void 0,this.id=t,this.hp=i,this.ap=n,this.coords={x:r,y:s},this.itemsMax=c,this.items=[]},Y=function e(){Object(E.a)(this,e),this.alertActive=void 0,this.untilAlertDismissed=void 0,this.alertActive=A.START,this.untilAlertDismissed=600},G=function e(t,i,n){Object(E.a)(this,e),this.id=void 0,this.blueprint=void 0,this.amount=void 0,this.items=void 0,this.id=t,this.blueprint=i,this.amount=n,this.items=[]},W=function(e){var t=H(V(e));return t[Math.floor(Math.random()*t.length)]},H=function(e){for(var t=[],i=0;i<k.length;i++)k[i].rarity===e&&t.push(k[i]);return t},V=function(e){var t=100*Math.random();return e?t<=70?U.UBIQUITOUS:U.COMMON:t<=35?U.UBIQUITOUS:t>35&&t<=65?U.COMMON:t>65&&t<=85?U.UNCOMMON:t>85&&t<=95?U.RARE:U.SCARCE},z=i(3);!function(e){e.ITEM_UBIQUITOUS="rgb(206, 188, 160)",e.ITEM_COMMON="rgb(148, 148, 184)",e.ITEM_UNCOMMON="rgb(151, 184, 250)",e.ITEM_RARE="rgb(255, 181, 54)",e.ITEM_SCARCE="rgb(242, 114, 114)",e.ITEM_UNIQUE="rgb(227, 0, 91)",e.CONSTRUCTIONS_BUILT="rgb(92, 92, 92)",e.CONSTRUCTIONS_BUILT_BORDER="rgb(0, 0, 0)",e.CONSTRUCTIONS_NOT_BUILT="rgb(238, 238, 238)",e.CONSTRUCTIONS_NOT_BUILT_BORDER="rgb(199, 199, 199)"}(R||(R={}));var J,Z,q=b.a.input(_||(_=Object(h.a)(["\n  width: 80%;\n  height: 40px;\n  margin: 3px 3px 3px 3px;\n  background-color: ","\n    ","\n    ","\n    ","\n    ","\n    ",";\n  border: none;\n  border-radius: 5px;\n  color: white;\n  text-align: center;\n  font-size: 14px;\n"])),(function(e){return e.rarity===U.UBIQUITOUS&&R.ITEM_UBIQUITOUS}),(function(e){return e.rarity===U.COMMON&&R.ITEM_COMMON}),(function(e){return e.rarity===U.UNCOMMON&&R.ITEM_UNCOMMON}),(function(e){return e.rarity===U.RARE&&R.ITEM_RARE}),(function(e){return e.rarity===U.SCARCE&&R.ITEM_SCARCE}),(function(e){return e.rarity===U.UNIQUE&&R.ITEM_UNIQUE})),K=i(9),X=function(e){var t=e.characters,i=e.onClick;return Object(j.jsx)(K.c,{droppableId:"items-inventory",isDropDisabled:t[0].items.length>=t[0].itemsMax,children:function(e){return Object(j.jsxs)("ul",Object(z.a)(Object(z.a)({},e.droppableProps),{},{ref:e.innerRef,children:[t[0].items.map((function(e,t){return Object(j.jsx)(K.b,{draggableId:"item-inventory-"+t,index:t,children:function(n){return Object(j.jsx)("li",Object(z.a)(Object(z.a)(Object(z.a)({ref:n.innerRef},n.draggableProps),n.dragHandleProps),{},{children:Object(j.jsx)(q,{type:"submit",value:e.name,rarity:e.rarity,onClick:function(){return i(t)}})}))}},t)})),e.placeholder]}))}})},$=function(e){var t=e.characters,i=e.onClick,n=e.onDragEnd;return Object(j.jsxs)("div",{children:[Object(j.jsxs)("b",{children:["Inventory (",t[0].items.length,"/",t[0].itemsMax,")"]}),Object(j.jsx)("br",{}),Object(j.jsx)(X,{characters:t,onClick:i,onDragEnd:n})]})},ee=function(e){var t=e.characters,i=e.tiles,n=e.onClick,r=t[0].coords.x,s=t[0].coords.y;return Object(j.jsx)(K.c,{droppableId:"items-tile",children:function(e){return Object(j.jsxs)("ul",Object(z.a)(Object(z.a)({},e.droppableProps),{},{ref:e.innerRef,children:[i[r][s].items.map((function(e,t){return Object(j.jsx)(K.b,{draggableId:"item-tile-"+t,index:t,children:function(e){return Object(j.jsx)("li",Object(z.a)(Object(z.a)(Object(z.a)({ref:e.innerRef},e.draggableProps),e.dragHandleProps),{},{children:Object(j.jsx)(q,{type:"submit",value:i[r][s].items[t].name,rarity:i[r][s].items[t].rarity,onClick:function(){return n(t)}})}))}},t)})),e.placeholder]}))}})},te=function(e){var t=e.characters,i=e.tiles,n=e.onClick,r=e.onDragEnd,s=t[0].coords.x,c=t[0].coords.y;return Object(j.jsxs)("div",{children:[Object(j.jsxs)("b",{children:[i[s][c].type.name," (",s,", ",c,")"," ",i[s][c].isDepleted&&"[DEPLETED]"]}),Object(j.jsx)("br",{}),Object(j.jsx)(ee,{characters:t,tiles:i,onClick:n,onDragEnd:r})]})},ie=function(e){var t=e.construction,i=e.onClick;return Object(j.jsx)(K.c,{droppableId:"items-craft",children:function(e){return Object(j.jsxs)("ul",Object(z.a)(Object(z.a)({},e.droppableProps),{},{ref:e.innerRef,children:[t.items.map((function(e,t){return Object(j.jsx)(K.b,{draggableId:"item-craft-"+t,index:t,children:function(n){return Object(j.jsx)("li",Object(z.a)(Object(z.a)(Object(z.a)({ref:n.innerRef},n.draggableProps),n.dragHandleProps),{},{children:Object(j.jsx)(q,{type:"submit",value:e.name,rarity:e.rarity,onClick:function(){return i(t)}})}))}},t)})),e.placeholder]}))}})},ne=function(e){var t=e.construction,i=e.onClick,n=e.onDragEnd;return Object(j.jsxs)("div",{children:[Object(j.jsx)("b",{children:"Engineering Bay"}),Object(j.jsx)("br",{}),Object(j.jsx)(ie,{construction:t,onClick:i,onDragEnd:n})]})},re=function(e){var t=e.characters,i=e.tiles,n=e.construction,r=e.onClickInventory,s=e.onClickCell,c=e.onDragEnd,a=e.isInside;return Object(j.jsx)(K.a,{onDragEnd:c,children:Object(j.jsx)("table",{className:"itembar",children:Object(j.jsx)("tbody",{children:Object(j.jsxs)("tr",{className:"itemlists",children:[Object(j.jsx)("td",{className:"itemlist",children:Object(j.jsx)($,{characters:t,onClick:r,onDragEnd:c})}),Object(j.jsx)("td",{className:"itemlist",children:Object(j.jsx)(te,{characters:t,tiles:i,onClick:s,onDragEnd:c})}),a&&Object(j.jsx)("td",{className:"itemlist",children:Object(j.jsx)(ne,{construction:n,onClick:s,onDragEnd:c})})]})})})})},se=function e(t,i){Object(E.a)(this,e),this.itemCombination=[],this.itemResult=void 0,this.itemCombination=t,this.itemResult=i},ce=[new se([k[0],k[0]],k[1]),new se([k[1],k[1]],k[2]),new se([k[3],k[3]],k[4]),new se([k[4],k[4]],k[5]),new se([k[6],k[6]],k[7]),new se([k[7],k[7]],k[8]),new se([k[9],k[9]],k[10]),new se([k[10],k[10]],k[11])],ae=b.a.div(J||(J=Object(h.a)(["\n  color: ","\n    ","\n    ","\n    ","\n    ",";\n  font-weight: bold;\n"])),(function(e){return e.rarity===U.UNIQUE&&R.ITEM_UNIQUE}),(function(e){return e.rarity===U.SCARCE&&R.ITEM_SCARCE}),(function(e){return e.rarity===U.UNCOMMON&&R.ITEM_UNCOMMON}),(function(e){return e.rarity===U.COMMON&&R.ITEM_COMMON}),(function(e){return e.rarity===U.UBIQUITOUS&&R.ITEM_UBIQUITOUS})),oe=b.a.div(Z||(Z=Object(h.a)(["\n  width: 100%;\n  margin: 3px 3px 3px 3px;\n  margin-right: 0px;\n  background-color: ",";\n  border: 2px solid\n    ",";\n  border-radius: 5px;\n  color: ",";\n  text-align: center;\n  font-size: 14px;\n"])),(function(e){return e.amount>0?R.CONSTRUCTIONS_BUILT:R.CONSTRUCTIONS_NOT_BUILT}),(function(e){return e.amount>0?R.CONSTRUCTIONS_BUILT_BORDER:R.CONSTRUCTIONS_NOT_BUILT_BORDER}),(function(e){return e.amount>0?"white":"black"})),le=function(e){var t=e.name,i=e.amount,n=e.defenseTotal,r=e.itemsToConstruct,s=e.onClick;return Object(j.jsx)(oe,{amount:i,onClick:s,children:Object(j.jsx)("table",{className:"constructioncard-table",children:Object(j.jsxs)("tbody",{children:[Object(j.jsx)("tr",{className:"constructioncard-row",children:Object(j.jsx)("td",{className:"constructioncard-cell",colSpan:2,children:Object(j.jsx)("b",{children:t})})}),Object(j.jsxs)("tr",{className:"constructioncard-row",children:[Object(j.jsx)("td",{className:"constructioncard-cell",children:Object(j.jsxs)("i",{children:[n," DEF"]})}),Object(j.jsx)("td",{className:"constructioncard-cell",children:Object(j.jsxs)("i",{children:["x",i]})})]}),r&&r.map((function(e,t){return Object(j.jsx)("tr",{children:Object(j.jsx)("td",{colSpan:2,children:Object(j.jsx)(ae,{rarity:e.rarity,children:e.name})})},t)}))]})})})},de=function(e){var t=e.constructions,i=e.onClick;return Object(j.jsxs)("span",{className:"constructionbar",children:[Object(j.jsx)("b",{children:"Constructions"}),Object(j.jsx)("br",{}),t.map((function(e,t){return Object(j.jsx)(le,{name:e.blueprint.name,defenseTotal:e.blueprint.defenseBase,itemsToConstruct:e.blueprint.itemsToConstruct,amount:e.amount,onClick:function(){i(e.blueprint)}},t)}))]})},ue=function(){var e=function(){for(var e=new Array(11),t=0;t<e.length;t++){e[t]=new Array(11);for(var i=0;i<e[t].length;i++)e[t][i]=new F(P[0],t,i)}e[5][5].type=P[1],e[4][4].type=P[2],e[5][4].type=P[2],e[6][4].type=P[2],e[4][5].type=P[2],e[6][5].type=P[2],e[4][6].type=P[2],e[5][6].type=P[2],e[6][6].type=P[2],e[5][5].characters.push(new L(1,x,C,f.x,f.y,6));var n=[];n.push(new L(1,x,C,f.x,f.y,6));var r=new Q,s=[],c=new G(0,B[0],1),a=new G(1,B[1],1),o=new G(2,B[2],0);return s.push(c),s.push(a),s.push(o),{characters:n,phase:r,tiles:e,constructions:s,userPrompt:new Y}}(),t=Object(c.useState)(e.characters),i=Object(u.a)(t,2),n=i[0],r=i[1],s=Object(c.useState)(e.phase),a=Object(u.a)(s,2),o=a[0],l=a[1],h=Object(c.useState)(e.tiles),b=Object(u.a)(h,2),O=b[0],I=b[1],y=Object(c.useState)(e.constructions),E=Object(u.a)(y,2),S=E[0],U=E[1],M=Object(c.useState)(e.userPrompt),w=Object(u.a)(M,2),R=w[0],_=w[1],k=Object(c.useState)(!1),D=Object(u.a)(k,2),H=D[0],V=D[1],z=function(){var e=Object(d.a)(n),t=o,i=R;t.untilNextTurn>0?t.untilNextTurn-=1:(t.turn+=1,t.untilNextTurn=m-1,e[0].ap<C&&(e[0].ap+=1)),i.untilAlertDismissed>0&&(i.untilAlertDismissed-=1),r(Object(d.a)(e)),_(i),l(t)},J=function(e){var t=R;t.alertActive=e,t.untilAlertDismissed=v,_(t)},Z=function(e,t){return Math.max(Math.abs(O[e][t].coords.x-n[0].coords.x),Math.abs(O[e][t].coords.y-n[0].coords.y))};return Object(c.useEffect)((function(){setInterval(z,1e3)}),[]),Object(c.useEffect)((function(){var e=n[0].coords.x,t=n[0].coords.y;V(5===e&&5===t)}),[n[0].coords.x,n[0].coords.y]),Object(c.useEffect)((function(){if(S[2].amount>0){J(A.VICTORY);var e=R;e.untilAlertDismissed=1200,_(e)}}),[S]),Object(j.jsxs)("div",{className:"ui",children:[Object(j.jsxs)("div",{className:"ui-row1",children:[Object(j.jsx)(p,{tiles:O,onClick:function(e,t){if(n[0].ap>0){if(1===Z(e,t)){var i=Object(d.a)(n),s=Object(d.a)(O),c=n[0].coords.x,a=n[0].coords.y;i[0].ap-=1,i[0].coords={x:e,y:t},s[c][a].characters=[],s[e][t].characters.push(i[0]),r(i),I(s)}}else J(A.OUT_OF_AP)}}),Object(j.jsx)(re,{characters:n,tiles:O,construction:S[0],onClickInventory:function(e){var t=n[0].coords.x,i=n[0].coords.y,s=Object(d.a)(n),c=Object(d.a)(O);c[t][i].items.push(n[0].items[e]),s[0].items.splice(e,1),r(s),I(c)},onClickCell:function(e){if(n[0].items.length<=n[0].itemsMax-1){var t=Object(d.a)(n),i=Object(d.a)(O),s=n[0].coords.x,c=n[0].coords.y;t[0].items.push(O[s][c].items[e]),i[s][c].items.splice(e,1),r(t),I(i)}},onDragEnd:function(e){if(e.destination){var t=Object(d.a)(n),i=Object(d.a)(O),s=S,c=n[0].coords.x,a=n[0].coords.y;if(e.source.droppableId===e.destination.droppableId){if("items-inventory"===e.source.droppableId){var o=Array.from(n[0].items),l=o.splice(e.source.index,1),h=Object(u.a)(l,1)[0];o.splice(e.destination.index,0,h),t[0].items=o}if("items-tile"===e.source.droppableId){var b=Array.from(O[c][a].items),j=b.splice(e.source.index,1),p=Object(u.a)(j,1)[0];b.splice(e.destination.index,0,p),i[c][a].items=b}if("items-craft"===e.source.droppableId){var m=Array.from(S[0].items),f=m.splice(e.source.index,1),x=Object(u.a)(f,1)[0];m.splice(e.destination.index,0,x),s[0].items=m}}if(e.source.droppableId!==e.destination.droppableId){var C=Array(0),v=Array(0);if("items-inventory"===e.source.droppableId&&"items-tile"===e.destination.droppableId){C=Array.from(n[0].items),v=Array.from(O[c][a].items);var g=C.splice(e.source.index,1),N=Object(u.a)(g,1)[0];v.splice(e.destination.index,0,N),t[0].items=C,i[c][a].items=v}else if("items-tile"===e.source.droppableId&&"items-inventory"===e.destination.droppableId&&n[0].items.length<=n[0].itemsMax-1){C=Array.from(O[c][a].items),v=Array.from(n[0].items);var y=C.splice(e.source.index,1),T=Object(u.a)(y,1)[0];v.splice(e.destination.index,0,T),i[c][a].items=C,t[0].items=v}if("items-inventory"===e.source.droppableId&&"items-craft"===e.destination.droppableId){C=Array.from(n[0].items),v=Array.from(S[0].items);var E=C.splice(e.source.index,1),A=Object(u.a)(E,1)[0];v.splice(e.destination.index,0,A),t[0].items=C,s[0].items=v}else if("items-craft"===e.source.droppableId&&"items-inventory"===e.destination.droppableId&&n[0].items.length<=n[0].itemsMax-1){C=Array.from(S[0].items),v=Array.from(n[0].items);var M=C.splice(e.source.index,1),w=Object(u.a)(M,1)[0];v.splice(e.destination.index,0,w),s[0].items=C,t[0].items=v}if("items-tile"===e.source.droppableId&&"items-craft"===e.destination.droppableId){C=Array.from(O[c][a].items),v=Array.from(S[0].items);var R=C.splice(e.source.index,1),_=Object(u.a)(R,1)[0];v.splice(e.destination.index,0,_),i[c][a].items=C,s[0].items=v}else if("items-craft"===e.source.droppableId&&"items-tile"===e.destination.droppableId){C=Array.from(S[0].items),v=Array.from(O[c][a].items);var k=C.splice(e.source.index,1),B=Object(u.a)(k,1)[0];v.splice(e.destination.index,0,B),s[0].items=C,i[c][a].items=v}}r(t),I(i),U(s)}},isInside:H}),H&&Object(j.jsx)(de,{constructions:S,onClick:function(e){var t;if(n[0].ap<=0)J(A.OUT_OF_AP);else{Object(d.a)(n)[0].ap-=1;var i=!0,s=Object(d.a)(O[5][5].items);if(null===(t=e.itemsToConstruct)||void 0===t||t.map((function(e){s.includes(e)?s.splice(s.indexOf(e),1):(i=!1,J(A.CONSTRUCTION_NO_ITEMS))})),i){var c,a=Object(d.a)(S),o=Object(d.a)(O);null===(c=e.itemsToConstruct)||void 0===c||c.map((function(e){o[5][5].items.includes(e)&&o[5][5].items.splice(o[5][5].items.indexOf(e),1)})),a[e.id].amount+=1,U(a),I(o),J(A.CONSTRUCTION_SUCCESS)}r(n)}}})]}),Object(j.jsxs)("div",{className:"ui-row2",children:[Object(j.jsx)(g,{phase:o,characters:n}),Object(j.jsx)(N,{isInside:H,onClickSearch:function(){var e=n[0].coords.x,t=n[0].coords.y;if(5!==e||5!==t)if(n[0].ap<=0)J(A.OUT_OF_AP);else{var i=Object(d.a)(n),s=Object(d.a)(O);i[0].ap-=1,n[0].items.length<=n[0].itemsMax-1?i[0].items.push(W(s[e][t].isDepleted)):s[e][t].items.push(W(s[e][t].isDepleted)),s[e][t].timesSearched+=1,s[e][t].isDepleted||(s[e][t].isDepleted=function(e){if(e<=2)return console.log(e,"GUARANTEED OK"),!1;if(e>2&&e<=5){var t=100*Math.random();return console.log(e,t,25*(e-2),!(t>25*(e-2))),!(t>25*(e-2))}return console.log(e,"GUARANTEED FAIL"),!0}(s[e][t].timesSearched)),r(i),I(s)}else J(A.NO_SEARCH_ZONE)},onClickCraft:function(){if(S[0].items.length<2)J(A.CRAFT_NO_ITEMS);else if(n[0].ap<=0)J(A.OUT_OF_AP);else{var e=Object(d.a)(n),t=Object(d.a)(S);e[0].ap-=1,r(e);var i=!1;ce.forEach((function(e){if(e.itemCombination.length===S[0].items.length){var n=!0,r=Object(d.a)(t[0].items);if(e.itemCombination.forEach((function(e){r.includes(e)?r.splice(r.indexOf(e),1):n=!1})),n)return t[0].items=[e.itemResult],U(t),i=!0,void J(A.CRAFT_SUCCESS)}})),i||J(A.CRAFT_NO_COMBINATION)}}})]}),Object(j.jsx)("div",{className:"ui-row3",children:Object(j.jsx)(T,{alertText:R.alertActive,isVisible:R.untilAlertDismissed>0})})]})},he=(i(38),function(){return Object(j.jsx)(ue,{})}),be=function(e){e&&e instanceof Function&&i.e(3).then(i.bind(null,41)).then((function(t){var i=t.getCLS,n=t.getFID,r=t.getFCP,s=t.getLCP,c=t.getTTFB;i(e),n(e),r(e),s(e),c(e)}))};l.a.render(Object(j.jsx)(a.a.StrictMode,{children:Object(j.jsx)(he,{})}),document.getElementById("root")),be()}},[[39,1,2]]]);
//# sourceMappingURL=main.659f4e4e.chunk.js.map