let address:any ={
  country:'country',
  city:'city',
  addr1:'addr1',
  addr2:'addr2',
  addr3:'addr3'
}

const {country, city, ...another } = address;
console.log(another);