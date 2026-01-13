import { ScanEye, EyeOff } from 'lucide-react';
import { Button } from '../components/ui/Button';
import { Link } from 'react-router';
import { useState } from 'react';

export const LoginPage = () => {

    const [showPassword, setShowPassword] = useState(false)

    return (
        <div className="w-full flex justify-center">
            <form className="bg-slate-800 w-full sm:w-4/5 md:w-3/5 lg:w-2/5 h-fit text-slate-50 py-6 px-6 sm:py-8 sm:px-10 md:py-10 md:px-16 rounded-lg grid gap-6">
                <h1 className="text-2xl text-center font-bold">Accès Terminal</h1>
                <div className="flex items-center gap-3 sm:gap-4">
                    <button className="w-full flex items-center justify-center bg-slate-700 border border-slate-400 rounded-lg p-2 hover:bg-slate-600 transition-colors">
                        <img src="google.svg" alt="Google" className="w-5 h-5 sm:w-6 sm:h-6" />
                    </button>
                    <button className="w-full flex items-center justify-center bg-slate-700 border border-slate-400 rounded-lg p-2 hover:bg-slate-600 transition-colors">
                        <img src="facebook.svg" alt="Facebook" className="w-5 h-5 sm:w-6 sm:h-6" />
                    </button>
                </div>
                <p className="text-center text-base">Ou</p>
                <div className="grid gap-1">
                    <p className="text-sm sm:text-base">Fréquence de contact</p>
                    <input type="email" className="w-full flex items-center justify-center bg-slate-700 border border-slate-400 rounded-lg p-2.5 sm:p-3 outline-none text-sm sm:text-base"/>
                </div>
                <div className="grid gap-3">
                    <div className="grid gap-1">
                        <p className="text-sm sm:text-base">Clé de cryptage</p>
                        <div className='flex items-center w-full justify-between bg-slate-700 border border-slate-400 rounded-lg p-2.5 sm:p-3'>
                            <input type={showPassword ? "text" : "password"} className="w-full outline-none bg-transparent text-sm sm:text-base"/>
                            <div onClick={() => setShowPassword(!showPassword)} className='cursor-pointer ml-2'>
                                { showPassword ? <EyeOff className="w-5 h-5 sm:w-6 sm:h-6" /> : <ScanEye className="w-5 h-5 sm:w-6 sm:h-6"/>}
                            </div>
                        </div>
                    </div>
                    <p className="text-xs sm:text-sm">Vous avez oublié votre clé de cryptage ?</p>
                </div>
                <Button text="Établir la liaison" to="/" fullWidth/>
                <p className='text-center text-xs sm:text-sm'>Vous n'avez pas de compte ? <Link to="/register" className='font-bold hover:underline'>Inscription</Link></p>
            </form>
        </div>
    )
}
