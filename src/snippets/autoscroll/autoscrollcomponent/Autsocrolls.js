import React, { useRef } from 'react';
import styles from './Autoscrolls.module.css';


function Autsocrolls() {
  
  const loremIpsum = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam imperdiet, elit ac malesuada placerat, augue nisl suscipit quam, nec eleifend libero eros a lorem. Phasellus tincidunt turpis nec lorem consectetur, sit amet fermentum libero varius. Proin ac augue sed risus auctor tempus. Aliquam erat volutpat. Cras sit amet eros non lacus convallis faucibus. Morbi auctor vestibulum dolor, et facilisis sapien malesuada sit amet. Nullam a diam felis. Nulla facilisi. Vestibulum vitae felis a lorem feugiat venenatis. Suspendisse potenti. Fusce euismod cursus dui et dictum. Quisque scelerisque ligula id sagittis convallis. Morbi id dolor lorem. Integer faucibus mi a dolor convallis, et eleifend arcu hendrerit. Vestibulum dignissim ligula at purus efficitur venenatis. Donec sed velit nec eros cursus gravida. Praesent et eros nunc. Aenean at ultrices elit, vel varius arcu. Aliquam tristique massa sit amet sapien feugiat, et aliquam lectus consequat. Sed sit amet sem non augue malesuada pharetra. Sed tempus augue ut risus ullamcorper, eget egestas risus pretium. Duis posuere vestibulum ex vel laoreet. Nullam nec lacus eu elit interdum commodo. Sed imperdiet condimentum metus, vel consequat lorem luctus sit amet. Vivamus vel est et augue pretium varius eget sit amet nunc. Integer varius dui sed metus tincidunt, non malesuada velit aliquam. Nullam ac leo sapien. Etiam sagittis lectus in magna elementum, et aliquet orci vestibulum. Vestibulum ut arcu vitae eros aliquam interdum. Sed imperdiet tincidunt augue, id lacinia tortor suscipit at. Ut cursus sapien et nisl auctor volutpat. Donec ut erat ex. Donec nec scelerisque lorem. Vivamus venenatis nisl ac erat scelerisque facilisis. Duis ac risus in odio feugiat pharetra. Duis vel mi fringilla, suscipit metus vel, sagittis augue. Mauris scelerisque elit non ex posuere, ut cursus erat venenatis. Pellentesque fringilla turpis nec sapien ultrices, a cursus ex varius.";

  
  const longText = loremIpsum.repeat(4);
  const Gamesref=useRef(null);

  const HandleClick=()=>{
    Gamesref.current.scrollIntoView({behavior:'smooth'})
  }
  
  return (
    <div className={styles.containers}>
        <div><button className={styles.button} onClick={HandleClick}>
            Jump to Available Games</button></div>
      <div>
        <h1>Games</h1>
        <p>{longText}</p>
      </div>
      <div ref={Gamesref} className={styles.availableGames}>
        <h2>Available Games</h2>
        <ul>
          <li>Chess</li>
          <li>Soccer</li>
          <li>Basketball</li>
          <li>Tennis</li>
          <li>Volleyball</li>
          <li>Cricket</li>
          <li>Football</li>
          <li>Badminton</li>
          <li>Hockey</li>
          <li>Javeline</li>
          <li>Chess</li>
          <li>Soccer</li>
          <li>Basketball</li>
          <li>Tennis</li>
          <li>Volleyball</li>
          <li>Cricket</li>
          <li>Football</li>
          <li>Badminton</li>
          <li>Hockey</li>
          <li>Javeline</li>
          <li>Chess</li>
          <li>Soccer</li>
          <li>Basketball</li>
          <li>Tennis</li>
          <li>Volleyball</li>
          <li>Cricket</li>
          <li>Football</li>
          <li>Badminton</li>
          <li>Hockey</li>
          <li>Javeline</li>
          <li>Chess</li>
          <li>Soccer</li>
          <li>Basketball</li>
          <li>Tennis</li>
          <li>Volleyball</li>
          <li>Cricket</li>
          <li>Football</li>
          <li>Badminton</li>
          <li>Hockey</li>
          <li>Javeline</li>
        </ul>
      </div>
    </div>
  );
}

export default Autsocrolls;
