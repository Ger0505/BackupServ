module.exports = {
    HOST: "ec2-54-160-96-70.compute-1.amazonaws.com",
    USER: "zhlhvparxqsfxz",
    PASSWORD: "08c079a74e80fdbe1b47219620085b02071c28b8891ff4b42853ff3931c8e8e4",
    DB: "ddcei60hu8rdhu",
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