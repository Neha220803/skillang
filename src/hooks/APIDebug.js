import React, { useState, useEffect } from "react";
import { Container, Button, Card, Alert, Spinner } from "react-bootstrap";
import * as apiService from "./countryCMS";

/**
 * This component helps debug API issues.
 * Only use it during development to troubleshoot.
 */
function ApiDebugger() {
  const [loading, setLoading] = useState(false);
  const [apiResponse, setApiResponse] = useState(null);
  const [error, setError] = useState(null);
  const [showDebugger, setShowDebugger] = useState(true);

  const testApi = async () => {
    setLoading(true);
    setError(null);

    try {
      const response = await apiService.getCountries();
      console.log("API Response:", response);
      setApiResponse(response);
    } catch (err) {
      console.error("API Error:", err);
      setError(err.message || "An error occurred fetching data");
    } finally {
      setLoading(false);
    }
  };

  // Format response for display
  const formatResponse = (data) => {
    return JSON.stringify(data, null, 2);
  };

  if (!showDebugger) return null;

  return (
    <Container
      className="api-debugger py-3 my-3"
      style={{
        position: "fixed",
        bottom: 0,
        right: 0,
        maxWidth: "500px",
        maxHeight: "50vh",
        overflow: "auto",
        zIndex: 9999,
        backgroundColor: "#f8f9fa",
        border: "1px solid #ddd",
        borderRadius: "4px",
        padding: "10px",
      }}
    >
      <Card>
        <Card.Header className="d-flex justify-content-between align-items-center">
          <h5 className="mb-0">API Debugger</h5>
          <div>
            <Button
              variant="primary"
              size="sm"
              onClick={testApi}
              disabled={loading}
              className="me-2"
            >
              {loading ? (
                <>
                  <Spinner animation="border" size="sm" className="me-1" />
                  Testing
                </>
              ) : (
                "Test API"
              )}
            </Button>
            <Button
              variant="secondary"
              size="sm"
              onClick={() => setShowDebugger(false)}
            >
              Close
            </Button>
          </div>
        </Card.Header>
        <Card.Body>
          {error && (
            <Alert variant="danger">
              <strong>Error:</strong> {error}
            </Alert>
          )}

          {apiResponse && (
            <div>
              <h6>API Response:</h6>
              <div
                className="bg-light p-2 rounded"
                style={{
                  maxHeight: "200px",
                  overflow: "auto",
                  fontSize: "12px",
                  fontFamily: "monospace",
                }}
              >
                <pre>{formatResponse(apiResponse)}</pre>
              </div>

              <h6 className="mt-3">Data Length:</h6>
              <p>
                {apiResponse.data
                  ? `${apiResponse.data.length} countries found`
                  : "No data array found"}
              </p>

              {apiResponse.data && apiResponse.data.length > 0 && (
                <>
                  <h6>First Item Structure:</h6>
                  <div
                    className="bg-light p-2 rounded"
                    style={{
                      maxHeight: "200px",
                      overflow: "auto",
                      fontSize: "12px",
                      fontFamily: "monospace",
                    }}
                  >
                    <pre>{formatResponse(apiResponse.data[0])}</pre>
                  </div>
                </>
              )}
            </div>
          )}
        </Card.Body>
      </Card>
    </Container>
  );
}

export default ApiDebugger;
