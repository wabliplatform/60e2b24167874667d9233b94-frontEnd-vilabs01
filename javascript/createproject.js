let apiProjectApi = new TempApi.ProjectApi();import TempApi from '../src/index';let project = new TempApi.Project();document.getElementById('itm58').onclick = (event) => {
    event.preventDefault();
    project['title'] = document.querySelector("[annotationname = 'title']").value;project['startdate'] = document.querySelector("[annotationname = 'startdate']").value;project['grantagreement'] = document.querySelector("[annotationname = 'grantagreement']").value;project['abstract'] = document.querySelector("[annotationname = 'abstract']").value;project['enddate'] = document.querySelector("[annotationname = 'enddate']").value;project['pimage'] = document.querySelector("[annotationname = 'pimage']").value;apiProjectApi.createproject( project, (error, data, response) => { if (error) {console.error(error);} else { console.log('API called successfully. Returned data: ' + data); { location.href= '/Home/'+response.body.query._id+'';}}});};