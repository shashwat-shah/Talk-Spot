import { ChatEngine } from 'react-chat-engine';
import ChatFeed from './components/ChatFeed';
import LoginForm from './components/LoginForm';
import './App.css';

const projectID = '0385f649-e201-4e4a-a43b-e433767c445e';

const App = () => {
  if (!localStorage.getItem('username')) return <LoginForm />;

  return (
    <ChatEngine
      height="100vh"
      projectID={projectID}
      userName={localStorage.getItem('username')}
      userSecret={localStorage.getItem('password')}
      renderChatFeed={(chatAppProps) => <ChatFeed {...chatAppProps} />}
      onNewMessage={() => new Audio('https://d6cp9b00-a.akamaihd.net/downloads/ringtones/files/mp3/facebook-messenger-tone-wapking-fm-mp3-17015-19072-43455.mp3').play()}
      onDeleteChat={(chat) => console.log(chat)}
			onEditMessage={(chatId, message) => console.log(chatId, message)}
			onDeleteMessage={(chatId, message) => console.log(chatId, message)}
    />
  );
};


// infinite scroll, logout, more customizations...

export default App;