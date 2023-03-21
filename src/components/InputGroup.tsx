import { FC, memo } from 'react';

/* 
    Para soportar metodos antiguos en typescript, agregar en el archivo de configuracion de ts:
    "downlevelIteration": true 
*/

interface Props {
    name: string;
    changeId: (id: string) => void;
    total: number;
}

const InputGroup: FC<Props> = ({ name, changeId, total }) => {

    const items = Array.from({ length: total }, (_, index) => index + 1);

    return (
        <div className='input-group mb-3'>
            <select
                onChange={({ target }) => changeId(target.value)}
                id={name}
                className='form-select'
            >
                <option value='choose' disabled>Choose...</option>
                {
                    items.map((item) => (
                        <option key={item} value={item}>
                            {name} - {item}
                        </option>
                    ))
                }
            </select>
        </div>
    )
}

export default memo(InputGroup)