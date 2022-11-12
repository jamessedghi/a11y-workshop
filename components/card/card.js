import img from '../../public/vercel.svg';

export const Card = ({ title, description }) => (
  <div>
    <img src={img.src} />
    <h4>{title}</h4>
    <p>{description}</p>
    <a>
      <img src='https://cdn.design-system.economist.com/assets/5.90.0/common/static/images/icons/controls-plus.svg' />
    </a>
  </div>
);
