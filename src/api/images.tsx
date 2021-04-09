import { BackgroundImage } from '../types';

const images: string[] = [
  'https://images.pexels.com/photos/1023953/pexels-photo-1023953.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
  'https://images.pexels.com/photos/1324803/pexels-photo-1324803.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
  'https://images.pexels.com/photos/1323550/pexels-photo-1323550.jpeg?cs=srgb&dl=pexels-simon-berger-1323550.jpg&fm=jpg',
  'https://images.pexels.com/photos/715134/pexels-photo-715134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
  'https://images.pexels.com/photos/1563355/pexels-photo-1563355.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
  'https://images.pexels.com/photos/1048039/pexels-photo-1048039.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
  'https://images.pexels.com/photos/313782/pexels-photo-313782.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
  'https://images.pexels.com/photos/1250260/pexels-photo-1250260.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
  'https://images.pexels.com/photos/259915/pexels-photo-259915.jpeg?cs=srgb&dl=pexels-pixabay-259915.jpg&fm=jpg',
  'https://images.pexels.com/photos/1131407/pexels-photo-1131407.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
  'https://images.pexels.com/photos/847402/pexels-photo-847402.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
  'https://images.pexels.com/photos/1128797/pexels-photo-1128797.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
];

const backgroundImages: BackgroundImage[] = [
  {
    filename: 'images/pexels-tirachard-kumtanom-347139.jpg',
    link: 'https://www.pexels.com/pt-br/foto/painel-de-madeira-marrom-347139/',
    credits: 'Tirachard Kumtanom',
  },
  {
    filename: 'images/pexels-juan-pablo-serrano-arenas-1242348.jpg',
    link:
      'https://www.pexels.com/pt-br/foto/imagem-borrada-de-um-fundo-acastanhado-1242348',
    credits: 'Juan Pablo Serrano Arenas',
  },
  {
    filename: 'images/pexels-miguel-á-padriñán-255379.jpg',
    link: 'https://www.pexels.com/pt-br/foto/imagem-desfocada-de-luzes-255379/',
    credits: 'Miguel Á. Padriñán',
  },
  {
    filename: 'images/pexels-pixabay-220118.jpg',
    link:
      'https://www.pexels.com/pt-br/foto/foto-de-luzes-em-lapso-de-tempo-220118/',
    credits: 'Pixabay',
  },
  {
    filename: 'images/pexels-johannes-plenio-1435075.jpg',
    link:
      'https://www.pexels.com/pt-br/foto/foto-de-pessoas-em-um-barco-a-remos-durante-o-por-do-sol-1435075/',
    credits: 'Johannes Plenio',
  },
  {
    filename: 'images/pexels-ave-calvar-martinez-3947374.jpg',
    link:
      'https://www.pexels.com/pt-br/foto/pontos-desfocados-na-superficie-desfocada-3947374/',
    credits: 'Ave Calvar Martinez',
  },
  {
    filename: 'images/pexels-maria-orlova-4916559.jpg',
    link:
      'https://www.pexels.com/photo/blooming-lotus-flower-with-green-leaves-4916559/',
    credits: 'Maria Orlova',
  },
  {
    filename: 'images/pexels-julian-paolo-dayag-1673973.jpg',
    link:
      'https://www.pexels.com/pt-br/foto/foto-de-folhas-com-foco-seletivo-1673973/',
    credits: 'Julian Paolo Dayag',
  },
  {
    filename: 'images/pexels-mike-chai-842339.jpg',
    link:
      'https://www.pexels.com/pt-br/foto/fotografia-de-lapso-de-tempo-de-pessoas-caminhando-na-faixa-de-pedestres-842339/',
    credits: 'Mike Chai',
  },
  {
    filename: 'images/pexels-jonathan-borba-6424615.jpg',
    link: 'https://www.pexels.com/pt-br/foto/corpo-de-agua-6424615/',
    credits: 'Jonathan Borba',
  },

  /*  {
    filename: 'images/pexels-sl-wong-1023953.jpg',
    link:
      'https://www.pexels.com/pt-br/foto/fotografia-com-foco-seletivo-de-flores-de-cerejeira-1023953/',
    credits: 'sl wong',
  }, */
];

function GetRandomImage(): BackgroundImage {
  const randomIndex = Math.floor(Math.random() * backgroundImages.length);
  return backgroundImages[randomIndex];
}

export default GetRandomImage;
