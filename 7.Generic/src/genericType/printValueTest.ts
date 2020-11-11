import { printValue, Valuable } from './printValue';

printValue(new Valuable<number>(1));
printValue(new Valuable<boolean>(true));
printValue(new Valuable<string>('neo'));
printValue(new Valuable<string[]>(['neo1','neo2','neo3']));

printValue(new Valuable(1));
printValue(new Valuable(true));
printValue(new Valuable('neo'));
printValue(new Valuable(['neo1','neo2','neo3']));