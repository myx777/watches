// тип данных, которые полчает компонент WatchesForm
import { WatchProps } from "../../type/WatchProps";

export type WatchesFormProps = {
  onAddWatch: (watch: WatchProps) => void;
};
