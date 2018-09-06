import { Controller } from 'egg';

export default class HomeController extends Controller {
  public async index() {
    const { ctx } = this;
    ctx.body = {
      'hello':'world'
    };
  }
  public async open() {
    const { ctx } = this;
    ctx.logger.info(ctx.request.body);
    ctx.logger.info(ctx.request.header);
    // 校验body参数
    const bodyRule = {
      hello: { type: 'string', required: true },
      tab: { type: 'enum', values: ['age','name'],required: false }
    };
    ctx.validate(bodyRule, ctx.request.body);
    // 校验header参数
    const checkHeadReslut = ctx.service.common.checkHead(ctx.request.header);
    if (!checkHeadReslut) {
      ctx.body = ctx.service.common.getResponseObject(400, "头部校验有误", null);
      return;
    }
    const resResult = {
      'hello': 'world'
    }
    ctx.body = ctx.service.common.getResponseObject(200, '测试成功', resResult);
  }
}
