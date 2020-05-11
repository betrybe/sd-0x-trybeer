import React from 'react';
import { useSelector } from 'react-redux';

import { Form, Input } from '@rocketseat/unform';

export default function Profile() {
  const profile = useSelector((state) => state.user.profile);

  return (
    <div>
      <Form initialData={profile}>
        <Input name="name" disabled={true} />
        <Input name="email" disabled={true} />
      </Form>
    </div>
  );
}
