import { render, cleanup, screen, waitFor } from "@testing-library/react";
import type { User } from 'firebase/auth'

const useAuthStateMock = jest.fn()
jest.mock("@/hooks/useAuthState", () => {
  return {
    useAuthState: useAuthStateMock
  }
})


