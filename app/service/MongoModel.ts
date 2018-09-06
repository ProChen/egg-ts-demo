import {
    Service
} from 'egg';

/**
 * MongoModel Service
 */
export default class MongoModel extends Service {
    /**
     * 创建model 微信token
     * 集合 weixinToken
     */
    public entitySchema = this.app.mongoose.Schema({
        access_token: {
            type: String,
            required: true
        },
        createTime: {
            type: String,
            required: true
        },
        lastUpdateTime: {
            type: String,
            required: true
        }
    });
    public weixinTokenModel = this.app.mongoose.model('weixinToken', this.entitySchema, 'weixinToken');
    
}
