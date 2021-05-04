import React from 'react';
import Chat from './Chat'
import './Chats.css'


function Chats() {
    return (
        <div className="chats">
            <Chat
            name="Ellen"
            message="Yo whats up!"
            timestamp="40 seconds ago"
            profilePic="https://i0.wp.com/oquartonerd.com.br/wp-content/uploads/2020/07/ellen-degeneres-em-foto-da-entertainment-weekly-conteudo-categoria-nerd-78387810.jpg?w=1280&ssl=1"
            />
            <Chat
            name="Mica"
            message="wanna come home?"
            timestamp="55 minutes ago"
            profilePic="https://scontent.fssz2-1.fna.fbcdn.net/v/t31.18172-8/s960x960/16402466_1218572451511859_773600418456566157_o.jpg?_nc_cat=105&ccb=1-3&_nc_sid=9267fe&_nc_eui2=AeGDvKTHg7V9LMnwtK38oMXNBerEnkT2ehsF6sSeRPZ6G8n7eunUSdQehBhRWG1VzCs&_nc_ohc=mtxfmXQ2Mh0AX_ztbms&_nc_ht=scontent.fssz2-1.fna&tp=7&oh=8450ea2e604a50bd1a361522ea5a5601&oe=60B5DA47"
            />
            <Chat
            name="Mili"
            message="I preffer a couple of cofee!"
            timestamp="3 hours ago"
            profilePic="http://www.escolaespacoeducar.com.br/novo/wp-content/uploads/2020/11/formacao_conheca-caracteristicas-de-santa-teresa-de-calcuta-1600x1200-1.jpg"
            />
            <Chat
            name="Mila"
            message="..."
            timestamp="one week ago"
            profilePic="https://cinematologia.com.br/cine/wp-content/uploads/2020/12/Wonder-Woman-Movie-Artwork-1.jpg"
            />
        </div>
    )
}

export default Chats

