import React, { useState } from "react";
import useAuth from "../../../hooks/useAuth";
import coverImg from "../../../assets/images/cover.jpg";
import useRole from "../../../hooks/useRole";
import { Edit3, Save, X, Mail, User, Shield, Fingerprint } from "lucide-react";
import { toast } from "react-toastify";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import axios from "axios";

const Profile = () => {
  const { user, updateUserProfile } = useAuth(); // Assuming your auth hook has an update function
  const { role } = useRole();
  const axiosSecure = useAxiosSecure()
  const [isEditing, setIsEditing] = useState(false);
  const [formData, setFormData] = useState({
    displayName: user?.displayName || "",
    photoURL: user?.photoURL || "",
  });

  const handleUpdate = async () => {
    try {
      // Logic to update profile via your Auth provider
      await updateUserProfile(formData.displayName, formData.photoURL);

      // const updated = {
      //   name: formData.displayName,
      //   image: formData.photoURL
      // }
    
      // await axios.patch('http://localhost:3000/profile', updated )
      setIsEditing(false);
      toast.success("Profile updated successfully!");
    } catch (err) {
      toast.error("Failed to update profile.");
    }
  };

  return (
    <div className="min-h-screen bg-black  flex justify-center items-center px-4 py-12 transition-colors duration-500">
      <div className="bg-white dark:bg-gray-900 shadow-2xl rounded-[2.5rem] w-full max-w-4xl overflow-hidden border border-gray-100 dark:border-white/5">

        {/* --- Header Section --- */}
        <div className="relative h-64">
          <img src={coverImg} alt="Cover" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>

          {/* Profile Image with Edit Overlay */}
          <div className="absolute -bottom-16 left-10 flex items-end gap-6">
            <div className="relative group">
              <img
                src={formData.photoURL}
                alt="profile"
                className="h-36 w-36 rounded-3xl border-4 border-white dark:border-gray-900 shadow-2xl object-cover"
              />
              {isEditing && (
                <div className="absolute inset-0 bg-black/40 rounded-3xl flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity cursor-pointer">
                  <p className="text-[10px] text-white font-bold uppercase">Change</p>
                </div>
              )}
            </div>

            <div className="mb-4">
              <span className="px-3 py-1 bg-[#ea580c] text-white text-[10px] font-black uppercase tracking-widest rounded-full shadow-lg shadow-orange-600/20">
                {role}
              </span>
              <h2 className="text-3xl font-black text-white mt-2 tracking-tighter">
                {user?.displayName || "Member"}
              </h2>
            </div>
          </div>

          {/* Edit Toggle Button */}
          <button
            onClick={() => setIsEditing(!isEditing)}
            className="absolute bottom-6 right-10 bg-white/20 backdrop-blur-md border border-white/30 text-white px-5 py-2 rounded-xl flex items-center gap-2 hover:bg-white hover:text-black transition-all font-bold text-xs uppercase tracking-widest"
          >
            {isEditing ? <><X size={16} /> Cancel</> : <><Edit3 size={16} /> Edit Profile</>}
          </button>
        </div>

        {/* --- Information Grid --- */}
        <div className="mt-24 px-10 pb-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

            {/* Full Name Input */}
            <div className="space-y-2">
              <label className="flex items-center gap-2 text-[10px] font-black uppercase tracking-widest text-gray-400">
                <User size={14} className="text-[#ea580c]" /> Full Name
              </label>
              <input
                disabled={!isEditing}
                value={formData.displayName}
                onChange={(e) => setFormData({ ...formData, displayName: e.target.value })}
                className={`w-full  p-4 rounded-2xl border text-sm font-bold transition-all ${isEditing
                    ? "bg-white text-white dark:bg-black border-[#ea580c] ring-1 ring-[#ea580c]/20"
                    : "bg-gray-50 dark:bg-white/5 border-transparent text-gray-500"
                  }`}
              />
            </div>

            {/* Email Address (Always Static for Security) */}
            <div className="space-y-2">
              <label className="flex items-center gap-2 text-[10px] font-black uppercase tracking-widest text-gray-400">
                <Mail size={14} className="text-[#ea580c]" /> Registered Email
              </label>
              <div className="w-full p-4 rounded-2xl bg-gray-50 dark:bg-white/5 border border-transparent text-gray-400 text-sm font-bold truncate">
                {user?.email}
              </div>
            </div>

            {/* User UID */}
            <div className="space-y-2">
              <label className="flex items-center gap-2 text-[10px] font-black uppercase tracking-widest text-gray-400">
                <Fingerprint size={14} className="text-[#ea580c]" /> Account ID
              </label>
              <div className="w-full p-4 rounded-2xl bg-gray-50 dark:bg-white/5 border border-transparent text-gray-400 text-sm font-mono truncate">
                {user?.uid}
              </div>
            </div>

            {/* Profile Image URL (Visible only in edit mode) */}
            {isEditing && (
              <div className="space-y-2 animate-in fade-in slide-in-from-top-2">
                <label className="flex items-center gap-2 text-[10px] font-black uppercase tracking-widest text-gray-400">
                  Avatar URL
                </label>
                <input
                  value={formData.photoURL}
                  onChange={(e) => setFormData({ ...formData, photoURL: e.target.value })}
                  className="w-full p-4 rounded-2xl border border-[#ea580c] text-white bg-white dark:bg-black text-sm font-bold ring-1 ring-[#ea580c]/20"
                />
              </div>
            )}
          </div>

          {/* --- Action Bar --- */}
          {isEditing && (
            <div className="mt-12 flex justify-end gap-4">
              <button
                onClick={handleUpdate}
                className="bg-[#ea580c] hover:bg-orange-700 text-white px-10 py-4 rounded-2xl font-black uppercase tracking-widest text-xs flex items-center gap-2 shadow-xl shadow-orange-600/30 active:scale-95 transition-all"
              >
                <Save size={18} /> Save Changes
              </button>
            </div>
          )}

          {!isEditing && (
            <div className="mt-12 pt-8 border-t dark:border-white/5 flex flex-wrap gap-4">
              <button className="px-6 py-3 rounded-xl bg-gray-900 dark:bg-white dark:text-black text-white text-[10px] font-black uppercase tracking-widest hover:opacity-80 transition-all">
                Security Settings
              </button>
              <button className="px-6 py-3 rounded-xl border border-gray-200 dark:border-white/10 text-[10px] font-black uppercase tracking-widest text-gray-200 hover:bg-gray-50 dark:hover:bg-white/5 transition-all">
                Activity Logs
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Profile;