/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
function Color({color}) {
return (
        <div style={{width: 300, height: 100, background: color, cursor: "pointer"}} onClick={() => navigator.clipboard.writeText(color)}>
            {color}
        </div>
    );
}

export default Color;
