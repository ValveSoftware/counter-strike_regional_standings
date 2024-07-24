### Roster Details<br />
Team Name: ex-GUILD fe<br />
Roster: Ann4, D7, KiTKaT, Nea, pullox<br />
Region: [Europe]( ../standings_europe.md)<br />
<br />
Global Rank: [166](../standings_global.md)<br />
Regional Rank: [105]( ../standings_europe.md)<br />
Final Rank Value:  674.0<br />
<br />
Final Rank Value (674.0) = Starting Rank Value (667.8) + Head To Head Adjustments (6.1)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.287[<sup>1</sup>](#table2)
- Bounty Collected: 0.234[<sup>2</sup>](#table1)
- Opponent Network: 0.008[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.132<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 667.8
- 400 + ( ( 0.132 - 0.000 ) / ( 0.790 - 0.000 ) ) * 1600 = 667.8


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent          | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                        |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           11 |     1576 | 2024-05-18 | NIP Impact        | L   | 0.753      | -            | -                | -                | -         |    -9.86 | Ann4, D7, KiTKaT, Nea, pullox |
|           10 |     2247 | 2024-04-21 | Fearless Cheetahs | W   | 0.574      | 0.331        | 0.004 (0.001)    | 0.079 (0.015)    | 0 (0.000) |     9.97 | Ann4, D7, KiTKaT, Nea, pullox |
|            9 |     2277 | 2024-04-20 | Let Her Cook      | L   | 0.566      | -            | -                | -                | -         |    -3.54 | Ann4, D7, KiTKaT, Nea, pullox |
|            8 |     2320 | 2024-04-19 | Imperial fe       | L   | 0.560      | -            | -                | -                | -         |    -1.72 | Ann4, D7, KiTKaT, Nea, pullox |
|            7 |     2577 | 2024-04-10 | NIP Impact        | W   | 0.500      | 0.331        | 0.007 (0.001)    | 0.216 (0.036)    | 0 (0.000) |     9.31 | Ann4, D7, KiTKaT, Nea, pullox |
|            6 |     2715 | 2024-04-06 | NIP Impact        | L   | 0.472      | -            | -                | -                | -         |    -6.51 | Ann4, D7, KiTKaT, Nea, pullox |
|            5 |     2899 | 2024-03-28 | BIG EQUIPA        | W   | 0.414      | 0.331        | 0.022 (0.003)    | 0.186 (0.025)    | 0 (0.000) |     8.65 | Ann4, D7, KiTKaT, Nea, pullox |
|            4 |     3025 | 2024-03-21 | Astralis W        | W   | 0.367      | 0.331        | 0.002 (0.000)    | 0.027 (0.003)    | 0 (0.000) |     5.19 | Ann4, D7, KiTKaT, Nea, pullox |
|            3 |     3206 | 2024-03-13 | ENCE Athena       | L   | 0.314      | -            | -                | -                | -         |    -5.20 | Ann4, D7, KiTKaT, Nea, pullox |
|            2 |     3636 | 2024-02-24 | BIG EQUIPA        | L   | 0.192      | -            | -                | -                | -         |    -2.08 | Ann4, D7, KiTKaT, Nea, pullox |
|            1 |     3874 | 2024-02-14 | Spirit fe         | W   | 0.128      | 0.143        | 0.004 (0.000)    | 0.073 (0.001)    | 0 (0.000) |     1.93 | Ann4, D7, KiTKaT, Nea, pullox |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($917.84)
- Divide that value by the 5th highest value among all rosters ($276,334.18)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
