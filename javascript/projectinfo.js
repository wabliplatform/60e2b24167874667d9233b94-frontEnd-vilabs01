let apiProjectApi = new TempApi.ProjectApi();import TempApi from '../src/index';window.onload = () => {let projectId = window.location.pathname.replace('/projectinfo/','');apiProjectApi.getproject( projectId, (error, data, response) => { if (error) {console.error(error);} else { console.log('API called successfully. Returned data: ' + data); document.querySelector('[annotationname = title]').textContent = response.body.query.title ;document.querySelector('[annotationname = startdate]').textContent = response.body.query.startdate ;document.querySelector('[annotationname = abstract]').textContent = response.body.query.abstract ;document.querySelector('[annotationname = enddate]').textContent = response.body.query.enddate ;}});};document.getElementById('isww3').onclick = (event) => {
    event.preventDefault();
    let projectId = window.location.pathname.replace('/projectinfo/','');apiProjectApi.deleteproject( projectId, (error, data, response) => { if (error) {console.error(error);} else { console.log('API called successfully.');{ location.href= '/Home';}}});};