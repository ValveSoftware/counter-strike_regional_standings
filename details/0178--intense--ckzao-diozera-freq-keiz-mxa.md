### Roster Details<br />
Team Name: Intense<br />
Roster: ckzao, diozera, fREQ, keiz, mxa<br />
Region: [Americas]( ../standings_americas.md)<br />
<br />
Global Rank: [178](../standings_global.md)<br />
Regional Rank: [48]( ../standings_americas.md)<br />
Final Rank Value:  608.6<br />
<br />
Final Rank Value (608.6) = Starting Rank Value (546.2) + Head To Head Adjustments (62.5)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.000[<sup>1</sup>](#table2)
- Bounty Collected: 0.256[<sup>2</sup>](#table1)
- Opponent Network: 0.032[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.072<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 546.2
- 400 + ( ( 0.072 - 0.000 ) / ( 0.787 - 0.000 ) ) * 1600 = 546.2


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent       | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                          |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           12 |      362 | 2024-06-07 | RED Canids     | L   | 1.000      | -            | -                | -                | -         |    -0.80 | ckzao, diozera, fREQ, keiz, mxa |
|           11 |      561 | 2024-06-03 | Galorys        | W   | 1.000      | 0.384        | 0.023 (0.009)    | 0.517 (0.199)    | 0 (0.000) |    25.37 | ckzao, diozera, fREQ, keiz, mxa |
|           10 |      639 | 2024-05-31 | Bounty Hunters | W   | 1.000      | 0.384        | 0.008 (0.003)    | 0.213 (0.082)    | 0 (0.000) |    23.94 | ckzao, diozera, fREQ, keiz, mxa |
|            9 |      682 | 2024-05-30 | inSanitY       | L   | 1.000      | -            | -                | -                | -         |    -4.39 | ckzao, diozera, fREQ, keiz, mxa |
|            8 |      716 | 2024-05-28 | FURIA Academy  | W   | 1.000      | 0.384        | 0.000 (0.000)    | 0.087 (0.034)    | 0 (0.000) |    16.35 | ckzao, diozera, fREQ, keiz, mxa |
|            7 |     1190 | 2024-05-13 | Case           | L   | 0.963      | -            | -                | -                | -         |    -5.10 | bsd, ckzao, diozera, fREQ, mxa  |
|            6 |     1212 | 2024-05-12 | ODDIK          | L   | 0.957      | -            | -                | -                | -         |    -2.84 | bsd, ckzao, diozera, fREQ, mxa  |
|            5 |     1287 | 2024-05-09 | RED Canids     | L   | 0.937      | -            | -                | -                | -         |    -0.92 | bsd, ckzao, diozera, fREQ, mxa  |
|            4 |     1316 | 2024-05-08 | Yawara         | W   | 0.929      | 0.435        | 0.000 (0.000)    | 0.020 (0.008)    | 0 (0.000) |    13.17 | bsd, ckzao, diozera, fREQ, mxa  |
|            3 |     1352 | 2024-05-06 | RED Canids     | L   | 0.915      | -            | -                | -                | -         |    -0.84 | bsd, ckzao, diozera, fREQ, mxa  |
|            2 |     2618 | 2024-03-13 | Fluxo          | L   | 0.557      | -            | -                | -                | -         |    -0.83 | bsd, ckzao, diozera, mxa, roz   |
|            1 |     3282 | 2024-02-14 | Fluxo          | L   | 0.371      | -            | -                | -                | -         |    -0.64 | bsd, ckzao, diozera, mxa, roz   |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($0.00)
- Divide that value by the 5th highest value among all rosters ($300,710.22)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
