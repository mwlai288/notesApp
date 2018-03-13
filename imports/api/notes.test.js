import { Meteor } from 'meteor/meteor';
import expect from 'expect';

import { Notes } from './notes';

if (Meteor.isServer) {
  describe('notes', function() {
    const noteOne = {
      _id: 'testid1',
      title: 'note1',
      body: 'what the poop? Fortnite is great',
      updatatedAt: 13124,
      userId: 'testuserId124'
    };
    const noteTwo = {
      _id: 'testid2',
      title: 'note1',
      body: 'Give ME JOB NOW',
      updatatedAt: 13124,
      userId: 'testuserId125'
    };

    beforeEach(function() {
      Notes.remove({});
      Notes.insert(noteOne);
      Notes.insert(noteTwo);
    });

    it('should insert new note', function() {
      const userId = 'testid';
      const _id = Meteor.server.method_handlers['addNotes'].apply({
        userId
      });

      expect(Notes.findOne({ _id, userId })).toBeTruthy();
    });

    it('should not insert note if not authenticated', function() {
      expect(() => {
        Meteor.server.method_handlers['notes.insert']();
      }).toThrow();
    });

    it('should remove note', function() {
      Meteor.server.method_handlers['deleteNotes'].apply(
        { userId: noteOne.userId },
        [noteOne._id]
      );
      expect(Notes.findOne({ _id: noteOne._id })).toBeFalsy();
    });

    it('should not remove not if unauthenticated', function() {
      expect(() => {
        Meteor.server.method_handlers['deleteNotes'].apply({}, [noteOne._id]);
      }).toThrow();
    });

    it('should not remove note if invalid _id', function() {
      expect(() => {
        Meteor.server.method_handlers['deleteNotes'].apply(
          { userId: noteOne.userId },
          []
        );
      }).toThrow();
    });

    it('should update note', function() {
      const title = 'new title. note 2';
      Meteor.server.method_handlers['updateNotes'].apply(
        {
          userId: noteOne.userId
        },
        [noteOne._id, { title }]
      );

      const note = Notes.findOne(noteOne._id);
      expect(note.updatatedAt).toBeGreaterThan(0);
      expect(note).toInclude({
        title,
        body: noteOne.body
      });
    });

    it('should throw error if extra updates', function() {
      expect(() => {
        Meteor.server.method_handlers['updateNotes'].apply({
          name: 'will'
        });
      }).toThrow();
    });

    it('should not update note if user was not creator', function() {
      const title = 'new title. note 2';
      Meteor.server.method_handlers['updateNotes'].apply(
        {
          userId: 'testid1'
        },
        [noteOne._id, { title }]
      );

      const note = Notes.findOne(noteOne._id);

      expect(note).toInclude(noteOne);
    });

    it('should not update not if unauthenticated', function() {
      expect(() => {
        Meteor.server.method_handlers['updateNotes'].apply({}, [noteOne._id]);
      }).toThrow();
    });

    it('should not update note if invalid _id', function() {
      expect(() => {
        Meteor.server.method_handlers['updateNotes'].apply(
          { userId: noteOne.userId },
          []
        );
      }).toThrow();
    });

    it('should return a users notes', function() {
      const res = Meteor.server.publish_handlers.notes.apply({
        userId: noteOne.userId
      });
      const notes = res.fetch();
      expect(notes.length).toBe(1);
      expect(notes[0]).toEqual(noteOne);
    });

    it('should return zero notes for user that has none', function() {
      const res = Meteor.server.publish_handlers.notes.apply({
        userId: '214124'
      });
      const notes = res.fetch();
      expect(notes.length).toBe(0);
    });
  });
}
