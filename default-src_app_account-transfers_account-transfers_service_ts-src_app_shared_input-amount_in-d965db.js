"use strict";(self.webpackChunkmifosx_web_app=self.webpackChunkmifosx_web_app||[]).push([["default-src_app_account-transfers_account-transfers_service_ts-src_app_shared_input-amount_in-d965db","src_app_account-transfers_account-transfers_service_ts"],{35023:(h,x,c)=>{c.d(x,{o:()=>u});var n=c(80529),P=c(94650);let u=(()=>{class d{constructor(o){this.http=o}getStandingInstructionsData(o){return this.http.get(`/standinginstructions/${o}`)}getStandingInstructionsDataAndTemplate(o){const i=(new n.LE).set("associations","template");return this.http.get(`/standinginstructions/${o}`,{params:i})}updateStandingInstructionsData(o,i){const _=(new n.LE).set("command","update");return this.http.put(`/standinginstructions/${o}`,i,{params:_})}getStandingInstructionsTemplate(o,i,_,p){let m=(new n.LE).set("fromAccountType",_).set("fromClientId",o).set("fromOfficeId",i);if(p){const O=Object.getOwnPropertyNames(p);for(let e=0;e<O.length;e++){const C=O[e];m=m.set(C,p[C])}}return this.http.get("/standinginstructions/template",{params:m})}createStandingInstructions(o){return this.http.post("/standinginstructions",o)}newAccountTranferResource(o,i,_){let p=(new n.LE).set("fromAccountId",o).set("fromAccountType",i);if(_){const m=Object.getOwnPropertyNames(_);for(let O=0;O<m.length;O++){const e=m[O];p=p.set(e,_[e])}}return this.http.get("/accounttransfers/template",{params:p})}createAccountTransfer(o){return this.http.post("/accounttransfers",o)}getStandingInstructions(o){let i=new n.LE;const _=Object.getOwnPropertyNames(o);for(let p=0;p<_.length;p++){const m=_[p];""===o[m]||null==o[m]||(i=i.set(m,o[m]))}return this.http.get("/standinginstructions",{params:i})}deleteStandingInstrucions(o){const i=(new n.LE).set("command","delete");return this.http.delete(`/standinginstructions/${o}`,{params:i})}getStandingInstructionsTransactions(o,i,_){const p=(new n.LE).set("associations","transactions").set("dateFormat",i).set("limit","14").set("locale",_).set("offset","0");return this.http.get(`/standinginstructions/${o}`,{params:p})}getViewAccountTransferDetails(o){return this.http.get(`/accounttransfers/${o}`)}}return d.\u0275fac=function(o){return new(o||d)(P.LFG(n.eN))},d.\u0275prov=P.Yz7({token:d,factory:d.\u0275fac,providedIn:"root"}),d})()},10136:(h,x,c)=>{c.d(x,{F:()=>r});var n=c(94650),P=c(36895),u=c(1576),d=c(59549),f=c(284),o=c(24006);let i=(()=>{class g{constructor(t,a,l){this.locale=t,this.el=a,this.control=l,this.format="N0",this.digitsInfo="1.0-0",this.sufix=""}set _(t){const a=t.split(":");this.currencyCode=a[0],this.displaySymbol=a.length>1?a[1]:"$",this.digitsInfo=a.length>2?a[2]:"1.2-2"}blur(t){t.value=this.parse(t.value)}focus(t){t.value=typeof this.control.value>"u"?"":this.control.value}ngOnInit(){setTimeout(()=>{this.el.nativeElement.value=this.parse(this.el.nativeElement.value)})}parse(t){return(0,P.xG)(t,this.locale,this.displaySymbol,this.currencyCode,this.digitsInfo)+this.sufix}}return g.\u0275fac=function(t){return new(t||g)(n.Y36(n.soG),n.Y36(n.SBq),n.Y36(o.a5))},g.\u0275dir=n.lG2({type:g,selectors:[["","mifosxFormatAmount",""]],hostBindings:function(t,a){1&t&&n.NdJ("blur",function(M){return a.blur(M.target)})("focus",function(M){return a.focus(M.target)})},inputs:{sufix:"sufix",_:["mifosxFormatAmount","_"]}}),g})();var _=c(49274);function p(g,s){if(1&g&&(n.TgZ(0,"mat-error"),n._uU(1),n.ALo(2,"translate"),n.ALo(3,"translate"),n.TgZ(4,"strong"),n._uU(5),n.ALo(6,"translate"),n.qZA(),n._uU(7,"\n    "),n.qZA()),2&g){const t=n.oxw(2);n.xp6(1),n.AsE("\n        ",n.lcZ(2,3,"labels.inputs."+t.inputLabel)," ",n.lcZ(3,5,"labels.commons.is")," "),n.xp6(4),n.Oqu(n.lcZ(6,7,"labels.commons.required"))}}function m(g,s){if(1&g&&(n.TgZ(0,"mat-hint",7),n._uU(1),n.ALo(2,"currency"),n.qZA()),2&g){const t=n.oxw(2);n.xp6(1),n.Oqu(n.gM2(2,1,t.inputFormControl.value,t.currency.code,t.currency.displaySymbol,"1.2-2"))}}function O(g,s){if(1&g){const t=n.EpF();n.TgZ(0,"mat-form-field",1),n._uU(1,"\n    "),n.TgZ(2,"mat-label"),n._uU(3),n.ALo(4,"translate"),n.qZA(),n._uU(5,"\n    "),n.TgZ(6,"span",2),n._uU(7),n.qZA(),n._uU(8,"\n    "),n._UZ(9,"span",3),n._uU(10,"\n    "),n.TgZ(11,"input",4),n.NdJ("keypress",function(l){n.CHM(t);const M=n.oxw();return n.KtG(M.numberOnly(l))})("blur",function(){n.CHM(t);const l=n.oxw();return n.KtG(l.displayHint=!1)})("focus",function(){n.CHM(t);const l=n.oxw();return n.KtG(l.displayHint=!0)}),n.qZA(),n._uU(12,"\n    "),n.YNc(13,p,8,9,"mat-error",5),n._uU(14,"\n    "),n.YNc(15,m,3,6,"mat-hint",6),n._uU(16,"\n"),n.qZA()}if(2&g){const t=n.oxw();n.xp6(3),n.Oqu(n.lcZ(4,7,"labels.inputs."+t.inputLabel)),n.xp6(4),n.Oqu(t.currency.code),n.xp6(4),n.hYB("mifosxFormatAmount","",t.currency.code,":",t.currency.displaySymbol,""),n.Q6J("formControl",t.inputFormControl),n.xp6(2),n.Q6J("ngIf",t.inputFormControl.hasError("required")),n.xp6(2),n.Q6J("ngIf",t.displayHint)}}function e(g,s){if(1&g&&(n.TgZ(0,"mat-hint",7),n._uU(1),n.ALo(2,"currency"),n.qZA()),2&g){const t=n.oxw(2);n.xp6(1),n.Oqu(n.gM2(2,1,t.inputFormControl.value,t.currency.code,t.currency.displaySymbol,"1.2-2"))}}function C(g,s){if(1&g){const t=n.EpF();n.TgZ(0,"mat-form-field",1),n._uU(1,"\n    "),n.TgZ(2,"mat-label"),n._uU(3),n.ALo(4,"translate"),n.qZA(),n._uU(5,"\n    "),n.TgZ(6,"span",2),n._uU(7),n.qZA(),n._uU(8,"\n    "),n._UZ(9,"span",3),n._uU(10,"\n    "),n.TgZ(11,"input",8),n.NdJ("keypress",function(l){n.CHM(t);const M=n.oxw();return n.KtG(M.numberOnly(l))})("blur",function(){n.CHM(t);const l=n.oxw();return n.KtG(l.displayHint=!1)})("focus",function(){n.CHM(t);const l=n.oxw();return n.KtG(l.displayHint=!0)}),n.qZA(),n._uU(12,"\n    "),n.YNc(13,e,3,6,"mat-hint",6),n._uU(14,"\n"),n.qZA()}if(2&g){const t=n.oxw();n.xp6(3),n.Oqu(n.lcZ(4,6,"labels.inputs."+t.inputLabel)),n.xp6(4),n.Oqu(t.currency.code),n.xp6(4),n.hYB("mifosxFormatAmount","",t.currency.code,":",t.currency.displaySymbol,""),n.Q6J("formControl",t.inputFormControl),n.xp6(2),n.Q6J("ngIf",t.displayHint)}}let r=(()=>{class g{constructor(){this.isRequired=!1,this.displayHint=!1}ngOnInit(){}numberOnly(t){const a=t.which?t.which:t.keyCode;return 46===a?!(this.inputFormControl.value.indexOf(".")>-1):!(a>31&&(a<48||a>57))}inputBlur(){this.displayHint=!1}inputFocus(){this.displayHint=!0}}return g.\u0275fac=function(t){return new(t||g)},g.\u0275cmp=n.Xpm({type:g,selectors:[["mifosx-input-amount"]],inputs:{isRequired:"isRequired",currency:"currency",inputLabel:"inputLabel",inputFormControl:"inputFormControl"},decls:3,vars:2,consts:[["appearance","fill","fxFlex","100%",4,"ngIf"],["appearance","fill","fxFlex","100%"],["matTextSuffix","",1,"m-l-10"],["fxFlex","auto"],["required","","matInput","",1,"right-input",3,"mifosxFormatAmount","formControl","keypress","blur","focus"],[4,"ngIf"],["class","right-hint",4,"ngIf"],[1,"right-hint"],["matInput","",1,"right-input",3,"mifosxFormatAmount","formControl","keypress","blur","focus"]],template:function(t,a){1&t&&(n.YNc(0,O,17,9,"mat-form-field",0),n._uU(1,"\n"),n.YNc(2,C,15,8,"mat-form-field",0)),2&t&&(n.Q6J("ngIf",a.isRequired),n.xp6(2),n.Q6J("ngIf",!a.isRequired))},dependencies:[P.O5,u.yH,d.TO,d.KE,d.bx,d.hX,f.Nt,o.Fj,o.JJ,o.Q7,o.oH,i,P.H9,_.X$],styles:[".expandcollapsebutton[_ngcontent-%COMP%]{margin-top:-7px}.container[_ngcontent-%COMP%]{max-width:37rem}.right-input[_ngcontent-%COMP%]{text-align:right}.right-label[_ngcontent-%COMP%]{padding-right:25px!important}.right-hint[_ngcontent-%COMP%]{min-width:100%;text-align:right;font-weight:500}"]}),g})()},9722:(h,x,c)=>{c.d(x,{B:()=>O});var n=c(94650),P=c(36895),u=c(1576),d=c(49274);function f(e,C){if(1&e&&(n.TgZ(0,"tr"),n._uU(1,"\n      "),n.TgZ(2,"td",5),n._uU(3),n.ALo(4,"translate"),n.qZA(),n._uU(5,"\n      "),n.TgZ(6,"td"),n._uU(7),n.qZA(),n._uU(8,"\n    "),n.qZA()),2&e){const r=n.oxw(2);n.xp6(3),n.Oqu(n.lcZ(4,2,"labels.inputs.Account No")),n.xp6(4),n.Oqu(r.paymentDetailData.accountNumber)}}function o(e,C){if(1&e&&(n.TgZ(0,"tr"),n._uU(1,"\n      "),n.TgZ(2,"td",5),n._uU(3),n.ALo(4,"translate"),n.qZA(),n._uU(5,"\n      "),n.TgZ(6,"td"),n._uU(7),n.qZA(),n._uU(8,"\n    "),n.qZA()),2&e){const r=n.oxw(2);n.xp6(3),n.Oqu(n.lcZ(4,2,"labels.inputs.Cheque Number")),n.xp6(4),n.Oqu(r.paymentDetailData.checkNumber)}}function i(e,C){if(1&e&&(n.TgZ(0,"tr"),n._uU(1,"\n      "),n.TgZ(2,"td",5),n._uU(3),n.ALo(4,"translate"),n.qZA(),n._uU(5,"\n      "),n.TgZ(6,"td",5),n._uU(7),n.qZA(),n._uU(8,"\n    "),n.qZA()),2&e){const r=n.oxw(2);n.xp6(3),n.Oqu(n.lcZ(4,2,"labels.inputs.Routing Code")),n.xp6(4),n.Oqu(r.paymentDetailData.routingCode)}}function _(e,C){if(1&e&&(n.TgZ(0,"tr"),n._uU(1,"\n      "),n.TgZ(2,"td",5),n._uU(3),n.ALo(4,"translate"),n.qZA(),n._uU(5,"\n      "),n.TgZ(6,"td"),n._uU(7),n.qZA(),n._uU(8,"\n    "),n.qZA()),2&e){const r=n.oxw(2);n.xp6(3),n.Oqu(n.lcZ(4,2,"labels.inputs.Receipt No")),n.xp6(4),n.Oqu(r.paymentDetailData.receiptNumber)}}function p(e,C){if(1&e&&(n.TgZ(0,"tr"),n._uU(1,"\n      "),n.TgZ(2,"td",5),n._uU(3),n.ALo(4,"translate"),n.qZA(),n._uU(5,"\n      "),n.TgZ(6,"td"),n._uU(7),n.qZA(),n._uU(8,"\n    "),n.qZA()),2&e){const r=n.oxw(2);n.xp6(3),n.Oqu(n.lcZ(4,2,"labels.inputs.Bank No")),n.xp6(4),n.Oqu(r.paymentDetailData.bankNumber)}}function m(e,C){if(1&e&&(n.TgZ(0,"table"),n._uU(1,"\n  "),n.TgZ(2,"tbody"),n._uU(3,"\n    "),n.TgZ(4,"tr"),n._uU(5,"\n      "),n.TgZ(6,"td",4),n._uU(7),n.ALo(8,"translate"),n.qZA(),n._uU(9,"\n    "),n.qZA(),n._uU(10,"\n    "),n.YNc(11,f,9,4,"tr",3),n._uU(12,"\n    "),n.YNc(13,o,9,4,"tr",3),n._uU(14,"\n    "),n.YNc(15,i,9,4,"tr",3),n._uU(16,"\n    "),n.YNc(17,_,9,4,"tr",3),n._uU(18,"\n    "),n.YNc(19,p,9,4,"tr",3),n._uU(20,"\n  "),n.qZA(),n._uU(21,"\n"),n.qZA()),2&e){const r=n.oxw();n.xp6(7),n.Oqu(n.lcZ(8,6,"labels.inputs.Payment Details")),n.xp6(4),n.Q6J("ngIf",r.isNotNullOrEmpty(r.paymentDetailData.accountNumber)),n.xp6(2),n.Q6J("ngIf",r.isNotNullOrEmpty(r.paymentDetailData.checkNumber)),n.xp6(2),n.Q6J("ngIf",r.isNotNullOrEmpty(r.paymentDetailData.routingCode)),n.xp6(2),n.Q6J("ngIf",r.isNotNullOrEmpty(r.paymentDetailData.receiptNumber)),n.xp6(2),n.Q6J("ngIf",r.isNotNullOrEmpty(r.paymentDetailData.bankNumber))}}let O=(()=>{class e{constructor(){}ngOnInit(){}hasSomeValue(){return this.isNotNullOrEmpty(this.paymentDetailData.accountNumber)||this.isNotNullOrEmpty(this.paymentDetailData.bankNumber)||this.isNotNullOrEmpty(this.paymentDetailData.checkNumber)||this.isNotNullOrEmpty(this.paymentDetailData.receiptNumber)||this.isNotNullOrEmpty(this.paymentDetailData.routingCode)}isNotNullOrEmpty(r){return null!==r&&""!==r}}return e.\u0275fac=function(r){return new(r||e)},e.\u0275cmp=n.Xpm({type:e,selectors:[["mifosx-transaction-payment-detail"]],inputs:{paymentDetailData:"paymentDetailData"},decls:11,vars:5,consts:[["fxLayout","row wrap",1,"content"],["fxFlex","50%",1,"mat-body-strong"],["fxFlex","50%"],[4,"ngIf"],["colspan","2",1,"mat-body-strong","center"],[1,"mat-body-strong"]],template:function(r,g){1&r&&(n.TgZ(0,"div",0),n._uU(1,"\n  "),n.TgZ(2,"div",1),n._uU(3),n.ALo(4,"translate"),n.qZA(),n._uU(5,"\n\n  "),n.TgZ(6,"div",2),n._uU(7),n.qZA(),n._uU(8,"\n"),n.qZA(),n._uU(9,"\n"),n.YNc(10,m,22,8,"table",3)),2&r&&(n.xp6(3),n.hij("\n    ",n.lcZ(4,3,"labels.inputs.Payment Type"),"\n  "),n.xp6(4),n.hij("\n    ",g.paymentDetailData.paymentType.name,"\n  "),n.xp6(3),n.Q6J("ngIf",g.hasSomeValue()))},dependencies:[P.O5,u.xw,u.yH,d.X$],styles:["body[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:nth-child(even){background-color:#f2f2f2}.bg-black[_ngcontent-%COMP%]{background-color:#000}.bg-light-grey[_ngcontent-%COMP%]{background-color:#e5e5e5}.bg-medium-grey[_ngcontent-%COMP%]{background-color:#ccc}.bg-grey[_ngcontent-%COMP%]{background-color:#999}.bg-dark-grey[_ngcontent-%COMP%]{background-color:#222}.bg-white[_ngcontent-%COMP%], .bg-fff[_ngcontent-%COMP%]{background-color:#fff}.bg-none[_ngcontent-%COMP%], .no-bg[_ngcontent-%COMP%]{background:none;background-image:none;background-color:transparent}.bg-facebook[_ngcontent-%COMP%]{background-color:#47639e}.bg-twitter[_ngcontent-%COMP%]{background-color:#02a8f3}body[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]{border:1px solid rgba(0,0,0,.12)}.no-border[_ngcontent-%COMP%]{border:none}.no-border-t[_ngcontent-%COMP%]{border-top:none}.no-border-r[_ngcontent-%COMP%]{border-right:none}.no-border-b[_ngcontent-%COMP%]{border-bottom:none}.no-border-l[_ngcontent-%COMP%]{border-left:none}.no-border-lr[_ngcontent-%COMP%], .no-border-rl[_ngcontent-%COMP%]{border-left:none;border-right:none}.no-border-tb[_ngcontent-%COMP%], .no-border-bt[_ngcontent-%COMP%]{border-top:none;border-bottom:none}.no-border-tl[_ngcontent-%COMP%], .no-border-lt[_ngcontent-%COMP%]{border-top:none;border-left:none}.no-border-tr[_ngcontent-%COMP%], .no-border-rt[_ngcontent-%COMP%]{border-top:none;border-right:none}.no-border-bl[_ngcontent-%COMP%], .no-border-lb[_ngcontent-%COMP%]{border-bottom:none;border-left:none}.no-border-br[_ngcontent-%COMP%], .no-border-rb[_ngcontent-%COMP%]{border-bottom:none;border-right:none}.border-dashed[_ngcontent-%COMP%], .border-dotted[_ngcontent-%COMP%]{border-style:dashed}.border-black[_ngcontent-%COMP%]{border-color:#000}.border-light-grey[_ngcontent-%COMP%]{border-color:#e5e5e5}.border-medium-grey[_ngcontent-%COMP%]{border-color:#ccc}.border-grey[_ngcontent-%COMP%]{border-color:#999}.border-dark-grey[_ngcontent-%COMP%]{border-color:#2222}.border-white[_ngcontent-%COMP%], .border-fff[_ngcontent-%COMP%]{border-color:#fff}.no-border-radius[_ngcontent-%COMP%]{border-radius:0}.radius3[_ngcontent-%COMP%]{border-radius:3px}.radius5[_ngcontent-%COMP%]{border-radius:5px}.radius10[_ngcontent-%COMP%]{border-radius:10px}.column-mandatory[_ngcontent-%COMP%]{color:#5cb85c;text-align:center}.not-column-mandatory[_ngcontent-%COMP%]{color:#666f73;text-align:center}.cdk-drag-placeholder[_ngcontent-%COMP%]{background:#3498db}.yes[_ngcontent-%COMP%]{color:#5cb85c!important;background-color:#5cb85c;height:4px;cursor:none}.no[_ngcontent-%COMP%]{color:red;background-color:red;height:4px;cursor:none}.strike[_ngcontent-%COMP%]{text-decoration:line-through;color:red}.transfer[_ngcontent-%COMP%]{color:#16a085}.linked[_ngcontent-%COMP%]{color:#4461e2}.accrual[_ngcontent-%COMP%]{color:#999}.v-mid[_ngcontent-%COMP%], .v-m[_ngcontent-%COMP%]{vertical-align:middle}.v-top[_ngcontent-%COMP%], .v-t[_ngcontent-%COMP%]{vertical-align:top}.v-bottom[_ngcontent-%COMP%], .v-b[_ngcontent-%COMP%]{vertical-align:bottom}.v-super[_ngcontent-%COMP%]{vertical-align:super}.r-amount[_ngcontent-%COMP%]{text-align:right!important;padding-right:5px!important}.left[_ngcontent-%COMP%]{text-align:left!important}.right[_ngcontent-%COMP%]{text-align:right!important}.center[_ngcontent-%COMP%]{text-align:center!important}.amount-plus[_ngcontent-%COMP%]{color:#000}.amount-minus[_ngcontent-%COMP%]{color:#4461e2}.block[_ngcontent-%COMP%]{display:block}.inline[_ngcontent-%COMP%]{display:inline}.in-block[_ngcontent-%COMP%]{display:inline-block;zoom:1}.d-none[_ngcontent-%COMP%], .hide[_ngcontent-%COMP%], .hidden[_ngcontent-%COMP%]{display:none}.t-0[_ngcontent-%COMP%]{top:0}.b-0[_ngcontent-%COMP%]{bottom:0}.l-0[_ngcontent-%COMP%]{left:0}.r-0[_ngcontent-%COMP%]{right:0}.tb-0[_ngcontent-%COMP%]{top:0;bottom:0}.lr-0[_ngcontent-%COMP%]{left:0;right:0}.f-left[_ngcontent-%COMP%]{float:left}.f-right[_ngcontent-%COMP%]{float:right}.f-none[_ngcontent-%COMP%]{float:none}textarea[_ngcontent-%COMP%]{resize:both}textarea.vertical[_ngcontent-%COMP%], textarea.horizontal[_ngcontent-%COMP%]{resize:vertical}textarea.noresize[_ngcontent-%COMP%]{resize:none}.full-input[_ngcontent-%COMP%]   input[_ngcontent-%COMP%], .full-input[_ngcontent-%COMP%]   select[_ngcontent-%COMP%], .full-input[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%]{width:100%}.normal[_ngcontent-%COMP%]   input[_ngcontent-%COMP%], .normal[_ngcontent-%COMP%]   select[_ngcontent-%COMP%], .normal[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%], .full-input[_ngcontent-%COMP%]   [type=checkbox][_ngcontent-%COMP%], .full-input[_ngcontent-%COMP%]   [type=radio][_ngcontent-%COMP%]{width:auto}.mat-tab-body-content[_ngcontent-%COMP%]{margin-bottom:20px}.mat-datepicker-input[_ngcontent-%COMP%]{margin-top:5px;margin-bottom:5px}.loader-wrapper[_ngcontent-%COMP%]{height:100vh;width:100vw}.loader-wrapper[_ngcontent-%COMP%]   .triangle[_ngcontent-%COMP%]{width:0;height:0;border-style:solid;position:absolute;animation:rotate .8s infinite .2s}.loader-wrapper[_ngcontent-%COMP%]   .bottom[_ngcontent-%COMP%]{border-width:0 90px 90px 90px;border-color:transparent transparent #1fb050 transparent;bottom:calc(50% - 100px);left:calc(50% - 90px)}.loader-wrapper[_ngcontent-%COMP%]   .top[_ngcontent-%COMP%]{border-width:90px 90px 0 90px;border-color:#b4d575 transparent transparent transparent;top:calc(50% - 100px);left:calc(50% - 90px)}.loader-wrapper[_ngcontent-%COMP%]   .left[_ngcontent-%COMP%]{border-width:90px 0 90px 90px;border-color:transparent transparent transparent #1074b9;top:calc(50% - 90px);left:calc(50% - 100px)}.loader-wrapper[_ngcontent-%COMP%]   .right[_ngcontent-%COMP%]{border-width:90px 90px 90px 0;border-color:transparent #1daeec transparent transparent;top:calc(50% - 90px);right:calc(50% - 100px)}@keyframes rotate{0%{transform:rotate(0)}to{transform:rotate(360deg)}}body[_ngcontent-%COMP%]{margin:0}.container[_ngcontent-%COMP%]{margin:0 auto}.mb-05[_ngcontent-%COMP%]{margin-bottom:.5rem}.mr-05[_ngcontent-%COMP%]{margin-right:.5rem}.mb-1[_ngcontent-%COMP%]{margin-bottom:1rem}.mt-1[_ngcontent-%COMP%]{margin-top:1rem}.m-5[_ngcontent-%COMP%]{margin:5px}.m-t-5[_ngcontent-%COMP%]{margin-top:5px}.m-r-5[_ngcontent-%COMP%]{margin-right:5px}.m-b-5[_ngcontent-%COMP%]{margin-bottom:5px}.m-l-5[_ngcontent-%COMP%]{margin-left:5px}.m-v-5[_ngcontent-%COMP%]{margin:5px 0}.m-h-5[_ngcontent-%COMP%]{margin:0 5px}.m-10[_ngcontent-%COMP%]{margin:10px}.m-t-10[_ngcontent-%COMP%]{margin-top:10px}.m-r-10[_ngcontent-%COMP%]{margin-right:10px}.m-b-10[_ngcontent-%COMP%]{margin-bottom:10px}.m-l-10[_ngcontent-%COMP%]{margin-left:10px}.m-v-10[_ngcontent-%COMP%]{margin:10px 0}.m-h-10[_ngcontent-%COMP%]{margin:0 10px}.m-15[_ngcontent-%COMP%]{margin:15px}.m-t-15[_ngcontent-%COMP%]{margin-top:15px}.m-r-15[_ngcontent-%COMP%]{margin-right:15px}.m-b-15[_ngcontent-%COMP%]{margin-bottom:15px}.m-l-15[_ngcontent-%COMP%]{margin-left:15px}.m-v-15[_ngcontent-%COMP%]{margin:15px 0}.m-h-15[_ngcontent-%COMP%]{margin:0 15px}.m-20[_ngcontent-%COMP%]{margin:20px}.m-t-20[_ngcontent-%COMP%]{margin-top:20px}.m-r-20[_ngcontent-%COMP%]{margin-right:20px}.m-b-20[_ngcontent-%COMP%]{margin-bottom:20px}.m-l-20[_ngcontent-%COMP%]{margin-left:20px}.m-v-20[_ngcontent-%COMP%]{margin:20px 0}.m-h-20[_ngcontent-%COMP%]{margin:0 20px}.m-25[_ngcontent-%COMP%]{margin:25px}.m-t-25[_ngcontent-%COMP%]{margin-top:25px}.m-r-25[_ngcontent-%COMP%]{margin-right:25px}.m-b-25[_ngcontent-%COMP%]{margin-bottom:25px}.m-l-25[_ngcontent-%COMP%]{margin-left:25px}.m-v-25[_ngcontent-%COMP%]{margin:25px 0}.m-h-25[_ngcontent-%COMP%]{margin:0 25px}.m-30[_ngcontent-%COMP%]{margin:30px}.m-t-30[_ngcontent-%COMP%]{margin-top:30px}.m-r-30[_ngcontent-%COMP%]{margin-right:30px}.m-b-30[_ngcontent-%COMP%]{margin-bottom:30px}.m-l-30[_ngcontent-%COMP%]{margin-left:30px}.m-v-30[_ngcontent-%COMP%]{margin:30px 0}.m-h-30[_ngcontent-%COMP%]{margin:0 30px}.m-35[_ngcontent-%COMP%]{margin:35px}.m-t-35[_ngcontent-%COMP%]{margin-top:35px}.m-r-35[_ngcontent-%COMP%]{margin-right:35px}.m-b-35[_ngcontent-%COMP%]{margin-bottom:35px}.m-l-35[_ngcontent-%COMP%]{margin-left:35px}.m-v-35[_ngcontent-%COMP%]{margin:35px 0}.m-h-35[_ngcontent-%COMP%]{margin:0 35px}.m-40[_ngcontent-%COMP%]{margin:40px}.m-t-40[_ngcontent-%COMP%]{margin-top:40px}.m-r-40[_ngcontent-%COMP%]{margin-right:40px}.m-b-40[_ngcontent-%COMP%]{margin-bottom:40px}.m-l-40[_ngcontent-%COMP%]{margin-left:40px}.m-v-40[_ngcontent-%COMP%]{margin:40px 0}.m-h-40[_ngcontent-%COMP%]{margin:0 40px}.m-45[_ngcontent-%COMP%]{margin:45px}.m-t-45[_ngcontent-%COMP%]{margin-top:45px}.m-r-45[_ngcontent-%COMP%]{margin-right:45px}.m-b-45[_ngcontent-%COMP%]{margin-bottom:45px}.m-l-45[_ngcontent-%COMP%]{margin-left:45px}.m-v-45[_ngcontent-%COMP%]{margin:45px 0}.m-h-45[_ngcontent-%COMP%]{margin:0 45px}.m-50[_ngcontent-%COMP%]{margin:50px}.m-t-50[_ngcontent-%COMP%]{margin-top:50px}.m-r-50[_ngcontent-%COMP%]{margin-right:50px}.m-b-50[_ngcontent-%COMP%]{margin-bottom:50px}.m-l-50[_ngcontent-%COMP%]{margin-left:50px}.m-v-50[_ngcontent-%COMP%]{margin:50px 0}.m-h-50[_ngcontent-%COMP%]{margin:0 50px}.m-55[_ngcontent-%COMP%]{margin:55px}.m-t-55[_ngcontent-%COMP%]{margin-top:55px}.m-r-55[_ngcontent-%COMP%]{margin-right:55px}.m-b-55[_ngcontent-%COMP%]{margin-bottom:55px}.m-l-55[_ngcontent-%COMP%]{margin-left:55px}.m-v-55[_ngcontent-%COMP%]{margin:55px 0}.m-h-55[_ngcontent-%COMP%]{margin:0 55px}.m-60[_ngcontent-%COMP%]{margin:60px}.m-t-60[_ngcontent-%COMP%]{margin-top:60px}.m-r-60[_ngcontent-%COMP%]{margin-right:60px}.m-b-60[_ngcontent-%COMP%]{margin-bottom:60px}.m-l-60[_ngcontent-%COMP%]{margin-left:60px}.m-v-60[_ngcontent-%COMP%]{margin:60px 0}.m-h-60[_ngcontent-%COMP%]{margin:0 60px}.m-65[_ngcontent-%COMP%]{margin:65px}.m-t-65[_ngcontent-%COMP%]{margin-top:65px}.m-r-65[_ngcontent-%COMP%]{margin-right:65px}.m-b-65[_ngcontent-%COMP%]{margin-bottom:65px}.m-l-65[_ngcontent-%COMP%]{margin-left:65px}.m-v-65[_ngcontent-%COMP%]{margin:65px 0}.m-h-65[_ngcontent-%COMP%]{margin:0 65px}.m-70[_ngcontent-%COMP%]{margin:70px}.m-t-70[_ngcontent-%COMP%]{margin-top:70px}.m-r-70[_ngcontent-%COMP%]{margin-right:70px}.m-b-70[_ngcontent-%COMP%]{margin-bottom:70px}.m-l-70[_ngcontent-%COMP%]{margin-left:70px}.m-v-70[_ngcontent-%COMP%]{margin:70px 0}.m-h-70[_ngcontent-%COMP%]{margin:0 70px}.m-75[_ngcontent-%COMP%]{margin:75px}.m-t-75[_ngcontent-%COMP%]{margin-top:75px}.m-r-75[_ngcontent-%COMP%]{margin-right:75px}.m-b-75[_ngcontent-%COMP%]{margin-bottom:75px}.m-l-75[_ngcontent-%COMP%]{margin-left:75px}.m-v-75[_ngcontent-%COMP%]{margin:75px 0}.m-h-75[_ngcontent-%COMP%]{margin:0 75px}.m-80[_ngcontent-%COMP%]{margin:80px}.m-t-80[_ngcontent-%COMP%]{margin-top:80px}.m-r-80[_ngcontent-%COMP%]{margin-right:80px}.m-b-80[_ngcontent-%COMP%]{margin-bottom:80px}.m-l-80[_ngcontent-%COMP%]{margin-left:80px}.m-v-80[_ngcontent-%COMP%]{margin:80px 0}.m-h-80[_ngcontent-%COMP%]{margin:0 80px}.no-m[_ngcontent-%COMP%]{margin:0}.no-m-t[_ngcontent-%COMP%]{margin-top:0}.no-m-r[_ngcontent-%COMP%]{margin-right:0}.no-m-b[_ngcontent-%COMP%]{margin-bottom:0}.no-m-l[_ngcontent-%COMP%]{margin-left:0}.no-m-v[_ngcontent-%COMP%], .no-m-h[_ngcontent-%COMP%], .no-margin[_ngcontent-%COMP%]{margin:0}.no-m-lr[_ngcontent-%COMP%], .no-m-rl[_ngcontent-%COMP%]{margin-left:0;margin-right:0}.no-m-tb[_ngcontent-%COMP%], .no-m-bt[_ngcontent-%COMP%]{margin-top:0;margin-bottom:0}.m-t-only[_ngcontent-%COMP%]{margin-left:0;margin-right:0;margin-bottom:0}.m-b-only[_ngcontent-%COMP%]{margin-left:0;margin-right:0;margin-top:0}.m-l-only[_ngcontent-%COMP%]{margin-right:0;margin-top:0;margin-bottom:0}.m-r-only[_ngcontent-%COMP%]{margin-left:0;margin-top:0;margin-bottom:0}.m-auto[_ngcontent-%COMP%]{margin-left:auto;margin-right:auto}.ls-0[_ngcontent-%COMP%]{margin-left:10px;margin-right:10px}.column-mandatory[_ngcontent-%COMP%]{color:#5cb85c;text-align:center}.not-column-mandatory[_ngcontent-%COMP%]{color:#666f73;text-align:center}.cdk-drag-placeholder[_ngcontent-%COMP%]{background:#3498db}.yes[_ngcontent-%COMP%]{color:#5cb85c!important;background-color:#5cb85c;height:4px;cursor:none}.no[_ngcontent-%COMP%]{color:red;background-color:red;height:4px;cursor:none}.strike[_ngcontent-%COMP%]{text-decoration:line-through;color:red}.transfer[_ngcontent-%COMP%]{color:#16a085}.linked[_ngcontent-%COMP%]{color:#4461e2}.accrual[_ngcontent-%COMP%]{color:#999}html[_ngcontent-%COMP%], body[_ngcontent-%COMP%]{-webkit-tap-highlight-color:transparent}div[_ngcontent-%COMP%]{box-sizing:border-box}.color-inherit[_ngcontent-%COMP%]{color:inherit}.no-shadow[_ngcontent-%COMP%]{box-shadow:none}.pointer[_ngcontent-%COMP%]{cursor:pointer}.nolist[_ngcontent-%COMP%]{list-style:none}.actions-menu[_ngcontent-%COMP%]{color:#fff}.alert[_ngcontent-%COMP%]{background-color:#e8f4fd;padding:6px 16px;font-size:.875rem;font-family:Roboto,Helvetica,Arial,sans-serif;font-weight:400;line-height:1.43;border-radius:4px;letter-spacing:.01071em;margin:10px}.alert[_ngcontent-%COMP%]   .message[_ngcontent-%COMP%]{padding:8px 0;font-size:18px}.alert[_ngcontent-%COMP%]   .alert-check[_ngcontent-%COMP%]{color:#359ff4;margin-right:2px;font-size:1.4rem}  .mat-tooltip{font-size:15px;white-space:pre-wrap;color:#fff!important;background-color:#4461e2b3;border:1px solid #1a34a6;max-width:400px!important;white-space:pre-line!important}html[_ngcontent-%COMP%], body[_ngcontent-%COMP%]{overflow:hidden}.overflow-x-scroll[_ngcontent-%COMP%]{max-width:100%;overflow-x:auto}.overflow-no[_ngcontent-%COMP%]{overflow:hidden}.overflow-auto[_ngcontent-%COMP%]{overflow:auto}.overflow-scroll[_ngcontent-%COMP%]{overflow:scroll}.table-container[_ngcontent-%COMP%]{overflow-x:auto;max-width:100%}body[_ngcontent-%COMP%], .no-p[_ngcontent-%COMP%]{padding:0}.no-p-t[_ngcontent-%COMP%]{padding-top:0}.no-p-r[_ngcontent-%COMP%]{padding-right:0}.no-p-b[_ngcontent-%COMP%]{padding-bottom:0}.no-p-l[_ngcontent-%COMP%]{padding-left:0}.no-p-v[_ngcontent-%COMP%], .no-p-h[_ngcontent-%COMP%]{padding:0}.p-5[_ngcontent-%COMP%]{padding:5px}.p-t-5[_ngcontent-%COMP%]{padding-top:5px}.p-r-5[_ngcontent-%COMP%]{padding-right:5px}.p-b-5[_ngcontent-%COMP%]{padding-bottom:5px}.p-l-5[_ngcontent-%COMP%]{padding-left:5px}.p-v-5[_ngcontent-%COMP%]{padding:5px 0}.p-h-5[_ngcontent-%COMP%]{padding:0 5px}.p-10[_ngcontent-%COMP%]{padding:10px}.p-t-10[_ngcontent-%COMP%]{padding-top:10px}.p-r-10[_ngcontent-%COMP%]{padding-right:10px}.p-b-10[_ngcontent-%COMP%]{padding-bottom:10px}.p-l-10[_ngcontent-%COMP%]{padding-left:10px}.p-v-10[_ngcontent-%COMP%]{padding:10px 0}.p-h-10[_ngcontent-%COMP%]{padding:0 10px}.p-15[_ngcontent-%COMP%]{padding:15px}.p-t-15[_ngcontent-%COMP%]{padding-top:15px}.p-r-15[_ngcontent-%COMP%]{padding-right:15px}.p-b-15[_ngcontent-%COMP%]{padding-bottom:15px}.p-l-15[_ngcontent-%COMP%]{padding-left:15px}.p-v-15[_ngcontent-%COMP%]{padding:15px 0}.p-h-15[_ngcontent-%COMP%]{padding:0 15px}.p-20[_ngcontent-%COMP%]{padding:20px}.p-t-20[_ngcontent-%COMP%]{padding-top:20px}.p-r-20[_ngcontent-%COMP%]{padding-right:20px}.p-b-20[_ngcontent-%COMP%]{padding-bottom:20px}.p-l-20[_ngcontent-%COMP%]{padding-left:20px}.p-v-20[_ngcontent-%COMP%]{padding:20px 0}.p-h-20[_ngcontent-%COMP%]{padding:0 20px}.p-25[_ngcontent-%COMP%]{padding:25px}.p-t-25[_ngcontent-%COMP%]{padding-top:25px}.p-r-25[_ngcontent-%COMP%]{padding-right:25px}.p-b-25[_ngcontent-%COMP%]{padding-bottom:25px}.p-l-25[_ngcontent-%COMP%]{padding-left:25px}.p-v-25[_ngcontent-%COMP%]{padding:25px 0}.p-h-25[_ngcontent-%COMP%]{padding:0 25px}.p-30[_ngcontent-%COMP%]{padding:30px}.p-t-30[_ngcontent-%COMP%]{padding-top:30px}.p-r-30[_ngcontent-%COMP%]{padding-right:30px}.p-b-30[_ngcontent-%COMP%]{padding-bottom:30px}.p-l-30[_ngcontent-%COMP%]{padding-left:30px}.p-v-30[_ngcontent-%COMP%]{padding:30px 0}.p-h-30[_ngcontent-%COMP%]{padding:0 30px}.p-35[_ngcontent-%COMP%]{padding:35px}.p-t-35[_ngcontent-%COMP%]{padding-top:35px}.p-r-35[_ngcontent-%COMP%]{padding-right:35px}.p-b-35[_ngcontent-%COMP%]{padding-bottom:35px}.p-l-35[_ngcontent-%COMP%]{padding-left:35px}.p-v-35[_ngcontent-%COMP%]{padding:35px 0}.p-h-35[_ngcontent-%COMP%]{padding:0 35px}.p-40[_ngcontent-%COMP%]{padding:40px}.p-t-40[_ngcontent-%COMP%]{padding-top:40px}.p-r-40[_ngcontent-%COMP%]{padding-right:40px}.p-b-40[_ngcontent-%COMP%]{padding-bottom:40px}.p-l-40[_ngcontent-%COMP%]{padding-left:40px}.p-v-40[_ngcontent-%COMP%]{padding-top:40px;padding-bottom:40px}.p-h-40[_ngcontent-%COMP%]{padding:0 40px}.p-45[_ngcontent-%COMP%]{padding:45px}.p-t-45[_ngcontent-%COMP%]{padding-top:45px}.p-r-45[_ngcontent-%COMP%]{padding-right:45px}.p-b-45[_ngcontent-%COMP%]{padding-bottom:45px}.p-l-45[_ngcontent-%COMP%]{padding-left:45px}.p-v-45[_ngcontent-%COMP%]{padding:45px 0}.p-h-45[_ngcontent-%COMP%]{padding:0 45px}.p-50[_ngcontent-%COMP%]{padding:50px}.p-t-50[_ngcontent-%COMP%]{padding-top:50px}.p-r-50[_ngcontent-%COMP%]{padding-right:50px}.p-b-50[_ngcontent-%COMP%]{padding-bottom:50px}.p-l-50[_ngcontent-%COMP%]{padding-left:50px}.p-v-50[_ngcontent-%COMP%]{padding:50px 0}.p-h-50[_ngcontent-%COMP%]{padding:0 50px}.p-55[_ngcontent-%COMP%]{padding:55px}.p-t-55[_ngcontent-%COMP%]{padding-top:55px}.p-r-55[_ngcontent-%COMP%]{padding-right:55px}.p-b-55[_ngcontent-%COMP%]{padding-bottom:55px}.p-l-55[_ngcontent-%COMP%]{padding-left:55px}.p-v-55[_ngcontent-%COMP%]{padding:55px 0}.p-h-55[_ngcontent-%COMP%]{padding:0 55px}.p-60[_ngcontent-%COMP%]{padding:60px}.p-t-60[_ngcontent-%COMP%]{padding-top:60px}.p-r-60[_ngcontent-%COMP%]{padding-right:60px}.p-b-60[_ngcontent-%COMP%]{padding-bottom:60px}.p-l-60[_ngcontent-%COMP%]{padding-left:60px}.p-v-60[_ngcontent-%COMP%]{padding:60px 0}.p-h-60[_ngcontent-%COMP%]{padding:0 60px}.p-65[_ngcontent-%COMP%]{padding:65px}.p-t-65[_ngcontent-%COMP%]{padding-top:65px}.p-r-65[_ngcontent-%COMP%]{padding-right:65px}.p-b-65[_ngcontent-%COMP%]{padding-bottom:65px}.p-l-65[_ngcontent-%COMP%]{padding-left:65px}.p-v-65[_ngcontent-%COMP%]{padding:65px 0}.p-h-65[_ngcontent-%COMP%]{padding:0 65px}.p-70[_ngcontent-%COMP%]{padding:70px}.p-t-70[_ngcontent-%COMP%]{padding-top:70px}.p-r-70[_ngcontent-%COMP%]{padding-right:70px}.p-b-70[_ngcontent-%COMP%]{padding-bottom:70px}.p-l-70[_ngcontent-%COMP%]{padding-left:70px}.p-v-70[_ngcontent-%COMP%]{padding:70px 0}.p-h-70[_ngcontent-%COMP%]{padding:0 70px}.p-75[_ngcontent-%COMP%]{padding:75px}.p-t-75[_ngcontent-%COMP%]{padding-top:75px}.p-r-75[_ngcontent-%COMP%]{padding-right:75px}.p-b-75[_ngcontent-%COMP%]{padding-bottom:75px}.p-l-75[_ngcontent-%COMP%]{padding-left:75px}.p-v-75[_ngcontent-%COMP%]{padding:75px 0}.p-h-75[_ngcontent-%COMP%]{padding:0 75px}.p-80[_ngcontent-%COMP%]{padding:80px}.p-t-80[_ngcontent-%COMP%]{padding-top:80px}.p-r-80[_ngcontent-%COMP%]{padding-right:80px}.p-b-80[_ngcontent-%COMP%]{padding-bottom:80px}.p-l-80[_ngcontent-%COMP%]{padding-left:80px}.p-v-80[_ngcontent-%COMP%]{padding:80px 0}.p-h-80[_ngcontent-%COMP%]{padding:0 80px}.no-padding[_ngcontent-%COMP%]{padding:0!important}.no-pad-lr[_ngcontent-%COMP%], .no-pad-rl[_ngcontent-%COMP%]{padding-left:0;padding-right:0}.no-pad-tb[_ngcontent-%COMP%], .no-pad-bt[_ngcontent-%COMP%]{padding-top:0;padding-bottom:0}.pad-t-only[_ngcontent-%COMP%]{padding-left:0;padding-right:0;padding-bottom:0}.pad-b-only[_ngcontent-%COMP%]{padding-left:0;padding-right:0;padding-top:0}.pad-l-only[_ngcontent-%COMP%]{padding-right:0;padding-top:0;padding-bottom:0}.pad-r-only[_ngcontent-%COMP%]{padding-left:0;padding-top:0;padding-bottom:0}html[_ngcontent-%COMP%], body[_ngcontent-%COMP%], .rel[_ngcontent-%COMP%], .relative[_ngcontent-%COMP%]{position:relative}.abs[_ngcontent-%COMP%], .absolute[_ngcontent-%COMP%]{position:absolute}.fixed[_ngcontent-%COMP%]{position:fixed}.status-active[_ngcontent-%COMP%]{color:#5cb85c}.status-inactive[_ngcontent-%COMP%]{color:#666f73}.status-deleted[_ngcontent-%COMP%]{color:#000}.status-pending[_ngcontent-%COMP%]{color:orange}.status-approved[_ngcontent-%COMP%]{color:#4461e2}.status-overpaid[_ngcontent-%COMP%]{color:purple}.status-chargeoff[_ngcontent-%COMP%]{color:#f39c12}.status-active-overdue[_ngcontent-%COMP%], .status-block[_ngcontent-%COMP%]{color:red}.status-matured[_ngcontent-%COMP%]{color:#ff4000}.mat-step-header[_ngcontent-%COMP%]   .mat-step-icon-state-done[_ngcontent-%COMP%]{background-color:#2af72a}.mat-step-header[_ngcontent-%COMP%]   .mat-step-icon-state-done[_ngcontent-%COMP%]   .status-transfer-progress[_ngcontent-%COMP%]{color:#ff4000}.mat-step-header[_ngcontent-%COMP%]   .mat-step-icon-state-done[_ngcontent-%COMP%]   .status-transfer-hold[_ngcontent-%COMP%]{color:#df0101}html[_ngcontent-%COMP%], body[_ngcontent-%COMP%]{-webkit-font-smoothing:antialiased}html[_ngcontent-%COMP%]{font-size:16px}body[_ngcontent-%COMP%]{font-weight:400;font-size:.875rem;color:#000000de;line-height:1.5;font-family:Roboto,Helvetica Neue,sans-serif}.lh-1[_ngcontent-%COMP%]{line-height:1}.lh-13[_ngcontent-%COMP%]{line-height:1.3}.lh-15[_ngcontent-%COMP%]{line-height:1.5}.bold[_ngcontent-%COMP%], .strong[_ngcontent-%COMP%]{font-weight:700}.no-bold[_ngcontent-%COMP%]{font-weight:400}.italic[_ngcontent-%COMP%], .em[_ngcontent-%COMP%]{font-style:italic}.strike[_ngcontent-%COMP%]{text-decoration:line-through}.normal[_ngcontent-%COMP%]{font-weight:400;font-style:normal}.uppercase[_ngcontent-%COMP%]{text-transform:uppercase}.text-left[_ngcontent-%COMP%]{text-align:left}.text-center[_ngcontent-%COMP%]{text-align:center}.text-right[_ngcontent-%COMP%]{text-align:right}.w100[_ngcontent-%COMP%]{font-weight:100}.w200[_ngcontent-%COMP%]{font-weight:200}.w300[_ngcontent-%COMP%]{font-weight:300}.w400[_ngcontent-%COMP%]{font-weight:400}.w500[_ngcontent-%COMP%]{font-weight:500}.w600[_ngcontent-%COMP%]{font-weight:600}.w700[_ngcontent-%COMP%]{font-weight:700}.w800[_ngcontent-%COMP%]{font-weight:800}.w900[_ngcontent-%COMP%]{font-weight:900}.f9[_ngcontent-%COMP%]{font-size:9px}.f10[_ngcontent-%COMP%]{font-size:10px}.f11[_ngcontent-%COMP%]{font-size:11px}.f12[_ngcontent-%COMP%]{font-size:12px}.f13[_ngcontent-%COMP%]{font-size:13px}.f14[_ngcontent-%COMP%]{font-size:14px}.f15[_ngcontent-%COMP%]{font-size:15px}.f16[_ngcontent-%COMP%]{font-size:16px}.f17[_ngcontent-%COMP%]{font-size:17px}.f18[_ngcontent-%COMP%]{font-size:18px;line-height:30px}.f19[_ngcontent-%COMP%]{font-size:19px}.f20[_ngcontent-%COMP%]{font-size:20px}.f30[_ngcontent-%COMP%]{font-size:30px}.f40[_ngcontent-%COMP%]{font-size:40px}.f50[_ngcontent-%COMP%]{font-size:50px}.f60[_ngcontent-%COMP%]{font-size:60px}.size-small[_ngcontent-%COMP%]{font-size:75%}.size-normal[_ngcontent-%COMP%]{font-size:100%}.size-medium[_ngcontent-%COMP%]{font-size:125%}.size-big[_ngcontent-%COMP%], .size-large[_ngcontent-%COMP%]{font-size:150%}.size-huge[_ngcontent-%COMP%]{font-size:200%}.inherit[_ngcontent-%COMP%]{font:inherit}.text-shadow[_ngcontent-%COMP%]{text-shadow:1px 1px 1px rgba(0,0,0,.4)}.text-rgb-2[_ngcontent-%COMP%]{color:#0003}.text-rgb-3[_ngcontent-%COMP%]{color:#0000004d}.text-rgb-4[_ngcontent-%COMP%]{color:#0006}.text-rgb-5[_ngcontent-%COMP%]{color:#00000080}.no-ul[_ngcontent-%COMP%], .no-ul[_ngcontent-%COMP%]:hover, .no-ul[_ngcontent-%COMP%]   a[_ngcontent-%COMP%], .no-ul[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover{text-decoration:none}.no-wrap[_ngcontent-%COMP%]{white-space:nowrap}.auto-cell-size[_ngcontent-%COMP%]{white-space:nowrap;width:1%}.ls-0[_ngcontent-%COMP%]{letter-spacing:-3px;white-space:nowrap}.label-field[_ngcontent-%COMP%]{margin-top:32px}.fit[_ngcontent-%COMP%]{max-width:100%}.half-width[_ngcontent-%COMP%]{width:50%}.full-width[_ngcontent-%COMP%]{width:100%}.full-height[_ngcontent-%COMP%]{height:100%}html[_ngcontent-%COMP%], body[_ngcontent-%COMP%]{width:100%;height:100%;min-height:100%}body[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]{width:100%}.container[_ngcontent-%COMP%]{max-width:74rem;width:90%}.mw300[_ngcontent-%COMP%]{max-width:300px}.mw400[_ngcontent-%COMP%]{max-width:400px}.mw500[_ngcontent-%COMP%]{max-width:500px}.mw600[_ngcontent-%COMP%]{max-width:600px}.fullwidth[_ngcontent-%COMP%]{width:100%}.zindex-1[_ngcontent-%COMP%]{z-index:1}.zindex-2[_ngcontent-%COMP%]{z-index:2}.zindex-3[_ngcontent-%COMP%]{z-index:3}.zindex-4[_ngcontent-%COMP%]{z-index:4}.content[_ngcontent-%COMP%]{width:100%;padding-bottom:25px}.content[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]{text-align:left}.content[_ngcontent-%COMP%]   .attribute[_ngcontent-%COMP%]{font-weight:500}"]}),e})()}}]);