import { NodeNextRequest } from "next/dist/server/base-http/node";
import { NextRequest } from 'next/server';
import { NextResponse } from 'next/server';
import { useRouter } from 'next/navigation';

const midelwareCheckLogin = async (req: NextRequest) => {
    const router = useRouter();

    function getCookie(name: string): string | null {
        const value = `; ${document.cookie}`; 
        const parts = value.split(`; ${name}=`); 
        if (parts.length === 2) {
            return parts.pop()?.split(';').shift() ?? null; 
        }
        return null;
    }
    
    const token = getCookie('token');
    const userId = getCookie('id');
    
    console.log('Token:', token);
    console.log('User ID:', userId);

    let data: any[] = [];

    async function getAllUsers() {
        const response = await fetch('/api/users', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            }
        });
        const users = await response.json(); 
        data = users;
        console.log('Users:', data);

        // Знаходимо користувача з відповідним userId
        // const user = data.find((u: any) => u.id === userId);
    
        if (!token || !userId) {
            console.log("Редірект")
            router.push('/login');
            // Якщо користувача не знайдено або токени не співпадають, перенаправляємо на сторінку реєстрації
            // return NextResponse.redirect(`/register`);
        }
    }
    
    await getAllUsers();
}

export default midelwareCheckLogin;


