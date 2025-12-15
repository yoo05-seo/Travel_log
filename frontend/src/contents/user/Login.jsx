import React, { useState } from 'react'
import { Button, Card, Form } from 'react-bootstrap'


const Login = () => {
    const [id, setId] = useState('');
    const [pw, setPw] = useState('');
    const [loading, setLoading] = useState(''); 
    return (
        <Card className="p-3">
            <Form.Group className="mb-3">
                <Form.Label>아이디</Form.Label>
                <Form.Control
                    value={id}
                    type='id'
                    onChange={(e) => setId(e.target.value)}
                    placeholder='아이디를 입력해주세요'>
                    </Form.Control>
            </Form.Group>
            <Form.Group className="mb-3">
                <Form.Label>비밀번호</Form.Label>
                <Form.Control
                    value={pw}
                    type='pasword'
                    onChange={(e) => setPw(e.target.value)}
                    placeholder='비밀번호를 입력해주세요.'>
                    </Form.Control>
            </Form.Group>
            <Button type='submit' className='w-100' disabled={loading}>
                로그인
            </Button>
        </Card>
    )
}

export default Login