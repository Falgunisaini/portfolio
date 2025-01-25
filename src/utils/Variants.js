export const fadeInLeftVariant = {
    hidden: {
        x: -50, 
        opacity: 0 
    },
    visible: {
        x: 0,
        opacity: 1,
        transition: {
            type: 'tween',
            duration: 1,
        }
    }
}

export const fadeInRightVariant = {
    hidden: {
        x: 50, 
        opacity: 0 
    },
    visible: {
        x: 0,
        opacity: 1,
        transition: {
            type: 'tween',
            duration: 1,
        }
    }
}

export const fadeInTopVariant = {
    hidden: {
        y: -50, 
        opacity: 0 
    },
    visible: {
        y: 0,
        opacity: 1,
        transition: {
            type: 'tween',
            duration: 1,
        }
    }
}

export const fadeInBottomVariant = {
    hidden: {
        y: 50, 
        opacity: 0 
    },
    visible: {
        y: 0,
        opacity: 1,
        transition: {
            type: 'tween',
            duration: 1,
        }
    }
}


export const fadeInVariant = {
    hidden: { 
        opacity: 0, 
        y: 100, 
        scale: 0.7
    },
    visible: { 
        opacity: 1, 
        y: 0, 
        scale: 1, 
        transition: {
            type: "spring", 
            stiffness: 120, 
            damping: 10, 
            mass: 0.8,
            duration: 0.8,
        },
    },
};



export const slideInLeft = {
    hidden: {
        x: '-100%',
        opacity: 0,
    },
    visible: {
        x: 0,
        opacity: 1,
        transition: {
            type: 'tween',
            duration: 0.5,
        },
    },
    exit: {
        opacity: 0,
        x: '-100%',
        transition: {
            type: 'tween',
            duration: 0.5,
        },
    },
};

