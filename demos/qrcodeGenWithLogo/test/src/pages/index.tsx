import React, { useCallback } from 'react';
import QRCode from 'qrcode';
import useCanvas from './useCanvas';
import ss from './index.less';
import ICON_PNG from './icon.png';

const data = 'https://appactive.aizigao.com/qr?c=34343434343334&b=343433';

const drawImageOnCenter = (ctx, imgSrc, imgSize) => {
  var image = new Image();
  image.src = imgSrc;
  image.onload = function () {
    const canvasSize = ctx.canvas.width;
    ctx.beginPath();
    ctx.arc(canvasSize / 2, canvasSize / 2, imgSize / 2, 0, 2 * Math.PI, false); //draw the circle
    ctx.clip(); //call the clip method so the next render is clipped in last path
    ctx.stroke();
    ctx.closePath();
    ctx.drawImage(
      image,
      0,
      0,
      image.width,
      image.height,
      (canvasSize - imgSize) / 2,
      (canvasSize - imgSize) / 2,
      imgSize,
      imgSize,
    );
  };
};

const Canvas = (props) => {
  const { draw, ...rest } = props;
  const canvasRef = useCanvas(draw);

  return <canvas ref={canvasRef} {...rest} />;
};

export default () => {
  const draw = useCallback((context, convasRef) => {
    QRCode.toCanvas(
      convasRef,
      data,
      {
        errorCorrectionLevel: 'H',
        margin: 2,
        width: 1024,
        color: {
          light: '#ffffff00',
        },
      },
      (err, canvas) => {
        if (err) {
          console.log(err);
          return;
        }
        drawImageOnCenter(context, ICON_PNG, 350);
        console.log({ canvas });
      },
    );
  }, []);

  return (
    <Canvas
      draw={draw}
      width={1024}
      height={1024}
      className={ss.canvas}
    ></Canvas>
  );
};
