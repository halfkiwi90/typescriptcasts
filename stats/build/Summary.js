"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Summary = void 0;
var Summary = /** @class */ (function () {
    function Summary(analyzer, outpuTarget) {
        this.analyzer = analyzer;
        this.outpuTarget = outpuTarget;
    }
    Summary.prototype.buidAndPrintReport = function (matches) {
        var output = this.analyzer.run(matches);
        this.outpuTarget.print(output);
    };
    return Summary;
}());
exports.Summary = Summary;
