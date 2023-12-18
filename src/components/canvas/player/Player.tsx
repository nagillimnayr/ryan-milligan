import { MachineContext } from '@/components/dom/providers/machine-provider';
import { Sphere } from '@react-three/drei';
import { type RapierRigidBody, RigidBody } from '@react-three/rapier';
import { useEffect, useRef } from 'react';

export const Player = () => {
  const rootActor = MachineContext.useActorRef();
  const playerRef = useRef<RapierRigidBody>(null!);

  useEffect(() => {
    const player = playerRef.current;
    if (!player) return;
    rootActor.send({ type: 'ASSIGN_PLAYER', player });
  }, [rootActor]);

  return (
    <RigidBody ref={playerRef}>
      <Sphere position-y={2} castShadow receiveShadow>
        <meshStandardMaterial color={'red'} />
      </Sphere>
    </RigidBody>
  );
};
