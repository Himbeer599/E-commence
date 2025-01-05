import { Schema, model, Document } from 'mongoose';

// 定义用户接口
export interface User {
  id: string;
  username: string;
  email: string;
  password: string;
}

// 定义 Schema
const UserSchema = new Schema<User>({
  username: { type: String, required: true, unique: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true }
});

// 导出模型
export default model<User>('User', UserSchema); 