import{CREATE_HERO,FEATCH_MESSAGE,UPDATE_HERO,DELETE_HERO,CLEAR_CONTACT} from '../constant/type';
export const creatHeros=(hero)=>({
    type:CREATE_HERO,
    payload:hero.payload
});
export const deleteHero=(id)=>({
    type:DELETE_HERO,
    payload:id,
})
export const updateHero=(hero,id)=>({
    type:UPDATE_HERO,
    payload:hero.payload,
})
