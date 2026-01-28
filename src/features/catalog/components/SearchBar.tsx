interface Props {
  onSearch: (text: string) => void; // Definimos que recibirá una función
}

export const SearchBar = ({ onSearch }: Props) => {
  return (
    <div className="
      flex items-center gap-[10px] px-4 py-2 
      w-full md:max-w-[600px] h-[40px] 
      bg-white 
      border border-[#BBBBBB] rounded-[8px]
    ">
      {/* Icono Lupa */}
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#A4A4A4" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="11" cy="11" r="8"></circle>
        <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
      </svg>

      <input 
        type="text" 
        placeholder="Busca en nuestra tienda"
        onChange={(e) => onSearch(e.target.value)} 
        className="
          flex-grow outline-none bg-transparent
          font-sans font-normal text-[16px] leading-[24px] 
          text-[#111111] placeholder-[#777777]
        "
      />
    </div>
  );
};