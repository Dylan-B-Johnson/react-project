import React, { useEffect } from 'react';
import GlazesComponent from "../components/Glazes.js"

const Glazes = () => {
    return (
        <div id="remaining-content" class="remaining-content columns center-columns-horizontal">
            <div id="remaining-content-child" class="columns-all center-columns-horizontal  wrap">
                <GlazesComponent />
            </div>
        </div>
    );
};

export default Glazes
