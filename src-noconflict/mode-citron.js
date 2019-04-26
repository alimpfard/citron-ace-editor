ace.define("ace/mode/citron_highlight_rules",["require","exports","module","ace/lib/oop","ace/mode/text_highlight_rules"], function(require, exports, module) {
"use strict";

var oop = require("../lib/oop");
var TextHighlightRules = require("./text_highlight_rules").TextHighlightRules;

var CitronHighlightRules = function() {

    this.$rules = {
        start: [{
            include: "#main"
        }],
        "#main": [{
            token: "markup.deleted.Citron",
            regex: /@comptime\b/,
            push: [{
                token: "entity.name.Citron",
                regex: /\s*/,
                next: "pop"
            }, {
                defaultToken: "entity.name.Citron"
            }]
        }, {
            token: "keyword.other.unit.Citron",
            regex: /\b(?:var|my|const|frozen)\b/,
            push: [{
                token: [
                    "constant.character.escape.Citron",
                    "variable.Citron"
                ],
                regex: /((?:&&|&)?)([^\s\d\x003a.\x002c\[\]\(\)\{\}\#][^\s\x003a.\x002c\[\]\(\)\{\}\#]*)/,
                next: "pop"
            }, {
                defaultToken: "variable.Citron"
            }]
        }, {
            token: [
                "keyword.other.unit.Citron",
                "entity.name.Citron"
            ],
            regex: /(pure)(\s*\{)/,
            push: [{
                token: "entity.name.Citron",
                regex: /\}/,
                next: "pop"
            }, {
                include: "#main__3"
            }]
        }, {
            token: "constant.character.escape.Citron",
            regex: /\$[\x0021\x002c\x0027\x0060](?!=\s)/
        }, {
            token: "constant.character.escape.Citron",
            regex: /\$(?=\()/
        }, {
            token: "entity.name.Citron",
            regex: /[\[\]\(\)\^\}]/
        }, {
            token: [
                "text.Citron",
                "keyword.control.Citron",
                "text.Citron"
            ],
            regex: /(\s*)(\bis\b|\:\=|\=\>)(\s*)/
        }, {
            token: "string.regexp.Citron",
            regex: /\?>/,
            push: [{
                token: "string.regexp.Citron",
                regex: /<\?/,
                next: "pop"
            }, {
                include: "#main__4"
            }]
        }, {
            token: "constant.numeric.Citron",
            regex: /0[xX][0-9a-fA-F]+|0[cC][0-7]+|0[bB][01]+|\d+\.\d+|\d+/
        }, {
            token: "string.Citron",
            regex: /'/,
            push: [{
                token: "string.Citron",
                regex: /(?!<\\)'/,
                next: "pop"
            }, {
                include: "#string"
            }]
        }, {
            token: [
                "keyword.control.Citron",
                "keyword.other.unit.Citron"
            ],
            regex: /(\\)((?:\:[^\s\d\x003a.\x002c\[\]\(\)\{\}\#][^\s\x003a.\x002c\[\]\(\)\{\}\#]*\s*|\:\(.*\))+)/,
            push: [{
                token: "entity.name.Citron",
                regex: /\s*?/,
                next: "pop"
            }, {
                defaultToken: "text.Citron"
            }]
        }, {
            token: [
                "entity.name.Citron",
                "markup.deleted.Citron",
                "keyword.other.unit.Citron",
                "markup.deleted.Citron",
                "markup.deleted.Citron"
            ],
            regex: /(\{)(asm)((?:\s*\:\s*\w+)*)((?:\s*(?:intel|att|at\&t))?)(\s*\(.*\)\s*)/,
            push: [{
                token: "entity.name.Citron",
                regex: /\}/,
                next: "pop"
            }, {
                include: "#main__6"
            }]
        }, {
            token: [
                "entity.name.Citron",
                "keyword.other.unit.Citron"
            ],
            regex: /(\{)((?:\s*\:(?:[^\s\d\x003a.\x002c\[\]\(\)\{\}\#][^\s\x003a.\x002c\[\]\(\)\{\}\#]*|\(.*\)))*)/,
            push: [{
                token: "entity.name.Citron",
                regex: /\s*/,
                next: "pop"
            }, {
                defaultToken: "entity.name.Citron"
            }]
        }, {
            token: "comment.Citron",
            regex: /\#:/,
            push: [{
                token: [
                    "markup.deleted.Citron",
                    "entity.name.Citron",
                    "string.regexp.Citron",
                    "entity.name.Citron",
                    "entity.name.function.Citron",
                    "markup.deleted.Citron",
                    "entity.name.Citron",
                    "string.regexp.Citron"
                ],
                regex: /(declare)(\s+)(infixr|infixl|lazyev)(\s*)(.*)|(language)(\s+)(.*)$/,
                next: "pop"
            }, {
                defaultToken: "markup.deleted.Citron"
            }]
        }, {
            token: "comment.Citron",
            regex: /\#.*$/
        }, {
            token: "entity.name.function.Citron",
            regex: /[^\s\d\x003a.\x002c\[\]\(\)\{\}\#][^\s\x003a.\x002c\[\]\(\)\{\}\#]*\:/,
            push: [{
                token: "entity.name.Citron",
                regex: /\s*/,
                next: "pop"
            }, {
                defaultToken: "entity.name.Citron"
            }]
        }, {
            token: "constant.character.escape.Citron",
            regex: /\\/,
            push: [{
                token: [
                    "constant.character.escape.Citron",
                    "keyword.control.Citron"
                ],
                regex: /([^\x003a]\w*)|(\:[^\s\d\x003a.\x002c\[\]\(\)\{\}\#][^\s\x003a.\x002c\[\]\(\)\{\}\#]*)/,
                next: "pop"
            }, {
                defaultToken: "keyword.control.Citron"
            }]
        }, {
            token: [
                "entity.name.Citron",
                "entity.name.function.Citron",
                "entity.name.Citron"
            ],
            regex: /(\s+)([^\s\d\x003a.\x002c\[\]\(\)\{\}\#]|[-\x002b\x002a\x0026\x0025\x0024\x0040\x0021\x003d\x0022\x003b\x002f\x005c\x003c\x003e\x003f\x007e]+)(\s+)/,
            push: [{
                token: "entity.name.Citron",
                regex: /\s*/,
                next: "pop"
            }, {
                defaultToken: "entity.name.Citron"
            }]
        }, {
            token: [
                "constant.character.escape.Citron",
                "entity.name.type.Citron",
                "constant.character.escape.Citron"
            ],
            regex: /(\`)([^\s\d\x003a.\x002c\[\]\(\)\{\}\#][^\s\x003a.\x002c\[\]\(\)\{\}\#]*)(\1)/,
            push: [{
                token: "entity.name.Citron",
                regex: /\s*?/,
                next: "pop"
            }, {
                defaultToken: "entity.name.Citron"
            }]
        }, {
            token: [
                "constant.character.escape.Citron",
                "text.Citron",
                "constant.character.escape.Citron"
            ],
            regex: /(\`?)([^\s\d\x003a.\x002c\[\]\(\)\{\}\#][^\s\x003a.\x002c\[\]\(\)\{\}\#]*)(\1)/,
            push: [{
                token: "entity.name.Citron",
                regex: /\s*?/,
                next: "pop"
            }, {
                defaultToken: "entity.name.Citron"
            }]
        }],
        "#asm": [{
            token: "comment.Citron",
            regex: /.*/
        }],
        "#expr_interpolation": [{
            token: "keyword.other.unit.Citron",
            regex: /\b(?:var|my|const|frozen)\b/,
            push: [{
                token: "variable.Citron",
                regex: /[^\s\d\x003a.\x002c\[\]\(\)\{\}\#][^\s\x003a.\x002c\[\]\(\)\{\}\#]*/,
                next: "pop"
            }, {
                defaultToken: "variable.Citron"
            }]
        }, {
            token: [
                "keyword.other.unit.Citron",
                "entity.name.Citron"
            ],
            regex: /(pure)(\s*\{)/,
            push: [{
                token: "entity.name.Citron",
                regex: /\}/,
                next: "pop"
            }, {
                include: "#expr_interpolation__2"
            }]
        }, {
            token: "constant.character.escape.Citron",
            regex: /\$[\x0021\x002c\x0027\x0060](?!=\s)/
        }, {
            token: "constant.character.escape.Citron",
            regex: /\$(?=\()/
        }, {
            token: "entity.name.Citron",
            regex: /[\[\]\(\)\^\}]/
        }, {
            token: [
                "text.Citron",
                "keyword.control.Citron",
                "text.Citron"
            ],
            regex: /(\s*)(\bis\b|\:\=|\=\>)(\s*)/
        }, {
            token: "string.regexp.Citron",
            regex: /\?>/,
            push: [{
                token: "string.regexp.Citron",
                regex: /<\?/,
                next: "pop"
            }, {
                include: "#expr_interpolation__3"
            }]
        }, {
            token: "constant.numeric.Citron",
            regex: /0[xX][0-9a-fA-F]+|0[cC][0-7]+|0[bB][01]+|\d+\.\d+|\d+/
        }, {
            token: "string.Citron",
            regex: /'/,
            push: [{
                token: "string.Citron",
                regex: /(?!<\\)'/,
                next: "pop"
            }, {
                include: "#string"
            }]
        }, {
            token: [
                "keyword.control.Citron",
                "keyword.other.unit.Citron"
            ],
            regex: /(\\)((?:\:[^\s\d\x003a.\x002c\[\]\(\)\{\}\#][^\s\x003a.\x002c\[\]\(\)\{\}\#]*\s*)+)/,
            push: [{
                token: "entity.name.Citron",
                regex: /\s*?/,
                next: "pop"
            }, {
                defaultToken: "text.Citron"
            }]
        }, {
            token: [
                "entity.name.Citron",
                "markup.deleted.Citron",
                "keyword.other.unit.Citron",
                "markup.deleted.Citron",
                "markup.deleted.Citron"
            ],
            regex: /(\{)(asm)((?:\s*\:\s*\w+)*)((?:\s*(?:intel|att|at\&t))?)(\s*\(.*\)\s*)/,
            push: [{
                token: "entity.name.Citron",
                regex: /\}/,
                next: "pop"
            }, {
                include: "#expr_interpolation__5"
            }]
        }, {
            token: [
                "entity.name.Citron",
                "keyword.other.unit.Citron"
            ],
            regex: /(\{)((?:\s*\:[^\s\d\x003a.\x002c\[\]\(\)\{\}\#][^\s\x003a.\x002c\[\]\(\)\{\}\#]*)*)/,
            push: [{
                token: "entity.name.Citron",
                regex: /\s*/,
                next: "pop"
            }, {
                defaultToken: "entity.name.Citron"
            }]
        }, {
            token: "comment.Citron",
            regex: /\#:/,
            push: [{
                token: [
                    "markup.deleted.Citron",
                    "entity.name.Citron",
                    "string.regexp.Citron",
                    "entity.name.Citron",
                    "entity.name.function.Citron",
                    "markup.deleted.Citron",
                    "entity.name.Citron",
                    "string.regexp.Citron"
                ],
                regex: /(declare)(\s+)(infixr|infixl|lazyev)(\s*)(.*)|(language)(\s+)(.*)$/,
                next: "pop"
            }, {
                defaultToken: "markup.deleted.Citron"
            }]
        }, {
            token: "comment.Citron",
            regex: /\#.*$/
        }, {
            token: "entity.name.function.Citron",
            regex: /[^\s\d\x003a.\x002c\[\]\(\)\{\}\#][^\s\x003a.\x002c\[\]\(\)\{\}\#]*\:/,
            push: [{
                token: "entity.name.Citron",
                regex: /\s*/,
                next: "pop"
            }, {
                defaultToken: "entity.name.Citron"
            }]
        }, {
            token: "constant.character.escape.Citron",
            regex: /\\/,
            push: [{
                token: [
                    "constant.character.escape.Citron",
                    "keyword.control.Citron"
                ],
                regex: /([^\x003a]\w*)|(\:[^\s\d\x003a.\x002c\[\]\(\)\{\}\#][^\s\x003a.\x002c\[\]\(\)\{\}\#]*)/,
                next: "pop"
            }, {
                defaultToken: "keyword.control.Citron"
            }]
        }, {
            token: [
                "entity.name.Citron",
                "entity.name.function.Citron",
                "entity.name.Citron"
            ],
            regex: /(\s+)([^\s\d\x003a.\x002c\[\]\(\)\{\}\#]|[-\x002b\x002a\x0026\x0025\x0024\x0040\x0021\x003d\x0022\x003b\x002f\x005c\x003c\x003e\x003f\x007e]+)(\s+)/,
            push: [{
                token: "entity.name.Citron",
                regex: /\s*/,
                next: "pop"
            }, {
                defaultToken: "entity.name.Citron"
            }]
        }, {
            token: [
                "constant.character.escape.Citron",
                "entity.name.type.Citron",
                "constant.character.escape.Citron"
            ],
            regex: /(\`)([^\s\d\x003a.\x002c\[\]\(\)\{\}\#][^\s\x003a.\x002c\[\]\(\)\{\}\#]*)(\1)/,
            push: [{
                token: "entity.name.Citron",
                regex: /\s*?/,
                next: "pop"
            }, {
                defaultToken: "entity.name.Citron"
            }]
        }, {
            token: [
                "constant.character.escape.Citron",
                "text.Citron",
                "constant.character.escape.Citron"
            ],
            regex: /(\`?)([^\s\d\x003a.\x002c\[\]\(\)\{\}\#][^\s\x003a.\x002c\[\]\(\)\{\}\#]*)(\1)/,
            push: [{
                token: "entity.name.Citron",
                regex: /\s*?/,
                next: "pop"
            }, {
                defaultToken: "entity.name.Citron"
            }]
        }],
        "#expr_interpolation__1": [],
        "#expr_interpolation__10": [],
        "#expr_interpolation__11": [],
        "#expr_interpolation__12": [],
        "#expr_interpolation__2": [{
            token: "text.Citron",
            regex: /./
        }],
        "#expr_interpolation__3": [{
            token: "string.regexp.Citron",
            regex: /./
        }],
        "#expr_interpolation__4": [],
        "#expr_interpolation__5": [{
            token: [],
            regex: /\s*/,
            push: [{
                token: [],
                regex: /(?=\})/,
                next: "pop"
            }, {
                include: "#asm"
            }]
        }],
        "#expr_interpolation__6": [],
        "#expr_interpolation__7": [],
        "#expr_interpolation__8": [],
        "#expr_interpolation__9": [],
        "#main__1": [],
        "#main__10": [],
        "#main__11": [],
        "#main__12": [],
        "#main__13": [],
        "#main__2": [],
        "#main__3": [{
            token: "text.Citron",
            regex: /./
        }],
        "#main__4": [{
            token: "string.regexp.Citron",
            regex: /./
        }],
        "#main__5": [],
        "#main__6": [{
            token: [],
            regex: /\s*/,
            push: [{
                token: [],
                regex: /(?=\})/,
                next: "pop"
            }, {
                include: "#asm"
            }]
        }],
        "#main__7": [],
        "#main__8": [],
        "#main__9": [],
        "#string": [{
            token: [
                "constant.character.escape.Citron",
                "entity.name.function.Citron"
            ],
            regex: /(\$\$)(\w+)\b/
        }, {
            token: "constant.character.escape.Citron",
            regex: /\\[^xu]/
        }, {
            token: [
                "constant.character.escape.Citron",
                "constant.character.escape.Citron",
                "constant.numeric.Citron",
                "constant.character.escape.Citron"
            ],
            regex: /(\\[xuXU])([\x007b]?)([0-9a-fA-F]+)([\x007d]?)/
        }, {
            token: "constant.character.escape.Citron",
            regex: /\$\{\{/,
            push: [{
                token: "constant.character.escape.Citron",
                regex: /\}\}\$/,
                next: "pop"
            }, {
                include: "#expr_interpolation"
            }]
        }, {
            token: "string.Citron",
            regex: /./
        }]
    }
    
    this.normalizeRules();
};

CitronHighlightRules.metaData = {
    fileTypes: ["ctr"],
    name: "Citron",
    scopeName: "source.Citron"
}


oop.inherits(CitronHighlightRules, TextHighlightRules);

exports.CitronHighlightRules = CitronHighlightRules;
});

ace.define("ace/mode/folding/cstyle",["require","exports","module","ace/lib/oop","ace/range","ace/mode/folding/fold_mode"], function(require, exports, module) {
"use strict";

var oop = require("../../lib/oop");
var Range = require("../../range").Range;
var BaseFoldMode = require("./fold_mode").FoldMode;

var FoldMode = exports.FoldMode = function(commentRegex) {
    if (commentRegex) {
        this.foldingStartMarker = new RegExp(
            this.foldingStartMarker.source.replace(/\|[^|]*?$/, "|" + commentRegex.start)
        );
        this.foldingStopMarker = new RegExp(
            this.foldingStopMarker.source.replace(/\|[^|]*?$/, "|" + commentRegex.end)
        );
    }
};
oop.inherits(FoldMode, BaseFoldMode);

(function() {
    
    this.foldingStartMarker = /([\{\[\(])[^\}\]\)]*$|^\s*(\/\*)/;
    this.foldingStopMarker = /^[^\[\{\(]*([\}\]\)])|^[\s\*]*(\*\/)/;
    this.singleLineBlockCommentRe= /^\s*(\/\*).*\*\/\s*$/;
    this.tripleStarBlockCommentRe = /^\s*(\/\*\*\*).*\*\/\s*$/;
    this.startRegionRe = /^\s*(\/\*|\/\/)#?region\b/;
    this._getFoldWidgetBase = this.getFoldWidget;
    this.getFoldWidget = function(session, foldStyle, row) {
        var line = session.getLine(row);
    
        if (this.singleLineBlockCommentRe.test(line)) {
            if (!this.startRegionRe.test(line) && !this.tripleStarBlockCommentRe.test(line))
                return "";
        }
    
        var fw = this._getFoldWidgetBase(session, foldStyle, row);
    
        if (!fw && this.startRegionRe.test(line))
            return "start"; // lineCommentRegionStart
    
        return fw;
    };

    this.getFoldWidgetRange = function(session, foldStyle, row, forceMultiline) {
        var line = session.getLine(row);
        
        if (this.startRegionRe.test(line))
            return this.getCommentRegionBlock(session, line, row);
        
        var match = line.match(this.foldingStartMarker);
        if (match) {
            var i = match.index;

            if (match[1])
                return this.openingBracketBlock(session, match[1], row, i);
                
            var range = session.getCommentFoldRange(row, i + match[0].length, 1);
            
            if (range && !range.isMultiLine()) {
                if (forceMultiline) {
                    range = this.getSectionRange(session, row);
                } else if (foldStyle != "all")
                    range = null;
            }
            
            return range;
        }

        if (foldStyle === "markbegin")
            return;

        var match = line.match(this.foldingStopMarker);
        if (match) {
            var i = match.index + match[0].length;

            if (match[1])
                return this.closingBracketBlock(session, match[1], row, i);

            return session.getCommentFoldRange(row, i, -1);
        }
    };
    
    this.getSectionRange = function(session, row) {
        var line = session.getLine(row);
        var startIndent = line.search(/\S/);
        var startRow = row;
        var startColumn = line.length;
        row = row + 1;
        var endRow = row;
        var maxRow = session.getLength();
        while (++row < maxRow) {
            line = session.getLine(row);
            var indent = line.search(/\S/);
            if (indent === -1)
                continue;
            if  (startIndent > indent)
                break;
            var subRange = this.getFoldWidgetRange(session, "all", row);
            
            if (subRange) {
                if (subRange.start.row <= startRow) {
                    break;
                } else if (subRange.isMultiLine()) {
                    row = subRange.end.row;
                } else if (startIndent == indent) {
                    break;
                }
            }
            endRow = row;
        }
        
        return new Range(startRow, startColumn, endRow, session.getLine(endRow).length);
    };
    this.getCommentRegionBlock = function(session, line, row) {
        var startColumn = line.search(/\s*$/);
        var maxRow = session.getLength();
        var startRow = row;
        
        var re = /^\s*(?:\/\*|\/\/|--)#?(end)?region\b/;
        var depth = 1;
        while (++row < maxRow) {
            line = session.getLine(row);
            var m = re.exec(line);
            if (!m) continue;
            if (m[1]) depth--;
            else depth++;

            if (!depth) break;
        }

        var endRow = row;
        if (endRow > startRow) {
            return new Range(startRow, startColumn, endRow, line.length);
        }
    };

}).call(FoldMode.prototype);

});

ace.define("ace/mode/citron",["require","exports","module","ace/lib/oop","ace/mode/text","ace/mode/citron_highlight_rules","ace/mode/folding/cstyle"], function(require, exports, module) {
"use strict";

var oop = require("../lib/oop");
var TextMode = require("./text").Mode;
var CitronHighlightRules = require("./citron_highlight_rules").CitronHighlightRules;
var FoldMode = require("./folding/cstyle").FoldMode;

var Mode = function() {
    this.HighlightRules = CitronHighlightRules;
    this.foldingRules = new FoldMode();
};
oop.inherits(Mode, TextMode);

(function() {
    this.$id = "ace/mode/citron"
}).call(Mode.prototype);

exports.Mode = Mode;
});                (function() {
                    ace.require(["ace/mode/citron"], function(m) {
                        if (typeof module == "object" && typeof exports == "object" && module) {
                            module.exports = m;
                        }
                    });
                })();
            