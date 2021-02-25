import { connect } from '../mongodb/connect';

const insertDocumentTest = async()=>{
  let connection, cursor;
  try{
    connection = await connect();
    const db = await connection.db('typescript');
    const personsCollection = db.collection('persons');
    const addressesCollection = db.collection('addresses');

    const person = {name:'neo', age:1};
    let result = await personsCollection.insertOne(person);
    console.log(result);
    
    const address = {country:'korea', city:'seoul'};
    result = await addressesCollection.insertOne(address);
    console.log(result);
  }catch(e){
    console.log(e.message);
  }
  finally{
    connection.close();
  }
}

insertDocumentTest();