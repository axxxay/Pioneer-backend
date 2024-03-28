const cors = require('cors');
const swaggerUi = require('swagger-ui-express');
const YAML = require('yamljs');
const app = require('./config/express');
const db = require('./config/database');
const userRoutes = require('./routes/userRoutes');
const fetchDataRoutes = require('./routes/fetchDataRoutes');
const swaggerDocument = YAML.load('./swagger_doc.yaml');


app.use(cors());

app.use('/api', userRoutes);
app.use('/data', fetchDataRoutes);
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));


const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});