function Experience() {
  return (
    <section className="m-6 p-6 bg-white rounded-xl shadow-md border border-slate-100 hover:shadow-lg hover:border-cyan-200 transition-all duration-300">
      {/* Заголовок із декоративним елементом */}
      <h2 className="text-xl font-bold text-slate-800 mb-4 flex items-center gap-2 border-b pb-2 border-slate-100">
        <span className="w-2.5 h-5 bg-cyan-500 rounded-sm inline-block"></span>
        Про себе
      </h2>
      
      {/* Опис */}
      <p className="text-slate-600 leading-relaxed text-sm">
        Я студентка Львівської політехніки, активно вивчаю сучасні інструменти веб-розробки та інформаційну безпеку. Прагну створювати захищені, швидкі та зручні інтерфейси для вебдодатків.
      </p>
    </section>
  );
}

export default Experience;