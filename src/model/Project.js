/**
 * TempApi
 * This is a sample openApi document
 *
 * The version of the OpenAPI document: 1.0.0
 * Contact: lampralexandros@gmail.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import ApiClient from '../ApiClient';

/**
 * The Project model module.
 * @module model/Project
 * @version 1.0.0
 */
class Project {
    /**
     * Constructs a new <code>Project</code>.
     * @alias module:model/Project
     * @param title {String} 
     * @param startdate {String} 
     * @param image {String} 
     * @param _abstract {String} 
     * @param enddate {String} 
     * @param pimage {String} 
     * @param grantagreement {String} 
     */
    constructor(title, startdate, image, _abstract, enddate, pimage, grantagreement) { 
        
        Project.initialize(this, title, startdate, image, _abstract, enddate, pimage, grantagreement);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, title, startdate, image, _abstract, enddate, pimage, grantagreement) { 
        obj['title'] = title;
        obj['startdate'] = startdate;
        obj['image'] = image;
        obj['abstract'] = _abstract;
        obj['enddate'] = enddate;
        obj['pimage'] = pimage;
        obj['grantagreement'] = grantagreement;
    }

    /**
     * Constructs a <code>Project</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/Project} obj Optional instance to populate.
     * @return {module:model/Project} The populated <code>Project</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new Project();

            if (data.hasOwnProperty('_id')) {
                obj['_id'] = ApiClient.convertToType(data['_id'], 'String');
            }
            if (data.hasOwnProperty('title')) {
                obj['title'] = ApiClient.convertToType(data['title'], 'String');
            }
            if (data.hasOwnProperty('startdate')) {
                obj['startdate'] = ApiClient.convertToType(data['startdate'], 'String');
            }
            if (data.hasOwnProperty('image')) {
                obj['image'] = ApiClient.convertToType(data['image'], 'String');
            }
            if (data.hasOwnProperty('abstract')) {
                obj['abstract'] = ApiClient.convertToType(data['abstract'], 'String');
            }
            if (data.hasOwnProperty('enddate')) {
                obj['enddate'] = ApiClient.convertToType(data['enddate'], 'String');
            }
            if (data.hasOwnProperty('pimage')) {
                obj['pimage'] = ApiClient.convertToType(data['pimage'], 'String');
            }
            if (data.hasOwnProperty('grantagreement')) {
                obj['grantagreement'] = ApiClient.convertToType(data['grantagreement'], 'String');
            }
        }
        return obj;
    }


}

/**
 * @member {String} _id
 */
Project.prototype['_id'] = undefined;

/**
 * @member {String} title
 */
Project.prototype['title'] = undefined;

/**
 * @member {String} startdate
 */
Project.prototype['startdate'] = undefined;

/**
 * @member {String} image
 */
Project.prototype['image'] = undefined;

/**
 * @member {String} abstract
 */
Project.prototype['abstract'] = undefined;

/**
 * @member {String} enddate
 */
Project.prototype['enddate'] = undefined;

/**
 * @member {String} pimage
 */
Project.prototype['pimage'] = undefined;

/**
 * @member {String} grantagreement
 */
Project.prototype['grantagreement'] = undefined;






export default Project;

