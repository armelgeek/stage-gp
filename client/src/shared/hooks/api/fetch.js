import { useState, useCallback } from 'react'

async function jsonFetch(url,method='GET',data=null){
	const params ={
		 method : method,
		 headers: 
		 	{
                'Accept': 'application/json',
                'Content-Type' : 'application/json'
            }
	}
	if(data){
		params.body = JSON.stringify(data)
	}
	  const response = await fetch(url,params)
		if(response.status == 204){
				return null
		}
		const responseData = await response.json()
        	if (response.ok) {
            	return responseData
        	} else {
        		throw responseData
        	}
	}
export function useFetch(url,method='POST',callback =null){
	const [errors,setErrors] = useState({});
	 const [items, setItems] = useState([])
	const [loading,setLoading] = useState(false);
	const load = useCallback(async(data = null)=>{
		setLoading(true)
	try{
		const response = await jsonFetch(url,method,data)
		setItems(items => [...items, ...response])	
		setLoading(false)
		if(callback){
			callback(response)
		}

	}catch(error){
		setErrors(error)
	}
	},[url,method,callback])
	const clearError = useCallback((name)=>{
		if(errors[name]){
			setErrors(errors => ({...errors, [name]:null}))
		}
	},[errors])
	return {
		items,
		loading,
		load,
		errors,
		clearError
	}
}