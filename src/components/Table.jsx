
const Table = () => {
    return (
            <table className="w-full bg-white">
                <thead className="bg-gray-200">
                    <tr>
                        <th className="py-2 px-4 border-b text-start">Col1</th>
                        <th className="py-2 px-4 border-b text-start">Col2</th>
                        <th className="py-2 px-4 border-b text-start">Col3</th>
                        <th className="py-2 px-4 border-b text-start">Col4</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td className="py-2 px-4 border-b">Data1</td>
                        <td className="py-2 px-4 border-b">Data2</td>
                        <td className="py-2 px-4 border-b">Data3</td>
                        <td className="py-2 px-4 border-b">Data4</td>
                    </tr>
                    <tr>
                        <td className="py-2 px-4 border-b">Data5</td>
                        <td className="py-2 px-4 border-b">Data6</td>
                        <td className="py-2 px-4 border-b">Data7</td>
                        <td className="py-2 px-4 border-b">Data8</td>
                    </tr>
                    <tr>
                        <td className="py-2 px-4 border-b">Data5</td>
                        <td className="py-2 px-4 border-b">Data6</td>
                        <td className="py-2 px-4 border-b">Data7</td>
                        <td className="py-2 px-4 border-b">Data8</td>
                    </tr>
                    <tr>
                        <td className="py-2 px-4 border-b">Data5</td>
                        <td className="py-2 px-4 border-b">Data6</td>
                        <td className="py-2 px-4 border-b">Data7</td>
                        <td className="py-2 px-4 border-b">Data8</td>
                    </tr>
                    {/* Add more rows as needed */}
                </tbody>
            </table>
    );
};

export default Table;
