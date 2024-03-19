import React, { useEffect } from 'react';

function Progress() {

    const progressSlider = 10;
    const updateProgressBar = () => {
        const progressBar = document.getElementById("progressBar");
        const value = progressSlider;
        progressBar.style.width = value + "%";
    };

    useEffect(() => {
        updateProgressBar();
    }, []);


    return (
        <div>
            <div className="progress-bar">
                <div className="progress-bar-inner" id="progressBar"></div>
            </div>
        </div>
    );
}

export default Progress;
