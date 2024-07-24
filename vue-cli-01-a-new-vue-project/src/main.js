import { createApp } from "vue";
import App from "./App.vue";
import FriendContact from "./components/FriendContact";

const app = createApp(App);
app.component("firnd-contact", FriendContact);
app.mount("#app");
