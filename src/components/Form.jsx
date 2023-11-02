import React from 'react'

function Form() {
  return (
    <>
        <div className='bg-green-100 lg:max-w-[1280px] mx-auto'>
            <p>Form pour le saisie des informations</p>
            <form className='lg:max-w-[1000px] border border-black flex flex-col mx-auto'>
                <label htmlFor="Nom">Nom :</label>
                <input type="text" className='lg:w-56' />
                <label htmlFor='Prenom' className='py-2'>Prénom :</label>
                <input type="text"  className='lg:w-56'/>
                <label htmlFor='Ville' className='lg:w-56'> Ville</label>
                <input type="text" className='lg:w-56' />
                <label htmlFor='Passager' > Nombre de passager </label>

                <select name="NbPassager" id=" NbPassager" className='lg:w-56'>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="3">4</option>
                </select>

                <label htmlFor="typeVehicule"> Type de véhicule</label>
                <select name="typeVehicule" id="energie" className='lg:w-56' >
                    <option value="citadine">Citadine</option>
                    <option value="cabriolet">Cabriolet</option>
                    <option value="Berline">Berline</option>
                    <option value="Suv4x4">Suv / 4x4</option>
                </select>

                <label htmlFor='energie'>Energie</label>
                <select name="energie" id="energie" className='lg:w-56' >
                    <option value="essence">Essence</option>
                    <option value="electrique">Electrique</option>
                    <option value="gaz">Gaz</option>
                    <option value="diesel">Diesel</option>
                    <option value="hybride">Hybride</option>
                </select>

                <label htmlFor="distanceKm">Kilométrage :</label>
                <input type="number" placeholder='10 000' className='lg:w-56' />
                <label htmlFor="année">Année :</label>
                <input type="number" placeholder='1984' className='lg:w-56' />

                <div className='flex flex-row mx-auto'> 
                <button type="reset" className='px-4 py-2 border border-red'>Effacer</button> <button type="submit" className='px-4 py-2 border border-green'>Envoyer</button>
                </div>
            
            </form>
        </div>
    </>
  )
}

export default Form