import dva from 'dva';
import './index.css';

// 1. Initialize
const app = dva();

// 2. Plugins
// app.use({});

// 3. Model
app.model(require('./models/comment'));
app.model(require('./models/flea-market'));
app.model(require('./models/helps'));
app.model(require('./models/lost-office'));
app.model(require('./models/news'));
app.model(require('./models/wish-wall'));

// 4. Router
app.router(require('./router'));

// 5. Start
app.start('#root');
