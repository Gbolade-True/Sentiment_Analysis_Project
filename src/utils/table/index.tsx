import './index.scss';

export interface Data {
    id: string | number;
    [key: string]: React.ReactNode;
};

interface HeadCell {
    id: string | number;
    label: string;
}

interface IProps {
    headCells: Array<HeadCell>;
    rows: Data[];
    header?: string;
    page?: number;
    rowsPerPage?: number;
};

export const Table = (props: IProps) => {
    const { headCells, rows, header = ''} = props;

    const TableHead = () => {

        return (
            <thead>
                <tr>
                {headCells.filter(i => i!?.id !== 'id')
                    .map((headCell) => {
                        const { id='', label=''} = headCell || {}
                        return(
                            <th key={id} >
                                <b>{label}</b>
                            </th>
                        )
                    })}
                </tr>
            </thead>
        );
    };

    return (
        <>
            <h3 style={{marginTop: 0}}>{header}</h3>
            <div className='table-wrapper'>
                <table className='requests-table'>
                    <TableHead />
                    <tbody >
                        {rows!?.map((row, index) => {
                            return (
                                <tr key={index} className='body-tr'>	
                                    {
                                        Object.keys(row)?.filter(r => r !== 'id')?.map((r2, index) => {
                                            const value = row[r2]
                                            return(
                                                <td key={index} >
                                                 {value}
                                                </td>
                                            )
                                        })
                                    }	
                                </tr>
                            )
                        })}
                    </tbody>
                </table>
            </div>
        </>
    );
}
