
import * as _ from 'lodash'

interface IConfBasicData {
    id: string;
    label?: string;
    createdAt?: number;
    updatedAt?: number;
    coords?: number[];

}

interface IBasicData {
    id: string;
    createdAt: number;
    updatedAt: number;
    coords?: number[];
    label?: string;
    objects?: IObjectToPlace[];
}

interface IcommonData extends IBasicData {
    placeId: string;
}

interface IObjectToPlace {
    floorId?: string;
    buildingId?: string;
    roomId?: string;
    external: boolean;
    placeId: string;
    coords?: number[];
}
interface IConfObjectsToPlace extends IConfBasicData {
    external: boolean;
    coords?: number[];
}

interface IPlace extends IBasicData {
    buildings: IBuilding[];
    floors: IFloor[];
    rooms: IRoom[];
    externals: IObjectToPlace[];
}

interface IConfBuilding extends IConfBasicData {
    floors: IConfFloor
}
interface IConfFloor extends IConfBasicData {
    rooms: IConfRoom
    externals: IConfObjectsToPlace[];
}
interface IConfRoom extends IConfBasicData {
    objects: IConfObjectsToPlace[]
}
interface IBuilding extends IcommonData {
    floors: IFloor[]
    rooms: IRoom[]


}
interface IFloor extends IcommonData {
    buildingId: string;
    rooms: IRoom[];
    externals: IObjectToPlace[]


}
interface IRoom extends IcommonData {
    floorId: string;
    buildingId: string;


}

interface Ibuildconf {
    buildings: IConfBuilding[];
    coords?: number[];
    externals:IConfObjectsToPlace[]
}

export default class Place implements IPlace {
    id: string;
    createdAt: number;
    updatedAt: number;
    objects: IObjectToPlace[];
    coords?: number[];

    buildings: IBuilding[];
    floors: IFloor[];
    rooms: IRoom[];
    externals: IObjectToPlace[];
    constructor(buildingsconf: Ibuildconf) {

    }

    getBuildings() {

    }

    getBuilding() {

    }

    getFloors() {

    }
    getFloor() {

    }


    getRooms() {

    }
    getRoom() {

    }
    addObject() {

    }


}