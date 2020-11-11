import {connect} from '../mongodb/connect';

const connectTest = async()=>{
  let connection;
  try{
    connection = await connect();
    console.log('connect OK.', connection);
  }catch(e){
    console.log(e.message);
  }
  finally{
    connection.close();
  }
}

connectTest();