import { connect } from '../mongodb/connect';

const makedTest=async()=>{
  let connection;
  try{
    connection = await connect();
    const db = await connection.db('typescript');
    console.log('db',db);
  }catch(e){
    console.log(e.message);
  }
  finally{
    connection.close();
  }
}

makedTest();