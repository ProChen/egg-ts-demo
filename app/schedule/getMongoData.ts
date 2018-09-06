module.exports = {
    schedule: {
        interval: '30m', // 间隔时间
        type: 'all', // 指定所有的 worker 都需要执行
        immediate: true  // 启动后，立即执行一次
    },
    async task(ctx) {
        const res = 'hello';
        ctx.logger.info(res);
    },
};