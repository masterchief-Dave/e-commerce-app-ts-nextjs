import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardTitle,
} from "@/components/ui/card"
import { errorLogger } from "@/lib/utils/logger"
import React, { Component, ErrorInfo, ReactNode } from "react"

interface ErrorBoundaryProps {
  children: ReactNode
}

interface ErrorBoundaryState {
  hasError: boolean
}

class ErrorBoundary extends Component<ErrorBoundaryProps, ErrorBoundaryState> {
  constructor(props: ErrorBoundaryProps) {
    super(props)
    this.state = { hasError: false }
  }

  static getDerivedStateFromError(_: Error): ErrorBoundaryState {
    return { hasError: true }
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo): void {
    // Log errors to an error tracking service
    logErrorToService(error, errorInfo)
  }

  render() {
    if (this.state.hasError) {
      // Render fallback UI
      return (
        <Card>
          <CardContent className="p-8">
            <CardTitle>Oops, something went wrong!</CardTitle>
            <CardDescription>
              <h2>An Error has occured!</h2>
              <Button
                className="w-fit"
                type="button"
                onClick={() => this.setState({ hasError: false })}
              >
                Try again
              </Button>
            </CardDescription>
          </CardContent>
          {/* You can provide more helpful information or actions here */}
        </Card>
      )
    }

    // Render children components normally
    return this.props.children
  }
}

function logErrorToService(error: Error, errorInfo: ErrorInfo) {
  // Log the error to an error tracking service like Sentry
  if (process.env.NODE_ENV === "development") {
    console.error({ error, errorInfo })
  }
  errorLogger({ url: "", message: "", err: { error, errorInfo } })
}

export default ErrorBoundary
