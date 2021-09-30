/* eslint-disable no-console */
import app from './app';

app.listen(process.env.APP_PORT || 3000, () => {
  console.log(`Server is listening on port ${process.env.APP_PORT || 3000}`);
});
