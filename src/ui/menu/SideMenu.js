import React from 'react'
import Drawer from '@material-ui/core/Drawer';
import { List, ListItemIcon, ListItemText, ListItem, Divider } from '@material-ui/core';
import {Mail as MailIcon, AttachMoneyOutlined as Monetize, AllInbox as TodosIcon} from '@material-ui/icons';
import { Icon } from '@iconify/react';
import nintendoswitchIcon from '@iconify/icons-simple-icons/nintendoswitch';


export default function SideMenu(props){
    return(
        <Drawer open={props.open} onClose={() => props.setOpen(!props.open)}>
            <List style={{width: '300px', backgroundColor: '#424242', color: 'white', height:'100%'}}>
                <ListItem component={'span'}key={1} style={{position:'relative'}}>
                    <ListItemIcon  style={{display: 'inline'}}><Icon color={'white'} style={{fontSize: '24px'}} icon={nintendoswitchIcon} /></ListItemIcon>
                    <ListItemText primary='Nintendo Switch' />
                </ListItem>
                <Divider />
                <ListItem button key={2} >
                    <ListItemIcon><TodosIcon style={{color: 'white'}} /></ListItemIcon>
                    <ListItemText primary='Usuarios' />
                </ListItem>
                <ListItem button key={3}>
                    <ListItemIcon><Monetize style={{color: 'white'}} /></ListItemIcon>
                    <ListItemText primary='Promoções' />
                </ListItem>
                <ListItem button key={4}>
                    <ListItemIcon><MailIcon style={{color: 'white'}}/></ListItemIcon>
                    <ListItemText primary='teste' />
                </ListItem>
            </List>
        </Drawer>
    )
}


