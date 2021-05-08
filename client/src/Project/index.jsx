import React,{ useEffect, useRef,useCallback,useState,Fragment } from 'react';
import { Route, Redirect, useRouteMatch, useHistory } from 'react-router-dom';

import useApi from 'shared/hooks/api';
import { updateArrayItemById } from 'shared/utils/javascript';
import { createQueryParamModalHelpers } from 'shared/utils/queryParamModal';
import { PageLoader, PageError, Modal } from 'shared/components';

import NavbarLeft from './NavbarLeft';
//import Sidebar from './Sidebar';
import Board from './Board';
import IssueSearch from './IssueSearch';
import IssueCreate from './IssueCreate';
import ProjectSettings from './ProjectSettings';
import { ProjectPage } from './Styles';
import { useFetch }  from 'shared/hooks/api/fetch';

import { CustomField }  from 'shared/components/Form/CustomField';
const VIEW= 'VIEW';
const EDIT= 'EDIT';
function ProjectList({project}){

  const {items : projects , setItems: setProjects,load , loading } = useFetch('/api/projects','GET')
  const addProject=useCallback(project  =>{
    setProjects(projects =>[project,...projects])
  },[])
  const deleteProject=useCallback(project =>{
    setProjects(projects =>projects.filter(p => p != project ))
  },[])
  const updateProject=useCallback((news,old)  =>{
    setProjects(projects =>projects.map(p => p == old ? news : p))
  },[])
  useEffect(() =>{ load() },[])
  return <div className="col-lg-12">
    <ProjectForm project={project} onProject={addProject} />
    {loading && <PageLoader /> }
    {projects.map(s =>
      <SingleProject key={s.id} data={s} onDelete={deleteProject} onUpdate={updateProject}/>)
    }
  </div> 
}
const SingleProject = React.memo(({data,onDelete,onUpdate})=>{
  const [state,setState] = useState(VIEW)
  //Events
  const toggleEdit=useCallback(() =>{
    setState(state => state==VIEW ? EDIT : VIEW)
  },[])
  const onDeleteCallback = useCallback(()=>{
    onDelete(data)
  },[data])
  const onProject = useCallback((news)=>{
    onUpdate(news,data)
    toggleEdit()
  },[data])
  
  const {loading:loadingDelete,load:callDelete} = useFetch(data['id'],'DELETE',onDeleteCallback)
  return <div className="list-group" >
  {state == VIEW ?
    <a href="#" className="list-group-item active">
      <h5 className="list-group-item-heading">{data.titre}</h5>
    </a>
  : <ProjectForm project={data} onProject={onProject} onCancel={toggleEdit} />
}
  { state != EDIT &&
    <p>
      <button className="btn btn-danger" onClick={callDelete.bind(this,null)} disabled={loadingDelete}>Supprimer</button>
      <button className="btn btn-secondary" onClick={toggleEdit}>Editer</button>
    </p>}
  </div>
})
const ProjectForm = React.memo(({project=null,onProject,onCancel=null})=>{
  const ref = useRef(null)
  const method= project ? 'PUT' : 'POST'
  const url = project ? project['id'] : '/api/projects'
  const onSuccess=useCallback(data =>{
    onProject(data)
    if(ref.current!=null){
      ref.current.value = ''
    }
    
  },[ref,onProject])
  
  const {load,loading,errors,clearError} = useFetch(url,method,onSuccess)
  
  const onSubmit = useCallback(e => {
    e.preventDefault()
    load({
      titre :ref.current.vloalue
    })
  },[load,ref])
  useEffect(()=>{
    if(project && project.titre && ref.current){
    ref.current.value=project.titre
    }
  },[project,ref])
  return <form onSubmit={onSubmit}>
    <CustomField name="titre" help="aide moi" required="required"  ref={ref} error={errors['titre']} onChange={clearError.bind(this,'titre')}>Titre </CustomField>
    <div className="form-group">
      <button className="btn btn-primary" disabled={loading}>{ project ==null ? 'Envoyer' : 'Editer' }</button>
      {onCancel && <button className="btn btn-secondary" onClick={onCancel}>Annuler</button>}
    </div>
  </form>
})
const Project = () => {
  const match = useRouteMatch();
  const history = useHistory();

  const projectCreateModalHelpers = createQueryParamModalHelpers('project-create');

  return ( 

    <Fragment>
    <div className="project-container">
  
       {projectCreateModalHelpers.isOpen() && (
        <Modal
          isOpen
          testid="modal:project-create"
          variant="center"
          width={600}
          onClose={projectCreateModalHelpers.close}
          renderContent={() =><div>Hello</div> }
        />
      )}
      <button onClick={projectCreateModalHelpers.open}>Ajout</button>
      <ProjectList project={1}/>
    </div>

    </Fragment>
  );
};

export default Project;
