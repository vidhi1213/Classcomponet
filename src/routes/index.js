// import React from 'react'
// const Heroes = React.lazy(() => import("../Components/Heroes"));
// const HeroDetatil = React.lazy(() => import("../Components/HeroDetatil"));
import Heroes from '../Components/Heroes';
import HeroDetatil from '../Components/HeroDetatil';
import Dashboard from '../Components/Dashboard';
export const PublicroutesArray = [
    {path: "/dashboard", component: Dashboard, title: "dashboard" },
    {path: "/", component: Heroes, title: "Heroes" },
    {path: "/heroes", component: Heroes, title: "Heroes" },
    {path:'/heroes/detail/:id', component:HeroDetatil}
];