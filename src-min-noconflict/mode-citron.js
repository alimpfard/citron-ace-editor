ace.define("ace/mode/citron_highlight_rules",["require","exports","module","ace/lib/oop","ace/mode/text_highlight_rules"],function(e,t,n){"use strict";var r=e("../lib/oop"),i=e("./text_highlight_rules").TextHighlightRules,s=function(){this.$rules={start:[{include:"#main"}],"#main":[{token:"keyword.other.unit.Citron",regex:/\b(?:var|my|const|frozen)\b/,push:[{token:"variable.Citron",regex:/[^\s\d\x003a.\x002c\[\]\(\)\{\}\#][^\s\x003a.\x002c\[\]\(\)\{\}\#]*/,next:"pop"},{defaultToken:"variable.Citron"}]},{token:["keyword.other.unit.Citron","entity.name.Citron"],regex:/(pure)(\s*\{)/,push:[{token:"entity.name.Citron",regex:/\}/,next:"pop"},{include:"#main__2"}]},{token:"constant.character.escape.Citron",regex:/\$[\x0021\x002c\x0027\x0060](?!=\s)/},{token:"constant.character.escape.Citron",regex:/\$(?=\()/},{token:"entity.name.Citron",regex:/[\[\]\(\)\^\}]/},{token:["text.Citron","keyword.control.Citron","text.Citron"],regex:/(\s*)(\bis\b|\:\=|\=\>)(\s*)/},{token:"string.regexp.Citron",regex:/\?>/,push:[{token:"string.regexp.Citron",regex:/<\?/,next:"pop"},{include:"#main__3"}]},{token:"constant.numeric.Citron",regex:/0[xX][0-9a-fA-F]+|0[cC][0-7]+|0[bB][01]+|\d+\.\d+|\d+/},{token:"string.Citron",regex:/'/,push:[{token:"string.Citron",regex:/(?!<\\)'/,next:"pop"},{include:"#string"}]},{token:["keyword.control.Citron","keyword.other.unit.Citron"],regex:/(\\)((?:\:[^\s\d\x003a.\x002c\[\]\(\)\{\}\#][^\s\x003a.\x002c\[\]\(\)\{\}\#]*\s*|\:\(.*\))+)/,push:[{token:"entity.name.Citron",regex:/\s*?/,next:"pop"},{defaultToken:"text.Citron"}]},{token:["entity.name.Citron","markup.deleted.Citron","keyword.other.unit.Citron","markup.deleted.Citron","markup.deleted.Citron"],regex:/(\{)(asm)((?:\s*\:\s*\w+)*)((?:\s*(?:intel|att|at\&t))?)(\s*\(.*\)\s*)/,push:[{token:"entity.name.Citron",regex:/\}/,next:"pop"},{include:"#main__5"}]},{token:["entity.name.Citron","keyword.other.unit.Citron"],regex:/(\{)((?:\s*\:(?:[^\s\d\x003a.\x002c\[\]\(\)\{\}\#][^\s\x003a.\x002c\[\]\(\)\{\}\#]*|\(.*\)))*)/,push:[{token:"entity.name.Citron",regex:/\s*/,next:"pop"},{defaultToken:"entity.name.Citron"}]},{token:"comment.Citron",regex:/\#:/,push:[{token:["markup.deleted.Citron","entity.name.Citron","string.regexp.Citron","entity.name.Citron","entity.name.function.Citron","markup.deleted.Citron","entity.name.Citron","string.regexp.Citron"],regex:/(declare)(\s+)(infixr|infixl|lazyev)(\s*)(.*)|(language)(\s+)(.*)$/,next:"pop"},{defaultToken:"markup.deleted.Citron"}]},{token:"comment.Citron",regex:/\#.*$/},{token:"entity.name.function.Citron",regex:/[^\s\d\x003a.\x002c\[\]\(\)\{\}\#][^\s\x003a.\x002c\[\]\(\)\{\}\#]*\:/,push:[{token:"entity.name.Citron",regex:/\s*/,next:"pop"},{defaultToken:"entity.name.Citron"}]},{token:"constant.character.escape.Citron",regex:/\\/,push:[{token:["constant.character.escape.Citron","keyword.control.Citron"],regex:/([^\x003a]\w*)|(\:[^\s\d\x003a.\x002c\[\]\(\)\{\}\#][^\s\x003a.\x002c\[\]\(\)\{\}\#]*)/,next:"pop"},{defaultToken:"keyword.control.Citron"}]},{token:["entity.name.Citron","entity.name.function.Citron","entity.name.Citron"],regex:/(\s+)([^\s\d\x003a.\x002c\[\]\(\)\{\}\#]|[-\x002b\x002a\x0026\x0025\x0024\x0040\x0021\x003d\x0022\x003b\x002f\x005c\x003c\x003e\x003f\x007e]+)(\s+)/,push:[{token:"entity.name.Citron",regex:/\s*/,next:"pop"},{defaultToken:"entity.name.Citron"}]},{token:["constant.character.escape.Citron","entity.name.type.Citron","constant.character.escape.Citron"],regex:/(\`)([^\s\d\x003a.\x002c\[\]\(\)\{\}\#][^\s\x003a.\x002c\[\]\(\)\{\}\#]*)(\1)/,push:[{token:"entity.name.Citron",regex:/\s*?/,next:"pop"},{defaultToken:"entity.name.Citron"}]},{token:["constant.character.escape.Citron","text.Citron","constant.character.escape.Citron"],regex:/(\`?)([^\s\d\x003a.\x002c\[\]\(\)\{\}\#][^\s\x003a.\x002c\[\]\(\)\{\}\#]*)(\1)/,push:[{token:"entity.name.Citron",regex:/\s*?/,next:"pop"},{defaultToken:"entity.name.Citron"}]}],"#asm":[{token:"comment.Citron",regex:/.*/}],"#expr_interpolation":[{token:"keyword.other.unit.Citron",regex:/\b(?:var|my|const|frozen)\b/,push:[{token:"variable.Citron",regex:/[^\s\d\x003a.\x002c\[\]\(\)\{\}\#][^\s\x003a.\x002c\[\]\(\)\{\}\#]*/,next:"pop"},{defaultToken:"variable.Citron"}]},{token:["keyword.other.unit.Citron","entity.name.Citron"],regex:/(pure)(\s*\{)/,push:[{token:"entity.name.Citron",regex:/\}/,next:"pop"},{include:"#expr_interpolation__2"}]},{token:"constant.character.escape.Citron",regex:/\$[\x0021\x002c\x0027\x0060](?!=\s)/},{token:"constant.character.escape.Citron",regex:/\$(?=\()/},{token:"entity.name.Citron",regex:/[\[\]\(\)\^\}]/},{token:["text.Citron","keyword.control.Citron","text.Citron"],regex:/(\s*)(\bis\b|\:\=|\=\>)(\s*)/},{token:"string.regexp.Citron",regex:/\?>/,push:[{token:"string.regexp.Citron",regex:/<\?/,next:"pop"},{include:"#expr_interpolation__3"}]},{token:"constant.numeric.Citron",regex:/0[xX][0-9a-fA-F]+|0[cC][0-7]+|0[bB][01]+|\d+\.\d+|\d+/},{token:"string.Citron",regex:/'/,push:[{token:"string.Citron",regex:/(?!<\\)'/,next:"pop"},{include:"#string"}]},{token:["keyword.control.Citron","keyword.other.unit.Citron"],regex:/(\\)((?:\:[^\s\d\x003a.\x002c\[\]\(\)\{\}\#][^\s\x003a.\x002c\[\]\(\)\{\}\#]*\s*)+)/,push:[{token:"entity.name.Citron",regex:/\s*?/,next:"pop"},{defaultToken:"text.Citron"}]},{token:["entity.name.Citron","markup.deleted.Citron","keyword.other.unit.Citron","markup.deleted.Citron","markup.deleted.Citron"],regex:/(\{)(asm)((?:\s*\:\s*\w+)*)((?:\s*(?:intel|att|at\&t))?)(\s*\(.*\)\s*)/,push:[{token:"entity.name.Citron",regex:/\}/,next:"pop"},{include:"#expr_interpolation__5"}]},{token:["entity.name.Citron","keyword.other.unit.Citron"],regex:/(\{)((?:\s*\:[^\s\d\x003a.\x002c\[\]\(\)\{\}\#][^\s\x003a.\x002c\[\]\(\)\{\}\#]*)*)/,push:[{token:"entity.name.Citron",regex:/\s*/,next:"pop"},{defaultToken:"entity.name.Citron"}]},{token:"comment.Citron",regex:/\#:/,push:[{token:["markup.deleted.Citron","entity.name.Citron","string.regexp.Citron","entity.name.Citron","entity.name.function.Citron","markup.deleted.Citron","entity.name.Citron","string.regexp.Citron"],regex:/(declare)(\s+)(infixr|infixl|lazyev)(\s*)(.*)|(language)(\s+)(.*)$/,next:"pop"},{defaultToken:"markup.deleted.Citron"}]},{token:"comment.Citron",regex:/\#.*$/},{token:"entity.name.function.Citron",regex:/[^\s\d\x003a.\x002c\[\]\(\)\{\}\#][^\s\x003a.\x002c\[\]\(\)\{\}\#]*\:/,push:[{token:"entity.name.Citron",regex:/\s*/,next:"pop"},{defaultToken:"entity.name.Citron"}]},{token:"constant.character.escape.Citron",regex:/\\/,push:[{token:["constant.character.escape.Citron","keyword.control.Citron"],regex:/([^\x003a]\w*)|(\:[^\s\d\x003a.\x002c\[\]\(\)\{\}\#][^\s\x003a.\x002c\[\]\(\)\{\}\#]*)/,next:"pop"},{defaultToken:"keyword.control.Citron"}]},{token:["entity.name.Citron","entity.name.function.Citron","entity.name.Citron"],regex:/(\s+)([^\s\d\x003a.\x002c\[\]\(\)\{\}\#]|[-\x002b\x002a\x0026\x0025\x0024\x0040\x0021\x003d\x0022\x003b\x002f\x005c\x003c\x003e\x003f\x007e]+)(\s+)/,push:[{token:"entity.name.Citron",regex:/\s*/,next:"pop"},{defaultToken:"entity.name.Citron"}]},{token:["constant.character.escape.Citron","entity.name.type.Citron","constant.character.escape.Citron"],regex:/(\`)([^\s\d\x003a.\x002c\[\]\(\)\{\}\#][^\s\x003a.\x002c\[\]\(\)\{\}\#]*)(\1)/,push:[{token:"entity.name.Citron",regex:/\s*?/,next:"pop"},{defaultToken:"entity.name.Citron"}]},{token:["constant.character.escape.Citron","text.Citron","constant.character.escape.Citron"],regex:/(\`?)([^\s\d\x003a.\x002c\[\]\(\)\{\}\#][^\s\x003a.\x002c\[\]\(\)\{\}\#]*)(\1)/,push:[{token:"entity.name.Citron",regex:/\s*?/,next:"pop"},{defaultToken:"entity.name.Citron"}]}],"#expr_interpolation__1":[],"#expr_interpolation__10":[],"#expr_interpolation__11":[],"#expr_interpolation__12":[],"#expr_interpolation__2":[{token:"text.Citron",regex:/./}],"#expr_interpolation__3":[{token:"string.regexp.Citron",regex:/./}],"#expr_interpolation__4":[],"#expr_interpolation__5":[{token:[],regex:/\s*/,push:[{token:[],regex:/(?=\})/,next:"pop"},{include:"#asm"}]}],"#expr_interpolation__6":[],"#expr_interpolation__7":[],"#expr_interpolation__8":[],"#expr_interpolation__9":[],"#main__1":[],"#main__10":[],"#main__11":[],"#main__12":[],"#main__2":[{token:"text.Citron",regex:/./}],"#main__3":[{token:"string.regexp.Citron",regex:/./}],"#main__4":[],"#main__5":[{token:[],regex:/\s*/,push:[{token:[],regex:/(?=\})/,next:"pop"},{include:"#asm"}]}],"#main__6":[],"#main__7":[],"#main__8":[],"#main__9":[],"#string":[{token:["constant.character.escape.Citron","entity.name.function.Citron"],regex:/(\$\$)(\w+)\b/},{token:"constant.character.escape.Citron",regex:/\\[^xu]/},{token:["constant.character.escape.Citron","constant.character.escape.Citron","constant.numeric.Citron","constant.character.escape.Citron"],regex:/(\\[xuXU])([\x007b]?)([0-9a-fA-F]+)([\x007d]?)/},{token:"constant.character.escape.Citron",regex:/\$\{\{/,push:[{token:"constant.character.escape.Citron",regex:/\}\}\$/,next:"pop"},{include:"#expr_interpolation"}]},{token:"string.Citron",regex:/./}]},this.normalizeRules()};s.metaData={fileTypes:["ctr"],name:"Citron",scopeName:"source.Citron"},r.inherits(s,i),t.CitronHighlightRules=s}),ace.define("ace/mode/folding/cstyle",["require","exports","module","ace/lib/oop","ace/range","ace/mode/folding/fold_mode"],function(e,t,n){"use strict";var r=e("../../lib/oop"),i=e("../../range").Range,s=e("./fold_mode").FoldMode,o=t.FoldMode=function(e){e&&(this.foldingStartMarker=new RegExp(this.foldingStartMarker.source.replace(/\|[^|]*?$/,"|"+e.start)),this.foldingStopMarker=new RegExp(this.foldingStopMarker.source.replace(/\|[^|]*?$/,"|"+e.end)))};r.inherits(o,s),function(){this.foldingStartMarker=/([\{\[\(])[^\}\]\)]*$|^\s*(\/\*)/,this.foldingStopMarker=/^[^\[\{\(]*([\}\]\)])|^[\s\*]*(\*\/)/,this.singleLineBlockCommentRe=/^\s*(\/\*).*\*\/\s*$/,this.tripleStarBlockCommentRe=/^\s*(\/\*\*\*).*\*\/\s*$/,this.startRegionRe=/^\s*(\/\*|\/\/)#?region\b/,this._getFoldWidgetBase=this.getFoldWidget,this.getFoldWidget=function(e,t,n){var r=e.getLine(n);if(this.singleLineBlockCommentRe.test(r)&&!this.startRegionRe.test(r)&&!this.tripleStarBlockCommentRe.test(r))return"";var i=this._getFoldWidgetBase(e,t,n);return!i&&this.startRegionRe.test(r)?"start":i},this.getFoldWidgetRange=function(e,t,n,r){var i=e.getLine(n);if(this.startRegionRe.test(i))return this.getCommentRegionBlock(e,i,n);var s=i.match(this.foldingStartMarker);if(s){var o=s.index;if(s[1])return this.openingBracketBlock(e,s[1],n,o);var u=e.getCommentFoldRange(n,o+s[0].length,1);return u&&!u.isMultiLine()&&(r?u=this.getSectionRange(e,n):t!="all"&&(u=null)),u}if(t==="markbegin")return;var s=i.match(this.foldingStopMarker);if(s){var o=s.index+s[0].length;return s[1]?this.closingBracketBlock(e,s[1],n,o):e.getCommentFoldRange(n,o,-1)}},this.getSectionRange=function(e,t){var n=e.getLine(t),r=n.search(/\S/),s=t,o=n.length;t+=1;var u=t,a=e.getLength();while(++t<a){n=e.getLine(t);var f=n.search(/\S/);if(f===-1)continue;if(r>f)break;var l=this.getFoldWidgetRange(e,"all",t);if(l){if(l.start.row<=s)break;if(l.isMultiLine())t=l.end.row;else if(r==f)break}u=t}return new i(s,o,u,e.getLine(u).length)},this.getCommentRegionBlock=function(e,t,n){var r=t.search(/\s*$/),s=e.getLength(),o=n,u=/^\s*(?:\/\*|\/\/|--)#?(end)?region\b/,a=1;while(++n<s){t=e.getLine(n);var f=u.exec(t);if(!f)continue;f[1]?a--:a++;if(!a)break}var l=n;if(l>o)return new i(o,r,l,t.length)}}.call(o.prototype)}),ace.define("ace/mode/citron",["require","exports","module","ace/lib/oop","ace/mode/text","ace/mode/citron_highlight_rules","ace/mode/folding/cstyle"],function(e,t,n){"use strict";var r=e("../lib/oop"),i=e("./text").Mode,s=e("./citron_highlight_rules").CitronHighlightRules,o=e("./folding/cstyle").FoldMode,u=function(){this.HighlightRules=s,this.foldingRules=new o};r.inherits(u,i),function(){this.$id="ace/mode/citron"}.call(u.prototype),t.Mode=u});                (function() {
                    ace.require(["ace/mode/citron"], function(m) {
                        if (typeof module == "object" && typeof exports == "object" && module) {
                            module.exports = m;
                        }
                    });
                })();
            