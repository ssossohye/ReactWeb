import { tw } from "../../globals";
import { twMerge } from "tailwind-merge";

export default function Table({ data = null, direction = "horizontal", className }) {
  const css = {
    table: tw`w-full border-b-2`,
    th: tw`border-b-2 px-2 py-4 text-left`,
    td: tw`border-b border-dark/20 px-2 py-4 text-left text-xs`
  };

  //세로형 테이블
  if (direction === "vertical") {
    const obj = data ?? {};
    const keys = Object.keys(obj);

    if (!keys.length) return <p>출력 할 데이터가 없습니다.</p>;

    return (
      <table className={twMerge(css.table, "border-t-2", className)}>
        <tbody>
          {keys.map(key => {
            return (
              <tr key={key}>
                <th className={twMerge(css.th, "border-b border-dark/20")}>{key}</th>
                <td className={css.td}>{obj[key]}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    );
  } else {
    //가로형 테이블
    if (!data.length) return <p>출력 할 데이터가 없습니다.</p>;
    const keys = Object.keys(data[0]);

    return (
      <table className={twMerge(css.table, className)}>
        <thead>
          <tr>
            {keys.map(key => {
              return (
                <th className={css.th} key={key}>
                  {key}
                </th>
              );
            })}
          </tr>
        </thead>
        <tbody>
          {data.map((row, i) => {
            return (
              <tr key={i}>
                {keys.map(key => {
                  return (
                    <td className={css.td} key={key}>
                      {row[key]}
                    </td>
                  );
                })}
              </tr>
            );
          })}
        </tbody>
      </table>
    );
  }
}
