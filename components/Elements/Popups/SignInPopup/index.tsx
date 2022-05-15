import React, {useState} from 'react';
import dynamic from "next/dynamic";
import SignInTab from "./SignInTab";
import RegisterTab from "./RegisterTab";

const Popup = dynamic(() => import('reactjs-popup'), { ssr: false });

const SignInPopupIndex = () => {
  const [isOpen, togglePopup] = useState(false);
  const [currentTab, setCurrentTab] = useState<"phoneLogin" | "emailLogin">('phoneLogin');

  return (
    <>
      <button className="btn btn-ghost btn-circle avatar" onClick={() => togglePopup(true)}>
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
      </button>

      <Popup modal open={isOpen} closeOnDocumentClick onClose={() => togglePopup(false)}>

        <div className="card card-compact bg-base-100 w-[24rem] p-6 sm:p-10 relative">
          <button type="button" className="btn btn-ghost btn-circle absolute top-2 right-2" onClick={() => togglePopup(false)}>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" /></svg>
          </button>

          {currentTab === 'phoneLogin' && <SignInTab emailLogin={() => setCurrentTab('emailLogin')}/>}
          {currentTab === 'emailLogin' && <RegisterTab onBack={() => setCurrentTab('phoneLogin')}/>}

        </div>
      </Popup>
    </>
  );
};

export default SignInPopupIndex;