import { collection, addDoc, getDocs, query, orderBy, deleteDoc, doc } from 'firebase/firestore';
import { db } from '../firebase';

export interface Inquiry {
  id: string;
  date: string;
  name: string;
  business: string;
  location: string;
  phone: string;
  volume: string;
  requirements: string;
}

enum OperationType {
  CREATE = 'create',
  UPDATE = 'update',
  DELETE = 'delete',
  LIST = 'list',
  GET = 'get',
  WRITE = 'write',
}

interface FirestoreErrorInfo {
  error: string;
  operationType: OperationType;
  path: string | null;
  authInfo: {
    userId: string | undefined;
    email: string | undefined;
    emailVerified: boolean | undefined;
    isAnonymous: boolean | undefined;
    tenantId: string | undefined;
    providerInfo: {
      providerId: string;
      displayName: string | null;
      email: string | null;
      photoUrl: string | null;
    }[];
  }
}

function handleFirestoreError(error: unknown, operationType: OperationType, path: string | null) {
  const errInfo: FirestoreErrorInfo = {
    error: error instanceof Error ? error.message : String(error),
    authInfo: {
      userId: undefined,
      email: undefined,
      emailVerified: undefined,
      isAnonymous: undefined,
      tenantId: undefined,
      providerInfo: []
    },
    operationType,
    path
  };
  console.error('Firestore Error: ', JSON.stringify(errInfo));
  throw new Error(JSON.stringify(errInfo));
}

export const StorageService = {
  /**
   * Fetches all inquiries from Firestore
   */
  getInquiries: async (): Promise<Inquiry[]> => {
    try {
      const q = query(collection(db, 'inquiries'), orderBy('date', 'desc'));
      const querySnapshot = await getDocs(q);
      const data: Inquiry[] = [];
      querySnapshot.forEach((doc) => {
        data.push({ id: doc.id, ...doc.data() } as Inquiry);
      });
      return data;
    } catch (error) {
      handleFirestoreError(error, OperationType.GET, 'inquiries');
      return [];
    }
  },

  /**
   * Saves a new inquiry to Firestore
   */
  addInquiry: async (inquiry: Omit<Inquiry, 'id'>): Promise<void> => {
    try {
      await addDoc(collection(db, 'inquiries'), inquiry);
    } catch (error) {
      handleFirestoreError(error, OperationType.CREATE, 'inquiries');
    }
  },

  /**
   * Clears all data
   */
  clearAll: async (): Promise<void> => {
    try {
      const querySnapshot = await getDocs(collection(db, 'inquiries'));
      const deletePromises = querySnapshot.docs.map((document) => 
        deleteDoc(doc(db, 'inquiries', document.id))
      );
      await Promise.all(deletePromises);
    } catch (error) {
      handleFirestoreError(error, OperationType.DELETE, 'inquiries');
    }
  }
};