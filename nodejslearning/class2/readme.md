# start project npm run dev
# nodemone cmd 'npx modemon app.js'


# sometime mysql npm package show auth error in database how to fix it.
https://stackoverflow.com/questions/50093144/mysql-8-0-client-does-not-support-authentication-protocol-requested-by-server?page=2&tab=scoredesc

ALTER USER 'root'@'localhost' IDENTIFIED WITH mysql_native_password BY 'root';
FLUSH PRIVILEGES;