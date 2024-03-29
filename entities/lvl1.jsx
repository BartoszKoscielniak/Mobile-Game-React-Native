import Matter from "matter-js"
import Platform from "../components/Platform";
import Player from "../components/Player";
import {Dimensions} from "react-native";
import Obstacle from "../components/Obstacle";
import {getPlatformSizePosPair} from "../utils/random";
import Joystick from "../components/Joystick";

const windowHeight = Dimensions.get ( 'window' ).height;
const windowWidth = Dimensions.get ( 'window' ).width;

const lvl1 = () => {
    let engine = Matter.Engine.create ( { enableSleeping: false } )
    let world = engine.world
    engine.gravity.y = 0.9;

    const platformSizePosAA = getPlatformSizePosPair ( windowHeight * 0.2 )
    const platformSizePosA = getPlatformSizePosPair ( windowHeight * 0.4 )
    const platformSizePosB = getPlatformSizePosPair ( windowHeight * 0.6 )
    const platformSizePosC = getPlatformSizePosPair ( windowHeight * 0.8 )
    const platformSizePosD = getPlatformSizePosPair ( windowHeight )

    return {
        physics: { engine, world },
        Player: Player ( world, 'green', { x: windowWidth / 2 - 20, y: windowHeight - 70 }, { height: 36, width: 36 } ),

        Platform1: Obstacle ( world, 'red', platformSizePosAA.platform.pos, platformSizePosAA.platform.size ),
        Platform2: Obstacle ( world, 'red', platformSizePosA.platform.pos, platformSizePosA.platform.size ),
        Platform3: Obstacle ( world, 'purple', platformSizePosB.platform.pos, platformSizePosB.platform.size ),
        Platform4: Obstacle ( world, 'grey', platformSizePosC.platform.pos, platformSizePosC.platform.size ),
        Platform5: Obstacle ( world, 'black', platformSizePosD.platform.pos, platformSizePosD.platform.size ),

        PlayerVelocity:     {x: 8, y: 30},
        PlatformVelocity:   {y: 1},

        Platform: Platform ( world, 'green', { x: windowWidth / 2, y: windowHeight }, { height: 40, width: windowWidth } ),
        Joystick1: Joystick ( world, 'black', { x: -100, y: -100 }, 20 ),
        Joystick2: Joystick ( world, 'black', { x: -100, y: -100 }, 30 )
    }
}

export default lvl1;