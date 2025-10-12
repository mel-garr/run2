set -e

echo "waiting for database to be ready..."

until npx prisma db pull > /dev/null 2>&1; do
    echo "Database is not ready yet... waiting 2s"
    sleep 2
done

echo "Database is ready!"

if [ "$NODE_ENV" = "production" ]; then
    echo "running production migrate..."
    npx prisma migrate deploy
else
    echo "Running developelent migrations..."
    npx prisma migrate dev --name init auto
fi

echo "Starting the application..."
npm install bcrypt jsonwebtoken
npm install nodemailer
npm install redis connect-redis express-session
npm start