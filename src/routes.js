import User from "@/page/user";
import Home from "@/page/home";
import Room from "@/page/room";
import Music from "@/page/music";
import Setting from "@/page/setting";
import Game from "@/page/game";

export default [
    {path: '/', meta: {title: 'home'}, redirect: '/home'},
    {path: '/user', meta: {title: 'User'}, component: User},
    {path: '/home', meta: {title: 'Home'}, component: Home},
    {path: '/room', meta: {title: 'Room'}, component: Room},
    {path: '/game', meta: {title: 'Game'}, component: Game},
    {path: '/music', meta: {title: 'Music'}, component: Music},
    {path: '/setting', meta: {title: 'Setting', requireAuth: true}, component: Setting}
];
