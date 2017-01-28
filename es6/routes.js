import Home from './components/Home.vue';
import Notification from './components/Notification.vue';
import WebGL from './components/WebGL.vue';
import Audio from './components/Audio.vue';
import Gamepad from './components/Gamepad.vue';

export default [
  { path: '/', component: Home },
  { path: '/notification', component: Notification },
  { path: '/webgl', component: WebGL },
  { path: '/audio', component: Audio },
  { path: '/gamepad', component: Gamepad }
]
