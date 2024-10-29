import app from './app';
import connection from './config/db';

const PORT = process.env.PORT || 7000;

connection.sync({ force: false }).then(() => {
  console.log('Database connected and synchronized');
  app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  });
}).catch((error) => {
  console.error('Unable to connect to the database:', error);
});
