
function CountryBtn({name}:{name :string}) {
  return (
    <div className="px-4 py-1 bg-[var(--light-mode-elements)] dark:bg-[var(--dark-mode-elements)] border-1 border-[hsl(0,0%,0%,0.5)] dark:border-[hsl(0,0%,100%,0.5)]">
        {name}
    </div>
  )
}

export default CountryBtn
