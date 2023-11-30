function converterData(dataString: string): string {
  const data = new Date(dataString);
  const options: Intl.DateTimeFormatOptions = {
    day: "2-digit",
    month: "short",
    year: "numeric",
  };
  const formattedDate = data.toLocaleDateString("pt-BR", options);
  return formattedDate.replace(" de", "").replace(" de ", " ");
}

export default converterData;
