import React, { useState } from 'react';
import * as estoStyles from './guarantees-esto-styles.js';

function Esto() {
  const [amount, setAmount] = useState('');
  const [personalId, setPersonalId] = useState('');
  const [response, setResponse] = useState(null);
  const [loading, setLoading] = useState(false);

  // Payment methods state
  const [paymentMethods, setPaymentMethods] = useState([]);
  const [pmLoading, setPmLoading] = useState(false);
  const [pmError, setPmError] = useState(null);
  const [pmRawResponse, setPmRawResponse] = useState(null);

  // Env config
  const shopId = import.meta.env.VITE_ESTO_SHOP_ID;
  const secretKey = import.meta.env.VITE_ESTO_SECRET_KEY;
  const estoApiUrl = import.meta.env.VITE_ESTO_API_URL || 'https://api.esto.ee/v2/purchase';
  const estoCountry = import.meta.env.VITE_ESTO_COUNTRY || 'EE';
  const estoNotificationUrl = import.meta.env.VITE_ESTO_NOTIFICATION_URL || 'https://yourdomain.ee/esto-notify';
  const estoTestMode = import.meta.env.VITE_ESTO_TEST === 'true';

  // Payment methods endpoint
  const paymentMethodsBaseUrl = import.meta.env.VITE_ESTO_PAYMENT_METHODS_URL || 'https://api.esto.ee/v2/purchase/payment-methods';
  const paymentMethodsUrl = `${paymentMethodsBaseUrl}?country_code=${estoCountry}&test_mode=${estoTestMode ? 1 : 0}`;

  // Fetch payment methods
  const fetchPaymentMethods = async () => {
    setPmLoading(true);
    setPmError(null);
    setPaymentMethods([]);
    setPmRawResponse(null);
    try {
      const res = await fetch(paymentMethodsUrl, {
        headers: {
          'Content-Type': 'application/json'
        }
      });
      const contentType = res.headers.get('content-type');
      let data;
      if (contentType && contentType.includes('application/json')) {
        data = await res.json();
      } else {
        const text = await res.text();
        data = { error: `Unexpected response: ${text}` };
      }
      setPmRawResponse(data);
      setPaymentMethods(Array.isArray(data) ? data : []);
    } catch (e) {
      setPmError(e.message);
      setPmRawResponse({ error: e.message });
    } finally {
      setPmLoading(false);
    }
  };

  // Demo: Send a POST request to ESTO API (Estonia endpoint) with minimal required fields
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setResponse(null);

    const payload = {
      amount: parseFloat(amount),
      personal_id: personalId,
      country: estoCountry,
      notification_url: estoNotificationUrl,
      reference: 'demo-ref-' + Date.now(),
      test: estoTestMode
    };

    try {
      const res = await fetch(estoApiUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': 'Basic ' + btoa(`${shopId}:${secretKey}`)
        },
        body: JSON.stringify(payload)
      });

      // Visualize all API responses, even HTML errors
      const contentType = res.headers.get('content-type');
      let data;
      if (contentType && contentType.includes('application/json')) {
        data = await res.json();
      } else {
        const text = await res.text();
        data = { error: `Unexpected response: ${text}` };
      }
      setResponse(data);
      console.log('ESTO API response:', data);
    } catch (err) {
      setResponse({ error: err.message });
      console.error('ESTO API error:', err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={estoStyles.estoContainer}>
      <h1 style={estoStyles.estoTitle}>Apply for ESTO Hire-Purchase</h1>
      <p style={estoStyles.estoText}>
        Fill the form below to simulate an ESTO hire-purchase application. The response will be shown below.
      </p>
      <form onSubmit={handleSubmit} style={{ margin: '2em 0', width: '100%', maxWidth: 400 }}>
        <div style={{ marginBottom: 18, color: '#555' }}>
          <label>
            Purchase amount (€):<br />
            <input
              type="number"
              min="1"
              step="0.01"
              value={amount}
              onChange={e => setAmount(e.target.value)}
              required
              style={{ width: '100%', padding: '0.5em', borderRadius: 7, border: '1px solid #e5e7eb', fontSize: 16 }}
            />
          </label>
        </div>
        <div style={{ marginBottom: 18, color: '#555' }}>
          <label>
            Personal ID (Estonian):<br />
            <input
              type="text"
              value={personalId}
              onChange={e => setPersonalId(e.target.value)}
              required
              style={{ width: '100%', padding: '0.5em', borderRadius: 7, border: '1px solid #e5e7eb', fontSize: 16 }}
            />
          </label>
        </div>
        <button
          type="submit"
          style={{
            background: '#e11d48',
            color: '#fff',
            fontWeight: 700,
            fontSize: '1.1em',
            border: 'none',
            borderRadius: 8,
            padding: '0.7em 2em',
            marginTop: 12,
            width: '100%',
            cursor: loading ? 'not-allowed' : 'pointer',
            opacity: loading ? 0.7 : 1
          }}
          disabled={loading}
        >
          {loading ? 'Sending...' : 'Send Application'}
        </button>
      </form>
      {response && (
        <div style={{
          background: '#f9fafb',
          border: '1px solid #e5e7eb',
          borderRadius: 8,
          color: '#555',
          padding: '1em',
          marginTop: 18,
          width: '100%',
          maxWidth: 500,
          wordBreak: 'break-all',
        //   fontSize: 15,
          overflowX: 'auto'
        }}>
          <b>API Response:</b>
          <pre style={{ whiteSpace: 'pre-wrap', margin: 0 }}>
            {typeof response === 'object'
              ? JSON.stringify(response, null, 2)
              : String(response)}
          </pre>
        </div>
      )}

      <div style={{ margin: '2.5em 0 1em 0', width: '100%', maxWidth: 600 }}>
        <h2 style={{...estoStyles.estoTitle, fontSize: '1.2em', color: '#e11d48'}}>Available Payment Methods</h2>
        <button
          type="button"
          onClick={fetchPaymentMethods}
          style={{
            background: '#888',
            color: '#fff',
            fontWeight: 600,
            fontSize: '1em',
            border: 'none',
            borderRadius: 8,
            padding: '0.6em 1.5em',
            marginBottom: 18,
            cursor: pmLoading ? 'not-allowed' : 'pointer',
            opacity: pmLoading ? 0.7 : 1
          }}
          disabled={pmLoading}
        >
          {pmLoading ? 'Loading...' : 'Fetch Payment Methods'}
        </button>
        {pmError && (
          <div style={{ color: '#e11d48', marginBottom: 12 }}>{pmError}</div>
        )}
        {paymentMethods.length > 0 && (
          <table style={{ width: '100%', background: '#fff', borderRadius: 8, border: '1px solid #e5e7eb', fontSize: 15 }}>
            <thead>
              <tr style={{ background: '#f9fafb' }}>
                <th style={{ padding: 8, textAlign: 'left' }}>Logo</th>
                <th style={{ padding: 8, textAlign: 'left' }}>Name</th>
                <th style={{ padding: 8, textAlign: 'left' }}>Type</th>
                <th style={{ padding: 8, textAlign: 'left' }}>Test</th>
              </tr>
            </thead>
            <tbody>
              {paymentMethods.map(pm => (
                <tr key={pm.key}>
                  <td style={{ padding: 8 }}>
                    <img src={pm.logo_url} alt={pm.name} style={{ height: 32, maxWidth: 80, background: '#fff', borderRadius: 4 }} />
                  </td>
                  <td style={{ padding: 8 }}>{pm.name}</td>
                  <td style={{ padding: 8 }}>{pm.type}</td>
                  <td style={{ padding: 8 }}>{pm.is_test ? 'Yes' : 'No'}</td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
        {pmRawResponse && (
   <div style={{
          background: '#f9fafb',
          border: '1px solid #e5e7eb',
          borderRadius: 8,
          color: '#555',
          padding: '1em',
          marginTop: 18,
          width: '100%',
          maxWidth: 500,
          wordBreak: 'break-all',
        //   fontSize: 15,
          overflowX: 'auto'
        }}>
            <b>Raw API Response:</b>
            <pre style={{ whiteSpace: 'pre-wrap', margin: 0 }}>
              {typeof pmRawResponse === 'object'
                ? JSON.stringify(pmRawResponse, null, 2)
                : String(pmRawResponse)}
            </pre>
          </div>
        )}
      </div>

      <div style={{ marginTop: 32, fontSize: 13, color: '#888', maxWidth: 600 }}>
        <b>Note:</b> This is a demo form. In production, API requests must be sent from your backend server for security. Never expose your ESTO credentials in frontend code.
      </div>
    </div>
  );
}

export default Esto;
