import { useRouter } from 'next/router'
import navigation from '../../.nav'
import Image from 'next/image'
import Test from '../../assets/logo.png'

export const Layout: React.FC<any> = ({ children }) => {
    const router = useRouter()

    return (
        <div className="flex flex-1 flex-row" style={{ height: '100%' }}>
            <div className="flex flex-col w-52" style={{ backgroundColor: 'red '}}>
                <div className="px-4" style={{ borderBottom: '1px solid black', backgroundColor: '#1C2635' }}>
                    <Image src={Test} height="100px" />
                </div>
                <div className="flex-1" style={{ backgroundColor: '#23303D' }}>
                    <nav>
                        <ul>
                            {navigation.map((item, index) => (
                                <li 
                                    className="flex pl-4 cursor-pointer items-center h-12 hover:bg-sky-700 font-roboto text-white"
                                    onClick={() => router.push(`/${item.route}`)} 
                                    key={`nav-${index}`}
                                > 
                                    { item.name } 
                                </li>
                            ))}
                        </ul>
                    </nav>
                </div>
            </div>
            <div className="flex flex-1">
                {children}
            </div>
        </div>
    )
}