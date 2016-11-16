
import * as _ from 'lodash'

import uid from 'unicoid'

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
    global: boolean;
    placeId: string;
    coords?: number[];
}
interface IConfObjectsToPlace extends IConfBasicData {
    global: boolean;
    coords?: number[];
}

interface IPlace extends IBasicData {
    buildings: IBuilding[];
    floors: IFloor[];
    rooms: IRoom[];
    globalObjects: IObjectToPlace[];
}

interface IConfBuilding extends IConfBasicData {
    floors: IConfFloor
}
interface IConfFloor extends IConfBasicData {
    rooms: IConfRoom
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
}
interface IRoom extends IcommonData {
    floorId: string;
    buildingId: string;
}

interface Ibuildconf extends IConfBasicData{
    buildings: IConfBuilding[];
    globalObjects: IConfObjectsToPlace[];

}

export default class Place implements IPlace {
    id: string=uid(8)
    createdAt: number=new Date().getTime();
    updatedAt: number=new Date().getTime();
    objects: IObjectToPlace[] = []
    coords?: number[] = []

    buildings: IBuilding[] = []
    floors: IFloor[] = []
    rooms: IRoom[] = []
    globalObjects: IObjectToPlace[] = []
    constructor(buildingsconf?: Ibuildconf) {

        if (buildingsconf) { // could be validated

            if (buildingsconf.id) this.id = buildingsconf.id
            if (buildingsconf.createdAt) this.createdAt = buildingsconf.createdAt
            if (buildingsconf.updatedAt) this.updatedAt = buildingsconf.updatedAt
            if (buildingsconf.coords) this.coords = buildingsconf.coords



        }
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