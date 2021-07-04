const app = require('./app.js');



app.listen(app.get("port"), () => {
  console.log(`Example app listening at http://localhost:${app.get("port")}`);
  console.log('Application name', app.get("name"));
})