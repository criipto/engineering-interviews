open System.IO
open System.Text.Json

[<CLIMutable>]
type InputRendition = {
  dummy: string
}

let input = 
  File.ReadAllText "input.json"
  |> JsonSerializer.Deserialize<InputRendition>


printfn "%A" input