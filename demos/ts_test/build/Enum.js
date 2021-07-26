"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var isNil = function (v) { return v == undefined; };
/**
 * 枚举定义工具
 * @example
 * const STATUS = new DtEnum([
 * ['AUDIT_WAIT', [1, '审核中']],
 * ['AUDIT_PASS', [2, '审核通过']]
 * ])
 */
var DtEnum = /** @class */ (function () {
    function DtEnum(config) {
        var _this = this;
        this.byCodeMap = {};
        config.forEach(function (item) {
            var code = item[0], _a = item[1], value = _a[0], desc = _a[1], extra = _a[2];
            _this.byCodeMap[code] = { code: code, value: value, desc: desc, extra: extra };
        });
    }
    /**
     * 由code获取value
     * @param code
     */
    DtEnum.prototype.getValueByCode = function (code) {
        var _a;
        return (_a = this.byCodeMap[code]) === null || _a === void 0 ? void 0 : _a.value;
    };
    return DtEnum;
}());
var STATUS = new DtEnum([
    ["AUDIT_WAIT", [1, "审核中"]],
    ["AUDIT_PASS", [2, "审核通过"]],
]);
STATUS.getValueByCode("AUDIT_PASS");
