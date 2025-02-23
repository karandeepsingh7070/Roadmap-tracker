const getUserProgress = () => {
    if (typeof window !== "undefined") {
      const progress = localStorage.getItem("user-progress");
      return progress ? parseInt(progress) : 1
    }
    return 1;
  };
  
const saveUserProgress = (progress: number) => {
    if (typeof window !== "undefined") {
      localStorage.setItem("user-progress", JSON.stringify(progress));
    }
  };

export {getUserProgress,saveUserProgress}
  