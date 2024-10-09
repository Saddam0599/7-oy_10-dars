import { useNavigate } from "react-router";
import PropTypes from 'prop-types';

function Render({ data = [] }) {
  const navigate = useNavigate();

  return (
    <>
      <div className="mx-[90px]">
        <h3 className="text-[20px] mb-5">На неделе</h3>

        <div className="flex flex-wrap gap-2">
          {data.map((movie) => (
            <div
              onClick={() => {
                navigate(`/${movie.id}`);
              }}
              key={movie.id}
              className="flex flex-col bg-[#0F0F0F] rounded-lg p-3"
            >
              <div className="w-[265px] h-[400px] bg-[#1D1D1D] rounded-[12px] overflow-hidden">
                <img
                  className="w-full h-full object-cover"
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQlxRynrXHlKxcbqmoevphl53BfdeCHFKV7Yg&s"
                  alt=""
                />
              </div>
              <h4 className="font-medium w-[188px] mt-2">{movie.title}</h4>
              <p className="text-[#4D4D4D] text-[14px] group-hover:text-white transition-all duration-200 ease-in-out">
                Комедия, Фэнтези
              </p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

Render.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired, 
      title: PropTypes.string.isRequired, 
      poster: PropTypes.string.isRequired, 
    })
  ).isRequired,
};

export default Render;
