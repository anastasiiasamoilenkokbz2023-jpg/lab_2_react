function Education() {
  return (
    <section className="m-6 p-6 bg-white rounded-xl shadow-md border border-slate-100 hover:shadow-lg hover:border-blue-200 transition-all duration-300">
      {/* Заголовок секції */}
      <h2 className="text-xl font-bold text-slate-800 mb-4 flex items-center gap-2 border-b pb-2 border-slate-100">
        <span className="w-2.5 h-5 bg-blue-600 rounded-sm inline-block"></span>
        Освіта
      </h2>
      
      {/* Елемент списку у вигляді інтерактивної лінії */}
      <div className="relative border-l-2 border-blue-100 pl-4 ml-2">
        {/* Крапка на лінії */}
        <div className="absolute -left-[21px] top-1 w-2.5 h-2.5 rounded-full bg-blue-600 ring-4 ring-blue-50"></div>
        
        <h3 className="font-semibold text-slate-900 text-base">
          Національний університет "Львівська політехніка"
        </h3>
        <p className="text-xs text-blue-600 font-mono mt-0.5">
          Спеціальність: Кібербезпека та захист інформації
        </p>
      </div>
    </section>
  );
}

export default Education;