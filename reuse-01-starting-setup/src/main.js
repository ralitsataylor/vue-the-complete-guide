import { createApp } from 'vue';

import App from './App.vue';
import loggerMixin from './mixins/logger.js';

const app = createApp(App);
// Registering the mixin globally
// This will apply the mixin to all components in the app
// If you want to apply it only to specific components, you can import and use it in those components instead
// app.mixin is used to register a global mixin
// similar to how you would register a global component
// app.component is used to register a global component
// This means that the mixin's properties and methods will be available in all components
app.mixin(loggerMixin);

app.mount('#app');
