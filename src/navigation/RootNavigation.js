import React from "react";
import MainNavigation from "./MainNavigation";

export default function RootNavigation() {
    return(
      <AuthProvider>
        <MainNavigation />
      </AuthProvider>
    )
}
