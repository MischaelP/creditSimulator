import React from 'react'
import { useForm } from 'react-hook-form'


function Form() {
    const {register, formState: {errors}, handleSubmit} = useForm()

    const onSubmit = data =>{
        console.log(data)
    }

  return (
    <>

        <form className='bg-gray-400 p-4' onSubmit={handleSubmit(onSubmit)}>
            <div>
            <label htmlFor="nom"> Nom :</label>
            <input type="text" name="nom" id="nom" {...register('nom', {required:true,
                 minLength:{
                 value :3, 
                 message: "Minimum 3 caractères"
                },
                 pattern:{
                    value:/^[A-Za-z]+$/i,
                    message: "Veuillez utiliser que des lettres"    
                    }
                
            })}/>
            <p>{errors.nom?.message}</p>
            </div>

            <div>
            <label htmlFor="Prenom"> Prenom :</label>
            <input type="text" name="prenom" id="prenom" {...register('prenom', {required:true,
                minLength:{
                value:3, 
                message: "Minimum 3 caractères"
            },
                pattern:{
                    value: /^[A-Za-z]+$/i,
                    message: "Veuillez utiliser que des lettres"
                    }

                })} 
                /> 
            <p>{errors.prenom?.message}</p>
        
            </div>

            <div>
            <label htmlFor="typeVehicule">Type véhicule : </label>
            <select name="typeVehicule" id="voiture" {...register('typeVehicule',{required:true})}>
                <option value="Essence">Essence</option>
                <option value="Diesel">Diesel</option>
                <option value="Gaz">Gaz</option>
                <option value="Electrique">Electrique</option>
            </select>
            </div>

            <div>
            <label htmlFor="distance">Km annuel :</label>
            <input type="text" name="distance" id="distance" {...register('distance',{required:true ,pattern:/^[0-9]+$/i})}/>
            </div>

            <div>
                <label htmlFor="passengers">Nombre de passager :</label>
                <select name="passengers" id="passengers" {...register('passengers',{required:true})}>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                </select>
            </div>
            <button type="submit" className='bg-blue-400 text-xl text-white'>Envoyer </button>
        </form>
    </>
  )
}

export default Form