import { useState } from 'react'

export function RegisterModal({ isOpen, onClose, onSave }) {
  const [liters, setLiters] = useState('')
  const [shift, setShift] = useState('Manhã + Tarde (dia completo)')
  const [note, setNote] = useState('')

  function handleSave() {
    if (liters) onSave(liters)
    setLiters('')
    setNote('')
    onClose()
  }

  if (!isOpen) return null

  return (
    <div
      className="fixed inset-0 bg-black/35 z-[3000] flex items-center justify-center"
      onClick={e => e.target === e.currentTarget && onClose()}
    >
      <div className="bg-white rounded-[18px] p-7 w-[420px] max-w-[92vw] shadow-2xl">
        <h2 style={{ fontFamily: "'Lora', Georgia, serif" }} className="text-[21px] font-bold text-[#0f2518] mb-1">
          Registrar produção
        </h2>
        <p className="text-[13px] text-[#9b9990] mb-5">Só o que você quer anotar. O resto a Natta cuida.</p>

        <div className="mb-3.5">
          <label className="block text-[12px] font-semibold text-[#5c5a54] mb-1.5">Litros produzidos hoje</label>
          <input
            type="number"
            placeholder="ex: 230"
            value={liters}
            onChange={e => setLiters(e.target.value)}
            className="w-full px-3.5 py-2.5 rounded-[9px] border-[1.5px] border-[#d8d6d0] text-[14px] text-[#2e2c28] outline-none focus:border-[#52b788] transition-colors"
          />
        </div>
        <div className="mb-3.5">
          <label className="block text-[12px] font-semibold text-[#5c5a54] mb-1.5">Turno</label>
          <select
            value={shift}
            onChange={e => setShift(e.target.value)}
            className="w-full px-3.5 py-2.5 rounded-[9px] border-[1.5px] border-[#d8d6d0] text-[14px] text-[#2e2c28] outline-none focus:border-[#52b788] transition-colors bg-white"
          >
            <option>Manhã + Tarde (dia completo)</option>
            <option>Só da manhã</option>
            <option>Só da tarde</option>
          </select>
        </div>
        <div className="mb-3.5">
          <label className="block text-[12px] font-semibold text-[#5c5a54] mb-1.5">Algum problema? (opcional)</label>
          <input
            type="text"
            placeholder="ex: vaca 12 mancando"
            value={note}
            onChange={e => setNote(e.target.value)}
            className="w-full px-3.5 py-2.5 rounded-[9px] border-[1.5px] border-[#d8d6d0] text-[14px] text-[#2e2c28] outline-none focus:border-[#52b788] transition-colors"
          />
        </div>

        <div className="flex gap-2.5 mt-5">
          <button
            onClick={onClose}
            className="flex-1 py-2.5 rounded-[9px] text-[13px] font-semibold bg-[#f7f6f2] border border-[#d8d6d0] text-[#5c5a54] hover:bg-[#edecea] transition-colors"
          >
            Cancelar
          </button>
          <button
            onClick={handleSave}
            className="flex-1 py-2.5 rounded-[9px] text-[13px] font-semibold bg-[#2d6a4f] text-white hover:bg-[#234d37] transition-colors"
          >
            Salvar
          </button>
        </div>
      </div>
    </div>
  )
}
