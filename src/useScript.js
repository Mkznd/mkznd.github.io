import { useEffect } from 'react';

const useScript = url => {
    useEffect(() => {
        const script = document.createElement('script');

        script.src = url;
        script.async = true;
        script.id='shoppableScriptConfigs'
        script.data_token='eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhbGdvcml0aG0iOiJIUzI1NiIsImlhdCI6MTY5MjM0NDMwOX0.9P3obDH1EMVoNIc0c5WUSLAD1ryfQ57QCU0yALy0lxM'

        document.body.appendChild(script);

        return () => {
            document.body.removeChild(script);
        }
    }, [url]);
};

export default useScript;
