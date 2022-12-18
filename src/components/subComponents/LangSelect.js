const LangSelect = () => {
    return (
      <div className="lang-select-wrapper">
        <select className="lang-select" name="lang" id="lang">
          <option value="ukraine">Українська</option>
          <option value="english">English</option>
        </select>
      </div>
    );
  };
  
  export default LangSelect;