import Button from "./Button";

const ButtonList = () => {
  return (
    <div className=" hidden sm:flex justify-center ">
      <Button name="All" />
      <Button name="Music" />
      <Button name="Mixes" />
      <Button name="TMKOC" />
      <Button name="Sports" />
      <Button name="News" />
      <Button name="Romantic" />
      <Button name="Cricket" />
      <Button name="JavaScript" />

      <Button name="Recent" />
    </div>
  );
};

export default ButtonList;
