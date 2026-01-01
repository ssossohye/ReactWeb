import { tw } from "../../globals";
import { twMerge } from "tailwind-merge";

export default function GridList({ data = [], children, tags = "ul>li", className }) {
  const css = {
    container: tw`grid w-full grid-cols-3 gap-10 max-lg:grid-cols-2 max-md:grid-cols-1`,
    item: tw`relative mb-12 *:w-full`
  };

  const [Container, Item] = tags.split(">").map(tag => tag.trim());

  typeof children !== "function" && console.warn("children으로 (item,idx) => JSX 형태의 함수가 와야합니다.");

  !tags.includes(">") && console.warn("tags에는 '부모태그>자식태그' 형태의 문자열을 입력하세요.");

  return (
    <Container className={twMerge(css.container, className)}>
      {data.map((el, idx) => {
        return (
          <Item className={css.item} key={idx}>
            {children(el)}
          </Item>
        );
      })}
    </Container>
  );
}
