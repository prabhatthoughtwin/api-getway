import path from 'path';
import grpc, { Client, methodTypes } from "grpc";
import {loadSync} from "@grpc/proto-loader";

var packageDefinition = loadSync(path.join(__dirname, './proto/user.proto'), {
    keepCase: true,
    longs: String,
    enums: String,
    arrays: true
});

const UserService:any = grpc.loadPackageDefinition(packageDefinition).UserService ;
const client = new UserService(
    "localhost:30043",
    grpc.credentials.createInsecure()
);

export {client};