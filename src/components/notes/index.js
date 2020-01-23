import React, { useState, useEffect, Fragment } from 'react';
import '../../styles/notes.scss';
import { push as Menu} from 'react-burger-menu';
import { Column } from 'rbx';
import ListNotes from './list';
import Editor from './editor';
import NoteService from '../../services/notes';

const Notes = (props) => {
    const [notes, setNotes] = useState([]);
    const [current_note, setCurrentNote] = useState({title: "", body: "", id: ""});

    useEffect(() =>{
        fetchNotes();
    }, []);

    async function fetchNotes(){
        const response = await NoteService.index();
        if (response.data.length > 0){
            setNotes(response.data.reverse());
            setCurrentNote(response.data[0]);
        }else{
            setNotes([]);
        }
    }

    const selectNote = (id) =>{
        const note = notes.find((note) => note._id === id)
        setCurrentNote(note);
    }

    const createNote = async () =>{
        await NoteService.create();
        fetchNotes();
    }

    const deleteNote = async (note) => {
        await NoteService.delete(note._id);
        fetchNotes();
    }

    const updateNote = async (oldNote, params) => {
        const updatedNote = await NoteService.update(oldNote._id, params);
        const index = notes.indexOf(oldNote);
        const newNotes = notes;
        newNotes[index] = updateNote.data;
        setNotes(newNotes);
        setCurrentNote(updatedNote.data);
    }

    return(
        <Fragment>
            <Column.Group className="notes" id="notes">
                <Menu pageWrapId={"notes-editor"}
                      isOpen={props.isOpen}
                      onStateChange={(state) => props.setIsOpen(state.isOpen)}
                      disableAutoFocus
                      outerContainerId={"notes"}
                      customBurgerIcon={false}
                      customCrossIcon={false}>
                    <Column.Group>
                        <Column size={10} offset={1}>
                            Search...
                        </Column>
                    </Column.Group>
                    <ListNotes notes={notes}
                               selectNote={selectNote}
                               current_note={current_note} 
                               createNote={createNote} 
                               deleteNote={deleteNote}/>
                </Menu>
                <Column size={12} className="notes-editor" id="notes-editor">
                    <Editor note={current_note}
                            updateNote={updateNote} />
                </Column>
            </Column.Group>
        </Fragment>
    )
}

export default Notes;