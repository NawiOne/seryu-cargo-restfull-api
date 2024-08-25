import { dirname } from 'path';
import { fileURLToPath } from 'url';

function getDirName(url: string): string{
    const __filename = fileURLToPath(url);
    return dirname(__filename);
    
}

export default getDirName

