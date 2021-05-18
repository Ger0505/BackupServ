module.exports = {
    HOST: "ec2-54-145-224-156.compute-1.amazonaws.com",
    USER: "iqabhsvfchrwxt",
    PASSWORD: "735b5509446a35e895eb5827f13e63b02fc1f4d2eea9d39bd4fb789046ce7e75",
    DB: "d8tbk7ahncqr0o",
    dialect: "postgres",
    pool: { 
        max: 5,
        min: 0,
        acquire: 30000,
        pool: {
            max: 5,
            min: 0,
            acquire: 30000,
            idle: 10000 
        } 
    } 
};
// module.exports = {
//     HOST: "localhost",
//     USER: "postgres",
//     PASSWORD: "12890",
//     DB: "db_servicios",
//     dialect: "postgres",
//     pool: { 
//         max: 5,
//         min: 0,
//         acquire: 30000,
//         pool: {
//             max: 5,
//             min: 0,
//             acquire: 30000,
//             idle: 10000 
//         } 
//     } 
// };