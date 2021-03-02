import { Image } from '~/components-styled/image';
import styled from 'styled-components';

type SanityImageProps = {
  src: string;
  srcSet?: string;
  extension: string;
  backgroundPosition?: string;
};

const BackgroundImage = styled(Image)`
  object-fit: cover;
  object-position: ${(props) => props.objectPosition || 'black'};
`;

export function SanityImage(props: SanityImageProps) {
  const { src, srcSet, extension, ...imageProps } = props;

  if (!srcSet) {
    return <Image src={src} {...imageProps} />;
  }

  return (
    <picture>
      <source srcSet={srcSet.split(extension).join('webp')} type="image/webp" />
      <source srcSet={srcSet} type={`image/${extension}`} />
      <Image src={src} {...imageProps} />
    </picture>
  );
}
