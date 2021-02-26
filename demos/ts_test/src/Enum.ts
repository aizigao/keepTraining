import { isNil } from "lodash";

type IEmumCode = string;
type IEmumValue = string | number;
type IEmumDesc = string;
type IEmumExtra = any;
type IEnumDefine = [IEmumValue, IEmumDesc, IEmumExtra?];
type IEnum<T> = [T, IEnumDefine];
export type IEnumOption = {
  label?: IEmumDesc;
  value?: IEmumValue | null;
  key?: IEmumValue | null;
  extra?: any;
};

interface IValueEnum {
  [key: string]: {
    text: string;
    status?: "Success" | "Error" | "Processing" | "Warning" | "Default";
    extra?: any;
  };
}

/**
 * 枚举定义工具
 * @example
 * const STATUS = new DtEnum([
 * ['AUDIT_WAIT', [1, '审核中']],
 * ['AUDIT_PASS', [2, '审核通过']]
 * ])
 */
class DtEnum<T extends string> {
  private byCodeMap: {
    [index: string]: {
      code: IEmumCode;
      value: IEmumValue;
      desc: IEmumDesc;
      extra?: IEmumExtra;
    };
  } = {};

  constructor(config: IEnum<T>[]) {
    config.forEach(item => {
      const [code, [value, desc, extra]] = item;
      this.byCodeMap[code] = { code, value, desc, extra };
    });
  }

  /**
   * 由code获取value
   * @param code
   */
  getValueByCode(code: T): IEmumValue {
    return this.byCodeMap[code]?.value;
  }
}

const STATUS = new DtEnum([
  ["AUDIT_WAIT", [1, "审核中"]],
  ["AUDIT_PASS", [2, "审核通过"]]
]);

STATUS.getValueByCode("AUDIT_PASS");
