(this["webpackJsonpescape-velocity"]=this["webpackJsonpescape-velocity"]||[]).push([[0],{18:function(t,e,s){},26:function(t,e,s){},33:function(t,e,s){"use strict";s.r(e);var i,r=s(0),a=s.n(r),n=s(7),c=s.n(n),h=(s(26),s(18),s(2)),o=s(3),l=s(8),d=s(5),u=s(4),p=function t(e,s,i){Object(h.a)(this,t),this.header=void 0,this.body=void 0,this.variant=void 0,this.header=e,this.body=s,this.variant=i};!function(t){t.WARNING="warning",t.PRIMARY="primary"}(i||(i={}));var b,j,v={START:new p("Your starship was heavily...","damaged during an orbital fight. Pilots managed to perform an emergency landing on the planet below. The vessel is irreversibly damaged. Fellow crew is dead. Endless jungle covering the entire surface...",i.PRIMARY),OUT_OF_AP:new p("Out of Action Points","You are too tired to perform this action and need to chill for a  while. AP recover with time. Action Points recover gradually with time.",i.WARNING)},O=5,y={x:5,y:5},x=100,f=4,m=[0,60,90,100,100,100,100,100,100,100,100],w=5,k=function t(){Object(h.a)(this,t),this.turn=void 0,this.untilNextTurn=void 0,this.isNight=void 0,this.alertActive=void 0,this.untilAlertDismissed=void 0,this.turn=1,this.untilNextTurn=O,this.isNight=!1,this.untilAlertDismissed=0,this.alertActive=v.START,this.untilAlertDismissed=1200},g=function t(e,s,i){Object(h.a)(this,t),this.id=void 0,this.name=void 0,this.frequency=void 0,this.id=e,this.name=s,this.frequency=i},C=[new g(0," ",-1),new g(1,"Log",0),new g(2,"Plank",1),new g(3,"Iron Ore",2),new g(4,"Iron Bar",1),new g(5,"Iron Sheet",2),new g(6,"Broken Circuit Board",1),new g(7,"Electronic Component",2),new g(8,"Transistor Radio",999)],A=function(t){for(var e=[],s=0;s<C.length;s++)C[s].frequency===t&&e.push(C[s]);return e},T=function t(e){Object(h.a)(this,t),this.size=void 0,this.slots=void 0,this.size=e,this.slots=new Array(e);for(var s=0;s<this.slots.length;s++)this.slots[s]=C[0]},I=function t(e,s,i,r){Object(h.a)(this,t),this.hp=void 0,this.ap=void 0,this.coords=void 0,this.inventory=void 0,this.hp=e,this.ap=s,this.coords={x:i,y:r},this.inventory=new T(6)},S=function t(e,s,i){Object(h.a)(this,t),this.type=void 0,this.coords=void 0,this.characters=void 0,this.items=void 0,this.type=e,this.coords={x:s,y:i},this.characters=[],this.items=[]},N=s(10),P=s(11),D=P.a.button(b||(b=Object(N.a)(["\n  width: 50px;\n  height: 50px;\n  font-size: ",";\n  background: ",";\n  color: ",";\n  font-weight: ",";\n  border: 1px solid white;\n  border-collapse: collapse;\n  border-radius: 5px;\n"])),(function(t){return t.characters.length,"8px"}),(function(t){return 0===t.characters.length?t.tiletype.color:"repeating-linear-gradient(45deg, white, white 10px, "+t.tiletype.color+" 10px,  "+t.tiletype.color+" 20px)"}),(function(t){return 0===t.characters.length?"black":"white"}),(function(t){return 0===t.characters.length?"normal":"bold"})),M=s(1),F=function(t){Object(d.a)(s,t);var e=Object(u.a)(s);function s(){return Object(h.a)(this,s),e.apply(this,arguments)}return Object(o.a)(s,[{key:"render",value:function(){for(var t=[],e=0;e<this.props.tiles.length;e++){for(var s=0;s<this.props.tiles[e].length;s++){var i=this.props.onClick.bind(this,s,e);t.push(Object(M.jsx)(D,{tiletype:this.props.tiles[s][e].type,characters:this.props.tiles[s][e].characters,onClick:i,children:0!==this.props.tiles[s][e].characters.length?"X":"("+s+","+e+")"},"Cell"+s+":"+e))}t.push(Object(M.jsx)("br",{},"LineBreak"+e))}return t}}]),s}(a.a.Component),R=function(t){Object(d.a)(s,t);var e=Object(u.a)(s);function s(){return Object(h.a)(this,s),e.apply(this,arguments)}return Object(o.a)(s,[{key:"render",value:function(){return Object(M.jsxs)("div",{children:[Object(M.jsx)("b",{children:"Status bar"}),Object(M.jsx)("br",{}),"Turn: ",this.props.phase.turn," (00:00:0",this.props.phase.untilNextTurn,")",Object(M.jsx)("br",{}),"Action Points: ",this.props.characters[0].ap," / ",f,Object(M.jsx)("br",{}),"Health Points: ",this.props.characters[0].hp," / ",x,Object(M.jsx)("br",{}),Object(M.jsx)("br",{}),Object(M.jsx)("br",{}),Object(M.jsx)("br",{})]})}}]),s}(a.a.Component),z=function(t){Object(d.a)(s,t);var e=Object(u.a)(s);function s(){return Object(h.a)(this,s),e.apply(this,arguments)}return Object(o.a)(s,[{key:"render",value:function(){return Object(M.jsxs)("div",{children:[Object(M.jsx)("b",{children:"Actions"}),Object(M.jsx)("br",{}),Object(M.jsx)("input",{className:"action",type:"button",value:"Search",onClick:this.props.onClick})]})}}]),s}(a.a.Component),B=P.a.input(j||(j=Object(N.a)(["\n  width: 90%;\n  height: 40px;\n  margin: 3px 3px 3px 3px;\n  background-color: rgb(148, 148, 184);\n  border-radius: 5px;\n  border: 2px solid rgb(209, 209, 224);\n  color: white;\n"]))),L=function(t){Object(d.a)(s,t);var e=Object(u.a)(s);function s(){return Object(h.a)(this,s),e.apply(this,arguments)}return Object(o.a)(s,[{key:"render",value:function(){for(var t=new Array(this.props.characters[0].inventory.size),e=0;e<t.length;e++){var s=this.props.onClick.bind(this,e);t[e]=Object(M.jsx)(B,{type:"submit",value:this.props.characters[0].inventory.slots[e].name,onClick:s},"ItemInventoryInput"+e)}return Object(M.jsxs)("div",{children:[Object(M.jsx)("b",{children:"Inventory"}),Object(M.jsx)("br",{}),t]})}}]),s}(a.a.Component),_=function(t){Object(d.a)(s,t);var e=Object(u.a)(s);function s(){return Object(h.a)(this,s),e.apply(this,arguments)}return Object(o.a)(s,[{key:"render",value:function(){for(var t=this.props.characters[0].coords.x,e=this.props.characters[0].coords.y,s=new Array(this.props.tiles[t][e].items.length),i=0;i<this.props.tiles[t][e].items.length;i++){var r=this.props.onClick.bind(this,i);s[i]=Object(M.jsx)(B,{className:"item",type:"submit",value:this.props.tiles[t][e].items[i].name,onClick:r},"ItemTileInput"+i)}return Object(M.jsxs)("div",{children:[Object(M.jsxs)("b",{children:[this.props.tiles[t][e].type.name," (",t,", ",e,")"]}),Object(M.jsx)("br",{}),Object(M.jsx)("div",{className:"item-panel",children:s})]})}}]),s}(a.a.Component),Y=function(t){Object(d.a)(s,t);var e=Object(u.a)(s);function s(){return Object(h.a)(this,s),e.apply(this,arguments)}return Object(o.a)(s,[{key:"render",value:function(){return Object(M.jsxs)("div",{children:[Object(M.jsx)("b",{children:"Craft"}),Object(M.jsx)("br",{})]})}}]),s}(a.a.Component),q=function t(e,s,i){Object(h.a)(this,t),this.id=void 0,this.name=void 0,this.color=void 0,this.id=e,this.name=s,this.color=i},E=[new q(0,"Forest","#32a871"),new q(1,"Starship","#929da6"),new q(2,"Impact Cleaning","#76a693")],U=s(16),G=function(t){var e=t.alertText,s=t.isVisible;return Object(M.jsxs)(U.a,{show:s,variant:e.variant,children:[Object(M.jsx)(U.a.Heading,{children:e.header}),e.body]},"mainAlert")},H=function(t){Object(d.a)(s,t);var e=Object(u.a)(s);function s(t){var i;Object(h.a)(this,s),i=e.call(this,t);for(var r=new Array(11),a=0;a<r.length;a++){r[a]=new Array(11);for(var n=0;n<r[a].length;n++)r[a][n]=new S(E[0],a,n)}r[5][5].characters.push(new I(x,f,y.x,y.y)),r[5][5].type=E[1],r[4][4].type=E[2],r[5][4].type=E[2],r[6][4].type=E[2],r[4][5].type=E[2],r[6][5].type=E[2],r[4][6].type=E[2],r[5][6].type=E[2],r[6][6].type=E[2];var c=[];c.push(new I(x,f,y.x,y.y));var o=new k;return i.state={tiles:r,characters:c,phase:o},i.handleClickTile=i.handleClickTile.bind(Object(l.a)(i)),i.handleClickSearch=i.handleClickSearch.bind(Object(l.a)(i)),i.handleClickItemInventory=i.handleClickItemInventory.bind(Object(l.a)(i)),i.handleClickItemTile=i.handleClickItemTile.bind(Object(l.a)(i)),i}return Object(o.a)(s,[{key:"componentDidMount",value:function(){setInterval(this.gameLoop.bind(this),1e3)}},{key:"gameLoop",value:function(){var t=this.state.characters,e=this.state.phase;this.state.phase.untilNextTurn>1?e.untilNextTurn-=1:(e.turn+=1,e.untilNextTurn=O,t[0].ap<4&&(t[0].ap+=1)),e.untilAlertDismissed>0&&(e.untilAlertDismissed-=1),this.setState({characters:t,phase:e})}},{key:"render",value:function(){return Object(M.jsx)("div",{className:"window",children:Object(M.jsx)("table",{children:Object(M.jsxs)("tbody",{children:[Object(M.jsxs)("tr",{children:[Object(M.jsx)("td",{rowSpan:3,children:Object(M.jsx)(F,{tiles:this.state.tiles,onClick:this.handleClickTile})}),Object(M.jsx)("td",{colSpan:1,className:"window-aux",children:Object(M.jsx)(R,{phase:this.state.phase,characters:this.state.characters})}),Object(M.jsx)("td",{colSpan:2,className:"window-aux-alert",children:Object(M.jsx)(G,{alertText:this.state.phase.alertActive,isVisible:this.state.phase.untilAlertDismissed>0})})]}),Object(M.jsx)("tr",{children:Object(M.jsx)("td",{colSpan:3,className:"window-aux",children:Object(M.jsx)(z,{onClick:this.handleClickSearch})})}),Object(M.jsxs)("tr",{children:[Object(M.jsx)("td",{className:"window-aux",children:Object(M.jsx)(L,{characters:this.state.characters,onClick:this.handleClickItemInventory})}),Object(M.jsx)("td",{className:"window-aux",children:Object(M.jsx)(_,{tiles:this.state.tiles,characters:this.state.characters,onClick:this.handleClickItemTile})}),Object(M.jsx)("td",{className:"window-aux",children:Object(M.jsx)(Y,{})})]})]})})})}},{key:"handleClickTile",value:function(t,e){if(this.state.characters[0].ap>0){if(1===this.distCellToCharacter(t,e)){var s=this.state.characters;s[0].ap-=1;var i=this.state.characters[0].coords.x,r=this.state.characters[0].coords.y;s[0].coords={x:t,y:e};var a=this.state.tiles;a[i][r].characters=[],a[t][e].characters.push(s[0]),this.setState({characters:s,tiles:a})}}else this.handleDisplayAlert(v.OUT_OF_AP)}},{key:"handleClickSearch",value:function(){if(this.state.characters[0].ap>0){var t=this.state.characters;t[0].ap-=1;for(var e=-1,s=0;s<this.state.characters[0].inventory.size;s++)if(this.state.characters[0].inventory.slots[s]===C[0]){e=s;break}var i=Math.floor(Math.random()*C.length);if(-1!==e)t[0].inventory.slots[e]=function(){for(var t=100*Math.random(),e=0;e<m.length-1;e++)if(t>m[e]&&t<m[e+1]){var s=A(e);return s[Math.floor(Math.random()*s.length)]}return C[0]}(),this.setState({characters:t});else{var r=this.state.tiles,a=this.state.characters[0].coords.x,n=this.state.characters[0].coords.y;r[a][n].items.push(C[i]),this.setState({tiles:r})}}else this.handleDisplayAlert(v.OUT_OF_AP)}},{key:"handleClickItemInventory",value:function(t){if(this.state.characters[0].inventory.slots[t].id!==C[0].id){var e=this.state.characters[0].coords.x,s=this.state.characters[0].coords.y,i=this.state.characters,r=this.state.tiles;r[e][s].items.push(this.state.characters[0].inventory.slots[t]),i[0].inventory.slots[t]=C[0],this.setState({characters:i,tiles:r})}}},{key:"handleClickItemTile",value:function(t){for(var e=-1,s=0;s<this.state.characters[0].inventory.size;s++)if(this.state.characters[0].inventory.slots[s]===C[0]){e=s;break}if(-1!==e){var i=this.state.characters[0].coords.x,r=this.state.characters[0].coords.y,a=this.state.characters,n=this.state.tiles;a[0].inventory.slots[e]=this.state.tiles[i][r].items[t],n[i][r].items.splice(t,1),this.setState({characters:a,tiles:n})}}},{key:"handleDisplayAlert",value:function(t){var e=this.state.phase;e.alertActive=t,e.untilAlertDismissed=w,this.setState({phase:e})}},{key:"distCellToCharacter",value:function(t,e){return Math.max(Math.abs(this.state.tiles[t][e].coords.x-this.state.characters[0].coords.x),Math.abs(this.state.tiles[t][e].coords.y-this.state.characters[0].coords.y))}}]),s}(a.a.Component);s(32);var J=function(){return Object(M.jsx)(H,{})},V=function(t){t&&t instanceof Function&&s.e(3).then(s.bind(null,35)).then((function(e){var s=e.getCLS,i=e.getFID,r=e.getFCP,a=e.getLCP,n=e.getTTFB;s(t),i(t),r(t),a(t),n(t)}))};c.a.render(Object(M.jsx)(a.a.StrictMode,{children:Object(M.jsx)(J,{})}),document.getElementById("root")),V()}},[[33,1,2]]]);
//# sourceMappingURL=main.3f3fa0d1.chunk.js.map