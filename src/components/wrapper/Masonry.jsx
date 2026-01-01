import { tw } from "../../globals";
import { twMerge } from "tailwind-merge";

export default function Masonry({ data = [], children, className, tags = "section>article" }) {
  const css = {
    container: tw`columns-4 gap-12 max-xl:columns-3 max-lg:columns-2 max-md:columns-1`,
    item: tw`relative mb-12`
  };

  const [Container, Item] = tags.split(">").map(tag => tag.trim());

  return (
    <Container className={twMerge(css.container, className)}>
      {data.map((el, idx) => {
        return (
          <Item key={idx} className={css.item}>
            {children(el, idx)}
          </Item>
        );
      })}
    </Container>
  );
}
