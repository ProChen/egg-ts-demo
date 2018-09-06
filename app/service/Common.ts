import { Service } from 'egg';

// 包括以下公共的函数

/**
 * Common Service
 */
export default class Common extends Service {

  /**
   *  组织response信息
   * 
   * @param {number} code 要返回元信息中的状态码
   * @param {string} message 要返回元信息中的信息
   * @param {*} body 要返回的数据
   * @returns {object}
   * @memberof Common
   */
  public getResponseObject (code: number, message: string, body: any): object {
    return {
      meta: {
        code: code,
        message: message
      },
      body: body
    };
  };

  /**
   * 头部校验
   *
   * @param {*} requestHead
   * @returns {boolean}
   * @memberof Common
   */
  public checkHead(requestHead: any): boolean {
    let result = false;
    if (requestHead.password === '95951a18-5a9e-da26-ad13-64dcc6e11208') {
      result = true;
    }

    return result;
  };
}
