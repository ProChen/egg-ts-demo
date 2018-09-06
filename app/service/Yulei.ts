import {
    Service
} from 'egg';

/**
 * Yulei Service
 */
export default class Yulei extends Service {
    
    /**
     * 获取所有箱子信息
     * 
     * @param {any} cabinet_id 柜号
     * @returns 获取箱格信息结果
     */
    public async getBoxInfo(cabinet_id){
        this.ctx.logger.info(cabinet_id);
        const result = await this.ctx.curl(this.config.yuLeiAPI.baseUrl + 'RestAPI/BasicBox/BoxMesApi', {
            method: 'POST',
            contentType: 'json',
            headers: {
                'user': cabinet_id,
                'companyname': this.config.yuLeiAPI.companyname,
                'password': this.config.yuLeiAPI.password,
                'Content-Type': 'application/json'
            },
            data: {
                'cabinet_id': cabinet_id
            },
            dataType: 'json',
        });
        return(result);
    }

}