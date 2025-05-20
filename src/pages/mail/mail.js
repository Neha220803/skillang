import React, { useState, useEffect, useRef } from 'react';
import axios from 'axios';
import { Button, Card, Form, Container, Row, Col, Alert, Spinner, Table } from 'react-bootstrap';
import Papa from 'papaparse';

const Mailer = () => {
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [authUsername, setAuthUsername] = useState('');
    const [authPassword, setAuthPassword] = useState('');
    const [authError, setAuthError] = useState('');

    const [senderEmail, setSenderEmail] = useState('');
    const [templateKey, setTemplateKey] = useState('');
    const [templates, setTemplates] = useState([]);
    const [file, setFile] = useState(null);
    const [recipients, setRecipients] = useState([]);
    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');
    const [loading, setLoading] = useState(false);
    const [templatesLoading, setTemplatesLoading] = useState(false);

    const fileInputRef = useRef(null);

    useEffect(() => {
        if (!isAuthenticated) return;

        const fetchTemplates = async () => {
            setTemplatesLoading(true);
            try {
                const response = await axios.get('https://cms.skillang.com/api/mail-templates');

                const rawTemplates = response.data.data;

                const formatted = rawTemplates.map((item) => ({
                    name: item.Template_Name,
                    key: item.key,
                }));

                setTemplates(formatted);
            } catch (err) {
                console.error("Failed to fetch templates:", err);
                setError("Failed to load email templates from CMS.");
            } finally {
                setTemplatesLoading(false);
            }
        };

        fetchTemplates();
    }, [isAuthenticated]);

    const handleFileChange = (e) => {
        const selectedFile = e.target.files[0];
        setFile(selectedFile);

        if (!selectedFile) {
            setRecipients([]);
            return;
        }

        Papa.parse(selectedFile, {
            header: true,
            skipEmptyLines: true,
            complete: (result) => {
                const firstRow = result.data[0] || {};
                if (!firstRow.email || !firstRow.username) {
                    setError("CSV file must contain 'email' and 'username' columns.");
                    setRecipients([]);
                    return;
                }

                const formatted = result.data
                    .filter(row => row.email && row.email.trim() !== '')
                    .map(({ email, username }) => ({
                        email: email.trim(),
                        username: username?.trim() || '',
                    }));

                setRecipients(formatted);
                if (formatted.length === 0) {
                    setError("No valid email addresses found in CSV file.");
                } else {
                    setError('');
                }
            },
            error: (err) => {
                console.error("Error parsing CSV:", err.message);
                setError("Failed to parse CSV file. Please check the format.");
                setRecipients([]);
            },
        });
    };

    const handleSend = async () => {
        if (!senderEmail) {
            setError('Sender email is required.');
            return;
        }

        if (!templateKey) {
            setError('Please select an email template.');
            return;
        }

        if (recipients.length === 0) {
            setError('Please upload a CSV with at least one valid recipient.');
            return;
        }

        try {
            setLoading(true);
            setError('');
            setSuccess('');

            const response = await axios.post('https://skillang.com/api/send-template', {
                senderEmail,
                templateKey,
                recipients,
            });

            setSuccess(response.data.message || 'Emails sent successfully!');

            // Clear all fields after success
            setSenderEmail('');
            setTemplateKey('');
            setFile(null);
            setRecipients([]);
            setError('');

            // Clear file input UI
            if (fileInputRef.current) {
                fileInputRef.current.value = '';
            }
        } catch (err) {
            console.error("Error sending emails:", err);
            setError(err.response?.data?.message || 'Failed to send emails. Please try again.');
        } finally {
            setLoading(false);
        }
    };

    const handleLogin = () => {
        if (authUsername === 'mailagent1' && authPassword === 'lokskill123') {
            setIsAuthenticated(true);
            setAuthError('');
        } else {
            setAuthError('Invalid username or password.');
        }
    };

    if (!isAuthenticated) {
        return (
            <Container className="mt-5">
                <Row className="justify-content-md-center">
                    <Col md={6}>
                        <Card>
                            <Card.Header as="h5">Restricted Access</Card.Header>
                            <Card.Body>
                                {authError && <Alert variant="danger">{authError}</Alert>}
                                <Form>
                                    <Form.Group className="mb-3" controlId="authUsername">
                                        <Form.Label>Username</Form.Label>
                                        <Form.Control
                                            type="text"
                                            value={authUsername}
                                            onChange={(e) => setAuthUsername(e.target.value)}
                                        />
                                    </Form.Group>

                                    <Form.Group className="mb-3" controlId="authPassword">
                                        <Form.Label>Password</Form.Label>
                                        <Form.Control
                                            type="password"
                                            value={authPassword}
                                            onChange={(e) => setAuthPassword(e.target.value)}
                                        />
                                    </Form.Group>

                                    <Button variant="primary" onClick={handleLogin}>
                                        Login
                                    </Button>
                                </Form>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>
        );
    }

    return (
        <Container className="mt-5 mb-5">
            <Row className="justify-content-md-center">
                <Col md={8}>
                    <Card>
                        <Card.Header as="h5">Email Campaign</Card.Header>
                        <Card.Body>
                            <Form>
                                {error && <Alert variant="danger">{error}</Alert>}
                                {success && <Alert variant="success">{success}</Alert>}

                                <Form.Group controlId="formSenderEmail" className="mb-3">
                                    <Form.Label>Sender Email</Form.Label>
                                    <Form.Control
                                        type="email"
                                        value={senderEmail}
                                        onChange={(e) => setSenderEmail(e.target.value)}
                                        placeholder="Enter sender email (must be verified in ZeptoMail)"
                                    />
                                    <Form.Text className="text-muted">
                                        This email must be verified in your ZeptoMail account.
                                    </Form.Text>
                                </Form.Group>

                                <Form.Group controlId="formTemplate" className="mb-3">
                                    <Form.Label>Select Email Template</Form.Label>
                                    <Form.Select
                                        value={templateKey}
                                        onChange={(e) => setTemplateKey(e.target.value)}
                                        disabled={templatesLoading}
                                    >
                                        <option value="">-- Choose a template --</option>
                                        {templates.map((tpl) => (
                                            <option key={tpl.key} value={tpl.key}>{tpl.name}</option>
                                        ))}
                                    </Form.Select>
                                    {templatesLoading && (
                                        <div className="text-center mt-2">
                                            <Spinner animation="border" size="sm" /> Loading templates...
                                        </div>
                                    )}
                                </Form.Group>

                                <Form.Group controlId="formFile" className="mb-3">
                                    <Form.Label>Upload Recipients CSV</Form.Label>
                                    <Form.Control
                                        type="file"
                                        accept=".csv"
                                        onChange={handleFileChange}
                                        ref={fileInputRef}
                                    />
                                    <Form.Text className="text-muted">
                                        CSV must include 'email' and 'username' columns.
                                    </Form.Text>
                                </Form.Group>

                                {recipients.length > 0 && (
                                    <div className="mt-4">
                                        <h6>Recipients Preview ({recipients.length} total):</h6>
                                        <div style={{ maxHeight: '200px', overflowY: 'auto' }}>
                                            <Table striped bordered hover size="sm">
                                                <thead>
                                                    <tr>
                                                        <th>#</th>
                                                        <th>Email</th>
                                                        <th>Username</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    {recipients.slice(0, 10).map((row, index) => (
                                                        <tr key={index}>
                                                            <td>{index + 1}</td>
                                                            <td>{row.email}</td>
                                                            <td>{row.username}</td>
                                                        </tr>
                                                    ))}
                                                    {recipients.length > 10 && (
                                                        <tr>
                                                            <td colSpan="3" className="text-center">
                                                                ...and {recipients.length - 10} more
                                                            </td>
                                                        </tr>
                                                    )}
                                                </tbody>
                                            </Table>
                                        </div>
                                    </div>
                                )}

                                <Button
                                    className="mt-4 w-100"
                                    variant="primary"
                                    onClick={handleSend}
                                    disabled={loading || recipients.length === 0}
                                >
                                    {loading ? (
                                        <>
                                            <Spinner animation="border" size="sm" /> Sending Emails...
                                        </>
                                    ) : (
                                        `Send Emails to ${recipients.length} Recipients`
                                    )}
                                </Button>
                            </Form>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
    );
};

export default Mailer;
