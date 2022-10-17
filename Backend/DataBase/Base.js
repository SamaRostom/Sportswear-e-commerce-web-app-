const Mongo = require('mongodb')
const { ObjectId } = require('mongodb');
const MongoClient = Mongo.MongoClient;
const URL = 'mongodb://127.0.0.1:27017'
function MongoConnect(url) {
    return new Promise((resolve, reject) => {
        MongoClient.connect(url, function (error, db) {
            if (error) {
                reject(error)
                return
            }
            resolve(db)
            // db.close()
        })
    })
}
function collection(name) {
    return new Promise((resolve, reject) => {
        MongoConnect(URL).then((db) => {
            const dbo = db.db("shop");

            dbo.createCollection(name, function (err, res) {
                if (err) {
                    return reject(err)
                }
                resolve(res, db)

            });

        });

    })
}
function insertOne(collectionName, data) {
    return new Promise((resolve, reject) => {
        MongoConnect('mongodb://127.0.0.1:27017').then(db => {
            const dbo = db.db("shop")
            dbo.collection(collectionName).insertOne(data, function (error, result) {
                if (error) {
                    reject(error)
                    return;
                }
                resolve(result)
                db.close()
            })
        })
    })
}
function find(collectionName, filter = {}) {
    return new Promise((resolve, reject) => {
        MongoConnect(URL).then((db) => {
            const dbo = db.db("shop");
            dbo.collection(collectionName).find(filter).toArray(function (error, result) {
                if (error) return reject(error);
                resolve(result);
                db.close();
            });
        })
    })

}
function findOne(collectionName, filter = {}) {
    return new Promise((resolve, reject) => {
        MongoConnect(URL).then((db) => {
            const dbo = db.db("shop");
            dbo.collection(collectionName).findOne(filter, function (error, result) {
                if (error) return reject(error);
                resolve(result);
                db.close();
            });
        })
    })

}
function update(collectionName, id, data) {
    return new Promise((resolve, reject) => {
        MongoConnect(URL).then((db) => {
            const dbo = db.db("shop");
            dbo.collection(collectionName).updateOne({ _id: ObjectId(id) }, { $set: data }, function (error, result) {
                if (error) return reject(error);
                resolve(result);
                db.close();
            })
        })
    })
}
function updateadd(collectionName, id, data) {
    return new Promise((resolve, reject) => {
        MongoConnect(URL).then((db) => {
            const dbo = db.db("shop");
            dbo.collection(collectionName).updateOne({ user_id: ObjectId(id) }, { $set: data }, function (error, result) {
                if (error) return reject(error);
                resolve(result);
                db.close();
            })
        })
    })
}
function deleteOne(collectionName, id) {
    return new Promise((resolve, reject) => {
        MongoConnect(URL).then((db) => {
            const dbo = db.db("shop");
            dbo.collection(collectionName).deleteOne({ _id: ObjectId(id) }, function (error, result) {
                if (error) return reject(error);
                resolve(result);
                db.close();
            });
        });
    });
}


module.exports = {
    MongoConnect,
    collection,
    insertOne,
    find,
    findOne,
    update,
    deleteOne,
    updateadd
}