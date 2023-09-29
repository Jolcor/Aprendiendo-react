import './App.css'
import { TwitterFollowCard } from './TwitterFollowCard'

const users = [
    {
        userName:'Jolcore',
        name: 'Jorge Corrales',
        isFollowing: true
        
    },
        
    {
        userName:'Gacoto',
        name: 'Gabriel Torres',
        isFollowing: false
    },
    {
        userName:'Yico12',
        name: 'Angelica Corrales',
        isFollowing: true
    },

]

export function App() {

    return (
        <section className='App'>
        {
            users.map(({ userName, name, isFollowing }) => (
            <TwitterFollowCard
                key={userName}
                userName={userName}
                initialIsFollowing={isFollowing}
            >
                {name}
            </TwitterFollowCard>
            ))
        }
        </section>
    )
}
