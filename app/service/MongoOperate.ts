import {
    Service
} from 'egg';

/**
 * MongoOperate Service
 */
export default class MongoOperate extends Service {
    // 从mongo配置获取mongo连接的地址
    public mongoAddress = 'mongodb://' + this.config.mongoConfig.user + ':' + this.config.mongoConfig.password + '@' + this.config.mongoConfig.address + ':' + this.config.mongoConfig.port + '/' + this.config.mongoConfig.database;

    /**
     * 插入数据到指定集合中
     * 
     * @param {any} mongoModel model选择
     * @param {any} mongoDoc 信息文档
     */
    public createDoc(mongoModel, mongoDoc) {
        mongoDoc.createTime = this.getCurrentTime();
        mongoDoc.lastUpdateTime = this.getCurrentTime();
        let entityDoc;
        return new Promise((resolve, reject)=> {
            this.app.mongoose.connect(this.mongoAddress,
                {
                    useNewUrlParser: true
                },
                function(err) {
                    if (err) {
                        return console.error(err);
                    }
                    console.log("mongodb geeku connect.");
                    entityDoc = new mongoModel(mongoDoc);
                    entityDoc.save(function(err, doc) {
                        if (err) {
                            reject(err);
                        }
                        console.log('插入数据成功');
                        resolve(doc);
                    })
                });
            setTimeout(() => {
                this.app.mongoose.disconnect(function () {
                    console.log("断开连接");
                })
            }, 2*1000);
        });
    };

    /**
     * 删除指定集合中的数据
     * 
     * @param {any} mongoModel model选择
     * @param {any} conditionDoc 条件文档
     */
    public deleteDoc(mongoModel, conditionDoc) {
        return new Promise((resolve, reject)=> {
            this.app.mongoose.connect(this.mongoAddress,
                {
                    useNewUrlParser: true
                },
                function(err) {
                    if (err) {
                        return console.error(err);
                    }
                    console.log("mongodb geeku connect.");
                    mongoModel.deleteMany(conditionDoc)
                        .exec((err, doc) => {
                            if (err) {
                                reject(err);
                            }
                            console.log('删除数据成功');
                            resolve(doc);
                        });
                });
            setTimeout(() => {
                this.app.mongoose.disconnect(function () {
                    console.log("断开连接");
                })
            }, 2 * 1000);
        });
    }

    /**
     * 查找指定集合中的数据
     * 
     * @param {any} mongoModel model选择
     * @param {any} conditionDoc 条件文档
     * @param {any} returnDoc 返回文档选择
     */
    public retrieveDoc(mongoModel, conditionDoc, returnDoc, sortDoc) {
        return new Promise((resolve, reject)=> {
            this.app.mongoose.connect(this.mongoAddress,
                {
                    useNewUrlParser: true
                },
                function(err) {
                    if (err) {
                        return console.error(err);
                    }
                    console.log("mongodb geeku connect.");
                    mongoModel.find(conditionDoc, returnDoc).sort(sortDoc)
                        .exec((err, doc) => {
                            if (err) {
                                reject(err);
                            }
                            console.log('查找数据成功');
                            resolve(doc);
                        });
                });
            setTimeout(() => {
                this.app.mongoose.disconnect(function () {
                    console.log("断开连接");
                })
            }, 2 * 1000);
        });
    }

    /**
     * 更新指定集合中的数据
     * 
     * @param {any} mongoModel model选择
     * @param {any} conditionDoc 条件文档
     * @param {any} updateDoc 更新文档
     */
    public updateDoc(mongoModel, conditionDoc, updateDoc) {
        updateDoc.lastUpdateTime = this.getCurrentTime();
        return new Promise((resolve, reject)=> {
            this.app.mongoose.connect(this.mongoAddress,
                {
                    useNewUrlParser: true
                },
                function(err) {
                    if (err) {
                        return console.error(err);
                    }
                    console.log("mongodb geeku connect.");
                    mongoModel.updateMany(conditionDoc, updateDoc, function(err, doc) {
                        if (err) {
                            reject(err);
                        }
                        console.log('更新数据成功');
                        resolve(doc);
                    })
                });
            setTimeout(() => {
                this.app.mongoose.disconnect(function () {
                    console.log("断开连接");
                })
            }, 2 * 1000);
        });
    }

    /**
     * 获取当前时间
     * 
     * @returns 
     */
    public getCurrentTime() {
        let time = new Date().toLocaleString();

        return (time);
    }
    
}
