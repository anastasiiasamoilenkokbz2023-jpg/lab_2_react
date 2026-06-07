function Header() {
  return (
    <header className="flex flex-col items-center justify-center bg-gradient-to-r from-slate-950 via-slate-900 to-slate-950 text-white p-8 rounded-b-2xl shadow-xl border-b-4 border-cyan-500">
      {/* Аватар-ініціали з ефектом пульсації та наведення */}
      <div className="w-20 h-20 bg-gradient-to-br from-cyan-400 to-blue-600 rounded-2xl mb-4 flex items-center justify-center text-2xl font-mono font-bold tracking-wider shadow-lg shadow-cyan-500/20 transform hover:rotate-6 transition-transform duration-300">
        АС
      </div>
      
      {/* Прізвище та Ім'я */}
      <h1 className="text-3xl font-extrabold tracking-tight mb-2 hover:text-cyan-400 transition-colors">
        Самойленко Анастасія
      </h1>
      
      {/* Спеціальність у стилі кібер-тегів */}
      <p className="text-cyan-400 font-mono text-xs tracking-widest uppercase bg-slate-900/80 px-4 py-1.5 rounded-full border border-cyan-500/30">
        Студентка | Молодший веб-розробник
      </p>
    </header>
  );
}

export default Header;