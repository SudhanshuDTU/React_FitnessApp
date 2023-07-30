export const exerciseOptions = {
    method: 'GET',
    // url: 'https://exercisedb.p.rapidapi.com/exercises/bodyPartList',
    headers: {
      'X-RapidAPI-Key': 'f9e7c4cc40mshf876815e481e182p13e53ejsn14c7049432b7',
      'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com'
    }
  };
  
  export const youtubeOptions = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Host': 'youtube-search-and-download.p.rapidapi.com',
      'X-RapidAPI-Key': 'f0021db587msh781fb1cbef39856p11c183jsn45521d5d1c85',
    },
  };


export const fetchData =async (url,options)=>{
    const response = await fetch(url,options);
    const data = await response.json();
    return data;
}