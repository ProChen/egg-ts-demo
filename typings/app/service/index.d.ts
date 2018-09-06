// This file was auto created by egg-ts-helper
// Do not modify this file!!!!!!!!!

import Common from '../../../app/service/Common';
import MongoModel from '../../../app/service/MongoModel';
import MongoOperate from '../../../app/service/MongoOperate';
import Test from '../../../app/service/Test';
import Yulei from '../../../app/service/Yulei';

declare module 'egg' {
  interface IService {
    common: Common;
    mongoModel: MongoModel;
    mongoOperate: MongoOperate;
    test: Test;
    yulei: Yulei;
  }
}
