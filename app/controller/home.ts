import { Controller } from 'egg';

export default class HomeController extends Controller {
  public async index() {
    const { ctx } = this;
    ctx.logger.info(ctx.query);

    //let resbody = await ctx.service.yulei.getBoxInfo('110010');

    let resbody = await ctx.service.mongoOperate.createDoc(
      ctx.service.mongoModel.weixinTokenModel,
      {
        'access_token':'1234'
      }
    );
    ctx.body = ctx.service.common.getResponseObject(200,'获取所有箱格信息成功',resbody);
  }
}
